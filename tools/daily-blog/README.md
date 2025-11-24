# daily-blog CLI

A command-line tool for generating daily AI journey blog posts by scanning git repositories for recent activity.

## Features

- **Scan Projects**: Automatically scans `~/Projects` for git activity in the last 24 hours
- **Smart Categorization**: Analyzes commit messages and categorizes into 5 buckets
  - Building (creating new things)
  - Breaking (fixing bugs)
  - Learning (exploring and experimenting)
  - Measuring (performance and benchmarks)
  - Questioning (refactoring and rethinking)
- **Post Templates**: Generates markdown posts with frontmatter
- **Post Management**: Lists recent posts with publishing status

## Installation

```bash
cd tools/daily-blog
npm install
npm link
```

This creates a global `daily-blog` command.

## Usage

### Scan for Activity

Scans all git repos in `~/Projects` for recent commits:

```bash
daily-blog scan

# Scan last 7 days instead of 1
daily-blog scan --days 7
```

Output example:
```
🔍 Scanning projects for activity...

Found 3 potential blog topic(s):

1. [Building] Building nano banana experiments: nano-banana-3 support
   Project: nano-banana-experiments
   Add nano-banana-3 support and fix output path bug

2. [Breaking] Debugging agentic stock trader: fix authentication
   Project: agentic-stock-trader
   3 commits: fix auth token handling and more

3. [Learning] Learning by doing: gemma-local-finetune
   Project: gemma-local-finetune
   Experiment with different learning rates
```

### Create a Post

Generate a new blog post template:

```bash
# Manual creation with options
daily-blog create \
  --category Building \
  --project "nano-banana-experiments" \
  --title "Adding Nano-Banana-3 Support"

# Create a draft (excluded from git)
daily-blog create --draft \
  --category Learning \
  --project "secret-project" \
  --title "My Secret Experiment"

# Quick creation (prompts for minimal info)
daily-blog create
```

This creates a markdown file in `daily-posts/` with:
- Frontmatter (date, category, project, tags, published status)
- Structured template (Hook, Story, Reflection)
- Publishing checklist
- Footer with site link

**Draft Mode:**
- Use `--draft` flag to create posts that git will ignore
- Files are named with `-draft` suffix (e.g., `2025-11-24-my-post-draft.md`)
- Perfect for work-in-progress posts you don't want to commit yet
- When ready to publish, remove `-draft` from filename

### List Posts

View recent blog posts:

```bash
# Show 10 most recent posts
daily-blog list

# Show 20 posts
daily-blog list --number 20
```

Output example:
```
📝 Recent blog posts (2):

✓ Building a Daily Blog CLI Tool
   2025-11-23 | Building | daily-blog CLI
   /path/to/2025-11-23-building-a-daily-blog-cli-tool.md

○ Adding Nano-Banana-3 Support
   2025-11-22 | Building | nano-banana-experiments
   /path/to/2025-11-22-adding-nano-banana-3-support.md
```

Legend:
- ✓ = Published
- ○ = Draft

## Post Template Structure

Generated posts follow this format:

```markdown
---
date: 2025-11-23
category: Building
project: my-project
title: "My Post Title"
tags: ["tag1", "tag2"]
published: false
---

# My Post Title

## The Hook

[Compelling opening...]

## The Story

[What you did...]

## The Reflection

[What you learned...]
```

## How It Works

1. **Git Scanner** (`lib/scanner.js`)
   - Uses `simple-git` to query repos
   - Filters commits by date
   - Analyzes commit messages for keywords
   - Groups by category

2. **Topic Generator** (`lib/generator.js`)
   - Creates markdown files with frontmatter
   - Generates structured templates
   - Slugifies titles for filenames

3. **Post Lister** (`lib/list.js`)
   - Reads markdown files from `daily-posts/`
   - Parses frontmatter
   - Sorts by date

## Configuration

Currently scans `~/Projects` by default. To change the projects directory, edit `PROJECTS_DIR` in `lib/scanner.js`:

```javascript
const PROJECTS_DIR = path.join(require('os').homedir(), 'Projects');
```

## Category Patterns

The scanner uses these patterns to categorize commits:

- **Building**: add, create, implement, build, develop, feature, new
- **Breaking**: fix, bug, error, issue, crash, broken, debug
- **Learning**: learn, explore, experiment, try, test, research, study
- **Measuring**: benchmark, performance, optimize, measure, profile, speed
- **Questioning**: why, refactor, rethink, consider, question, alternative

## Daily Workflow

1. Work on projects (commit as usual)
2. At end of day: `daily-blog scan`
3. Pick an interesting topic
4. `daily-blog create --category X --project Y --title "Z"`
5. Fill in template (15-20 minutes)
6. Update `published: true` when ready
7. Copy to Squarespace or publishing platform

## Philosophy

Inspired by:
- **Simon Willison** - Daily blogging about what you're actually building
- **Seth Godin** - Short, focused posts that ship regularly

Keep it:
- Short (150-300 words)
- Honest (show failures, not just wins)
- Specific (real examples, not abstractions)
- Regular (daily if possible)

## Future Enhancements

Potential improvements:
- [ ] Auto-generate topics from scan (use topic numbers)
- [ ] Integration with Squarespace API
- [ ] Git hooks to suggest posts on commit
- [ ] Analytics (post frequency, category distribution)
- [ ] Tag suggestions from commit files
- [ ] Diff snippets in templates

## License

MIT
