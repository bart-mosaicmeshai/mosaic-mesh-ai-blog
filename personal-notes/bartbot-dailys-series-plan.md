# Series Plan: Running My Day — Inside the BartBot Dailys List

**Created:** September 8, 2026
**Rewritten:** September 10, 2026 — after the first Part 1 draft rambled. See "Lessons learned."
**Status:** Plan v2. The plan-v1 Part 1 draft was deleted 2026-09-10. Part 1 is being redrafted
from empty against this plan: `daily-posts/2026-09-10-running-my-day-part-1-draft.md`.
**Cadence:** **Worked on** daily in the 6–8am HHG CGs block. **Published when ready** — not on a
daily schedule. The HHG commitment is the two hours, not the publish rate.
**Stakes:** First public post about BartBot on LinkedIn. Part 1 is a first impression for an
audience that has never seen the product. Worth getting right rather than getting out fast.
**Series short name:** `dailys`
**Slug pattern:** `running-my-day-part-{N}-{subtitle}`
**Publishable assets:** `assets/bartbot-dailys/part-{N}/` — **one subfolder per part** (adopted
2026-09-14; a flat folder made names like `hero.png` ambiguous as soon as Part 2 existed). Redacted
images only, captured from that part's own frozen list or its stand-in calendar. Within a part the
names are generic and repeat across parts: `hero.png`, then evidence images named for what they
show (`calendar-sept-13.png`, `list-13-sept.png`).
**Raw source material:** `~/Projects/mosaic-mesh-ai-blog-private/dailys-raw/` — **outside this
repo**, because this repo is public. Unredacted. Reference only, never published.
**Demo lists:** one frozen public list per part (decided 2026-09-10; copies are free). Part 1's is
live. See `bartbot-dailys-demo-list-spec.md` for contents, redaction rules, and the per-post
snapshot protocol.

---

## The rules

These exist because the first draft broke every one of them. They are not style preferences.

1. **One question per post.** The question is the headline. It is the only thing the post answers.
2. **Every paragraph answers the headline question.** If a paragraph answers a different question,
   it belongs to a different post — move it there. *"It's good"* is not the test. *"It answers this
   question"* is the test.
3. **No umbrella posts, no previews.** No post states the series thesis. No post summarizes what
   later posts will say. The thesis emerges across the series or not at all. One "Next:" line after
   the ask is the entire allowance.
4. **Evidence, not decoration.** Every image is there because it proves the answer. If the answer
   would stand without the image, cut the image; if the image is the strongest thing in the post but
   doesn't prove the answer, it belongs to the post whose answer it does prove.
5. **The ask is the reader's version of the question.** It asks for the one thing only they can
   supply *about this question* — not a generic "what do you think." If the ask could close a
   different post, it's wrong. **Don't editorialize it.** Lines like "that's the part I can't see
   from here" explain why the ask exists instead of asking; cut from Part 1 on 2026-09-14 as not
   Bart's voice. The question plus a plain invitation to comment is enough.
6. **Length follows from the question.** If the answer takes 400 words, stop at 400. The 600–900
   range is a ceiling, not a target.
7. **If a video shows the example better, use a video.** BartBot already has a library at
   https://bartbot.mosaicmeshai.com/videos — files hosted at
   `https://bartbot-assets.mosaicmeshai.com/videos/<name>.mp4`, embedded with a plain HTML5
   `<video controls preload="metadata" src="…">` (see `bart-bot-client/src/pages/Videos.jsx`). Blog
   posts use the same tag in a Squarespace code block, or link to `/videos#<id>`. New recordings
   follow `bart-bot-api/docs/DEMO_VIDEOS.md` — Screen Studio, 1080p, SRT captions, S3/CloudFront —
   and the same style: natural, unscripted, small mistakes left in. Check the reuse table under
   "Part map" before recording anything new. Rule 4 still applies: a video is evidence, not
   decoration.
8. **No em dashes.** Anywhere in published text: blog body, captions, the "Next" line, LinkedIn
   posts. They read as "an AI wrote this" (Bart, 2026-09-10). Rewrite each one for its context:
   a colon before a list or an example, a comma for an aside, a period when the dash was joining
   two sentences. Never a blind find-and-replace, which produces worse prose than the dash did.
   Grep for `—` before every publish.

---

## Two insights, kept apart

The series rests on two distinct insights. Plan v1 fused them, which is the root cause of the
rambling draft. They get separate posts, and neither post states the other.

| | Insight | The question it answers | Evidence | Post |
|---|---|---|---|---|
| **A** | Under each day, the list shows only what's mine, already filtered, so I can execute and be present. | How do I turn an overwhelming day into one I can actually execute while staying present and relaxed? | Sept 13: the calendar vs. the five timed lines | Part 1 |
| **B** | Nothing pushes. I address information to the day I want to meet it, and I go read the day. | How does something I need in November reach me in November? | 7 Nov, 8 Sept 2027, the stack of days | Part 2 |

A is about *what's removed*. B is about *what arrives*. Sept 13 is evidence for A and only A —
nothing on that day "came back" in any interesting sense; it was written the previous Sunday and
read the following one. The striking thing about Sept 13 is what isn't there.

The series-level frame — *the list isn't for remembering more; it's for being allowed to stop
remembering* — is true, and it is **never the headline of any single post.** It's what a reader
concludes.

---

## Post template

Every post uses this skeleton. Deviations need a reason.

```
# Running My Day, Part N: <subtitle>

*<one fixed italic line: what the series is — identical text every post>*

**The question:** <the headline question, verbatim from this plan>

<The answer, stated plainly, in one paragraph. No wind-up.>

<The evidence: image(s) and the specific demo-list nodes. This is most of the post.>

<What it buys me: one paragraph. Still answering the question.>

## My question for you

<The ask.>  (Heading is Bart's wording, 2026-09-10. It mirrors "**The question:**" at the top: the post
opens with a question I answer and closes with one the reader answers.)

<CTA, two sentences: "Drop your answer in a comment. I'd love to learn <something specific to this
post's question>." Points at the blog's own comments, which must be enabled on the post.>

<One line: link to this part's frozen public list, and to an earlier part's list when the
comparison is the point. Wherever the body names a node, deep-link it: `…/lists/shared/<token>?item=<id>`
expands the ancestors and scrolls to the node on the public view (shipped 2026-09-10).>

---
*Next: <the next part's question, in question form>*
```

