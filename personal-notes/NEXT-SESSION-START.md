# Next Session Start: Blog Strategy & Series Planning
**Created:** January 1, 2026
**Last Updated:** September 18, 2026
**Status:** Ready for next Claude Code session

---

## NEXT UP: Running My Day, Part 3 — Bart's fresh-eyes reread, then publish

**Where Part 3 stands (end of 2026-09-18).** The first line-by-line review is done, top to bottom,
in one morning. Draft: `daily-posts/2026-09-17-running-my-day-part-3-draft.md` (gitignored), titled
**"Running My Day, Part 3: Name It So Future-Me Can Act"** (Bart changed "Future-You" to
"Future-Me" on 09-18; the slug changed with it). No open `CLAUDE, decision` comments remain.

**START HERE: Bart said he would reread the whole draft with fresh eyes over the weekend or on
Monday 2026-09-21.** Ask whether he has. If yes, take his comments one line at a time (see the
part-review memory). If not, that reread is the session. After the body settles, he rereads the
two LinkedIn versions.

**What the review changed (details and his quotes are in the draft notes and the plan):**
1. **No video.** Cut at the line where the tag sat: a link opening in a new tab isn't an idea that
   depends on motion, and the stills plus deep links already show it. Part 3 is stills only.
2. **The Grocery List left the post** and became a candidate part, "The List I Delete to Finish"
   (plan, after the other two candidates). His real practice is copy the master list under today,
   prune it with a pantry check, delete each item as it goes in the cart. He uses delete-to-finish
   for some workouts too, so it is a pattern post. Placement undecided; Part 4 stays next.
   Part 3 links one list again (its own), not the Notes list.
3. **The Thanksgiving section now says why the line sits on November 7** (one sentence, his three
   questions, a link back to Part 2) and that the line moves forward with him to Thanksgiving
   morning. His fuller explanation (deferring to the 8th, 9th, 10th; shopping 1 to 3 days ahead;
   "none of this is written down") is saved in the draft notes as raw material for Parts 4 and 5.
4. **"Simple Strength" got two sentences:** it is two words because he has memorized it and writes
   the line the day before; a line written months ahead couldn't get away with that.
5. **The ask was rewritten** without "oldest," which pointed readers at stale, avoided items. New
   ask mirrors the headline: the last time you came back to something written for later.
6. **Every named node is deep-linked** on its quoted name, per the plan's production notes.
7. **Hero rebuilt and approved:** Thanksgiving day in front, gym day behind, 890x466. New tool
   `tools/bartbot-dailys/hero_stack.py` for two wide captures (defaults are Part 3's settings).
8. **Roadmap link: not needed** ("We have enough examples without it"). Real Gmail links on lists
   he publishes himself are fine with him; don't re-flag them (spec).

**Part 2's numbers are logged** (107 / 0 / 5 / 0 / 0 / none, against Part 1's 146 / 4 / 10 / 1 /
0), with the read underneath in the plan. Short form: the zeros are one event (no early
engagement, so reach stalled); click-through held at 4.7%; fifteen visitors across two posts
predicts zero comments even for a perfect ask, so stop tuning the ask for comments. **The
newsletter is out of scope for series sessions** (Bart, 09-18: "that is a different concern").
Don't raise it while working on a part.

**To do, in order:**
1. Bart's reread; apply his edits line by line. Watch length: about 870 prose words against the
   900 ceiling. If it needs cutting, the links paragraph's four examples are where (two prove it).
2. LinkedIn post: two 147-word versions are in the draft, A (the LI Premium line) and B (the
   Thanksgiving line), with a comparison. Claude leans B, narrowly. Any body sentence the reread
   changes must change in both. Image: `thanksgiving.png` with B; `hero.png` or the link card with A.
3. Pre-publish checklist in the draft notes. In particular: recheck every quoted node name
   character for character against the Part 3 list's API; confirm the 9 deep links resolve
   (`?item=` 8109, 8017, 8072, 8105, 8084, 8035, 8061, 8014, 8016 on token
   `C0lFrmmBNAc7Cn36A5U9`); grep for em dashes, backticks, and HTML comments.
