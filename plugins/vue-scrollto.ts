import VueScrollTo from 'vue-scrollto'

export default defineNuxtPlugin((nuxtApp:any) => {
  nuxtApp.vueApp.use(VueScrollTo)
})
