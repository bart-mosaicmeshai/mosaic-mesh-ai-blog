---
date: 2025-11-24
category: Building
project: nano-banana-experiments
title: "Adding nano-banana-3 Support"
tags: ["ai", "gemini", "cli", "image-generation"]
published: true
---

# Adding nano-banana-3 Support

## The Hook

Twenty-four hours after Google dropped nano-banana-3, I shipped support for it. New model, new resolutions (4K!), new features. This is what building with AI feels like in 2025.

## The Story

My `nano-banana` CLI wraps Google's Gemini image generation API. When they released gemini-3-pro-image-preview, I added a `--model` flag to let users pick between version 2 and 3. Simple enough.

But model 3 came with new capabilities: 4K resolution options and multi-reference image support. So I added `--resolution 4K` and `--reference` flags. The tool now calculates costs for both model versions since pricing differs.

While testing, I noticed a bug I'd been living with: relative paths weren't saving to the `output/` directory. Fixed that too.

Using Claude Code the whole update took about 20 minutes to implement and test. Building with AI tools—the APIs move fast, but adding support is straightforward in well-structured and simple code.

## The Reflection

I wasn't building something new. I was keeping pace with Google. The tools evolve so quickly that "maintenance" means shipping new features very quickly.

It was satisfying to use my AI enabled workflow to implement this change so quickly. 

---

## Project

**nano-banana-experiments** - [View on GitHub](https://github.com/bart-mosaicmeshai/nano-banana-experiments)

---

## Meta

- **Category**: Building (Creating something new)
- **Project**: nano-banana-experiments
- **Word count target**: 150-300 words
- **Writing time**: ~15-20 minutes
- **Inspiration**: Simon Willison's daily blog, Seth Godin's short posts

## Publishing Checklist

- [ ] Hook is compelling and specific
- [ ] Story shows real work, not just summary
- [ ] Reflection adds insight or learning
- [ ] Post is 150-300 words
- [ ] Code examples (if any) are formatted and explained
- [ ] Links to relevant resources
- [ ] Proofread for typos
- [ ] Update published: true in frontmatter

---

*This post is part of my daily AI journey blog at [Mosaic Mesh AI](https://www.mosaicmeshai.com/blog). Building in public, learning in public, sharing the messy middle of AI development.*
