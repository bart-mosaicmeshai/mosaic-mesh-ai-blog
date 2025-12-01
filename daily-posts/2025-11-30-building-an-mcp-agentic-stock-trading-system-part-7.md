---
date: 2025-11-30
category: Learning
project: agentic-stock-trader
title: "Building an MCP Agentic Stock Trading System - Part 7: MCP Experimentation Lessons"
tags: mcp lessons-learned tool-portability ai-architecture mcp-experimentation
published: true
---

# Building an MCP Agentic Stock Trading System - Part 7: MCP Experimentation Lessons

*This is Part 7 (final) of a series on building an MCP trading system. Read [Part 1](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-1), [Part 2](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-2-the-mcp-servers-and-tools), [Part 3](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-3), [Part 4](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-4), [Part 5](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-5), and [Part 6](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-6) for the architecture, MCP servers, agentic loop, decision comparison, backtest results, and trade-offs.*

## The Hook

After building three AI trading agents with MCP, here's what I'd do differently.

## The Story

**What Actually Worked:**

MCP's tool portability worked as advertised. I wrote 11 tools once ([market-data-server.js](https://github.com/bart-mosaicmeshai/agentic-stock-trader/blob/main/src/mcp-servers/market-data-server.js), [analysis-server.js](https://github.com/bart-mosaicmeshai/agentic-stock-trader/blob/main/src/mcp-servers/analysis-server.js)) and used them across three agents with different decision-making approaches. Same `calculate_rsi()`, different intelligence calling it.

Historical data caching ([cache/historical/](https://github.com/bart-mosaicmeshai/agentic-stock-trader/tree/main/cache)) solved the API rate limit problem. First backtest: 5 API calls. Every subsequent run: 0 API calls. This turned 25 calls/day into unlimited experimentation.

SQLite for everything ([src/database/](https://github.com/bart-mosaicmeshai/agentic-stock-trader/tree/main/src/database)). Separate databases for live trading vs backtesting meant I could test destructively without risking real portfolio state.

**What Broke (and How I Fixed It):**

The biggest bug? Historical data was reversed. Backtests analyzed stale prices from months ago instead of current data. The fix: one `.reverse()` call ([commit 3284147](https://github.com/bart-mosaicmeshai/agentic-stock-trader/commit/3284147)). Lesson: always print the first/last date when loading time-series data.

Alpha Vantage's 25 calls/day isn't enough for active development. Caching turned this from blocker to non-issue, but initial development was painful.

Indicator warmup period (50 days) means backtests can't start until you have 50+ days of data. This cut my available backtest range from 100 days to 50.

**The MCP Reality Check:**

"USB for AI" holds up, but with caveats. stdio communication debugging is harder than HTTP. Tool schemas are JSON but feel like API contracts you can't version. LLMs occasionally hallucinate tool parameters (asking for fields that don't exist).

But the portability? Real. I genuinely can swap Claude for a local model by changing two lines of code.

```
┌─────────────────────────────────────────────────────────────────┐
│                  What Worked vs What Broke                      │
└─────────────────────────────────────────────────────────────────┘

✅ What Worked                    ❌ What Broke (& Fixed)
───────────────────              ─────────────────────────
MCP Tool Portability             Historical Data Reversed
  └─ 11 tools, 3 agents            └─ Fixed: .reverse()

Historical Data Caching          Alpha Vantage Rate Limits
  └─ First run: 5 calls            └─ Fixed: Aggressive caching
  └─ Next runs: 0 calls
                                 Indicator Warmup Period
SQLite Persistence                 └─ Need 50 days before backtest
  └─ Separate DBs for safety       └─ Cut range from 100→50 days

stdio Communication              LLM Tool Hallucinations
  └─ Works across models           └─ Occasionally asks for
  └─ No HTTP overhead                wrong parameters

────────────────────────────────────────────────────────────────

The Verdict: MCP architecture is solid.
             The problems were data/API issues, not core design.
```

*Building in public means sharing what breaks*

## The Reflection

Would I use this with real money? No—but not because the tech doesn't work. MCP is solid. The agents reason correctly. The tools return accurate data.

The gaps are elsewhere: position sizing, portfolio rebalancing, stop-loss execution, drawdown monitoring. These are trading problems, not AI problems. Which means MCP did its job.

**The takeaway:** For this experiment, MCP delivered on its core promise—tool portability across different AI backends. Start simple (rules), validate the architecture, then upgrade to smarter models without rewriting everything. That's how you explore AI without betting the farm on any single approach.

![Experimentation lessons from building with MCP](../assets/building-mcp-agentic-stock-trading-system-part-7.jpg)

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
