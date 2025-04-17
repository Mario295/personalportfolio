import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// GitHub Pages settings
const site = 'https://Mario295.github.io';
const base = '/personalportfolio/';

export default defineConfig({
	site,
	base, // ✅ use the `base` variable here with trailing slash
	integrations: [tailwind()],
});
