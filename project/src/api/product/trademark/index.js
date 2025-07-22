// api/product/trademark.js
import request from '@/utils/request'

const API = {
    TRADEMARK_URL: '/product/baseTrademark/',
    ADDTRADEMARK_URL: '/product/baseTrademark/save',
    UPDATETRADEMARK_URL: '/product/baseTrademark/update',
    UPLOADFILE_URL:'/product/baseTrademark/uploadFile',
    DELETETRADEMARK_URL: '/product/baseTrademark/delete',
}
export const reqHasTradeMark = (page, limit) =>
    request.get(API.TRADEMARK_URL, {
        params: {
            page: page,
            limit: limit
        }
    })

export const reqAddOrUpdateTradeMark = (data) => {
    // 修改已有id
    if(data.id){
        return request.put(API.UPDATETRADEMARK_URL,data)
    }else{
        // 新增品牌
        return request.post(API.ADDTRADEMARK_URL,data)
    }
}

export const reqUploadFile = () => {
    return request.post(API.UPLOADFILE_URL)
}

export const reqDeleteTradeMark = (id) =>
    request.delete(API.DELETETRADEMARK_URL, {
        params: {
            id: id
        }
    })