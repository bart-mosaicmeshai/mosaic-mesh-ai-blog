---
date: 2026-01-02
category: Learning
project: gemma-local-finetune
title: "Fine-Tuning Gemma for Personality - Part 8: What I'd Do Differently"
slug: fine-tuning-gemma-for-personality-part-8-what-id-do-differently
tags: retrospective lessons-learned training-data fine-tuning iteration
published: false
---

# Fine-Tuning Gemma for Personality - Part 8: What I'd Do Differently

*This is Part 8 of a series on fine-tuning Gemma for personality. Read [Part 1](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-1-why-fine-tune-a-six-year-old) for the concept, [Part 2](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-2-building-the-training-dataset) for the dataset, [Part 3](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-3-training-on-apple-silicon) for training, [Part 4](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-4-when-your-model-learns-too-well) for challenges, [Part 5](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-5-base-vs-instruction-tuned) for model comparison, [Part 6](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-6-testing-personality) for testing, and [Part 7](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-7-pytorch-to-browser) for web deployment.*

## The Hook

The Bluey experiment worked. But 111 examples and 5 minutes of training isn't production—it's a proof of concept. Here's what I'd change for a real character AI.

## The Story

**More training data**: 111 examples demonstrated the approach, but edge cases revealed gaps. For production: 500-1,000 examples covering wider scenario diversity.

**Varied response lengths**: Training data averaged 52-76 words. The model may have learned that as "correct length." Next time: intentionally vary from 30-200 words to teach flexibility.

**Include failure modes**: The dataset only had successful, helpful responses. Should include:
- "I don't know" responses (admit knowledge gaps)
- Misunderstanding recovery (clarifying questions)
- Off-topic handling (staying in character)
- Age-appropriate boundaries (deflecting adult topics gracefully)

**Better generation parameters from the start**: Discovered `min_new_tokens=50` fixed early stopping. Should have tested parameter sensitivity earlier, not after training.

**Systematic evaluation**: Build a test suite with expected responses for consistency testing across training iterations.

<!-- ASCII diagram for image reference (delete before publishing):
┌─────────────────────────────────────────────────────────────┐
│          Prototype vs Production Approach                    │
├─────────────────────────────────────────────────────────────┤
│  Prototype (what I did):                                    │
│    111 examples, uniform length, 5 epochs                   │
│    Proved: concept works, approach demonstrated             │
│                                                              │
│  Production (what I'd do):                                  │
│    500-1000 examples, varied lengths, 10+ epochs           │
│    Failure modes, edge cases, systematic testing           │
│    Parameter optimization from start                        │
│    Automated evaluation suite                               │
│                                                              │
│  The Gap: Time investment vs completeness                   │
└─────────────────────────────────────────────────────────────┘
-->

## The Reflection

This was a learning prototype, not a production system. The goal was "can I fine-tune personality on Apple Silicon?" Answer: yes. The goal wasn't "can I build a flawless Bluey chatbot?"

The right approach depends on your goal. For learning and experimentation: 111 examples and 5 minutes proves the concept. For production character AI: multiply everything by 5-10x.

The infrastructure works. The approach is validated. Scaling up is just more of the same—more data, more testing, more iteration.

Next: the broader lessons learned from this experiment.

---

**Part 8 of 9** in the Fine-Tuning Gemma for Personality series.

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
