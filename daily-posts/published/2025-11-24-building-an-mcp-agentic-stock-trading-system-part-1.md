---
date: 2025-11-24
category: Learning
project: agentic-stock-trader
title: "Building an MCP Agentic Stock Trading System - Part 1"
tags: ["Agents","MCP","Learning"]
published: true
---

# Building an MCP Agentic Stock Trading System - Part 1

## The Hook

I wanted to understand Model Context Protocol (MCP) and compare local LLMs against API-based ones. So I built a stock trading system with three brains: a rules-based trader, Claude API, and a local Llama model in LM Studio. Same market data, different decision-making approaches.

## The Story

This isn't about making money—it's about making comparisons. I structured the experiment with three parallel agents:

1. **Rules-based trader**: Traditional if/then logic (RSI, moving averages, volume)
2. **Claude API trader**: claude-3-haiku over the same data
3. **Local LLM trader**: openai/gpt-oss-20b running in LM Studio

All three get identical market data through MCP servers. They analyze the same stocks, make their own decisions, and I track what they recommend. The goal is to see how different intelligence types approach the same problem.

MCP is Anthropic's protocol for connecting AI systems to data sources and tools. Instead of hardcoding APIs into each agent, I built MCP servers that provide market data, historical prices, and trading actions. Any agent—local or API—can connect and use them.

```
┌─────────────────────────────────────────────────────────────┐
│                     Trading Agents                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │ Rule-Based  │  │   Claude    │  │  Local LLM  │          │
│  │   Agent     │  │   Haiku     │  │ (LM Studio) │          │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘          │
│         │                 │                 │               │
│         └─────────────────┴─────────────────┘               │
│                           │                                 │
└───────────────────────────┼─────────────────────────────────┘
                            │
                   ┌────────┴────────┐
                   │  MCP Clients    │
                   │  (Tool Wrapper) │
                   └────────┬────────┘
                            │
            ┌───────────────┴───────────────┐
            │                               │
    ┌───────▼──────┐               ┌───────▼──────┐
    │ Market Data  │               │   Analysis   │
    │ MCP Server   │               │  MCP Server  │
    │              │               │              │
    │ Tools:       │               │ Tools:       │
    │ - get_price  │               │ - calc_sma   │
    │ - get_hist   │               │ - calc_rsi   │
    │ - search     │               │ - calc_macd  │
    └──────────────┘               └──────────────┘
```

*Three agents, one protocol: comparing decision-making approaches*

## The Reflection

This is a multi-day build. Part 1 is about setting up the architecture. Over the next few posts, I'll walk through implementing the MCP servers, connecting the agents, and comparing their decision patterns.

I'm not expecting the LLMs to beat traditional strategies. I'm curious what they learn, how they reason, and whether local models can keep up with API-based ones for structured tasks.

---

## Project

**agentic-stock-trader** - [View on GitHub](https://github.com/bart-mosaicmeshai/agentic-stock-trader)

*[Update the GitHub link above if the project name differs from the repo name, or remove if not applicable]*

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
