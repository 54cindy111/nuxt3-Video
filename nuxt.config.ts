// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'pathe'

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_API_BASE
    }
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          uietDeps: true
        }
      }
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  css: ['element-plus/dist/index.css', '@/assents/styles/index.scss', 'video.js/dist/video-js.css'],
  alias: {
    '@': resolve(__dirname, './')
  }
})
