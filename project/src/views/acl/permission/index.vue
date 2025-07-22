<template>
  <!-- row-key 以树形式渲染 -->
  <el-table border :data="permissionArr" row-key="id">
    <el-table-column label="名称" prop="name"></el-table-column>
    <el-table-column label="权限值" prop="code"></el-table-column>
    <el-table-column label="修改时间" prop="updateTime"></el-table-column>
    <el-table-column label="操作">
      <template #="{ row, $index }">
        <el-button type="primary" :disabled="row.level == 4 ? true : false" @click="add(row)" v-has="`btn.Permission.add`">{{ row.level == 3 ?
          "添加功能" : "添加菜单" }}</el-button>
        <el-button type="primary" :disabled="row.level == 1 ? true : false" @click="update(row)" v-has="`btn.Permission.update`">编辑</el-button>
        <el-popconfirm :title="`您确定要删除${row.name}吗?`" @confirm="deleteMenu(row)" width="250px">
          <template #reference> 
            <el-button type="primary" :disabled="row.level == 1 ? true : false" v-has="`btn.Permission.remove`">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-model="dialogVisible" :title="menuParams.id ? '更新菜单' : '添加菜单'" width="500px" align-center>
    <el-form label-width="80px">
      <el-form-item label="名称">
        <el-input placeholder="请输入名称" v-model="menuParams.name"></el-input>
      </el-form-item>
      <el-form-item label="权限值">
        <el-input placeholder="请输入权限值" v-model="menuParams.code"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="save">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { reqAllPermission, reqAddOrUpdateMenu, reqDeleteMenu } from '@/api/acl/menu/index'
import { ElMessage } from 'element-plus'
// 存储菜单
let permissionArr = ref([])
// 控制对话框显示
let dialogVisible = ref(false)
// 存储菜单参数
let menuParams = reactive({
  "id": 0,
  "code": "",
  "level": 0,
  "name": "",
  "pid": 0
})
onMounted(() => {
  getPermission()
})
const getPermission = async () => {
  let result = await reqAllPermission()
  if (result.code == 200) {
    permissionArr.value = result.data
  }
}
const add = (row) => {
  // 清空数据
  Object.assign(menuParams, {
    "id": 0,
    "code": "",
    "level": 0,
    "name": "",
    "pid": 0
  })
  dialogVisible.value = true
  menuParams.level = row.level + 1
  menuParams.pid = row.id
}
const update = (row) => {
  dialogVisible.value = true
  Object.assign(menuParams, row)
}
const save = async () => {
  let result = await reqAddOrUpdateMenu(menuParams)
  if (result.code == 200) {
    ElMessage({
      type: "success",
      message: `${menuParams.id ? '修改成功' : '添加成功'}`
    })
    dialogVisible.value = false
    // 重新发送请去
    getPermission()
  } else {
    ElMessage({
      type: "error",
      message: `${menuParams.id ? '修改失败' : '添加失败'}`
    })
  }
}
const deleteMenu = async (row) => {
  let result = await reqDeleteMenu(row.id)
  if (result.code == 200) {
    ElMessage({
      type: "success",
      message: "删除成功"
    })
    // 重新发送请去
    getPermission()
  } else {
    ElMessage({
      type: "error",
      message: result.message
    })
  }
}
</script>

<style scoped></style>