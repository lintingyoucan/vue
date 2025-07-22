<template>
  <el-card>
    <div class="box">
      <img :src="userStore.avatar">
      <div class="bottom">
        <h3 class="title">{{ getTime() }}好呀{{ userStore.username }}</h3>
        <span class="subtitle">甄选运营平台</span>
      </div>
    </div>
  </el-card>
  <div class="bottoms">
    <svg-icon name="goback" width="900px" height="600px"></svg-icon>
  </div>
</template>

<script setup>
import useUserStore from '@/store/modules/user'
import { getTime } from '@/utils/time';
let userStore = useUserStore()
</script>

<style scoped>
.box{
  display: flex;
}
img{
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
.bottom{
  margin-left: 20px;
}
.title{
  margin-top: 25px;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 900;
}
.subtitle{
  font-size: 20px;
  color: gray;
  font-style: italic;
}
.bottoms{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>