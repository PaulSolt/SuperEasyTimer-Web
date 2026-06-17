# Super Easy Timer — marketing site

Static marketing site for **Super Easy Timer**, a Mac (and soon Windows) menu-bar / floating timer app that stays visible on top of every app, even presentations.

Built with [Astro](https://astro.build) (static output), deployed to GitHub Pages at **supereasytimer.com**.

The site has three jobs, in priority order:

1. Drive app downloads (Mac App Store now, Windows soon).
2. Rank in Google for high-intent timer searches.
3. Host a free interactive web timer that doubles as an SEO asset and a demo.

---

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
```

Other scripts:

```bash
npm run build    # build static site to ./dist
npm run preview  # preview the production build locally
```

Requires Node 18.20.8+, 20.3+, or 22+ (CI uses Node 22).

---

## Project structure

```
public/
  CNAME              custom domain for GitHub Pages (supereasytimer.com)
  robots.txt         points crawlers to the sitemap
  icon.png           App Store icon (also favicon-16/32, apple-touch-icon)
  media/             App Preview video + App Store screenshots used on the homepage
src/
  config/site.ts     central config: URLs, App Store + TestFlight links, min macOS, rating (most TODOs live here)
  styles/global.css  design tokens + base styles (the design system)
  components/
    BaseHead.astro   SEO meta, Open Graph, fonts
    Header.astro     sticky nav (CTA links straight to the Mac App Store)
    Footer.astro     footer (no email signup)
    Timer.astro      the interactive web timer island (static markup + vanilla JS)
    FeatureCard.astro (used on /presentation-timer)
    DownloadCTA.astro reusable download call-to-action block
  layouts/
    BaseLayout.astro page shell
    BlogPost.astro   blog post template (ends with a DownloadCTA)
  content.config.ts  blog content collection schema
  content/blog/      markdown/MDX posts (committed by Paul's own pipeline)
  pages/
    index.astro            long-form sales page (hero + web timer demo + App Preview video + 8 screenshot feature sections + download)
    presentation-timer.astro  keyword landing: presentation timer for Keynote & PowerPoint
    timer.astro           free standalone web timer tool
    download.astro        Mac + Windows download hub
    blog/index.astro      blog index
    blog/[...slug].astro  blog post route
    404.astro
.github/workflows/deploy.yml  GitHub Pages deploy
```

---

## Design system

Tokens live in `src/styles/global.css` as CSS custom properties. Highlights:

- **Super Easy Blue** primary: `--blue` (`#0A84FF`, **TODO: swap for the app's exact blue**).
- Dark-first: near-black background `--bg` (`#1C1C1E`), lifted cards `--bg-elevated` (`#2C2C2E`).
- Timer digits: cool near-white `--digits` (`#F0F8FF`).
- Signature element: bright blue timer pill with a soft glow (`--glow-blue`) on a dark background.
- Radii: pill `24px`, cards `18px`.

**Fonts (OFL only — do NOT use SF Pro on the web):**

- Body / UI / timer digits: **Inter** (digits use `font-variant-numeric: tabular-nums`).
- Display headings: **DM Sans** bold.

Fonts load from Google Fonts in `BaseHead.astro`.

### Open design decisions

- **Timer digit font.** Default is Inter tabular. To match the app's rounded-digit feel, set `--font-digits` to an OFL rounded face (e.g. `M PLUS Rounded 1c`) and add it to the Google Fonts link in `BaseHead.astro`.
- **Heading font.** Chose DM Sans over Anton for a calmer, macOS-native feel. Swap in `--font-display` if you want the heavier Anton hero line.

---

## The interactive web timer

`src/components/Timer.astro` is the centerpiece island, reused on `/` (hero demo) and `/timer` (standalone tool).

- Static markup (pill, input, controls) ships in the HTML for SEO; only the timer logic hydrates.
- Natural-language input: "5 minutes", "25 m", "5", "1:30", "90s". Press Return to start.
- Click the pill to start/pause. Reset and Full screen controls (Fullscreen API).
- On finish: visual flash + a gentle tone (audio unlocks on first click, per autoplay rules).
- Multiple instances per page are supported.

Props: `initialMinutes` (default 5), `showFullscreen` (default true), `size` (`'hero'` | `'full'`).

---

## Deploy (GitHub Pages + custom domain)

**Status: live at https://supereasytimer.com** (GitHub Pages, custom domain, HTTPS enforced). DNS is managed at Hover.

Deployment runs via `.github/workflows/deploy.yml` on every push to `main`.

One-time setup (already done, kept here for reference):

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The `public/CNAME` file already sets the custom domain to `supereasytimer.com`.
4. At your DNS provider, point the domain at GitHub Pages:
   - `A` records for the apex `supereasytimer.com` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<your-username>.github.io`
5. In **Settings → Pages**, confirm the custom domain and enable **Enforce HTTPS**.

If the production URL ever changes, update `site` in `astro.config.mjs` and `src/config/site.ts`.

---

## Where to drop assets (TODO checklist)

Most asset TODOs route through `src/config/site.ts`. Full list:

| TODO | Where |
| --- | --- |
| Exact Super Easy Blue hex | `--blue` in `src/styles/global.css` |
| App icon / logo | Done: app's App Store icon in `public/icon.png` (+ favicons, apple-touch-icon). Replace to update. |
| App screenshots | Done: 8 App Store screenshots in `public/media/screenshots/`, used in the homepage feature sections. |
| App Preview video | Done: `public/media/app-preview.mp4`, used in the homepage video section. |
| Default OG image (1200×630) | TODO: add `public/og-default.png` and set it as the default in `BaseHead.astro` (currently falls back to `icon.png`). |
| Per-post OG images | `ogImage` field in blog frontmatter |
| Mac App Store URL | `site.macAppStoreUrl` (set: `id1353137878`) |
| TestFlight beta URL | `site.testFlightUrl` (set; shown on `/download`) |
| Windows download link | `site.windowsDownloadUrl` (currently `null` → renders "coming soon") |
| Rating | `site.rating` (set: 4.7) |
| Minimum macOS version | `site.minMacOS` (set: 15) |

Search the codebase for `TODO` to find every placeholder.

---

## Content roadmap

Blog posts are markdown/MDX in `src/content/blog/`, committed by Paul's own pipeline (no third-party auto-publishing). Schema is in `src/content.config.ts`: `title`, `description`, `slug` (optional), `publishDate`, `keyword`, `cluster`, `ogImage` (optional), `draft`.

Every post ends with a download CTA (built into `BlogPost.astro`).

**Example post shipped:** "How to put a presentation timer on top of Keynote" (target: `presentation timer for keynote`).

### Topic clusters + target queries

- **Presentation timers:** presentation timer for keynote ✅, timer on top of full screen mac, powerpoint countdown timer, speech timer for presentations.
- **Always-on-top utilities:** always on top timer mac, floating timer mac, menu bar timer mac.
- **Focus / productivity:** pomodoro timer mac, focus timer for deep work, study timer.
- **Meetings:** meeting timer, standup timer, time-box meeting timer.
- **Windows (post-launch):** always on top timer windows, presentation timer windows.

### Free tool pages to add (interactive islands, high-intent)

Each is a working tool + a download CTA, reusing the `Timer.astro` island (or variants):

- `/online-timer`
- `/pomodoro-timer`
- `/interval-timer`
- `/stopwatch`

### Use-case landing pages to add later

presenters and teachers, focus / deep work, meetings and standups, classrooms, streamers and gamers, workouts and cooking.

---

## Copy voice rules

Applied to all marketing and blog copy:

- No hype words. Honest, grounded, specific.
- No em dashes in body copy. Use colons or periods.
- Short declarative sentences. Open with action verbs.
- Name specific things: features, platforms, real use cases.
- Peer-to-peer, not marketer-to-lead.
