// @ts-ignore
import { tw, en } from '@/lib/i18n'
import elementlangEn from 'element-plus/es/locale/lang/en'
import elementlangZhTw from 'element-plus/es/locale/lang/zh-tw'


const messages = {
  tw: {
    name: 'zh-tw',
    ...tw,
    el: elementlangZhTw.el
  },
  en: {
    name: 'en',
    ...en,
    el: elementlangEn.el
  }
}

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages
}))