**The Next line is the next part's question, phrased as a question** (Bart, 2026-09-14). It's the
one preview rule 3 allows, and putting it in question form reinforces the structure: every post
asks one question, and the teaser names the one coming next. It doesn't need to match the next
part's headline verbatim, but keep it close enough to survive small drafting changes, since the
published post is frozen. Unlike reader reactions (statements, in the body), this is labeled as the
next post's and sits after the ask, so it doesn't compete with the current post's question.

**Italic line pattern** (Bart's wording, 2026-09-10 — identical every post except the part number):
*This is part {N} of a series about how I actually use the Lists tool in
[BartBot](https://bartbot.mosaicmeshai.com). In each post I ask and answer one question.*
Spell the number out: "part one," "part two."

Note: with the "set of small tools I built for myself" clause gone, the blog post no longer says
what BartBot is beyond the link. The Part 1 LinkedIn post is the one place that sentence still
appears (LI rule 5 exception).

**Pre-publish checklist:**

- [ ] Read each paragraph and name the question it answers. Delete or relocate any that don't
      answer the headline.
- [ ] The ask is the reader's version of the headline question.
- [ ] Nothing in the post belongs to another part's **Excluded** list — check the table.
- [ ] Every image proves the answer.
- [ ] Redaction check on every image (see the spec).
- [ ] Facts verified: node names against the live demo list; date/day pairs; any roadmap text
      against the live roadmap.
- [ ] The link goes to this part's own frozen list, titled "Dailys, Part N (…)", and that list
      matches every screenshot in the post.
- [ ] `grep -n "—"` on the file returns nothing in the published body (rule 8).
- [ ] Comments are enabled on the Squarespace post. The CTA points at them. (They're on by default
      for this blog; confirmed on the existing nano-banana post, 2026-09-10. This is a glance, not
      a setup step.)

---

## Distribution: three surfaces for the same work

**1. The blog (Squarespace) is canonical.** Owned, and the only place with comments. The ask lives
here and nowhere else.

**2. LinkedIn is the reach.** Bart has 1,000+ contacts there and **no other social presence**, so
it's his entire distribution, full stop. He doesn't enjoy the platform and doesn't read it, but
that's beside the point: this is where the people are. Earlier drafts of this plan treated "is
LinkedIn worth it?" as open. It isn't. What's worth watching is what actually comes back, not
whether to post.

**3. The BartBot monthly newsletter** (Bart, 2026-09-14: "the newsletter can basically just be this
blog post"). Sent via **Buttondown**; drafts live in `~/Projects/WebApps/BartBot/bart-bot-newsletters/`
as `YYYY-MM-DD-slug.html`, with images in `images/<edition-slug>/`. That repo's README has the
workflow: draft the HTML, drop in screenshots, proof in a browser, paste into Buttondown, send,
commit. **Inline styles only**, because email clients strip `<style>` blocks.

**Reusing a post as an issue.** The body transfers nearly verbatim. Three things don't:
- **The video won't play in email.** Use a still frame linked to the post, or cut it and rely on
  the screenshots.
- **Images need edition-local copies** in `images/<edition-slug>/`, not the blog's asset paths.
- **The comment ask needs rewording.** "Drop your answer in a comment" means clicking through to
  the blog from an email, so make that explicit or invite a reply instead.

Deep links into the frozen public lists work fine in email and are worth keeping.

**Open decision:** the newsletter is monthly and the series publishes when ready, so an issue could
be either one part reproduced, or a recap of the month's parts with the best one reproduced in full.
Decide after a couple of parts, when the real cadence is known.

---

## LinkedIn post rules

Every blog post gets a LinkedIn post the same day. Same author, same tone, same discipline. The LI
post is not a summary and not a teaser — it's the same question, answered honestly in fewer words,
with the evidence living at the link.

**The governing rule: never withhold the answer to create the click.** State the question, state the
answer, show one piece of evidence, link. A reader clicks because they want to see the proof, not
because they were denied the conclusion. That single rule is what "un-clickbaity" means here, and
it's the opposite of how most LI posts are built.

**Rules:**

1. **First line is the question**, verbatim from the plan. LinkedIn truncates after roughly three
   lines behind "…see more"; the question has to carry the post on its own.
2. **Second beat is the answer** — the same one-sentence answer the blog post opens with. No
   softening, no "here's what I learned."
3. **One piece of evidence, not the argument.** For Part 1: the packing line that isn't on the
   calendar, or "five lines instead of sixteen blocks." Not both, not the full walk-through.
4. **The LI post closes with an invitation to read, not a comment ask** (revised 2026-09-14). The
   comment ask lives on the blog only, an owned surface. The LI close names the reader's own hard
   day, points at the post for the full answer, and invites them to weigh the approach against it.
   It never says "comment." LinkedIn comments can't be disabled, so when they come, reply briefly
   and warmly, and point to the post when the answer is there. Budget time for both surfaces.
5. **Nothing in the LI post that isn't in the blog post.** No new claims, no product pitch, no
   "BartBot is a tool that…" line. **Exception, Part 1 only:** one sentence of what BartBot is,
   because it's the first public LI post about it.
6. **Banned:** "excited to announce," rocket emoji, "game-changer," "thread 🧵," rhetorical
   questions that aren't the headline question, engagement bait ("agree?"), em dashes (rule 8
   above), and any line that would embarrass the blog post.
   **Four registers Bart rejects** (2026-09-14): aggressive, sloppy, overly casual, and the brag,
   humble or otherwise. That covers most of what LinkedIn rewards, which is why the platform has
   never felt like his voice: ruling all four out leaves formality as the apparent default, and
   formality reads as over-thought. **The answer is not a fifth register.** Write the LI post out of
   sentences already edited for the blog, which are already in his voice. **Brag test:** does the
   post claim a result about me, or show a method and let the reader judge? Show, don't claim. The
   sentence explaining what BartBot is should scope it to himself ("one of the tools I built for
   myself"); anything about what it does for other people is product copy in a personal post.
7. **Length:** 80–150 words. If the blog post is 670, the LI post is not 300.
8. **Hashtags:** none, or at most two that a real person would search. Bart's call per post.
9. **Link in the post body**, not "link in comments." That tactic exists to game reach, and gaming
   reach is exactly what this series isn't doing. If it costs distribution, it costs distribution.
10. **Same voice guidelines** as the blog: `writing-voice-and-tone.md`. Claims about my own practice
    are stated directly; claims about anyone else's are hedged.

**Image choice (decide per post):** LinkedIn renders *either* the link card (from Squarespace's OG
tags, which include the hero image) *or* a native image you attach — not both prominently. For a
post whose argument is visual, attaching the redacted image natively and putting the link in the
text usually reads better than a link card. For a text-led post, the card is fine. Only ever attach
images from `assets/bartbot-dailys/`.

### Finding the voice (Part 1, 2026-09-14). Read this before drafting any LI post.

Eight versions. The full evolution, with every draft and the reasoning, is in
`~/Projects/mosaic-mesh-ai-blog-private/dailys-raw/li-post-versions.md`. The short form:

**The problem.** Bart has never found his voice on any social platform. Everything he writes there
comes out "over formal, over-thought, or just odd." The cause isn't a missing skill. It's that the
four registers the platform rewards are all ones he rejects: **aggressive, sloppy, overly casual,
and the brag** (humble or otherwise). Rule all four out and formality looks like the only option
left, and formality reads as over-thought. He also doesn't read LinkedIn and finds most of it a
waste of time, so there's no model he wants to imitate.

**The way out is not a fifth register.** Don't write in a register at all. Build the LI post out of
sentences already edited for the blog post, which are already in his voice. The first four drafts
failed because they were composed for LinkedIn; the ones that worked were assembled from the post.

**Vulnerability is enacted, not declared.** Bart: "I don't have to state the nervousness
specifically. I just need to be vulnerable in how I write." Show the thing that costs something to
admit; never write a sentence about how you feel admitting it. In Part 1 the admission is that a
normal family Sunday overwhelms him and he wants to go back to bed, said plainly to an audience of
colleagues. "My first blog post about BartBot" carries the first-time fact without a confession.
A sentence like "this makes me nervous" would have tipped it into the trope, which is the brag
wearing a different coat.

**The structure that solved state-versus-tease.** Bart's own fix, and it's reusable: *"I answer that
fully in my first blog post..."* then *"Super short version: ..."* then *"Now, go read the full
answer."* The reader gets a real answer immediately and knows where the complete one is. Nothing is
withheld, and nothing is padded.

**Brag test for every post:** does it claim a result about me, or show a method and let the reader
judge? Two screenshots and an admission are showing. "This changed how I work" is claiming.

**The model to imitate is Part 1's published LI post**, in the draft file's `## LinkedIn post`
section. When in doubt, start from the blog post's own sentences and cut.

**Template:**

```
<The question.>

<The answer, one sentence.>

<One concrete detail from the evidence — two or three lines at most.>

<The close: the reader's own hard day, then read the post and weigh the approach against it. No
comment ask.>

<Link to the post.>
```

**Where LI drafts live:** a `## LinkedIn post` section in each blog draft file, after the post
body and before the draft notes. It travels with the post, stays gitignored until the post
publishes, and there's exactly one place to look.

**Pre-post checklist:**
- [ ] First line is the headline question, verbatim
- [ ] The answer is stated, not withheld
- [ ] Nothing here that isn't in the blog post
- [ ] The close invites the reader to read the post and weigh it against their own day; it does
      not ask for comments
- [ ] Under 150 words
- [ ] Nothing on the banned list
- [ ] Link resolves to the published post; image (if attached) is from `assets/bartbot-dailys/`
- [ ] No em dashes (rule 8)

---

## Part map

Video-first parts are marked. The test for video: **does the idea depend on motion?** A transition,
a drag, a scroll, a decision made item-by-item — show it. A structure — screenshot it.

**Existing videos that can be reused.** Anchor is `/videos#<id>`; file is
`bartbot-assets.mosaicmeshai.com/videos/<file>`. Transcripts (`.srt`) are in
`~/Projects/WebApps/BartBot/demo-videos/` — `lists-intro` and `lists-landing-intro` have no
transcript, so check them by watching before citing.

| Part | File | Anchor | Shows | Fit |
|---|---|---|---|---|
| 2 | `lists-new-and-items.mp4` | `#lists-new-and-items` | nesting, adding under a parent, dragging between parents | partial — the Future scroll needs a new recording |
| 3 | `cross-tool-linking.mp4` | `#cross-tool-linking` | pasting a URL from one BartBot tool into an item in another, by hand | good |
| 4 | `lists-delete-multiple-rows.mp4` | `#lists-delete-multiple-rows` | clearing several items at once | partial — the real end-of-day pass needs a new recording |
| 9 | `lists-column-settings.mp4` | `#lists-columns` | the four columns being turned on and off | good — it's the feature the post says I don't use |
| 9 | `lists-calendar-view.mp4` | `#lists-calendar-view` | calendar view driven by start/due dates | good — same |

**Needs new recording:** Part 1 (deleting timed items through the morning of Sept 13 on a
throwaway duplicate of the Part 1 list; **recorded 2026-09-11 as `lists-sept-13-post-demo.mp4`**), Part 2 (scroll
from tomorrow to `8 Sept Wed 2027`), Part 4 (the four D's on a real day), Part 5 (a bounce —
`Workout Plan` reading the sheet and moving forward), Part 8 (phone).

Each part lists **Evidence** (the exact demo-list nodes) and **Excluded** (what a draft will be
tempted to include and must not). The Excluded field is the enforcement mechanism for rule 2.

---

### Part 1 — Two Views of the Same Sunday

**Question:** How do I turn an overwhelming day into one I can actually execute while staying
present and relaxed?
*(Bart's final wording, 2026-09-10. Two halves: the evidence section answers "execute"; the "what
that buys me" section answers "present and relaxed." The opening answer sentence should touch
both.)*
**Format:** Screenshots — the two images *are* the argument — plus one short video of deleting
items as the day progresses
**Answer (Bart's wording from the draft, revised 2026-09-11):** I keep a list in BartBot called
Dailys, and under each day it holds only what's mine. The timed lines aren't the day's events.
They're the things I have to do around them. Anything without a time is something I'll get to
if the day opens up. *(Revised three times on 2026-09-11. Third: "every timed line is a transition" was false for
`8am Pack`, which is a task; what's true of all five is that none of them is an event. First: "only the moves between things" described
the timed lines, not the whole list. Second: "a list that holds only what's mine for that day"
implied the list is one day; Dailys holds every day plus notes, so "only" belongs to each day.
"Under each day" is as far as Part 1 goes on structure; the rest is Part 2.)*
Five time-stamped lines in Dailys instead of sixteen overlapping blocks on the calendar. That simplicity is what lets me execute while staying relaxed, and
staying relaxed is what lets me be present where I am rather than pulled into a stressful future
that isn't here yet. *(The causal chain — simplicity → relaxed → present — is the spine. The LI
post's second beat uses this, compressed.)*

**Evidence:**
- The stand-in Google Calendar for Sunday Sept 13 — four people, color-coded, sixteen blocks,
  several stacked three and four deep. Sidebar legend visible; say the key in the caption anyway.
- Demo list `Future → 13 Sept Sun`, expanded. About a dozen items; five of them timed.
- The five timed lines, as a code block:
  `8am Pack` / `9:30am Drive to Basketball Tryouts` / `11am Drive to Family B-day party` /
  `12:45pm Drive to softball` / `8:30pm Pickup Kid from Choir`
- Two observations, and only two:
  1. None of the timed lines is an **event**. Pack, drive, drive, drive, pick up: the things I have
     to do around the events. The timed lines hold the seams.
  2. `8am Pack for the day's activities` exists nowhere on the calendar. No app or integration put it there; I wrote it. It's
     the product of planning: out of the house 9:30am–7pm across three places (tryouts, the party, softball), so everything leaves
     in one load.
- The color point: most of the calendar is **true but not mine**. My wife has one softball team;
  I have the other. She drives to choir; I pick up. I have to filter three people out every time I
  look.
- The emotional truth, stated once: the calendar makes me want to stay in bed. The list lets me be at
  the party without holding two softball games in my head.
- **The six untimed items** (added 2026-09-10). The screenshot shows them and a reader will wonder.
  One paragraph, at this altitude only: they have no time because they don't need one — things to
  get to if the day opens up, and if it doesn't, they move to another day. The timed lines are the
  skeleton; the rest fits around it or doesn't. Do **not** explain `Week plan` or `Priorities`
  individually.
- **Deleting as I go** (added 2026-09-10). During the day, a done item is deleted, not checked off.
  At 8:45 the packing line is gone; by the softball drive the whole morning has vanished. The list
  shows only what's still ahead. This is the execution mechanism and it's Part 1's — see the
  boundary note under Excluded. **Video:** the morning of Sept 13 on the list, deleting each timed
  item as it's done. **Record on a throwaway duplicate of the Part 1 list** (copies are free;
  superseded the earlier Undo method on 2026-09-10 when per-post frozen lists were adopted). The
  public Part 1 list is never touched once published, so it always matches the screenshot and the
  caption's deep link. The video opens on the morning of the 13th: the 8th–12th deleted and the
  13th at the top level (setup only; never explained in narration — that's Part 4).
- **The work that makes the hardest part manageable doesn't happen on this day, and it's not on the
  calendar at all** (added
  2026-09-10; lead corrected 2026-09-14 because the hardest part itself *is* on the calendar as the
  coaching and game blocks; what's missing from both the day and the calendar is the prep).
  Coaching two games is the intense part of the Sunday; the drives and the party are easy. The lineup and fielding plan are finished
  the day before — `12 Sept Sat → 2pm Softball Coaching Prep` on the demo list — so the day-of line
  is just `12:45pm Drive to softball`. This closes the hole in the "relaxed" claim exactly where the
  day is hardest, and it's the second "ahead of time" example alongside the packing line. **Principle
  only:** the hard part was done the night before. Not the mechanism.

**Structure note (added 2026-09-14): anticipated reader reactions are marked as such, and phrased
as statements, never as questions.** The evidence raises things the headline question doesn't cover
("Coaching two games doesn't sound relaxed."; "I count more than five items."). Leaving them
unanswered makes the post feel evasive; answering them unmarked makes it drift, which is what Bart
caught on 2026-09-14. So the post answers them under a lead-in ("Two other things you might be
thinking.") with each reaction in the reader's voice, in quotes and bold. The lead-in stays casual
on purpose: this is not a structural pattern the series repeats, just a place where the evidence
raised something.

**Statements, not questions (Bart, 2026-09-14).** The italic line on every post says "In each post
I ask and answer one question," and the post closes with "My question for you." Framing these as
extra questions contradicts the series structure and competes with the closing ask. As statements
they read as reader reactions instead of rival questions. **This applies to every part.**

Two further constraints: the answer stays at this part's altitude (no mechanism, no other part's
material), and the paragraphs that *do* answer the headline question come first, under "Two things
about those five lines."

**Excluded (belongs elsewhere):**
- How the items got onto Sept 13 — `Week plan`, the Sunday copying → Part 5
- Nothing pushes / no notifications in Lists → Part 2
- The stack-of-days structure, Future, the year-out horizon → Part 2
- Franklin Planner origin, naming discipline → Part 3
- **End-of-day** disposition — the four D's by name, deleting the *day node*, the completed-but-kept
  exception → Part 4. **Boundary:** Part 1 says "done → deleted, as I go." Part 4 says everything
  else about what happens to items. Part 1 never says "deferred," "denied," or "delegated."
- The coaching node's day-to-day bounce and the linked lineup sheet → Part 5. **Boundary:** Part 1
  says the prep was finished the day before and names the item. It does not say the item moves
  from day to day, or what it links to.
- Calendar view and date columns exist and I don't use them → Part 9
- *Why* I don't let AI or an integration write lines like `8am Pack` → candidate part "Why Don't You
  Have AI Do That?" **Boundary:** Part 1 says only that no app or integration put the line there.
  It never gives the reason.
- The 5% / 95% framing → this is the series frame; no post headlines it. Use once, lightly, or not
  at all.

**Ask:** Pull up the worst day on your calendar this month. If you could keep only the lines that are
yours, and only what you have to do around the events, how many would be left, and what would you have to strip
out to get there?

**Question wording note:** Bart's original Q2 was *"How can I use BartBot to help me focus on what
matters most to me today?"* The Sept 13 evidence answers something narrower — not priority, but
*executability*: nothing on that day is ranked, it's filtered. The narrow wording matches the
evidence; the broad wording would pull in Part 6's material (the work that's never due). Bart's call
on the final phrasing; the plan recommends the narrow one.

---

### Part 2 — A Page for a Wednesday in 2027

**Question:** How does something I need in November reach me in November, ready to use?
**Format:** **Video** — the scroll from tomorrow to a year out is the point
**Answer in one sentence:** Nothing reminds me; I write the thing under the day I want to meet it,
and when that day arrives I open it.

**Evidence:**
- First view of the demo list, collapsed: three lines — today, `Future`, `Notes`. Today is hoisted
  out so it's first on screen.
- `Future` expanded: `9 · 10 · 11 · 12 · 13 · 14 Sept`, then `25 Sept`, `28`, `30`, `3 Oct`, `7 Nov`,
  `29 Nov`, `31 Dec`, `6 Mar 2027`, `1 Aug 2027`, `8 Sept Wed 2027`. **Only days with something on
  them exist.** Contiguous near-term, then sparse, then a year out, same structure, one scroll.
- `7 Nov Sat → Thanksgiving Sweet Potatoes and Green Bean Casserole` — filed weeks before the meal.
  **The date is when I want to encounter it, not when it's due.** A due date is visible in every
  forward view until the deadline, which means carrying it. A trigger date is invisible until it
  arrives. (Use the *date* here; the recipes and the name belong to Part 3.)
- `8 Sept Wed 2027` — the year-out page: passport check, renewals, and the series itself, scheduled
  to be re-read.
- The absence: Lists has no reminders. I built a notification system for Stakes and Boring & Stale
  and left Lists out of it. This is one sentence of evidence, not a section.
- **Point back to Part 1's video** (added 2026-09-11). `lists-sept-13-post-demo.mp4` opens with
  "Sunday, September 13th, is the top level node here. It's no longer nested under future." Part 1
  shows today at the top without explaining why; Part 2 is where the structure gets explained.

**Excluded:**
- What's *in* the Thanksgiving node and how it's named → Part 3
- How items get written onto future days in the first place (Week plan, capture) → Parts 5, 8
- Deleting today → Part 4
- Why notifications are bad / the bell roadmap item → Part 9. Here it's only "there aren't any."

**Ask:** What's the farthest-out thing you've ever managed to remind yourself of — and what carried it
there?

---

### Part 3 — Name It So Future-You Can Act

**Question:** When something comes back to me, how do I make sure I can act on it without going
looking for anything?
**Format:** **Video** — clicking through embedded links shows it
**Answer in one sentence:** The item carries its own context — the action in the name, the reference
material as children, the link to the system of record inside the line.

**Evidence:**
- `Thanksgiving … (start 3 hours before departing house)` — the instruction is in the name. Under
  it: two recipe links. I make these once a year, I don't know them, and I've decided not to.
- `Library Books (next Due on Sept 9)`, `10:30am Charge Di2 (1st Sat of Month)`, `Wash Sleeping Bag
  Last did on 04/22/2026` — state lives in the name.
- `12pm drive to gym` with tomorrow's actual sets nested under it: `Row The Metronome 15 Min`,
  `Simple Strength`, `Swim 500 IM, 500 Kick/Pull, 500+ Free, 500 random`. Written in the form I'll
  need it in at the gym.
- `Notes → Grocery List`, organized `Produce → Refrigerator → Grocery → Freezer` — **the order I walk
  the store**, not a taxonomy. The friendliest example; use it before the workout tree.
- Links inside items to where the real thing lives: a snoozed email, a Stripe page, a sheet,
  another BartBot tool, another BartBot list. Pasted by hand.
- The origin, in two sentences: twenty-five years ago, a paper Franklin Planner with limited space
  and no eraser forced the question *what do I need to call this so that when I come back in two
  weeks I'll know what to do?* That's the whole discipline.

**Excluded:**
- Why I paste links by hand instead of integrating (the deleted cross-linking feature) → Part 5
- The trigger-date idea → Part 2. Here the date is a given; the post is about the *contents*.
- Times typed into text instead of date fields, as a *product* choice → Part 9. Here it's just
  how the items read.

**Ask:** Open your own to-do app and read your five oldest items. How many could you act on right now
without opening something else to find out what they meant?

---

### Part 4 — What Happens to Today at the End of Today

**Question:** What do I do with everything on today's list when today is over?
**Format:** **Video** — a decision made item-by-item; show the real pass
**Answer in one sentence:** Every item gets one of four dispositions — done, denied, deferred,
delegated — and then the day itself is deleted.

**Evidence:**
- The four D's, one line each:
  - **Done** — usually deleted outright (`5:20pm Drive to Softball`)
  - **Denied** — deleted; I've decided never to do it
  - **Deferred** — rewritten under a future day (`Dog bath` moves a week; `Workout Plan` moves a day)
  - **Delegated** — someone else has it; optionally a follow-up item on a day of my choosing
- Then the day node is deleted. Dailys is not an archive. It's a spotlight on today and what's ahead.
- The exception, stated precisely: the complete checkbox (strikethrough) is for finished items that
  are **still information**. `6 Mar 2027 → Tax 2025` struck through beside `Tax 2026`, because I
  refer to last year's while doing this year's. Rule: complete when the record still has a job;
  otherwise delete.
- **The two-list demonstration:** Part 4's own frozen list shows `8 Sept Tues` gone and the next
  day at the top. Part 1's frozen list still shows the 8th. Link both. The reader opens them side by
  side and sees the day deleted rather than being told it was. Strongest use of per-post lists in
  the series.
- **Point back to Part 1's video** (added 2026-09-11). `dailys-delete-as-you-go.mp4` opens on the
  morning of the 13th with the 8th–12th already gone and the 13th at the top level. Part 1 shows
  that state without explaining it. Part 4 is where it gets explained, and can say "that's why the
  earlier days weren't there."

**Excluded:**
- Deferral as the way the future gets populated → one sentence here at most; it's really Part 5
- The self-bouncing items by name → Part 5
- Why there's no completed-items archive as a *product* choice → Part 9

**Ask:** When you finish something, does it disappear or does it pile up? What is your done list
actually for?

---

### Part 5 — The Copying Is the Planning

**Question:** How do I keep a long plan alive in a daily list without automating it?
**Format:** **Video**
**Answer in one sentence:** A few items read a big system, write one day's worth into tomorrow in the
form I'll need it, then move themselves forward — and doing that by hand is where the planning
happens.

**Evidence:**
- Two self-bouncing items:

  | Item | Reads from | Writes | Bounces to |
  |---|---|---|---|
  | `Week plan` (every Sunday) | the shared family calendar | the week's drives and prep, under each day | next Sunday |
  | `Workout Plan` | the year's workout sheet | tomorrow's sets under tomorrow's gym drive | next day |

- The sheet holds all of 2026. Dailys holds Tuesday.
- `Week plan` is where `8am Pack for the day's activities` came from, and where "birthday party,
  11am" becomes "11am Drive to Family B-day party." The calendar holds the event; I write the action.
- Why not integrate: I built formal cross-linking between two BartBot tools, tested it, and deleted
  it before it shipped. It demanded constant data entry and the feedback was "don't make me do so
  much data entry." Pasting the link by hand is the pause-and-think moment that gives the connection
  meaning. Automating it removed the thinking. Two sentences; it's evidence, not a section.

**Excluded:**
- The four D's → Part 4
- The Sept 13 calendar-vs-list contrast → Part 1. **Boundary:** Part 1 *shows* that the timed lines
  aren't events but the things done around them. Part 5 explains *how* they get written that way
  (the Sunday copying). Don't re-demonstrate the contrast here.
- Giving important no-deadline work a time, planned the night before → Part 6
- Naming discipline → Part 3

**Ask:** Which recurring transcription in your week is genuinely wasted motion, and which one is
secretly where the thinking happens? They look identical from the outside.

---

### Part 6 — Important Work Gets a Time Too

*(Rewritten 2026-09-11. Earlier version was built on the `6am - 8am HHG CGs` container node, which
has been removed from all demo lists. Working title; Bart's call.)*

**Question:** How do I get the work that's never due onto today's list?
**Format:** Screenshots; video optional
**Answer in one sentence:** I give it a time, the same as anything else that matters that day. Mine
goes at 6am, planned the night before, because that's Steven Kotler's advice. The list doesn't care
which hour you pick.

**Evidence:**
- The diagnosis: work with a deadline brings its own urgency. Important work with no deadline brings
  none, so it's the thing that gets pushed aside, day after day, without anyone deciding to.
- The fix is ordinary: a timed line on the day, like `9:30am Drive to Basketball Tryouts`. Nothing
  special in the list's structure. The important work sits in the day's timed lines alongside the
  drives. (Capture the actual lines from Part 6's own list when it's built.)
- Why 6am for me: Kotler's advice in *The Art of Impossible* — plan it the night before, do it first
  thing, before distractions and fatigue. Credit him plainly, in one or two sentences.
- Scope it honestly: this is one way, Kotler-shaped. Someone else might put important work at 2pm or
  on Saturdays. The point is that it has a time; the hour is a personal choice.

**Excluded:**
- **HHG, CG, "high hard goals," "clear goals"** — none of that vocabulary, anywhere in the series
  (decided 2026-09-11). Name Kotler and the book; don't teach his framework.
- The contents of any goals (income, runway, named people) — never
- The 30-day experiment as a claim. If the 6am habit is mentioned, say plainly how recent it is.
- The self-bouncing mechanism in general → Part 5
- The coaching-prep "hard part done the day before" example → Part 1. **Boundary:** Part 1 is prep
  for a scheduled event so the day is executable. Part 6 is work that has no event and no deadline
  at all.

**Ask:** What work never makes it onto your day — not because you don't value it, but because nothing
about it is ever due?

---

### Part 7 — The Reminder That Isn't a Task

**Question:** How do I keep the *why* in front of me without turning it into a chore?
**Format:** Short post, one screenshot
**Answer in one sentence:** Three lines, filed under every Sunday, that ask nothing of me except to
read them.

**Evidence:**
- `13 Sept Sun → Priorities`: `1) Feel Good Emotionally and Physically` / `2) Stay connected with
  family` / `3) Develop and Maintain Sustainable Income`.
- Bounces forward a week like everything else. Same mechanism as the Thanksgiving recipes — the
  smallest thing in the system and the largest thing in my life are stored identically. What comes
  back is *why*, not *what*.

**Excluded:** Everything. This is the shortest post in the series. Let it be short.

**Ask:** If your priorities came back to you once a week without being asked for, what would they say?

---

### Part 8 — Capture Small, Organize Big

**Question:** How do I catch something when I'm nowhere near my desk?
**Format:** **Video**, shot on the phone
**Answer in one sentence:** The phone is the same list — I catch the thought in a few words, park it
under a day, and expand it later at the laptop.

**Evidence:**
- The phone view of the demo list. Running the four D's, adding, editing.
- Real mid-day catches now sitting on future days: a search-result link parked under `25 Sept →
  Laundry`; a product URL under `7 Nov → Christmas Gifts → Ideas for me`. (Pick a third from Part
  8's own list when it's built.)
- Entry on the phone is short. Organization happens at the laptop.

**Excluded:**
- Where the thing goes once caught (trigger dates) → Part 2
- How it's named → Part 3

**Ask:** Where do your mid-day thoughts currently land — and how many survive to the day you could
actually use them?

---

### Part 9 — The Features I Built and Never Use

**Question:** What should a builder do when users ask for something the builder won't use?
**Format:** Screenshots
**Answer in one sentence:** I built it, they use it, I don't — and I'm not sure that's wrong, but
I'm watching the product drift toward a shape its most committed user doesn't want.

**Evidence:**
- Calendar view exists. Start-date and due-date columns exist. Complete and notes columns exist. All
  four column toggles default to off. **Every screenshot in this series shows none of them on.**
- Times typed into item text (`7:45pm Call with Steve`) instead of a date field. That's a choice.
- No reminders, no completed-items archive — also choices, and Parts 2 and 4 showed the practice
  they enable.
- The notification bell on the public roadmap: `V1.4.4 - Evaluate if the notification bell has any
  value and adjust as necessary`. Not ignored — openly under question.
- The counter-move already on the roadmap: *"Explore creating a special type of 'Dailys' list — be
  more opinionated about the right way to use this."*

**Excluded:**
- The deleted cross-linking feature → Part 5 (that one's about automation removing thinking; this
  post is about features that *shipped*)
- Whether to make Dailys a feature → Part 10

**Ask:** As a builder — when have you shipped something you'd never use yourself, and how did you
decide whether that was service or drift?

---

### Part 10 — Should Any of This Become a Feature?

**Question:** I'm the only user of most of this. How would I know if it's actually good?
**Format:** Screenshots; series close
**Answer in one sentence:** I can't — my own usage makes everything look validated — so this is the
one post where the ask is the whole point.

**Evidence:**
- From my own notes: **"My own usage makes everything look validated."** I'm n=1.
- The cautionary case: Paper Bridge. Built, demoed publicly, how-to video made. It would have passed
  any usage test I could run. The person it was for never touched it.
- Dailys is a *convention*, not a feature. There is no "Dailys" type in the code. It's a generic
  nested list used a particular way — which is why it took nine posts to explain.
- **The practice is tool-independent, and the series should say so here** (Bart, 2026-09-14).
  Nothing in Parts 1–8 requires BartBot; a paper list would produce the same outcome. Part 1
  deliberately doesn't say this, because it never claimed otherwise and saying it would invite "then
  why BartBot?" before the series is ready to answer. This is where that question gets answered
  honestly: start from "any list works," then ask what, if anything, the tool adds (per-day
  nesting, delete-as-you-go, frozen public copies, deep links) and whether that's enough to be a
  feature or just Bart's habit. If the answer is "not much," say that too.
- The open roadmap question is whether to make the tool opinionated about it.

**Excluded:** Recapping the series. Rule 3 applies to the last post too.

**Ask:** Would an opinionated version of this help you, or would it wreck the thing that makes it
work — that the structure is yours? What would you need it to do that mine doesn't?

---

### Candidate part — Why Don't You Have AI Do That?

*(Added 2026-09-11. Placement TBD: its own part right after Part 5, or the second half of Part 5.
Decide before drafting Part 5; if it becomes its own part, the parts after it renumber.)*

**Question:** Why don't I have AI write these lines for me?
**Why it's a real question:** people ask Bart this directly ("Why don't you have AI do that?"). That
makes it exactly the kind of question the series is built on, and it's likely to come up in
comments on Part 1.

**Answer (Bart's words, 2026-09-11):** I could use an LLM with a Google Calendar integration to
generate lines like `8am Pack for the day's activities`. I intentionally don't. I want the friction
of doing that hard work myself. If I don't do that work myself, I don't really understand and don't
really own the activities. I'm just following a list that was given to me, and I've given up
ownership.

**Evidence available:**
- `8am Pack for the day's activities` from Part 1: the exact line an LLM would be asked to write.
- The deleted cross-linking feature (Rounds E3/E5): built, tested, and removed before shipping,
  because automating the connection removed the thinking.
- Paper Bridge's scope: it automates re-entry of what's already been decided on paper, never the
  deciding.
- Bart's own words on `/inspiration`, about the Franklin Planner: the manual entry and naming
  "aren't friction that I want to automate away. They're the product."

**Boundary with Part 5:** Part 5 is the mechanism (a few items read a big system and write one
day's worth by hand). This part is the reason not to hand that step to AI: ownership. Part 5's
evidence currently includes the cross-linking story; if this becomes its own part, move that story
here and leave Part 5 with the mechanism only.

**Excluded:** claims about what AI can or can't do in general. Keep it scoped to what doing the work
himself gives Bart (voice guidelines).

**Ask (candidate):** What's something you handed to software and then realized you'd stopped
understanding?

---

## Where each demo-list node is used

So no node carries two posts' arguments, and so a drafter can check quickly.

| Node | Part | Used for |
|---|---|---|
| Stand-in calendar, Sept 13 | 1 | four people, sixteen blocks |
| `13 Sept Sun` | 1 | the five timed lines, `8am Pack` |
| `12 Sept Sat → 2pm Softball Coaching Prep` | 1 | the hard part was finished the day before (principle only; the bounce and the sheet are Part 5's) |
| First view (three lines) | 2 | today / Future / Notes |
| `Future` sparsity, `8 Sept Wed 2027` | 2 | pages exist only when written on; a year out |
| `7 Nov` **as a date** | 2 | trigger date ≠ deadline |
| `7 Nov → Thanksgiving` **contents and name** | 3 | recipes as children, action in the name |
| `Library Books`, `Charge Di2`, `Wash Sleeping Bag` | 3 | state in the name |
| `12pm drive to gym` + nested sets | 3 | written in the form I'll need it |
| `Notes → Grocery List` | 3 | store-walk order |
| `6 Mar 2027 → Tax 2025 / Tax 2026` | 4 | completed-but-kept |
| `8 Sept Tues` present on Part 1's list, absent on Part 4's | 4 | the two-list demonstration |
| `Week plan`, `Workout Plan` | 5 | self-bouncing items |
| A timed important-work line (e.g. `6am …`), from Part 6's own list | 6 | important work gets a time |
| `13 Sept Sun → Priorities` | 7 | the why |
| `25 Sept → Laundry` search link, `Christmas Gifts` product link | 8 | mid-day catches |
| Column settings (all off), roadmap `V1.4.4` | 9 | unused features |

---

## Production notes

- **Voice:** `personal-notes/writing-voice-and-tone.md`. Claims about my own practice are
  observable and can be stated directly. Claims about why it would work for anyone else are
  hypotheses and need hedging.
- **Interview Method:** most raw material was captured conversationally Sept 8–9. For any part
  where the practice is hard to write cold, ask questions first, draft second.
- **Images:** capture from that part's own frozen public list at drafting time. Because each part
  has its own list, a screenshot and its list agree permanently; there is no drift to explain.
- **Hero image (decided on Part 1, 2026-09-14):** built from the part's real screenshots, not
  generated. A generated hero is decoration by rule 4's test, and it would be the one "AI made
  this" tell in posts that avoid em dashes for the same reason. Part 1's is a local Pillow
  composite: the two evidence images as rounded cards with shadows, the list kept at native size
  (its smallness is part of the argument) and overlapping the calendar, on a muted plum ground
  (`#4a4166`), ratio about 1.9:1 to survive Squarespace's featured-image crop. Later parts follow
  the same idea with their own evidence; the ground color can stay plum for series consistency.
- **Squarespace constraints (learned on Part 1, 2026-09-14):** image captions are plain text only,
  no links and no Markdown, so any link that belongs with an image goes in a body paragraph under
  it. **No inline code spans either**: backticks render as pink monospace on a grey chip, the same
  "this is source code" signal that got the five timed lines out of a code block. When the body
  quotes a line from the list, use quotation marks (fixed in Part 1, 2026-09-14). **Never print a
  bare URL as link text**: it wraps across lines and shows machinery in a post
  where every other link uses words (fixed in Part 1's closing paragraph, 2026-09-14). And **don't
  put list content in a code block at all**: an unlabeled fence gets
  syntax-highlighted as if it were source, and even a ` ```text ` fence still renders as a dark
  monospace code card. List items are not code. Part 1 settled on a **numbered list** for its five
  timed lines: numbering matches what they are (things in the order they happen), the spacing is
  tight enough to read as one unit, and the count is visible to the reader.
- **Deep links:** every node the body names gets a `?item=<id>` link on the part's public list.
  Get IDs from the public API, `GET https://bartbot-api.mosaicmeshai.com/nestedlist/shared/<token>`
  (`list.items[]` has `id`, `content`, parent), or from "copy link to this item" in the owner view.
  IDs are per-list: a duplicated list gets new IDs, so pull them from *that part's* list. Frozen
  lists mean the links never rot.
  **Gotcha (verified 2026-09-11):** a deep link expands the target's *ancestors*, not the target.
  Linking a day node lands on that day collapsed. To land on an open node, link its first child.
  **Highlight expires (noted 2026-09-14):** the shared view does highlight the target, but it fades
  after a few seconds. That suits in-session use, where the user is already looking, and not blog
  readers, who open the link in a background tab and return after finishing the paragraph. By then
  there's nothing marked. Not a problem for Part 1, where both links target children so the
  expansion itself points at the row. **Raise with the BartBot agent before Part 3**, the first
  part that sends readers to one row among many visible siblings (`Notes → Grocery List`, the
  workout sets). Fix requested of the BartBot agent 2026-09-14: persist the highlight until the
  reader's next **click**, with no timer. Scrolling must not clear it, since scrolling is how a
  reader looks around after landing.
  **Fixed and verified locally 2026-09-14** (`localhost.bartbot.com:8082`, on a test list): the
  highlight is a purple fill plus border; it survived 20+ seconds and scrolling down and back, and
  cleared on a click with a brief fade. Works for both a child target and a top-level day node.
  **Deployed and verified in production 2026-09-14** on both of Part 1's real links: `?item=7339`
  (`9/13 Game Lineup and Fielding Plan`) and `?item=6001` (`8am Pack for the day's activities`).
  Each lands highlighted with ancestors expanded, survives 20+ seconds and scrolling to the bottom
  and back, and clears on a click. Deep links are now reliable for readers arriving from a post,
  including the deeper targets Part 3 needs.
- **No HHG vocabulary** (decided 2026-09-11). The `6am - 8am HHG CGs` and `After 8am` nodes were
  removed from every demo list. "HHG," "CG," "high hard goals," and "clear goals" never appear in a
  post, caption, video narration, or LinkedIn post. Kotler and *The Art of Impossible* can be credited
  by name in Part 6; his framework is not taught.
- **Category:** `Building` with `project: bartbot` for now. This post type doesn't fit the five
  categories cleanly; if the series holds up, a sixth may be worth adding to the CLI.

---

## Lessons learned

**2026-09-09 — the first Part 1 draft rambled.** Bart's read: it "tries to answer multiple
questions," the Sept 13 material "doesn't really directly answer" the headline question, the first
direct answer arrived at line 55, and everything after it answered other questions again.

**Cause, in the plan, not the draft:**
- Plan v1 labeled Part 1 *"the umbrella question and the whole answer in miniature."* That is an
  instruction to write a multi-question post.
- Plan v1's "core insight" section fused two insights — pull-not-push (Q1) and need-nothing-in-my-
  head (Q2) — into one paragraph. The draft inherited the fusion.
- Sept 13 was assigned to Part 1 because it's the strongest image, and Q1 was assigned to Part 1
  because it was the question Bart led with. The evidence and the question didn't match, and the
  draft is what bridging them looks like.
- No field in any part said what *not* to include, so good material from four other parts leaked in.

**Fix:** this rewrite. The rules section, the two-insights table, the Excluded field on every part,
the post template, and the pre-publish checklist all exist because of this.

**The rule that would have prevented it:** *the image proves the answer to the headline question, or
it belongs to a different post.*

---

## Source material

- `~/Projects/mosaic-mesh-ai-blog-private/dailys-raw/` — unredacted screenshots captured Sept 8,
  2026. Outside the public repo. Reference only.
- `personal-notes/bartbot-dailys-demo-list-spec.md` — the public demo lists: contents, redaction,
  verification, per-post snapshot protocol
- `~/Projects/WebApps/BartBot/` — both repos, demo video transcripts, `paper-bridge-design-brief.md`
- `~/Projects/WebApps/BartBot/bart-bot-api/docs/ROUNDS_IMPLEMENTATION_PLAN.md` — the abandoned
  cross-linking write-up
- `~/Projects/WebApps/BartBot/bart-bot-client/src/pages/Inspiration.jsx` — the Franklin Planner
  passage in Bart's own words
- `~/Projects/art-of-impossible/` — background for Part 6 (Kotler's plan-the-night-before advice)
  and the n=1 quote in Part 10. Private working notes; nothing in them is quoted by framework name.
