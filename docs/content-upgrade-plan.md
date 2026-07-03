# Blog content upgrade plan

Diagnosis and work plan for tuning up the 36 published posts. Written 2026-07-03 after reviewing the classroom post against the voice guide and the Keynote post (the benchmark).

## Diagnosis: why the posts read rough

The Keynote post (471 words) is the only post written to the full standard. The other 35 average ~180 words and share the same template: hook line, three or four H2 sections that re-skin a feature, one-line close. Five specific problems, all visible in `classroom-timer.md`:

1. **All punch, no support.** The voice pattern is short punch → supporting specific → action. The rough posts keep the punch and drop the middle. "Useful for you, motivating for them." lands as glib because nothing around it earns it.
2. **Slogan closes.** "Just the time, large enough for everyone to own it" — "own it" means nothing. The guide calls for a quiet close that restates the benefit in plain words.
3. **Features with no antecedent.** "use the flash at zero" assumes the reader knows there is a flash. Every feature mention needs one clause saying what it does, then the link.
4. **The post does not know the room.** The Keynote post names the exact failure (Keynote takes over, the menu bar disappears, the phone timer is face-down in a bag) and the bad alternatives. The classroom post has no equivalent: nothing about getting the timer onto the projector or wall TV, mirroring vs. extending the display, sound in a quiet room vs. a loud one. Those are the mechanical questions a teacher actually has.
5. **Missing the guide's own conventions.** Query-intent posts should have numbered steps and the free web timer blockquote. Only 2 of 36 posts link `/timer`. Most query posts have no steps.

Contractions are not the problem; the posts follow the no-contraction rule. The problem is thinness dressed as punchiness.

## The fix pattern (per post)

Model every upgrade on `presentation-timer-for-keynote.md`:

1. **Open with the reader's failure moment**, concrete and scenario-specific. Not "timers are useful in classrooms" but the moment the room asks "how much time is left?"
2. **One "why normal options fail" beat** where the query warrants it (bad options list, 2–3 items).
3. **Numbered steps (4 or fewer)** for the mechanical setup, including the display step: full screen on the projector, mirror or extend, where the Mac sits.
4. **Each H2 grounded in one real specific** from that scenario. One per section is enough.
5. **Introduce every feature by what it does**, then link its explainer post.
6. **Add the `/timer` try-first blockquote** to every query-intent post.
7. **Rewrite the close** as one plain-benefit sentence. Kill anything that reads like a slogan.

Target lengths stay per the voice guide: query posts 350–500 words, feature explainers stay short.

## Post tiers

**Tier 1 — expand (query-intent, competitive keywords).** Full fix pattern, 350–500 words:
classroom-timer, exam-timer, quiz-timer, debate-timer, meeting-timer, pomodoro-timer-mac, always-on-top-timer-mac, powerpoint-countdown-timer, speaker-timer, conference-timer, toastmasters-timer, zoom-timer-shared-screen, study-timer-mac, tabata-timer-mac, workout-timer-mac, visual-timer-for-kids, visual-timer-time-blindness, big-timer-mac, floating-timer-mac, full-screen-countdown-timer-mac, egg-timer-mac, game-timer-overlay, interval-timer-mac, stopwatch-timer-mac.

**Tier 2 — polish only (feature explainers, meant to be short).** Fix rough lines, closes, and missing antecedents; do not pad:
add-time-without-restarting, repeat-timer-with-delay, count-up-after-zero, resize-timer-mini-mode, type-to-start-timer, menu-bar-timer-mac, timer-themes-transparent-frosted-liquid-glass, timer-keyboard-shortcuts-mac, clock-on-screen-mac, countdown-to-a-time, elapsed-time-timer.

**Benchmark — leave alone:** presentation-timer-for-keynote.

## Order of work

Ship one cluster at a time, same cadence as the image upgrades, so a cluster gets its content fix and its hero image together:

1. **Classroom** (flagged first): classroom-timer, exam-timer, quiz-timer, debate-timer.
2. **Presentation:** speaker-timer, powerpoint-countdown-timer, conference-timer, toastmasters-timer, big-timer-mac.
3. **Focus:** pomodoro-timer-mac, study-timer-mac, stopwatch-timer-mac, elapsed-time-timer, interval-timer-mac, timer-keyboard-shortcuts-mac, visual-timer-time-blindness.
4. **Meetings:** meeting-timer, zoom-timer-shared-screen, count-up-after-zero.
5. **Workouts:** tabata-timer-mac, workout-timer-mac.
6. **Kids:** visual-timer-for-kids.
7. **Everyday + utilities:** the rest, mostly Tier 2 polish.

