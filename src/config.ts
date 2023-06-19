// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Marcus Ang";
export const SITE_DESCRIPTION =
  "My Blog.";
export const TWITTER_HANDLE = "@marcusangjh";
export const MY_NAME = "Marcus Ang";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
