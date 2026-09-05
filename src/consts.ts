// Single source of truth for site identity. The layouts, the home page, the
// about page and the RSS feed all read from here, so these strings cannot
// drift apart.

export const SITE_NAME = 'Vital Signs';

export const AUTHOR = 'Euan Dawson';

// Short. Sits under the site name in the header, and is the RSS
// <channel><description> — what feed readers show as the site subtitle.
export const TAGLINE = 'Reading the numbers behind health care.';

// Longer. Used for <meta name="description"> and og:description, where search
// results and link previews have room for a full sentence.
export const DESCRIPTION =
  `Health economics, policy and analytics — writing on how health care gets ` +
  `paid for and what the data actually shows. By ${AUTHOR}.`;
