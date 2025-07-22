<template>
    <el-form label-width="100px">
        <el-form-item label="SPU名称">
            <el-input placeholder="请输入SPU名称" v-model="spuParams.spuName"></el-input>
        </el-form-item>
        <el-form-item label="SPU品牌">
            <el-select style="width: 240px" v-model="spuParams.tmId">
                <el-option v-for="(item, index) in allTrademark" :key="item.id" :label="item.tmName"
                    :value="item.id"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="SPU描述">
            <el-input type="textarea" placeholder="请输入SPU描述" v-model="spuParams.description"></el-input>
        </el-form-item>
        <el-form-item label="SPU图片">
            <el-upload v-model:file-list="imageList" :http-request="uploadFile" list-type="picture-card"
                :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :before-upload="beforeAvatarUpload">
                <el-icon>
                    <Plus />
                </el-icon>
            </el-upload>
            <el-dialog v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
        </el-form-item>
        <el-form-item label="SPU销售属性">
            <el-select style="width: 240px;margin-right:10px" v-model="saleAttrIdAndValueName"
                :placeholder="unSelectSaleAttr.length ? `还有${unSelectSaleAttr.length}个属性` : '无'">
                <el-option v-for="(item, index) in unSelectSaleAttr" :key="item.id" :label="item.name"
                    :value="`${item.id}:${item.name}`"></el-option>
            </el-select>
            <el-button icon="Plus" type="primary" @click="addAttr"
                :disabled="saleAttrIdAndValueName ? false : true">添加属性</el-button>
        </el-form-item>
        <el-form-item>
            <el-table border :data="saleAttr">
                <el-table-column label="序号" type="index" align="center" width="100px"></el-table-column>
                <el-table-column label="销售属性名字" width="200px" prop="saleAttrName"></el-table-column>
                <el-table-column label="销售属性值">
                    <template #="{ row, $index }">
                        <el-tag v-for="(item, index) in row.spuSaleAttrValueList" :key="item.id" closable
                            style="margin:0px 5px;" @close="row.spuSaleAttrValueList.splice($index,1)">
                            {{ item.saleAttrValueName }}
                        </el-tag>
                        <!-- 一开始row.flag还没有值，所以是undefined,因此对应的v-if是false,我们希望一开始看到的是按钮，所以将v-if写在input上 -->
                        <el-input v-if="row.flag == true" v-model="row.saleAttrValue" placeholder="请输入属性值" size="small"
                            style="width:100px;" @blur="toLook(row)"></el-input>
                        <el-button v-else icon="Plus" size="small" type="primary" @click="toEdit(row)"></el-button>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="250px">
                    <template #="{ row, $index }">
                        <el-button icon="Delete" type="primary" size="small"
                            @click="saleAttr.splice($index, 1)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="save" :disabled="saleAttr.length > 0 ? false : true" >保存</el-button>
            <el-button type="primary" @click="cancel">取消</el-button>
        </el-form-item>

    </el-form>
</template>

