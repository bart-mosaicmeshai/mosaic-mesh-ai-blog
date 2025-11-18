# Post 4: Creating an AI Personality - The Bluey Chatbot Experiment

**Status**: Not Started
**Target Word Count**: 800-1000 words (~4 min read)
**Publish Date**: TBD

## Hook

"I spent an afternoon teaching an AI to say 'It's me, Bluey!' and learned something profound about how these models work."

## Key Points

- Why personality matters for chatbots
- The Bluey character choice (fun, distinct, testable)
- Crafting 111 training conversations
- Training process (builds on Post 3)
- Testing results - what worked and what didn't
- Lessons about fine-tuning and personality

## Projects Referenced

- gemma-local-finetune (Bluey dataset)
- Link to bluey_dataset.jsonl

## Key Sections

### 1. Why Bluey? (150 words)
- Generic chatbots are boring
- Personality = memorable interactions
- Bluey is:
  - Distinct voice (6-year-old Australian puppy)
  - Consistent traits
  - Easily testable
  - Fun!

### 2. Crafting 111 Conversations (200 words)

**Character Research**:
- Watched episodes
- Identified traits:
  - Enthusiastic ("It's me, Bluey!")
  - Playful, imaginative
  - 6-year-old vocabulary
  - Australian expressions
  - Family references (Bingo, Mum, Dad)

**Writing Process**:
- Started with greetings
- Added personality questions
- Included game suggestions
- Maintained consistency

**Example Conversations**:
```json
{
  "messages": [
    {"role": "user", "content": "Who are you?"},
    {"role": "assistant", "content": "It's me, Bluey! I'm a six-year-old Blue Heeler puppy who loves playing games!"}
  ]
}
```

### 3. Training (200 words)
- Dataset format (JSONL)
- Training config
- 5-minute training run
- What the model is learning

### 4. Testing Results (250 words)

**What Worked**:
- ✓ Character identification
- ✓ Enthusiastic tone
- ✓ Age-appropriate vocabulary
- ✓ Family references
- ✓ Game suggestions

**What Didn't**:
- ✗ Occasional formality
- ✗ Breaking character under pressure
- ✗ Over-explaining

**Example Conversations**:
[Before/after comparisons]

### 5. Lessons (200 words)
- Small datasets work (111 examples!)
- Quality > Quantity
- Consistency is key
- Personality "emerges"
- Limitations are normal
- Fine-tuning is about nudging, not reprogramming

## Assets Needed

- [ ] Bluey dataset examples (10-15 conversations)
- [ ] Character trait analysis diagram
- [ ] Training logs/output
- [ ] Before (base model) vs After (fine-tuned) conversations
- [ ] Success/failure examples
- [ ] Link to full dataset

## Code Snippets

1. Dataset structure example
2. Loading the Bluey dataset
3. Inference with fine-tuned model

## Takeaway

Small, focused datasets can create distinct personalities. Quality matters more than quantity.

## Call to Action

"Want to search through thousands of documents to find what you need? Let me show you semantic search..."

## SEO Keywords

- AI personality training
- chatbot personality
- fine-tune chatbot
- custom AI personality
- small dataset fine-tuning
- character AI training

## Writing Notes

- Make it fun and engaging
- Show personality through examples
- Be honest about failures
- Explain the "why" behind decisions
- Make it relatable (anyone can pick a character)
- Emphasize: you don't need huge datasets

## Research Needed

- [ ] Review bluey_dataset.jsonl
- [ ] Test current fine-tuned model
- [ ] Collect example conversations
- [ ] Document failure cases
- [ ] Compare to base model responses
- [ ] Calculate actual training time

## Draft Status

- [ ] Outline reviewed
- [ ] Gather examples from dataset
- [ ] Test model for current responses
- [ ] First draft
- [ ] Technical review
- [ ] Edit pass
- [ ] Final review
- [ ] Published
