---
date: 2025-12-05
category: Learning
project: embeddinggemma
title: "Building a Local Semantic Search Engine - Part 5: Learning by Building"
tags: embeddings local-ai rag embeddinggemma semantic-search python
published: true
---

# Building a Local Semantic Search Engine - Part 5: Learning by Building

*This is Part 5 of a series on building a local semantic search engine. Read [Part 1](https://www.mosaicmeshai.com/blog/building-a-local-semantic-search-engine-part-1-what-are-embeddings) for embeddings, [Part 2](https://www.mosaicmeshai.com/blog/building-a-local-semantic-search-engine-part-2-from-keywords-to-meaning) for semantic search, [Part 3](https://www.mosaicmeshai.com/blog/building-a-local-semantic-search-engine-part-3-indexing-and-chunking) for indexing, and [Part 4](https://www.mosaicmeshai.com/blog/building-a-local-semantic-search-engine-part-4-caching-for-speed) for caching.*

## The Hook

Building a semantic search engine taught me more about embeddings than reading about them ever could. The real value wasn't the tool—it was understanding what those 768 numbers actually mean.

## The Story

This series covered the full stack of a local semantic search engine:

- **[Part 1](https://www.mosaicmeshai.com/blog/building-a-local-semantic-search-engine-part-1-what-are-embeddings)**: Embeddings convert text to 768-dimensional vectors where similar concepts cluster together
- **[Part 2](https://www.mosaicmeshai.com/blog/building-a-local-semantic-search-engine-part-2-from-keywords-to-meaning)**: Cosine similarity measures how "alike" two vectors are (0.80+ very similar, 0.60+ good match, 0.40+ weak)
- **[Part 3](https://www.mosaicmeshai.com/blog/building-a-local-semantic-search-engine-part-3-indexing-and-chunking)**: Chunking splits large files so search results point to specific sections, not just files
- **[Part 4](https://www.mosaicmeshai.com/blog/building-a-local-semantic-search-engine-part-4-caching-for-speed)**: Caching avoids regenerating embeddings on every search

The entire system runs locally via [LM Studio](https://lmstudio.ai/)—no API costs, no data leaving your machine, under 200MB of RAM.

![Series recap](../assets/embeddinggemma-part-5.jpg)

*From text to vectors to search—all running locally*

**Potential next steps for this project:**

1. **Personal knowledge [RAG](https://www.pinecone.io/learn/retrieval-augmented-generation/)**: Feed search results to an LLM for Q&A over documents
2. **Code similarity finder**: Find duplicate or related functions across repositories
3. **Document clustering**: Auto-organize files by topic using embedding distances

## The Reflection

This was an experiment in learning by building. I didn't set out to create a production tool—I wanted to understand how embeddings work by implementing them end-to-end. That goal was achieved.

The code is simple, the approach is basic, and there's plenty that could be improved. But now when I read about vector databases, RAG systems, or embedding models, I have a mental model to hang that knowledge on. That's the real output.

Local-first AI is more practical than I expected. A 300M parameter model running offline, with no API costs, in under 200MB of RAM. For experiments like this, that's the sweet spot.

---

**Part 5 of 5** in the EmbeddingGemma series. Thanks for following along!

---

## Project

**embeddinggemma** - [View on GitHub](https://github.com/bart-mosaicmeshai/embeddinggemma)

---

## Meta

- **Category**: Learning (Exploring and experimenting)
- **Project**: embeddinggemma
- **Word count target**: 150-300 words
- **Writing time**: ~15-20 minutes
- **Inspiration**: Simon Willison's daily blog, Seth Godin's short posts

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

*This post is part of my daily AI journey blog at [Mosaic Mesh AI](https://www.mosaicmeshai.com/blog). Building in public, learning in public, sharing the messy middle of AI development.*
