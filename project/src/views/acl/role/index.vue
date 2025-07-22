<template>
  <el-card style="height: 70px;margin-bottom: 10px;">
    <el-form :inline="true" class="form">
      <el-form-item label="职位名称">
        <el-input placeholder="请输入搜索职位名称" v-model="keyword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="keyword ? false : true" @click="search">搜索</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card>
    <el-button icon="Plus" type="primary" @click="addRole" v-has="`btn.Role.add`">添加职位</el-button>
    <el-table border style="margin: 10px 0;" :data="allRole">
      <el-table-column label="#" type="index" align="center" width="100px"></el-table-column>
      <el-table-column label="ID" align="center" width="100px" prop="id"></el-table-column>
      <el-table-column label="角色部门" align="center" width="200px" prop="roleName"></el-table-column>
      <el-table-column label="创建时间" align="center" prop="createTime" show-overflow-tooltip></el-table-column>
      <el-table-column label="更新时间" align="center" prop="updateTime" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" align="center" width="400px">
        <template #="{ row, $index }">
          <el-button type="primary" icon="User" @click="setPermission(row)" v-has="`btn.Role.assignAuth`">分配权限</el-button>
          <el-button type="primary" icon="Edit" @click="updateRole(row)" v-has="`btn.Role.update`">编辑</el-button>
          <el-popconfirm :title="`您确定要删除${row.roleName}吗`" width="250px" @confirm="deleteRole(row.id)">
            <template #reference>
              <el-button type="primary" icon="Delete" v-has="`btn.Role.remove`">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 10, 15]" size="default"
      background layout="prev, pager, next, jumper, ->, sizes, total" :total="total" :pager-count="5"
      @current-change="getRole" @size-change="sizeChange" />
    <el-dialog v-model="dialogVisible" :title="roleParams.id ? '修改职位' : '添加职位'" width="500" align-center>
      <el-form :model="roleParams" :rules="rules" ref="form">
        <el-form-item label="职位名称" prop="roleName">
          <el-input v-model="roleParams.roleName" placeholder="请输入职位名称"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="save">确定</el-button>
        </div>
      </template>
    </el-dialog>
    <el-drawer v-model="drawer" :direction="direction">
      <template #header>
        <h4>分配权限</h4>
      </template>
      <template #default>
        <!-- data 展示数据，要求数据是一个数组，即allMenu=[],数组里面再是对象
             show-checkbox  节点是否可被选择
             node-key  每个树节点用来作为唯一标识的属性，整棵树应该是唯一的	
             default-expanded-keys  默认展开的节点的 key 的数组
             default-checked-keys  默认勾选的节点的 key 的数组
             props  配置选项，具体看下表
          -->
        <el-tree ref="tree" style="max-width: 600px" :data="allMenuArr" show-checkbox node-key="id"
          :props="defaultProps" :default-checked-keys="selectMenuArr" />
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="drawer = flase">取消</el-button>
          <el-button type="primary" @click="savePermission">确定</el-button>
        </div>
      </template>
    </el-drawer>
  </el-card>
</template>

