# Super Easy Timer — site voice profile

This file defines the writing voice for everything in this repo: blog posts, landing pages, homepage copy, meta descriptions, and App Store adjacent copy. It is derived from the shipped blog posts in `src/content/blog/`, the homepage, and the 2.0.2 App Store description. It overrides any personal or global voice guide. Do not use Paul's X/YouTube/email voice here.

Project structure, design system, and content roadmap live in `README.md`.

## The voice in one line

A calm, useful peer explaining how a simple tool solves a real moment. Product voice, not personal brand voice.

## Core rules

1. **Short declarative sentences.** One idea per sentence. "No fiddling. Just type."
2. **No contractions.** Write "does not," "cannot," "it is," "you are." Never "doesn't," "can't," "it's."
3. **Em dashes are allowed** when they read naturally. Colons and periods are still the default rhythm.
4. **No hype words.** Never: amazing, powerful, seamless, beautiful, stunning, revolutionary, game-changing, effortless, supercharge. The strongest allowed claim is a plain fact: "Most always on top tricks stop at full screen. This one does not."
5. **Second person, present tense, action verbs.** "Type your talk length." "Drag the timer to any corner." "Glance up to check it."
6. **Show literal input in quotes.** The signature move: "25 min," "5pm," "2h 30m," "pomodoro." Real typed examples beat descriptions of typing.
7. **Sentence case everywhere.** Titles, headings, buttons. "Pin the timer above your windows," not "Pin The Timer Above Your Windows."
8. **First person only in two places:** the "Why I made this" homepage section and release-note sign-offs ("Let me know what works or does not work — Paul Solt"). Blog posts stay in product voice.

## Sentence rhythm

Open with the reader's situation or a contrast, then the fix:

> "A timer in a normal window disappears the moment you switch apps. Super Easy Timer stays on top."

> "Most timers make you spin a dial or tap a keypad. Super Easy Timer lets you type what you mean and press Return."

> "Hitting zero is useful. Knowing how far past zero you went is even more useful."

Pattern: short punch (3–8 words) → one supporting sentence with a specific → the action or result.

## Vocabulary

**House terms (use these exact words):**
- "stays visible," "stays on top," "keep the countdown in view"
- "pin," "float," "glance"
- "full screen apps" (not "fullscreen applications")
- "count up after zero," "always on top," "Mini Mode," "menu bar timer"
- Feature names as shipped: Pomodoro, Tabata, Stopwatch, Clock, Liquid Glass, frosted, transparent
- "Type, press Return, and the timer starts"
- Closing benefit language: "make time visible," "the difference between guessing and knowing"

**Reader scenarios (ground copy in these, never in abstractions):**
presentations (Keynote, PowerPoint, Zoom), meetings, talks, classrooms, exams, quizzes, workouts, Tabata rounds, focus sessions, cooking, games, everyday countdowns.

**Negative space (things the product proudly does not have):**
"No ads. No accounts. No clutter." "No screens to dig through." "No window to manage." Use this rhythm sparingly, once per piece at most.

## Blog post conventions

Frontmatter (schema in `src/content.config.ts`):

```yaml
title: sentence case, contains the target keyword naturally
description: 1–2 sentences; often ends with "Here is how ..."
publishDate: YYYY-MM-DD
keyword: the single target query
cluster: one of the clusters in README.md
heroImage/ogImage: /media/screenshots-clean/*.jpg
draft: false
```

Body structure:

1. **Opening (2–3 sentences, no heading):** the reader's problem or a contrast, then the one-line answer.
2. **2–4 H2 sections,** each a plain statement or imperative ("See your overtime," "Control it from the menu"). Each section is 1–3 short paragraphs or a tight parallel list.
3. **Numbered steps** only when the post answers a "how to" query. Keep to 4 steps or fewer.
4. **Bold lead-in lists** for option comparisons: "**Full screen:** the timer takes the whole display."
5. **Optional link to the free web timer** (`/timer`) as a try-first, in a blockquote.
6. **Quiet close:** one short paragraph restating the benefit. No hard sell. The layout appends the download CTA automatically.

Length: 150–500 words. Feature explainers run short (menu-bar post is ~150 words). Query-intent "how to" posts run longer (Keynote post is ~450 words). Do not pad.

## What this voice never does

- Rhetorical questions as openers ("Ever lost track of time?")
- Marketing transitions ("But that's not all," "Best of all")
- Talking about the reader in third person ("users can...")
- Exclamation points
- Emoji anywhere on the site
- Superlatives without a mechanism ("the best timer for Mac")
- Long windups. If the first sentence could be deleted without losing meaning, delete it.

## Anchor passages

Calibrate against these before writing:

> "When you want the time out of the way but still visible, put it in the menu bar. Super Easy Timer keeps the countdown at the top of your screen, next to the clock."

> "You rehearsed the talk. You know the slides. Then you start presenting and the one thing you cannot see is the clock."

> "Super Easy Timer is built for people who want a clear Mac timer, not a complicated productivity system. No ads. No accounts. No clutter."

> "Turn on count up and the timer keeps going after it reaches zero. Instead of stopping, it shows how long ago the time ran out."
