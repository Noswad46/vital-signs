import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/**
 * Filenames are `YYYY-MM-slug.md` so the directory sorts chronologically.
 * The public URL drops that prefix: 2026-09-hello.md -> /posts/hello/
 */
export function slugOf(post: Post): string {
  return post.id.replace(/^\d{4}-\d{2}-/, '');
}

export function urlOf(post: Post): string {
  return `/posts/${slugOf(post)}/`;
}

/**
 * e.g. "4 September 2026".
 *
 * Formatted in UTC deliberately. A bare `pubDate: 2026-09-04` in frontmatter
 * parses as UTC midnight, so formatting in a timezone behind UTC would render
 * it as the previous day.
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/**
 * All posts, newest first. Drafts are visible in `astro dev` and excluded from
 * production builds.
 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
