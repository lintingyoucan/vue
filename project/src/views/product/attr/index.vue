<template>
  <div>
    <Category :screen="screen" />
    <el-card style="margin-top:10px;">
      <div v-show="screen == 0">
        <!-- 如果三级标签存在，那么可以添加属性，否则禁用 -->
        <el-button type="primary" icon="Plus" :disabled="categoryStore.c3Id ? false : true"
          @click="addAttr" v-has="`btn.Attr.add`">添加属性</el-button>
        <el-table border style="margin-top: 10px;" :data="attrArr">
          <el-table-column type="index" label="序号" align="center" width="100px"></el-table-column>
          <el-table-column label="属性名称" width="200px" prop="attrName"></el-table-column>
          <el-table-column label="属性值名称">
            <template #="{ row, $index }">
              <el-tag type="primary" v-for="(item, index) in row.attrValueList" :key="item.id" style="margin: 5px;">{{
                item.valueName }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="属性操作" width="250px">
            <template #="{ row, $index }">
              <el-button icon="Edit" type="primary" @click="updateAttr(row)" v-has="`btn.Attr.update`"></el-button>
              <el-popconfirm :title="`您确定要删除${row.attrName}吗?`" @confirm="deleteAttr(row.id)" width="250px">
                <template #reference>
                  <el-button icon="Delete" type="primary" v-has="`btn.Attr.remove`"></el-button>
                </template>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div v-show="screen == 1">
        <el-form :inline="true">
          <el-form-item label="属性名称">
            <el-input placeholder="请输入属性名称" v-model="attrParams.attrName"></el-input>
          </el-form-item>
        </el-form>
        <el-button icon="Plus" type="primary" :disabled="attrParams.attrName ? false : true"
          @click="addAttrValue">添加属性值</el-button>
        <el-button type="primary" @click="cancel">取消</el-button>
        <el-table style="margin: 10px 0;" border :data="attrParams.attrValueList">
          <el-table-column label="序号" type="index" width="100px" align="center"></el-table-column>
          <el-table-column label="属性值">
            <template #="{ row, $index }">
              <!-- ref作为属性，可以通过函数或字符串获取组件实例 -->
              <el-input :ref="(vc) => inputArr[$index] = vc" v-if="row.flag" v-model="row.valueName" placeholder="请输入属性值"
                @blur="toLook(row, $index)"></el-input>
              <div v-else @click="toEdit(row, $index)">{{ row.valueName }}</div>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="250px">
            <template #="{ row, $index }">
              <el-button icon="Delete" type="primary" @click="attrParams.attrValueList.splice($index, 1)"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" @click="save" :disabled="attrParams.attrValueList.length == 0 ? true : false">保存</el-button>
        <el-button type="primary" @click="cancel">取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
// 引入仓库
import useCategoryStore from '@/store/modules/category'
import { reqAtr, reqAddOrUpdateAttr, reqDeleteAttr } from '@/api/product/attr/index'
import { watch, ref, reactive, nextTick, onBeforeUnmount } from 'vue'
import { ElMessage } from 'element-plus';
let categoryStore = useCategoryStore();
let attrArr = ref([])
// 控制卡片显示属性值还是修改或添加属性，screen=0,显示属性值，screen=1,显示修改/添加属性
let screen = ref(0)
watch(() => categoryStore.c3Id, () => {
  //  清空上一次查询的数据
  attrArr.value = []
  // 如果c3Id发生改变，并且值不为空，发送请求
  if (!categoryStore.c3Id) return
  getArr()

})
const getArr = async () => {
  let result = await reqAtr(categoryStore.c1Id, categoryStore.c2Id, categoryStore.c3Id)
  if (result.code == 200) {
    attrArr.value = result.data
  }
}
// 发送参数
let attrParams = reactive({
  attrName: "",  // 属性名
  attrValueList: [], // 属性值数组
  categoryId: "", //分类id
  categoryLevel: 3
})
const addAttr = () => {
  // 每次收集数据前先清空
  Object.assign(attrParams, {
    attrName: "",  // 属性名
    attrValueList: [], // 属性值数组
    categoryId: "", //分类id
    categoryLevel: 3
  })
  screen.value = 1
  // 将category3Id与attrParams.categoryId绑定
  attrParams.categoryId = categoryStore.c3Id
}
const updateAttr = (row) => {
  screen.value = 1
  // 可以看到table的数据和attrParams绑定，因此将想要修改的行的数据赋值给table，点击修改就可以看到对应数据
  // 使用ES6语法将一个对象赋值给另一个对象
  // Object.assign(attrParams,row) 需要注意这种写法会发生浅拷贝问题，即两个都指向同一个对象，比如我选择新添加属性值，但最后取消操作，不选择保存，但是这个添加的属性值不会消失，还是会被赋值
  // 为了解决这个问题，我们采用深拷贝，用json.parse(JSON.stringfy)
  Object.assign(attrParams, JSON.parse(JSON.stringify(row)))
}
const cancel = () => {
  screen.value = 0
}
const addAttrValue = () => {
  // 向attrParams.attrValueList添加valueName
  attrParams.attrValueList.push({
    valueName: '',
    flag: true   // 控制属性值的查看和编辑模式
  })
  // 响应式数据渲染需要时间，通过nextTick获取更新后的组件，再进行聚焦操作,对最后（即最新添加的元素）自动聚焦
  nextTick(() => {
    inputArr.value[attrParams.attrValueList.length - 1].focus()
  })
}
const save = () => {
  addOrUpdateAttr()
}
const addOrUpdateAttr = async () => {
  const result = await reqAddOrUpdateAttr(attrParams)
  if (result.code == 200) {
    ElMessage({
      type: "success",
      message: attrParams.id ? "修改成功" : "添加成功"  // 为什么能获取attrParams.id，请求体中并没有id?原因在于当我选择这一属性进行修改时，由于table和attrParams绑定，为了在修改页面显示出数据，这一行row会将值赋给attrParams,row包含id,因此可以拿到id
    })
    // 重新请求获取新属性
    getArr()
    // 返回属性值页
    screen.value = 0
  } else if (result.code == 409) {
    ElMessage({
      type: "error",
      message: attrParams.id ? `${result.message}，修改失败` : `${result.message}，添加失败`
    })
  }
  else {
    ElMessage({
      type: "error",
      message: attrParams.id ? "修改失败" : "添加失败"
    })
  }
}
// 用来接收输入属性值组件的实例数组，以便对el-input通过事件focus进行聚焦操作，使其在特定时刻聚焦：比如添加、点击时就自动聚焦
let inputArr = ref([])

// 失去焦点
const toLook = (row, $index) => {
  // 非法情况
  if (row.valueName.trim() == '') {
    console.log($index)
    // 把属性值为空这一行清除掉
    attrParams.attrValueList.splice($index, 1)
    ElMessage({
      type: "error",
      message: "属性值不能为空"
    })
    return
  }
  // 非法情况
  const repeat = attrParams.attrValueList.find(item => {
    if (item != row) { // 跳过当前行（即用户正在编辑的这一行）,否则找到自己，就一定会重复
      return item.valueName === row.valueName
    }
  })
  if (repeat) {
    // 把属性值为空这一行清除掉
    attrParams.attrValueList.splice($index, 1)
    ElMessage({
      type: "error",
      message: "属性值不能重复"
    })
    return
  }
  row.flag = false
}
const toEdit = (row, $index) => {
  row.flag = true
  // 响应式数据渲染需要时间，通过nextTick获取更新后的组件，再进行聚焦操作
  nextTick(() => {
    // 调用el-input的focus方法来聚焦
    inputArr.value[$index].focus()
  })
}
const deleteAttr = async(id) => {
  const result = await reqDeleteAttr(id)
  if(result.code == 200){
    ElMessage({
      type:"success",
      message:"删除成功"
    })
    // 重新发送请求，获取属性和属性值
    getArr()
  } else{
    ElMessage({
      type:"error",
      message:"删除失败"
    })
  }

}
// 切换组件时，要销毁组件仓库中的数据
onBeforeUnmount(()=>{
  // 仓库有一个reset方法，可以清空仓库中所有数据
  categoryStore.$reset()
})
</script>

<style scoped></style>