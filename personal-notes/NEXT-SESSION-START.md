# Session Start Prompt for Next Blog Writing Session

Read README.md to get up to speed on this blog project, then read personal-notes/agentic-personal-trainer-series-plan.md and personal-notes/gemma-finetune-bluey-series-plan.md for context on completed and upcoming series.

## Current Status (as of Dec 17, 2025)

### Completed Series:
- **MCP Stock Trading** (5 parts) - Published
- **EmbeddingGemma/Local Semantic Search** (5 parts) - Published
- **Agentic Personal Trainer** (9 parts) - All published (Dec 6-14, 2025)

### Published:
- **Dec 15**: Nano-banana enhancement post (published Dec 17)
- **Dec 17**: Gemma/Bluey Part 1 (proofread, image generated, published)
- **Dec 19**: Gemma/Bluey Part 2 (proofread, image generated, published)

### Ready to Publish:
- **Dec 22**: Gemma/Bluey Part 3 (FULLY PROOFREAD, images generated, ready for publishing)
- **Dec 24**: Gemma/Bluey Part 4 (FULLY PROOFREAD, image generated, ready for publishing)

### In Progress:
- **Dec 26-Jan 5**: Gemma/Bluey Parts 5-9 (language consistency updates complete, need images)

### Session F Complete (Dec 17, 2025):

**Major Accomplishments:**

**1. Publishing Schedule Change - Daily to M/W/F:**
- Switched blog from daily to Monday/Wednesday/Friday publishing
- Frees time for content sharing/promoting (action vs motion)
- Updated README.md to reflect M/W/F schedule throughout
- Removed "daily" from Gemma series footers (all 9 parts)
- Renamed Gemma series files to M/W/F dates (Dec 17, 19, 22, 24, 26, 29, 31, Jan 2, 5)

**2. Agentic Personal Trainer Series Complete:**
- Committed Part 9 to git
- Pushed to remote repository (switched gh user to bart-mosaicmeshai)
- All 9 parts now published and in git

**3. Gemma/Bluey Part 4 - Experimental Verification:**
- Ran actual experiments to verify blog post claims
- Tested model WITHOUT min_new_tokens: 12-63 word responses (all truncated)
- Tested model WITH min_new_tokens=50: 37 words (still limited)
- Discovered "60-200 word" claim in draft was not backed by data
- Created test_min_tokens_fix.py in gemma-local-finetune project
- Updated Part 4 with accurate experimental results
- Reframed claims as hypotheses requiring testing
- Generated image for Part 4 (regenerated to fix hypothesis test visualization)

**4. Voice and Tone Guidelines Established:**
- Created personal-notes/writing-voice-and-tone.md (comprehensive guide)
- Updated README.md with "Voice and Tone: No Hype, Be Honest" section
- Updated NEXT-SESSION-START.md proofreading principles
- Documented five key guidelines:
  1. Epistemic humility (observations vs interpretations)
  2. Tentative language for hypotheses (may, possible, likely)
  3. Scope claims to actual experiments
  4. Avoid absolutes unless verified
  5. Suggest tests for unverified hypotheses

**5. Gemma/Bluey Parts 5-9 - Language Consistency Updates:**
- Applied same rigorous proofreading to Parts 5-9
- Changed "learned" → "reproduced" throughout
- Changed "dramatically" → "significantly"
- Changed "solves" → "addresses"
- Changed "works for any" → "worked for this, should work for"
- Changed "beat" → "worked better than"
- Added "may have" to all hypothesis claims
- Updated ASCII diagrams to match tentative language
- All 9 parts now have consistent voice/tone

**Key Pattern Established:**
When making claims about ML behavior:
- Observable behavior = confident language
- Internal mechanisms = tentative language
- Hypotheses = suggest how to test them
- Partial solutions = don't call them "fixes"

**Files Created/Modified:**
- Created: test_min_tokens_fix.py (in gemma-local-finetune)
- Created: personal-notes/writing-voice-and-tone.md
- Modified: README.md (M/W/F schedule + voice/tone section)
- Modified: Gemma series Parts 4-9 (all 6 files)
- Modified: NEXT-SESSION-START.md (status updates + voice/tone reference)
- Modified: personal-notes/agentic-personal-trainer-series-plan.md (marked complete)

