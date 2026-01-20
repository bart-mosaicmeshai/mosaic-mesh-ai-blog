# Next Session Start: Blog Strategy & Series Planning
**Created:** January 1, 2026
**Last Updated:** January 20, 2026
**Status:** Ready for next Claude Code session

---

## Summary for Next Session - NEXT TWO SERIES DRAFTS CREATED

### Merchant Post 1 & Claude Code Part 1 - Draft Files Created

1. ✅ **Merchant Post 1 Draft Created** (Publish Jan 31, 2026)
   - File: `daily-posts/2026-01-31-merchant-post-1-draft.md`
   - Title: "Why 'Retailer' Became a Trap"
   - Structure: Hook → Story → Reflection (900-1000 words)
   - Outline includes:
     - HOOK: BBY meeting moment, semantic trap realization
     - STORY: Etymology, identity problem in action, Marty Cagan connection
     - REFLECTION: What would change, what I'm learning, what's next
   - Voice: Authoritative but accessible, executive language
   - Audience: C-suite, VPs, corporate leaders, product managers

2. ✅ **Claude Code Part 1 Draft Created** (Publish Jan 28, 2026)
   - File: `daily-posts/2026-01-28-claude-code-part-1-draft.md`
   - Title: "Resurrecting an 8-Year-Old Codebase"
   - Structure: Hook → Story → Reflection (800-1000 words)
   - Outline includes:
     - HOOK: 8-year-old Django codebase resurrection question
     - STORY: Strategic assessment, first session, SESSION_START_PROMPT pattern
     - REFLECTION: AI collaboration learnings, what surprised me, what's next
   - Voice: Narrative, honest, teaching-focused, meta-commentary on AI
   - Audience: Developers, technical leaders, AI enthusiasts

3. ✅ **Hook → Story → Reflection Structure Enforced**
   - Both drafts explicitly labeled with three-part structure
   - Word count targets for each section
   - Clear narrative arc built into outlines
   - Maintains consistency with best writing patterns

**Next Actions:**
- Bart to read and flesh out Merchant Post 1 draft
- Bart to read and flesh out Claude Code Part 1 draft
- Both posts ready for parallel development
- Publishing schedule: Claude Code (Jan 28), Merchant (Jan 31)

**Key Decision:** Working on both series in parallel to maintain momentum

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
