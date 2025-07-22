<template>
  <el-form label-width="100px">
    <el-form-item label="sku名称">
      <el-input placeholder="sku名称" type="text" v-model="skuParams.skuName"></el-input>
    </el-form-item>
    <el-form-item label="价格(元)">
      <el-input type="number" placeholder="价格(元)" v-model="skuParams.price"></el-input>
    </el-form-item>
    <el-form-item label="重量(克)">
      <el-input type="number" placeholder="重量(克)" v-model="skuParams.weight"></el-input>
    </el-form-item>
    <el-form-item label="sku描述">
      <el-input type="textarea" placeholder="sku描述" v-model="skuParams.skuDesc"></el-input>
    </el-form-item>
    <el-form-item label="平台属性">
      <el-form :inline="true" label-width="100px">
        <el-form-item v-for="(item, index) in attrArr" :key="item.id" :label="item.attrName"
          style="margin-bottom: 10px">
          <el-select style="width: 200px;" v-model="item.attrIdAndValueId">
            <el-option v-for="(item1, index) in item.attrValueList" :key="item1.id" :label="item1.valueName"
              :value="`${item1.id}:${item1.valueName}`"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-form-item>
    <el-form-item label="销售属性">
      <el-form :inline="true">
        <el-form-item v-for="(item, index) in saleArr" :key="item.id" :label="item.saleAttrName">
          <el-select style="width: 200px;" v-model="item.saleIdAndValueId">
            <el-option v-for="(item1, index) in item.spuSaleAttrValueList" :key="item1.id"
              :label="item1.saleAttrValueName" :value="`${item1.id}:${item1.saleAttrValueName}`"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-form-item>
    <el-form-item label="图片名称">
      <!-- 这里获取table实例，以便在实例上使用toggleRowSelection方法 -->
      <el-table border :data="imgArr" ref="table">
        <el-table-column type="selection" align="center" width="100px"></el-table-column>
        <el-table-column label="图片">
          <template #="{ row, $index }">
            <img :src="row.imgUrl" style="width: 100px;height: 100px;">
          </template>
        </el-table-column>
        <el-table-column label="名称" prop="imgName"></el-table-column>
        <el-table-column label="操作">
          <template #="{ row, $index }">
            <el-button type="primary" size="small" @click="handler(row)">默认设置</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="save">保存</el-button>
      <el-button type="primary" @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { reqAtr } from '@/api/product/attr/index'
import { reqSpuHasSaleAttr, reqImageList } from '@/api/product/spu/index'
import { reqAddSku } from '@/api/product/spu/index';
import { ElMessage } from 'element-plus';
let $emit = defineEmits(['changeScene'])
const cancel = () => {
  $emit('changeScene', { flag: 0, params: '' })
}
let attrArr = ref([])
let saleArr = ref([])
let imgArr = ref([])
let table = ref() // image所在table组件实例
let skuParams = reactive({
  category3Id: "", // 三级分类id
  spuId: "",//已有的spu的ID
  tmId: "",//spu品牌(trademark)的id
  skuName: "",//sku名字
  price: "",//sku价格
  weight: "",//sku重量
  skuDesc: "",//sku描述
  skuAttrValueList: [],  //平台属性收集
  skuSaleAttrValueList: [], //销售属性
  skuDefaultImg: "", // sku图片地址
})
const initSkuData = async (c1Id, c2Id, spu) => {
  // 每次先清空数据
  Object.assign(skuParams, {
    category3Id: "", // 三级分类id
    spuId: "",//已有的spu的ID
    tmId: "",//spu品牌(trademark)的id
    skuName: "",//sku名字
    price: "",//sku价格
    weight: "",//sku重量
    skuDesc: "",//sku描述
    skuAttrValueList: [],  //平台属性收集
    skuSaleAttrValueList: [], //销售属性
    skuDefaultImg: "", // sku图片地址
  })
  skuParams.category3Id = spu.category3Id
  skuParams.spuId = spu.id
  skuParams.tmId = spu.tmId
  // 获取平台属性
  let result = await reqAtr(c1Id, c2Id, spu.category3Id)
  // 获取销售属性
  let result2 = await reqSpuHasSaleAttr(spu.id)
  // 获取sku图片
  let result3 = await reqImageList(spu.id)
  attrArr.value = result.data
  saleArr.value = result2.data
  imgArr.value = result3.data
}
// 暴露方法
defineExpose({ initSkuData })
const handler = (row) => {
  // 点击的时候，所有选择框都不选中
  imgArr.value.forEach(item => {
    table.value.toggleRowSelection(item, false)
  })
  // 只选择点击的选择框
  table.value.toggleRowSelection(row, true)
  skuParams.skuDefaultImg = row.imgUrl
}

const save = async () => {
  // 补充参数
  // reduce方法 prev：累积值（初始为空数组 []） next：当前遍历的数组元素
  skuParams.skuAttrValueList = attrArr.value.reduce((prev, next) => {
    if (next.attrIdAndValueId) {
      let [attrId, valueId] = next.attrIdAndValueId.split(':')
      prev.push({ attrId, valueId })
    }
    return prev
  }, [])
  skuParams.skuSaleAttrValueList = saleArr.value.reduce((prev, next) => {
    if (next.saleIdAndValueId) {
      let [saleAttrId, saleAttrValueId] = next.saleIdAndValueId.split(':')
      prev.push({ saleAttrId, saleAttrValueId })
    }
    return prev
  }, [])
  // 发送请求
  const result = await reqAddSku(skuParams);
  if (result.code == 200) {
    ElMessage({
      type: "success",
      message: "添加成功"
    })
    // 切换到screen=0
    $emit('changeScene', { flag: 0, params: '' })
  } else {
    ElMessage({
      type: "error",
      message: "添加失败，"`${result.message}`
    })
  }

}
</script>

<style scoped></style>