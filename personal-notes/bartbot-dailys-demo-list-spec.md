# Spec: The Public Demo Dailys List

**Created:** September 8, 2026
**For:** the "Running My Day" series — see `bartbot-dailys-series-plan.md`
**Status:** **Live and public**, 2026-09-09. **Model changed 2026-09-10: one frozen public list per
part.** Copies are free, so each part links to its own snapshot and nothing ever drifts.
Part 1 URL: https://bartbot.mosaicmeshai.com/lists/shared/6Ji6745t3Qod5nHCDi3o
Owner view: `/lists/93`, titled `Dailys, Part 1 (A simplified, public version of the list I use to
run my day)`
All 14 demonstrations met. Redaction verified over four review rounds.
Part 2 URL: https://bartbot.mosaicmeshai.com/lists/shared/ovMhhakwMiqmKyaSIoCI (public 2026-09-15).
Checked against the API the same day: started as an exact copy of Part 1 (252 items with the same
content, notes, and completion), all four columns off, every day name matching its date. Redaction
searches find only what Part 1 already had, where the Gmail, Sheets, and Stripe links carry
made-up IDs. Two edits the same day before freezing: the two em-dash lines under `8 Sept Wed 2027`
reworded, and **`Notes` removed** (see below), leaving 127 items and a two-line top level,
`8 Sept Tues` / `Future`.

**Notes moved out of Dailys, 2026-09-15.** Bart: Notes was only ever in Dailys because the tool
he used before BartBot capped the number of lists, so it got parked there. It's now its own public
list, **`Notes (A simplified, public version of the list I use to keep notes)`** at
https://bartbot.mosaicmeshai.com/lists/shared/ARVfQr8zvPo7swjW3wRz (125 items; verified against
the API to hold exactly Part 1's Notes subtree, all columns off, three surviving links, none
Gmail or Sheets). **Part 1's list keeps Notes**, because it's a published record and Notes really
was there on Sept 8. From Part 2 on, no Dailys list has a Notes node. Part 3's Grocery List
evidence comes from the Notes list; if Notes has changed by then, Part 3 gets its own frozen copy.
Demonstrations #1 and #13 below are updated to match. The real Dailys list is Bart's call.
**2026-09-11:** HHG scaffolding (`6am - 8am HHG CGs`, `After 8am`, `4pm Plan tomorrow's…`) being
removed from the Part 1 list by Bart; demonstration #2 retired. After that edit: re-capture
`dailys-13-sept.png`, and repoint the post's caption deep link (`?item=5891` was the deleted
`After 8am` node).

**Verified in a browser 2026-09-09** (the page is a client-rendered SPA — `WebFetch`/curl return
only the shell, so it must be checked in a real browser):

- **Loads collapsed.** First view is nine lines: four notes + `8 Sept Tues` / `Future` / `Notes`.
  Ideal — exactly the structure Part 2 argues about.
  **Caveat (Bart, 2026-09-15):** only on a first visit. BartBot keeps each list's expansion state
  in the browser's local storage, so a reload or a return visit reopens whatever the reader last
  had expanded. Client-side only. So posts must never say "when the list loads" or "when I open
  the list" about the collapsed view; describe the state instead ("with everything collapsed").
  Same reason a fresh Playwright context is the right way to capture screenshots: it has no stored
  state.
- Expand works one level at a time; links render clickable; strikethrough renders on the public
  view, so demonstration #10 (`6 Mar 2027 → Tax 2025`) renders correctly.
- The shared view also provides a search box and a "Sign Up for BartBot" footer CTA.

**Open before the LinkedIn launch:**
- ~~Markdown not rendered in list items~~ — fixed 2026-09-09. (Worth remembering as a product fact:
  list item content is plain text, `**bold**` renders literally.)