**Publishing Status:**
- Dec 15: Nano-banana post (published)
- Dec 17: Gemma Part 1 (published)
- Dec 19: Gemma Part 2 (published)
- Dec 22: Gemma Part 3 (ready)
- Dec 24: Gemma Part 4 (ready)
- Dec 26-Jan 5: Gemma Parts 5-9 (text ready, need images)

### Session E Complete (Dec 13, 2025):

**Gemma/Bluey Part 3 - Complete Proofread with Real Data:**
- Ran live training during session to capture actual metrics (5-minute training run)
- Captured Activity Monitor data: 41GB RAM usage, 96.5% GPU utilization, 10% battery drain
- Verified loss curves: 5.0 → 0.1 (matches original claims)
- Updated all training times to 4.9 minutes (verified via live run)
- Removed untested 2B model estimate (keeping only tested 270M and 1B models)
- Removed hallucinated Activity Monitor claim, replaced with real measured data
- Generated 2 images for Part 3:
  - Training performance metrics diagram (nano-banana generated)
  - GPU History screenshot showing full training cycle (captured during live run)
- Added personal narrative: training run happened in high school cafeteria during daughter's basketball game
- Emphasized cost/benefit: M4 Max with 128GB RAM investment vs no cloud/API fees + privacy
- Removed `m4-max` tag (too product-specific), kept tech-focused tags
- Removed technical spec detail (unified memory architecture) from Reflection, replaced with workflow benefits

**Key accomplishment:** Part 3 now has 100% verified, measured data with visual proof. No hallucinated claims.

### Session D Complete (Dec 12, 2025):

**Gemma/Bluey Parts 1-2 accomplishments:**
- Proofread and corrected both parts for accuracy
- Updated dataset size from 110 to 111 examples (verified against actual data)
- Softened claims throughout all 9 parts (changed "learned personality" to "learned to mimic speech patterns", etc.)
- Removed weasel words ("well", "effectively", etc.)
- Fixed "free"/"$0" claims to "no API costs" (acknowledging electricity costs)
- Removed vague benefits ("Iteration", "Full control")
- Updated Part 1 to reflect multiple model experiments (270M, 1B-pt, 1B-it)
- Added personal touch (daughter loved Bluey show)
- Clarified dataset was AI-generated via Claude.ai, not carefully curated
- Added Google search link for Bluey character
- Added JSONL format link
- Added forward reference to Part 4 for response length problem
- Generated images for Parts 1-2 with nano-banana
- Published Parts 1-2 in Squarespace (Dec 16-17)

**Key editorial decisions:**
- Frame as proof-of-concept/experiment, not fully successful production system
- Remove subjective qualifiers (well, effectively, successfully, perfectly)
- Change "free" to "no API costs" (acknowledges electricity but emphasizes no cloud fees)
- Use "mimic speech patterns" instead of "learned personality"
- Use "demonstrate approach" instead of "capture personality"

**Technical corrections made across all 9 parts:**
- 111 examples (not 110)
- Response length: 52-76 words (average 65.4)
- Training times: 270M=1.6min, 1B-pt=4.9min, 1B-it=4.9min (updated in Session E)
- Model size: 1.0GB → 700MB (30% reduction)
- Activity Monitor metrics (Session E): 41GB RAM, 96.5% GPU utilization, 10% battery drain

### Session C Complete (Dec 10, 2025):

**Agentic Personal Trainer Parts 6-9 accomplishments:**
- Part 6: Added context window discussion (8K vs 1M tokens), clarified learned_preferences infrastructure-only, added vector embeddings link to EmbeddingGemma series
- Part 7: Fixed cost claims, updated hardware requirements, depersonalized iteration claims
- Part 8: Restructured flow, added 4th debugging layer (debug-tool-selection.js), ran tests and fixed callback bug, included real test results (6/6 passed)
- Part 9: Added 6th lesson on testing, standardized cross-reference links, consolidated reflection

