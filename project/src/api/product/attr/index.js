import request from '@/utils/request'

const API = {
    C1_URL: '/product/getCategory1',
    C2_URL: '/product/getCategory2/',
    C3_URL: '/product/getCategory3/',
    ATTR_URL: '/product/attrInfoList/',
    ADDORUPDATEATTR_URL: '/product/saveAttrInfo/',
    DELETEATTR_URL: '/product/deleteAttr/',
}
export const reqC1 = () => request.get(API.C1_URL)

export const reqC2 = (categoryId1) =>
    request.get(API.C2_URL, {
        params: {
            categoryId1: categoryId1
        }
    })

export const reqC3 = (categoryId2) =>
    request.get(API.C3_URL, {
        params: {
            categoryId2: categoryId2
        }
    })

export const reqAtr = (categoryId1, categoryId2, categoryId3) =>
    request.get(API.ATTR_URL, {
        params: {
            categoryId1: categoryId1,
            categoryId2: categoryId2,
            categoryId3: categoryId3
        }
    })

export const reqAddOrUpdateAttr = (data)=>{
    return request.post(API.ADDORUPDATEATTR_URL, data)
}

export const reqDeleteAttr = (attrId)=>{
    return request.delete(API.DELETEATTR_URL, { params: { attrId } })
}

