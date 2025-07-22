<template>
  <div class="notFound">
    <p class="error"></p>
    <el-button type="primary" @click="goHome" class="btn">回到首页</el-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
let $router = useRouter();
const goHome = () => {
  $router.push('/home')
}
</script>

<style scoped>
.notFound {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error {
  width: 800px;
  height: 800px;
  background: url('../../assets/images/error_images/404-2.jpg') no-repeat;
  background-size: 100% 100%;
}

.btn {
  width: 800px;
}
</style>