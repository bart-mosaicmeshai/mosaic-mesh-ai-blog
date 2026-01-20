---
date: 2025-12-10
category: Building
project: agentic-personal-trainer
title: "Building an Agentic Personal Trainer - Part 5: Smart Duplicate Detection"
slug: building-an-agentic-personal-trainer-part-5-smart-duplicate-detection
tags: deduplication data-quality fuzzy-matching data-integration
published: true
---

# Building an Agentic Personal Trainer - Part 5: Smart Duplicate Detection

*This is Part 5 of a series on building an agentic personal trainer. Read [Part 1](https://www.mosaicmeshai.com/blog/building-an-agentic-personal-trainer-part-1-architecture-and-philosophy) for architecture, [Part 2](https://www.mosaicmeshai.com/blog/building-an-agentic-personal-trainer-part-2-the-tool-system) for tools, [Part 3](https://www.mosaicmeshai.com/blog/building-an-agentic-personal-trainer-part-3-the-system-prompt) for the system prompt, and [Part 4](https://www.mosaicmeshai.com/blog/building-an-agentic-personal-trainer-part-4-garmin-integration) for Garmin integration.*

## The Hook

When I do an indoor bike workout, my bike computer records it. So does [Wahoo SYSTM](https://support.wahoofitness.com/hc/en-us/sections/5183647197586-SYSTM). Then both the bike computer and SYSTM sync to [Garmin Connect](https://connect.garmin.com/). Now I have two records of the same ride. My agent thinks I'm training twice as much as I am.

## The Story

The Garmin sync (from [Part 4](https://www.mosaicmeshai.com/blog/building-an-agentic-personal-trainer-part-4-garmin-integration)) handles basic sync integrity—don't re-import the same Garmin activity twice. But that doesn't solve the real problem: two *different* Garmin activities for the same workout.

The deduplication system uses 2 layers in [garmin.js](https://github.com/bart-mosaicmeshai/agentic-personal-trainer/blob/main/src/integrations/garmin.js):

![2-layer deduplication](../assets/agentic-personal-trainer/agentic-personal-trainer-part-5.jpg)

*Two layers of duplicate detection: fuzzy matching and quality scoring*

**Layer 1: Same-day [fuzzy matching](https://en.wikipedia.org/wiki/Approximate_string_matching)** ([garmin.js:64-79](https://github.com/bart-mosaicmeshai/agentic-personal-trainer/blob/main/src/integrations/garmin.js#L64-L79)). Find workouts with same date, same type, and duration within 5 minutes. This catches the bike computer + SYSTM scenario—different Garmin activity IDs, but clearly the same workout.

```javascript
function findPotentialDuplicates(date, workoutType, durationMinutes) {
  return db.prepare(`
    SELECT * FROM completed_workouts
    WHERE date = ? AND workout_type = ?
      AND ABS(duration_minutes - ?) <= 5
  `).all(date, workoutType, durationMinutes);
}
```

**Layer 2: Quality scoring** ([garmin.js:84-102](https://github.com/bart-mosaicmeshai/agentic-personal-trainer/blob/main/src/integrations/garmin.js#L84-L102)). When duplicates exist, keep the better one. The scoring function prefers data completeness and direct device recordings over third-party syncs:

```javascript
function scoreWorkout(workout) {
  let score = 0;
  if (workout.duration_minutes) score += 10;
  if (workout.distance) score += 10;
  if (workout.notes) score += 5;

  // Prefer direct Garmin device over third-party syncs
  const notes = workout.notes || '';
  if (notes.toLowerCase().includes('wahoo') ||
      notes.toLowerCase().includes('systm')) {
    score -= 5;
  }
  if (notes.toLowerCase().includes('avg hr')) score += 3;
  if (notes.toLowerCase().includes('cal')) score += 2;

  return score;
}
```

When a new workout arrives and potential duplicates exist, the system compares scores. If the new one is better, it deletes the old record and imports the new one. If the existing record is better, it skips the import.

This works for the prototype, but a production system would need further refinement. The hard-coded rules (5-minute tolerance, specific scoring weights) handle common cases but could miss edge cases. Could an LLM identify duplicates more intelligently? Instead of rigid rules, the system could ask: "Here are two workouts—are these the same session?" Worth exploring.

## The Reflection

Deduplication is one of those invisible features. When it works, you just don't see duplicates. But when it's wrong, your training load calculations are garbage.

Quality scoring lets the system make judgment calls without user intervention. A 60-minute bike ride with heart rate, power, respiration rate, and cadence data from my bike computer beats a 60-minute bike ride synced from Wahoo SYSTM missing some of this data. The system knows which one to keep.

Next: how the agent remembers conversations and learns preferences over time.

---

**Part 5 of 9** in the Agentic Personal Trainer series.

---

## Project

**agentic-personal-trainer** - [View on GitHub](https://github.com/bart-mosaicmeshai/agentic-personal-trainer)

---

## Meta

- **Category**: Building (Creating something new)
- **Project**: agentic-personal-trainer
- **Word count target**: 150-300 words
- **Writing time**: ~15-20 minutes
- **Inspiration**: Simon Willison's daily blog, Seth Godin's short posts

## Publishing Checklist

- [ ] Hook is compelling and specific
- [ ] Story shows real work, not just summary
- [ ] Reflection adds insight or learning
- [ ] Post is 150-300 words
- [ ] Code examples (if any) are formatted and explained
- [ ] GitHub links to specific code lines
- [ ] Image generated and added
- [ ] ASCII diagrams removed (kept only as image reference)
- [ ] Links to relevant resources
- [ ] Proofread for typos
- [ ] Update published: true in frontmatter

---

*This post is part of my daily AI journey blog at [Mosaic Mesh AI](https://www.mosaicmeshai.com/blog). Building in public, learning in public, sharing the messy middle of AI development.*
