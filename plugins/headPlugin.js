import { createHead, useHead } from 'unhead'

createHead()

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(useHead, {});
});

