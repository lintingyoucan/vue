<template>
    <div class="tabbar_right">
        <el-button circle icon="Refresh" @click="updateRefsh"></el-button>
        <el-button circle icon="FullScreen" @click="fullScreen"></el-button>


        <el-popover placement="bottom" title="主题设置" width="200px" trigger="click"> 
            <el-form>
                <el-form-item label="主题颜色">
                    <el-color-picker v-model="color" show-alpha :predefine="predefineColors" @change="changeColor"/>
                </el-form-item>
                <el-form-item label="暗黑模式">
                    <!-- inline-prompt 将icon放在内部 -->
                    <el-switch v-model="dark" inline-prompt active-icon="MoonNight" inactive-icon="Sunny"
                        @change="changeMode" />
                </el-form-item>
            </el-form>
            <template #reference>
                <el-button circle icon="Setting"></el-button>
            </template>
        </el-popover>


        <img :src="userStore.avatar" style="width:32px;height:32px;margin-left:10px;border-radius: 50%;">
        <el-dropdown :hide-on-click="false" style="margin-left:10px">
            <span class="el-dropdown-link">
                {{ userStore.username }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup>
import { ref } from 'vue'
// 引入小仓库，方便拿取refsh
import useLayoutSettingStore from '@/store/modules/setting';
import useUserStore from '@/store/modules/user';
import { useRouter, useRoute } from 'vue-router';
let $router = useRouter();
let $route = useRoute();
let layoutSettingStore = useLayoutSettingStore();
let userStore = useUserStore();
// 刷新回调
const updateRefsh = () => {
    layoutSettingStore.refsh = !layoutSettingStore.refsh;
}
// 全屏回调
const fullScreen = () => {
    // dom对象一个属性，可以用来判断当前是不是全屏模式，全屏true，否则False
    let full = document.fullscreenElement;
    if (!full) {
        document.documentElement.requestFullscreen();
    } else {
        // 退出全屏
        document.exitFullscreen();
    }
}
// 退出登录
const logout = () => {
    // 清除仓库数据
    userStore.userLogout();
    // 跳转到login,并记录下推出前的路由
    $router.push({ path: '/login', query: { redirect: $route.path } });

}
let color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577',
])
let dark = ref(false)
const changeMode = () => {
    // 获取HTML根节点
    let html = document.documentElement
    // 设置暗黑模式
    dark.value ? html.className = 'dark' : html.className = ''
}
const changeColor = ()=>{
    let html = document.documentElement
    html.style.setProperty('--el-color-primary',color.value)
}
</script>
<script>
export default {
    name: 'Setting'
}
</script>
<style scoped>
.tabbar_right {
    display: flex;
    align-items: center;

}
</style>