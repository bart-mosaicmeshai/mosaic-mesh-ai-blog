# Fine-Tuning Gemma for Personality: The Bluey Experiment

**Status**: COMPLETE - 8-part series published Dec 17, 2025 - Jan 2, 2026
**Project**: ~/Projects/gemma-local-finetune
**Series**: 8 parts (originally planned as 9, consolidated in Session I)
**Publishing**: December 17, 2025 - January 2, 2026 (M/W/F schedule)

---

## Session History

### Session I (Dec 29, 2025) - Series Consolidation: 9 Parts → 8 Parts

**Series Consolidation Decision:**
- Reviewed Part 8 (What I'd Do Differently) vs Part 9 (Lessons Learned)
- Part 8 contained generic best practices not grounded in actual experiments
- Part 9 was grounded with direct links to experimental work in earlier parts
- Decision: Cut Part 8, merge valuable content into Part 9, rename Part 9 → Part 8
- Result: Tighter, more grounded 8-part series

**Part 8 (Lessons Learned) Proofread:**
- Reframed Lesson #3: "Fine-tuning personality is iterative, not sequential"
  - Changed from naive "test parameters earlier" to sophisticated "training and parameters are interrelated processes"
  - Emphasizes cyclical workflow as default mindset, not linear steps
- Added BLEU score definition with Wikipedia link for accessibility
- Fixed overstated Apple Silicon claim: reframed as cost structure difference (upfront vs pay-as-you-go)
- Made honest about already owning M4 Max hardware
- Removed speculative "what's next" content
- Updated tags: removed non-technical (lessons-learned, retrospective), added iterative-fine-tuning
- Generated image ($0.13)

**Series-wide Updates:**
- Updated Parts 1-7: Changed all "Part X of 9" → "Part X of 8"
- Updated Part 7 transition from "what I'd do differently" to "broader lessons learned"
- Published Part 6 to blog, committed file rename
- All 6 published posts updated in Squarespace

**Key Achievement:**
- Series now 8 parts instead of 9
- Every lesson in final part links to specific experimental work
- Maintains "no hype, be honest" voice throughout
- All content grounded in actual experiments, not speculation

**Files:**
- Renamed: 2026-01-05-part-9-draft.md → 2026-01-02-part-8-draft.md
- Updated: Parts 1-7 (series numbering)
- Generated: part-8-lessons-learned.jpg

---

### Session F (Dec 17, 2025) - Part 4 Experimental Verification + Parts 5-9 Language Consistency

**Part 4 Major Updates:**
- Ran live experiments to verify blog post claims
- WITHOUT min_new_tokens: 12-63 words (all truncated mid-sentence)
- WITH min_new_tokens=50: 37 words (helped but didn't achieve claimed 60-200 words)
- Created test_min_tokens_fix.py in gemma-local-finetune project for reproducibility
- Updated Part 4 to match actual experimental results
- Reframed all claims as hypotheses requiring testing
- Changed confident language to tentative (may have, possible cause, one approach)
- Generated image (regenerated once to fix hypothesis test visualization)

**Voice and Tone Breakthrough:**
- Established comprehensive voice/tone guidelines
- Created personal-notes/writing-voice-and-tone.md
- Updated README.md with "Voice and Tone: No Hype, Be Honest" section
- Five key principles: epistemic humility, tentative language, scoped claims, avoid absolutes, suggest tests

**Parts 5-9 Language Consistency:**
- Applied same rigorous standards to all remaining parts
- "learned" → "reproduced" (observations not interpretations)
- "dramatically" → "significantly" (avoid hyperbole)
- "solves" → "addresses" (partial solutions not complete fixes)
- "beat" → "worked better than" (comparative not competitive)
- Universal directives → Scoped to this experiment
- Updated ASCII diagrams to match tentative language

**Publishing Schedule Change:**
- Switched from daily to M/W/F publishing
- Updated all documentation and file naming
- Removed "daily" from Gemma series footers

**Status After Session F:**
- Parts 1-4: COMPLETE (proofread, images, ready to publish)
- Parts 5-9: Text complete with voice/tone consistency, need images

---

## Series Concept

Fine-tuning small language models on Apple Silicon to give them personality—specifically training Gemma 3 to talk like Bluey Heeler from the kids' show. This combines local ML engineering with the surprisingly complex challenge of capturing conversational personality.

**Key Differentiators:**
- Local fine-tuning on M4 Max (not cloud/Colab)
- Personality/character training (not task-specific)
- Small models (270M-1B parameters)
- Web deployment (browser-based inference)
- Real training data (110 Bluey conversation examples)
- Actual results with documented challenges

---

## Project Status

**What's Built:**
- ✅ Training infrastructure on Apple Silicon (MPS backend)
- ✅ Bluey training dataset (111 conversation pairs in JSONL format)
- ✅ Multiple training scripts (270M-pt, 1B-pt, 1B-it)
- ✅ Chat interface for testing fine-tuned models
- ✅ Web deployment pipeline (PyTorch → ONNX → Quantized)
- ✅ Training logs from multiple experiments
- ✅ Parameter optimization experiments
- ✅ Test suite demonstrating short response problem and mitigation (test_min_tokens_fix.py)

**What Works:**
- Training completes in ~5 minutes on M4 Max
- Instruction-tuned models (-it) learn personality better than base models (-pt)
- Loss reduction 5.0 → 0.1 shows successful learning
- Model captures Bluey's speaking style and phrases

**Known Challenges:**
- Models generate short responses (matching training data 52-76 words)
- Early stopping issues (EOS token hit prematurely)
- Generation parameters critical (temperature, min_new_tokens)
- Base models struggle with personality consistency
- Need more training examples for better generalization

---

## Proposed Series Outline

### Part 1: Why Fine-Tune a 6-Year-Old?
**Category**: Learning
**Hook**: "I taught an AI to talk like a cartoon dog. Here's what I learned about personality."

**Content:**
- The appeal of local fine-tuning on Apple Silicon
- Why personality/character is harder than task-specific training
- Introducing the Bluey experiment
- The dataset: 110 conversation pairs
- What makes Bluey's voice distinctive (optimism, Australian slang, kid logic)

**Code/Data:**
- Show training dataset examples
- Bluey's conversational patterns
- Why this is different from RAG or prompt engineering

### Part 2: Building the Training Dataset
**Category**: Building
**Hook**: "110 conversations with a cartoon character taught me more about AI than any tutorial."

**Content:**
- How to create a personality training dataset
- JSONL format for chat models
- Capturing conversational voice vs facts
- Quality over quantity (110 examples is enough for basic personality)
- What to include: catchphrases, speech patterns, knowledge, tone
- What to exclude: rare scenarios, edge cases

**Code/Data:**
- Dataset structure (`messages` format)
- Example conversations
- Patterns in Bluey's responses (enthusiasm, empathy, kid perspective)

### Part 3: Training on Apple Silicon
**Category**: Building
**Hook**: "Five minutes and $0 to fine-tune an LLM on my laptop. Here's how."

**Content:**
- MPS (Metal Performance Shaders) backend for PyTorch
- Why local beats Colab for this use case (no time limits, 128GB RAM, persistent storage)
- Training script walkthrough
- Base (-pt) vs Instruction-Tuned (-it) models
- Training metrics: loss curves, timing, memory usage
- M4 Max performance data

**Code/Data:**
- train_bluey_1b_it.py walkthrough
- Training configuration
- Performance comparison: 270M vs 1B models
- Cost: $0 vs cloud GPU ($10-50/mo)

### Part 4: When Your Model Learns Too Well
**Category**: Breaking
**Hook**: "The model learned Bluey's personality perfectly. Then it refused to talk like anyone else."

**Content:**
- The short response problem (52-76 word ceiling)
- Early stopping issues (EOS token hit too soon)
- Why this happens: training data patterns become constraints
- The overfitting trade-off: personality capture vs flexibility
- Generation parameter tuning (temperature, min_new_tokens, top_p)

**Code/Data:**
- Show examples of truncated responses
- Parameter experiments from test_generation_params.py
- Before/after fixing min_new_tokens
- Training data statistics (average response length)

### Part 5: Base Models vs Instruction-Tuned
**Category**: Measuring
**Hook**: "Same training data, same hardware, different model types. The results surprised me."

**Content:**
- Pre-trained (-pt) vs Instruction-tuned (-it) comparison
- Why -it models work better for personality learning
- Training time comparison (nearly identical: ~5 min)
- Quality comparison (personality consistency, response coherence)
- When to use which type
- The 111 examples threshold

**Code/Data:**
- Training logs comparison (270m-pt vs 1b-it)
- Side-by-side response examples
- Loss curves comparison
- Personality capture metrics

### Part 6: Testing Personality (Not Just Accuracy)
**Category**: Measuring
**Hook**: "How do you test if an AI sounds like a 6-year-old dog? You can't unit test personality."

**Content:**
- Challenge: testing conversational personality vs task completion
- Human evaluation (does it sound like Bluey?)
- Consistency testing across prompts
- Catchphrase usage validation
- Tone/empathy evaluation
- The "uncanny valley" of almost-right personality

**Code/Data:**
- Test prompts and expected patterns
- Evaluation rubric for personality
- Examples of "on character" vs "breaking character"
- chat_bluey.py for interactive testing

### Part 7: From PyTorch to Browser: Web Deployment
**Category**: Building
**Hook**: "I put Bluey in your browser. No server, no API, 100% client-side inference."

**Content:**
- Why deploy to web (accessibility, privacy, cost)
- PyTorch → ONNX conversion pipeline
- Quantization (4-bit) for smaller models (~30% size reduction)
- Transformers.js + WebGPU for browser inference
- The privacy win: user data never leaves device
- Performance: browser-based inference on fine-tuned models

**Code/Data:**
- convert_to_onnx.py walkthrough
- DEPLOYMENT.md key steps
- Model size comparison (1GB → 700MB)
- Web interface example
- Browser compatibility requirements

### Part 8: What I'd Do Differently (Optional)
**Category**: Learning
**Hook**: "If I fine-tuned Bluey again, here's what I'd change."

**Content:**
- Need more training examples (500-1000 vs 110)
- Vary response lengths in training data
- Include edge cases and failure modes
- Better generation parameter defaults
- More rigorous personality testing
- Dataset quality over model size

**Reflection:**
- Lessons about personality capture
- Local fine-tuning advantages/limitations
- When fine-tuning beats prompt engineering
- Character AI as a learning tool

### Part 9: Beyond Bluey - Other Personalities (Optional)
**Category**: Questioning
**Hook**: "What else can you teach a small model to be?"

**Content:**
- The general pattern: dataset → training → testing
- Other character ideas (TV characters, historical figures, domain experts)
- Business applications (brand voice, customer service personalities)
- Ethical considerations (impersonation, consent)
- When NOT to fine-tune for personality

---

## Alternative: Shorter Series (5 parts)

If 7-9 parts feels too long, combine into 5:

1. **Introducing the Bluey Experiment** (Why + Dataset)
2. **Training on Apple Silicon** (How + Performance)
3. **Base vs Instruction-Tuned Models** (Comparison + Results)
4. **The Short Response Problem** (Challenges + Solutions)
5. **Deploying to Web** (ONNX + Browser Inference)

---

## Key Themes Throughout

**Technical:**
- Local ML on Apple Silicon
- Fine-tuning vs prompt engineering vs RAG
- Model size vs quality tradeoffs
- Generation parameter tuning
- ONNX conversion and quantization

**Conceptual:**
- What is "personality" in an LLM?
- How do you validate conversational quality?
- Training data design for voice/style
- Overfitting as a feature (for personality capture)

**Practical:**
- Real costs ($0 for local training)
- Real timelines (5 minutes per experiment)
- Real challenges (short responses, early stopping)
- Real solutions (min_new_tokens, -it models)

---

## Evidence/Artifacts Available

**Code:**
- Training scripts for 3 model sizes
- Chat interfaces
- Parameter testing experiments
- Web deployment pipeline

**Data:**
- 110 conversation pairs
- Training logs (3 different experiments)
- Loss curves
- Generated examples

**Documentation:**
- README.md (comprehensive)
- DEPLOYMENT.md (web deployment)
- Requirements files

**Results:**
- Successfully trained models
- Documented challenges (short responses, EOS issues)
- Parameter optimization data
- Model size comparisons

---

## Why This Series Works

**Unique angle:**
- Local fine-tuning (not cloud-based tutorials)
- Personality/character focus (not task-specific)
- Small models (accessible, fast iteration)
- Apple Silicon specific (growing audience)
- Web deployment (practical end-to-end story)

**Authority building:**
- "Local fine-tuning on Apple Silicon" expertise
- Character/personality AI specialization
- Practical local ML (vs theoretical)

**Authentic experience:**
- Real training logs and results
- Documented failures (short responses)
- Honest about limitations (110 examples isn't enough for production)
- Shows iteration process

**Actionable for readers:**
- Step-by-step approach
- Code examples that work
- Clear hardware requirements
- Reproducible results

---

## Connection to Previous Series

**Links to:**
- **EmbeddingGemma series** - Both use Gemma models, local inference
- **Agentic Personal Trainer** - Could fine-tune a coaching personality
- **MCP Stock Trader** - Different personality needs (analytical vs conversational)

**Natural progression:**
- Embeddings → Agents → Fine-tuning completes the "local AI" trilogy

---

## Next Steps to Prepare

1. **Run the training** to capture fresh logs and examples
2. **Test the fine-tuned model** extensively to get more examples
3. **Document the web deployment** with screenshots
4. **Run parameter experiments** to have concrete data
5. **Consider**: Do you want to create MORE training data (expand from 110 examples)?

---

## Series Working Title

"Fine-Tuning Gemma on Apple Silicon: Teaching an AI to Talk Like Bluey"

or

"Local Fine-Tuning for Personality: The Bluey Experiment"

or

"Building Character: Fine-Tuning Small Models for Personality on Apple Silicon"

---

## Publishing Notes

- Could start immediately after Part 9 of Agentic Personal Trainer
- Or space it out (let current series breathe)
- Each part: 150-300 words, one clear concept
- Heavy on code examples and real results
- Images: training logs, loss curves, chat examples, web interface

---

Ready when you are! This project has everything needed for a great series.
