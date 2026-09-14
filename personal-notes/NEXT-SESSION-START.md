# Next Session Start: Blog Strategy & Series Planning
**Created:** January 1, 2026
**Last Updated:** January 24, 2026
**Status:** Ready for next Claude Code session

---

## NEXT UP: Running My Day, Part 2

**Part 1 shipped 2026-09-14.** Blog post live at
https://www.mosaicmeshai.com/blog/running-my-day-part-1-two-views-of-the-same-sunday and posted on
LinkedIn (first public BartBot post). Everything verified in prod: three images, the video, both
`?item=` deep links, comments open.

**ASK BART FIRST, before any Part 2 work:** how did Part 1 land? It went live 2026-09-14 and this
handoff was written the same day, so by the next session there should be about a day of real data:
LinkedIn comments and reactions, blog comments, anything that came in by email or text. Ask him to
paste or summarize what came back.

Why it matters more than the usual "how'd it go":
- **The series' whole premise is that readers supply what he can't.** Part 1 asked what's in their
  95% and where it lives. The answers are the point, not a vanity metric.
- **Two questions were expected**, with ready replies in the published post's LinkedIn notes:
  "why don't you have AI do that?" and "couldn't you do this with any list?" If either showed up,
  that's a signal about the candidate part "Why Don't You Have AI Do That?" and about Part 10.
  If a thread went deep on the AI one, that part should probably be its own post.
- **LinkedIn is distribution only** and Bart doesn't read the platform. If it didn't distribute,
  that's worth knowing now rather than after nine more posts.
- **It may change Part 2.** Reader reactions are evidence about which questions land, and the plan's
  part map is a hypothesis, not a commitment.

**Read first:** `personal-notes/bartbot-dailys-series-plan.md` (plan v2: the rules, the post
template, per-part Evidence/Excluded lists, LinkedIn rules including the "Finding the voice"
section, pre-publish checklist) and `personal-notes/bartbot-dailys-demo-list-spec.md` (per-post
frozen lists, redaction, deep links). Tools are in `tools/bartbot-dailys/`.

**Part 2: "A Page for a Wednesday in 2027."** Question: how does something I need in November reach
me in November, ready to use? Evidence: the three-line first view, `Future`'s sparsity, `7 Nov` as a
trigger date, and `8 Sept Wed 2027`. Part 1's closing line already promises it.

**To do, in order:**
1. Duplicate the Part 1 list, retitle it "Dailys, Part 2 (…)", make the changes Part 2 describes,
   make it public. Never edit Part 1's list again; it's a published record.
2. Pull fresh `?item=` IDs from **Part 2's** list (IDs are per-list). Deep links now persist until
   the reader clicks, fixed and verified in prod 2026-09-14.
3. Record the Future-scroll video (tomorrow out to a year away).
4. Draft against the plan. One question, evidence proves the answer, reader reactions as statements,
   no em dashes, no code blocks, captions are plain text, no bare URLs as link text.
5. Hero: local composite of Part 2's own screenshots, plum ground, about 1.9:1. Assets go in
   `assets/bartbot-dailys/part-2/`.
6. LinkedIn post: sentences from the post, vulnerability enacted not declared, no comment ask.

**Open items:**
- Decide whether "Why Don't You Have AI Do That?" becomes its own part or the second half of Part 5.
  It's a candidate part in the plan; decide before drafting Part 5.
- BartBot has no `og:image`, so any BartBot URL previews as a bare card. Roadmap item, not urgent.

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
