// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Höher Kleiner Spiel";
export const SITE_DESCRIPTION =
  "Das ist die Webseite vom Höher Kleiner Spiel";
export const MY_NAME = "Captain Awesome";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
