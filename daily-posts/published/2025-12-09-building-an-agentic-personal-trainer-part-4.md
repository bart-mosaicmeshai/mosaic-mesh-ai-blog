---
date: 2025-12-09
category: Building
project: agentic-personal-trainer
title: "Building an Agentic Personal Trainer - Part 4: Garmin Integration"
slug: building-an-agentic-personal-trainer-part-4-garmin-integration
tags: api integration data-sync
published: true
---

# Building an Agentic Personal Trainer - Part 4: Garmin Integration

*This is Part 4 of a series on building an agentic personal trainer. Read [Part 1](https://www.mosaicmeshai.com/blog/building-an-agentic-personal-trainer-part-1-architecture-and-philosophy) for architecture, [Part 2](https://www.mosaicmeshai.com/blog/building-an-agentic-personal-trainer-part-2-the-tool-system) for tools, and [Part 3](https://www.mosaicmeshai.com/blog/building-an-agentic-personal-trainer-part-3-the-system-prompt) for the system prompt.*

## The Hook

A personal trainer who doesn't know your recent workouts isn't very personal. The agent needed to connect to Garmin Connect—where my watch, bike computer, and other services like Wahoo SYSTM sync workout data automatically.

## The Story

The [`garmin-connect`](https://www.npmjs.com/package/garmin-connect) npm package handles authentication. On every chat startup, the system syncs the last 14 days ([garmin.js:210-235](https://github.com/bart-mosaicmeshai/agentic-personal-trainer/blob/main/src/integrations/garmin.js#L210-L235)):

```javascript
const client = new GarminConnect({
  username: process.env.GARMIN_EMAIL,
  password: process.env.GARMIN_PASSWORD
});

await client.login();
const activities = await client.getActivities(0, 14);
```

![Garmin sync flow](../assets/agentic-personal-trainer/agentic-personal-trainer-part-4.jpg)

*Garmin activities flow from watch to API to normalized SQLite records*

Garmin's activity types are granular—`lap_swimming`, `road_biking`, `virtual_ride`. This required a mapping function to normalize them ([garmin.js:18-48](https://github.com/bart-mosaicmeshai/agentic-personal-trainer/blob/main/src/integrations/garmin.js#L18-L48)):

```javascript
function mapGarminActivityType(garminType) {
  const mapping = {
    'running': 'run',
    'cycling': 'bike',
    'road_biking': 'bike',
    'virtual_ride': 'bike',
    'lap_swimming': 'swim',
    'open_water_swimming': 'swim',
    'strength_training': 'strength',
    'yoga': 'yoga',
    'walking': 'walk',
    'hiking': 'hike'
  };
  // Pattern matching for partial matches
  for (const [key, value] of Object.entries(mapping)) {
    if (typeStr.includes(key)) return value;
  }
  return 'other';
}
```

Each activity comes with duration (in seconds), distance (in meters), heart rate, and calories. The system converts to minutes and kilometers, then builds a notes string with the useful metadata ([garmin.js:136-152](https://github.com/bart-mosaicmeshai/agentic-personal-trainer/blob/main/src/integrations/garmin.js#L136-L152)). This is a prototype simplification—pool swims are typically measured in yards or meters, not kilometers, which would be a good enhancement for a production system:

```javascript
const notes = [];
if (activity.activityName) notes.push(activity.activityName);
if (activity.averageHR) notes.push(`Avg HR: ${activity.averageHR}`);
if (activity.maxHR) notes.push(`Max HR: ${activity.maxHR}`);
if (activity.calories) notes.push(`${activity.calories} cal`);
```

The sync runs silently at chat startup. If Garmin is unreachable (rate limits, auth issues), it gracefully falls back to existing data with a warning. The agent doesn't need to know the sync happened—it just calls `get_recent_workouts` and gets fresh data.

## The Reflection

Auto-sync on startup was the right call for this prototype. Manual sync commands add friction. The agent should just *know* what you've been doing without you having to tell it. Refinement to this sync process is another good area of improvement for this prototype.

But it surfaced a new problem: I use both a Garmin watch and Wahoo SYSTM for indoor training. Same workout, two records. In some cases, the agent thinks I'm training twice as much as I am.

That duplicate detection problem is next.

---

**Part 4 of 9** in the Agentic Personal Trainer series.

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
