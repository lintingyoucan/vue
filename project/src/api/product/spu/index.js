import request from '@/utils/request'

const API = {
    // 获取已有spu数据
    HASSPU_URL: '/product/',
    // 获取全部品牌数据
    ALLTRADEMARK_URL: '/product/baseTrademark/getTrademarkList',
    // 获取某个SPU下的全部的售卖商品的图片数据
    IMAGE_URL: '/product/spuImageList/',
    // 获取某个SPU下的全部的已有的销售属性的接口地址
    SPUHASSAKEATTR_URL: '/product/spuSaleAttrList/',
    // 获取整个项目全部的销售属性[颜色、版本、尺码]
    ALLSALEATTR_URL: '/product/baseSaleAttrList',
    // 添加SPU
    ADDSPU_URL: '/product/saveSpuInfo',
    // 更新SPU
    UPDATE_URL: '/product/updateSpuInfo',
    // 追加sku
    ADDSKU_URL: '/product/saveSkuInfo',
    // 查看某一个已有的SPU下全部售卖的商品
    SKUINFO_URL:'/product/findBySpuId/',
    // 删除SPU
    REMOVESPU_URL:'/product/deleteSpu/'

}

export const reqHasSpu = (page, limit, category3Id) =>
    request.get(API.HASSPU_URL, {
        params: {
            page: page,
            limit: limit,
            category3Id: category3Id
        }
    })

export const reqAllTrademark = () => request.get(API.ALLTRADEMARK_URL)

export const reqImageList = (spuId) =>
    request.get(API.IMAGE_URL, {
        params: {
            spuId
        }
    })

export const reqSpuHasSaleAttr = (spuId) =>
    request.get(API.SPUHASSAKEATTR_URL, {
        params: {
            spuId
        }
    })

export const reqAllSaleAttr = () => request.get(API.ALLSALEATTR_URL)

export const reqAddOrUpdateSPU = (data) => {
    if (data.id) {
        return request.post(API.UPDATE_URL, data)
    } else {
        return request.post(API.ADDSPU_URL, data)
    }
} 

export const reqAddSku = (data)=>{
    return request.post(API.ADDSKU_URL,data)
}

export const reqSkuInfo = (spuId) =>
    request.get(API.SKUINFO_URL, {
        params: {
            spuId:spuId
        }
    })

export const reqRemoveSpu = (spuId) =>
    request.delete(API.REMOVESPU_URL, {
        params: {
            spuId:spuId
        }
    })