<script setup>
let $emit = defineEmits(['changeScene'])
import { reqAllTrademark, reqImageList, reqAllSaleAttr, reqSpuHasSaleAttr, reqAddOrUpdateSPU } from '@/api/product/spu'
import { ElMessage } from 'element-plus'
import { ref, computed } from 'vue'
// 通知父组件切换场景为0
const cancel = () => {
    $emit('changeScene', { flag: 0, params: spuParams.value.id ? "update" : "add" })
}
let allTrademark = ref([])
let imageList = ref([])
let saleAttr = ref([])
let allSaleAttr = ref([])
// 是否显示预览图片
let dialogVisible = ref(false)
let dialogImageUrl = ref('')
let spuParams = ref({
    category3Id: "",
    spuName: "",
    description: "",
    tmId: '',
    spuImageList: [],
    spuSaleAttrList: [],
})
// 收集选择的添加的销售属性
let saleAttrIdAndValueName = ref('') // 形式如    id:name
const initHasSpuData = async (spu) => {
    // 将值给参数
    spuParams.value = spu
    // 获取所有品牌
    const result = await reqAllTrademark()
    allTrademark.value = result.data
    // 获取某个spu所有图片
    const result1 = await reqImageList(spu.id)
    // file-list要求属性名必须是name和url,所以重命名
    imageList.value = result1.data.map(item => {
        return {
            name: item.imgName,
            url: item.imgUrl
        }
    }
    )
    // 获取某个spu的销售属性
    const result2 = await reqSpuHasSaleAttr(spu.id)
    saleAttr.value = result2.data
    // 获取所有销售属性
    const result3 = await reqAllSaleAttr()
    allSaleAttr.value = result3.data
}
const initAddSpu = async (obj) => {
    // 每次添加属性前都会调用这个方法，因此，在这里先清空之前添加留下的数据
    Object.assign(spuParams.value, {
        id:'',
        category3Id: "",
        spuName: "",
        description: "",
        tmId: '',
        spuImageList: [],
        spuSaleAttrList: [],
    });
    saleAttr.value = []
    imageList.value = []
    saleAttrIdAndValueName.value = []
    // 获取所有品牌
    const result = await reqAllTrademark()
    allTrademark.value = result.data
    // 获取所有销售属性
    const result1 = await reqAllSaleAttr()
    allSaleAttr.value = result1.data
    // 获取c3Id
    spuParams.value.category3Id = obj.category3Id
}
// 暴露方法
defineExpose({ initHasSpuData, initAddSpu })
// 上传图片
let newImageList = ref([]) // 用来存储新添加的图片数据，防止上传时直接推入imageList造成两张图片显示的bug
const uploadFile = async (options) => {
    try {
        const { file } = options;
        // 1. 立即创建带有固定URL的图片对象
        const imageName = `image_${Date.now()}`;
        const fixedUrl = "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png";

        const newImage = {
            uid: file.uid, // 保留原始文件的UID
            name: imageName,
            url: fixedUrl, // 使用固定URL
            status: 'success', // 直接标记为上传成功
        };
        // 
        // 2. 立即添加到图片列表
        newImageList.value.push(newImage);
    } catch (error) {
        options.onError(error); // 触发错误回调
    }
}
const handlePictureCardPreview = (file) => {
    dialogImageUrl.value = file.url
    dialogVisible.value = true
}
const handleRemove = (file) => {
    console.log(123)
}

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
// 计算spu还没有选择的销售属性
// 全部属性：尺码 版本 颜色
// 已有属性：尺码 版本
// every返回布尔值
// filter根据布尔值确定是否要过滤，true不过滤，False过滤
let unSelectSaleAttr = computed(() => {
    let unSelectAttr = allSaleAttr.value.filter(item => {
        return saleAttr.value.every(item1 => {
            return item.name != item1.saleAttrName // 两个值如果不相等，会返回true，filter方法就不会将值过滤掉
        })
    })
    return unSelectAttr
})

// 添加属性方法
const addAttr = () => {
    // 解构出saleAttrIdAndValueName值 baseSaleAttrId saleAttrName spuSaleAttrValueList
    const [baseSaleAttrId, saleAttrName] = saleAttrIdAndValueName.value.split(':')
    let newSaleAttr = {
        baseSaleAttrId,
        saleAttrName,
        spuSaleAttrValueList: []
    }
    // 追加到已有的销售属性
    saleAttr.value.push(newSaleAttr)
    // 清空选择框的数据
    saleAttrIdAndValueName.value = ''
}
// 添加属性值方法
const toEdit = (row) => {
    row.flag = true // 从按钮变为输入框
    row.saleAttrValue = ''
}
const toLook = (row) => {
    const { baseSaleAttrId, saleAttrValue } = row
    // 不为空
    if (saleAttrValue.trim() == '') {
        ElMessage({
            type: "error",
            message: "属性值不能为空"
        })
        return
    }
    // 不重复
    let repeat = row.spuSaleAttrValueList.find(item => {
        return item.saleAttrValueName == saleAttrValue
    })
    if (repeat) {
        ElMessage({
            type: "error",
            message: "属性值不能重复"
        })
        return
    }
    // 推入
    let newSaleAttrValue = {
        baseSaleAttrId,
        saleAttrValueName: saleAttrValue
    }
    row.spuSaleAttrValueList.push(newSaleAttrValue)
    // 切换为查看模式
    row.flag = false // 从输入框变为按钮
}
// 点击保存，发送请求
const save = async () => {
    // 补充完整的spuParams
    // 同时删掉imageList中id相同的数据，因为上传时元素与imageList绑定，一旦添加会在imageList中添加数据
    const newUids = new Set(newImageList.value.map(img => img.uid));
    imageList.value = [...imageList.value.filter(item => !newUids.has(item.uid))]
    // 将newImageList的新图片数据添加到imageList,组成完成的图片数据
    imageList.value.push(...newImageList.value);
    spuParams.value.spuImageList = imageList.value.map((item) => {
        return {
            imgUrl: item.url,
            imgName: item.name
        }
    })
    spuParams.value.spuSaleAttrList = saleAttr.value
    // 发送请求
    const result = await reqAddOrUpdateSPU(spuParams.value)
    if (result.code == 200) {
        ElMessage({
            type: "success",
            message: spuParams.value.id ? "修改成功" : "添加成功"
        })
        // 切换到screen=0,通知父组件
        $emit('changeScene', { flag: 0, params: spuParams.value.id ? "update" : "add" })
    } else {
        ElMessage({
            type: "error",
            message: spuParams.value.id ? `修改失败,${result.message}` : `添加失败,${result.message}`
        })
    }


}
</script>
<style scoped></style>