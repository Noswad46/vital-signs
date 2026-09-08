import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Post files live at src/content/posts/YYYY-MM-slug.md
// The YYYY-MM- prefix keeps the directory in chronological order on disk; it is
// stripped from the public URL (see src/pages/posts/[...slug].astro).
const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Groups the post on the home page. 'essay' for longer pieces,
    // 'note' for shorter ones.
    category: z.enum(['essay', 'note']).default('note'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
