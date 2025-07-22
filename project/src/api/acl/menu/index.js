// 统一管理项目用户相关的接口
import request from "@/utils/request";

// 项目用户相关的请求地址
const API = {
    // 获取全部菜单
    ALLPERMISSION_URL: '/acl/permission',
    // 给某一级菜单新增子菜单
    ADDMENU_URL: '/acl/permission/save',
    // 更新某一个已有的菜单
    UPDATE_URL: '/acl/permission/update',
    // 删除已有的菜单
    DELETEMENU_URL:'/acl/permission/remove/'
}

export const reqAllPermission = () => request.get(API.ALLPERMISSION_URL);

export const reqAddOrUpdateMenu = (data) => {
    if (data.id) {
        return request.post(API.UPDATE_URL, data);
    } else {
        return request.post(API.ADDMENU_URL, data);
    }
};
export const reqDeleteMenu = (id) => request.delete(API.DELETEMENU_URL,{params:{id}});