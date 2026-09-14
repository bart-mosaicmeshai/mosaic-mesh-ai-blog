---
date: 2026-01-28
category: Building
project: claude-code-series
title: "How I Learned to Leverage Claude Code - Part 1: Resurrecting an 8-Year-Old Codebase"
slug: claude-code-part-1-resurrecting-8-year-old-codebase
tags: claude-code legacy-modernization django startupwebapp fork-ready-architecture ai-collaboration ai-coding-agents agents-md
published: true
---

# How I Learned to Leverage Claude Code - Part 1: Resurrecting an 8-Year-Old Codebase

*This is Part 1 of a series documenting how I used Claude Code to completely modernize an 8-year-old open-source e-commerce platform over 2 months (Nov-Dec 2025).*

![Claude Code interface on MacBook Pro next to vintage CRT monitor displaying old Django Python code](../assets/claude-code/phase-1/part-1-resurrecting-codebase-v2.jpg)

## Hook

October 2025. I'd been staring at an 8-year-old Django codebase for years, wanting to resurrect it but never having the time. StartUpWebApp—my "general purpose" e-commerce platform forked from RefrigeratorGames—had been gathering dust since I shut it down to save hosting fees. I always felt like I'd left value on the table.

Then I discovered Claude Code CLI. After experimenting with AI coding tools (GitHub Copilot felt limited), Claude Code was my "ah-ha moment." I had new business ideas—RefrigeratorGames and CarbonMenu—and I needed infrastructure I could fork and iterate on rapidly. I didn't want to depend on someone else's platform. I wanted control.

So I tried: "Evaluate this repository and build a plan to modernize it and deploy to AWS."

Claude surprised me. It understood Django. It broke the work into phases. It thought like I would think. During that first session, I got excited. I could see how this might actually work.

I thought it would take 2-3 weeks. I had no idea.

## The Strategic Assessment

