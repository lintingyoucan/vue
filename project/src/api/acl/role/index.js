// 统一管理项目用户相关的接口
import request from "@/utils/request";

// 项目用户相关的请求地址
const API = {
    // 获取全部职位接口
    ALLROLE_URL: "/acl/role/",
    // 新增岗位
    ADDROLE_URL: '/acl/role/save',
    // 更新岗位
    UPDATE_URL: '/acl/role/update',
    // 获取全部的菜单数据
    ALLPERMISSTION_URL: '/acl/permission/toAssign/',
    // 给职位分配权限
    SETPERMISSION_URL:'/acl/permission/doAssign/',
    // 删除已有的职位
    REMOVEROLE_URL:'/acl/role/remove/'
}

export const reqAllRoleList = (page, limit, keyword) =>
    request.get(API.ALLROLE_URL, {
        params: {
            page: page,
            limit: limit,
            keyword: keyword
        },
    });

export const reqAddOrUpdateRole = (data) => {
    if (data.id) {
        return request.post(API.UPDATE_URL, data);
    } else {
        return request.post(API.ADDROLE_URL, data);
    }
};

export const reqAllMenuList = (roleId) => 
    request.get(API.ALLPERMISSTION_URL, {
        params: {
            roleId
        },
    });
export const reqSetPermission = (roleId, permissionId) =>
    request.post(`${API.SETPERMISSION_URL}?roleId=${roleId}&permissionId=${permissionId}`)

export const reqRemoveRole = (roleId) => 
    request.delete(API.REMOVEROLE_URL, {
        params: {
            roleId
        },
    })