- ~~Note 2 duplicate clause~~ — fixed 2026-09-09.
- ~~Explanatory notes at the top of the list~~ — **removed entirely 2026-09-09; the context moved
  into the list title.** Live title:

  > **Dailys, Part 1 (A simplified, public version of the list I use to run my day)**

  First view is now three lines — `8 Sept Tues` / `Future` / `Notes` — which is the series'
  structural argument on screen with nothing competing with it. The title costs zero rows, sits
  where a reader looks first, and carries the part number so a reader knows which snapshot they're
  on (retitled 2026-09-10 when per-post lists were adopted).

  Superseded along the way: an earlier draft suggested "pinned to Tuesday Sept 8" in a note, and a
  later one had a single living list that advanced with the series. Both are gone: each part now
  has its own frozen list, so no date or "what changed" language is needed anywhere on the page.

**Decided 2026-09-09: confusing a random visitor is acceptable.** The list is an adjunct to the
posts, not a standalone artifact. Readers arrive from the blog with context; optimizing the list
for someone who arrived without any would cost the readers who matter. (The "not pinned" half of
this decision was overtaken on 2026-09-10: with one frozen list per part, every list is
effectively pinned to its post, and that's the point.)
**Reversed 2026-09-10: deep links are now used everywhere a post names a node.** The shared view
originally ignored `?item=`; a separate BartBot session ported the owner view's deep-link effect
(`NestedListView.jsx:385-416`) to `SharedNestedListView.jsx` and shipped it to prod the same day.
Verified in a browser: ancestors expand, page scrolls to the node, param clears from the URL. No
visible highlight on the target row on the shared view (flagged, not blocking). Node expansion by
hand is unchanged. Earlier decision (2026-09-09) to link only to the list generally is superseded.
- **Link previews.** `bart-bot-client/index.html` carries static `og:title`/`og:description`/
  `og:type` and **no `og:image`**, so every BartBot URL previews identically as a bare, imageless
  card titled "BartBot". The demo-list link will preview badly on LinkedIn. Cheapest fix is a
  static `og:image`; per-list dynamic previews need prerendering and belong on the roadmap, not in
  the launch.

**Substitute names in use — keep consistent across the list and all eleven posts:**
`Nancy` · `Arun` · `Steve`. Relations appear as roles: `Dad`, `Mom`, `Sister`, `Kid`,
`grandparents`. Prose uses "my daughter" / "my wife" and names no one.

The single source for every screenshot and video in the series, and a real list readers can open,
expand, and scroll. Public (read-only to everyone but me), so readers can explore the structure
without being able to change it.

---

## Build method: duplicate and redact, don't author from scratch

BartBot already has both features needed:

- `POST /nestedlist/duplicate-list` (client: `api.duplicateList`)
- `POST /nestedlist/bulk-delete-items`

**Steps:**

1. Duplicate the real Dailys list.
2. Rename the copy.
3. Bulk-delete everything on the redaction list below.
4. Edit what remains to strip private specifics.
5. Extend the future out a full year (see "Required demonstrations").
6. Make public via the list menu → Make Public (requires typing the list name to confirm).

**Why duplicate rather than author:** the structure *is* the content. Twenty-five years of habit
produced the shape — the sparse day nodes, the way a node's children are the
context you need at the moment you act. Hand-authoring a fake version would produce something that
looks like a productivity template, and readers can smell that. Start from the real thing and remove.

Doing it entirely in the UI is also dogfooding, and it exercises duplicate + bulk-delete + make-public
in sequence, which is worth knowing about firsthand before writing ten posts about the tool.

**Name:** `Dailys, Part N (A simplified, public version of the list I use to run my day)` — one
list per part, part number in the title. Part 1's is at `/lists/93`.

---

## Redaction rules

**Delete outright:**

- Every Gmail URL (`mail.google.com/...`), including snoozed-message links
- Every Google Sheets URL — the workout schedule and especially the `BP` health sheet
- Health and appointment items: `Therapist Appt`, `Orthopedic Stuff`, `Medical Stuff`, `BP`
- Financial and account items: `Stripe Payout`, `Tax 2025` / `Tax 2026`, `Dependent Care
  Reimbursment`, `concept2.com/cart - buy with MMAI account`
- Rounds and Stakes identifiers (`RND-Con-…`, `STK-…`)
- Anything naming a real third party — `Call with Dan Smith`, `Message Brenna`, `GM - Joy's reply in`,
  `Cancel La Crescent Trip?`
- Named venues and recurring locations: schools, the church, the specific Y

**Keep, unmodified — these are safe and they're the best teaching examples:**

- The Thanksgiving node and both recipe links. Public recipe URLs, and it's the clearest
  illustration of a trigger date in the whole list.
- `(start 3 hours before departing house)` — the naming-carries-the-action example
- `Library Books (next Due on Sept 9)` — trigger info in the name
- `Week plan`, `Workout Plan` — the two self-bouncing items
- `Vitamins`, `Clip Nails`, `Reading` → `Feedly Catchup` / `10 Pages`, `Loving Kindness Meditation`
- `Ginger bath` — the recurring-defer example used in Part 5
- Links to public BartBot pages: the product roadmap list, the release notes

**Removed 2026-09-11 — the HHG scaffolding.** Every `6am - 8am HHG CGs` node, every `After 8am`
node (children moved up to the day node first; deleting a node cascades to its children), the
numbered work set under the 8th, and `4pm Plan tomorrow's 6am HHG CGs`. These were artifacts of a
30-day *Art of Impossible* experiment that the series doesn't explain. The day's items now sit
directly under each day node. Applies to Part 1's list and every later part's copy. HHG/CG
vocabulary never appears in the series.

**Family names — DECIDED (2026-09-08): redact or change them.**

This applies everywhere, not just to obvious items. Names appear in at least five places already
identified: `Priorities` line 2, `Ruby/Julia Transportation Plan`, `Julia from ACYC`, `Julia
Drivers Ed`, `GM - Joy's reply in`, plus both column headers and profile photos in the Google
Calendar screenshots.

**Rule: substitute names in the list, no names at all in the prose.**

- **In the list**, use consistent substitute first names rather than role labels. A list item
  reading `8:30pm pick up younger daughter from choir` is how nobody writes a list, and the series
  is arguing that these items are written the way a real person writes them. Pick two substitutes
  and one for my wife, write them down here, and use them everywhere — a name that changes between
  Part 2 and Part 6 will be noticed.
- **In the blog prose**, write "my daughter" / "my wife." Prose never needs the name, so there is no
  contradiction with the list, and nothing to keep straight across eleven posts.

**`Priorities` line 2** is the one place this costs something. `Stay connected with Joy, Ruby, and
Julia` is the line that makes Part 8 land, and `Stay connected with my family` is a greeting card.
Use the substitute names — the warmth is in naming *specific people*, not in which names they are.

**Generic vs. specific activities:** `9:30am Drive to Lakers Tryouts` can stay or become `9:30am
Drive to basketball tryouts`. Keeping the team name costs little and reads real, but drop named
schools, the church, and the specific Y as listed above.

---

## Redaction method and verification pass

**Method (decided 2026-09-08):** manual, working backward by day from the furthest-future node
toward today. BartBot has no global find-and-replace, so this is hand work. Ending on today's node
is deliberate — it's the densest and the one with the most context by the time you reach it.

Note that the backward pass *starts with authoring, not redacting*: the furthest day on the real
list today is `1 Aug Sun 2027`, and demonstration #4 needs `8 Sept Wed 2027`. That day has to be
created before there's anything to redact.

### Turn the notes column ON before starting

Search covers both `content` **and** `notes` (`nestedlist/views.py:1060-1078`), but the notes column
is off in normal use. **Any item with text in its notes field is invisible during a visual sweep.**
Enable the notes column for the whole redaction pass; turn it off again before capturing any
screenshot, since all-columns-off is the argument of Part 10.

### Verification pass — run after the day-by-day sweep

Search reads the database, not the rendered page, so collapsed nodes are covered. Search is
cross-list, so results include the real Dailys — read the demo list's group only.

Each of these should return **zero** hits in the demo list:

| Query | Catches |
|---|---|
| `http` | every remaining link — the single strongest check; eyeball each survivor |
| `mail.google.com` | Gmail and snoozed-message links |
| `docs.google.com` | Sheets and Docs, incl. the workout schedule and the BP sheet |
| `RND-` / `STK-` | Rounds contact and Stakes list identifiers |
| each substitute-name predecessor | real family names, incl. inside notes |
| `Tax` / `BP` / `Therapist` / `Orthopedic` / `Medical` | health and financial items |

The only links that should survive `http` are the ones deliberately kept: the two recipe URLs, the
public product roadmap list, and release notes.

---

## Remaining build items

Redaction complete and verified over four review rounds (2026-09-08/09). All 14 demonstrations
present, `Notes` split done, list live and public, rendering verified in a browser.

**The current open items live in the status block at the top of this file.** As of 2026-09-09 that
is: collapse the four notes to one durable line, and append the series URL after Part 1 ships.

Resolved along the way: the duplicated `Workout Plan` subtree (deleted from today's node and the
`Notes` copy renamed to `Workout Plan Ideas` — the rename does the explaining by itself), the
literal `**markdown**` in the notes, Note 2's duplicated clause, and the question of default
collapse state (it loads collapsed — confirmed in-browser).

### The Grocery List is a Part 4 asset

Organized `Produce → Refrigerator → Grocery → Freezer` — **the order you walk the store**, not a
taxonomy of food. Same principle as `8am Pack for the day's activities` and `(start 3 hours before
departing house)`: structured for the moment of execution rather than for correctness. More
relatable to a general reader than the swim drills, so use it as the friendly example before the
workout tree shows the extreme.

**Noted, not blocking:** the candidate-question children under `3. Write blog post` still carry
second-person commentary ("the proof is the feature *you* built and deleted"). Authentic to how it
was captured, and Bart chose to keep it after the real name was removed. A public reader may read
it as a stranger's voice.

### Demonstration notes from the final review

- **#10 improved on the spec.** `Tax 2025` completed with strikethrough beside a live `Tax 2026`,
  both with identical children, placed on `6 Mar 2027` — the day the work actually happens. Better
  than the `Laundry` substitute. Note for Part 5: this screenshot comes from a future day node, not
  from today's end-of-day pass.
- ~~Empty containers are a feature, not a gap.~~ Superseded 2026-09-11: the `6am - 8am HHG CGs`
  nodes were removed from all lists. Part 6 now argues that important work gets a timed line on the
  day like anything else; see the plan.

---

## Required demonstrations

The list has to be complete enough to show all of these. Each one is load-bearing for at least one
post.

| # | Must show | Post |
|---|---|---|
| 1 | Top level is two siblings: today and `Future` — today hoisted out so it's first on screen. (Was three with `Notes` until 2026-09-15; Part 1's list still shows three.) | 2 |
| 2 | ~~The repeating two-bucket day~~ — removed 2026-09-11 with the HHG scaffolding | — |
| 3 | Contiguous near-term days, then increasing sparsity — a page exists only if something is written on it | 2 |
| 4 | **A day one full year out** (`8 Sept Wed 2027`) holding real content | 2, 3 |
| 5 | A trigger-date node whose children are the reference material (Thanksgiving) | 3 |
| 6 | Times typed into item text; no date columns enabled anywhere | 4, 10 |
| 7 | An item whose name carries the action context | 4 |
| 8 | Nested reference under an action — the Y drive with the workout set underneath | 4, 6 |
| 9 | A cross-tool link pasted by hand — to the public product roadmap list | 4 |
| 10 | One rare completed-but-kept item (strikethrough) next to its live successor | 5 |
| 11 | The three self-bouncing items | 6 |
| 12 | A `Priorities` node on a Sunday | 8 |
| 13 | A `Notes` section of undated reference material — since 2026-09-15 a separate public list, used by Part 3 (Grocery List) | 3 |
| 14 | **Sunday Sept 13 populated as the five-line day** — the Part 1 centerpiece | 1 |

