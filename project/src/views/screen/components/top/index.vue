<template>
    <div class="top">
        <div class="left">
            <span class="lbtn" @click="gohome">首页</span>
        </div>
        <div class="center">
            <span >智慧旅游可视化大数据平台</span>
        </div>
        <div class="right">
            <span class="rbtn">统计报告</span>
            <span class="time">当前时间:{{ time }}</span>
        </div>
    </div>
</template>

<script setup>
import moment from 'moment';
import { ref,onMounted,onBeforeUnmount } from 'vue';
import { useRouter} from 'vue-router';
let $router = useRouter()
const gohome = ()=>{
    $router.push('/home')
}
let time = ref(moment().format('YYYY年MM月DD日 HH:mm:ss'))
let timeId = ref(0)
onMounted(()=>{
    timeId.value = setInterval(()=>{
        time.value = moment().format('YYYY年MM月DD日 hh:mm:ss')
    },1000)
})
onBeforeUnmount(()=>{
    clearInterval(timeId.value)
})
</script>

<style scoped>
.top {
    width: 100%;
    height: 40px;
    display: flex;
}
.left {
    flex: 1.5;
    background: url('../../images/dataScreen-header-left-bg.png') no-repeat;
    background-size: 100% 100%;
}

.lbtn {
    width: 150px;
    height: 40px;
    background: url('../../images/dataScreen-header-btn-bg-l.png') no-repeat;
    background-size: 100% 100%;
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    color: #29fcff;
    float: right;
}

.center {
    flex: 2;
    width: 100%;
    height: 74px;
    /* 跟图片一样高 */
    background: url('../../images/dataScreen-header-center-bg.png') no-repeat;
    background-size: 100% 100%;
    text-align: center;
    line-height: 74px;
    color: #29fcff;
    font-size: 30px;
}

.right {
    flex: 1.5;
    display: flex;
    justify-content: space-between;
    background: url('../../images/dataScreen-header-right-bg.png') no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 40px;
    line-height: 40px;
    /* align-items: center; */
    text-align: center;
}
.rbtn{
    width: 150px;
    height: 40px;
    font-size: 20px;
    color: #29fcff;
    background: url('../../images/dataScreen-header-btn-bg-r.png') no-repeat;
    background-size: 100% 100%;
}
.time{
    font-size: 20px;
    color: #29fcff;
    margin-right: 10px;
}
</style>