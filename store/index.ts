import { defineStore } from 'pinia'
import { useAppStore } from '@/store/app'
import { usePersistedStateStore } from '@/store/persistedState'

export const useStores = defineStore('stores', () => {
  const appStore = useAppStore()
  const persistedStateStore = usePersistedStateStore()

  return {
    appStore,
    persistedStateStore
  }
})
