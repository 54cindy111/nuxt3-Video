import { defineStore } from 'pinia'

export const usePersistedStateStore = defineStore('persistedState', () => {
  const lang = ref('')
  const setLang = (data:any) => {
    lang.value = data
  }

  const token = ref('')
  const setToken = (data:any) => {
    token.value = data
  }

  const theme = ref('light')
  const setTheme = (data:any) => {
    theme.value = data
  }

  const refreshToken = ref('')
  const setRefreshToken = (data:any) => {
    refreshToken.value = data
  }

  const loginData:any = {
    username: '',
    password: ''
  }
  const setLoginData = (data:any) => {
    loginData.value = data
  }

  const cleanPersistedState = () => {
    token.value = ''
    refreshToken.value = ''
    loginData.value = {
      username: '',
      password: ''
    }
  }

  return {
    lang,
    setLang,
    token,
    setToken,
    theme,
    setTheme,
    refreshToken,
    setRefreshToken,
    loginData,
    setLoginData,
    cleanPersistedState
  }
},
{
  persist: true
}
)
