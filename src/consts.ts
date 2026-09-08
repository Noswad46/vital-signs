// Single source of truth for site identity. The layouts, the home page and
// the RSS feed all read from here, so these strings cannot drift apart.
//
// SITE_NAME and AUTHOR are the same string by design: the site is titled with
// the author name. They stay separate constants because they answer different
// questions, and only one of them would change if the site were retitled.

export const SITE_NAME = 'Euan Dawson';

export const AUTHOR = 'Euan Dawson';

// Short. The RSS <channel><description> — what feed readers show as the site
// subtitle. Not rendered on the site itself.
export const TAGLINE = 'Reading the numbers behind health care.';

// Longer. Used for <meta name="description"> and og:description, where search
// results and link previews have room for a full sentence.
export const DESCRIPTION =
  `Health economics, policy and analytics — writing on how health care gets ` +
  `paid for and what the data actually shows. By ${AUTHOR}.`;
