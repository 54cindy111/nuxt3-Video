<template>
  <el-container>
    <el-header class="header">
      <span @click="changeList('Following')">Following</span>
      <span> | </span>
      <span @click="changeList('ForYou')">For You</span>
    </el-header>
    <el-main>
      <div v-for="item in videoList" :ref="content" :key="item">
        <el-row
          v-if="item.play_url"
          justify="center"
          align="middle"
          class="videoMain"
        >
          <video-player
            :src="item.play_url"
            controls
            :volume="0.6"
            :poster="item.cover"
          />
        </el-row>
        <div class="videoFooter">
          {{ item.title }}
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { VideoPlayer } from '@videojs-player/vue'
import { ref } from 'vue'
import * as $api from '@/lib/api'

// const runtimeConfig = useRuntimeConfig()
// const { baseUrl } = runtimeConfig.public

const videoList = ref([])
const getFollowingList = async () => {
  const res: any = await $api.video.getFollowingList()
  if (res) {
    videoList.value = res
  }
}
const getForYouList = async () => {
  const res: any = await $api.video.getForYouList()
  if (res) {
    videoList.value = res
  }
}
const changeList = (x = 'Following') => {
  x === 'Following' ? getFollowingList() : getForYouList()
}

//
const screenY:any = ref(0)

const doScroll = () => {
  if (window.pageYOffset > screenY.value) {
    let i = Math.ceil(window.pageYOffset / window.innerHeight)
    if (i > videoList.value.length - 1) {
      i = videoList.value.length - 1
    }
    window.scrollTo({
      top: i * window.innerHeight,
      behavior: 'smooth'
    })
    screenY.value = i * window.innerHeight
  } else {
    // let n = screenY.value - window.innerHeight
    // if (n < 0) {
    //   n = 0
    // }
    // window.scrollTo({
    //   top: n,
    //   behavior: 'smooth'
    // })
    // screenY.value = n
  }
  // console.log(window.pageYOffset, screenY.value)
}
onMounted(() => {
  getFollowingList()
  window.addEventListener('scroll', doScroll)
})
</script>

<style scoped lang="scss">
.header{
   height: 50px;
}
.videoMain{
  height: calc(100vh - 100px);
}
.videoFooter{
  height: 50px;
}
</style>