StartUpWebApp is an open-source, Django REST API backend and static web client for an e-commerce startup ([server-side repo](https://github.com/bartgottschalk/startup_web_app_server_side) | [client-side repo](https://github.com/bartgottschalk/startup_web_app_client_side)). I built it 8 years ago when I shut down another business I had built and wanted to salvage value from that codebase by creating a "general purpose" starting point for building web businesses. I gave a conference talk on it, then got busy with other things and shut down the site to save monthly fees.

Fast forward to October 2025. I had started Mosaic Mesh AI a year prior and was thinking again about exploring business ideas. I looked at various app platforms and came to the same conclusion I did 8 years ago: I don't want to depend on someone else's platform. I like control. Yes, mosaicmeshai.com runs on Squarespace, but you can't build a more complex application on Squarespace. Sometimes this philosophy gets me in trouble and I build infrastructure before I need it, but I hate being boxed in by platform limitations.

**The fork-ready vision:** SWA gives me a starting point to go from simple product prototypes to functional applications quickly. I retain full control over the experience. Others might not care about this but I do.

**Initial state:** [October 31, 2025 baseline](https://github.com/bartgottschalk/startup_web_app_server_side/blob/master/docs/archive/2025-modernization-history/milestones/2025-10-31-baseline-established.md) showed 10 tests, Django 2.2, Python 2.7, MySQL, manual deployment.

**Target state?** I didn't know. That's what I wanted Claude to help me figure out. I wasn't worried. This was an experiment. It might fail. It might work. Either way, I'd learn a lot.

## The First Session

I probably said something like: "Evaluate this repository and build a plan to modernize it and deploy to AWS."

Claude proposed [initial phases in a markdown file](https://github.com/bartgottschalk/startup_web_app_server_side/blob/91b1cd1d0ce4afac3a6c3ed6c18ee6ae7784a1e9/docs/README.md):
- **Phase 1:** Establish baseline & testing (50-60 hours estimated)
- **Phase 2:** Django 2.2 → 4.2 LTS or 5.1 (TBD)
- **Phase 3:** Frontend upgrades (TBD)

I read it. Made edits. Asked questions and iterated.

Claude's initial plan was wrong in many ways and overly simplified. For example, Claude suggested upgrading to Django 4.x. I discovered somewhere along the way that 5.x was viable and executed that additional upgrade. The phases evolved constantly. 

**But here's what gave me confidence:** Claude's thinking was similar to how I would think about the task. It understood Django. It could infer this was a static client web application talking to an API backend. It broke work into phases and steps that made sense.

During that first session, I started to get excited. I could see how this could work.

**What actually happened was WAY bigger than that initial plan:**
- PostgreSQL migration (not in original plan)
- AWS production deployment with ECS Fargate (not in original plan)
- Security hardening (not in original plan)
- Stripe upgrade to Checkout Sessions (not in original plan)
- Django 5.2 LTS (I pushed for this vs Claude's 4.x suggestion)
- 818 tests (from 10)
- Two+ months of sessions (I thought 2-3 weeks)

## The SESSION_START_PROMPT Pattern

Here's the pattern that made everything work.

At the end of sessions, I'd ask Claude: "What should I tell the next Claude Code agent so it can pick up where we're leaving off?"

At some point—I don't recall exactly when—Claude suggested creating a file: [SESSION_START_PROMPT.md](https://github.com/bartgottschalk/startup_web_app_server_side/blob/master/docs/archive/2025-modernization-history/SESSION_START_PROMPT.md). "Have the next Claude agent read this file. That will give it all the context needed to pick up where we left off."

*Note: Some developers use the [AGENTS.md pattern](https://agents.md/) for the same purpose. I called mine SESSION_START_PROMPT.md because that's what Claude suggested, but the concept is identical—session continuity through version-controlled documentation.*

**The problem it solved:** Session continuity. What does the next Claude need to know?

**The solution:** Living documentation inside the git repo. Version controlled. Can't lose it.

What goes in it? 
- Current state of the project and next priorities
- What tests must pass or are missing
- Pointers to find out more info about infrastructure deployed to AWS
- Known issues and constraints

**The constant battle:** The file kept growing. Claude is verbose when writing documentation (which is usually good), but then it becomes too much and new Claude sessions lose focus. The file would grow to 500+ lines, we'd trim it back to 200, it would grow again. A constant fight to prevent it from becoming a 5000-line epic.  

Over two months: [**96 git commits to this one file**](https://github.com/bartgottschalk/startup_web_app_server_side/commits/master/docs/archive/2025-modernization-history/SESSION_START_PROMPT.md). It grew, we trimmed, it grew, we trimmed. The latest version committed to the repo is 700+ lines and I've left it like that for now.

**It worked immediately:** In the very first session after creating SESSION_START_PROMPT.md, Claude picked up exactly where we had left off. No re-explaining. No "what were we doing?" It just worked.

At the end of each session I would prompt Claude: "Lets update SESSION_START_PROMPT.md now so that the next Claude agent is able to pick up where we're leaving off."

## Reflection

**What I Learned About AI Collaboration**

Others have said this better than I will, but Claude Code CLI is like having the world's fastest, most eager, most well-read, but most raw and green intern you could imagine. Super-fast and positive and ambitious, but can very quickly and easily go a long way down the completely wrong path. Learning to work with Claude Code is like managing an army of eager interns. As the human in the loop, I need to be very clear and direct about what I want Claude to do and not do. I need to check its work and not be shy or indirect about providing feedback. The more clear I can communicate, the better the result and the faster we get there.

**What I Learned NOT to Do**

Complain. Complaining to or scolding Claude Code doesn't help. Claude will say "I'm sorry" and then forget when the session ends or that context gets buried by other more recent information. Just redirect clearly and move on.

**What Surprised Me**

How quickly momentum built once I learned the SESSION_START_PROMPT pattern. The file itself became a dialogue between sessions, not just a reminder.

**If You Want to Replicate This**

Build intuition about how the agentic coding agent works. Read about how it works. Understand its internal workings. That knowledge will help you develop your human patterns in a way that results in the outcome you're looking for.

Resources to learn more:
- [Anthropic: Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [OpenAI: Unrolling the Codex Agent Loop](https://openai.com/index/unrolling-the-codex-agent-loop/)

You can't force Claude Code to work the way you want it to. You have to learn how it works and then guide.

**What's Next**

Part 2 will dive deep into the SESSION_START_PROMPT pattern—those 96 commits tell a story about learning to collaborate with AI. Part 3 will cover phase planning: how we organized 6 major phases across many Claude Code sessions. Part 4 explores the Docker development environment and multi-tenant database setup. Part 5 traces the journey from 10 tests to 818 tests, and what they actually protect. These five parts are just the beginning.

## References

**StartUpWebApp Repositories:**
- [Server-side (Django REST API)](https://github.com/bartgottschalk/startup_web_app_server_side)
- [Client-side (Static Web Client)](https://github.com/bartgottschalk/startup_web_app_client_side)

**Key Documentation:**
- [PROJECT_HISTORY.md](https://github.com/bartgottschalk/startup_web_app_server_side/blob/master/docs/archive/2025-modernization-history/PROJECT_HISTORY.md) - Complete timeline of the modernization
- [SESSION_START_PROMPT.md](https://github.com/bartgottschalk/startup_web_app_server_side/blob/master/docs/archive/2025-modernization-history/SESSION_START_PROMPT.md) - The session continuity file (779 lines, 96 commits)
- [October 31, 2025 Baseline](https://github.com/bartgottschalk/startup_web_app_server_side/blob/master/docs/archive/2025-modernization-history/milestones/2025-10-31-baseline-established.md) - Where we started (10 tests)

**Related Patterns:**
- [AGENTS.md pattern](https://agents.md/) - Session continuity for AI coding agents

---

**Word Count Target:** 800-1000 words
**Voice:** Narrative, honest about failures, teaching-focused, meta-commentary on AI collaboration
**Audience:** Developers, technical leaders, AI enthusiasts, DevOps professionals

**Writing Notes:**
- This is the start of a 48-52 part journey—set the stage
- Show the vision (fork-ready) not just tactics (upgrade Django)
- Introduce SESSION_START_PROMPT early (it's the secret sauce)
- Be honest: 8-year-old code is intimidating, Claude helped navigate it
- Tease the complexity without overwhelming (details come in later parts)
- Include concrete examples (file paths, specific decisions)
