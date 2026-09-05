# TODO

## Before launch

- [ ] **Replace the placeholder domain.** `site` in `astro.config.mjs` is
      currently `https://vital-signs.pages.dev`. The real domain is expected
      later in the week of 2026-09-04. This value is baked into canonical URLs,
      Open Graph tags, `rss.xml` and `sitemap-*.xml`, so all four are wrong
      until it is changed. Update the `site` value, rebuild, and confirm the
      generated `dist/rss.xml` and `dist/sitemap-0.xml` carry the new host.
- [ ] Delete the placeholder post `src/content/posts/2026-09-hello.md` once a
      real post exists.

