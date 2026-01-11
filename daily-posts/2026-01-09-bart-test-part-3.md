---
date: 2026-01-09
category: Learning
project: bart-test
title: "The Bart Test - Part 3: The Zoo-Not-Duck Problem"
slug: bart-test-part-3-the-zoo-not-duck-problem
tags: hybrid-evaluation ai-judges human-evaluation llm-benchmarking evaluation-methodology
published: true
---

# The Bart Test - Part 3: The Zoo-Not-Duck Problem

*This is Part 3 of the Bart Test series. Read [Part 1](/blog/bart-test-part-1-when-ai-does-its-homework-too-well) for the initial experiment and [Part 2](/blog/bart-test-part-2-testing-the-overthinking-hypothesis) for the constraint tests.*

![The zoo-not-duck problem: AI outputs create overwhelming noise when clear focus is needed](../assets/bart-test/bart-test-part-3-zoo-not-duck.jpg)

## The Hook

When I asked what made the AI output feel unnatural, Teen #1 said:

> "Just didn't seem like very effective communication. It's like if you are trying to paint a picture of a duck and you paint a picture of a zoo with a tiny duck exhibit in the corner. **Too much noise.**"

This metaphor captured the core problem.

## The Story

I ran [Experiment 03](https://github.com/bart-mosaicmeshai/bart-test/blob/main/experiments/03_ai_judges.py) using Claude Sonnet 4.5 to evaluate all five outputs from [Experiment 01](/blog/bart-test-part-1-when-ai-does-its-homework-too-well) and [Experiment 02](/blog/bart-test-part-2-testing-the-overthinking-hypothesis)—the baseline from Experiment 01, plus the four variations from Experiment 02. The top two candidates as evaluated by Claude Sonnet 4.5 were then sent to my teenage judges for validation.

**The Experiment 03 AI judge results** ([full analysis](https://github.com/bart-mosaicmeshai/bart-test/blob/main/results/03_experiment_runs/03_ai_judges_20251215_130645.json)):
1. Lower Temp (0.5): 5.25/10 ⭐
2. Higher Temp (1.0): 5.00/10
3. Baseline / Constraints / Style Anchor: 4.50/10 (tied)

**The Experiment 03 human judge results** (3 teens via text—I recruited a third judge for this round, [archived reviews](https://github.com/bart-mosaicmeshai/bart-test/blob/main/results/archive/human_reviews_20251217.md)):
- **Winner**: Lower Temp (0.5) - 2 out of 3 votes
- **Second**: Baseline (0.7) - 1 vote

Lower temperature won—not because it was great (overall score of 5.25/10 is mediocre), but because it was the least bad. All stories had the same core problem: **"trying too hard with slang."**

![Experiment 03's two-stage hybrid workflow: AI judges pre-screen, humans validate the top candidates](../assets/bart-test/bart-test-part-3-hybrid-workflow.jpg)

**What the teens taught me:**

**1. The "Too Much Noise" Problem**
The AI isn't failing at slang—it's failing at **focus**. It's treating the prompt like a checklist:
- ✅ Gen-Alpha slang? Used 47 terms
- ✅ Emojis? Added 93 of them
- ✅ Friday deploy story? It's in there somewhere

Result: A zoo when you wanted a duck.

**2. Slang Has a Half-Life**
Teen #3 called out specific terms as dated:
- ❌ **"no cap"** - already feels old
- ⚠️ **"vibe"** - "isn't used but still sometimes just not as much"

This was December 2025. These terms peaked maybe 6-12 months ago. Language moves FAST at the Gen-Alpha layer.

**3. Emoji Currency Matters**
Teen #3 gave unprompted feedback on emojis:
- ✅ **Core set**: 😂😭🔥🥀
- ❌ **Overusing uncommon emojis** - The AI pulled from the full Unicode set

Then added: "The dead rose [🥀] has gotten more popular." I had no idea.

**4. Blending > Density**
Teen #3: "Just the way you say it, still keep some like English in there if you know what I mean. Not everything has to be slang but keep it in there too. Because then it seems like you're trying too hard."

Real people blend [registers](https://en.wikipedia.org/wiki/Register_(sociolinguistics)) (levels of formality) fluidly—slang here, normal English there, switching as context demands. The AI seems to treat every sentence as an opportunity to insert slang, rather than blending naturally.

## The Reflection

Experiment 03's hybrid AI/human evaluation approach showed signs of alignment. AI judges and human judges picked the same winner, showing that:
- ✅ AI judges can pre-screen quickly
- ✅ Humans provide the ground truth
- ✅ Together, they can scale better than human judges alone

But the key finding: **"Trying too hard" is a consistent, identifiable pattern.** All three teens independently spotted it. This isn't subjective vibes—it's a reproducible signal about slang density, [register](https://en.wikipedia.org/wiki/Register_(sociolinguistics)) (formality level) switching, and optimization for "doing the task" vs. "sounding natural."

Traditional benchmarks focused on accuracy or task completion wouldn't catch this. You need actual teenagers to catch it.

These insights were fascinating. So I decided next to test frontier models—GPT, Claude, Gemini (rather than smaller open-weight models like OLMo3)—to see if they could avoid the "trying too hard" problem. I needed to know if this was a real challenge or a solved problem. Then my teens stopped responding. Tune in for parts 4-6 to find out what happens next.

---

**Part 3 of 9** in the Bart Test series.

---

## Project
**bart-test** - [View on GitHub](https://github.com/bart-mosaicmeshai/bart-test)

## Code References
- [AI Judges Script](https://github.com/bart-mosaicmeshai/bart-test/blob/main/experiments/03_ai_judges.py) - Claude evaluation code
- [Human Reviews](https://github.com/bart-mosaicmeshai/bart-test/tree/main/results/archive) - Teen feedback data

---

*This post is part of my AI journey blog at [Mosaic Mesh AI](https://www.mosaicmeshai.com/blog). Building in public, learning in public, sharing the messy middle of AI development.*
