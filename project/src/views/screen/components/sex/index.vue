<template>
  <div class="box1">
    <div class="top1">
      <p class="sex-title">男女比例</p>
      <p class="bg"></p>
    </div>
    <div class="people">
      <div class="man">
        <p class="title">男士</p>
        <img src="../../images/man.png">
      </div>
      <div class="woman">
        <p class="title">女士</p>
        <img src="../../images/woman.png">
      </div>
    </div>
    <div class="bottom">
      <p>男士60%</p>
      <p>女士40%</p>
    </div>
    <div class="chart" ref="chart"></div>

  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
let chart = ref()
onMounted(() => {
  let myChart = echarts.init(chart.value);
  const option = {
    //组件标题
    // title: {
    //   text: '男女比例',//主标题
    //   textStyle: {//主标题颜色
    //     color: 'skyblue'
    //   },
    //   left: '40%'
    // },
    //x|y
    xAxis: {
      show: false,
      min: 0,
      max: 100
    },
    yAxis: {
      show: false,
      type: 'category'
    },
    series: [
      {
        type: 'bar',
        data: [60],
        barWidth: 20,
        z: 100,
        itemStyle: {
          color: 'rgb(0,119,255)',
          borderRadius: 20
        }
      }
      ,
      {
        type: 'bar',
        data: [100],
        barWidth: 20,
        //调整女士柱条位置
        barGap: '-100%',
        itemStyle: {
          color: 'rgb(255,95,129)',
          borderRadius: 20
        }
      }
    ],
    grid: { //控制长度
      left: '20%',
      top: 0,
      right: '20%',
      bottom: 0
    }
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

})
</script>

<style scoped>
.box1 {
  width: 430px;
  margin: 10px 0;
  background: url('../../images/dataScreen-main-lb.png') no-repeat;
  background-size: 100% 100%;
}
.top1 {
  width: 100%;
  height: 30px;
  padding-left: 10px;
}
.sex-title {
  color: white;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.top1 .bg {
  width: 68px;
  height: 7px;
  background: url('../../images/dataScreen-title.png') no-repeat;
  background-size: 100% 100%;
}
.people {
  display: flex;
  margin-top: 50px;
  justify-content: center;
}
.man {
  width: 111px;
  height: 116px;
  background: url('../../images/man-bg.png') no-repeat;
  background-size: 100% 100%;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.man p {
  margin-top: 1px;
  margin-bottom: 20px;
  font-size: 20px;
  color: white;
}
.woman {
  width: 111px;
  height: 116px;
  background: url('../../images/woman-bg.png') no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.woman p {
  margin-top: 1px;
  margin-bottom: 20px;
  font-size: 20px;
  color: white;
}
.bottom {
  display: flex;
  color: white;
  justify-content: space-between;
  margin: 20px 90px 5px 90px;
  font-size: 20px;
}
.chart {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  margin: 0px;
}
</style>