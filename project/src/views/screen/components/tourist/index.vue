<template>
  <div class="box">
    <div class="top">
      <p class="title">实时游客统计</p>
      <p class="bg"></p>
      <p class="right">可预约总量 <span>999999</span> 人</p>
    </div>
    <div class="number">
      <span v-for="(item, index) in num" :key="index">{{ item }}</span>
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import 'echarts-liquidfill'
let num = ref('216908人')
// 获取水晶球实例
let charts = ref()
onMounted(() => {
  let myChart = echarts.init(charts.value);
  const option = {
    series: [{
      type: 'liquidFill',
      data: [0.6, 0.55, 0.4],
      radius: '80%',
      center: ['50%', '50%'],

      // 水晶球外轮廓配置
      outline: {
        show: true,
        borderDistance: 8,
        itemStyle: {
          color: 'none',  // 透明填充
          borderColor: 'rgb(27,195,185)',  // 蓝绿色边框
          borderWidth: 8,
          shadowBlur: 20,
          shadowColor: 'rgba(0, 0, 0, 0.4)',  // 加深阴影效果
          shadowOffsetY: 5  // 阴影下移增强立体感
        }
      },

      // 水晶球主体样式
      itemStyle: {
        opacity: 0.8,  // 适当透明度
        shadowBlur: 30,  // 整体阴影模糊度
        shadowColor: 'rgba(0, 150, 150, 0.6)',  // 蓝绿色调阴影
        shadowOffsetY: 10  // 阴影下移
      },

      // 液体波浪样式
      color: [{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0,
          color: 'rgba(100, 255, 255, 0.8)'  // 浅蓝绿
        }, {
          offset: 1,
          color: 'rgba(27, 195, 185, 0.6)'  // 深蓝绿
        }]
      }],

      // 背景样式
      backgroundStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(27,195,185,0.15)'  // 上半部
          }, {
            offset: 1,
            color: 'rgba(27,195,185,0.4)'  // 下半部加深
          }]
        },
        borderWidth: 1,
        borderColor: 'rgba(27,195,185,0.3)'
      },

      // 标签样式
      label: {
        position: ['50%', '30%'],
        formatter: '预约量',
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
        textShadowBlur: 5,
        textShadowColor: 'rgba(0,0,0,0.3)'
      },

      // 增强波浪效果
      amplitude: 5,  // 波浪幅度
      waveAnimation: true,
      animationDuration: 2000,
      animationEasing: 'linear'
    }]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})
</script>

<style scoped>
.box {
  width: 430px;
  margin: 10px 0;
  background: url('../../images/dataScreen-main-lb.png') no-repeat;
  background-size: 100% 100%;
}

.top {
  width: 100%;
  height: 60px;
}

.title {
  color: white;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 10px;
}

.bg {
  width: 68px;
  height: 7px;
  background: url('../../images/dataScreen-title.png') no-repeat;
  background-size: 100% 100%;
  margin-top: 10px;
  margin-left: 10px;
}

.right {
  float: right;
  color: white;
  font-size: 20px;
  margin-right: 10px;
}

.right span {
  color: yellowgreen;
  font-size: 20px;
}

.number {
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
}

.number span {
  flex: 1;
  background: url('../../images/total.png') no-repeat;
  background-size: 100% 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: #29fcff;
  font-size: 30px;
}

.charts {
  width: 100%;
  height: 250px;
}
</style>