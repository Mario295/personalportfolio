import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// Update with my github username and repo name
const site = 'https://Mario295.github.io';
const base = '/personalportfolio/';

export default defineConfig({
	site,
	base,
	integrations: [tailwind()],
});
