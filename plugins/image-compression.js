import { defineNuxtPlugin } from '#app'
import { compressImage } from 'image-conversion'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.config.globalProperties.$compressImage = compressImage
})