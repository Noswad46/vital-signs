# Project: Vital Signs

Personal blog on health economics, health policy and healthcare analytics.
Author: Euan — health economist, ex-Pfizer market access, MSBA candidate at UC San Diego.
Audience: health economists, policy people, healthcare investors, informed generalists.

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build (must pass before any commit)
- `npm run new-post "Title"` — scaffold a new post file

## Stack
Astro + MDX + plain CSS (single stylesheet, CSS custom properties for colour and type
 scale). Deployed to Cloudflare Pages on push to `main`; fully static output, no adapter.
Posts are markdown in `src/content/posts/`, validated by the zod schema in
`src/content/config.ts`.

## Conventions
- Ship no client-side JavaScript unless a specific post requires it. Prefer a static SVG.
- Do not add a dependency without asking first. Say what it costs and what it replaces.
- Never modify `pubDate` or the slug of an already-published post.
- Post filenames: `YYYY-MM-slug.md`.
- Astro's Content Collections API changed in v5 — check current Astro docs before
  writing collection code; do not generate it from memory.
- Body copy is serif, single column, generous line height. Editorial, not SaaS.
- Never edit the prose of a post unless explicitly asked. Fixing typos is fine;
  rewriting sentences is not. My voice is the point of the site.

## Non-goals
No CMS, database, auth, comments, dark-mode toggle, i18n, or animation library.

## Working style
- For anything structural, propose a plan and wait for approval before writing code.
- Prefer the smallest change that works. If a task grows past what we agreed, stop and say so.
- Run `npm run build` before telling me something is done.