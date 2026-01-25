---
date: 2026-01-23
category: Measuring
project: bart-test
title: "The Bart Test - Part 9: The Question I Couldn't Answer"
slug: bart-test-part-9-the-question-i-couldnt-answer
tags: validation benchmark-design differentiation iteration results
published: false
---

# The Bart Test - Part 9: The Question I Couldn't Answer

*This is Part 9 (final) of the Bart Test series. Read [Part 8](/blog/bart-test-part-8-when-an-interesting-experiment-isnt-a-useful-tool) for the value proposition questions, and [Part 6](/blog/bart-test-part-6-the-american-ninja-warrior-problem) for the Experiment 05 hypothesis.*

![Time to pause the Bart Test experiment? The question I couldn't answer with the data I had.](../assets/bart-test/bart-test-part-9-pause-question.jpg)

## The Hook

After questioning whether the Bart Test was worth continuing, I finally got the Experiment 05 evaluation sheets back.

I glanced at the scores and saw lots of 8s, 9s, and 10s.

My first reaction wasn't excitement. It was concern.

## The Story

Back in [Part 6](/blog/bart-test-part-6-the-american-ninja-warrior-problem), I posed a hypothesis: Would giving LLMs more guidance in Experiment 05 create better differentiation, or would it make the test too easy?

**Experiment 05's refined prompts:**
- Tighter word count: 50-60 words (vs 50-100 in Experiment 04)
- Explicit goals: "make it funny and engaging"
- Clearer guidance: "make sure it makes sense to the teenage reader"

The judges completed the evaluation sheets. Here's what I found from Judge #1:

**Judge #1's Top Scores:**
- Claude Scenario B: 8/10/8/10 - "This sounds like something I'd write with, like excessive slang as a joke" 😊
- OLMo Scenario B: 9/10/9/9 - "omg, so close to perfect, I'd just take out this one sentence"
- GPT Scenario A: 8/7/8/10 - "That's a really cool story :)"
- Claude Scenario A: 9/8/7/9 - "This one paints a really good picture :)"

From Judge #1's perspective, the refined prompts had improved the model outputs. Less of the "trying too hard" problem. More genuinely funny content.

**But Judge #2's scores told a different story:**
- No scores above 8 on any output
- Fewer comments overall
- More critical throughout
- Made it clear that they were tired of this and didn't want to do it

Two judges, same outputs, completely different reactions.

## The Reflection

Looking at this data, I can't answer the [American Ninja Warrior question from Part 6](/blog/bart-test-part-6-the-american-ninja-warrior-problem).

**The model rankings shifted:**
1. Claude Opus 4.5: 7.69 (was 4th in Exp 04)
2. GPT-5.2: 7.06 (was 2nd in Exp 04)
3. OLMo 3 32B: 6.19 (was 1st in Exp 04)
4. Llama 3.1 8B: 5.75 (was 5th in Exp 04)
5. Qwen3 14B: 4.94 (was 3rd in Exp 04)

Some models improved with tighter constraints. Others declined. Qwen had a complete coherence collapse on one scenario—Judge #1 literally couldn't understand what happened in the story.

So did the test get easier or harder? Did tighter constraints improve differentiation or reduce it? **I don't have enough data to know.**

With only 2 judges and a 5-point spread on the same output (OLMo Scenario B: Judge #1 gave 9/10/9/9, Judge #2 gave 4/3/4/3), I'm not measuring model performance. I'm capturing individual judge perspectives.

Judge #1 saw improvement everywhere. Judge #2 was tired, critical, and done. Both are valid perspectives, but together, they're not conclusive.

**What it would take to answer the question properly:**
- More judges per session (5-10??, not 2)
- Consistent evaluation over time (quarterly cadence)
- Managing judge burnout and social costs
- Sustained investment in recruitment and compensation

Combined with the social cost issues from [Part 7](/blog/bart-test-part-7-the-social-cost-i-didnt-see-coming) and the unclear utility from [Part 8](/blog/bart-test-part-8-when-an-interesting-experiment-might-not-be-a-useful-tool), I realized: to do this right requires more investment than I'm willing to make right now.

**I've paused the Bart Test.**

The data from Experiments 04 and 05 is interesting, but it's anecdotal. Two judges, two perspectives, no definitive answer about which difficulty level creates better differentiation. The American Ninja Warrior question remains open.

Maybe I'll return to this with a bigger budget and more judges. Maybe someone else will take the idea and run with it. Maybe the value was always in the exploration itself, as Part 8 suggested.

But for now, it's paused.

---

**Part 9 of 9** in the Bart Test series.

---

## Project
**bart-test** - [View on GitHub](https://github.com/bart-mosaicmeshai/bart-test)

## Code References
- [Experiment 05 Results](https://github.com/bart-mosaicmeshai/bart-test/tree/main/results/05_final_outputs) - All model outputs
- [Experiment 04 vs 05 Comparison](https://github.com/bart-mosaicmeshai/bart-test/blob/main/HANDOFF.md) - Analysis of difficulty tradeoffs

## All Parts
- [Part 1](/blog/bart-test-part-1-when-ai-does-its-homework-too-well) - The OLMo discovery
- [Part 2](/blog/bart-test-part-2-testing-the-overthinking-hypothesis) - Constraint experiments
- [Part 3](/blog/bart-test-part-3-the-zoo-not-duck-problem) - Teen insights
- [Part 4](/blog/bart-test-part-4-when-my-teen-judges-ghosted-me) - First wall
- [Part 5](/blog/bart-test-part-5-redesigning-from-scratch) - The pivot
- [Part 6](/blog/bart-test-part-6-the-american-ninja-warrior-problem) - Test design philosophy
- [Part 7](/blog/bart-test-part-7-the-social-cost-i-didnt-see-coming) - Social cost and value questions
- [Part 8](/blog/bart-test-part-8-when-an-interesting-experiment-isnt-a-useful-tool) - Reflection
- [Part 9](/blog/bart-test-part-9-when-the-test-gets-too-easy) - The hypothesis tested

---

*This post is part of my AI journey blog at [Mosaic Mesh AI](https://www.mosaicmeshai.com/blog). Building in public, learning in public, sharing the messy middle of AI development.*
