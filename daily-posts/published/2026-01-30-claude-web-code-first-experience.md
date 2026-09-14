---
date: 2026-01-30
category: Building
project: claude-code
title: "Did I Just Experience a >40X Productivity Gain? If Yes, What Does This Mean?"
slug: 40x-productivity-gain-what-does-it-mean
tags: claude-code ai-coding-agents rapid-experimentation product-velocity sandbox-development refrigeratorgames
published: true
---

# Did I Just Experience a >40X Productivity Gain? If Yes, What Does This Mean?

![Six experimental web pages bursting from a sandbox](/assets/claude-code-web/hero-sandbox-experiment.jpg)
*Six different experiments, one sandbox, thirty minutes - the moment everything changed*

## Interview Notes - Capture Session

**Date:** January 28, 2026
**Method:** Interview Method

### Section 1: The Hook - What Just Happened?

**Q: What were you doing when you first tried https://claude.ai/code? What made you try it?**

Read Simon Willison's post (https://simonwillison.net/2025/Oct/20/claude-code-for-web/) a while ago, was looking for a reason to try it. Listening to Lenny's podcast about AI agents replacing sales team (https://www.lennysnewsletter.com/p/we-replaced-our-sales-team-with-20-ai-agents) and got inspired. While driving around city lakes at night with daughter and dog, the experiment became clear.

Context: Built Refrigerator Games 8 years ago, shut down 6 years ago. Recently resurrected as first SWA fork. Production version is exactly what it was 6 years ago - frozen in time. Asked wife for help updating/repositioning product - she's been too busy. Decided to let Claude Code for Web try.

**Q: What was the exact moment when your mind was blown? Can you describe that specific moment?**

After 15 minutes, Claude Code produced 6 fully built landing page experiments. All I did: pull the branch Claude created, test it, update GitHub action to include new directory, merge PR, push to prod. My work: 15 minutes. Total: 30 minutes.

Result: https://refrigeratorgames.mosaicmeshai.com/jan2826exp/index.html

Before AI coding: "days of agony and painful work."

Key insight: "would not have felt comfortable giving Claude Code CLI the permissions it would have needed to do this locally."

**Q: What did you expect vs. what actually happened?**

Thought it would work, but wouldn't have been surprised if it was harder. Reading Simon Willison's writings about his experiments with Claude Code for Web matched this experience. "This is so much better than what was available even 4-6 months ago."

---

### Section 2: The Story - What Did You Do?

**The Exact Prompt (to be used as pull quote in draft):**

> I want you to explore the content in this repository to learn about the refrigerator games client application. Once you've learned about the existing client application and the apis that it calls on the backend, I want you to create between 4 and 8 new landing page that are designed to appeal to parents of kids between the ages of 2 and 16. These landing pages should explain how using Refrigerator Games products (food cards and supporting products) can help them in their house. You can decide what specific age kids you each landing page targets, you can decide what type of content to include, you can generate new images if needed. Follow the general patterns established within the project where it makes sense, but the goal with these eight new landing experieences is that they should test radically different approaches to how families can use these products and how the Refrigerator Games brand and products are presented to potential customers. Put all eight landing pages in a new project root directory called /jan2826exp/. Create a branch and PR that captures your work. Feel free to introduce new front end technologies that allow you to express these new ideas (don't need to stick with the css, jquery, html pattern that exists in the project today. I'm not available to answer questions. You will have to find solutions to design questions on your own.

**Key context:** This was the first prompt tried - it worked great. "I've written 100's if not 1,000's of prompts for Claude Code CLI so I have a lot of practice writing for claude code."

**Q: When you looked at the 6 experiments it created, what stood out? What did it do that impressed you specifically?**

Variety of ideas was diverse, design choices varied. "It was clear to me that Claude read the website content I had created previously and did a good job of being creative mixing that content together in different ways."

**Q: Security/trust - How does Claude Code for Web differ from CLI in terms of what you're comfortable giving it permission to do?**

THE SANDBOX: "If it breaks everything in the sandbox it has no impact on me."

THE RISK: Claude Code CLI running on fully loaded M4Max (128GB RAM) with full permissions "could brick this computer. That risk keeps me from giving Claude Code CLI YOLO permissions."

THE FREEDOM: "With Claude Code for the Web I have no such concerns. All it can do is create a branch on a repo."

**Q: How does this compare to using Claude Code CLI (what you've been using)?**

[Need to explore - any other differences in workflow, speed, capabilities?]

---

### Section 3: The Reflection - Why Does This Matter?

**Q: What changed in how you think about AI coding tools after this experience? Is this a different category of tool than CLI?**

"For me it supports a different use case. I used Claude Code CLI to do heavy lifting required to get SWA and RG modernized and infrastructure setup. I don't think I'd do that with Claude Code for the Web. But, I think for this experiment Claude Code for the Web is better than Claude Code CLI for the reasons I explained earlier."

**Q: How does this web version change what's possible? What types of projects would you use each for?**

"I'm not sure yet. But I know I'll find other uses for Claude Code for the Web. The thing that is nice about RG and SWA is that they're modular. The client application and backend APIs are completely independent from each other. I expect that I will use Claude Code for the Web to iterate quickly on client side ideas and Claude Code CLI more for backend and infrastructure tasks where I want much more control."

**Q: The sandbox vs. local machine distinction - Does this unlock a different way of working? Can you be more experimental?**

"Yes, quite a bit more experimental. More like Replit or the other vibe coding tools that are out there. I use Claude Code CLI more for what I call AI assisted engineering."

Key distinction emerging: **AI-assisted engineering (CLI) vs. rapid experimentation (Web)**

**Q: What specifically would have been agonizing about creating 6 different landing page experiments before AI coding?**

"Days might be underestimating it. All of the design decisions, all of the hand coding pixel perfect css and html, all of the image generation. It all just takes time and the volume of decisions is exhausting."

**Q: What does this mean for product experimentation going forward? Does this change your velocity or approach to testing ideas?**

"Absolutely. This is a 100X or more increase in the speed with which I can experiment. Now the rate limiter will be how quickly I can get feedback from customers rather than how quickly I can make changes to the UX."

**THE SHIFT:** From "how fast can I build?" to "how fast can I get customer feedback?"

---

## Draft Post

### Hook

My daughter was in the back seat eating pizza, our dog settled beside her. I was driving our favorite route around the city lakes, the parkway lit up with city lights and Christmas decorations reflecting on the dark lake ice. Noise-cancelling AirPods in, listening to [Lenny's podcast about AI agents](https://www.lennysnewsletter.com/p/we-replaced-our-sales-team-with-20-ai-agents) for the second time.

About a week earlier during my first listen to this episode I could sense that the content was triggering some thoughts but I wasn't able to translate these thoughts into action. The second time through, I knew the conversation well enough that my mind could wander. I could let the things they were talking about generate connections. It was quiet, peaceful, the kind of drive where I could just think.

I'd been asking my wife to help me figure out how to reposition [Refrigerator Games](https://refrigeratorgames.mosaicmeshai.com/).[^1] What's running in production today is exactly what existed six years ago when I turned off the servers. Frozen in time. Unfortunately, my wife has been too busy to help so this project has just been sitting there waiting.

But driving around those lakes, I realized: I didn't need to wait. I'd been reading about [Simon Willison's experiments with Claude Code for the Web](https://simonwillison.net/2025/Oct/20/claude-code-for-web/) and I suddenly knew what to try.

I came home, sat down at my laptop, and just did it.

Thirty minutes later, six completely different landing page experiments were live in production. Not sketches. Not mockups. Fully functional pages with generated images, varied design systems, and radically different positioning strategies with each targeting different age groups and parent pain points.

[View all six experiments here](https://refrigeratorgames.mosaicmeshai.com/jan2826exp/index.html)

My head exploded. I've felt significant productivity gains using other AI coding tools, but this was majorly different. Did I just experience a >40X productivity gain? Thirty minutes vs. at least 40 hours to build these six experiments by hand. If yes, what does this mean?

### Story

I've written hundreds, maybe thousands, of prompts for [Claude Code CLI](https://code.claude.com/docs/en/overview) over the past months while resurrecting StartUpWebApp and running [other](https://www.mosaicmeshai.com/blog/bart-test-part-10-the-stochastic-parrot-and-what-visible-thinking-traces-might-reveal) [experiments](https://www.mosaicmeshai.com/blog/fine-tuning-gemma-for-personality-part-8-lessons-learned) [with](https://www.mosaicmeshai.com/blog/building-an-agentic-personal-trainer-part-9-lessons-learned) [AI](https://www.mosaicmeshai.com/blog/building-a-local-semantic-search-engine-part-5-learning-by-building) [tools](https://www.mosaicmeshai.com/blog/building-an-mcp-agentic-stock-trading-system-part-7-mcp-experimentation-lessons). I know how to write prompts to get what I want from Claude Code CLI. But I'd never tried Claude Code for the Web which is the browser-based version that runs in a sandboxed container instead of on my local machine.

When I got home, I opened [https://claude.ai/code](https://claude.ai/code), pointed it at the private Refrigerator Games client repository, and gave it this prompt:

> I want you to explore the content in this repository to learn about the refrigerator games client application. Once you've learned about the existing client application and the apis that it calls on the backend, I want you to create between 4 and 8 new landing pages that are designed to appeal to parents of kids between the ages of 2 and 16. These landing pages should explain how using Refrigerator Games products (food cards and supporting products) can help them in their house. You can decide what specific age kids each landing page targets, you can decide what type of content to include, you can generate new images if needed. Follow the general patterns established within the project where it makes sense, but the goal with these eight new landing experiences is that they should test radically different approaches to how families can use these products and how the Refrigerator Games brand and products are presented to potential customers. Put all eight landing pages in a new project root directory called /jan2826exp/. Create a branch and PR that captures your work. Feel free to introduce new front end technologies that allow you to express these new ideas (don't need to stick with the css, jquery, html pattern that exists in the project today). I'm not available to answer questions. You will have to find solutions to design questions on your own.

This was the first prompt I tried. It worked.

Fifteen minutes later, Claude Code had created a branch with six ready-to-test experiments. I pulled the branch to my local machine, tested it briefly, updated the GitHub Action deployment config to include the new directory, merged the PR, and pushed to production. My total time: fifteen minutes for Claude Code for the Web + fifteen minutes for me to test locally and deploy to prod = thirty minutes total.

Before AI-assisted coding, this would have taken me at least a week. With Claude Code CLI, this would have taken me a day or two. With Claude Code for the Web, this took 30 minutes. Every design decision. Every pixel-perfect CSS adjustment. Every image generation. The sheer volume of decisions is exhausting and stops me before I even start.

#### The Six Experiments

I loved the variety that Claude came up with. Way better than I would have done even with a week's work. Claude read the existing website content that I had created six years ago and creatively remixed it in genuinely different ways:

![Experiment Index](/assets/claude-code-web/index.png)
*The experiment landing page showing all six approaches*

**[Toddler Mealtime Peace](https://refrigeratorgames.mosaicmeshai.com/jan2826exp/toddler/)** (Ages 2-4) — Colorful, playful design focused on the parent's pain point: picky eaters and mealtime stress. The emotional tone is about relief.

![Toddler Mealtime Peace](/assets/claude-code-web/toddler.png)

**[Lunch Box Heroes](https://refrigeratorgames.mosaicmeshai.com/jan2826exp/elementary/)** (Ages 5-10) — Comic book aesthetic with gamification and achievement systems. Positions the child as the protagonist of their nutrition journey.

![Lunch Box Heroes](/assets/claude-code-web/elementary.png)

**[Fuel Your Game](https://refrigeratorgames.mosaicmeshai.com/jan2826exp/teen/)** (Ages 11-16) — Dark, modern, sleek design that speaks directly to teens about athletic performance and independence. No parental lecturing.

![Fuel Your Game](/assets/claude-code-web/teen.png)

**[Screen-Free Parenting](https://refrigeratorgames.mosaicmeshai.com/jan2826exp/screen-free/)** (All Ages) — Minimalist design emphasizing analog advantages in a digital-saturated world. Appeals to parents concerned about screen dependency.

![Screen-Free Parenting](/assets/claude-code-web/screen-free.png)

**[5-Minute Meal Planning](https://refrigeratorgames.mosaicmeshai.com/jan2826exp/busy-parent/)** (All Ages) — Clean layout with timeline visualization. Purely efficiency-driven messaging for busy families.

![5-Minute Meal Planning](/assets/claude-code-web/busy-parent.png)

**[Family Food Game](https://refrigeratorgames.mosaicmeshai.com/jan2826exp/family-game/)** (All Ages) — Celebratory, colorful design positioning the product as entertainment and family bonding, not just a nutrition tool.

![Family Food Game](/assets/claude-code-web/family-game.png)

Six different emotional appeals, design systems, and ways to position the same product.

### Reflection

#### The Sandbox

I would never have given Claude Code CLI the permissions it needed to do this work on my local machine. Claude Code CLI with "YOLO permissions" could severly damage my computer. That risk keeps me cautious.

But Claude Code for the Web runs in a sandbox. If it breaks everything in the sandbox, it has no impact on me. The worst it can do is create a branch on my repo. That constraint is liberating. I can be radically more experimental.

This pushes me into a new category of productivity gains. Previously I was focused on **AI-assisted engineering** but now I've unlocked a way to **vibe code rapid experimentation.** on my existing applications. 

I used Claude Code CLI for the heavy lifting required to modernize StartUpWebApp and Refrigerator Games—Django upgrades, infrastructure setup, backend API work. I want control for those tasks. But for rapid client-side iteration? Claude Code for the Web is better. It's more like Replit or other "vibe coding" tools that are optimized for speed and experimentation rather than precision and control.

The modular architecture of Refrigerator Games helps a lot. The Refrigerator Games' client application and backend APIs are completely independent. I expect I'll use Claude Code for the Web to iterate quickly on client-side ideas and Claude Code CLI for backend and infrastructure tasks where I want more control.

#### The Rate Limiter Shift and What This Means for My Workflow

Reading Simon Willison's writings about Claude Code for the Web matched my experience exactly. This is so much better than what was available even four to six months ago.

The velocity change is real: **>40X increase in the speed with which I can experiment.** Thirty minutes to build six experiments that would have taken me at least a week by hand. That's at least 40 hours of work compressed into half an hour.

Will any of these six experiments be a clear winner? Probably not. But that's not the point. The point is that the bottleneck has fundamentally changed. It's no longer "how fast can I build?" The rate limiter is now "how fast can I get feedback from customers?"

That's a fundamentally different problem to solve. And it's a much better problem to have.

Of course, now I actually have to figure out how to get that feedback. Six different landing pages are sitting in production, and I have no idea which, if any, messaging resonates with parents. What used to be the hard part, building the experiments, is now the easy part. The new hard part is building a scalable and cost-effective way to get feedback. That's what I get to figure out next and maybe my solution to that will become part 2 of this series. 

---

*What experiments are you waiting to run because the build time feels too long? What would you test if you could go from idea to production in thirty minutes?*

---

[^1]: A product we built eight years ago and shut down six years ago that I recently resurrected as the first fork of my [StartUpWebApp codebase](https://github.com/bartgottschalk/startup_web_app_server_side).

## References
- Simon Willison: [Claude Code for Web](https://simonwillison.net/2025/Oct/20/claude-code-for-web/)
- Lenny's Podcast: [We Replaced Our Sales Team with 20 AI Agents](https://www.lennysnewsletter.com/p/we-replaced-our-sales-team-with-20-ai-agents)
- Live experiments: [Refrigerator Games Jan 28 Experiments](https://refrigeratorgames.mosaicmeshai.com/jan2826exp/index.html)
- Personal experience with Claude Code CLI: [Resurrecting an 8-Year-Old Codebase](https://www.mosaicmeshai.com/blog/claude-code-part-1-resurrecting-8-year-old-codebase)

---

**Word Count:** ~1,050 words
**Voice:** Conversational but insightful, first-person narrative
**Audience:** Developers, AI enthusiasts, technical practitioners, product builders

**Writing Notes:**
- Personal discovery narrative highlighting velocity shift
- Key insight: sandbox enables fearless experimentation
- Contrast between AI-assisted engineering (CLI) vs. rapid experimentation (Web)
- Rate limiter shifts from build speed to customer feedback speed
- Includes specific examples of all six experiments with links
