<template>
    <el-card>
        <el-table border style="margin-bottom: 10px;" :data="skuData">
            <el-table-column label="序号" type="index" align="center" width="100px"></el-table-column>
            <el-table-column label="名称" show-overflow-tooltip width="250px" prop="skuName"></el-table-column>
            <el-table-column label="描述" show-overflow-tooltip width="250px" prop="skuDesc"></el-table-column>
            <el-table-column label="图片" width="250px">
                <template #="{ row, $index }">
                    <img :src="row.skuDefaultImg" style="width: 100px;height: 100px;">
                </template>
            </el-table-column>
            <el-table-column label="重量" width="250px" prop="weight"></el-table-column>
            <el-table-column label="价格" width="250px" prop="price"></el-table-column>
            <el-table-column label="操作" fixed="right" width="250px">
                <template #="{ row, $index }">
                    <el-button :icon="row.isSale == 1 ? 'Bottom' : 'Top'" type="primary"
                        @click="updateSale(row)" v-has="`btn.Sku.onStatus`"></el-button>
                    <el-button icon="Edit" type="primary" @click="updateSku" v-has="`btn.Sku.update`"></el-button>
                    <el-button icon="InfoFilled" type="primary" @click="findSku(row)" v-has="`btn.Sku.details`"></el-button>
                    <el-popconfirm :title="`您确定要删除${row.skuName}吗？`" width="250px" @confirm="deleteSku(row)">
                        <template #reference>
                            <el-button icon="Delete" type="primary" v-has="`btn.Sku.remove`"></el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[10, 15, 20, 30]"
            size="default" background layout="prev, pager, next, jumper, ->, sizes, total" :total="total"
            :pager-count="5" @current-change="getSku" @size-change="sizeChange" />
        <el-drawer v-model="drawer" direction="rtl">
            <template #header>
                <h4>查看详情</h4>
            </template>
            <template #default>
                <el-row style="margin: 10px 0;">
                    <el-col :span="6">名称</el-col>
                    <el-col :span="18">{{ skuInfo.skuName }}</el-col>
                </el-row>
                <el-row style="margin: 10px 0;">
                    <el-col :span="6">描述</el-col>
                    <el-col :span="18">{{ skuInfo.skuDesc }}</el-col>
                </el-row>
                <el-row style="margin: 10px 0;">
                    <el-col :span="6">价格</el-col>
                    <el-col :span="18">{{ skuInfo.price }}</el-col>
                </el-row>
                <el-row style="margin: 10px 0;">
                    <el-col :span="6">平台属性</el-col>
                    <el-col :span="18">
                        <template #default>
                            <el-tag type="primary" style="margin: 5px;"
                                v-for="(item, index) in skuInfo.skuAttrValueList" :key="item.valueId">{{ item.valueName
                                }}</el-tag>
                        </template>
                    </el-col>
                </el-row>
                <el-row style="margin: 10px 0;">
                    <el-col :span="6">销售属性</el-col>
                    <el-col :span="18">
                        <template #default>
                            <el-tag type="primary" style="margin: 5px;"
                                v-for="(item, index) in skuInfo.skuSaleAttrValueList" :key="item.saleAttrValueId">{{
                                    item.saleAttrValueName }}</el-tag>
                        </template>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">商品图片</el-col>
                    <el-col :span="18">
                        <template #default>
                            <el-carousel :interval="4000" type="card" height="200px">
                                <el-carousel-item v-for="item in skuInfo.skuImageList" :key="item.id">
                                    <img :src="item.imgUrl" :alt="item.imgName">
                                </el-carousel-item>
                            </el-carousel>
                        </template>
                    </el-col>
                </el-row>
            </template>
        </el-drawer>
    </el-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { reqSku, reqOnSale, reqCancelSale, reqSkuInfo, reqDeleteSku } from '@/api/product/sku'
import { ElMessage } from 'element-plus'
// 当前页码
const pageNo = ref(1)
// 一页有多少条数据
const limit = ref(10)
// 总共多少条数据
let total = ref(0)
// 控制是否显示抽屉
let drawer = ref(false)
onMounted(() => {
    getSku()
})
// 表格的sku数据
let skuData = ref([])
// 商品详情
let skuInfo = ref([])
const getSku = async (pager = 1) => {
    pageNo.value = pager
    const result = await reqSku(pageNo.value, limit.value)
    if (result.code == 200) {
        skuData.value = result.data.records
        total.value = result.data.total
    }
}
const sizeChange = () => {
    getSku()
}
// 商品是否上架或下架
const updateSale = async (row) => {
    // 如果isSale == 1，说明当前是由上架转为下架
    if (row.isSale == 1) {
        let result = await reqCancelSale(row.id)
        if (result.code == 200) {
            ElMessage({
                type: "success",
                message: "下架成功"
            })
            // 重新发送请求
            getSku(pageNo.value)
        } else {
            ElMessage({
                type: "error",
                message: "`下架失败"
            })
        }
    } else {
        let result = await reqOnSale(row.id)
        if (result.code == 200) {
            ElMessage({
                type: "success",
                message: "上架成功"
            })
            // 重新发送请求
            getSku(pageNo.value)
        } else {
            ElMessage({
                type: "error",
                message: "上架失败"
            })
        }
    }
}
// 更新sku
const updateSku = () => {
    ElMessage({
        type: "success",
        message: "该功能正在开发中..."
    })
}
// 查看详情
const findSku = async (row) => {
    drawer.value = true
    let result = await reqSkuInfo(row.id)
    if (result.code == 200) {
        skuInfo.value = result.data
    }
}
// 删除sku
const deleteSku = async (row) => {
    let result = await reqDeleteSku(row.id)
    if (result.code == 200) {
        ElMessage({
            type: "success",
            message: "删除成功"
        })
        // 重新获取请求，是在当前页，还是当前页-1
        getSku(skuData.value.length ? pageNo.value : pageNo.value - 1)
    } else {
        ElMessage({
            type: "error",
            message: "删除失败"
        })
    }
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>