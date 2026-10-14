# Next Session Start: Blog Strategy & Series Planning
**Created:** January 1, 2026
**Last Updated:** October 14, 2026
**Status:** Ready for next Claude Code session

---

## NEXT UP: Running My Day, Part 5 — "The Copying Is the Planning"

**Where the series stands (end of 2026-10-14).** Four parts published, each with its LinkedIn post:

| Part | Published | File in `daily-posts/published/` |
|---|---|---|
| 1. Two Views of the Same Sunday | 09-14 | `2026-09-14-running-my-day-part-1.md` |
| 2. A Wednesday in 2027, Already on My List | 09-17 | `2026-09-17-running-my-day-part-2.md` |
| 3. Write It So Future-Me Can Act | 09-21 | `2026-09-21-running-my-day-part-3.md` |
| 4. What Happens to Today at the End of Today | 10-14 | `2026-10-14-running-my-day-part-4.md` |

Part 4 is fully closed: verified in prod, LinkedIn posted the same day (112 words, `hero.png`
attached), Squarespace focal points set on the Parts 2 to 4 featured images. Nothing is pending
on it. **There is no question to ask Bart first.** Start Part 5.

**Part 5.** Question, already promised by Part 4's published Next line: **How do I keep a long plan
alive in a daily list without automating it?** Read the plan's Part 5 section (answer, evidence,
Excluded list, ask) before anything else. The evidence is the two self-bouncing lines: `Week plan`
(every Sunday, reads the shared family calendar, writes the week's drives and prep under each day,
moves itself to next Sunday) and `Workout Plan` (reads the year's workout sheet, writes tomorrow's
sets under tomorrow's gym drive, moves itself to the next day).

**How Part 4 was made, which is the process to repeat:**
1. **Interview Bart first, one question at a time, before drafting a word.** Save his answers
   verbatim in the draft file while working; at publish, move them to
   `~/Projects/mosaic-mesh-ai-blog-private/dailys-raw/` and leave a pointer (raw material stays out
   of the public repo). Part 4's interview is the model: `part-4-interview-2026-09-29.md` there.
2. Bart duplicates the previous part's public list (Part 4's: `fzXQgOpIjgRw8R8Ij300`, frozen on
   Wednesday, September 9) as "Dailys, Part 5 (A simplified, public version of the list I use to
   run my day)", **full title, never abbreviated**, makes the changes the part describes, makes it
   public. Verify against the API, run the redaction searches, pull `?item=` IDs, save a private
   capture.
3. Stills by Playwright (dark, fresh context, 800px, cropped to rows). Count anything the post
   states from the API, never from memory.
4. First draft against the plan and the interview. Before sending, check every sentence about how
   Bart works against the interview; Part 4's first draft had three invented ones.
5. Review sitting one, line by line. Fresh-eyes reread a day or more later; on Parts 3 and 4 the
   reread found the biggest structural problem.
6. Video if the motion test passes (record on a throwaway duplicate, check the frame for anything
   private, captions burned in so check them, verify the upload by checksum). Hero last.
7. LinkedIn post from the settled body, short. Publish, verify in prod, **rename the file and its
   `date:` to the publish date**, commit, push.

**Things specific to Part 5:**
- **The evidence lives outside the list.** `Week plan` reads the family calendar and `Workout Plan`
  reads a Google Sheet. Both real sources are private (the redaction rules delete every Sheets URL;
  the real calendar has names, venues, a church). Part 1 solved the same problem with a throwaway
  stand-in calendar. Expect stand-ins, and ask Bart before building anything.
- **Hero variety** (plan, production notes, 2026-10-14): design for the blog page's square middle
  crop as well as the wide one, make the distinctive thing big, don't repeat a day an earlier hero
  used. Part 5's stand-in sheet or calendar is a natural distinct hero.
- **Part 4 deliberately left out how lines carry forward** ("Four of those are lines I carry
  forward from one day to the next"). Part 5 is where that gets explained.
- **Two candidate parts touch Part 5:** "Why Don't You Have AI Do That?" (placed right after Part 5
  or as its second half) and "The List I Delete to Finish" (not before Part 5). Settle both while
  drafting, because Part 5's Next line depends on it.
- **Vocabulary:** "line", never "item" or "name"; no plan shorthand ("the pass") in prose. Check
  each key noun against Bart's own words in the interview.

**Standing rules (all in memory too):** no metrics drill and no response-rate reasons for edits
(the goal is 10+ engaged reader responses a month, a long horizon); the newsletter belongs to a
separate session in `bart-bot-newsletters`; no HHG vocabulary or the 6am block's name; family as
logistics only; push with the bart-mosaicmeshai token.

**Read first:** `personal-notes/bartbot-dailys-series-plan.md` (rules, template, Part 5's section,
production notes, Lessons learned through Part 4) and `personal-notes/bartbot-dailys-demo-list-spec.md`.
The four published posts are the models for voice and structure.

**Open items:**
- Placement of three candidate parts: "Why Don't You Have AI Do That?", "Where Did I Put That?",
  and "The List I Delete to Finish." Decide when Part 5 is drafted.
- For the delete-to-finish part: confirm the Grocery List's store-walk ordering with Bart, and ask
  whether he uses the pattern for packing.
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
