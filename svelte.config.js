import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Pour les langages comme TypeScript, SCSS, PostCSS, etc.
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null
    }),
    paths: {
      base: dev ? '' : 'svelte-portfolio'
    },
    prerender: {
      default: true
    }
  }
};

export default config;



