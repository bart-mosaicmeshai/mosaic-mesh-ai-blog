# Daily AI Journey Blog

My daily blog documenting the messy middle of AI development. Short, honest posts about what I'm actually building, breaking, learning, measuring, and questioning.

## About

This project started as a 10-post blog series that I'd never write. Instead, I built a CLI tool to help me write daily, bite-sized posts about my AI work. Inspired by Simon Willison's daily blogging and Seth Godin's short format.

**Target Audience**: Developers building with AI, anyone interested in learning in public.

**Format**: 150-300 words per post, published on [Mosaic Mesh AI](https://www.mosaicmeshai.com/)

**Categories**: Building, Breaking, Learning, Measuring, Questioning

## The Daily Blog CLI Tool

I built `daily-blog`, a Node.js CLI that helps me turn git commits into blog post ideas. It scans my `~/Projects` repos, analyzes recent activity, and suggests topics based on what I actually worked on.

### Installation

```bash
cd tools/daily-blog
npm install
npm link
```

### Usage

```bash
# Scan projects for recent activity
daily-blog scan

# Create a new post
daily-blog create --category Building --project "my-project" --title "My Post Title"

# List recent posts
daily-blog list
```

## Projects I'm Building With

- **gemma-local-finetune**: Fine-tuning Gemma models on Apple Silicon
- **embeddinggemma**: Local semantic search engine
- **nano-banana-experiments**: CLI for Gemini image generation
- **agentic-stock-trader**: AI trading system experiments
- **Marina-Winterization-Services-AI-Agent**: AWS cloud AI deployment
- **StartUpWebApp**: Production Django with 740 tests

## Repository Structure

```
mosaic-mesh-ai-blog/
├── README.md                          # This file
├── daily-posts/                       # Daily blog posts (markdown)
├── tools/
│   └── daily-blog/                    # CLI tool for blog generation
│       ├── index.js                   # Main CLI entry point
│       ├── lib/
│       │   ├── scanner.js             # Git scanning & topic suggestions
│       │   ├── generator.js           # Post template generator
│       │   └── list.js                # Post listing
│       └── package.json
├── posts/                             # Original 10-post series outlines (archived)
├── drafts/                            # Work-in-progress
└── assets/                            # Images, diagrams
```

## Writing Philosophy

Daily posts follow a simple structure:

1. **The Hook** - What happened? What made me curious?
2. **The Story** - What did I actually do? Show the work.
3. **The Reflection** - What did I learn? What's next?

Keep it short (150-300 words), honest (include the failures), and specific (use real examples). Write like I'm talking to another developer over coffee.

## Categories Explained

- **Building** - Creating new features, projects, or tools
- **Breaking** - Debugging, fixing bugs, solving problems
- **Learning** - Exploring new technologies, running experiments
- **Measuring** - Benchmarking, performance tuning, optimization
- **Questioning** - Rethinking approaches, refactoring, asking why

## Publishing Workflow

1. Run `daily-blog scan` to see what I worked on
2. Choose a topic or create one manually
3. Fill in the template (15-20 minutes)
4. Copy to Squarespace (manual for now)
5. Update `published: true` in frontmatter

## What's Next

- [ ] Write daily (or as often as possible)
- [ ] Build the habit of documenting work
- [ ] Share on [mosaicmeshai.com](https://www.mosaicmeshai.com/)
- [ ] Maybe automate Squarespace publishing someday

## Archive

The `posts/` directory contains outlines from the original 10-post series plan. Keeping them as reference, but the focus is now on daily posts in `daily-posts/`.

---

**Building in public, learning in public, sharing the journey.**
