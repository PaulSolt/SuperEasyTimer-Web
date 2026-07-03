# Blog image generation style guide

Rules and structure for hero/OG images on supereasytimer.com, including AI-generated imagery (Higgsfield or any other tool). The goal is images that sell the use-case angle with structured design, not generic AI slop. When in doubt, a clean real screenshot beats a mediocre generated scene.

## The one rule that matters

**The timer UI is always real. The model never draws it.**

AI mangles digits and interfaces, and a fake timer on a page about a real timer reads as slop instantly. Screens inside generated scenes are generated blank (dark, powered-on glow) and the real app screenshot is perspective-mapped onto them in post. This is standard screen replacement, the same technique film uses.

## Two image styles

### Style A: story scenes (people using the app)

Photoreal scenes of a person using the timer in context. These tell the story: a presenter glancing at a confidence monitor while facing the audience, a teacher at the front of a class with the countdown on the TV, an athlete between rounds watching the wall display.

- **People are allowed, faces visible, photoreal.** Faces are also where AI images fall apart, so every image passes the rejection checklist below before it ships.
- The person is *using* the timer, not posing with it. Their attention connects them to the screen: a glance, a mid-action moment, a stance that implies the countdown matters.
- Screens in the scene are generated **blank** (dark panel, subtle glow) and the real UI is composited in afterward.

### Style B: product scenes (no people)

Clean, empty environments where the composited timer is the subject: a dim desk at night, an empty classroom before the exam, a kitchen counter. Calm "before it starts" tension. Use Style B when a cluster does not need a human to make its point, or as the fallback when Style A generations fail the checklist.

## Art direction (match the design system)

The site is dark-first with one signature accent. Both styles sit inside that system:

- **Palette:** near-black and charcoal environments (`#1C1C1E` territory), cool shadows, one warm or cool key light. The Super Easy Blue (`#0A84FF`) glow belongs to the timer: the composited screen should be the brightest, bluest thing in frame.
- **Lighting:** cinematic and dim. Stage light, projector beam, screen glow, evening desk. No blown-out daylight, no HDR crunch.
- **Camera:** photographic, shallow depth of field, consistent lens feel across the whole set. The blog index shows these side by side; they must read as one photographer's work.
- **Texture:** matte and physical. No glossy 3D-render sheen, no fantasy gradients, no illustration/cartoon styles.

## Spatial accuracy (check before the slop pass)

The camera must stand somewhere a real photographer could stand, and every screen must face whoever uses it. This is the first check because it killed the first presentation batch: a confidence monitor faces the speaker, so a shot from the audience that shows both the speaker's face and the monitor's screen is impossible. Reject any composition where:

- A screen's image is visible from a position that would show its back.
- The subject ignores a screen they would be using, or stares at one they could not see.
- The blank screen is too oblique, too small, or too blown out to carry a UI composite.

For the presentation cluster the accurate angle is from onstage: over the presenter's shoulder or from the wings, monitor at the stage edge facing back toward them.

## Rejection checklist (the slop pass)

Zoom in and check every candidate. Reject if any of these appear:

- **Model-drawn text or UI anywhere:** signs, posters, whiteboards, keyboard legends, menu bars, phone screens, clock faces. All readable content comes from the composited real screenshot.
- **Hand problems:** wrong finger counts, melted grips, hands merged with objects. Hands near keyboards/remotes get extra scrutiny.
- **Face problems:** asymmetric eyes, fused teeth, waxy skin, dead-eyed stares. The face must survive full-size viewing, not just thumbnail.
- **Fake Apple hardware tells:** mangled logos, wrong keyboards. Keep hardware angled or distant so details do not read.
- **Uncanny audiences:** crowds are hard. Keep audiences dark, out of focus, or silhouetted.
- **Style drift:** illustration, isometric 3D, watercolor, oversaturated "AI look."
- **Objects fused with people:** equipment, furniture, or props merged into a subject's silhouette (a batch-two candidate had a camera rig growing out of the presenter's shoulder). If it touches the silhouette, zoom in.
- **Edge slivers:** partial screens or signage at frame edges often carry faint model-drawn text. Croppable or patchable in the composite pass; reject only if it cannot be removed cleanly.
- Impossible furniture, melted objects, physics that does not hold.

A blown-out white screen where the composite goes is not a rejection on its own — the whole screen surface gets replaced. Dark-with-faint-glow is still the target because it keeps the scene's exposure honest.

## Structure: one image per cluster

Seven images cover all 25+ posts. Posts share their cluster's image until a post earns a unique one.

