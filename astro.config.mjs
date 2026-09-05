// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Fully static build to dist/. Cloudflare Pages just serves the directory,
  // so no adapter is needed.
  output: 'static',

  // Used for canonical URLs, Open Graph tags, the RSS feed and the sitemap.
  // Temporary Pages subdomain — see TODO.md for the real domain switch.
  site: 'https://vital-signs.pages.dev',

  integrations: [mdx(), sitemap()],
});
