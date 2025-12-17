# Agentic Personal Trainer Blog Series Plan

**Status**: COMPLETE - All 9 parts published
**Series Dates**: December 6-14, 2025
**Project**: ~/Projects/agentic-personal-trainer

---

## Quick Start for New Sessions

**Read this first** when starting a new Claude Code session:

1. This is a 9-part blog series about building a conversational AI personal trainer
2. All 9 draft files exist in `daily-posts/` (Dec 6-14, 2025)
3. **Session A COMPLETE**: Testing infrastructure built in agentic-personal-trainer
4. **Session B COMPLETE**: Part 8 updated with real code from test scripts
5. **Session C COMPLETE** (Dec 10, 2025): Proofreading walkthrough (Parts 1-9) + image generation
   - **Parts 1-5 COMPLETE** - proofread, edited, images generated, published/scheduled
   - **Parts 6-9 COMPLETE** - proofread, edited, images generated (Dec 10)
     - Used new nano-banana JPEG workflow for Parts 7-9
     - Fixed callback tracking bug in debug-conversation.js
     - All parts now have accurate content and working images
6. Session D - Final Review & Publishing
7. **Session E - PLANNED**: Nano-banana enhancement project (after Part 9 complete)
   - Automate PNG→JPEG conversion and file size optimization
   - Add --output path support for direct file placement
   - Write blog post about the enhancement
   - See: personal-notes/nano-banana-enhancements.md

---

## Series Complete (as of Dec 15, 2025)

### Published Posts:
| Part | Date | Title | Category | Status |
|------|------|-------|----------|--------|
| 1 | Dec 6 | Architecture and Philosophy | Learning | **Published** |
| 2 | Dec 7 | The Tool System | Building | **Published** |
| 3 | Dec 8 | The System Prompt | Learning | **Published** |
| 4 | Dec 9 | Garmin Integration | Building | **Published** |
| 5 | Dec 10 | Smart Duplicate Detection | Building | **Published** |
| 6 | Dec 11 | Memory and Learning | Building | **Published** |
| 7 | Dec 12 | LLM Provider Abstraction | Building | **Published** |
| 8 | Dec 13 | Testing and Debugging Agents | Measuring | **Published** |
| 9 | Dec 14 | Lessons Learned | Learning | **Published** |

### What's Done:
- All 9 draft files created with correct naming convention
- Navigation links updated to use full slugified titles
- "Part X of 9" footers correct in all parts
- External resource links added throughout
- Categories varied (Learning/Building/Measuring)
- ASCII diagram comments included for image generation
- "Thanks for following along!" added to Part 9
- **Testing infrastructure built** (Session A complete Dec 2, 2025)

### What's Done:
- [x] ~~Part 8 needs updating to reference actual implementations~~ (DONE - Dec 3, 2025)
- [x] ~~Parts 1-3 proofread, images generated, ASCII removed~~ (DONE - Dec 3-4, 2025)
- [x] ~~Parts 4-5 proofread, images generated, ASCII removed~~ (DONE - Dec 9, 2025)
- [x] ~~Parts 6-9 proofread, images generated, ASCII removed~~ (DONE - Dec 10, 2025)
- [x] ~~All 9 parts complete and ready for publishing~~

---

## Multi-Session Plan

### Session A: Build Testing Infrastructure (COMPLETE - Dec 2, 2025)
**Goal**: Create the debugging/testing code that Part 8 describes

**What was built in `~/Projects/agentic-personal-trainer`:**

1. **`src/scripts/test-tools.js`** - 18 unit tests for all 8 tools
   - Uses `tool.invoke()` to test each tool in isolation
   - Tests valid inputs, edge cases, error handling
   - Run: `npm run test:tools`

2. **`src/scripts/debug-conversation.js`** - 6 scripted test scenarios
   - Uses LangChain `BaseCallbackHandler` to track tool calls
   - Validates agent selects expected tools for each input
   - Run: `npm run debug:conversation`

3. **`src/scripts/debug-tool-selection.js`** - Debug tool reasoning
   - Shows LLM prompts, responses, tool executions
   - Has interactive mode (`--interactive`)
   - Run: `npm run debug:tool "your prompt"`

