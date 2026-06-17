/**
 * Central site configuration. Drop real values here as they arrive.
 * Most TODO assets from the brief funnel through this file.
 */
export const site = {
  name: 'Super Easy Timer',
  // One-line promise. Kept within the 2.0 product-truth guardrails:
  // "stays visible over full screen apps and presentations".
  tagline: 'A countdown timer that stays visible over full screen apps and presentations.',
  description:
    "Super Easy Timer is a Mac countdown timer you start by typing \"5 min\". Show it full screen, float it on top, or keep it in the menu bar. It stays visible over full screen apps and presentations like Keynote and PowerPoint. Free.",
  url: 'https://supereasytimer.com',

  // Download links.
  // Provided in the brief.
  macAppStoreUrl: 'https://apps.apple.com/app/id1353137878',
  // TestFlight public beta. Available until access is removed.
  testFlightUrl: 'https://testflight.apple.com/join/1jm4arcH',
  // TODO: Windows download link (after launch). Leave null to render "coming soon".
  windowsDownloadUrl: null as string | null,

  // Minimum supported macOS version (new releases target this and up).
  minMacOS: '15',

  // Social proof (from the App Store: "Loved by Mac users. 4.7 stars").
  rating: '4.7',

  // Real Mac App Store reviews (verbatim excerpts), selected from the full set.
  // Refresh with Paul's CLI:
  //   app-store-reviews --app-id 1353137878 --sort both --pages 10 --output reviews.csv
  reviews: [
    {
      quote:
        'I used it as a timer for a forum with political candidates and it made a huge difference. The numbers are clear, the interface intuitive, and it absolutely delivered.',
      author: 'dmgilbert',
    },
    {
      quote:
        "The ability to enter time works better than any other timer I've tried (10, 10m, 2pm, add 1 hour, 2m). It's nice to have the options for a floating window or menu bar icon.",
      author: 'axs221',
    },
    {
      quote:
        'I love how easy it is to use, how simple it looks, how effortlessly it starts, and how effective it is at focusing.',
      author: 'Wally 293949',
    },
    {
      quote:
        'I absolutely love these bespoke pieces of software that do one thing extremely well. I enjoy having it right at the top of my screen and it works beautifully.',
      author: 'michaelwall-sfm',
    },
    {
      quote: 'Having the ability to input times in various formats and it just works is so nice.',
      author: 'Compcaddy',
    },
    {
      quote:
        "I'm using it daily to keep my schedule. It is simple and just works. You will get more stuff done in less time!",
      author: 'Harry Stuckler',
    },
  ],

  // Contact / support.
  contactEmail: 'paul@supereasyapps.com',
};

export type SiteConfig = typeof site;
