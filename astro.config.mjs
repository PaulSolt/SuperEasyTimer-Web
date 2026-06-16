// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Custom domain. Update if the production URL changes.
  site: 'https://supereasytimer.com',
  // Custom domain serves from the root, so no base path is needed.
  output: 'static',
  integrations: [mdx(), sitemap()],
});