**Nano-banana enhancement:**
- Implemented automated JPEG output (separate Claude agent, 20 minutes)
- Used for Parts 7-9 image generation (saved 15 minutes)
- Dec 15 post drafted and image generated (meta break-even moment!)

**Gemma/Bluey series:**
- Created all 9 draft files (Dec 16-24)
- Series explores fine-tuning small models for personality on Apple Silicon
- Ready for proofreading walkthrough in future session

**Git commits:**
1. Part 4 + Parts 5-9 images + README updates (committed and pushed)
2. Asset reorganization + Dec 15 image (committed and pushed)

## Key Workflow Patterns Established

**Image generation:**
- Use nano-banana with automated JPEG workflow:
  ```bash
  nano-banana generate "prompt" --output ~/Projects/mosaic-mesh-ai-blog/assets/series-name/filename.jpg --model 3 --resolution 1K
  ```
- Claude Code runs this command directly during sessions
- Remove ASCII diagrams after images generated

**Proofreading principles:**
- **READ personal-notes/writing-voice-and-tone.md FIRST** - Contains voice/tone guidelines
- Use tentative language for hypotheses (may, possible, likely vs definitive claims)
- Distinguish observations from interpretations ("reproduced" vs "learned")
- Scope claims to actual experiments (not universal recommendations)
- Avoid absolutes unless verified (significantly vs dramatically, addresses vs solves)
- Suggest tests for unverified hypotheses
- Depersonalize claims not backed by commit history
- Keep authentic "I" statements for actual experiences
- Verify code references against actual repositories
- Check git history to support iteration/refinement claims
- Tags should be tech-focused (avoid tool-specific like "garmin", "wahoo")
- Standardize cross-reference patterns (e.g., "see [Part X]")

**Cross-series linking:**
- Link between series when relevant (Agentic Trainer ↔ EmbeddingGemma)
- Build on previous series concepts
- Reference related work appropriately

## Next Steps

**Continue Gemma/Bluey series - Generate Images** (Parts 5-9):
- Parts 1-4 are COMPLETE (proofread, language consistency verified, images generated)
- Parts 5-9 have language consistency updates complete, need images
- Generate images with nano-banana for Parts 5-9
- Replace ASCII diagrams with image captions
- Review tags for tech focus (avoid tool-specific tags)
- All parts follow voice/tone guidelines in personal-notes/writing-voice-and-tone.md

2. **Start new content**
   - Use daily-blog scanner to find recent work
   - Explore other projects (bart-test, Marina-Winterization, etc.)

## Files to Reference

**Blog infrastructure:**
- README.md - Overall blog project documentation
- **personal-notes/writing-voice-and-tone.md** - Voice/tone guidelines (READ FOR ALL PROOFREADING)
- personal-notes/agentic-personal-trainer-series-plan.md - Session history and accomplishments
- personal-notes/gemma-finetune-bluey-series-plan.md - New series plan (9 parts)
- personal-notes/nano-banana-enhancements.md - Enhancement tracking and Dec 15 post plan
- personal-notes/agent-testing-deep-dive.md - Future series idea on testing
- personal-notes/claude-code-writing-workflow.md - Meta post idea about this workflow

**Project repos to verify against:**
- ~/Projects/agentic-personal-trainer
- ~/Projects/gemma-local-finetune
- ~/Projects/nano-banana-experiments

## Tools Available

- **nano-banana**: For image generation with automated JPEG output
  - See personal-notes/nano-banana-usage-notes.md for complete command template
  - Must activate venv from ~/Projects/nano-banana-experiments
  - Images go to assets/gemma-finetune-bluey/
- **daily-blog**: For scanning git activity and generating post ideas
- **Claude Code**: That's you! Keep verifying claims against actual code and git history

## Git Configuration

- User: Bart Gottschalk <bart@mosaicmeshai.com>
- GitHub user: bart-mosaicmeshai (already active)

---

Ready to continue the blogging workflow! Let me know which series you want to work on.
