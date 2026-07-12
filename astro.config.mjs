// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://tutortide.online',
  build: {
    // Emit clean-URL directories (e.g. /jinjing/index.html) so Firebase serves /jinjing
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({ filter: (page) => !page.includes("/styleguide") }),
    mdx(),
  ]
});