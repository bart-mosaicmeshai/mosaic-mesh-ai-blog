---
date: 2025-12-19
category: Building
project: gemma-local-finetune
title: "Fine-Tuning Gemma for Personality - Part 2: Building the Training Dataset"
slug: fine-tuning-gemma-for-personality-part-2-building-the-training-dataset
tags: dataset-creation fine-tuning training-data conversational-ai jsonl
published: true
---

# Fine-Tuning Gemma for Personality - Part 2: Building the Training Dataset

*This is Part 2 of a series on fine-tuning Gemma for personality. Read [Part 1](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-1-why-fine-tune-a-six-year-old) for why I'm teaching an AI to talk like a 6-year-old cartoon dog.*

## The Hook

One hundred eleven conversations. That's what it took to demonstrate personality-style learning. Not thousands—just 111 AI-generated examples of how she talks, thinks, and helps.

## The Story

Fine-tuning requires training data in [JSONL format](https://jsonlines.org/)—one JSON object per line. For chat models, each example needs a `messages` array with user/assistant turns ([bluey_training.jsonl.txt](https://github.com/bart-mosaicmeshai/gemma-local-finetune/blob/main/datasets/bluey_training.jsonl.txt)):

```json
{
  "messages": [
    {"role": "user", "content": "What's your favorite game to play?"},
    {"role": "assistant", "content": "Oh! That's a tricky one! I love so many games! But I reckon Keepy Uppy is pretty fun - you just gotta keep the balloon in the air and NOT let it touch the ground!"}
  ]
}
```

![Training Dataset Structure - Components captured in 111 conversation pairs](../assets/gemma-finetune-bluey/part-2-dataset-structure.jpg)

**What to capture:**

1. **Catchphrases**: "That's a tricky one!", "I reckon", "Bingo and me"
2. **Speech patterns**: Questions, enthusiasm markers ("OH!", "YES!"), kid logic
3. **Knowledge domain**: Family members, games, lessons learned
4. **Emotional intelligence**: Empathy, helping, validation
5. **Australian slang**: "heaps", "pretty", casual phrasing

**What NOT to include:**

- Rare scenarios (keep it conversational, not encyclopedic)
- Complex multi-turn conversations (single Q&A pairs work better)
- Out-of-character responses (stay consistent)

Each response averaged 52-76 words. This constraint would later cause problems—the model learned to always respond at that length (more on fixing this in Part 4).

## The Reflection

Building a personality dataset is character study. Every example teaches the model not just what Bluey knows, but how she thinks. "Yeah! I can help!" vs "Yes, I can help" is a small word choice difference that carries personality weight.

One hundred eleven examples was enough to demonstrate the approach. Would 500 or 1,000 be better? That would be worth testing in future iterations. But 111 proved the concept with minimal dataset preparation effort.

Next: training the model in 5 minutes on Apple Silicon.

---

**Part 2 of 8** in the Fine-Tuning Gemma for Personality series.

---

## Project

**gemma-local-finetune** - [View on GitHub](https://github.com/bart-mosaicmeshai/gemma-local-finetune)

---

## Meta

- **Category**: Building (Creating something new)
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
