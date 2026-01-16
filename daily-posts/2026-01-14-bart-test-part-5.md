---
date: 2026-01-14
category: Building
project: bart-test
title: "The Bart Test - Part 5: Redesigning From Scratch"
slug: bart-test-part-5-redesigning-from-scratch
tags: methodology pivot research-design validation
published: true
---

# The Bart Test - Part 5: Redesigning From Scratch

*This is Part 5 of the Bart Test series. Read [Part 4](/blog/bart-test-part-4-when-my-teen-judges-ghosted-me) for why the first approach failed.*

## The Hook

After my teens ghosted the frontier model evaluation, I sat with a choice: give up on this whole thing, or try again.

The doubt was real. Maybe the Bart Test would never work. Maybe asking teenagers to evaluate AI-generated slang was fundamentally flawed. But I couldn't shake the insights from [Part 3](/blog/bart-test-part-3-the-zoo-not-duck-problem)—the "zoo not duck" problem, the slang half-life, the "trying too hard" pattern. Those felt real.

So I decided to try again. Not because I was confident it would work, but because I wasn't ready to give up.

![The iteration process: from chaos and doubt through collaborative design to a clean structured solution](../assets/bart-test/bart-test-part-5-iteration-process-v2.jpg)

## The Story

I opened a Claude Code session and started iterating on a new design. The problem was clear: **1,500-word technical stories about Friday production deploys were too long, too specialized, and too much work.**

What if I made everything smaller?

**Shorter scenarios.** Instead of 500-1,500 words, what about 50-100 words? Something a teen could read in 10-20 seconds, not 10-20 minutes.

**Relatable scenarios.** Instead of technical deployment stories, what about messages teens actually write? I explored a number of options and landed on these two: 
- "Text your group chat about what happened at lunch today"
- "Hype up your friend who just got a good grade"

These aren't abstract. Teens write messages like these every day. They'd know intuitively if an AI's version felt off.

**Paper evaluation sheets.** I then spent time iterating with Claude Code on an HTML format that I could print and give to the teen judges to fill out and write comments in margins. No digital forms, no clunky text message exchanges. The form would have IDs included in it that I could use to connect back to the specific experiemntal item to ensure that the responses would be connect to the correct model and experiment run. 

**Batch judging.** I also iterated on the idea that instead of asking teens to evaluate every time I tested a new model, what if I ran experiments quarterly? Test models as they release, accumulate outputs, then do one judging session every N-number of months. Make it an event, not a burden. I haven't actually implemeted this quarterly event yet, but it was part of my ideation and iteration that led to Experiment 04. 

I built [Experiment 04](https://github.com/bart-mosaicmeshai/bart-test/tree/main/experiments/04_new_prompts_test_frontier.py) and tested 5 models with the new prompts:
- GPT-5.2
- Claude Opus 4.5
- Llama 3.1 8B
- Qwen3 14B
- OLMo 3 32B

This generated 10 outputs (5 models × 2 scenarios). I then worked with Claude Code to create the first [evaluation sheet](https://github.com/bart-mosaicmeshai/bart-test/blob/main/evaluation_sheets/20251228/evaluation_sheet_20251228.html) using this new approach. 

I printed two copies (front/back) and handed the sheets to two teen judges.

Then I waited.

## The Reflection

Within 24 hours, both judges returned their completed sheets.

Judge #1 said: **"This sheet was much easier to do than the previous versions we tried."**

That one line hit differently. It wasn't enthusiasm—it was relief. The new approach worked because it respected their time and made the task actually doable.

![Before and after: from 1,500-word stories with text message feedback taking 50 minutes to 50-100 word scenarios with paper sheets taking 10 minutes](../assets/bart-test/bart-test-part-5-before-after-v4.jpg)

The key insight: **Design around the constraint instead of fighting it.** Cultural fluency evaluation requires cultural experts (teenagers), which is inherently hard. But I could make it less frequent (quarterly vs. per-model), more efficient (batch vs. individual), more relatable (scenarios they experience), and lower friction (paper vs. digital).

This approach was inspired by how Simon Willison's pelican-on-a-bike test works—simple, quick to judge—but adapted to the different problem of cultural fluency evaluation.

The process redesign worked. The judges engaged with it. I got [detailed feedback](https://github.com/bart-mosaicmeshai/bart-test/blob/main/evaluation_sheets/20251228/completed_ratings_20251228.json) with scores and written comments. The methodology was showing sighs of being more sustainable.

But what did the actual results reveal? That's where things got interesting.

---

**Part 5 of 9** in the Bart Test series.

---

## Project
**bart-test** - [View on GitHub](https://github.com/bart-mosaicmeshai/bart-test)

## Code References
- [Experiment 04 - Frontier Models](https://github.com/bart-mosaicmeshai/bart-test/blob/main/experiments/04_new_prompts_test_frontier.py) - GPT-5.2, Claude, Gemini
- [Experiment 04 - Llama](https://github.com/bart-mosaicmeshai/bart-test/blob/main/experiments/04_new_prompts_test_llama.py) - Local LM Studio
- [Experiment 04 - Qwen](https://github.com/bart-mosaicmeshai/bart-test/blob/main/experiments/04_new_prompts_test_qwen.py) - Thinking model
- [Experiment 04 - OLMo](https://github.com/bart-mosaicmeshai/bart-test/blob/main/experiments/04_new_prompts_test_olmo.py) - Reasoning model
- [Evaluation Sheet HTML](https://github.com/bart-mosaicmeshai/bart-test/blob/main/evaluation_sheets/20251228/evaluation_sheet_20251228.html) - Paper format used
- [Completed Ratings](https://github.com/bart-mosaicmeshai/bart-test/blob/main/evaluation_sheets/20251228/completed_ratings_20251228.json) - Full results with teen feedback

---

*This post is part of my AI journey blog at [Mosaic Mesh AI](https://www.mosaicmeshai.com/blog). Building in public, learning in public, sharing the messy middle of AI development.*