**Bug discovered and fixed:**
- Changed all tools from `Tool` to `DynamicTool` (original pattern wasn't working)
- Added string coercion wrapper in trainer-agent.js
- Added `cleanResponse()` function
- Set verbose: false by default

**Commit**: 13 files changed, 1269 insertions

### Session B: Update Part 8 with Real Code (COMPLETE - Dec 3, 2025)
**Goal**: Replace placeholder code in Part 8 with actual implementations

1. ~~Read the actual test scripts we built~~ ✅
2. ~~Update Part 8 code examples to match reality~~ ✅
3. ~~Update GitHub line number references~~ ✅
4. ~~Verify the post is accurate to the code~~ ✅

**Changes made**:
- Updated `verbose: true` line reference to trainer-agent.js:79-83
- Replaced test-tools.js example with actual `runTest()` function using `.invoke()`
- Added `ToolCallTracker` class using LangChain's `BaseCallbackHandler`
- Added new section about Tool→DynamicTool bug discovery
- Referenced `wrapToolWithStringCoercion()` function at trainer-agent.js:14-24

### Session C: Proofreading Walkthrough (IN PROGRESS - Dec 3, 2025)
**Goal**: Final review of all 9 parts with author

1. Walk through each part (1-9) in order
2. Author reads each post and shares questions/comments
3. Make edits as needed based on feedback
4. Ensure narrative consistency and accuracy
5. Generate image for each part after proofreading
6. Remove ASCII diagram after image confirmed

**Part 1 edits made:**
- Added link to stock trading series in hook
- Changed "I'm building" to "I've built a prototype"
- Added "Here's a condensed version" before code snippet
- Changed "safety" to "enjoyment"
- Added "check your injury history" for personalization
- Added "keeps coming back to the agent for advice" to success metrics
- Softened "shaped every technical decision" to "influenced how I approached"
- Updated tags: removed triathlon/personal-trainer, added prompt-engineering
- Image generated and saved to `assets/agentic-personal-trainer/agentic-personal-trainer-part-1.jpg`
- ASCII diagram removed

**Part 2 edits made:**
- Changed "I built 8 tools" to "The prototype contains 8 tools"
- Replaced personal claim about time spent on descriptions with general advice
- Updated tags: removed triathlon
- Image generated and saved
- ASCII diagram removed

**Part 3 edits made:**
- Rewrote hook to focus on iteration/intuition vs syntax
- Replaced hypothetical "What Didn't Work" examples with real experiences:
  - Injury over-awareness (agent mentioned injuries in every response)
  - Drill sergeant behavior (agent pushed structured event-focused plans)
- Added note about prompt length ("30 lines, every line earns its place")
- Softened claim about all-caps formatting effect, added note about future experimentation
- Depersonalized reflection while keeping authentic voice where appropriate
- Image generated and saved
- ASCII diagram removed

**Parts 6-9 edits made (Dec 10, 2025):**

**Part 6:**
- Fixed image path to correct subdirectory
- Added comprehensive context window discussion (Llama 8K vs Gemini 1M tokens)
- Clarified learned_preferences is infrastructure-only, not yet used
- Distinguished vector embeddings vs learned preferences as complementary approaches
- Added link to EmbeddingGemma series for vector embeddings context
- Updated code examples to reflect "not yet implemented" status
- Updated ASCII diagram with ✓ and ⚠ symbols
- Updated tags: added vector-embeddings and personalization
- Image generated with manual workflow

**Part 7:**
- Fixed image path
- Removed specific cost claims ($0, $1.50/mo), replaced with "no API costs" and "pay per token"
- Updated hardware requirements (modern Apple Silicon with sufficient RAM)
- Depersonalized iteration claims
- Updated ASCII diagram to show tradeoffs (No API $, 8K ctx vs Pay/use, 1M ctx)
- Image generated with NEW automated nano-banana JPEG workflow ✅

**Part 8:**
- Fixed image path
- Restructured flow: verbose mode → tool validation → scripted conversations → tool selection debugging
- Added 4th debugging layer (debug-tool-selection.js) with real output examples
- Ran debug-conversation.js tests, discovered callback tracking bug
- Fixed callback bug with separate Claude agent
- Included real passing test results (6/6)
- Documented two real bugs: Tool→DynamicTool and callback registration
- Added tags: scripted-tests and testing-agent-behavior
- Image generated with automated nano-banana workflow ✅

**Part 9:**
- Fixed image path
- Added 6th lesson: "Testing agents is fundamentally different"
- Standardized all cross-reference links to "see [Part X]" pattern
- Updated ASCII diagram from 5 to 6 lessons
- Consolidated reflection paragraph (removed redundancy)
- Replaced "what I'd do differently" with "prototype accomplished its goal"
- Listed all future enhancements mentioned across Parts 1-8 (removed mobile interface)
- Image generated with automated nano-banana workflow ✅

**Image naming convention:** `assets/agentic-personal-trainer/agentic-personal-trainer-part-X.jpg`

**Key proofreading principles established:**
- Depersonalize claims that can't be backed up by commit history
- Keep authentic "I" statements for actual experiences
- Tags should be tech-focused (removed "triathlon" from all parts)
- nano-banana prompts need escaped quotes

### Session D: Final Review & Publishing
**Goal**: Polish and publish

1. Final proofread of all 9 parts
2. Remove ASCII diagram comments (images now exist)
3. Verify all links work
4. Set `published: true` in frontmatter
5. Remove `-draft` suffix from filenames
6. Commit and push

---

## Series Overview

A 9-part series on building a conversational AI personal trainer for triathletes using LangChain, with multi-provider LLM support and Garmin integration.

**Key themes**:
- Conversational AI patterns (different from autonomous agents)
- Real-world integration challenges (Garmin, duplicate detection)
- Local-first with cloud fallback ($0 vs ~$1.50/month)
- Domain-specific coaching (triathlon, injury awareness)
- Testing and debugging agents (poorly covered topic)

---

## Part-by-Part Summary

### Part 1: Architecture & Philosophy (Dec 6)
- LangChain agent executor pattern
- "Feelings > Metrics" coaching philosophy
- Tool-based architecture overview
- Links: LangChain docs, LM Studio

### Part 2: The Tool System (Dec 7)
- 8 tools across 3 categories (injuries, workouts, schedule)
- Tool descriptions as LLM UX
- Links: LangChain tools docs

### Part 3: The System Prompt (Dec 8)
- Full system prompt breakdown
- 5 layers: role, philosophy, domain, behaviors, personality
- "Coach, not drill sergeant" anchor line
- What didn't work: injury over-awareness, drill sergeant behavior
- Links: Prompting Guide

### Part 4: Garmin Integration (Dec 9)
- garmin-connect npm package
- Activity type normalization
- Auto-sync on startup
- Teases duplicate detection problem
- Links: garmin-connect npm

### Part 5: Smart Duplicate Detection (Dec 10)
- 3-layer deduplication system
- External ID, fuzzy matching, quality scoring
- Prefers direct device over third-party syncs
- Links: fuzzy matching Wikipedia

### Part 6: Memory & Learning (Dec 11)
- BufferMemory for session, SQLite for persistence
- Loading last 5 conversations on startup
- learned_preferences table with confidence scores
- Links: LangChain memory docs

### Part 7: LLM Provider Abstraction (Dec 12)
- Factory pattern for provider switching
- Local ($0) vs Gemini (~$1.50/mo) vs Claude
- Environment variable switching
- Links: Factory pattern, LM Studio, Llama

### Part 8: Testing and Debugging Agents (Dec 13)
- verbose: true transforms debugging
- Tool validation with test-tools.js
- Scripted conversations with debug-conversation.js
- Agent debugging is about judgment, not crashes
- Tool→DynamicTool bug discovery story
- Links: LangChain debugging docs

### Part 9: Lessons Learned (Dec 14)
- 5 key lessons
- Prompt > Code
- Local-first development
- Tool descriptions are UX
- Data quality > model quality
- Conversational != Autonomous
- "Thanks for following along!"

---

## Key Comparisons with Stock Trader Series

| Aspect | Stock Trader | Personal Trainer |
|--------|--------------|------------------|
| Framework | Custom MCP servers | LangChain agent |
| Interaction | Autonomous trading | Collaborative coaching |
| Risk | Financial (high stakes) | Safety-first (no harm) |
| Focus | Optimization/returns | User experience/sustainability |
| Data | Real-time market data | Historical workouts |
| Execution | Makes actual trades | Suggestions only |

---

## Project Stats

- Total Lines of Code: ~2,000 (src only)
- Database Tables: 6
- Tools: 8
- Supported Workout Types: 8 (swim, bike, run, strength, yoga, walk, hike, other)
- LLM Providers: 3 (LM Studio, Gemini, Claude-ready)
- Cost (100% Local): $0
- Cost (with Gemini): ~$1.50/month

---

## Key Files Reference

| File | Purpose |
|------|---------|
| src/agent/trainer-agent.js | LangChain agent setup, system prompt |
| src/chat-with-tools.js | Main chat loop, Garmin auto-sync |
| src/integrations/garmin.js | Garmin auth, duplicate detection |
| src/database/db.js | All database operations |
| src/database/schema.js | SQLite schema |
| src/tools/workout-tool.js | Workout history, suggestions |
| src/tools/injury-tool.js | Injury tracking |
| src/tools/schedule-tool.js | Schedule management |
| src/utils/llm-factory.js | Provider abstraction |
| src/scripts/test-tools.js | 18 unit tests for tools |
| src/scripts/debug-conversation.js | 6 scripted test scenarios |
| src/scripts/debug-tool-selection.js | Debug tool reasoning |

---

## Notes

- This file is gitignored (in personal-notes/)
- Follow format: Hook, Story, Reflection
- Each post has ASCII diagram for nano-banana image prompt
- Delete ASCII diagrams before publishing (after images created)
- Tags: space-separated format for Squarespace
- Publish one part per day starting Dec 6