### The one-year-out day

The hardest thing to convey is that a list can hold something twelve months away and give it back
on the right morning. `8 Sept Wed 2027` should carry two or three items that are genuinely annual
and obviously safe to publish, e.g.:

- Passport expiration check
- Annual domain and subscription renewals
- `Re-read the Art of Impossible notes — did the 6-8am block survive the year?`
- `Running My Day series — one year on. Did any of it change?`

The last one is worth including. It's self-referential in a way that's earned rather than cute: the
series about the list is itself scheduled inside the list, a year out, as a thing to come back to.

### Suggested future-day spacing

`9 · 10 · 11 · 13 Sept` (contiguous week) → `20 Sept` → `30 Sept` → `15 Oct` → `7 Nov` → `31 Dec` →
`15 Mar 2027` → `1 Aug 2027` → `8 Sept 2027`

Sparsity should be visible without scrolling far. The jump from daily to monthly to "next year"
happening within one screen is the whole point of demonstration #3.

---

## Top-of-list notes

**Superseded 2026-09-09 — kept for the record.** These notes were built, then removed entirely; the
context moved into the list title (see the status block at the top). Original intent:

Follow the pattern already used on the public product roadmap, which opens with numbered `Note`
items before the content. This is where the list explains itself to a stranger:

- **Note 1:** This is a simplified, public version of the list I run my day from. The real one has
  the same shape and a lot more private detail in it.
