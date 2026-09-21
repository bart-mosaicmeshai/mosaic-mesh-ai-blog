# Series Plan: Running My Day — Inside the BartBot Dailys List

**Created:** September 8, 2026
**Rewritten:** September 10, 2026 — after the first Part 1 draft rambled. See "Lessons learned."
**Status:** Plan v2. The plan-v1 Part 1 draft was deleted 2026-09-10 and Part 1 was redrafted
from empty against this plan. Published 2026-09-14:
`daily-posts/published/2026-09-10-running-my-day-part-1.md`. Part 2 published 2026-09-17:
`daily-posts/published/2026-09-15-running-my-day-part-2.md`. Part 3 published 2026-09-21:
`daily-posts/published/2026-09-17-running-my-day-part-3.md`.
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
- [ ] The body names the date the list is frozen on, the first time it shows the list ("as it
      stood on Tuesday, September 8"). Every "today" and "tomorrow" in the post is relative to
      that day, and the post publishes later (Bart, 2026-09-15, on Part 2).
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

### What came back (one entry per part, about a day after publishing)

Record third parties by role, never by name. This repo is public.

| Part | LI impressions | LI reactions | Clicks to blog | LI comments | Blog comments | Other |
|---|---|---|---|---|---|---|
| 1 (2026-09-14, logged 09-15) | 146 | 4 | 10 | 1 | 0 | none |
| 2 (2026-09-17, logged 09-18) | 107 | 0 | 5 | 0 | 0 | none |

**Part 1 notes.** 146 impressions reached a small share of 1,000+ contacts, but 10 clicks is about
7% of the people who saw it, which is high for a link post. The one comment was a paid BartBot
subscriber tagging someone they know: "this is what I was talking about #bartbot." So they had
already been describing BartBot to that person, and the post gave them something to point at.
Neither expected question ("why don't you have AI do that?", "couldn't you do this with any list?")
came up, and nobody answered the ask. One day of data is too thin to change the part map, so Part 2
goes ahead as planned. Worth checking: whether Squarespace commenting asks readers to sign in,
since 10 visitors and 0 comments could be friction as much as a lack of interest.

**Part 2 notes.** Everything down: 107 impressions, no reactions, 5 clicks, no comments anywhere.

*The zeros are probably one event, not four.* LinkedIn distributes on early engagement. Part 1's
first comment (a paid subscriber tagging someone) and its 4 reactions bought it impressions;
Part 2 got no early engagement and stalled at 107. Treat impressions as partly downstream of
reactions, not as independent evidence.

*Click-through held.* 5/107 is 4.7% against Part 1's 6.8%. Both are high for a link post. Of the
people who saw it, a good share still clicked. Fewer people saw it. Reach is the constraint, not
the post. Image treatment is not the explanation: both LI posts attached images natively with the
link in the body (Part 1 two images, Part 2 one), so nothing about the link-card decision changed
between them.

*Part 1 had novelty Part 2 could not have.* First public post about BartBot to 1,000+ contacts.
Part two of a series does not get that, and the readers most likely to click had already clicked.

**The ask is not failing; the sample is too small to test it.** Fifteen visitors across two posts,
zero comments. Blog comment rates run about 1% of visitors, so fifteen visitors predicts ~0.15
comments and zero is the most likely outcome *even if the ask is perfect*. Part 2's ask was
deliberately made easier than Part 1's and nothing changed, which is what you would expect from
changing something that was never the binding constraint.

**Consequences, decided 2026-09-18:**
1. **Stop treating "nobody answered" as evidence about the ask's wording.** Keep asks short
   because short is better writing. Do not re-tune the ask part over part hoping for comments,
   and do not read a zero at this volume as a verdict on anything.
2. **A public blog comment is the wrong instrument for this audience.** It asks someone who
   arrived from a phone feed to leave the feed, read ~700 words, and post publicly under their own
   name. The ask stays on the blog (it is the owned surface), but expect answers to arrive
   privately if they arrive at all.
3. **The newsletter is the likeliest place the ask ever gets answered.** It is the one surface
   untouched after two parts, subscribers opted in, and "hit reply" is a far lower bar than a
   public comment. **Deferred by Bart 2026-09-18: "that is a different concern."** Not rejected,
   and not a series decision. It stays the plan's open decision under Distribution and gets taken
   up on its own, not inside a part's drafting session.
4. **Two parts is still not a trend.** Nothing here changes the part map, the rules, or the
   cadence. Revisit after Part 3 or 4, and watch reactions (the lever on reach), not impressions.

*Not evidence of anything yet, but free to vary and worth recording:* Part 1 posted Monday
September 14, Part 2 Thursday September 17.

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
| 3 | `cross-tool-linking.mp4` | `#cross-tool-linking` | pasting a URL from one BartBot tool into an item in another, by hand | not used: Part 3 has no video (2026-09-18), and this one shows how a link gets made, not acting on a line |
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

### Part 2 — A Wednesday in 2027, Already on My List

*(Retitled 2026-09-15 from "A Page for a Wednesday in 2027": a day is a list item with items under
it, not a page. Part 1's published Next line was reworded to match, in the repo and in
Squarespace.)*

**Question:** How does something I need in November reach me in November?
*("Ready to use?" dropped 2026-09-17. The tail asked about the item's state on arrival, which is
Part 3's question; Part 2 answers how it arrives at all. Part 1's published Next line never had
the tail.)*
**Format:** **Video** — expanding Future and seeing tomorrow to a year out on one screen, then
opening the last day, is the point. (Not "the scroll": the expanded Future fits in one view, which
is the better fact. Recorded 2026-09-15 as `lists-dailys-part-2.mp4`, 1:13.)
**Answer in one sentence:** Nothing reminds me; I write the thing under the day I want to meet it,
and when that day arrives I open it.

**Evidence:**
- First view of the demo list, collapsed: **two lines** — today and `Future`. Today is hoisted
  out so it's first on screen. (Was three lines with `Notes` until 2026-09-15, when Notes moved to
  its own public list; see the spec. Part 2 says so in one sentence, per the snapshot protocol,
  since Part 1's frozen list still shows it.)
- `Future` expanded: `9 · 10 · 11 · 12 · 13 · 14 Sept`, then `25 Sept`, `28`, `30`, `3 Oct`, `7 Nov`,
  `29 Nov`, `31 Dec`, `6 Mar 2027`, `1 Aug 2027`, `8 Sept Wed 2027`. **Only days with something on
  them exist.** Contiguous near-term, then sparse, then a year out, same structure, on one screen.
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
- **The Franklin Planner, structural half only** (Bart, 2026-09-15: "this is where the Franklin
  Planner inspiration story is starting to fit"). The origin story splits in two. Part 2 gets the
  page-per-day mechanism: write it on November's page, turn to the page when November comes, no
  notification. One short paragraph in the Future section, with the contrast that the list only
  has the days that are written on. Part 3 keeps the naming half (limited space, no eraser, "what
  do I need to call it"), and should say "the same planner" rather than re-introducing it.

**Excluded:**
- The Franklin Planner's naming lesson (limited space, no eraser) → Part 3. Part 2 says only that
  it had a page per day and you turned to the page.
- What's *in* the Thanksgiving node and how it's named → Part 3
- How items get written onto future days in the first place (Week plan, capture) → Parts 5, 8
- Deleting today → Part 4
- Notifications, all of it → Part 9: that Lists sends none, that the system exists for two other
  tools and Lists was left out, Bart's personal reason ("I already get notifications for all sorts
  of things and I tune most of them out. One more would be noise, not a reminder."), the bell
  roadmap item, and users asking for it. **Settled 2026-09-16 after trying it both ways in Part
  2:** the only notification fact Part 2 carries is the clause in its answer sentence, "the list
  reminds me, but not with a notification." A paragraph about why was a second subject in the
  payoff section and got cut. Part 9 should open with Bart's personal reason above; it's his
  wording and it's the honest starting point for the product question.

**Ask (revised 2026-09-16):** Think of something you'll need two months from now. Where is it
right now, and how will it reach you when the time comes? And what does holding it cost you in
the meantime: does it sit quietly, or do you find yourself running through it at night to keep it
alive?
*(Replaced "What's the farthest-out thing you've ever managed to remind yourself of, and what
carried it there?" The old ask was the 2027 section's angle, distance, and rewarded a distance
story over the mechanism. The new one mirrors the headline question at the sweet potatoes'
distance, can be answered from where the reader sits, and adds the cost of carrying it, which is
the half of the answer "What that buys me" spends its section on.)*

---

### Part 3 — Write It So Future-Me Can Act

**Question:** When I reach a day, how do I make sure I can act on what's written without having
to hunt for additional details?
*(Bart's wording, 2026-09-16, adopted from Part 2's published Next line. Replaced "When something
comes back to me, how do I make sure I can act on it without going looking for anything?" because
"comes back to me" is push language, and Part 2 spent a post saying nothing comes to Bart, he
reaches the day. Part 3 may still adjust it when drafted; keep it close.)*
**Format:** Stills. ~~Video, clicking through embedded links~~ **cut 2026-09-18 in review.** The
only motion on offer was a link opening in a new tab, which fails the part map's own test (does
the idea depend on motion?). The stills show the links, and the deep links let a reader click for
themselves on the real list. Bart: "The still images show the links clearly and the video is not
needed." Lesson for later parts: the Format field was assigned before deep links and per-part
stills existed, so re-run the motion test at drafting time instead of inheriting it.
**Answer in one sentence:** The item carries its own context — the action in the name, the reference
material as children, the link to the system of record inside the line.

**Evidence:**
- `Thanksgiving … (start 3 hours before departing house)` — the instruction is in the name. Under
  it: two recipe links. I make these once a year, I don't know them, and I've decided not to.
- `Library Books (next Due on Sept 9)`, `10:30am Charge Di2 (1st Sat of Month)`, `Wash Sleeping Bag
  Last did on 04/22/2026` — state lives in the name. Also `1 Aug Sun 2027 → Cancel or keep LI
  Premium for another year? Expires Sept 2, 2027`: the line carries its own deadline while sitting
  a month early. (Moved here from Part 2 on 2026-09-16, where it was a redundant second
  trigger-date example.)
- `12pm drive to gym` with tomorrow's actual sets nested under it: `Row The Metronome 15 Min`,
  `Simple Strength`, `Swim 500 IM, 500 Kick/Pull, 500+ Free, 500 random`. Written in the form I'll
  need it in at the gym.
- ~~`Grocery List`, organized in store-walk order~~ **Moved out 2026-09-18** to the candidate
  part "The List I Delete to Finish" below. Part 3's first draft said "I read down the list as I
  walk," which is not how Bart uses it, and the real pattern is a post of its own. Part 3 links one
  list again.
- Links inside items to where the real thing lives: a snoozed email, a Stripe page, a sheet,
  another BartBot tool. Pasted by hand. (~~another BartBot list~~: the roadmap link isn't on the
  Part 2 or Part 3 lists, and Bart decided 2026-09-18 not to add one: "We have enough examples
  without it.")
- The origin, in two sentences: twenty-five years ago, a paper Franklin Planner with limited space
  and no eraser forced the question *what do I need to call this so that when I come back in two
  weeks I'll know what to do?* That's the whole discipline.

**Excluded:**
- Why I paste links by hand instead of integrating (the deleted cross-linking feature) → Part 5
- The trigger-date idea → Part 2. Here the date is a given; the post is about the *contents*.
- Times typed into text instead of date fields, as a *product* choice → Part 9. Here it's just
  how the items read.

**Ask (rewritten in review, 2026-09-18):** Think of the last time you came back to something you'd
written down for later. Could you act on what you'd written, or did you have to go hunting for the
rest? *(Replaced "read your five oldest items…". Bart: "oldest" sends the reader the wrong
direction. It points at stale, avoided items, which is Part 4's subject, not naming.)*

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
- **Candidate (Bart, 2026-09-15): why Notes lived inside Dailys for years.** The tool he used
  before BartBot capped the number of lists, so reference material got parked under a `Notes`
  node in Dailys. It moved to its own list on 2026-09-15, during the Part 2 review. A small,
  honest example of a structure that was a workaround rather than a choice.
- **Candidate (Bart, 2026-09-15): the "reduce visual distractions" design principle.** It's why
  future days nest under `Future`: hiding them makes it easier to focus on now. Raised while
  reviewing Part 2 and kept out of it, because the reason is Part 1's insight (what's removed) and
  Part 2 only says the fold keeps what isn't today off screen. As a stated product principle it
  fits here, next to the columns that default off, or in Part 10.

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
- **What writing the series changed** (Bart, 2026-09-15: "My process is organic and I'm always
  open to improvements. This is a great example."). Writing about the practice is changing it, and
  Part 10 is where to say so; the 2027 line on the Part 2 list, "Running My Day series, one year
  on. Did any of it change?", is the hook. Keep this list as the series goes:
  1. **Notes moved out of Dailys** (2026-09-15, during the Part 2 review). It had lived there
     since a previous tool capped the number of lists. Part 2 says only "a change I made while
     writing this post."

**Excluded:** Recapping the series. Rule 3 applies to the last post too. (The "what changed" list
is not a recap; it's evidence for the n=1 question, since a practice that keeps changing under
observation is one whose owner can't fully judge.)

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

### Candidate part — Where Did I Put That?

*(Added 2026-09-15 while reviewing Part 2. Placement TBD: its own part after Part 8, or the
opening contrast of Part 9, which is otherwise about features Bart doesn't use. Decide before
drafting Part 8.)*

**Question:** With a thousand items folded under days I can't see, how do I find something before
its day comes?
**Why it's a real question:** Part 2's fold hides everything that isn't today. That's the point,
and it has a cost: Bart's real Dailys list had **1,134 items on 2026-09-15** (the public Part 2
copy has 252), nested under future days and nested again under those, and he can't always remember
where something is. Search is the counterweight to the fold, and in his words "a key enabling
feature in Lists for me." Kept out of Part 2 because Part 2 is how a thing reaches you on its day;
this is how you reach a thing before its day.

**Answer (to draft with Bart):** I search. The item is wherever I filed it, and search finds it
by its text without my having to remember which day.

**Evidence available:**
- The 1,134 / 252 fact, dated. The public list is a simplified copy, and the post can say so.
- The search box on the shared view (readers can try it on the frozen list) and on the owner view.
- Search covers item text and notes, and reads the database rather than the rendered page, so
  collapsed nodes are found (`nestedlist/views.py:1060-1078`).
- A video of searching for something filed months out and landing on it. **Record on the public
  demo list**, never the real one: the owner view's search is cross-list and would show real
  Dailys results.

**Boundary with Part 2:** Part 2 says the fold keeps what isn't today off screen. This part says
what to do when you need something that's off screen anyway. Neither restates the other.

**Excluded:** how search is implemented; whether other tools' search is worse.

**Ask (candidate):** When you file something for later and then need it early, how do you find it?

---

### Candidate part — The List I Delete to Finish

**Surfaced 2026-09-18, in Part 3's review,** when the Grocery List example turned out to describe
a different practice from the one Bart actually has. Working title only.

**Question (draft):** How do I come home from the store with everything I need and nothing I
don't?

**The practice, in Bart's words (2026-09-18):** "What I actually do is duplicate/copy the full
Grocery List and nest it under today. Then I do a 'pantry check' where I go through the full list
and consider each item. For each item I first ask the question 'Do I want this item available at
home over the next 3-7 days?' If yes, I then check to see if I already have enough of it at home.
If the answer to either of these is No, I delete it from the copied, nested list under today.
What remains is what I actually need to buy when I go to the grocery store. Then, when I'm at the
grocery store and putting things in my cart, I delete the item from the copied, nested list under
today until the Grocery list I'm using for shopping is fully deleted. At that point I know I
bought everything I need and nothing I don't need. It helps me avoid impulse purchases and
prevents me from getting home without some key ingredient." And: "this feels like a whole post
on its own. It's another pattern for how I use Lists."

**The shape of it:** a master list that never changes (the template, on the Notes list), a copy
nested under the day, a pruning pass driven by two questions, and deletion as the progress bar,
so an empty list means done. Four moves, and the master is untouched for next time.

**Evidence available:** `Notes → Grocery List` on the public Notes list
(`ARVfQr8zvPo7swjW3wRz`), organized `Produce → Refrigerator → Grocery → Freezer`. The store-walk
ordering (in the spec since 2026-09-08, from Bart) would belong here too, but **confirm it with
him before using it**; Part 3's draft built a sentence on it ("I never double back for something
three aisles behind me") that was Claude's invention, not his. `8 Sept Tues → Grocery Shopping`
is on every Dailys list with nothing nested under it, so this part's frozen list would need the
copied-and-pruned Grocery List under a day. Motion test: copying, pruning, and deleting down to
empty all depend on motion, so this is a real video candidate.

**Placement, undecided.** It shares verbs with two planned parts: deleting as finishing (Part 4)
and copying by hand as where the thinking happens (Part 5; the pantry check is exactly that). It
could be evidence inside Part 5 or its own part right after it. Decide when Part 5 is drafted.
**It is a pattern, not a grocery trick (Bart, 2026-09-18, same review):** "For some workouts I use
delete to complete. For example, I've memorized the Simple Strength workout so I no longer do
this, but if I did, I would have the following lines nested under Simple Strength and I would
delete them as I go: Bench Press 5 x 10, Pullups 15 total, Roman chair 3 x 12, Leg Press 2 x 10,
etc. I could also add in the amount of weight for each exercise as a reminder if needed." So the
part has two examples: groceries (copy a master, prune, delete to done) and a workout (nest the
steps, delete to done). The shared move is deletion as the progress bar. Note the second half:
once a workout is memorized the nested lines go away, which is the same boundary Part 3 found
with Thanksgiving ("none of this is written down, I just know"): a line carries what he will
have forgotten, not what he reliably knows. Still worth asking about packing.

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
| `Notes → Grocery List` | candidate: "The List I Delete to Finish" | a template copied under today, pruned, then deleted to done (was Part 3's store-walk order until 2026-09-18) |
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
- **Squarespace caps image alt text at 250 characters** (found on Part 3, 2026-09-21: the hero's
  267-character alt was cut off mid-word). Count before publishing.
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
- **Dates in prose are month-first** ("November 7," "September 8, 2027," "Tuesday, September 8"),
  the way Part 1 wrote "Sunday, September 13" and the way readers say them. Node names are quoted
  as the list spells them ("8 Sept Wed 2027") in captions, alt text, and quotation marks. Part 2's
  first draft mixed the two because the prose was echoing the node names (fixed 2026-09-16). When
  several dates with years sit in one sentence, break the sentence rather than stacking commas
  ("Then March 6, August 1, and September 8 of 2027").
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

**2026-09-15 to 17 — Part 2's line-by-line review.** The first draft was structurally right (it
followed plan v2) and still took about sixty edits, most from Bart. What they had in common, so
Part 3's first draft starts past them:

- **The answer paragraph carries the payoff, not just the mechanism.** Part 2's first answer was
  all structure and ended on "start on what's there"; Bart: "we forgot to include the payoff."
  Part 1's ended on "present." Every answer paragraph ends on what it buys him.
- **Lead every paragraph with its point; exceptions come after or get cut.** The notifications
  paragraph opened "What that buys me" with the exception and buried the point, then got cut
  entirely once the point led. If a paragraph starts with what the list *doesn't* do, rewrite.
- **Name Dailys on first mention.** "The list" before "Dailys" is ambiguous under an italic line
  that just said "the Lists tool."
- **Captions describe the image. They don't argue.** "Nothing between now and then will show it
  to me" came out of a caption for that reason.
- **A link earns a sentence only when there's no image of the thing.** Otherwise put the link on
  the noun ("[Wednesday, September 8, 2027]") and drop the "open it and see" sentence, which asks
  the reader to look at what they're already looking at. When a link does get a sentence, say what
  they'll find ("a line under a date, nearly three weeks before the meal"), not "see for
  yourself."
- **State a rule once.** Example paragraph shows; rule paragraph tells; neither does the other's
  job. "Due" appeared four times across two paragraphs before this.
- **Push language is banned in this series.** "Comes back to me," "reminds me" (without "not with
  a notification"), and "arrives" for the item all imply the list acts. Bart reaches the day; the
  item is there. Part 3's headline was reworded for this.
- **Sidebars go where sidebars live.** The Notes-moved note went from the middle of an argument to
  the closing list paragraph, unchanged.
- **The ask mirrors the headline at the same distance and is answerable from a chair.** Part 2's
  first ask (farthest-out thing you ever reminded yourself of) rewarded a distance story; the
  final one asks where the reader keeps something they need in two months and what holding it
  costs. Ten Part 1 visitors answered nothing; lower the effort.
- **Claims about other people stay out**, even true ones. The ask is about to invite those people
  to answer.
- **Dates month-first; node names as the list spells them** (production notes).
- **The headline is one question.** "Ready to use?" was a second question (Part 3's) riding on the
  first; cut.

**2026-09-18 — Part 3's line-by-line review** (one morning, about thirty exchanges). What Part 4's
first draft should start past:

- **Don't invent details of Bart's life.** Three made it into the first draft and he caught each
  one: a stance ("I've decided not to"), a scene ("three aisles behind me"), and a location
  ("standing at the edge of the pool"). Each time, asking produced better material than the
  invention: the November 7 questions, the pantry check, the day-before reason for "Simple
  Strength." When a sentence needs to know how he actually does something, ask before drafting.
- **An Excluded list can be over-applied.** The first draft withheld why the Thanksgiving line sits
  on November 7 because the trigger-date idea is Part 2's. Bart: "None of the readers will" know.
  The fix was one sentence and a link back, not re-arguing Part 2. Excluded means don't re-make the
  other part's argument; it doesn't mean leave a hole a new reader falls into.
- **Check that the example describes the practice, not just the artifact.** The Grocery List looked
  like evidence for "written in the form I'll need it." The list is real; the practice around it
  (copy, prune, delete to done) was a different post. Ask "is this how you use it?" before building
  a section on a node.
- **Re-run the motion test at drafting time.** Part 3's "Video" format was assigned before deep
  links and per-part stills existed. At the line where the tag sat, the only motion on offer was a
  link opening. Cut.
- **Tie each claim to its real source.** Bart kept reworking one paragraph until each thing he
  wouldn't remember was credited to the part of the line that holds it (the parenthetical gives
  the start time; the nested links give the recipes). Terse connectives ("So", "I don't need to.")
  hid that.
- **"Sounds like clever AI writing" is a real category.** "The date it stops being mine to make"
  went; "the deadline for making it" stayed. Prefer the plain verb the neighbouring sentences
  already use ("tells me").
- **Proxies in the ask mislead.** "Your five oldest items" stood in for "you've forgotten the
  context" and pointed readers at stale, avoided work instead. Mirror the headline directly.
- **The detail in a line scales with distance and quantity.** His rule, surfaced twice the same
  morning ("none of this is written down, I just know"; "in 24 hours I'll still remember"): a line
  carries what he will have forgotten, not what he reliably knows. It is in Part 3 as the Simple
  Strength sentences and is available to later parts.
- **Numbers, one at a time.** When asking how a post landed, ask for one figure per message.

**2026-09-21 — Part 3's fresh-eyes reread** (three days after the first review; five changes):

- **Plan shorthand leaks into prose.** "Name" ("state lives in the name," "naming discipline") was
  this plan's vocabulary, not Bart's, and it appeared in the title, two headings, and three
  sentences before he noticed it read oddly. The series' word is "line." Before drafting, check
  that a part's key noun appears in the published parts; if it only appears in the plan, it is
  probably jargon. The title changed with it: "Write It So Future-Me Can Act."
- **"The same X" is a hole for a reader who starts here.** "The same Franklin Planner" pointed at
  Part 2. Same failure as the November 7 gap: re-ground in a clause and link back.
- **Even his own published wording gets corrected by memory.** "No easy way to erase" was from
  his Inspiration blurb; on reread he said he wrote in mechanical pencil and the real constraint
  was line space. Ask about the physical facts even when there's a source.
- **A fresh-eyes gap works.** Friday's review ended with "looks good"; Monday found the most
  pervasive problem in the post. Keep the two-sitting rhythm.
- **On LinkedIn, an example about LinkedIn is "too on the nose"** (his words) even when it's the
  most recognizable one. It stayed in the blog body.

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