## Done (2026-07-03)

- **Per-cluster download CTAs.** The blog CTA is no longer one generic line. `BlogPost.astro` holds a copy map keyed by `cluster`; every post gets a heading and body written for its use case. The "This is the web version" line now appears only on `/timer`, the one page that has the web timer. "Windows soon" appears once (the small line under the badge), never in the body.
- **App Store badge as the CTA button.** `DownloadCTA` uses the official badge (`StoreBadge`) instead of a text button.
- **Blog typography.** Body and list text up to 19px with more line height; post H2/H3 sizes capped so headings stop overpowering short sections.
- **Classroom post tune-up** in Paul's dictated voice (quiz timer specific, "quizzes and tests" leading the transitions list, grounded count-up close, slogan close fixed).

## "Show me how" sections (in-post mini tutorials with demo videos)

Each query post gets an H2 ("Show me how") with up to three tasks the reader actually wants to do. Each task: a bold imperative lead-in, one or two sentences, and a short demo clip. The clips are the sell: the still image paints the picture, the demo shows it working.

**Placeholder convention (shipped invisible, filled later).** The drafted section lives inside an HTML comment in the post markdown, so it is in the repo and in the rendered page source but invisible to readers. The comment starts with `show-me-how` and each clip slot is marked `[demo-video: <asset-id>]`. When an asset exists at `public/media/demos/<asset-id>.mp4`, a future task uncomments the section and swaps each marker for the embed:

```html
<video src="/media/demos/<asset-id>.mp4" autoplay loop muted playsinline width="1280" height="720"></video>
```

Do not use double hyphens inside the comments (invalid in HTML comments).

**Rule:** every demo must be grounded in how the shipped app works. Verify the exact interaction in 2.0.2 before recording or writing the steps.

## Master shot list (record once, reuse everywhere)

Each clip: 5–10 seconds, looped, muted, no cursor wander, recorded at 2x on the dark desktop. Paul records these, or an agent drives the app and captures. File name is the asset ID.

| Asset ID | What to record | Used by |
| --- | --- | --- |
| `type-to-start` | Type "5 min", press Return, timer starts | classroom, debate, type-to-start, ease-of-use posts |
| `full-screen` | Timer goes full screen, digits fill the display | classroom, exam, quiz, debate, big-timer, full-screen posts |
| `second-display` | Drag the timer to the projector display, go full screen (needs two displays) | classroom, projector article |
| `add-time` | While running, type "+10m", countdown adjusts in place | exam, quiz, add-time posts |
| `count-up-after-zero` | Timer reaches 0:00 and keeps counting up | debate, meeting, speaker, count-up posts |
| `repeat-with-delay` | Timer hits zero, waits the delay, restarts | classroom, quiz, repeat posts |
| `flash-at-zero` | The screen flash when time expires | exam, quiz, classroom posts |
| `pause-resume` | Click the pill to pause, click to resume | debate (prep bank), stopwatch posts |
| `countdown-to-time` | Type "10:30am", timer counts down to the clock time | exam, countdown-to-a-time posts |
| `pin-over-fullscreen` | Keynote enters slideshow, timer stays visible on top | Keynote, PowerPoint, always-on-top, zoom posts |
| `menu-bar` | The countdown in the menu bar next to the clock | menu-bar post |
| `mini-mode` | Resize the timer down to the mini pill | mini-mode post |
| `themes` | Cycle transparent, frosted, Liquid Glass | themes post |
| `pomodoro` | Type "pomodoro", session starts with the FOCUS label | pomodoro, study posts |
| `tabata` | Customize Tabata sheet, then the first WORK round | tabata, workout, classroom (student presentation slots) posts |
| `stopwatch` | Start the stopwatch, let it run | stopwatch, elapsed-time posts |
| `clock` | Type "clock", the current time takes the display | clock-on-screen post |

Format decision: looping MP4 (H.264, muted, autoplay, playsinline) over GIF. Smaller files, better color.

**Running count (as of 2026-07-03):** every post now carries a hidden "Show me how" draft. 86 embed slots across 37 posts, filled by only **17 unique videos**. One video fills every slot that names its ID; nothing is post-specific.

