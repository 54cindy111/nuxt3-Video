import ElementPlus from 'element-plus'

export default defineNuxtPlugin((nuxtApp:any) => {
  nuxtApp.vueApp.use(ElementPlus)
})
