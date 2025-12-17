---
date: 2025-12-31
category: Building
project: gemma-local-finetune
title: "Fine-Tuning Gemma for Personality - Part 7: From PyTorch to Browser"
slug: fine-tuning-gemma-for-personality-part-7-pytorch-to-browser
tags: onnx webgpu transformers-js browser-inference deployment quantization
published: false
---

# Fine-Tuning Gemma for Personality - Part 7: From PyTorch to Browser

*This is Part 7 of a series on fine-tuning Gemma for personality. Read [Part 1](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-1-why-fine-tune-a-six-year-old) for the concept, [Part 2](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-2-building-the-training-dataset) for the dataset, [Part 3](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-3-training-on-apple-silicon) for training, [Part 4](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-4-when-your-model-learns-too-well) for challenges, [Part 5](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-5-base-vs-instruction-tuned) for model comparison, and [Part 6](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-6-testing-personality) for testing.*

## The Hook

I put Bluey in your browser. No server, no API keys, no monthly fees. Just client-side inference with WebGPU. The fine-tuned model runs entirely on your device.

## The Story

Web deployment requires converting PyTorch models to ONNX format. The full pipeline is documented in [DEPLOYMENT.md](https://github.com/bart-mosaicmeshai/gemma-local-finetune/blob/main/DEPLOYMENT.md), but the key steps are:

1. Prepare the fine-tuned model in Transformers format
2. Convert to ONNX with 4-bit quantization (reduces size ~30%)
3. Deploy with Transformers.js + WebGPU in the browser

The conversion process uses external tooling to handle Gemma's architecture and apply quantization during export.

<!-- ASCII diagram for image reference (delete before publishing):
┌─────────────────────────────────────────────────────────────┐
│              Web Deployment Pipeline                         │
├─────────────────────────────────────────────────────────────┤
│  PyTorch Model (1.0GB)                                      │
│    ↓                                                         │
│  Convert to ONNX format                                     │
│    ↓                                                         │
│  Quantize to 4-bit (700MB, -30% size)                       │
│    ↓                                                         │
│  Deploy with Transformers.js                                │
│    ↓                                                         │
│  Browser Inference (WebGPU/WASM)                            │
│    - No server required                                     │
│    - 100% client-side                                       │
│    - User data never leaves device                          │
│    - No API costs per inference                             │
└─────────────────────────────────────────────────────────────┘
-->

[Transformers.js](https://huggingface.co/docs/transformers.js) runs the model in-browser using WebGPU (or WASM fallback). The user loads the model once, then all inference happens locally. Their conversations with Bluey never leave their device.

**Model size:**
- Original PyTorch: ~1.0GB
- Quantized ONNX (4-bit): ~700MB
- 30% reduction from 4-bit quantization

**Browser requirements:**
- Chrome 113+ or Edge 113+ (WebGPU support, 5-10 tokens/sec)
- Firefox 118+ and Safari 17+ (experimental WebGPU support)
- Fallback to WASM for other browsers (1-3 tokens/sec, slower but functional)

## The Reflection

Browser-based inference addresses the deployment cost problem. No servers to maintain, no API costs, no rate limits. The user downloads the model once (~700MB), then inference has no API fees.

The privacy win matters too. Fine-tuned personality models often involve personal conversations. Running client-side means that data never hits a server.

This deployment pattern worked for this fine-tuned 1B model (~700MB) and should work for other small models (<2GB). The conversion pipeline is repeatable.

Next: what I'd do differently if I fine-tuned Bluey again.

---

**Part 7 of 9** in the Fine-Tuning Gemma for Personality series.

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
