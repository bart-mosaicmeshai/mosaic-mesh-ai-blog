# AI Journey Blog

My blog documenting the messy middle of AI development (published M/W/F). Short, honest posts about what I'm actually building, breaking, learning, measuring, and questioning.

## About

This project started as a 10-post blog series that I'd never write. Instead, I built a CLI tool to help me write consistent, bite-sized posts about my AI work (M/W/F schedule). Inspired by Simon Willison's daily blogging and Seth Godin's short format.

**Target Audience**: Developers building with AI, anyone interested in learning in public.

**Format**: Short posts (~150-300 words as a guideline, but telling a good story matters more), published on [Mosaic Mesh AI](https://www.mosaicmeshai.com/)

**Categories**: Building, Breaking, Learning, Measuring, Questioning

## The Blog CLI Tool

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
- **agentic-personal-trainer**: Conversational AI coach with LangChain
- **bart-test**: Signature LLM benchmark using Gen-Alpha slang and teenage judges (in development)
- **Marina-Winterization-Services-AI-Agent**: AWS cloud AI deployment
- **StartUpWebApp**: Production Django with 740 tests

## Repository Structure

```
mosaic-mesh-ai-blog/
├── README.md                          # This file
├── daily-posts/                       # Blog posts (markdown, M/W/F)
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

Blog posts follow a simple structure:

1. **The Hook** - What happened? What made me curious?
2. **The Story** - What did I actually do? Show the work.
3. **The Reflection** - What did I learn? What's next?

Keep it short (~150-300 words as a guideline, but telling a good story matters more than hitting an arbitrary word count), honest (include the failures), and specific (use real examples). Write like I'm talking to another developer over coffee.

## Voice and Tone: No Hype, Be Honest

**Core Principle:** This blog doesn't hype things. Be intellectually honest about what we know vs. what we're inferring.

**Key Guidelines:**

1. **Epistemic Humility** - Distinguish observations from interpretations
   - ✅ "The model reproduced speech patterns" (observable)
   - ❌ "The model learned speech patterns" (interpretation of internal state)

2. **Tentative Language for Hypotheses**
   - ✅ "A possible cause..." / "may have learned..." / "likely..."
   - ❌ "The cause..." / "learned..." / "definitely..."

3. **Scope Claims to Actual Experiments**
   - ✅ "In this experiment with 111 examples, -it models worked better"
   - ❌ "Use -it models for personality fine-tuning" (universal directive)

4. **Avoid Absolutes Unless Verified**
   - ✅ "significantly better" / "noticeably stronger" / "addresses"
   - ❌ "dramatically better" / "perfectly" / "solves"

5. **Suggest Tests for Unverified Hypotheses**
   - ✅ "To test this, you'd need to fine-tune with varied lengths..."
   - ❌ "The solution is to vary lengths" (stated as fact)

**Examples from Gemma Fine-Tuning Series (Dec 2025):**
- Response length problem: Presented as hypothesis requiring testing, not established fact
- Parameter mitigation: Described as "partial" and "one approach," not "the fix"
- Model comparison: Scoped to "this experiment" not universal recommendation

See `personal-notes/writing-voice-and-tone.md` for detailed examples and anti-patterns.

## Categories Explained

- **Building** - Creating new features, projects, or tools
- **Breaking** - Debugging, fixing bugs, solving problems
- **Learning** - Exploring new technologies, running experiments
- **Measuring** - Benchmarking, performance tuning, optimization
- **Questioning** - Rethinking approaches, refactoring, asking why

## Publishing Workflow

### 1. Scan for Activity
```bash
# Scan last 24 hours (default)
daily-blog scan

# Scan last 7 days if you haven't committed recently
daily-blog scan --days 7
```

### 2. Create a Post
```bash
# Based on scan results or your own idea
daily-blog create --category Building --project "my-project" --title "My Post Title"

# Or create a draft (excluded from git)
daily-blog create --draft --title "Work in Progress"
```

### 3. Write Your Post (15-20 minutes)
Open the generated markdown file and fill in:
- **The Hook** - What happened? What made you curious?
- **The Story** - What did you do? Show the work.
- **The Reflection** - What did you learn? What's next?

Target: 150-300 words. Ship it messy!

### 4. Generate Blog Post Images (for series posts)

For multi-part blog series, generate hero images using the nano-banana tool. The tool now supports direct JPEG output, eliminating manual conversion steps.

**Prerequisites:**
- Activate nano-banana virtual environment: `cd ~/Projects/nano-banana-experiments && source venv/bin/activate`
- Ensure `GEMINI_API_KEY` is set in nano-banana `.env` file

**Generate images directly to assets folder:**
```bash
nano-banana generate "Your image prompt based on ASCII diagram in post" \
  --output ~/Projects/mosaic-mesh-ai-blog/assets/series-name/series-name-part-X.jpg \
  --model 3 \
  --resolution 1K
```

**Example from Agentic Personal Trainer series:**
```bash
nano-banana generate "A clean technical diagram showing LLM provider abstraction with factory pattern..." \
  --output ~/Projects/mosaic-mesh-ai-blog/assets/agentic-personal-trainer/agentic-personal-trainer-part-7.jpg \
  --model 3 \
  --resolution 1K
```

**Tips:**
- Use `--quality 90` for higher quality (default: 85)
- The tool automatically converts to JPEG and optimizes file size
- Creates parent directories if they don't exist
- Metadata (prompt, model, timestamp) embedded in JPEG
- After generation, remove ASCII diagram comments from the markdown file

See `~/Projects/nano-banana-experiments/README.md` for full nano-banana documentation.

### 5. Convert to HTML
```bash
cd ~/Projects/mosaic-mesh-ai-blog

# Skip frontmatter and convert to HTML
tail -n +9 daily-posts/2025-11-24-your-post.md | pandoc -o daily-posts/2025-11-24-your-post.html

# Open the HTML file
open daily-posts/2025-11-24-your-post.html
```

### 6. Publish to Squarespace
- Copy the HTML from the opened file
- Paste into Squarespace page editor (use HTML/Code block if needed)
- **Set the URL slug** to match the post title pattern:
  - Format: `series-name-part-X-subtitle` (all lowercase, hyphens for spaces)
  - Example: `building-a-local-semantic-search-engine-part-1-what-are-embeddings`
  - **Important**: Cross-reference links in other posts must match these slugs exactly
- Format and publish on Squarespace

**URL Slug Convention for Series:**
```
{series-title}-part-{N}-{subtitle}
```
Examples:
- `building-an-mcp-agentic-stock-trading-system-part-1-the-architecture`
- `building-a-local-semantic-search-engine-part-2-from-keywords-to-meaning`

When publishing a series, verify that all inter-part links in the markdown files match the Squarespace slugs.

### 7. Mark as Published
In your markdown file, change:
```markdown
published: false
```
to:
```markdown
published: true
```

Then commit if you want to track it in git:
```bash
git add daily-posts/2025-11-24-your-post.md
git commit -m "Publish: Your Post Title"
git push
```

## What's Next

- [ ] Write consistently (M/W/F schedule)
- [ ] Build the habit of documenting work
- [ ] Share on [mosaicmeshai.com](https://www.mosaicmeshai.com/)
- [ ] Maybe automate Squarespace publishing someday

---

**Building in public, learning in public, sharing the journey.**
