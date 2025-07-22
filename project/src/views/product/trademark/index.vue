<template>
    <div>
        <el-card class="box-card">
            <el-button type="primary" icon="Plus" size="default" @click="addTrademark" v-has="`btn.Trademark.add`">添加品牌</el-button>
            <el-table border style="margin:10px 0px;" :data="trademarkArr">
                <el-table-column label="序号" align="center" width="80px" type="index" />
                <!--  prop 的元素由div包裹，如果展示的元素，不希望被div包括，使用插槽 -->
                <el-table-column label="品牌名称" prop="tmName"></el-table-column>
                <el-table-column label="品牌LOGO">
                    <!-- 使用插槽，展示图片 -->
                    <template #="{ row, $index }">
                        <img :src="row.logoUrl" alt="没有图片" width="100px" height="100px">
                    </template>
                </el-table-column>
                <el-table-column label="品牌操作">
                    <template #="{ row, $index }">
                        <el-button icon="Edit" size="small" type="primary" @click="updateTrademark(row)" v-has="`btn.Trademark.update`"></el-button>
                        <el-popconfirm :title="`您确定要删除${row.tmName}吗？`" icon="Delete" width="250px" @confirm="deleteTrademark(row.id)">
                            <template #reference>
                                <el-button icon="Delete" size="small" type="primary" v-has="`btn.Trademark.remove`"></el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
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
                :pager-count="5" @current-change="getHasTradeMark" @size-change="sizeChange" />
        </el-card>
    </div>
    <div>
        <!-- model-value / v-model	是否显示 Dialog
         title	Dialog 对话框 Dialog 的标题
         -->
        <el-dialog v-model="dialogFormVisible" :title="trademarkParams.id ? '修改品牌' : '添加品牌'" width="500px">
            <el-form style="width: 80%;" :model="trademarkParams" ref="formRef" :rules="rules">
                <el-form-item label="品牌名称" label-width="120px" prop="tmName">
                    <el-input placeholder="请输入品牌名称" v-model="trademarkParams.tmName" />
                </el-form-item>
                <el-form-item label="品牌LOGO" label-width="120px" prop="logoUrl">
                    <el-upload class="avatar-uploader" :http-request="uploadFile" :show-file-list="false"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="trademarkParams.logoUrl" :src="trademarkParams.logoUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="cancel">取消</el-button>
                    <el-button type="primary" @click="confirm">确定</el-button>
                </div>
            </template>
        </el-dialog>
    </div>

</template>

