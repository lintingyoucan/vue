<template>
    <div class="yearBox">
        <div class="yearTop">
            <p class="yearTitle">年度游客量对比</p>
            <p class="yearBg"></p>
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
    title: {
        show: true,
        text: '(人数)',
        textStyle: {
            fontSize: 14
        },
        top: 0,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: { show: false },
        data: [1, 2, 3, 4, 5, 6, 7]
    },
    yAxis: {
        splitLine: { show: false }
    },
    legend: {
        data: ['2023年', '2024年'],
        right: '5%',
        top: 0,
        textStyle: {
            fontSize: 14,
            color: 'white'
        },
        itemGap: 20,
        itemWidth: 20,
        itemHeight: 10,
        icon: 'rect',
        itemStyle: {
            borderWidth: 0,
            borderRadius: 0
        },
        // 关键修改：直接指定图例颜色
        formatter: function (name) {
            return name;
        }
    },
    series: [
        {
            name: '2024年',
            data: [120, 1020, 501, 1040, 105, 838, 100],
            type: 'line',
            smooth: true,
            // 关键修改1：设置折线颜色
            lineStyle: {
                color: 'rgb(117,96,55)' // 折线颜色
            },
            // 关键修改2：图例使用填充起始色
            itemStyle: {
                color: 'rgb(117,96,55)' // 图例颜色
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgb(117,96,55)' 
                    }, {
                        offset: 1, color: 'rgb(48,49,75)' 
                    }],
                    global: false
                }
            }
        },
        {
            name: '2023年',
            data: [800, 120, 900, 350, 1200, 500, 1500],
            type: 'line',
            smooth: true,
            // 关键修改1：设置折线颜色
            lineStyle: {
                color: 'rgb(2,76,176)' // 折线颜色
            },
            // 关键修改2：图例使用填充色
            itemStyle: {
                color: 'rgb(2,76,176)' // 图例颜色
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgb(2,76,176)' 
                    }, {
                        offset: 1, color: 'rgb(2,76,176)' 
                    }],
                    global: false
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
.yearBox {
    width: 430px;
    height: 100%;
    margin-left: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: url('../../images/dataScreen-main-lb.png') no-repeat;
    background-size: 100% 100%;
}

.yearTop {
    width: 100%;
    height: 40px;
    margin-left: 10px;
    margin-top: 10px;
}

.yearTitle {
    font-size: 20px;
    color: white;
}

.yearBg {
    width: 68px;
    height: 7px;
    background: url('../../images/dataScreen-title.png') no-repeat;
    background-size: 100% 100%;
    margin-top: 10px;
}

.chart {
    width: 100%;
    height: calc(100% - 60px);
    margin-top: 10px;
}
</style>