- **Note 2:** This list changes as the series goes on. Each post says what changed and why.
- **Note 3:** Link to the series index.
- **Note 4:** You can expand and collapse anything here. Only I can edit it.

Note 4 matters more than it looks — a reader who doesn't realize they can expand nodes will see a
flat outline and miss the entire idea.

---

## Column settings

**All four columns off** — complete, start date, due date, notes. This is not an oversight to
explain away; it's the argument of Part 10, visible in every screenshot from Part 1 onward. The
tool offers four columns and the person who built it uses none of them.

The one exception is the single strikethrough item required by demonstration #10, which shows
completion state without the checkbox column being displayed.

---

## The per-post snapshot protocol

**Adopted 2026-09-10, replacing the living-list protocol.** Each part gets its own public list,
frozen at the state that part describes. Copies are free, so there is no reason to let one list
drift and then explain the drift.

Why this is better than a single advancing list: every screenshot matches its list permanently,
and *change* becomes verifiable across two URLs instead of asserted about one. Part 4 links to its
own list (the day is gone) and to Part 1's (the day is still there); the reader compares them.

**Rules:**

1. **One list per part.** Duplicate the previous part's list, make the changes that part
   describes, make it public, and link it from that post only.
2. **Title carries the part number:** `Dailys, Part N (A simplified, public version of the list I
   use to run my day)`. The part number is how a reader knows which snapshot they're on.
