// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    components:true,
    ssr:false,
    typescript: {shim: false},
    build: {
        transpile: ["vuetify"],
    },
    vite: {
        // @ts-ignore
        // curently this will lead to a type error, but hopefully will be fixed soon #justBetaThings
        ssr: {
            noExternal: ['vuetify'], // add the vuetify vite plugin
        },
    },
    modules: [
      // ...
      '@pinia/nuxt',
    ],
    app: {
        head: {
          // meta: [
          //   { charset: 'utf-8' },
          //   { name: 'viewport', content: 'width=1440, initial-scale=1' },
          // ],
          link: [
            {
              rel: 'preconnect',
              href: 'https://fonts.googleapis.com'
            },
            {
              rel: 'preconnect',
              href: 'https://fonts.gstatic.com',
              crossorigin: ''
            },
            {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
            },
          ],
        }
      },
      plugins:[
        // {src: '~/plugins/headPlugin.js', mode: 'client'},
      ],
      css: [
        '~/assets/css/fonts.css',
        '~/assets/css/main.css',
        "vuetify/lib/styles/main.sass",
        "@mdi/font/css/materialdesignicons.min.css",
      ]
})
