---
date: 2025-12-06
category: Learning
project: agentic-personal-trainer
title: "Building an Agentic Personal Trainer - Part 1: Architecture and Philosophy"
slug: building-an-agentic-personal-trainer-part-1-architecture-and-philosophy
tags: langchain agents conversational-ai prompt-engineering
published: true
---

# Building an Agentic Personal Trainer - Part 1: Architecture and Philosophy

## The Hook

After building an [autonomous stock trading system](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-1-the-architecture) with custom MCP servers, I wanted something different: a conversational AI that collaborates rather than executes. Something that asks "how are you feeling?" before suggesting a workout.

## The Story

I've built a prototype personal trainer for triathletes using [LangChain's agent executor pattern](https://js.langchain.com/docs/modules/agents/). The system connects a user to an agent that has access to tools and a database, with the LLM (running locally via [LM Studio](https://lmstudio.ai/) or in the cloud) powering the reasoning.

![Architecture overview](../assets/agentic-personal-trainer/agentic-personal-trainer-part-1.jpg)

*LangChain agent executor connecting user, tools, database, and LLM*

The core philosophy lives in the system prompt ([trainer-agent.js:84-112](https://github.com/bart-mosaicmeshai/agentic-personal-trainer/blob/main/src/agent/trainer-agent.js#L84-L112)). Here's a condensed version:

```javascript
const agent = await initializeAgentExecutorWithOptions(tools, llm, {
  agentType: "chat-conversational-react-description",
  agentArgs: {
    prefix: `You are an experienced personal trainer...

    Your coaching philosophy:
    - You focus on how the athlete is FEELING, not just data
    - You suggest workouts, you don't prescribe rigid plans
    - Be flexible - easily reschedule when life happens

    You're a coach, not a drill sergeant.`
  }
});
```

"Feelings > Metrics" became my design mantra. The stock trader optimized returns. This system optimizes for sustainability and enjoyment.

Eight tools handle the mechanics: checking injuries, suggesting workouts, managing schedules. But the prompt shapes the personality. For example, the prompt tells the LLM to check your injury history and ask about that tweaky knee before recommending intervals.

The key architectural decisions:
- **LangChain agent executor** with `chat-conversational-react-description` for tool-calling compatibility with local LLMs
- **SQLite database** for persistence across sessions (conversations, workouts, injuries, preferences)
- **Factory pattern** for LLM provider switching (local LM Studio, Gemini, Claude-ready)
- **Tool-based extensibility** - add new capabilities without changing core agent logic

## The Reflection

The biggest shift from autonomous agents to conversational ones: you're designing a relationship, not an optimizer. The prompt isn't just instructions—it's character development.

When I built the stock trader, success meant maximizing returns. Here, success means the athlete actually enjoys training, stays injury-free, and keeps coming back to the agent for advice. That philosophical difference influenced how I approached the project.

Next up: the tool system that makes the agent actually useful.

---

**Part 1 of 9** in the Agentic Personal Trainer series.

---

## Project

**agentic-personal-trainer** - [View on GitHub](https://github.com/bart-mosaicmeshai/agentic-personal-trainer)

---

## Meta

- **Category**: Learning (Exploring and experimenting)
- **Project**: agentic-personal-trainer
- **Word count target**: 150-300 words
- **Writing time**: ~15-20 minutes
- **Inspiration**: Simon Willison's daily blog, Seth Godin's short posts

## Publishing Checklist

- [ ] Hook is compelling and specific
- [ ] Story shows real work, not just summary
- [ ] Reflection adds insight or learning
- [ ] Post is 150-300 words
- [ ] Code examples (if any) are formatted and explained
- [ ] GitHub links to specific code lines
- [ ] Image generated and added
- [ ] ASCII diagrams removed (kept only as image reference)
- [ ] Links to relevant resources
- [ ] Proofread for typos
- [ ] Update published: true in frontmatter

---

*This post is part of my daily AI journey blog at [Mosaic Mesh AI](https://www.mosaicmeshai.com/blog). Building in public, learning in public, sharing the messy middle of AI development.*
