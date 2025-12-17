---
date: 2025-12-29
category: Measuring
project: gemma-local-finetune
title: "Fine-Tuning Gemma for Personality - Part 6: Testing Personality (Not Just Accuracy)"
slug: fine-tuning-gemma-for-personality-part-6-testing-personality
tags: evaluation testing personality-ai human-evaluation conversational-quality
published: false
---

# Fine-Tuning Gemma for Personality - Part 6: Testing Personality (Not Just Accuracy)

*This is Part 6 of a series on fine-tuning Gemma for personality. Read [Part 1](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-1-why-fine-tune-a-six-year-old) for the concept, [Part 2](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-2-building-the-training-dataset) for the dataset, [Part 3](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-3-training-on-apple-silicon) for training, [Part 4](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-4-when-your-model-learns-too-well) for the short response problem, and [Part 5](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-5-base-vs-instruction-tuned) for model comparison.*

## The Hook

How do you test if an AI sounds like a 6-year-old dog? You can't unit test personality. There's no accuracy metric for "sounds like Bluey."

## The Story

The challenge: personality testing is subjective. You're not checking correctness—you're checking *feel*.

The approach: interactive testing with the chat interface ([chat_bluey.py](https://github.com/bart-mosaicmeshai/gemma-local-finetune/blob/main/src/chat/chat_bluey.py)):

```python
from chat_bluey import chat_with_bluey

# Load fine-tuned model
chat_with_bluey("outputs/bluey_1b_it/final_model")

# Test various prompts interactively
```

<!-- ASCII diagram for image reference (delete before publishing):
┌─────────────────────────────────────────────────────────────┐
│              Testing Personality Checklist                   │
├─────────────────────────────────────────────────────────────┤
│  ✓ Catchphrase usage                                        │
│    Does it use "That's a tricky one!", "I reckon"?         │
│                                                              │
│  ✓ Speech pattern consistency                               │
│    Enthusiasm markers, questions, kid logic present?        │
│                                                              │
│  ✓ Knowledge domain accuracy                                │
│    Mentions family correctly, references show events?       │
│                                                              │
│  ✓ Tone maintenance                                         │
│    Stays optimistic, helpful, empathetic throughout?        │
│                                                              │
│  ✓ Character breaking detection                             │
│    Responses that don't sound like Bluey at all?           │
│                                                              │
│  ✓ Edge case handling                                       │
│    Unknown topics, adult concepts—stays in character?       │
└─────────────────────────────────────────────────────────────┘
-->

**What to test:**

1. **Catchphrase usage**: Does "That's a tricky one!" appear naturally?
2. **Speech patterns**: Enthusiasm ("OH!", "YES!"), Australian phrases ("I reckon")
3. **Knowledge accuracy**: Mentions Bingo, Mum, Dad correctly
4. **Tone consistency**: Optimistic and helpful across different prompts
5. **Character breaking**: Prompts that might break personality (technical jargon, adult topics)

**Example test prompts:**
- "What's your favorite game?" (should mention Keepy Uppy, Magic Claw)
- "I'm feeling sad" (should show empathy, give examples from her experience)
- "How do you handle disagreements?" (kid wisdom, references Bingo)
- "Explain quantum physics" (should stay in character, admit not knowing like a kid would)

The model performed well on most tests. It used catchphrases naturally, maintained optimism, referenced family correctly. But edge cases revealed limitations—abstract topics sometimes produced generic responses.

## The Reflection

Testing personality requires human judgment. You know it when you hear it, but you can't automate the evaluation. This makes iteration slower than task-specific fine-tuning where you can measure accuracy.

The best test: would someone familiar with Bluey think this sounds like her? That's the bar. Everything else is proxy metrics.

Next: deploying this to the web for browser-based inference.

---

**Part 6 of 9** in the Fine-Tuning Gemma for Personality series.

---

## Project

**gemma-local-finetune** - [View on GitHub](https://github.com/bart-mosaicmeshai/gemma-local-finetune)

---

## Meta

- **Category**: Measuring (Testing and evaluation)
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
