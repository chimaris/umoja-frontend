// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
	components: true,
	ssr: false,
	typescript: { shim: false },
	build: {
		transpile: ["vuetify"],
	},
	vite: {
		// @ts-ignore
		// curently this will lead to a type error, but hopefully will be fixed soon #justBetaThings
		ssr: {
			noExternal: ["vuetify"], // add the vuetify vite plugin
		},
	},
	modules: [
		// ...
		"@pinia/nuxt",
	],

	css: ["~/assets/css/fonts.css", "~/assets/css/main.css", "vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
});
