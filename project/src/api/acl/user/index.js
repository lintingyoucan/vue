// 统一管理项目用户相关的接口
import request from "@/utils/request";

// 项目用户相关的请求地址
const API = {
  // 获取所有用户信息
  ALLUSER_URL: "/acl/user/",
  // 添加用户
  ADDUSER_URL: "/acl/user/save",
  // 更新用户
  UPDATEUSER_URL: "/acl/user/update",
  // 获取全部职位，当前账号拥有的职位接口
  ALLROLE_URL: "/acl/user/toAssign/",
  // 给已有的用户分配角色接口
  SETROLE_URL: "/acl/user/doAssignRole",
  // 删除某一个账号
  DELETEUSER_URL: "/acl/user/remove/",
  // 批量删除账号
  DELETEBATCHUSER_URL: "/acl/user/batchRemove",
};

export const reqAllUser = (page, limit,username) =>
  request.get(API.ALLUSER_URL, {
    params: {
      page: page,
      limit: limit,
      username:username
    },
  });

export const reqAddOrUpdateUser = (data) => {
  if (data.id) {
    return request.post(API.UPDATEUSER_URL, data);
  } else {
    return request.post(API.ADDUSER_URL, data);
  }
};

export const reqAllRole = (userId) =>
  request.get(API.ALLROLE_URL, {
    params: {
      userId,
    },
  });
export const reqSetRole = (data) => {
  return request.post(API.SETROLE_URL, data);
};
export const reqDeleteUser = (userId) =>
  request.delete(API.DELETEUSER_URL, {
    params: {
      userId,
    },
  });
export const reqDeleteBatchUser = (selectUserIds) => {
  return request.delete(API.DELETEBATCHUSER_URL, {
    data: selectUserIds, // 直接发送数组
  });
};
