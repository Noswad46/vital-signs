# TODO

## Before launch

- [ ] **Replace the placeholder domain.** `site` in `astro.config.mjs` is
      currently `https://vital-signs.euandawson1.workers.dev`. The real domain is expected
      later in the week of 2026-09-04. This value is baked into canonical URLs,
      Open Graph tags, `rss.xml` and `sitemap-*.xml`, so all four are wrong
      until it is changed. Update the `site` value, rebuild, and confirm the
      generated `dist/rss.xml` and `dist/sitemap-0.xml` carry the new host.
- [ ] Replace or delete the five placeholder posts in `src/content/posts/`
      (`essay-one`, `essay-two`, `short-post-one`, `short-post-two`,
      `short-post-three`). They are published, not drafts, so they are live on
      the site.

