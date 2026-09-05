import rss from '@astrojs/rss';
import { getPosts, urlOf } from '../lib/posts';
import { SITE_NAME, TAGLINE } from '../consts';

export async function GET(context) {
  const posts = await getPosts();

  return rss({
    title: SITE_NAME,
    description: TAGLINE,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: urlOf(post),
    })),
    // Feed readers show the site's own language for dates and UI hints.
    customData: '<language>en</language>',
  });
}
