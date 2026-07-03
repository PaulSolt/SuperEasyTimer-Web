---
name: blog-audit
description: Audit, grade, and upgrade Super Easy Timer blog posts in a scored loop until quality holds. Use when asked to audit a post, tune up blog content, grade an article, or upgrade a cluster. Takes a post slug, a cluster name, or "all".
---

# Blog post audit and upgrade loop

Codifies the content tune-up process from `docs/content-upgrade-plan.md`. Run per post or per cluster. Always read `CLAUDE.md` (site voice) and `docs/content-upgrade-plan.md` (tiers, fix pattern, master shot list) before grading.

## The loop

For each post, run up to three passes:

1. **Audit:** score the rubric below. Record the score per dimension.
2. **Fix:** rewrite only what the rubric flagged. Restructure if the score demands it. Do not pad, do not churn sentences that already score 2.
3. **Re-audit:** score again. Stop at grade A, or after the third pass. Report the score trail (for example 13 → 17 → 19).

Never rewrite lines Paul dictated or approved in review; his phrasing is canonical even when a rule disagrees.

## Rubric (score each 0–2; max 20)

1. **Opening.** Names a moment the target reader recognizes, concrete, no windup. 0 if it opens with an abstraction or a rhetorical question.
2. **Mechanical how.** A stranger could start the timer from this post alone: literal typed input in quotes, numbered steps (4 or fewer) when the query is a how-to.
3. **Scenario knowledge.** Every H2 contains at least one specific from the reader's world (a real duration, a real classroom/stage/meeting detail), not a re-skinned feature line.
4. **Feature antecedents.** Every feature says what it does before or at the link. "Use the flash at zero" fails unless the flash was introduced.
5. **Cross-links.** Two or more relevant internal links with natural anchors. Tier 1 posts also carry the `/timer` try-first blockquote.
6. **No slop-isms.** No glib fragments ("Useful for you, motivating for them"), no snappy dichotomies, no hype words, no contractions, no exclamation points, no marketing transitions.
7. **Close.** One plain-benefit sentence. Slogans ("large enough for everyone to own it") score 0.
8. **Conventions.** Sentence case headings, frontmatter complete, factual `heroAlt`, hidden `show-me-how` comment present with asset IDs from the master shot list.
9. **Length in band.** Tier 1: 350–500 words. Tier 2 explainers: 100–250. Padding to hit a number scores 0.
10. **Grounded claims.** Every behavior claim matches the shipped app (see ground truth below). An unverifiable claim scores 0 until confirmed.

**Grades:** 18–20 = A (ship). 14–17 = B (one targeted pass). Below 14 = C (restructure with the fix pattern from the plan doc).

## Feature ground truth (2.0.2)

Only claim these behaviors. Anything else needs Paul's confirmation first.

- Type to start: durations ("5 min", "90s", "2h 30m", bare "10"), clock times ("5pm", "10:30am"), presets ("pomodoro").
- Adjust while running: "add 10 min", "+10m", "-1h"; no restart.
- Placement: full screen, pinned above all windows, menu bar, on top of full screen apps (passive overlay, does not steal focus).
- End of timer: alarm sounds (including none), flash at zero, count up after zero, repeat with a delay.
- Pause and resume by clicking the timer. Mini Mode resize.
- Modes: Pomodoro, Tabata (work/rest/rounds), Stopwatch, Clock.
- Themes: blue, black, cream, transparent, frosted, Liquid Glass.

## Asset discipline

- Demo slots use existing asset IDs from the master shot list in `docs/content-upgrade-plan.md`. Reuse before inventing.
- A new shot requires adding a row to that table in the same change. Keep the total list small; Paul records these.
- Demo placeholders stay inside HTML comments (`<!-- show-me-how ... -->`, no double hyphens inside) until the file exists at `public/media/demos/<asset-id>.mp4`.

## After a cluster

- `npm run build` must pass; confirm hidden comments do not render.
- Update the plan doc: mark the cluster, note any shot list changes.
- Report per-post score trails and the remaining asset list. Nothing pushes without Paul's approval.
