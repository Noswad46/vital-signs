// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Fully static build to dist/. Cloudflare Pages just serves the directory,
  // so no adapter is needed.
  output: 'static',

  // TODO(euan): set this to the real domain before launch. It is used for
  // canonical URLs and absolute links in feeds.
  site: 'https://vitalsigns.pages.dev',

  integrations: [mdx()],
});
