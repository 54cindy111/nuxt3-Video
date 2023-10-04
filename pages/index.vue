<template>
  <el-container>
    <el-header>
      <el-row
        justify="center"
        align="middle"
        class="header"
        :gutter="20"
      >
        <span @click="changeList('Following')">Following</span>
        <span style="padding:0 10px"> | </span>
        <span @click="changeList('ForYou')">For You</span>
      </el-row>
    </el-header>
    <el-main id="mainRef">
      <div v-for="(item,i) in videoList" :key="item">
        <el-row
          v-if="item.play_url"
          :id="`vid${i}`"
          justify="center"
          align="middle"
          class="videoMain"
        >
          <video-player
            :src="item.play_url"
            controls
            :volume="0.6"
            :poster="item.cover"
            :height="videoPlayerConfig.height"
          />
        </el-row>
        <el-row
          justify="center"
          class="videoFooter"
        >
          {{ item.title }}
        </el-row>
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

const videoPlayerConfig = ref({
  volume: 0.6,
  height: 500
})
const videoList = ref([])

//
const initVideoPlayerConfig = () => {
  videoPlayerConfig.value.height = window.innerHeight
}

//
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

//
const changeList = async (x = 'Following') => {
  x === 'Following' ? await getFollowingList() : await getForYouList()
}
//
const videoIndex:any = ref(0)
const touchStartY:any = ref(0)
const touchstart = (e:any) => {
  e.preventDefault()
  touchStartY.value = e.changedTouches[0].pageY
}
const touchend = (e:any) => {
  e.preventDefault()
  const touchEndY:any = e.changedTouches[0].pageY
  const moveY = touchEndY - touchStartY.value

  if (Math.abs(moveY) > 30) {
    if (moveY < 0) {
      // down
      if (videoIndex.value < videoList.value.length - 1) {
        videoIndex.value = videoIndex.value + 1
        const vidRef:any = document.getElementById(`vid${videoIndex.value}`)
        vidRef.scrollIntoView(true)
      }
    } else if (videoIndex.value) {
      // up
      videoIndex.value = videoIndex.value - 1
      const vidRef:any = document.getElementById(`vid${videoIndex.value}`)
      vidRef.scrollIntoView(true)
    }
  }
}
const initPage = async () => {
  await initVideoPlayerConfig()
  await changeList()
  const mainRef:any = document.getElementById('mainRef')
  mainRef.addEventListener('touchstart', touchstart)
  mainRef.addEventListener('touchend', touchend)
}
onMounted(() => {
  initPage()
})
</script>

<style scoped lang="scss">
.el-container {
  position: relative;
  overflow: auto;
  height: 100vh;
}
.el-header {
  width: 100%;
  position: absolute;
  z-index: 1;
}
.el-main {
  background: #000;
  --el-main-padding:0,
  position: relative;
  z-index: 0;
}
//
.header{
   height: 50px;
   color: #fff;
}
.videoMain{
  padding: 0;
}
.videoFooter{
  background-color:rgba(0,0,0,0.3);
  color: #fff;
  pointer-events: none;
  position: relative;
  margin-top: -80px;
  margin-bottom: 80px;
  padding-top: 20px;
  height: 80px;
}
</style>
