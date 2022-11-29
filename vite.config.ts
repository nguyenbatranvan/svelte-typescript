import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [svelte(), tsconfigPaths()],
    optimizeDeps: {exclude: ["svelte-navigator"]}
})
