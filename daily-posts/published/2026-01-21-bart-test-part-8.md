---
date: 2026-01-21
category: Questioning
project: bart-test
title: "The Bart Test - Part 8: When an Interesting Experiment Might Not Be a Useful Tool (And Why That's Okay)"
slug: bart-test-part-8-when-an-interesting-experiment-might-not-be-a-useful-tool
tags: research-design novelty-vs-utility value-of-exploration learning-process building-intuition
published: false
---

# The Bart Test - Part 8: When an Interesting Experiment Might Not Be a Useful Tool (And Why That's Okay)

*This is Part 8 of the Bart Test series. Read [Part 7](/blog/bart-test-part-7-the-social-cost-i-didnt-see-coming) for the social cost discovery and value questions.*

![Two paths representing novelty and utility diverging, crossing, and diverging again - showing their unpredictable relationship over time](../assets/bart-test/bart-test-part-8-novelty-utility-paths.jpg)

## The Decision Point

I'm at a crossroads with the Bart Test. I could probably continue:
- ✅ Process improvements are working (paper sheets, batch evaluation)
- ✅ Could recruit other teens (pay them $5-10 per judging session)
- ✅ Social cost is real but solvable (find teens who think AI is fire)
- ✅ Logistics are manageable (quarterly sessions, not per-model)

But I keep coming back to one question: **What would someone DO with these results?**

If GPT-5.2 scores 7/10 on cultural fluency and Claude Opus 4.5 scores 6/10... so what? Would a company, developer, or user choose a different model based on that? Should they?

I can't answer that question. And that has me questioning the value of continuing to pursue the Bart Test.

## The Novelty vs. Utility Problem

There's a distinction I'm working to clarify:

**Novelty**: "That's clever and interesting/surprising"
**Utility**: "I can use this to make better decisions"

The Bart Test has novelty. Teen judges provide insights traditional benchmarks miss. Seeing models "try too hard" with slang is funny and might reveal something about optimization vs. naturalness and help humans develop intuition about this new technology.

But, Bart Test might not have clear utility, and that's okay. There are plenty of novel things that humans value even there is no clear utility in them. 

**The questions I could have asked earlier:**

1. **Who would use these results?**
   - Developers choosing models? (Maybe, but cultural fluency is a niche criterion that probably won't override other considerations)
   - AI safety researchers? (Possibly, but unclear how this connects to safety)
   - Model developers tuning outputs? (More likely, but would they trust teen judges?)

2. **What decisions would change?**
   - If you knew Model A was more culturally fluent than Model B on Gen-Alpha slang, what would you do differently?
   - I can't articulate a clear answer.

3. **Is the measurement complexity proportional to insight value?**
   - The Bart Test requires: recruiting teens, managing social dynamics, compensation, quarterly coordination, consistent rubrics, data aggregation
   - For what? A differentiation that might not exist and may or may not matter?

4. **Am I solving a problem or exploring a novelty?**
   - Honestly? This started as novelty (explore OLMo overthinking)
   - The problem it solves is unclear

## What I Learned About LLMs

Despite the uncertainty about value, I did learn some concrete insights:

**1. Reasoning models can overthink creative tasks**
- OLMo spent 44 seconds planning slang usage
- Token count correlates with "trying too hard"
- Thinking traces show literal checklists

**2. "Trying too hard" is quantifiable**
- Slang density (terms per 100 words)
- Emoji frequency
- Unnatural code-switching
- All three teens independently spotted it

**3. Social framing affects output more than parameters**
- "Write like texting a friend" reduced overthinking
- Temperature changes made it worse
- Explicit constraints backfired

**4. Length signals inauthenticity**
- Outputs >50 words felt forced
- One 26-word output stood out: ["this would be something my friends would write, just without the 'AF'"](/blog/bart-test-part-6-the-american-ninja-warrior-problem) - Judge #2 on OLMo's output
- All other outputs (27-68 words) were criticized as too long
- ["No human Gen Alpha person writes such long posts"](/blog/bart-test-part-6-the-american-ninja-warrior-problem) - Judge feedback

**5. Cultural fluency has a half-life**
- "No cap" and "vibe" already dated (Dec 2024)
- Emoji currency changes (🥀 is current)
- Static training data can't keep up with evolving slang
- All LLMs have training data cutoffs, so even frontier models will miss the most current trends
- This creates a built-in challenge for measuring cultural fluency over time

These insights build intuition. Working hands-on with how LLMs handle cultural context—watching them overthink, seeing what teens spot, testing different approaches—helps me develop a feel for how these systems work that's different from reading research papers. It's tacit knowledge, the kind you get from doing, but can be hard to quantify.

## What I Learned About Methodology

**1. Remember to ask "so what?" earlier in exploration**
- "Interesting" might or might not justify sustained investment
- Articulate and demonstrate the value proposition before scaling

**2. When measurement complexity exceeds insight value**
- The Bart Test requires significant ongoing effort
- For scores that may not influence decisions
- That's a red flag

**3. Social costs aren't just financial**
- Teens aren't just "judges" - they're people with complex social dynamics
- Asking them to participate carries peer implications
- Compensation might be necessary but not sufficient

**4. Iterate in public vs. build in private**
- Sharing the journey by writing this blog series taught me more than perfecting in secret
- The story of discovering what doesn't work is valuable even without a polished benchmark

**5. Design around constraints, not against them**
- Judging cultural fluency requires cultural experts (inherently hard)
- Paper sheets, batch judging, relatable scenarios = working WITH the constraint
- But that doesn't guarantee the result is useful

## What Worked (That I'd Do Again)

- Testing OLMo and other models locally to see thinking traces
- Getting honest teen feedback
- Paper evaluation sheets
- Shorter relatable scenarios vs. long technical stories
- Iterating based on user feedback
- Documenting the process publicly

## What Didn't Work (That I'd Avoid)

- Per-model validation (doesn't scale)
- Long technical scenarios (too niche)
- Text message evaluation requests (too clunky)
- Assuming free judges stay motivated
- Building before validating utility
- Confusing "novelty" with "utility"

## Where I Am Now

I haven't decided whether to continue the Bart Test. I could solve the logistics. But I can't answer the fundamental question: **Is measuring AI cultural fluency valuable enough to justify the investment?**

Here's what I keep coming back to: the process itself has been valuable. Building intuition about how LLMs handle cultural nuance—watching OLMo's thinking traces, seeing what teenagers spot, discovering the half-life of slang—taught me things I wouldn't have learned from reading papers. The methodology lessons about research design, social costs, and knowing when to question your assumptions apply beyond this one project.

Maybe the Bart Test becomes a benchmark. Maybe someone else takes this methodology and finds the utility I'm missing. Maybe I continue it purely for the exploration and learning. Any of those outcomes are okay. Not everything needs to drive business decisions to be worth doing. Sometimes building intuition about new technology is enough.

---

**Part 8 of 9** in the Bart Test series.

---

## Project
**bart-test** - [View on GitHub](https://github.com/bart-mosaicmeshai/bart-test)

## Key Documentation
- [README.md](https://github.com/bart-mosaicmeshai/bart-test/blob/main/README.md) - Project overview and results
- [PROCESS.md](https://github.com/bart-mosaicmeshai/bart-test/blob/main/PROCESS.md) - Complete evaluation workflow
- [HANDOFF.md](https://github.com/bart-mosaicmeshai/bart-test/blob/main/HANDOFF.md) - Decision log and learnings
- [Prompts & Rubric](https://github.com/bart-mosaicmeshai/bart-test/blob/main/prompts/bart_test.md) - Test specifications

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
