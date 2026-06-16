/**
 * Central site configuration. Drop real values here as they arrive.
 * Most TODO assets from the brief funnel through this file.
 */
export const site = {
  name: 'Super Easy Timer',
  // One-line promise (section 4 of the brief).
  tagline: 'A timer that stays visible on top of every app. Even presentations.',
  description:
    'Super Easy Timer stays visible over full-screen apps and presentations, including Keynote and PowerPoint. Free on Mac. Windows soon.',
  url: 'https://supereasytimer.com',

  // Download links.
  // Provided in the brief.
  macAppStoreUrl: 'https://apps.apple.com/app/id1353137878',
  // TODO: Windows download link (after launch). Leave null to render "coming soon".
  windowsDownloadUrl: null as string | null,

  // Email capture.
  // TODO: Kit.com form ID / embed. See Footer.astro and DownloadCTA.astro.
  kitFormId: null as string | null,

  // Social proof.
  // TODO: real rating + review count once available.
  rating: '4.8',
  reviewCount: null as string | null,

  // Social / contact (optional, fill in as needed).
  authorEmail: 'PaulSolt@gmail.com',
};

export type SiteConfig = typeof site;