**Core 10 (78 of 86 slots, record these first):** `type-to-start` (15 slots), `count-up-after-zero` (11), `repeat-with-delay` (10), `pin-over-fullscreen` (9), `flash-at-zero` (7), `add-time` (7), `full-screen` (6), `mini-mode` (5), `countdown-to-time` (5), `tabata` (3).

**Remaining 7 (8 slots, one post each, can wait):** `stopwatch`, `themes`, `second-display`, `pomodoro`, `pause-resume`, `menu-bar`, `clock`.

The list is capped: reuse before inventing, and any new shot must earn a row in this table. Future one-off videos slot into the same `[demo-video: id]` convention without touching the system.

### Consistency strategy (UI will change between updates)

- **Shot recipes, not improvisation.** Each row above is the recipe: exact typed input, blue theme, same window size, same dark wallpaper, Do Not Disturb on. Anyone (Paul or an agent) re-records an identical clip from the recipe.
- **Capture the timer window region, not the desktop.** Less UI surface in frame means fewer things an app or macOS update can invalidate.
- **One recording session per app version.** Record all needed clips in one sitting on one version. Track "recorded with" per asset (add a column here when recording starts). When an update changes the UI, re-record only the rows whose surface changed; the filenames stay the same so posts update without edits.
- **Ship the core 10 now on 2.0.2.** At 5 to 10 seconds each, that is one short session. Do not wait for a UI freeze that never comes; the region-capture and recipe rules make re-recording cheap.

## Final asset lists

- **Videos:** the master shot list above — 16 total, 8 in the record-first cut. Paul records them, or an agent drives the app and captures.
- **Images:** the 7 cluster hero scenes from `docs/image-style-guide.md` (presentation, classroom, focus, meetings, workouts, kids, everyday), each exported as hero 1600×900 + OG 1200×630.
- **Existing stills stay:** the cleaned App Store screenshots remain valid inline images even after the cluster heroes ship.

## Content angle: Tabata beyond workouts

Tabata is a structured rotation timer, not just a gym feature. Classroom use: student presentations with work = 5 minutes to present, rest = 3 minutes for questions, rounds = number of students, a hard stop each slot, pause and resume between students. Written into the classroom post. Reuse the angle for meetings (lightning talks, standups) when that cluster is upgraded.

## Future app feature note (not website copy)

Paul is considering more structured sequences: named segments that advance automatically with pause and resume, so a teacher can keep a class moving without touching the Mac. Do not write website copy claiming this until it ships; Tabata is the closest shipped behavior and is what posts should reference today.

## Process: the blog-audit skill

The audit/grade/rewrite loop is codified in `.claude/skills/blog-audit/SKILL.md`. Invoke it per post or per cluster; it scores a 10-dimension rubric out of 20, fixes what scored low, and re-audits up to three passes. Paul-dictated lines are canonical and never rewritten.

## New article: put the timer on the projector or wall TV

The mechanical question every classroom and conference searcher has, and the natural cross-link target for those clusters. Grounded in how the app works: mirror your display, or move the timer to the other display and go full screen. Draft after verifying the exact steps in the shipped app (System Settings display arrangement, where the full screen button lands).

## Pricing caution

The app will not stay fully free: a subscription is planned, with at least one timer per day free. "Get the free Mac app" is accurate today and stays until pricing ships. When it does, audit every "free" in CTAs, blog copy, and the homepage in one pass. Do not pre-hedge the copy now.

## Cross-cutting fixes (one pass, all posts)

- Add the `/timer` blockquote to every Tier 1 post.
- Standardize how the flash-at-zero behavior is named the first time it appears in a post.
- Replace every slogan close with a plain-benefit close.
- Verify each feature claim against the shipped 2.0.2 app before strengthening it (placement modes, repeat delay, add-time syntax, alarm options).

## Acceptance checklist (per upgraded post)

- [ ] The opening names a moment the target reader recognizes.
- [ ] A stranger could set the timer up from the steps alone, including the display.
- [ ] Every feature mention says what the feature does before linking it.
- [ ] The `/timer` blockquote is present (Tier 1).
- [ ] The close is one sentence, concrete, no slogans.
- [ ] Reads aloud without a glib fragment. If a sentence sounds like ad copy, cut or support it.
- [ ] No contractions, no hype words, sentence case (unchanged rules).
