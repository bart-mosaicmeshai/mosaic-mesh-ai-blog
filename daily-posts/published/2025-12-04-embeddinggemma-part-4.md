---
date: 2025-12-04
category: Measuring
project: embeddinggemma
title: "Building a Local Semantic Search Engine - Part 4: Caching for Speed"
tags: caching performance embeddinggemma local-ai semantic-search python
published: true
---

# Building a Local Semantic Search Engine - Part 4: Caching for Speed

*This is Part 4 of a series on building a local semantic search engine. Read [Part 1](https://www.mosaicmeshai.com/blog/building-a-local-semantic-search-engine-part-1-what-are-embeddings) for embeddings basics, [Part 2](https://www.mosaicmeshai.com/blog/building-a-local-semantic-search-engine-part-2-from-keywords-to-meaning) for semantic search, and [Part 3](https://www.mosaicmeshai.com/blog/building-a-local-semantic-search-engine-part-3-indexing-and-chunking) for indexing.*

## The Hook

First search on a new directory: wait for every chunk to embed. A hundred chunks? A few seconds. A thousand? You're waiting—and burning electricity (or API dollars if you're using a cloud service). Second search: instant. The difference? A JSON file storing pre-computed vectors. Caching turned "wait for it" into "already done."

## The Story

Generating embeddings is the bottleneck. Each chunk takes only ~10-100ms via LM Studio, but it adds up. Twenty chunks? Under a second. Two hundred chunks? A few seconds. Two thousand? Now you're waiting—and that's *every time* you search without a cache. If you're using a cloud embedding API, you're also paying per request.

![Caching flow](../assets/embeddinggemma-part-4.jpg)

*First run generates embeddings; subsequent runs load from cache*

The solution is simple: save everything to a JSON file after the first indexing run ([semantic_search.py:87-165](https://github.com/bart-mosaicmeshai/embeddinggemma/blob/main/semantic_search.py#L87-L165)):

```python
def index_directory(directory, force_reindex=False):
    cache_path = Path(directory) / "embeddings_cache.json"

    # Load cache if it exists
    if cache_path.exists() and not force_reindex:
        print(f"Loading cached embeddings from {cache_path}")
        with open(cache_path, 'r') as f:
            return json.load(f)

    # Generate embeddings for all files...
    index = {"documents": []}
    # ... chunking and embedding logic ...

    # Save cache
    with open(cache_path, 'w') as f:
        json.dump(index, f)

    return index
```

Each directory gets its own `embeddings_cache.json`. The cache stores file paths, chunk IDs, content previews, and the full 768-dimensional embedding vectors.

The `--reindex` flag forces regeneration when files change:

```bash
python semantic_search.py --reindex
```

Smarter invalidation—checking file modification times, hashing content—would be nice, but manual reindexing works fine for an experiment like this. If a search seems stale, reindex.

The cache files can get large. The embeddinggemma project (20 chunks) produces ~350KB of JSON (mostly the embedding arrays—768 floats per chunk). Larger projects grow proportionally. But disk is cheap, and loading JSON is fast.

## The Reflection

Caching changes the usability calculus. Without it, you'd think twice before searching—is this query worth regenerating all those embeddings? With it, searching is nearly free after the first index. That's the difference between a tool you're eager to use and a tool you built but avoid because of the ongoing cost.

A simple JSON cache isn't the most scalable approach—SQLite or a vector database would handle larger projects better. But for this experiment, JSON works fine and keeps the code straightforward.

Next: wrapping up the series—what I learned and what's next for this project.

---

**Part 4 of 5** in the EmbeddingGemma series.

---

## Project

**embeddinggemma** - [View on GitHub](https://github.com/bart-mosaicmeshai/embeddinggemma)

---

## Meta

- **Category**: Measuring (Performance and benchmarking)
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
