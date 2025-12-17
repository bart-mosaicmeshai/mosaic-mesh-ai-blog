# Writing Voice and Tone Guidelines

**Created**: December 17, 2025
**Purpose**: Maintain consistent, intellectually honest voice across all blog posts

---

## Core Principle: No Hype, Be Honest

This blog prioritizes credibility over excitement. We show the messy reality of building with AI, including:
- Partial solutions
- Untested hypotheses
- Experiments that reveal complexity rather than clean answers
- What we don't know yet

**This builds trust more than overstating results.**

---

## Five Key Guidelines

### 1. Epistemic Humility - Distinguish Observations from Interpretations

**What this means:** Separate what you can directly observe from what you're inferring about internal mechanisms.

**Observable:** What the model outputs, how long it took, what happened
**Interpretation:** Why it happened, what the model "learned," internal representations

**Examples:**

✅ **Good:**
- "The model reproduced Bluey's speech patterns"
- "Responses stayed in the 30-70 word range"
- "The -it model produced more personality-consistent outputs"

❌ **Avoid:**
- "The model learned Bluey's personality"
- "The model understood the conversation"
- "Training taught the model to think like Bluey"

**Why:** We observe outputs. We infer learning/understanding. Be clear about the difference.

---

### 2. Tentative Language for Hypotheses

**What this means:** When you don't have experimental confirmation, use hedging language.

**Examples:**

✅ **Good:**
- "A possible cause: the training data averaged 52-76 words"
- "The model may have learned that pattern as 'correct'"
- "This likely happens because..."
- "Generation parameters can mitigate this but may not fully override it"

❌ **Avoid:**
- "The cause: the training data averaged 52-76 words"
- "The model learned that pattern as 'correct'"
- "This happens because..."
- "Generation parameters don't fully override it"

**Key words to use:**
- may / might / could
- possible / likely / appears
- suggests / indicates
- one explanation / a potential cause

**Why:** If you haven't tested the counterfactual, it's a hypothesis not a fact.

---

### 3. Scope Claims to Actual Experiments

**What this means:** Don't generalize from one experiment to universal truths.

**Examples:**

✅ **Good:**
- "In this experiment with 111 examples, -it models worked better"
- "For this 1B model with personality training, min_new_tokens=50 helped"
- "This deployment pattern worked for this fine-tuned 1B model (~700MB)"

❌ **Avoid:**
- "Use -it models for personality fine-tuning" (directive based on one experiment)
- "min_new_tokens fixes early stopping" (universal claim)
- "This deployment pattern works for any small model" (untested generalization)

**Pattern:**
- State what YOU did
- State what YOU observed
- Qualify any recommendations as "in my experiment" or "for this use case"

**Why:** One experiment with specific conditions doesn't prove general principles.

---

### 4. Avoid Absolutes Unless Verified

**What this means:** Soften superlatives and definitive language unless you have data.

**Examples:**

✅ **Good:**
- "significantly better" / "noticeably stronger"
- "addresses" / "helps with" / "mitigates"
- "performed well on most tests"
- "worked better in this comparison"

❌ **Avoid:**
- "dramatically better" / "perfectly"
- "solves" / "fixes completely"
- "passed all tests"
- "always works better"

**Red flag words:**
- dramatically, perfectly, completely, always, never
- solves, fixes (use: addresses, mitigates, helps)
- beat, wins (use: worked better, showed stronger results)
- zero, all, every (use: little, most, many)

**Why:** Technical claims need precision. Hype words reduce credibility.

---

### 5. Suggest Tests for Unverified Hypotheses

**What this means:** When you're presenting a hypothesis, explain how someone could test it.

**Examples:**

✅ **Good:**
- "To test this hypothesis, you'd need to fine-tune again with deliberately varied response lengths (30-200 words) in the training data and compare the results."
- "One approach to test: vary response lengths deliberately in your training data from the start and compare the results."
- "This could be verified by training two models—one with uniform lengths, one with varied—and comparing output flexibility."

❌ **Avoid:**
- "The solution is to vary response lengths" (stated as fact without testing)
- "This would work better with varied training data" (assumption)

**Pattern:**
1. Present what you observed
2. Offer a possible explanation
3. Describe how to test it
4. Acknowledge it's untested

**Why:** This is how science works. Show your reasoning, admit what you haven't proven.

---

## Real Examples from Gemma Fine-Tuning Series (December 2025)

### Part 4 Revisions - Response Length Problem

**Original (too confident):**
> "The problem: the training data averaged 52-76 words per response. The model learned that pattern as 'correct response length.'"
>
> "This worked—responses now varied from 60-200 words depending on the question."

**Revised (intellectually honest):**
> "A possible cause: the training data averaged 52-76 words per response. The model may have learned that pattern as 'correct response length.'"
>
> "These parameters helped reduce the variability—responses became more consistent, avoiding the extremely short 12-word outputs. But most responses still stayed in the 30-70 word range rather than expanding to longer, complete thoughts."
>
> "To test this hypothesis, you'd need to fine-tune again with deliberately varied response lengths (30-200 words) in the training data and compare the results."

