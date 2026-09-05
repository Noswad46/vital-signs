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
  // Temporary workers.dev subdomain — see TODO.md for the custom domain switch.
  site: 'https://vital-signs.euandawson1.workers.dev',

  integrations: [mdx(), sitemap()],
});
