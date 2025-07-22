<template>
    <div class="rankBox">
        <div class="rankTop">
            <p class="rankTitle">热门景区排行</p>
            <p class="rankBg"></p>
        </div>
        <div class="chart">
            <div class="chartTitle">
                <p class="rank">排名</p>
                <p class="visit">景区</p>
                <p class="num">预约数量</p>
                <p class="rank"></p>
            </div>
            <div class="content">
                <div class="contentRank">
                    <div class="ranks" v-for="item in ['No.1', 'No.2', 'No.3', 'No.4', 'No.5']" :key="item.id">{{ item
                        }}
                    </div>
                </div>
                <div class="contentName">
                    <div class="names" v-for="item in ['博物馆', '黄鹤楼', '大梅沙', '故宫', '黄山']" :key="item.id">{{ item }}</div>
                </div>
                <div class="contentChart">
                    <div ref="chart" class="charts"></div>
                </div>
                <div class="contentNum">
                    <div class="nums" v-for="item in ['800w', '600w', '500w', '400w', '300w']" :key="item.id">{{ item }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
let chart = ref()
onMounted(() => {
    const myChart = echarts.init(chart.value)
    const option = {
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'shadow'
        //     }
        // },
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
                data: [30, 40, 50, 60, 80],
                barWidth: 20,
                z: 100,
                itemStyle: {
                    color: params => {
                        const colors = ['rgb(137,128,235)', 'rgb(247,179,74)', 'rgb(80,200,231)', 'rgb(218,127,131)', 'rgb(10,134,244)'];
                        return colors[params.dataIndex];
                    },
                    borderRadius: 20
                },
                // 添加标签显示配置
                label: {
                    show: true, // 显示标签
                    position: 'inside', // 标签位置：内部
                    formatter: '{c}%', // 显示数据值 + %
                    color: '#fff', // 文本颜色
                    fontSize: 14, // 字体大小
                    fontWeight: 'bold', // 字体粗细
                    // 精确位置调整
                    offset: [0, 1.5]
                }
            }
            ,
            {
                type: 'bar',
                data: [100, 100, 100, 100, 100],
                barWidth: 20,
                //调整柱条位置
                barGap: '-100%',
                itemStyle: {
                    color: 'rgb(13,24,82)',
                    borderRadius: 20,
                    borderColor: 'rgb(40,92,199)', // 外轮廓颜色
                    borderWidth: 1,        // 外轮廓宽度
                }
            }
        ],
        grid: { //控制长度
            left: 10,
            top: 0,
            right: 0,
            bottom: 0
        }
    };
    myChart.setOption(option);
})
</script>
<style scoped>
.rankBox {
    width: 430px;
    height: 100%;
    margin-left: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: url('../../images/dataScreen-main-lb.png') no-repeat;
    background-size: 100% 100%;
}

.rankTop {
    width: 100%;
    height: 40px;
    margin-left: 10px;
    margin-top: 10px;
}

.rankTitle {
    font-size: 20px;
    color: white;
}

.rankBg {
    width: 68px;
    height: 7px;
    background: url('../../images/dataScreen-title.png') no-repeat;
    background-size: 100% 100%;
    margin-top: 10px;
}

.chart {
    width: 100%;
    height: calc(100% - 50px);
}

.chartTitle {
    width: 410px;
    height: 36px;
    background: url('../../images/rankingChart-bg.png');
    background-size: 100% 100%;
    margin-top: 30px;
    margin-left: 10px;
    display: flex;
    font-size: 20px;
    color: rgb(211, 160, 95);
    font-weight: bolder;
    align-items: center;

}

.chartTitle .rank {
    flex: 1;
    text-align: center;
}

.chartTitle .visit {
    flex: 1;
    text-align: center;
}

.chartTitle .num {
    flex: 2;
    text-align: center;
}

.content {
    width: calc(100% - 20px);
    height: calc(100% - 50px - 36px);
    /* background-color: antiquewhite; */
    margin: 10px 10px 0 10px;
    display: flex;
}

.contentRank {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contentName {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contentChart {
    width: 100%;
    height: 100%;
    flex: 2;
}

.contentNum {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ranks {
    flex: 1;
    width: 100%;
    height: 100%;
    background: url('../../images/dataScreen-warn-bg.png') no-repeat;
    background-size: 100% 100%;
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
}

.names {
    flex: 1;
    display: flex;
    align-items: center;
    color: white;
    font-size: 20px;
    justify-content: center;
}

.charts {
    width: 100%;
    height: 100%;
    flex: 1;
}

.nums {
    flex: 1;
    display: flex;
    align-items: center;
    color: white;
    font-size: 20px;
    justify-content: center;
}
</style>