**What changed:**
- "The problem" → "A possible cause"
- "learned" → "may have learned"
- Claimed success "60-200 words" → Actual results "30-70 word range"
- Added explicit test suggestion for the hypothesis

---

### Part 5 Revisions - Model Comparison

**Original (too absolute):**
> "One model mimicked Bluey's speech patterns"
>
> "For personality/character fine-tuning: use -it models. The training time is the same, but the results are dramatically better."

**Revised (appropriately scoped):**
> "One model reproduced Bluey's speech patterns"
>
> "In this experiment with 111 examples, -it models produced significantly better personality consistency. The training time was the same, but the personality capture was noticeably stronger."

**What changed:**
- "mimicked" → "reproduced" (observation vs interpretation)
- Universal directive → Scoped to this experiment
- "dramatically better" → "significantly better"

---

### Part 9 Revisions - Summary Claims

**Original (too certain):**
> "Training data patterns become constraints. The model learned that length as 'correct.'"
>
> "Small models can mimic distinctive voice."

**Revised (qualified):**
> "Training data patterns may become constraints. The model may have learned that length as 'correct.'"
>
> "Small models can reproduce distinctive voice."

**What changed:**
- Added "may" twice (acknowledges hypothesis)
- "mimic" → "reproduce" (consistent terminology)

---

## Common Anti-Patterns to Avoid

### Anti-Pattern 1: The False Fix
❌ "The fix: use min_new_tokens=50"
✅ "One mitigation approach: generation parameter tuning"

**Why:** Partial solutions shouldn't be called "fixes"

---

### Anti-Pattern 2: Learning Claims Without Evidence
❌ "The model learned personality from 111 examples"
✅ "The model reproduced personality patterns from 111 examples"

**Why:** We observe outputs, we infer learning

---

### Anti-Pattern 3: Generalizing from N=1
❌ "For personality fine-tuning, use -it models"
✅ "In this experiment, -it models worked better for personality"

**Why:** One experiment doesn't establish best practices

---

### Anti-Pattern 4: Claiming Certainty About Untested Hypotheses
❌ "Response length became a hard ceiling because the model learned training data patterns"
✅ "Response length may have become a constraint. A possible cause: the model may have learned training data patterns. To test this hypothesis..."

**Why:** Correlation ≠ causation until you test the counterfactual

---

### Anti-Pattern 5: Overstating Results
❌ "This worked—responses now varied from 60-200 words"
✅ "These parameters helped, but responses still stayed in the 30-70 word range"

**Why:** Report what actually happened, not what you hoped would happen

---

## Word Substitutions (Quick Reference)

| Avoid | Use Instead |
|-------|-------------|
| learned | reproduced, generated, produced |
| dramatically | significantly, noticeably |
| solves | addresses, mitigates, helps with |
| the fix | one approach, a mitigation |
| beat | worked better than, outperformed |
| perfectly | well, effectively |
| always | often, typically, in most cases |
| never | rarely, seldom, in few cases |
| proved | showed, demonstrated, suggested |
| the cause | a possible cause, one explanation |
| works for any | worked for this, should work for |
| mimicked | reproduced, generated similar to |

---

## When Confidence IS Appropriate

You CAN be confident about:
- Direct observations ("The training took 4.9 minutes")
- Measured data ("Loss dropped from 5.0 to 0.1")
- Reproduced behaviors ("The model uses Bluey's catchphrases")
- What you actually did ("I ran three experiments")
- Code that exists ("The test file shows...")

You SHOULD be tentative about:
- Why something happened (internal mechanisms)
- What the model "learned" vs what it outputs
- Whether your results generalize
- Solutions that weren't fully tested
- Future predictions

---

## The Test: "Can I Defend This Claim?"

Before publishing, ask:
1. **Did I observe this directly?** → Can state confidently
2. **Is this an interpretation or hypothesis?** → Add "may" / "possible" / "likely"
3. **Did I test the counterfactual?** → If no, qualify the claim
4. **Am I generalizing from one experiment?** → Scope it appropriately
5. **Am I overstating partial results?** → Use "helped" not "solved"

---

## Why This Matters for the Brand

**Building credibility over hype:**
- Developers spot BS quickly
- Honest limitations are more compelling than fake perfection
- Showing what you DON'T know builds trust
- Hypothesis-driven thinking demonstrates scientific rigor

**The messy middle is the product:**
- We're not selling courses on "How to Fine-Tune Perfectly"
- We're sharing real experiments with honest results
- Partial solutions and open questions are features, not bugs

---

## Session Notes

**December 17, 2025 - Gemma Series Part 4 Proofreading:**
- Discovered claimed "60-200 word" results weren't backed by experiments
- Ran actual tests showing 12-63 words (problem) and 30-70 words (with mitigation)
- Updated Part 4 to match reality, framed as hypothesis
- Applied same rigor to Parts 5-9
- Result: More honest, more credible, actually more interesting

**Key insight:** The story got BETTER when we admitted the fix was partial. Readers want reality, not perfection.

---

*Use this guide for all blog post writing and proofreading. When in doubt, be more tentative, not less.*
