<template>
  <div class="box2">
    <div class="top2">
      <p class="title">年龄比例</p>
      <p class="bg"></p>
    </div>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
let chart = ref()
onMounted(() => {
  let myChart = echarts.init(chart.value);
  // 定义数据
  const data = [
    { value: 10, name: '10岁以下' },
    { value: 14, name: '10-20岁' },
    { value: 12, name: '20-30岁' },
    { value: 24, name: '30-40岁' },
    { value: 20, name: '40-60岁' },
    { value: 20, name: '60岁以上' }
  ];
  
  // 计算数据总和
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}:{d}%'  // 提示框中显示百分比
    },
    legend: {
      top: 30,
      right: 20,
      orient: 'vertical',
      textStyle: {
        color: 'white',
        fontSize: 16
      },
      // 图例格式化：显示名称和百分比
      formatter: (name) => {
        const item = data.find(d => d.name === name);
        const percentage = ((item.value / total) * 100).toFixed(1);
        return `${name}    ${percentage}%`;
      }
    },
    series: [
      {
        name: '年龄比例',
        type: 'pie',
        center: ['30%', '50%'],  // 关键修改：水平位置左移 (默认[50%,50%])
        radius: ['50%', '90%'],  // 关键修改：增大饼图半径 (原值[40%,70%])
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: 'transparent',
          borderWidth: 2
        },
        label: {
          show: true,
          position: 'inside',
          color:'white',
          fontSize:14,
          // 标签格式化：显示百分比
          formatter: (params) => {
            return `${params.percent.toFixed(1)}%`;
          }
        },
        labelLine: {
          show: false
        },
        data: data
      }
    ],
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

})
</script>

<style scoped>
.box2 {
  width: 430px;
  margin: 10px 0;
  background: url('../../images/dataScreen-main-lb.png') no-repeat;
  background-size: 100% 100%;
}

.top2 {
  height: 50px;
  width: 100%;
  margin-left: 10px;
  margin-bottom: 10px;
}

.top2 .title {
  color: white;
  font-size: 20px;
  margin: 10px 0;
}

.top2 .bg {
  background: url('../../images/dataScreen-title.png') no-repeat;
  background-size: 100% 100%;
  width: 68px;
  height: 7px;
}

.chart {
  width: 100%;
  height: 220px;
}
</style>