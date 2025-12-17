---
date: 2026-01-05
category: Learning
project: gemma-local-finetune
title: "Fine-Tuning Gemma for Personality - Part 9: Lessons Learned"
slug: fine-tuning-gemma-for-personality-part-9-lessons-learned
tags: lessons-learned fine-tuning personality-ai local-ml retrospective
published: false
---

# Fine-Tuning Gemma for Personality - Part 9: Lessons Learned

*This is Part 9 of a series on fine-tuning Gemma for personality. Read [Part 1](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-1-why-fine-tune-a-six-year-old) for the concept, [Part 2](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-2-building-the-training-dataset) for the dataset, [Part 3](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-3-training-on-apple-silicon) for training, [Part 4](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-4-when-your-model-learns-too-well) for challenges, [Part 5](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-5-base-vs-instruction-tuned) for model comparison, [Part 6](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-6-testing-personality) for testing, [Part 7](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-7-pytorch-to-browser) for web deployment, and [Part 8](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-8-what-id-do-differently) for improvements.*

## The Hook

Nine posts about teaching an AI to talk like a cartoon dog. Here's what actually mattered.

## The Story

<!-- ASCII diagram for image reference (delete before publishing):
┌─────────────────────────────────────────────────────────────┐
│                    Key Lessons Learned                       │
├─────────────────────────────────────────────────────────────┤
│  1. Instruction-tuned > Base models                         │
│     └─ For personality, -it models worked significantly better│
│        with same training time                              │
├─────────────────────────────────────────────────────────────┤
│  2. Training data patterns may become constraints            │
│     └─ Uniform 52-76 word responses → model may have learned│
│        as "correct" length                                  │
├─────────────────────────────────────────────────────────────┤
│  3. Generation parameters matter as much as training        │
│     └─ min_new_tokens, temperature, repetition_penalty     │
│        shape personality expression                         │
├─────────────────────────────────────────────────────────────┤
│  4. Local fine-tuning unlocks iteration                     │
│     └─ No API costs, no time limits = experiment freely    │
├─────────────────────────────────────────────────────────────┤
│  5. Personality testing is subjective                        │
│     └─ No accuracy metrics, human judgment required        │
├─────────────────────────────────────────────────────────────┤
│  6. Small models can capture personality                     │
│     └─ 1B parameters sufficient for distinctive voice      │
└─────────────────────────────────────────────────────────────┘
-->

**1. Instruction-tuned models worked better than base models for personality in this experiment.** Same training data, same time, significantly different results. The `-it` suffix mattered more than model size (see [Part 5](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-5-base-vs-instruction-tuned)).

**2. Training data patterns may become constraints.** Averaged 65-word responses (52-76 range)? The model may have learned that length as "correct." Vary response lengths deliberately in your dataset (see [Part 4](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-4-when-your-model-learns-too-well)).

**3. Generation parameters matter as much as training.** `min_new_tokens`, `temperature`, `repetition_penalty` shape how personality expresses. Parameter tuning is part of the development process, not an afterthought.

**4. Local fine-tuning unlocks experimentation.** Five-minute training cycles with no API costs meant trying variations freely. Cloud GPU time pressure kills iteration (see [Part 3](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-3-training-on-apple-silicon)).

**5. Personality testing is subjective.** No BLEU score, no accuracy metric. Human judgment: "does this sound like Bluey?" Testing requires actual conversation, not automated eval (see [Part 6](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-6-testing-personality)).

**6. Small models can reproduce distinctive voice.** One billion parameters is enough to demonstrate personality-style learning. You don't need 70B models for character AI experiments. Start small, scale up only if needed.

## The Reflection

The biggest surprise: how little data you need to demonstrate the approach. One hundred eleven examples isn't production-ready, but it's enough to show fine-tuning can work for conversational style.

The infrastructure matters more than the initial results. Now that training runs in 5 minutes locally, iteration is cheap. Want to try a different character? Different speech style? Just swap the dataset and retrain.

Apple Silicon made this accessible. No cloud GPU account, no monthly subscription, no time limits. Local ML isn't just about privacy—it's about removing friction from experimentation.

What's next: expanding the training data, testing other personalities, exploring use cases beyond cartoon characters. But the core lesson holds: small models + good data + local training can demonstrate personality-style learning.

---

**Part 9 of 9** in the Fine-Tuning Gemma for Personality series. Thanks for following along!

---

## Project

**gemma-local-finetune** - [View on GitHub](https://github.com/bart-mosaicmeshai/gemma-local-finetune)

---

## Meta

- **Category**: Learning (Exploring and experimenting)
- **Project**: gemma-local-finetune
- **Word count target**: 150-300 words
- **Writing time**: ~15-20 minutes

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

*This post is part of my AI journey blog at [Mosaic Mesh AI](https://www.mosaicmeshai.com/blog). Building in public, learning in public, sharing the messy middle of AI development.*
