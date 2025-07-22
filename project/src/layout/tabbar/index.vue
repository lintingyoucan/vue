<template>
    <div class="tabbar">
        <!-- 左侧顶部 -->
        <Breadcrumb></Breadcrumb>
        <!-- 右侧顶部 -->
        <Setting></Setting>
        
    </div>
</template>

<script setup>
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>
<script>
export default {
    name: 'Tabbar'
}
</script>
<style scoped>
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
}

</style>