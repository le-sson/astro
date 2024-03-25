import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [vue(), tailwind()],
	i18n: {
		defaultLocale: "en",
		locales: ["zh", "en"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
