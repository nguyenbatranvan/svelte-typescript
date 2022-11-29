import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [sveltePreprocess(),preprocess({
    postcss: true,
  })],
  kit:{
    adapter: adapter()
  },

}