3. **Never edit a published part's list.** Once its post is live, that list is a record. If
   something is wrong with it, fix it in the next part's copy and say so in that post.
4. **Redact on every copy.** Each new list inherits the previous one, but each new part may add
   items; run the verification searches on every copy before making it public.
5. **Recordings happen on throwaway duplicates**, never on a part's public list. No undo dance.
6. **Link earlier parts' lists when the comparison is the point**, not by default.
7. Keep a capture of each part's list in the private directory at publish time, alongside the raw
   material, in case a list is ever accidentally changed.

**Superseded (2026-09-09 living-list protocol, for the record):** one list that advanced with the
series; each post said what changed; screenshots were dated records; never retro-edit. All of that
is unnecessary under per-post snapshots.

---

## Open gap: Part 1 needs a calendar image

Part 1 is a side-by-side — a dozen overlapping Google Calendar blocks against five lines in Dailys.
**The demo list cannot supply the calendar half.** The real `google-calendar-sept-13.png` shows two
named people, four real games at named venues, a birthday party, and a church.

The names decision settles this. The real calendar screenshot carries two full names *and two
profile photos* in its column headers, plus four games at named venues, a named church, and a
child's birthday party — that is not a blur job, it's most of the image.

**Build a throwaway Google Calendar.** Same density and overlap, substitute names matching the demo
list, generic venues, then screenshot it. It's the only option that produces a publishable image
without arguing from something the reader can tell has been scrubbed — and the point of the image is
that the density is *real*, so it can't look staged.

Prerequisite for Part 1 specifically, not for the series. Parts 2 onward need only the demo list.
