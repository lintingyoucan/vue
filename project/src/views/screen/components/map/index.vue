<template>
    <div class="mapBox">
        <div class="chart" ref="chart"></div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';
// 引入地图数据json
// 地址：https://datav.aliyun.com/portal/school/atlas/area_selector
import chinajson from '../../china.json'
// 获取地图实例
let chart = ref()

// 注册map
echarts.registerMap('china', { geoJSON: chinajson });
onMounted(() => {
    let mychart = echarts.init(chart.value);
    // 将 SVG 代码转换为 Data URL
    const svgCode = `<svg t="1752918569219" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14561" width="200" height="200"><path d="M533.2992 631.5008c0 1.4336-0.3072 11.3664-1.024 29.9008-0.7168 18.5344-1.024 37.6832-1.024 57.5488 0 19.968-1.024 42.7008-3.1744 68.3008-2.1504 25.6-4.608 46.1824-7.4752 61.8496-1.4336 2.8672-1.4336 5.0176 0 6.3488 1.4336 1.4336 3.1744 3.1744 5.3248 5.3248 2.1504 2.1504 3.8912 3.1744 5.3248 3.1744L640 934.4l6.3488 17.1008 2.1504 38.4L503.5008 955.6992 477.9008 1024l-25.6-68.3008L307.2 989.9008l2.1504-38.4c1.4336-8.4992 2.8672-14.2336 4.3008-17.1008l110.8992-70.4512c1.4336 0 3.584-1.3312 6.3488-4.3008C435.2 856.8832 436.6336 853.2992 435.2 849.1008 432.3328 833.4336 429.8752 812.7488 427.7248 787.1488c-2.1504-25.6-3.584-48.3328-4.3008-68.3008-0.7168-19.8656-1.024-39.1168-1.024-57.5488 0-18.432 0-28.4672 0-29.9008 0-4.3008-1.4336-7.168-4.3008-8.4992C415.3344 621.568 412.4672 620.7488 409.6 620.7488L405.2992 620.7488 273.1008 648.4992 0 753.0496C0 735.9488 0.7168 723.5584 2.1504 715.776c1.4336-7.7824 3.1744-13.5168 5.3248-17.1008C9.6256 695.1936 13.5168 691.2 19.1488 686.8992L409.6 407.4496C416.6656 317.8496 420.2496 237.568 420.2496 166.4c0-29.9008 6.0416-65.024 18.1248-105.5744S463.6672 0 477.9008 0c14.2336 0 27.3408 19.968 39.424 59.6992C529.408 99.5328 535.4496 135.168 535.4496 166.4c0 34.0992 1.024 71.168 3.1744 110.8992C540.7744 317.1328 542.6176 349.184 544.0512 373.3504l2.1504 34.0992 390.4512 279.4496c12.8 9.9328 19.1488 32.0512 19.1488 66.1504L682.7008 648.4992 550.4 620.7488C539.0336 617.984 533.2992 621.568 533.2992 631.5008z" p-id="14562" fill="#ffffff"></path></svg>`;

    // 编码 SVG 并创建 Data URL
    const encodedSvg = encodeURIComponent(svgCode);
    const symbolUrl = `image://data:image/svg+xml;utf8,${encodedSvg}`;
    mychart.setOption({
        geo: [{
            map: 'china',
            roam: true, // 是否开启鼠标缩放和平移漫游
            zoom: 1, // 缩放比例
            left: 0,
            right: 0,
            top: 50,
            bottom: 0,
            label: {
                show: true,
                fontSize: 14,
                color: 'white'
            },
            itemStyle: {
                areaColor: {
                    type: 'linear',
                    x: 0,      // 渐变起始点x坐标（0-1）
                    y: 1,      // 渐变起始点y坐标
                    x2: 0,     // 渐变结束点x坐标
                    y2: 0,     // 渐变结束点y坐标
                    colorStops: [{
                        offset: 0, color: 'rgb(1,32,70)' // 起始颜色
                    }, {
                        offset: 1, color: 'rgb(4,64,150)' // 结束颜色
                    }]
                },
                // borderColor: '#111', // 边界线颜色
                borderColor: 'rgb(47,166,214)',
                borderWidth: 1,
                shadowColor: 'rgba(47,166,214, 0.5)', // 阴影颜色
                shadowBlur: 50
            },
            emphasis: {
                itemStyle: {
                    color: 'rgb(41,143,186)'
                },
                label: {
                    color: 'white'
                }
            }

        }],
        series: [
            {
                type: 'lines',
                coordinateSystem: 'geo',
                data: [
                    {
                        coords: [
                            [87.617733,43.792818],  // 起点
                            [104.065735, 30.659462]   // 终点
                        ],
                        lineStyle: {
                            // 可在此设置线条样式
                            color: 'rgb(47,166,214)',
                            width: 1,
                            curveness: 0.2
                        }
                    }
                ],
                effect: {
                    show: true,
                    period: 10,
                    symbol: symbolUrl, // 使用 SVG 矢量图
                    symbolSize: 20,    // 符号大小
                }
            },
            {
                type: 'lines',
                coordinateSystem: 'geo',
                data: [
                    {
                        coords: [
                            [104.065735, 30.659462],  // 起点
                            [87.617733,43.792818]   // 终点
                        ],
                        lineStyle: {
                            // 可在此设置线条样式
                            color: 'rgb(47,166,214)',
                            width: 1,
                            curveness: 0.2
                        }
                    }
                ],
                effect: {
                    show: true,
                    period: 10,
                    symbol: symbolUrl, // 使用 SVG 矢量图
                    symbolSize: 20,    // 符号大小
                }
            }
        ],
        grid: [{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }]
    });
})
</script>
<style scoped>
.mapBox {
    width: 100%;
    height: 100%;
    /* background-color: antiquewhite; */
    margin-top: 45px;
}

.chart {
    width: 100%;
    height: 100%;
}
</style>