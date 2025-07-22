<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
         <!-- 如果觉得文字收缩效果不好看，可以直接去掉这个配置，:class="{ layout_slider_fold: layoutSettingStore.fold ? true : false }" 相当于其他两个区域覆盖住 -->
        <div class="layout_slider" :class="{ layout_slider_fold: layoutSettingStore.fold ? true : false }">
            <Logo></Logo>
            <!-- 滚动组件：设置菜单太多，超出视口时，采用滚动 -->
            <el-scrollbar class="scrollbar">
                <el-menu background-color="#001529" text-color="white" :default-active="$route.path"
                    :collapse="layoutSettingStore.fold ? true : false">
                    <!-- 菜单组件 -->
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>

        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar" :class="{ layout_tabbar_fold: layoutSettingStore.fold ? true : false }">
            <Tabbar></Tabbar>
        </div>
        <!-- 内容区 -->
        <div class="layout_main" :class="{ layout_main_fold: layoutSettingStore.fold ? true : false }">
            <RouterView v-if="flag"></RouterView>
        </div>


    </div>
</template>

<script setup>
// 引入路由
import { useRoute } from 'vue-router';
let $route = useRoute();
import Tabbar from '@/layout/tabbar/index.vue';
// 引入logo子组件
import Logo from '@/layout/logo/index.vue';
import Menu from '@/layout/menu/index.vue';
// 引入小仓库，方便拿路由
import useUserStore from '@/store/modules/user';
let userStore = useUserStore();
// 引入layout小仓库，拿去fold
import useLayoutSettingStore from '@/store/modules/setting';
let layoutSettingStore = useLayoutSettingStore();
import { ref, nextTick, watch } from 'vue';
let flag = ref(true);
watch(() => layoutSettingStore.refsh, () => {
    flag.value = false;
    // DOM 更新后操作元素
    nextTick(() => {
        flag.value = true;
    })
})
</script>


<style scoped>
.layout_container {
    width: 100%;
    height: 100vh;
}

.layout_slider {
    width: var(--base-menu-width);
    height: 100vh;
    background-color: #001529;
    transition: all 0.3s;
}

.layout_slider_fold {
    /* 折叠的宽度 */
    width: var(--base-menu-min-width);
}

.layout_tabbar {
    position: fixed;
    /* 相对视口定位 */
    width: calc(100% - var(--base-menu-width));
    height: var(--base-tabbar-height);
    color: black;
    top: 0px;
    left: var(--base-menu-width);
    /* 过渡效果 */
    transition: all 0.3s;
    background-color: transparent;
}

.layout_tabbar_fold {
    /* 折叠的宽度 */
    width: calc(100% - var(--base-menu-min-width));
    /* 折叠后要离左侧的位置 */
    left: var(--base-menu-min-width);
}

.layout_main {
    position: absolute;
    /* 相对 最近的定位祖先元素 进行定位 */
    width: calc(100% - var(--base-menu-width) - 40px);
    /* 40px是padding */
    height: calc(100vh - var(--base-tabbar-height) - 40px);
    top: var(--base-tabbar-height);
    left: var(--base-menu-width);
    padding: 20px;
    overflow: auto;
    /* 在内容区，当内容太多时会出现滚动条，如果不加上这个，那么当内容太多时，滚动条会出现在导航和内容区，而不仅仅是出现在内容区 */
    /* 过渡效果 */
    transition: all 0.3s;
}

.layout_main_fold {
    /* 折叠的宽度 */
    width: calc(100% - var(--base-menu-min-width) - 40px);
    /* 折叠后要离左侧的位置 */
    left: var(--base-menu-min-width);
    /* 过渡效果 */
    transition: all 0.3s;
}

.layout_slider .scrollbar {
    width: 100%;
    height: calc(100vh - var(--base-menu-logo-height));
}

.el-menu {
    border-right: 0;
}
</style>