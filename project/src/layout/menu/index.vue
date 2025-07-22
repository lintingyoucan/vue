<template>
    <template v-for="(item, index) in menuList" :key="item.path">
        <!-- 没有子路由 -->
        <template v-if="!item.children">
            <el-menu-item v-if="!item.meta.hidden" :index="item.path" @click="goRoute">
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.meta.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- 只有一个子路由:跟一级路由一样展开 -->
        <template v-if="item.children && item.children.length === 1">
            <el-menu-item v-if="!item.meta.hidden" :index="item.children[0].path" @click="goRoute">
                <el-icon>
                    <component :is="item.children[0].meta.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.children[0].meta.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- 有多个子路由 -->
        <template v-if="item.children && item.children.length > 1">
            <el-sub-menu v-if="!item.meta.hidden" :index="item.path">
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </template>
                <Menu :menuList="item.children"></Menu>
            </el-sub-menu>
        </template>
    </template>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';
// 获取路由对象
let $router = useRouter();
// 获取从父组件的传来参数
defineProps(['menuList'])
// 这里为什么时vc
const goRoute = (vc) => {
    // 编程式导航跳转
    $router.push(vc.index)
}
</script>
<script>
export default {
    name: 'Menu'
}
</script>

<style scoped>
.el-menu {
    border-right: 0;
    /* 去掉右边框 */
}
</style>