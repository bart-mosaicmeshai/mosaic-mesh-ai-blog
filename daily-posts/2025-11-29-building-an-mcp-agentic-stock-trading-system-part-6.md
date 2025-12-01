---
date: 2025-11-29
category: Learning
project: agentic-stock-trader
title: "Building an MCP Agentic Stock Trading System - Part 6: Cloud vs Local vs Rules"
tags: mcp mcp-portability local-vs-cloud architecture-patterns api-caching
published: true
---

# Building an MCP Agentic Stock Trading System - Part 6: Cloud vs Local vs Rules

*This is Part 6 of a series on building an MCP trading system. Read [Part 1](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-1-the-architecture), [Part 2](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-2-the-mcp-servers-and-tools), [Part 3](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-3-the-agentic-loop), [Part 4](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-4-when-agents-disagree), and [Part 5](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-5-backtesting-all-three-agents) for the architecture, MCP servers, agentic loop, decision comparison, and backtest results.*

## The Hook

Building with three agent types taught me: you can optimize for speed, cost, or intelligence—pick two.

## The Story

After building all three agents, the trade-offs became clear. Each approach optimizes for different priorities:

**The Rule-Based Agent:**
- Cost: $0 (just Alpha Vantage API)
- Speed: 1-2 seconds per analysis
- Bottleneck: Alpha Vantage free tier = 25 API calls/day
- Best for: Backtesting, research, rapid iteration

**The Local LLM Agent (LM Studio):**
- Cost: $0 (just electricity for inference)
- Speed: 3-10 seconds per analysis (depends on model size)
- Privacy: 100% local, no data leaves your machine
- Bottleneck: Your hardware (I used M4 Max MacBook Pro with 128GB memory)
- Best for: Unlimited experimentation, learning MCP patterns

**The Claude Agent (Haiku via API):**
- Cost: ~$0.001 per trade ($0.25/month for daily trading)
- Speed: 5-10 seconds per analysis
- Intelligence: Best reasoning quality
- Bottleneck: Cost scales with usage
- Best for: Testing cloud AI vs local alternatives

The surprising insight? **Caching market data unlocked unlimited experimentation.** Alpha Vantage's 25 calls/day limit would have blocked extensive backtesting—but after the first run, all price data is cached locally. Run any agent, any number of times, zero API calls to fetch data for further experiments.

MCP's portability means switching is trivial. Same tools ([src/mcp-servers/](https://github.com/bart-mosaicmeshai/agentic-stock-trader/tree/main/src/mcp-servers)), different brains ([src/agents/](https://github.com/bart-mosaicmeshai/agentic-stock-trader/tree/main/src/agents)). Change one import, get different intelligence.

```
┌─────────────────────────────────────────────────────────────────┐
│              The Speed/Cost/Intelligence Triangle               │
└─────────────────────────────────────────────────────────────────┘

                       Intelligence
                            △
                           / \
                          /   \
                         /     \
                  Claude/       \Local LLM
                       /         \
                      /           \
                     /   Rules?    \
                    /               \
                   /                 \
                  △───────────────────△
               Cost                 Speed

Pick Two:
─────────
 Rules-Based:     ✓ Cost (free) + ✓ Speed (1-2s)
 Local LLM:       ✓ Cost (free) + ✓ Intelligence (reasoning)
 Claude Haiku:    ✓ Intelligence (best) + ✓ Speed (5-10s)

The Missing Combo:
──────────────────
 All Three?       Can't optimize for everything
                  But you can switch between them!
```

*MCP lets you choose your trade-offs per task*

![The speed, cost, intelligence triangle](../assets/building-mcp-agentic-stock-trading-system-part-6.jpg)

## The Reflection

The "pick two" rule holds: Rules give you speed + cost. Local LLM gives you cost + privacy. Claude gives you intelligence + speed (if you pay).

But here's what surprised me: **the architecture matters more than the model.** MCP's tool abstraction means you can start cheap (rules), validate the approach, then upgrade to smarter models without rewriting anything. That's the real value—evolutionary, not revolutionary, intelligence upgrades.

Remember: this isn't a trading system guide. It's an MCP experiment that happens to use trading as the domain. The trade-offs above are about exploring different AI approaches, not optimizing for profit.

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
