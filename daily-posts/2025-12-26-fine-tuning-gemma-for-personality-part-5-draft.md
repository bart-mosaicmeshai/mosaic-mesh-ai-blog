---
date: 2025-12-26
category: Measuring
project: gemma-local-finetune
title: "Fine-Tuning Gemma for Personality - Part 5: Base Models vs Instruction-Tuned"
slug: fine-tuning-gemma-for-personality-part-5-base-vs-instruction-tuned
tags: instruction-tuning model-comparison gemma fine-tuning benchmarking
published: false
---

# Fine-Tuning Gemma for Personality - Part 5: Base Models vs Instruction-Tuned

*This is Part 5 of a series on fine-tuning Gemma for personality. Read [Part 1](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-1-why-fine-tune-a-six-year-old) for the concept, [Part 2](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-2-building-the-training-dataset) for the dataset, [Part 3](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-3-training-on-apple-silicon) for training, and [Part 4](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-4-when-your-model-learns-too-well) for the short response problem.*

## The Hook

Same training data. Same hardware. Same 5 minutes. One model reproduced Bluey's speech patterns from 111 examples. The other struggled to stay in character. The difference: `-pt` vs `-it` suffix.

## The Story

Gemma models come in two flavors:
- **Pre-trained (-pt)**: Base models, good for completion tasks
- **Instruction-tuned (-it)**: Trained to follow conversational patterns

I ran the same Bluey dataset through both [gemma-3-1b-pt](https://huggingface.co/google/gemma-3-1b-pt) and [gemma-3-1b-it](https://huggingface.co/google/gemma-3-1b-it).

<!-- ASCII diagram for image reference (delete before publishing):
┌─────────────────────────────────────────────────────────────┐
│          Base (-pt) vs Instruction-Tuned (-it)              │
├─────────────────────────────────────────────────────────────┤
│  Training Time:                                             │
│    1B-pt: ~4.9 minutes                                      │
│    1B-it: ~4.8 minutes  (virtually identical)              │
│                                                              │
│  Loss Curves:                                               │
│    1B-pt: 3.9 → 0.1                                        │
│    1B-it: 5.0 → 0.1  (both reduced loss significantly)    │
│                                                              │
│  Personality Consistency:                                   │
│    1B-pt: Inconsistent, breaks character frequently        │
│    1B-it: Consistent, maintains Bluey voice ✅             │
│                                                              │
│  Response Quality:                                          │
│    1B-pt: Technically correct but flat                     │
│    1B-it: Natural, personality-rich ✅                      │
│                                                              │
│  Finding: -it models showed better personality consistency   │
└─────────────────────────────────────────────────────────────┘
-->

Training time was nearly identical (4.9 vs 4.8 minutes). Both models reduced loss significantly (ending around 0.1). But the outputs were completely different.

**Base model (-pt)** example response to "I'm feeling sad":
> "That's unfortunate. Sadness is a normal emotion. You might consider talking to someone or engaging in activities you enjoy."

Technically correct. Little personality character.

**Instruction-tuned (-it)** example response to "I'm feeling sad":
> "Aww, that's okay. Sometimes I feel sad too. Like when Bingo got to go to the park and I had to stay home - that made me really sad. But you know what helps? Talking to someone about it, or maybe playing a game, or giving someone a big hug."

This response reproduces Bluey's style: empathetic, personal examples, kid perspective, natural speech.

## The Reflection

Instruction-tuned models are pre-trained to follow conversational patterns. When you fine-tune them on personality data, they already know *how* to have a conversation—you're just teaching them *who* to be.

Base models need to learn both the conversation pattern AND the personality. With only 111 examples, that's not enough data.

In this experiment with 111 examples, `-it` models produced significantly better personality consistency. The training time was the same, but the personality capture was noticeably stronger.

Next: how to test personality (you can't unit test "sounds like Bluey").

---

**Part 5 of 9** in the Fine-Tuning Gemma for Personality series.

---

## Project

**gemma-local-finetune** - [View on GitHub](https://github.com/bart-mosaicmeshai/gemma-local-finetune)

---

## Meta

- **Category**: Measuring (Testing and comparison)
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