<script setup>
import { onMounted, ref, reactive, nextTick } from 'vue'
import { reqAllRoleList, reqAddOrUpdateRole, reqAllMenuList, reqSetPermission, reqRemoveRole } from '@/api/acl/role/index'
import useLayoutSettingStore from '@/store/modules/setting'
import { ElMessage } from 'element-plus'
import { ElMenuItem } from 'element-plus'
let pageNo = ref(1)
let limit = ref(3)
let total = ref(0)
// 存储关键词搜索
let keyword = ref('')
// 存储职位
let allRole = ref([])
// 存储仓库数据
let layoutSettingStore = useLayoutSettingStore()
// 控制对话框显示与否
let dialogVisible = ref(false)
// 存储职位参数
let roleParams = reactive({
  id: 0,
  roleName: ''
})
// 存储所有菜单
let allMenuArr = ref([])
// 用户拥有的菜单权限
let selectMenuArr = ref([])
// 控制抽屉显示
let drawer = ref(false)
// 获取表单实例
let form = ref()
// 获取tree实例
let tree = ref()
const getRole = async (pager = 1) => {
  pageNo.value = pager
  let result = await reqAllRoleList(pageNo.value, limit.value, keyword.value)
  if (result.code == 200) {
    allRole.value = result.data.records
    total.value = result.data.total
  }
}
onMounted(() => {
  getRole()
})
const sizeChange = () => {
  getRole()
}
const search = () => {
  getRole()
  // 清空输入框
  keyword.value = ''
}
const reset = () => {
  layoutSettingStore.refsh = !layoutSettingStore.refsh
}
const addRole = () => {
  dialogVisible.value = true
  // 每次添加前都先清空数据
  Object.assign(roleParams, {
    id: 0,
    roleName: ''
  })
  // 清空校验提示错误信息
  nextTick(() => {
    form.value.clearValidate('roleName')
  })
}
const updateRole = (row) => {
  dialogVisible.value = true
  Object.assign(roleParams, row)
  // 清空校验提示错误信息
  nextTick(() => {
    form.value.clearValidate('roleName')
  })
}
const save = async () => {
  // 先校验表单
  await form.value.validate()
  // 发送请求
  let result = await reqAddOrUpdateRole(roleParams)
  if (result.code == 200) {
    ElMessage({
      type: "success",
      message: roleParams.id ? "修改成功" : "添加成功"
    })
    // 重新发送请求获取新数据
    getRole(roleParams.id ? pageNo.value : 1)
  } else {
    ElMessage({
      type: "error",
      message: roleParams.id ? "修改失败" : "添加失败"
    })
  }
  // 关闭对话框
  dialogVisible.value = false
}
const validatorRoleName = (rule,value, callback) => {
  if (value.trim().length >= 2 ) {
    callback()
  } else {
    callback(new Error('职位名称至少两位'))
  }
}
const rules = {
  roleName: [{ required: true, trigger: "blur", validator: validatorRoleName }],
}
const setPermission = async (row) => {
  // 显示抽屉
  drawer.value = true
  Object.assign(roleParams, row)
  let result = await reqAllMenuList(roleParams.id)
  if (result.code == 200) {
    allMenuArr.value = result.data
    selectMenuArr.value = filterArr(allMenuArr.value, [])
  }
}
const filterArr = (array, initArr) => {
  array.forEach(item => {
    if (item.isSelected && item.level == 4) {
      initArr.push(item.id)
    }
    if (item.children && item.children.length > 0) {
      filterArr(item.children, initArr)
    }
  });
  return initArr
}
const savePermission = async () => {
  drawer.value = false
  let roleId = roleParams.id
  // 选中节点id
  let arr = tree.value.getCheckedKeys()
  // 半选节点id
  let arr1 = tree.value.getHalfCheckedKeys()
  // concat合并数组[arr,arr1]
  let permissionId = arr.concat(arr1)
  let result = await reqSetPermission(roleId, permissionId)
  if (result.code == 200) {
    ElMessage({
      type: "success",
      message: "分配成功"
    })
    // 浏览器强制刷新，因为登录用户可能权限发生更改
    window.location.reload()
  } else {
    ElMessage({
      type: "error",
      message: "分配失败"
    })
  }
}
const defaultProps = {
  children: 'children', // 对应子节点
  label: 'name', // 对应显示的内容
}
const deleteRole = async (roleId) => {
  let result = await reqRemoveRole(roleId)
  if (result.code == 200) {
    ElMessage({
      type: "success",
      message: "删除成功"
    })
    // 重新发送请求
    getRole(allRole.value.length ? pageNo.value : pageNo.value - 1)
  } else{
    ElMessage({
      type:"error",
      message:"删除失败"
    })
  }
}
</script>

<style scoped>
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>