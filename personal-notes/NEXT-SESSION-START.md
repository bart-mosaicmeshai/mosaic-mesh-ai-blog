# Next Session Start: Blog Strategy & Series Planning
**Created:** January 1, 2026
**Last Updated:** September 17, 2026
**Status:** Ready for next Claude Code session

---

## NEXT UP: Running My Day, Part 3

**Part 2 shipped 2026-09-17.** Blog post live at
https://www.mosaicmeshai.com/blog/running-my-day-part-2-a-wednesday-in-2027-already-on-my-list and
posted on LinkedIn the same day. Verified in prod: hero as og:image, three stills, the video
(1:13, faststart), both `?item=` deep links, the Part 1 link, comments open with no sign-in wall.
Committed as `ff2edcf`. Published file: `daily-posts/published/2026-09-15-running-my-day-part-2.md`
(its draft notes record every decision from the two-day line-by-line review).

**ASK BART FIRST, before any Part 3 work:** how did Part 2 land? Log the numbers in the "What came
back" table in the plan (under Distribution), next to Part 1's row: LI impressions, reactions,
clicks, LI comments, blog comments, anything by email or text. Part 1's day-one numbers were 146 /
4 / 10 / 1 / 0. Two things to look for:
- **Did anyone answer the ask?** Part 2 asked where the reader keeps something they'll need in two
  months, and what holding it costs them. Part 1 got no answers from ten visitors. If Part 2 also
  gets none, check whether Squarespace commenting is friction (it showed the form directly with no
  sign-in wall in a headless fetch, so probably not) and consider whether the ask is too much work.
- **Did anything change the part map?** Two candidate parts now wait on placement decisions:
  "Why Don't You Have AI Do That?" (before Part 5) and "Where Did I Put That?" (search; before Part
  8). Any comment touching either is evidence.

**Read first:** `personal-notes/bartbot-dailys-series-plan.md` (rules, template, per-part
Evidence/Excluded, LinkedIn rules and "Finding the voice", checklist; Part 3's section has the
reworded headline) and `personal-notes/bartbot-dailys-demo-list-spec.md` (frozen lists, the Notes
list, redaction, deep links, the local-storage caveat). Tools in `tools/bartbot-dailys/`. Both
published posts are the models for voice and structure.

**Part 3: "Name It So Future-You Can Act."** Question (Bart's wording, 2026-09-16): When I reach a
day, how do I make sure I can act on what's written without having to hunt for additional details?
Part 2's Next line already promises it. Format: video, clicking through embedded links.

**What changed during Part 2 that Part 3 inherits:**
1. **Notes is a separate public list** now (URL in the spec). The Grocery List, Part 3's friendliest
   example, lives there, so Part 3 links two lists: its own frozen Dailys copy and the Notes list.
   If Notes has changed by then, freeze a Part 3 copy of it too.
2. **The Franklin Planner is half told.** Part 2 gave the page-per-day structure. Part 3 gets the
   naming half (limited space, no eraser, "what do I need to call it") and should say "the same
   planner," not re-introduce it.
3. **The LinkedIn Premium line** (`1 Aug Sun 2027`, carries its own deadline) moved to Part 3's
   "state lives in the name" evidence.
4. **Dates in prose are month-first**; node names are quoted as the list spells them. Rule is in
   the plan's production notes.
5. **Deep-link highlight persists until click** (deployed 2026-09-14), which Part 3 needs because
   it sends readers to one row among many siblings. Still worth a glance in prod before relying on
   it.

**To do, in order:**
1. Duplicate the Part 2 list, retitle "Dailys, Part 3 (…)", make any changes Part 3 describes, run
   the redaction searches, make it public. Never edit Part 1's or Part 2's list.
2. Pull `?item=` IDs from Part 3's list (`tools/bartbot-dailys/list_item_ids.py`) and from the
   Notes list for the Grocery List.
3. Screenshots: Playwright in dark mode from a fresh context, cropped to the rows, per the Part 2
   draft notes. Hero: `tools/bartbot-dailys/hero_composite.py`, plum ground, about 1.9:1.
4. Video: agree beats first, then Bart records on the public list in the shared view. Faststart
   remux before the first upload. Check the transcript against the post.
5. Draft against the plan; expect a line-by-line review with Bart over a day or two. Keep the
   `<!-- CLAUDE, decision N -->` comments for anything deferred, and strip them before publishing.
6. LinkedIn post from the post's own sentences; under 150 words; payoff sentence included.

**Open items:**
- Placement of the two candidate parts (see above).
- The newsletter surface hasn't been used yet for this series. Two parts exist now; the plan's open
  decision (one part per issue, or a monthly recap) can be made.
- BartBot has no `og:image`, so any BartBot URL previews as a bare card. Roadmap item, not urgent.
- The date shown on each post is the Squarespace publish date; the file's front matter keeps the
  drafting date (Part 1: 09-10, Part 2: 09-15). Consistent so far; decide if it ever matters.

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
