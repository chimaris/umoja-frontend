import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify, ThemeDefinition } from "vuetify";

import { aliases, fa } from "vuetify/iconsets/fa";
import "vuetify/styles";

import { mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

const myCustomLightTheme: ThemeDefinition = {
	dark: false,
	colors: {
		green: "#2C6E63",
		orange: "#F38218",
		red: "#C20052",
	},
};
const myCustomDarkTheme: ThemeDefinition = {
	dark: true,
	colors: {
		"secondary-darken-1": "#018786",
		green: "#F38218",
	},
};
export default defineNuxtPlugin((nuxt) => {
	const vuetify = createVuetify({
		ssr: true,
		components,
		directives,
		theme: {
			defaultTheme: "myCustomLightTheme",
			themes: {
				myCustomLightTheme,
				myCustomDarkTheme,
			},
		},
		icons: {
			defaultSet: "fa",
			aliases,
			sets: {
				fa,
				mdi,
			},
		},
	});
	nuxt.vueApp.use(vuetify);
});
