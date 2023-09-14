import VueVideoPlayer from '@videojs-player/vue'

export default defineNuxtPlugin((nuxtApp:any) => {
  nuxtApp.vueApp.use(VueVideoPlayer)
})
