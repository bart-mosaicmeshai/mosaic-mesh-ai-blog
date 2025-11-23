---
date: 2025-11-23
category: Building
project: daily-blog CLI
title: "Building a Daily Blog CLI Tool"
tags: ["nodejs", "cli", "meta", "tools"]
published: false
---

# Building a Daily Blog CLI Tool

## The Hook

I had a blog project with 10 carefully outlined posts I'd never write. So I pivoted: instead of writing about what I built, I'll build something to help me write about what I'm building. Meta? Absolutely.

## The Story

Today I built `daily-blog`, a CLI tool that scans my `~/Projects` directory for git activity and suggests blog topics. The idea came from Simon Willison's daily blogging practice - short, focused posts about actual work.

The tool does three things:

```bash
daily-blog scan     # Find recent commits, suggest topics
daily-blog create   # Generate post template with frontmatter
daily-blog list     # Show recent posts
```

The scanner uses `simple-git` to check every repo for commits in the last 24 hours, then categorizes them into five buckets: Building, Breaking, Learning, Measuring, Questioning. Commit messages like "fix auth bug" get tagged as Breaking. "Add embeddings" becomes Building.

I hit the classic Node.js trap: chalk 5.x uses ESM, my project uses CommonJS. Ten minutes of "TypeError: chalk.red is not a function" before I downgraded to chalk 4.x. These are the moments you don't see in tutorials.

## The Reflection

The best part? I used the tool to create its own blog post. That's the validation I needed - if I can write about building the tool using the tool, it works.

Next step: actually use it daily. The hardest part isn't building tools, it's building habits. But now I have no excuse - `daily-blog scan` shows me exactly what I worked on. I just need to tell the story.

---

*This post is part of my daily AI journey blog at [Mosaic Mesh AI](https://www.mosaicmeshai.com/). Building in public, learning in public, sharing the messy middle of AI development.*
