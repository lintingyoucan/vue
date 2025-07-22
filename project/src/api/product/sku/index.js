import request from "@/utils/request";

const API = {
  // 获取已有spu数据
  SKU_URL: "/product/list/",
  // 上架
  ONSALE_URL:'/product/onSale/',
  // 下架
  CANCELSALE_URL:'/product/cancelSale/',
  // 获取商品详情的接口
  SKUINFO_URL:'/product/getSkuInfo/',
  // 删除sku
  DELETESKU_URL:'/product/deleteSku/'
};
export const reqSku = (page, limit) =>
    request.get(API.SKU_URL, {
        params: {
            page: page,
            limit: limit
        }
    })
export const reqOnSale = (skuId) =>
    request.post(`${API.ONSALE_URL}?skuId=${skuId}`)

export const reqCancelSale = (skuId) =>
    request.post(`${API.CANCELSALE_URL}?skuId=${skuId}`)

export const reqSkuInfo = (skuId) =>
    request.get(API.SKUINFO_URL, {
        params: {
            skuId
        }
    })
export const reqDeleteSku = (skuId) =>
    request.delete(API.DELETESKU_URL, {
        params: {
            skuId
        }
    })