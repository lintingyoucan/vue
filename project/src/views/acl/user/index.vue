<template>
  <el-card style="height: 70px;">
    <el-form :inline="true" class="form">
      <el-form-item label="用户名:">
        <el-input placeholder="请输入用户名" v-model="keyword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search" :disabled="keyword.length?false:true">搜索</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card style="margin-top: 10px;">
    <el-button type="primary" @click="addUser" v-has="`btn.User.add`">添加</el-button>
    <el-button type="primary" @click="deleteBatchUser" :disabled="selectUser.length?false:true">批量删除</el-button>
    <el-table border style="margin: 10px 0;" :data="userArr" @selection-change="selectionChange">
      <el-table-column type="selection" align="center" width="100px"></el-table-column>
      <el-table-column type="index" align="center" label="#" width="100px"></el-table-column>
      <el-table-column align="center" label="id" width="100px" prop="id"></el-table-column>
      <el-table-column align="center" label="用户名字" prop="username" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="用户名称" prop="name" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="用户角色" prop="roleName" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="创建时间" prop="createTime" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="更新时间" prop="updateTime" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="操作" width="400px">
        <template #="{ row, $index }">
          <el-button icon="User" type="primary" @click="setRole(row)" v-has="`btn.User.AssignRole`">分配角色</el-button>
          <el-button icon="Edit" type="primary" @click="updateUser(row)" v-has="`btn.User.update`">编辑</el-button>
          <el-popconfirm :title="`您确定要删除${row.username}吗？`" @confirm="deleteUser(row)" width="200px">
            <template #reference>
              <el-button icon="Delete" type="primary" v-has="`btn.User.remove`">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 10, 15]" size="default"
      background layout="prev, pager, next, jumper, ->, sizes, total" :total="total" :pager-count="5"
      @current-change="getUser" @size-change="sizeChange" />
    <el-drawer v-model="drawer" direction="rtl">
      <template #header>
        <h4>{{ userParams.id ? "修改用户" : "添加用户" }}</h4>
      </template>
      <template #default>
        <el-form :model="userParams" :rules="rules" ref="formRef">
          <el-form-item label="用户姓名" prop="username">
            <el-input placeholder="请输入用户姓名" v-model="userParams.username"></el-input>
          </el-form-item>
          <el-form-item label="用户昵称" prop="name">
            <el-input placeholder="请输入用户昵称" v-model="userParams.name"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" prop="password" v-if="!userParams.id">
            <el-input placeholder="请输入用户密码" v-model="userParams.password"></el-input>
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="cancel">取消</el-button>
          <el-button type="primary" @click="save">确定</el-button>
        </div>
      </template>
    </el-drawer>
    <el-drawer v-model="drawer1" direction="rtl">
      <template #header>
        <h4>分配角色（职位）</h4>
      </template>
      <template #default>
        <el-form>
          <el-form-item label="用户姓名">
            <el-input v-model="userParams.username" disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="职位列表">
            <!-- model-value / v-model 选中项绑定值
                 indeterminate   设置不确定状态，仅负责样式控制
                 change  当绑定值变化时触发的事件
              -->
            <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate"
              @change="handleCheckAllChange">全选</el-checkbox>
            <!-- v-model 绑定值
                 change  当绑定值变化时触发的事件
                 value  选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）
                 label 选中状态的值，只有在绑定对象类型为 array 时有效。 如果没有 value， label则作为value使用
                 v-model 绑定的是userRole,value的绑定值如果是id,那么选择复选框时会把id给到userRole，因此value需要绑定role
              -->
            <el-checkbox-group v-model="userRole" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="role in allRole" :key="role.id" :label="role.roleName" :value="role">
                {{ role.roleName }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="drawer1 = false">取消</el-button>
          <el-button type="primary" @click="saveUserRole">确定</el-button>
        </div>
      </template>
    </el-drawer>
  </el-card>
</template>

<script setup>
import { ref, onMounted, reactive, nextTick } from 'vue'
import { reqAllUser, reqAddOrUpdateUser, reqAllRole, reqSetRole, reqDeleteUser, reqDeleteBatchUser } from '@/api/acl/user'
import { ElMessage } from 'element-plus'
import useLayoutSettingStore from '@/store/modules/setting'
// 获取表单实例
let formRef = ref()
// 当前页码
const pageNo = ref(1)
// 一页有多少条数据
const limit = ref(3)
// 总共多少条数据
let total = ref(0)
// 存储全部用户
let userArr = ref([])
// 控制抽屉显示
let drawer = ref(false)
let drawer1 = ref(false)
let userParams = reactive({
  username: '',
  name: '',
  password: ''
})
// 存储全部职位
let allRole = ref([])
// 存储用户职位
let userRole = ref([])
onMounted(() => {
  getUser()
})
const checkAll = ref(false)
const isIndeterminate = ref(true)
// 存储查询关键字
let keyword = ref('')
// 使用仓库来实现重置
let layoutSettingStore = useLayoutSettingStore()
const handleCheckAllChange = (val) => {
  // val 表示true或者false,true表示将所有的值都赋给选中的数组，否则将空数组赋给选中的数组
  userRole.value = val ? allRole.value : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value) => {
  // value表示选中的值 [ "Shanghai", "Beijing", "Guangzhou" ]
  const checkedCount = value.length
  checkAll.value = checkedCount === allRole.value.length
  // 如果小于，那么是true,如果是等于，那么是false
  isIndeterminate.value = checkedCount > 0 && checkedCount < allRole.value.length
}

const getUser = async (pager = 1) => {
  pageNo.value = pager
  let result = await reqAllUser(pageNo.value, limit.value, keyword.value)
  console.log(result)
  if (result.code == 200) {
    userArr.value = result.data.records
    total.value = result.data.total
  }
}
const sizeChange = () => {
  getUser()
}
const addUser = () => {
  drawer.value = true // 先显示出来然后才能清空，否则一直报错
  // 清空数据
  Object.assign(userParams, {
    id: 0,
    username: '',
    name: '',
    password: ''
  })
  // 清除错误提示信息,如果没有使用nextTick，可能会出现dom还没渲染，导致错误
  nextTick(() => {
    formRef.value.clearValidate('username')
    formRef.value.clearValidate('name')
    formRef.value.clearValidate('password')
  })
}
const updateUser = (row) => {
  drawer.value = true
  Object.assign(userParams, row)
  // 清除错误提示信息,如果没有使用nextTick，可能会出现dom还没渲染，导致错误
  nextTick(() => {
    formRef.value.clearValidate('username')
    formRef.value.clearValidate('name')
  })
}
const cancel = () => {
  drawer.value = false
}
const save = async () => {
  // //点击保存按钮的时候,务必需要保证表单全部符合条件在去发请求
  await formRef.value.validate()
  drawer.value = false
  let result = await reqAddOrUpdateUser(userParams)
  if (result.code == 200) {
    ElMessage({
      type: "success",
      message: userParams.id ? "修改成功" : "添加成功"
    })
    // 重新发送请求，由于下面触发了浏览器的自动刷新，数据都会回归第一页，因此，下面这行代码，无作用
    // getUser(userParams.id ? pageNo.value : 1)
    // 重新刷新浏览器?如果修改的是自己的账号，虽然表格的信息也会修改，但是右上角的用户信息不会修改,需要刷新浏览器重新登录
    window.location.reload()
  } else {
    ElMessage({
      type: "error",
      message: userParams.id ? "修改失败" : "添加失败"
    })
  }
}
const validatorUsername = (rule, value, callback) => {
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('用户名字至少五位'))
  }
}
const validatorName = (rule, value, callback) => {
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('用户昵称至少五位'))
  }
}
const validatorPassword = (rule, value, callback) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('用户密码至少六位'))
  }
}
const rules = {
  username: [{ required: true, trigger: 'blur', validator: validatorUsername }],
  name: [{ required: true, trigger: 'blur', validator: validatorName }],
  password: [{ required: true, trigger: 'blur', validator: validatorPassword }]
}
const setRole = async (row) => {
  Object.assign(userParams, row)
  let result = await reqAllRole(row.id)
  if (result.code == 200) {
    allRole.value = result.data.allRoleList
    userRole.value = result.data.assignRoles
    // 显示抽屉
    drawer1.value = true
  }
}
const saveUserRole = async () => {
  let data = {
    userId: userParams.id,
    roleIdList: userRole.value.map(item => item.id)
  }
  let result = await reqSetRole(data)
  if (result.code == 200) {
    ElMessage({
      type: "success",
      message: "操作成功"
    })
    // 重新发送请求
    getUser(pageNo.value)
  } else {
    ElMessage({
      type: "error",
      message: "操作失败"
    })
  }

}
const deleteUser = async (row) => {
  let result = await reqDeleteUser(row.id)
  if (result.code == 200) {
    ElMessage({
      type: "success",
      message: "删除成功"
    })
    // 重新发送请求
    getUser(userArr.value.length ? pageNo.value : pageNo.value - 1)
  }
  else {
    ElMessage({
      type: "error",
      message: "删除失败"
    })
  }
}
// 存储选中的user
let selectUser = ref([])
const selectionChange = (value) => {
  // value是每一行的对象
  selectUser.value = value
}
const deleteBatchUser = async () => {
  let selectUserIds = selectUser.value.map(item => item.id)
  let result = await reqDeleteBatchUser(selectUserIds)
  if (result.code == 200) {
    ElMessage({
      type: "success",
      message: "批量删除成功"
    })
    // 重新获取请求
    getUser(pageNo.value.length ? pageNo.value : pageNo.value - 1)
  } else {
    ElMessage({
      type: "error",
      message: result.message
    })
  }
}

const search = ()=>{
  getUser()
  // 清除数据
  keyword.value = ''
}
const reset = ()=>{
  // 和刷新按钮作用一致
  layoutSettingStore.refsh = !layoutSettingStore.refsh
}
</script>

<style scoped>
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>