| Image | Style | Scene | Posts |
| --- | --- | --- | --- |
| `presentation` | A | Presenter on stage facing a dark audience, confidence monitor at their feet showing the countdown | speaker-timer, powerpoint-countdown-timer, conference-timer, toastmasters-timer, big-timer-mac, presentation-timer-for-keynote |
| `classroom` | A | Teacher at the front of a real classroom, countdown on the wall TV, students from behind | classroom-timer, exam-timer, quiz-timer, debate-timer |
| `focus` | A or B | Dim desk at night, timer small in the corner of an external display | pomodoro-timer-mac, study-timer-mac, stopwatch-timer-mac, elapsed-time-timer, interval-timer-mac, timer-keyboard-shortcuts-mac, visual-timer-time-blindness |
| `meetings` | A | Meeting room, countdown on the wall display, people mid-discussion | meeting-timer, zoom-timer-shared-screen, count-up-after-zero |
| `workouts` | A | Home/garage gym, athlete resting between rounds, timer large on a screen | tabata-timer-mac, workout-timer-mac |
| `kids` | A | Kitchen table or family desk, kid watching the big countdown, warmer light (still in palette) | visual-timer-for-kids |
| `everyday` | B | Kitchen counter at dusk, Mac showing the timer beside the stove | egg-timer-mac, game-timer-overlay, countdown-to-a-time, clock-on-screen-mac |

## File structure

Working files stay out of the public repo (the repo is public). Only final JPGs are committed.

```
image-gen/                     # GITIGNORED. First pass lives here; evaluate, then
                               # decide what (if anything) is worth backing up.
  timers/                      # fresh app screenshots per mode (PNG, 2x)
  scenes/<cluster>/            # raw generation candidates, keep the finalists
  composites/                  # working files for screen replacement
public/media/blog/             # committed, final output only
  cluster-<name>.jpg           # hero, 1600x900, under ~200 KB
  cluster-<name>-og.jpg        # OG crop, 1200x630
```

### Timer screenshots (real app, 2.0.2)

Source of truth: Dropbox `2 - Areas/Super Easy Timer/App Store/V2.0.2/Super Easy Timer 2.0.2/`. Working copies live in `image-gen/timers/` (gitignored); the seven composed App Store screens live in `image-gen/reference/` for style reference.

Inventory (as of 2026-07-03):

- `countdown-blue-large/medium/small.png` — blue pill at 05:00, three sizes
- `fullscreen-blue-2500.png` — full screen countdown at 25:00 (wall TV / confidence monitor inserts)
- `stopwatch-cream.png` — stopwatch at 00:09.138, cream theme
- `clock-black.png` — clock at 8:50 AM, black theme
- `tabata-dark-round.png` — 00:20 with "WORK · Round 1 of 8" label, dark theme
- `tabata-setup-dialog.png` — Customize Tabata sheet (work/rest/rounds)

Still missing: a raw Pomodoro capture (red pill with "FOCUS · Session 1" label). It can be cropped from `reference/appstore-screen-2.jpg` if a native capture is not handy.

## Prompt recipe

Reuse the style block verbatim for set consistency (use the tool's style-reference/seed features when available). Screens are always prompted blank.

```
[SCENE]: <one sentence: who, where, doing what; screens in scene are
dark powered-on panels with a faint glow, no content>
[STYLE]: photographic, cinematic, dim ambient light, single key light,
charcoal and near-black palette, matte surfaces, shallow depth of field,
no readable text or signage anywhere, screens blank
[FRAME]: 16:9, <camera position>, the blank screen surface clearly
visible and large enough for a UI composite
```

## Workflow

1. Capture the real timer screenshots (once per app release).
2. Generate scene candidates per cluster; run the rejection checklist; keep the finalists in `image-gen/scenes/<cluster>/`.
3. Screen-replace: perspective-map the real screenshot onto the blank screen, match the scene's light (add the soft blue spill the screen would cast).
4. Export hero 1600×900 and OG 1200×630 to `public/media/blog/`, compress to under ~200 KB.
5. Update each post's `heroImage`, `heroAlt`, `ogImage`. Alt text describes the scenario factually ("A presenter checks a countdown on a confidence monitor"), never "AI image of...".
6. Ship one cluster at a time so the set stays consistent.

## Acceptance checklist

- [ ] The only readable text/digits come from the real composited screenshot.
- [ ] Passes the slop pass at full size (faces, hands, hardware, crowds).
- [ ] Palette sits in the site's dark system; the timer screen is the brightest element.
- [ ] Same lighting/lens feel as the rest of the set.
- [ ] Reads at thumbnail size on the blog index.
- [ ] The angle is obvious in one sentence: "shows [who] using the timer [where]."
- [ ] No OG text baked in: scene only.
