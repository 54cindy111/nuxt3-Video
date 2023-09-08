import piniaPersistedstate from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin((nuxtApp:any) => {
  nuxtApp.$pinia.use(piniaPersistedstate)
})
