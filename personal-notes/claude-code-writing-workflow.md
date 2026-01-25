# How I Use Claude Code to Write Blog Series

**Status**: Future blog post or series idea
**Created**: Dec 10, 2025
**Category**: Questioning or Learning
**Project**: mosaic-mesh-ai-blog

---

## The Concept

A meta post (or series) about the actual workflow of using Claude Code as a writing partner to create technical blog series. Not theoretical "how AI can help writers"—the actual, messy, iterative process we use.

---

## Why This Would Be Interesting

**Unique angle:**
- Most AI writing content is about "AI replacing writers" or basic "use ChatGPT for brainstorming"
- This is about **collaborative technical writing** with an AI agent
- Shows the real workflow: prompts, iterations, fact-checking, code verification
- Demonstrates AI as a peer, not a replacement

**Authentic evidence:**
- Real session transcripts from Agentic Personal Trainer Parts 6-9
- Actual edits and iterations (Part 6 context window discussion)
- Real bugs discovered (Part 8 callback tracking)
- Code verification against actual repositories
- The nano-banana enhancement discovered mid-session

**Valuable for readers:**
- Developers building AI tools who want to document their work
- Technical writers exploring AI collaboration
- Anyone doing "building in public" with AI assistance

---

## Evidence from Recent Sessions

### Session E (Jan 24, 2026) - Claude Code Part 1: The Interview Method

**What happened:**
1. User felt overwhelmed by starting two long series (Claude Code 48-52 parts, Merchant 20 parts)
2. Claude suggested: "Start with Claude Code Part 1. It's just one blog post."
3. Instead of having user write, Claude used **interview method**:
   - Asked targeted questions to extract information
   - User answered conversationally (not writing)
   - Claude drafted sections based on answers
   - Iterated with user feedback and corrections
4. Drafted complete post through Q&A: Hook, Story (3 sections), Reflection
5. User made inline edits with [BG:] comments
6. Claude addressed all comments, added GitHub links
7. Complete post drafted in ~2 hours

**The Interview Method Pattern:**

**When to use:** User is stuck, overwhelmed, or doesn't know where to start writing

**How it works:**
1. **Break post into small sections** (Hook, Story parts 1-3, Reflection)
2. **Ask specific questions** for each section:
   - "What was the moment when X happened?"
   - "What surprised you about Y?"
   - "If someone wanted to replicate this, what would you tell them?"
3. **User answers conversationally** - no pressure to "write"
4. **Claude drafts based on answers** - preserves user's voice and words
5. **User reviews and corrects** - treats it like editing, not writing from scratch
6. **Iterate until approved** - move to next section

