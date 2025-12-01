---
date: 2025-11-27
category: Learning
project: agentic-stock-trader
title: "Building an MCP Agentic Stock Trading System - Part 4: When Agents Disagree"
tags: ["mcp", "agent-comparison", "transparent-decision-making", "confidence-scoring", "rule-based-vs-llm"]
published: true
---

# Building an MCP Agentic Stock Trading System - Part 4: When Agents Disagree

*This is Part 4 of a series on building an MCP trading system. Read [Part 1](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-1-the-architecture), [Part 2](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-2-the-mcp-servers-and-tools), and [Part 3](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-3-the-agentic-loop) for the architecture, MCP servers, and agentic loop.*

## The Hook

Three AI agents analyze Apple stock on the same day. Two reach the same conclusion through reasoning, one through arithmetic. What does this reveal about AI decision-making?

## The Story

I ran all three agents on AAPL to see how they make decisions:

**Rule-Based Agent ([analysis-server.js:499-601](https://github.com/bart-mosaicmeshai/agentic-stock-trader/blob/main/src/mcp-servers/analysis-server.js#L499-L601)):**

The rule-based agent calculates confidence by adding weighted scores based on technical indicators:

```
confidence = 0
+ 0.35 (price > SMA20 > SMA50 ✓)
+ 0.00 (RSI: 42.6 - below healthy zone, no bonus)
+ 0.20 (price > EMA12 ✓)
+ 0.15 (positive momentum ✓)
= 0.70 raw → 0.58 normalized → HOLD
```

Each number (0.35, 0.20, etc.) is a confidence weight, not the indicator value itself.

**Claude Haiku ([llm-trading-agent.js:280-353](https://github.com/bart-mosaicmeshai/agentic-stock-trader/blob/main/src/agents/llm-trading-agent.js#L280-L353)):**
- Tool calls: get_historical_prices → calculate_sma → calculate_rsi → detect_trend → generate_signals
- Decision: HOLD, 60% confidence
- Reasoning: "Neutral/slightly bearish. Sideways trading pattern. RSI at 42.6 suggests no conviction either way. Wait for clearer signals."

**Local LLM (openai/gpt-oss-20b running in LM Studio):**
- Tool calls: get_historical_prices → calculate_rsi → calculate_sma → detect_trend
- Decision: HOLD, 55% confidence
- Reasoning: "Weak sideways trend, RSI 42.6 indicates neutral territory. No clear buy or sell signals present."

The LLMs synthesize the data differently. Rules report "RSI is 42.6". LLMs interpret "RSI at 42.6 suggests neutral territory—not strong enough to act."

```
┌──────────────────────────────────────────────────────────────────┐
│                  Same Input: AAPL Stock Data                     │
│             (Historical prices, 100 days, Nov 21 2025)           │
└──────────────────────────┬───────────────────────────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    ┌────▼────┐       ┌────▼────┐      ┌────▼────┐
    │ Rules   │       │ Claude  │      │ Local   │
    │ Agent   │       │  Haiku  │      │  LLM    │
    └────┬────┘       └────┬────┘      └────┬────┘
         │                 │                 │
     Arithmetic        Reasoning         Reasoning
   Confidence:       "Sideways         "Weak trend,
   +0.35 (SMA✓)       pattern,          RSI 42.6
   +0.00 (RSI)        RSI neutral"      neutral"
   +0.20 (EMA✓)            ↓                 ↓
   +0.15 (mom✓)      5 tool calls      4 tool calls
   = 0.70→0.58
         │                 │                 │
    ┌────▼────┐       ┌────▼─────┐      ┌────▼─────┐
    │  HOLD   │       │  HOLD    │      │  HOLD    │
    │   58%   │       │   60%    │      │   55%    │
    │(formula)│       │(reasoned)│      │(reasoned)│
    └─────────┘       └──────────┘      └──────────┘
```

*Three agents, same data, different paths to the same conclusion*

All three chose HOLD with similar confidence (55-60%), but the journey to get there looked completely different.

![Three agents analyzing the same stock data](../assets/building-mcp-agentic-stock-trading-system-part-4.jpg)

## The Reflection

Rules execute formulas. LLMs reason about what formula output means. The rule-based agent will always calculate 0.58 confidence given those indicators. The LLMs see the same data—RSI at 42.6, sideways pattern—and reach similar confidence levels (55-60%) through reasoning, not arithmetic.

When all three agree, you have strong signal. When they diverge, you've found an edge case worth investigating. This is ensemble learning in action—using model agreement as a confidence signal and disagreement as a warning flag.

---

## Project

**agentic-stock-trader** - [View on GitHub](https://github.com/bart-mosaicmeshai/agentic-stock-trader)

---

## Meta

- **Category**: Learning (Exploring and experimenting)
- **Project**: agentic-stock-trader
- **Word count target**: 150-300 words
- **Writing time**: ~15-20 minutes
- **Inspiration**: Simon Willison's daily blog, Seth Godin's short posts

## Publishing Checklist

- [ ] Hook is compelling and specific
- [ ] Story shows real work, not just summary
- [ ] Reflection adds insight or learning
- [ ] Post is 150-300 words
- [ ] Code examples (if any) are formatted and explained
- [ ] Links to relevant resources
- [ ] Proofread for typos
- [ ] Update published: true in frontmatter

---

*This post is part of my daily AI journey blog at [Mosaic Mesh AI](https://www.mosaicmeshai.com/blog). Building in public, learning in public, sharing the messy middle of AI development.*
