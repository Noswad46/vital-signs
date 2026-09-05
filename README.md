# Vital Signs

A personal blog on health economics, health policy and healthcare analytics.

Astro + MDX, plain CSS, no client-side JavaScript. Builds to a static `dist/`
and is served by Cloudflare Pages.

## Development

Requires Node 22.23.2 (the version in `.nvmrc`). With nvm installed, `nvm use`
in this directory switches to it. Cloudflare Pages reads the same file, so local
and deploy builds stay on one version.

```sh
npm install
npm run dev        # local dev server
npm run build      # production build to dist/ — must pass before committing
npm run preview    # serve the built site locally
```

## Writing

```sh
npm run new-post "Post Title"
```

Creates `src/content/posts/YYYY-MM-slug.md` with frontmatter filled in and
`draft: true`. Drafts render in `npm run dev` and are excluded from production
builds. Set `draft: false` to publish.

The `YYYY-MM-` filename prefix keeps the directory in chronological order; it is
stripped from the public URL, so `2026-09-hello.md` is served at `/posts/hello/`.

Frontmatter is validated by the zod schema in `src/content.config.ts`. A build
fails loudly if a post is missing a required field.

## Layout

```
astro.config.mjs          static output, MDX integration
src/content.config.ts     posts collection + zod schema
src/content/posts/        the posts themselves
src/lib/posts.ts          slug, URL, date and draft helpers
src/layouts/              BaseLayout, PostLayout
src/pages/                index and /posts/[...slug]
src/styles/global.css     the entire stylesheet
scripts/new-post.mjs      post scaffolding
```

All styling lives in one stylesheet, ordered variables → reset → base → layout →
components. Colour and type scale are CSS custom properties at the top of the
file; changing `--step-0` or the root font size moves the whole scale.

## Licence

The **code** in this repository is MIT licensed — see [LICENSE](./LICENSE).

The **post content** is not. All essays, articles and other written material
under `src/content/` are © 2026 Euan Dawson, all rights reserved, and are not
covered by the MIT licence.
