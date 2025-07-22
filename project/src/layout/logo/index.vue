<template>
  <div class="logo_container" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="logo"><p>{{ setting.title }}</p>

  </div>
</template>

<script setup>
// 引入logo配置
import setting from '@/setting.js';

</script>
<script>
export default {
    name: 'Logo'
}
</script>
<style scoped>
.logo_container {
  width: calc(100% - 20px); /* 减去padding */
  height: calc(var(--base-menu-logo-height) - 20px); /* 减去padding */
  display: flex; /* 开启浮动，将容器设为弹性盒子，子元素默认水平排列 */
  align-items: center; /* 设置子元素在容器内垂直居中 */
  padding: 10px;
}
.logo_container img {
    width: 40px;
    height: 40px;
}
.logo_container p {
    font-size: var(--base-logo-title-font-size);
    color: white;
    margin-left: 10px;
}
</style>