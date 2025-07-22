<template>
  <div class="lineBox">
    <div class="lineTop">
      <p class="lineTitle">未来7天游客量趋势图</p>
      <p class="lineBg"></p>
    </div>
    <div class="lineChart" ref="chart"></div>

  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
let chart = ref()
onMounted(() => {
  let myChart = echarts.init(chart.value);
  const option = {
    title: {
      show: true,
      text: '访客量',
      textStyle: {
        color: 'white',
        fontSize: 16
      },
      top: 0,
    },
    xAxis: {
      type: 'category',
      //两侧不留白
      boundaryGap: false,
      //分割线不要
      splitLine: {
        show: false
      },
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: {
        show: true
      },
      axisTick: {
        show: true
      }
    },
    yAxis: {
      splitLine: {
        show: false
      },
      //轴线的设置
      axisLine: {
        show: true
      },
      //刻度
      axisTick: {
        show: true
      },
    },
    series: [
      {
        data: [120, 1020, 501, 1040,105, 838,100],
        type: 'line',
        smooth: true,
        color:'rgb(117,96,55)',
        //区域填充样式
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: 'rgb(117,96,55)' // 0% 处的颜色
            }, {
              offset: 1, color: 'rgb(48,49,75)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        }
      }
    ],
    grid: [{
      left: 45,
      right: 15,
      top: 30,
      bottom: 25
    }]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})
</script>
<style scoped>
.lineBox {
  width: 100%;
  height: 100%;
  margin: 10px 0;
  background: url('../../images/dataScreen-main-cb.png') no-repeat;
  background-size: 100% 100%;
}

.lineTop {
  width: 100%;
  height: 40px;
  margin-left: 10px;
}

.lineTitle {
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}

.lineBg {
  width: 68px;
  height: 7px;
  background: url('../../images/dataScreen-title.png') no-repeat;
  background-size: 100% 100%;
}

.lineChart {
  padding-top: 10px;
  width: 100%;
  height: calc(100% - 50px);
}
</style>