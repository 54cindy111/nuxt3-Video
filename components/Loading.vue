<template>
  <div
    v-if="loading"
    v-loading="loading"
    class="mask"
    element-loading-background="rgba(0, 0, 0, 0)"
  />
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app'
const { loading } = useAppStore()
</script>

<style scoped>
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
}
</style>
