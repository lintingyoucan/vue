<template>
  <div class="container">
    <div class="screen" ref="screen">
      <div class="top">
        <Top />
      </div>
      <div class="bottom">
        <div class="left">
          <Tourist class="tourist"></Tourist>
          <Sex class="sex"></Sex>
          <Age class="age"></Age>
        </div>
        <div class="center">
          <Map class="map"></Map>
          <Line class="line"></Line>
        </div>
        <div class="right">
          <Rank class="rank"></Rank>
          <Year class="year"></Year>
          <Counter class="counter"></Counter>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Top from '@/views/screen/components/top/index.vue'
import Tourist from '@/views/screen/components/tourist/index.vue'
import Sex from '@/views/screen/components/sex/index.vue'
import Age from '@/views/screen/components/age/index.vue'
import Map from '@/views/screen/components/map/index.vue'
import Line from '@/views/screen/components/line/index.vue'
import Rank from '@/views/screen/components/rank/index.vue'
import Counter from '@/views/screen/components/counter/index.vue'
import Year from '@/views/screen/components/year/index.vue'
// 获取screen实例
let screen = ref()
// 缩放比例
function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w  // window.innerWidth：浏览器窗口可视区域的宽度（像素）
  const wh = window.innerHeight / h
  return ww < wh ? ww : wh // 返回两者中较小的值（确保内容完全显示在窗口内）
}
// 一挂载就按比例缩放
onMounted(() => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
})
// 监听视口变化
window.onresize = () => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url('./images/bg.png') no-repeat;
  background-size: cover;
}

.screen {
  width: 1920px;
  height: 1080px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform-origin: left top;
}

.top {
  width: 100%;
  height: 40px;
}

.bottom {
  display: flex;
}

.left {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 1040px;
}

.tourist {
  flex: 1.2;
}

.sex {
  flex: 1;
}

.age {
  flex: 1;
}

.right {
  flex: 1;
  height: 1040px;
  display: flex;
  flex-direction: column;
}
.rank{
  flex: 1.2;
}
.year {
  flex: 1;
}
.counter {
  flex: 1;
}
.center {
  flex: 2;
  display: flex;
  flex-direction: column;
  height: 1040px;
}

.map {
  flex: 3;
}

.line {
  flex: 1;
}
</style>