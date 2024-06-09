// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
	app: {
		head: {
			title: "Umoja",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					hid: "description",
					name: "description",
					content: "The world first and largest e-commerce platform with a wide variety of authentic and sustainable African products.",
				},
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "https://res.cloudinary.com/payhospi/image/upload/v1717407683/umoja/favicon_fpqa9y.png" }],
		},
	},
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
		"maz-ui/nuxt",
		"nuxt-mapbox",
		"@pinia-plugin-persistedstate/nuxt",
	],
	piniaPersistedstate: {
		storage: "localStorage",
	},
	runtimeConfig: {
		public: {
			stripePK: process.env.NUXT_ENV_STRIPE_PUBLIC_KEY,
			mapboxAccessToken: process.env.MAP_BOX_TOKEN,
		},
	},
	// mapbox: {
	// 	accessToken: process.env.MAP_BOX_TOKEN
	//   },
	mazUi: {
		injectComponents: true,
		injectCss: true,
		injectAos: {
			injectCss: true,
		},
		injectUseToast: true,
		injectUseThemeHandler: true,
		devtools: true,
	},
	css: [
		"~/assets/css/fonts.css",
		"~/assets/css/main.css",
		"vuetify/lib/styles/main.sass",
		"@mdi/font/css/materialdesignicons.min.css",
		"flag-icons/css/flag-icons.css",
		"/node_modules/flag-icons/css/flag-icons.min.css",
	],
});
