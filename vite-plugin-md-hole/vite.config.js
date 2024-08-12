import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import xiyoPlugin from './src/lib/plugin/vitePluginXiyo';
// import markdown from 'vite-plugin-md';
// import markdown from "vite-plugin-svelte-md";
import markdown from 'vite-plugin-markdown';


export default defineConfig({
	plugins: [
		sveltekit(),
		// markdown({
		// 	mode: 'html',
		// }),
		xiyoPlugin()
	]
});
