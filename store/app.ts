import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const loading = ref(0)
  const setLoading = (data:any) => {
    loading.value = data
  }

  return {
    loading,
    setLoading
  }
}
)
