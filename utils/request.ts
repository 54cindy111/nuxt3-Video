import axios from 'axios'
import { storeToRefs } from 'pinia'
import { useStores } from '@/store'

const getBaseUrl = async () => {
  const runtimeConfig = await useRuntimeConfig()
  const { baseUrl } = runtimeConfig.public
  return baseUrl
}

const service = axios.create({
  // baseURL: getBaseUrl(),
  baseURL: 'http://localhost:3000/',
  withCredentials: false,
  timeout: 20000
})

service.interceptors.request.use(
  (config) => {
    const url: any = config.url
    const $stores = useStores()
    //
    const { loading } = storeToRefs($stores.appStore)
    $stores.appStore.setLoading(loading.value + 1)
    //
    const { token } = storeToRefs($stores.persistedStateStore)
    if (token.value) {
      config.headers.authorization = 'Bearer ' + token.value
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    console.log(response)
    const $stores = useStores()
    //
    const { loading } = storeToRefs($stores.appStore)
    $stores.appStore.setLoading(loading.value - 1)

    if (response.status === 200 && response.data) {
      const { data } = response
      if (data.items) {
        return data.items
      } else {
        return data
      }
    } else {
      return response
    }
  },
  (error) => {
    const $stores = useStores()
    //
    const { loading } = storeToRefs($stores.appStore)
    $stores.appStore.setLoading(loading.value - 1)

    const response = error.response
    if (response) {
      switch (response.status) {
        case 401:
          $stores.persistedStateStore.cleanPersistedState()
          // router.push({ name: 'Login' })
          break
        case 403:
          break
        case 404:
          break
        case 422:
          break
        default:
          break
      }
    } else {
      return 'error'
    }

    return response.data
  }
)

export default service
