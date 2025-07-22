<template>
    <el-card>
    <el-form :inline="true">
      <el-form-item label="一级标题">
        <!-- v-model 将选择的标签收集 
         change事件  一旦选择框发生改变就触发事件
         -->
        <el-select v-model="categoryStore.c1Id" @change="handler1" :disabled="screen==0?false:true">
          <el-option v-for="(item,index) in categoryStore.c1Attr" :label="item.name" :key="item.id" :value="item.id"/>
        </el-select>
      </el-form-item>
      <el-form-item label="二级标题">
        <el-select v-model="categoryStore.c2Id" @change="handler2" :disabled="screen==0?false:true">
          <el-option v-for="(item,index) in categoryStore.c2Attr" :label="item.name" :key="item.id" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="三级标题">
        <el-select v-model="categoryStore.c3Id" :disabled="screen==0?false:true">
          <el-option v-for="(item,index) in categoryStore.c3Attr" :label="item.name" :key="item.id" :value="item.id" />
        </el-select>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
// 引入仓库
import useCategoryStore from '@/store/modules/category';
import { onMounted } from 'vue';
let categoryStore = useCategoryStore();
// 一挂载就发送请求
onMounted(()=>{
  getC1();
})
const getC1 = () => {
  categoryStore.getC1();
}
const handler1 = () => {
  // 先清空之前自己选择分类一后，选择的分类二和分类三,分类二数组不用清空，当重新选择分类一时，分类二数组会改变
  categoryStore.c2Id = ''
  categoryStore.c3Attr = []
  categoryStore.c3Id = ''
  categoryStore.getC2();
}
const handler2 = () => {
  // 先清空之前自己选择分类二后，选择的分类三,分类三数组不用清空，当重新选择分类二时，分类三数组会改变
  categoryStore.c3Id = ''
  categoryStore.getC3();
}
// 接收父组件传过来参数
defineProps(['screen'])
</script>

<style scoped>
.el-select {
  --el-select-width: 220px;
}
</style>