**Why it works:**
- Removes writer's block (talking is easier than writing)
- Preserves authentic voice (uses user's actual words)
- Maintains narrative flow (Claude structures answers into story)
- User corrects rather than creates (less intimidating)
- Iterative and collaborative (not "Claude writes, user accepts")

**Key collaboration patterns:**
- **Question-driven extraction**: Targeted questions pull out specific information
- **Conversational answers**: User talks naturally, Claude captures it
- **Real-time corrections**: "October not November", "check the test count", etc.
- **Inline [BG:] comments**: User edits draft with comments, Claude addresses them
- **GitHub link additions**: Claude added 6+ links to source repos and docs
- **Voice preservation**: Used user's metaphors ("eager intern", "army of interns")
- **Fact verification**: Checked baseline test count, session count, git history

**Example exchange:**
- Claude: "When exactly did you decide to resurrect StartUpWebApp? What triggered it?"
- User: "This is something I've wanted to do for several years. But I didn't have the available time..."
- Claude: [drafts Hook incorporating this language verbatim]
- User: "It was actually October, not November when this all started"
- Claude: [corrects immediately]

**Critical lessons learned:**
1. **Interview beats blank page** - Asking questions extracts better content than "write this section"
2. **Talk, don't write** - User resistance drops when answering questions vs writing prose
3. **Use their words** - Direct quotes from answers preserve authentic voice
4. **Small sections** - Hook (150 words) feels manageable, "write 1000 words" doesn't
5. **Correct iteratively** - "October not November" style corrections keep momentum
6. **Meta awareness** - User noted: "It's very similar to this writing session—you're drafting, I'm correcting"
7. **Build confidence gradually** - Starting with Hook → success → momentum for Story
8. **Session continuity pattern applies to writing** - Same SESSION_START_PROMPT concept user used for SWA

**User feedback:**
> "I really liked this 'interview' style that you use in this session to extract info out of me. I would have really struggled to write this otherwise."

**Result:**
- Complete 1000+ word blog post drafted and refined
- User went from "overwhelmed" to post ready for images/publishing
- All facts verified against source repos
- Authentic voice preserved throughout
- User confident to continue with Part 2

### Session D (Jan 9-10, 2026) - Bart Test Parts 3-5

**What happened:**
1. Part 3 proofreading with [BG:] comments
2. Verified ALL quotes/claims against bart-test repository
3. Found experiment numbering confusion (Exp 03 not clearly labeled)
4. Updated bart-test repo to clarify Experiment 03 in human_reviews file
5. Fixed GPT-4o vs GPT-5.2 filename mismatch, renamed file in repo
6. Part 4: Fixed model versions, added direct links, strengthened teaser
7. Part 5: Complete rewrite from lifeless lists to narrative with doubt
8. Generated focused images for Parts 3-4 (zoo-not-duck, favor-to-labor, hybrid-workflow)

**Key collaboration patterns:**
- **Iterative editing**: BG edits file with comments, Claude discusses before implementing
- **Source verification**: Checked every claim against git files, caught inconsistencies
- **Repository fixes**: Renamed misleading filenames, updated documentation for clarity
- **Narrative coaching**: Identified Part 5 was "lists not story", rewrote with voice and emotion
- **Image strategy**: Simple focused images supporting narrative, not poster-style reproductions
- **Link clarity**: Changed "Part 1 and 2" to explicit experiment numbers (ambiguous otherwise)

**Critical lessons learned:**
1. **Narrative over lists** - Bullet points kill voice; need emotion, process, doubt
2. **Verify EVERYTHING** - Model versions, file names, experiment numbers all need checking
3. **Clear labeling matters** - Experiment 03 confusion required repo documentation fix
4. **Images should enhance, not replace** - One focused image at emotional moment > multiple decorative images
5. **Simple images work best** - Support the narrative rather than trying to be comprehensive posters
6. **Iterative review works** - User edits with comments, Claude verifies/discusses before changes
7. **Links need explicit context** - "Part 1 and 2" could mean blog parts OR experiments (ambiguous!)
8. **Find the story** - Even methodology posts need narrative arc (doubt → attempt → mixed results)

### Session C (Dec 10, 2025) - Agentic Personal Trainer Parts 6-9

**What happened:**
1. Started with proofreading Part 6
2. Discovered "last 5 conversations" was arbitrary, undocumented
3. Deep dive into context windows (8K vs 1M tokens)
4. Clarified learned_preferences is infrastructure-only
5. Added vector embeddings cross-reference to EmbeddingGemma series
6. Discovered nano-banana workflow friction mid-session
7. Spawned separate agent to fix nano-banana (20 min enhancement)
8. Used new workflow for Parts 7-9 (saved 15 minutes)
9. Fixed Part 8 callback tracking bug with another agent
10. Ran actual tests to get real output for Part 8
11. Created 9-part Gemma/Bluey series drafts

**Key collaboration patterns:**
- **Fact-checking**: Claude verified claims against git history
- **Code cross-referencing**: Read actual code to confirm blog accuracy
- **Consistency enforcement**: Applied learned_preferences pattern across parts
- **Link standardization**: "see [Part X]" pattern across Part 9
- **Real-time problem solving**: Fixed tools while writing about them
- **Meta moments**: Enhancement paid for itself while writing about it

### Session Artifacts

**Documents created/edited:**
- 4 blog posts proofread and edited (Parts 6-9)
- 1 new blog post drafted (Dec 15 nano-banana)
- 9 new series drafts created (Gemma/Bluey)
- 3 personal notes files updated
- README.md updated with workflow
- 5 images generated with new automated workflow

**Technical work completed:**
- nano-banana JPEG automation (separate agent)
- debug-conversation.js callback bug fix (separate agent)
- Asset reorganization

**Commits made:**
- Part 4 + Parts 5-9 images
- Asset reorganization

---

## Potential Post/Series Structures

### Option A: Single Meta Post (Dec 26-27?)
**Title**: "How I Use Claude Code to Write Technical Blog Series"

**Content:**
- The workflow (read → verify → edit → generate images → commit)
- Spawning separate agents for mid-session bugs
- Fact-checking against git history
- Real example: Part 6 context window deep dive
- The nano-banana automation discovery
- ROI: faster writing, more accurate content, better cross-references

**Hook**: "I wrote 9 blog posts about AI with an AI writing partner. Here's the workflow that emerged."

### Option B: 3-Part Mini-Series
**Part 1**: "Writing Technical Content with an AI Agent"
- The basic workflow
- How Claude verifies code claims
- Real example from Part 6

**Part 2**: "When Your Writing Partner Fixes Your Tools"
- The nano-banana discovery mid-session
- Spawning separate agents for bugs
- Using the enhancement while writing about it

**Part 3**: "The Meta Workflow: Lessons from 27 AI Blog Posts"
- What works (fact-checking, cross-references)
- What doesn't (over-relying on AI without verification)
- The human-AI collaboration sweet spot

### Option C: Ongoing "Behind the Scenes" Posts
- Don't make it a series
- Write occasional meta posts about interesting sessions
- "How Claude Caught My Unsupported Claims"
- "The Bug We Fixed While Writing About Testing"
- "Spawning Sub-Agents: AI Agents All The Way Down"

---

## Key Themes to Cover

**The Workflow:**
- Session start prompts and context loading
- Reading code to verify blog claims
- Iterative editing based on what we find
- Cross-referencing between series
- Image generation with nano-banana
- Git commits with Claude

**The Collaboration:**
- Claude catches unsupported claims ("dozens of prompt variations")
- Claude reads actual code to verify line numbers
- Claude spots inconsistencies across parts
- Human provides direction, AI provides thoroughness
- Real-time course correction

**The Tools:**
- Claude Code CLI and its capabilities
- Spawning separate agents for parallel work
- The Read/Edit/Bash tool patterns
- nano-banana integration
- Git workflow

**The Meta Moments:**
- Building tools while writing about them
- Enhancement paying for itself generating its own blog image
- Testing tools to write about testing
- AI writing about AI development

**The Challenges:**
- Keeping AI grounded in facts (git history verification)
- Balancing speed with accuracy
- When to trust AI vs when to verify
- Managing context window across long sessions

---

## What Makes This Different

**Not another "I used ChatGPT to write" post:**
- This is about technical accuracy, not content generation
- Shows the verification process, not just output
- Demonstrates specialized tools (Claude Code CLI), not generic chat
- Covers code verification, git history checking, spawning sub-agents
- Real examples of catching and fixing inaccuracies

**The honest parts:**
- Times Claude was wrong (unsupported claims)
- When verification is critical (code references, git history)
- The friction points (manual image workflow before automation)
- What humans still do better (judgment calls, direction)

---

## Timing Considerations

**Pros of writing this soon:**
- Fresh memory of the session details
- Can reference recent posts (Agentic Personal Trainer, nano-banana)
- Demonstrates real value of the workflow

**Cons of writing this soon:**
- Might want more session examples first
- Could benefit from patterns across multiple series
- Risk seeming too "meta" too quickly

**Recommendation:** Wait until after Gemma/Bluey series complete AND Claude Code series is well underway. Then you'll have substantial evidence:
1. Agentic Personal Trainer (9 parts) - COMPLETE
2. Nano-banana enhancement (1 part) - COMPLETE
3. Gemma/Bluey fine-tuning (8 parts) - COMPLETE (Jan 2026)
4. Bart Test (5 parts) - Launching Jan 5-14, 2026
5. Claude Code series (48-52 parts) - Launching Jan 17, 2026
6. Merchant series (20 parts) - Launching Jan 31, 2026 (monthly)

That's 90+ posts written with this workflow—extremely strong evidence base.

**Timing:** Write this meta-series around mid-2026 when you have 6+ months of Claude Code collaboration documented. This becomes the "capstone" series showing how all the other series were written.

---

## Session Evidence to Capture

**For this specific session (Dec 10):**
- Total time: ~4-5 hours
- Posts processed: 4 (Parts 6-9)
- New posts created: 1 (Dec 15) + 9 (Gemma series)
- Technical bugs fixed: 2 (nano-banana workflow, callback tracking)
- Commits made: 2
- Images generated: 4 (Parts 7-9, Dec 15)
- Separate agents spawned: 2
- Real code verified: Multiple files across 2 repos

---

## Next Actions

- **Save this note** for future reference
- **After Gemma series starts**: Revisit and decide on format
- **Collect more session examples**: Document interesting workflows as they happen
- **Build the case**: Show this workflow produces better, more accurate content faster

---

This could become signature content—showing how AI collaboration actually works in technical writing, not the sanitized marketing version.
