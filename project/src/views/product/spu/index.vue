<template>
    <Category :screen="screen" />
    <el-card style="margin-top:10px;">
        <div v-show="screen == 0">
            <el-button icon="Plus" type="primary" :disabled="categoryStore.c3Id ? false : true"
                @click="addSPU" v-has="`btn.Spu.add`">添加SPU</el-button>
            <el-table border style="margin: 10px 0px;" :data="records">
                <el-table-column label="序号" type="index" align="center" width="100px"></el-table-column>
                <el-table-column label="SPU名称" width="200px" prop="spuName"></el-table-column>
                <el-table-column label="SPU描述" prop="description" show-overflow-tooltip></el-table-column>
                <el-table-column label="操作" width="250px">
                    <template #="{ row, $index }">
                        <el-button icon="Plus" type="primary" title="添加SKU" @click="addSKU(row)" v-has="`btn.Sku.add`"></el-button>
                        <el-button icon="Edit" type="primary" title="编辑SPU" @click="updateSPU(row)" v-has="`btn.Spu.update`"></el-button>
                        <el-button icon="View" type="primary" title="查看SPU列表" @click="findSku(row)" v-has="`btn.Sku.Search`"></el-button>
                        <el-popconfirm :title="`您确定要删除${row.spuName}吗?`" width="200px" @confirm="deleteSpu(row)">
                            <template #reference>
                                <el-button icon="Delete" type="primary" title="删除SPU" v-has="`btn.Spu.remove`"></el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
            <el-dialog v-model="show" title="SKU列表">
                <el-table border :data="skuArr">
                    <el-table-column label="sku名字" prop="skuName"></el-table-column>
                    <el-table-column label="sku价格" prop="price"></el-table-column>
                    <el-table-column label="sku重量" prop="weight"></el-table-column>
                    <el-table-column label="sku图片">
                        <template #="{ row, $index }">
                            <img :src="row.skuDefaultImg" style="width: 100px;height: 100px;">
                        </template>
                    </el-table-column>
                </el-table>
            </el-dialog>
            <!-- current-page: 当前页码
                page-size：每页显示条目个数
                page-sizes：每页显示个数选择器的选项设置
                size：	分页大小
                background:是否为分页按钮添加背景色
                layout 组件布局，子组件名用逗号分隔
                pager-count 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
                size-change	    page-size 改变时触发
                current-change	current-page 改变时触发
            -->
            <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]"
                size="default" background layout="prev, pager, next, jumper, ->, sizes, total" :total="total"
                :pager-count="5" @current-change="getHasSpu" @size-change="sizeChange" />
        </div>
        <SPUForm ref="spu" v-show="screen == 1" @changeScene="changeScene"></SPUForm>
        <SKUForm ref="sku" v-show="screen == 2" @changeScene="changeScene"></SKUForm>
    </el-card>
</template>

<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import { reqHasSpu, reqSkuInfo, reqRemoveSpu } from '@/api/product/spu'
import useCategoryStore from '@/store/modules/category'
import SKUForm from './skuForm/index.vue'
import SPUForm from './spuForm/index.vue'
import { ElMessage } from 'element-plus'
let categoryStore = useCategoryStore()
let screen = ref(0) // screen=1,切换spu,screen=2,切换sku
let pageNo = ref(1)
let limit = ref(3)
let total = ref(0)
// 接收spu数组
let records = ref([])
// 监听id3变化
watch(() => categoryStore.c3Id, () => {
    // 如果id3不为空，发送请求
    // 先清空数据
    records.value = []
    if (!categoryStore.c3Id) return
    getHasSpu()
})
const getHasSpu = async (pager = 1) => {
    pageNo.value = pager
    let result = await reqHasSpu(pageNo.value, limit.value, categoryStore.c3Id)
    if (result.code == 200) {
        records.value = result.data.records
        total.value = result.data.total
    }
}
// 页码归1
const sizeChange = () => {
    getHasSpu()
}
const addSPU = () => {
    screen.value = 1
    spu.value.initAddSpu({ category3Id: categoryStore.c3Id })
}
// 获取子组件实例(就可以获取子组件身上暴露的方法)，将每一行的数据传给子组件
let spu = ref()
const updateSPU = (row) => {
    screen.value = 1
    spu.value.initHasSpuData(row)
}
// 获取子组件实例
let sku = ref()
const addSKU = (row) => {
    screen.value = 2
    // 调用sku组件实例的方法来初始化数据
    sku.value.initSkuData(categoryStore.c1Id, categoryStore.c2Id, row)
}
// 父组件接收子组件绑定的自定义事件changeScene和参数num
const changeScene = (obj) => {
    screen.value = obj.flag
    if (obj.params == 'update') {
        // 回到当前页
        getHasSpu(pageNo.value)
    }
    else {
        // 回归第一页
        getHasSpu()
    }
}
let skuArr = ref([])
let show = ref(false) //是否显示对话框
// 获取某个spu对应的sku列表
const findSku = async (row) => {
    let result = await reqSkuInfo(row.id)
    if (result.code == 200) {
        skuArr.value = result.data
        show.value = true
    } else {
        ElMessage({
            type: "error",
            message: "操作失败"
        })
    }
}
// 删除spu
const deleteSpu = async (row) => {
    let result = await reqRemoveSpu(row.id)
    if (result.code == 200) {
        ElMessage({
            type: "success",
            message: "删除成功"
        })
        // 重新获取spu数据，判断是在当前页，还是需要当前页-1
        getHasSpu(records.value.length ? pageNo.value : pageNo.value - 1)

    } else {
        ElMessage({
            type: "error",
            message: "删除失败"
        })
    }
}
// 组件要销毁前需要将仓库数据销毁
onBeforeUnmount(()=>{
    categoryStore.$reset()
})
</script>



<style scoped></style>