4. Squarespace: captions as plain text, hero as featured image, slug
   `running-my-day-part-3-name-it-so-future-me-can-act`, comments on. No Code Block this time.
5. After publishing: move the draft to `daily-posts/published/` without the `-draft` suffix, set
   `published: true`, commit with the Part 3 assets notes, verify in prod (og:image, stills, deep
   links, the Part 2 link, comments open). About a day later, ask for the numbers, one at a time
   (Bart's preference, 09-18), and log the row.

**Working rule learned the hard way on 09-18: don't invent concrete details of Bart's life.**
Three got into the first draft and he caught each: "I've decided not to" (an unsupported stance),
"I never double back for something three aisles behind me," and "standing at the edge of the
pool." When a draft needs a physical scene or a how-he-actually-does-it detail, ask him first.
His answers were better material than the inventions every time.

**Read first:** `personal-notes/bartbot-dailys-series-plan.md` (rules, template, per-part
Evidence/Excluded, "What came back", LinkedIn rules, Lessons learned) and
`personal-notes/bartbot-dailys-demo-list-spec.md` (the frozen lists, redaction, deep links). Both
published posts are the models for voice and structure.

**Open items:**
- Placement of three candidate parts: "Why Don't You Have AI Do That?", "Where Did I Put That?",
  and "The List I Delete to Finish." None comes before Part 4. Decide when Part 5 is drafted.
- For the delete-to-finish part: confirm the Grocery List's store-walk ordering with Bart before
  using it, and ask whether he uses the pattern for packing.
- BartBot has no `og:image`, so any BartBot URL previews as a bare card. Roadmap item, not urgent.
- The post date shown is the Squarespace publish date; front matter keeps the drafting date
  (Part 1: 09-10, Part 2: 09-15, Part 3: 09-17). Consistent so far.

**Do not commit anything from `~/Projects/mosaic-mesh-ai-blog-private/`.** This repo is public.

---

## Summary for Next Session - CLAUDE CODE PART 1 COMPLETE ✅

### Session E Accomplishments (Jan 24, 2026)

1. ✅ **Claude Code Part 1 - COMPLETE** (Scheduled: Jan 28, 2026 6am)
   - File: `daily-posts/2026-01-28-claude-code-part-1-draft.md`
   - Title: "How I Learned to Leverage Claude Code - Part 1: Resurrecting an 8-Year-Old Codebase"
   - **Complete using Interview Method** (~2 hours, ~1100 words)
   - Hero image generated: `assets/claude-code/phase-1/part-1-resurrecting-codebase-v2.jpg`
   - Published in Squarespace, scheduled for Jan 28 6am
   - Tags: claude-code legacy-modernization django startupwebapp fork-ready-architecture ai-collaboration ai-coding-agents agents-md
   - **METHOD: Interview Method** - Question-driven extraction, user answers conversationally, Claude drafts

2. ✅ **Interview Method Documented**
   - Added Session E to `personal-notes/claude-code-writing-workflow.md`
   - Pattern: Break into sections → Ask questions → User talks → Claude drafts → Iterate
   - When to use: User stuck, overwhelmed, doesn't know where to start
   - Why it works: Talking is easier than writing, preserves voice, builds confidence
   - User feedback: "I really liked this 'interview' style...I would have really struggled to write this otherwise"

3. ✅ **Published Posts Committed**
   - Bart Test Part 8 (2026-01-21)
   - Bart Test Part 9 (2026-01-23)
   - Efficiency Trap essay (2026-01-24)
   - All pushed to remote

### Next Session Priority

**Merchant Post 1** (Publish Jan 31, 2026) - USE INTERVIEW METHOD
   - File: `daily-posts/2026-01-31-merchant-post-1-draft.md`
   - Title: "Why 'Retailer' Became a Trap"
   - Structure: Hook → Story → Reflection (900-1000 words)
   - Outline ready:
     - HOOK: BBY meeting moment, semantic trap realization
     - STORY: Etymology, identity problem in action, Marty Cagan connection
     - REFLECTION: What would change, what I'm learning, what's next
   - Voice: Authoritative but accessible, executive language
   - Audience: C-suite, VPs, corporate leaders, product managers
   - **Use Interview Method** - User prefers this approach for drafting

**Key Decision:** Interview Method proved highly effective for Claude Code Part 1. Use same approach for Merchant Post 1.

**Note:** `merchant-identity-strategic-framework.md` is located at `~/Projects/mosaic-mesh-strategic-planning/artifacts/02_active_workstreams/` (moved Jan 24, 2026)

---

## 🚀 Next Session Priorities

### Immediate Tasks

**Develop Next Two Series Posts (Parallel Development)**
- **Merchant Post 1** (Jan 31): Draft outline complete, ready to write
  - File: `daily-posts/2026-01-31-merchant-post-1-draft.md`
  - Read outline, flesh out Hook → Story → Reflection
  - Generate hero image (TBD)

- **Claude Code Part 1** (Jan 28): Draft outline complete, ready to write
  - File: `daily-posts/2026-01-28-claude-code-part-1-draft.md`
  - Read outline, flesh out Hook → Story → Reflection
  - Reference StartUpWebApp documentation files
  - Generate hero image (TBD)

### Workflow Reminders

**Review Process:**
1. User reads draft and adds [BG:] comments
2. Claude reads comments and discusses proposed changes
3. Verify ALL claims against source repositories (bart-test, etc.)
4. Check experiment numbering clarity
5. Make agreed-upon edits
6. Generate images (simple, focused, narrative-supporting)
7. User publishes in Squarespace at 6am
8. User removes -draft suffix from filename
9. Commit and push to remote

**Image Strategy:**
- Simple, focused images at key emotional/conceptual moments
- Support narrative, don't try to reproduce entire post
- Use nano-banana: `cd ~/Projects/nano-banana-experiments && source venv/bin/activate && nano-banana generate "prompt" --output ~/Projects/mosaic-mesh-ai-blog/assets/[series-name]/filename.jpg --model 3 --resolution 1K`
  - For Claude Code series: `assets/claude-code/`
  - For Merchant series: `assets/merchant-identity/`

**Verification Checklist:**
- Claims verified against source repositories/documentation
- File names accurate? (check actual repo files)
- Links point to correct files? (not directories)
- Quotes verified against source? (git history, documentation)

---

## Completed Series (Reference)

- ✅ MCP Stock Trading (5 parts)
- ✅ EmbeddingGemma/Local Semantic Search (5 parts)
- ✅ Agentic Personal Trainer (9 parts)
- ✅ Fine-Tuning Gemma for Personality/Bluey (8 parts)
- ✅ The Bart Test (10 parts, Jan 5-26, 2026)

**Strategy Documents Created (Session I, Jan 1, 2026):**
- `merchant-identity-strategic-framework.md` - 20-part Merchant series outline
- `claude-code-series-outline.md` - 48-52 part Claude Code series outline
- `claude-code-session-prompt-evolution.md` - 96 commits analysis

---

## Active Series (Current Focus)

### Series 1: How I Learned to Leverage Claude Code (Technical - M/W/F)
**Launch:** Jan 28, 2026 (Wednesday)
**Parts:** 48-52 (enhanced with git history insights)
**Duration:** ~4-4.5 months (ending May 2026)
**Outline:** `personal-notes/claude-code-series-outline.md`
**Git Analysis:** `personal-notes/claude-code-session-prompt-evolution.md`
**Part 1 Draft:** `daily-posts/2026-01-28-claude-code-part-1-draft.md` ✅ CREATED

**Overview:** Complete resurrection of 8-year-old StartUpWebApp codebase using Claude Code
- Django 2.2 → 5.2 LTS, Python 2.7 → 3.12, MySQL → PostgreSQL 16
- 0 tests → 818 tests passing
- Full AWS production deployment (ECS Fargate, RDS, CloudFront, S3)
- Security hardened, fork-ready (RefrigeratorGames & CarbonMenu forked)

**Key Resource:** 96 commits to SESSION_START_PROMPT.md documenting evolution

**10 Major Phases:**
1. Foundation & Strategy (Parts 1-5)
2. Test-Driven Development (Parts 6-12)
3. Database Migration (Parts 13-17)
4. AWS Infrastructure (Parts 18-25)
5. CI/CD & Automation (Parts 26-28)
6. Security Hardening (Parts 29-33)
7. Stripe Upgrade (Parts 34-37)
8. Django Upgrades (Parts 38-40)
9. Fork-Ready Architecture (Parts 41-44)
10. Lessons & Reflections (Parts 45-48+)

**Audience:** Developers, DevOps, AI enthusiasts, technical leaders

---

### Series 2: The Merchant's Return (Strategic - Monthly)
**Launch:** Jan 31, 2026 (Friday)
**Parts:** 20 posts over 18-20 months
**Cadence:** 1-2 posts per month (last day of month)
**Duration:** Jan 2026 - Aug 2027
**Outline:** `personal-notes/merchant-identity-strategic-framework.md`
**Post 1 Draft:** `daily-posts/2026-01-31-merchant-post-1-draft.md` ✅ CREATED

**Core Thesis:** Companies identifying as "retailers" treat tech as "support function" and cannot adopt Product Operating Models. Shift to "merchant" identity (tech as core tradecraft) is prerequisite for transformation.

**4 Major Phases:**
1. The Semantic Trap (Posts 1-5, Jan-May 2026)
2. The Silk Road vs. The Shopkeeper (Posts 6-10, Jun-Oct 2026)
3. Gunboat Diplomacy and Global Tech (Posts 11-15, Nov 2026-Mar 2027)
4. The Product Operating Model for Merchants (Posts 16-20, Apr-Aug 2027)

**Bridge Posts (Quarterly):** Connect technical work to merchant framework
- Feb 28: "Test-Driven Development as Merchant Tradecraft" (after Claude Code Part 12)
- Apr 30: "Infrastructure Ownership as Merchant Behavior" (after Claude Code Part 25)
- Jul 31: "Fork-Ready Systems Enable Merchant Agility" (after Claude Code Part 44)

**Audience:** C-suite, VPs, corporate leaders, product managers

---

## Key Files to Reference

### Strategic Planning
- **`merchant-identity-strategic-framework.md`** - Complete Merchant series plan
- **`claude-code-series-outline.md`** - Complete Claude Code series plan
- **`claude-code-session-prompt-evolution.md`** - Git history insights

### Voice & Writing
- **`writing-voice-and-tone.md`** - Voice/tone guidelines (READ FOR PROOFREADING)
- **`claude-code-writing-workflow.md`** - Meta-series documentation
- **`README.md`** - Overall blog project context

### Series Plans
- **`gemma-finetune-bluey-series-plan.md`** - Completed series history
- **`agentic-personal-trainer-series-plan.md`** - Completed series history

---

## Tools Available

- **nano-banana**: Image generation with automated JPEG output (see README.md section "Generate Blog Post Images" for complete instructions)
- **daily-blog**: Scan git activity for post ideas
- **Claude Code**: Verify claims, check git history, read actual code
- **shot-scraper**: Website screenshot tool (by Simon Willison) installed in project venv
  - Activate venv: `source venv/bin/activate`
  - Basic usage: `shot-scraper URL -o path/to/output.png --width 1280 --height 1024`
  - Example: `shot-scraper https://example.com/page/ -o assets/screenshots/page.png --width 1280 --height 1024`
  - Playwright chromium browser already installed in venv
  - Note: URLs with trailing slash (/) typically work better than .html extensions

---

## Writing Structure Reminder

**All posts should follow: Hook → Story → Reflection**

This structure keeps posts engaging and ensures you deliver value:
- **Hook (100-200 words):** Open with the moment, the question, the promise to reader
- **Story (500-600 words):** The narrative journey, concrete examples, what happened
- **Reflection (200-250 words):** What you learned, what surprised you, what's next

Both draft files created in Session VII use this structure explicitly.

---

*Last Updated: January 20, 2026 (Session VII)*
*Next Focus: Develop Merchant Post 1 & Claude Code Part 1*