<script setup>
import { ref, reactive, nextTick } from 'vue'
import { onMounted } from 'vue'
import { reqHasTradeMark, reqUploadFile, reqAddOrUpdateTradeMark, reqDeleteTradeMark } from '@/api/product/trademark'
import { ElMessage } from 'element-plus'
// 当前页码
const pageNo = ref(1)
// 一页有多少条数据
const limit = ref(3)
// 总共多少条数据
let total = ref(0)
// 存储已有品牌数据
let trademarkArr = ref([])
// 获取el-form组件实例
let formRef = ref()
// 封装一个函数：获取数据
const getHasTradeMark = async (pager = 1) => {
    pageNo.value = pager
    try {
        const result = await reqHasTradeMark(pageNo.value, limit.value)
        if (result.code === 200) {
            total.value = result.data.total
            trademarkArr.value = result.data.records
        } else if (result.code === 201) {
            console.error('token验证失败')
        }
    } catch (error) {
        console.error('请求失败:', error)
    }

}
// 挂载时就调用这个函数
onMounted(() => {
    getHasTradeMark()
}
)
// 页码改变时调用，如果不是调用这个函数，而是直接在属性上调用getHasTradeMark函数，那么每次改变时都会有一个limit参数传给getHasTradeMark，相当于把pager覆盖，无法实现页码归1
const sizeChange = () => {
    // 每次每一页数据量改变时，页码都归1
    getHasTradeMark()
}
let trademarkParams = reactive({
    tmName: '',
    logoUrl: ''
})
let dialogFormVisible = ref(false)
const addTrademark = () => {
    dialogFormVisible.value = true
    // 每次收集数据之前，先清空数据
    trademarkParams.tmName = ''
    trademarkParams.logoUrl = ''
    trademarkParams.id = 0
    // 清除掉之前的校验提示信息，在表单获取之后再执行
    nextTick(() => {
        formRef.value.clearValidate('tmName')
        formRef.value.clearValidate('logoUrl')
    })
}
const updateTrademark = (row) => {
    // ES6合并
    Object.assign(trademarkParams, row)
    // trademarkParams.id = row.id
    // trademarkParams.logoUrl = row.logoUrl
    // trademarkParams.tmName = row.tmName
    // 清除掉之前的校验提示信息，在表单获取之后再执行
    nextTick(() => {
        formRef.value.clearValidate('tmName')
        formRef.value.clearValidate('logoUrl')
    })
    dialogFormVisible.value = true
}
const cancel = () => {
    dialogFormVisible.value = false
}
const confirm = async () => {
    // 提交表单前先校验,等待校验通过再执行后面代码
    await formRef.value.validate()
    const result = await reqAddOrUpdateTradeMark(trademarkParams)
    if (result.code == 200) {
        ElMessage({
            type: 'success',
            message: trademarkParams.id ? '修改成功' : '添加成功'
        })
        // 再次调用函数:如果是修改，那么修改后页码不变，如果是添加，页码归1
        getHasTradeMark(trademarkParams.id ? pageNo.value : 1)
    } else {
        ElMessage({
            type: 'error',
            message: trademarkParams.id ? '修改失败' : '添加失败'
        })
    }
    dialogFormVisible.value = false
}

// 成功钩子：将返回的url给logoUrl
// const handleAvatarSuccess = (response, uploadFile) => {
//     trademarkParams.logoUrl = response.data
// }
// 上传前钩子：检验文件类型和大小
const beforeAvatarUpload = (rawFile) => {
    if (rawFile.type == 'image/jpeg' || rawFile.type == 'image/png' || rawFile.type == 'image/gif') {
        if (rawFile.size / 1024 / 1024 < 4) {
            return true
        } else {
            ElMessage({
                type: 'error',
                messag: 'Avatar picture size can not exceed 4MB!'
            })
            return false
        }
    } else {
        console.log("文件类型", rawFile.type)
        ElMessage({
            type: 'error',
            message: 'Avatar picture must be JPG or PNG or GIF format!'
        })
        return false
    }
}
const uploadFile = async (options) => {
    try {
        // 调用上传API
        const res = await reqUploadFile(); // 假设返回 { code: 200, data: 'url' }
        console.log(res)
        trademarkParams.logoUrl = res.data
        // 清除校验提示信息
        formRef.value.clearValidate('logoUrl')
    } catch (error) {
        options.onError(error); // 触发错误回调
    }
}
const validateTmName = (rules, value, callBack) => {
    if (value.trim().length >= 2) {
        callBack()
    } else {
        callBack(new Error("品牌名称至少两个字"))
    }
}
const validateLogoUrl = (rule, value, callBack) => {
    // value是图片url
    if (value) {
        callBack()
    } else {
        callBack(new Error("请上传图片"))
    }
}
// 校验表单
const rules = {
    tmName: [{ required: true, validator: validateTmName, trigger: 'blur' }],
    logoUrl: [{ required: true, validator: validateLogoUrl }],
}

const deleteTrademark = async(id)=>{
    const result = await reqDeleteTradeMark(id)
    if(result.code == 200){
        ElMessage({
            type:'success',
            message:'删除成功'
        })
        // 如果刚好最后一页只有一条数据，那么删除后要返回前一页
        getHasTradeMark(trademarkArr.value.length < 1 ? pageNo.value-1 : pageNo.value)
    } else {
        ElMessage({
            type:'error',
            message:'删除失败'
        })
    }
}


</script>

<style scoped>
.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>