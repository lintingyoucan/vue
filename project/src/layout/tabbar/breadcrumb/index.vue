<template>
    <div class="tabbar_left">
        <el-icon style="margin-right: 10px" @click="changeIcon">
            <component :is="layoutSettingStore.fold?'Expand':'Fold'"></component>
        </el-icon>
        <!-- 左侧面包屑 -->
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span style="margin-left: 5px">{{ item.meta.title }}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
// 获取layout小仓库的fold
import useLayoutSettingStore from '@/store/modules/setting';
// 获取路由
import { useRoute } from 'vue-router';
let layoutSettingStore = useLayoutSettingStore();
const changeIcon = () => {
    // 切换图标
    layoutSettingStore.fold = !layoutSettingStore.fold
}
let $route = useRoute();

</script>
<script>
export default {
    name: 'Breadcrumb'
}
</script>
<style scoped>
.tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
}
</style>