const allRoleList = [
  {
    id: 1,
    createTime: "2021-06-18 17:12:21",
    updateTime: "2023-04-28 11:03:39",
    roleName: "超级管理员",
    remark: null,
  },
  {
    id: 2,
    createTime: "2021-06-18 17:12:21",
    updateTime: "2023-04-28 11:03:39",
    roleName: "前台",
    remark: null,
  },
  {
    id: 3,
    createTime: "2021-06-18 17:12:21",
    updateTime: "2023-04-28 11:03:39",
    roleName: "运营",
    remark: null,
  },
  {
    id: 4,
    createTime: "2021-06-18 17:12:21",
    updateTime: "2023-04-28 11:03:39",
    roleName: "产品",
    remark: null,
  },
  {
    id: 5,
    createTime: "2021-06-18 17:12:21",
    updateTime: "2023-04-28 11:03:39",
    roleName: "前端",
    remark: null,
  },
  {
    id: 6,
    createTime: "2021-06-18 17:12:21",
    updateTime: "2023-04-28 11:03:39",
    roleName: "后端",
    remark: null,
  },
  {
    id: 7,
    createTime: "2021-06-18 17:12:21",
    updateTime: "2023-04-28 11:03:39",
    roleName: "测试",
    remark: null,
  },
  {
    id: 8,
    createTime: "2021-06-18 17:12:21",
    updateTime: "2023-04-28 11:03:39",
    roleName: "财务",
    remark: null,
  },
  {
    id: 9,
    createTime: "2021-06-18 17:12:21",
    updateTime: "2023-04-28 11:03:39",
    roleName: "运维",
    remark: null,
  },
  {
    id: 10,
    createTime: "2021-06-18 17:12:21",
    updateTime: "2023-04-28 11:03:39",
    roleName: "销售",
    remark: null,
  },
  {
    id: 11,
    createTime: "2021-06-18 17:12:21",
    updateTime: "2023-04-28 11:03:39",
    roleName: "程序鼓励师",
    remark: null,
  },
];
// 定义全部菜单树结构
const AllMenuArr = [
  {
    id: 1,
    createTime: "2021-06-18 17:12:21",
    updateTime: "2023-04-28 11:03:39",
    pid: 0,
    name: "全部数据",
    code: null,
    toCode: null,
    type: 1,
    status: null,
    level: 1,
    children: [
      {
        id: 7,
        createTime: "2021-06-18 17:12:21",
        updateTime: "2023-04-28 11:03:39",
        pid: 1,
        name: "权限管理",
        code: "Acl",
        toCode: null,
        type: 1,
        status: null,
        level: 2,
        children: [
          {
            id: 12,
            createTime: "2021-06-18 17:12:21",
            updateTime: "2023-04-28 11:03:39",
            pid: 7,
            name: "用户管理",
            code: "User",
            toCode: null,
            type: 1,
            status: null,
            level: 3,
            children: [
              {
                id: 20,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 12,
                name: "添加用户",
                code: "Save",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 21,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 12,
                name: "删除用户",
                code: "Remove",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 22,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 12,
                name: "修改用户",
                code: "Update",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 23,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 12,
                name: "分配角色",
                code: "DoAssignRole",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
            ],
          },
          {
            id: 13,
            createTime: "2021-06-18 17:12:21",
            updateTime: "2023-04-28 11:03:39",
            pid: 7,
            name: "角色管理",
            code: "Role",
            toCode: null,
            type: 1,
            status: null,
            level: 3,
            children: [
              {
                id: 24,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 13,
                name: "分配权限",
                code: "AssignAuth",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 25,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 13,
                name: "添加角色",
                code: "AddRole",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 26,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 13,
                name: "修改角色",
                code: "UpdateRole",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 27,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 13,
                name: "删除角色",
                code: "DeleteRole",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
            ],
          },
          {
            id: 14,
            createTime: "2021-06-18 17:12:21",
            updateTime: "2023-04-28 11:03:39",
            pid: 7,
            name: "菜单管理",
            code: "Menu",
            toCode: null,
            type: 1,
            status: null,
            level: 3,
            children: [
              {
                id: 28,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 14,
                name: "添加菜单",
                code: "AddMenu",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 29,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 14,
                name: "修改菜单",
                code: "UpdateMenu",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 30,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 14,
                name: "删除菜单",
                code: "DeleteMenu",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
            ],
          },
        ],
      },
      {
        id: 8,
        createTime: "2021-06-18 17:12:21",
        updateTime: "2023-04-28 11:03:39",
        pid: 1,
        name: "商品管理",
        code: "Trademark",
        toCode: null,
        type: 1,
        status: null,
        level: 2,
        children: [
          {
            id: 15,
            createTime: "2021-06-18 17:12:21",
            updateTime: "2023-04-28 11:03:39",
            pid: 8,
            name: "分类管理",
            code: "Category",
            toCode: null,
            type: 1,
            status: null,
            level: 3,
            children: [
              {
                id: 31,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 15,
                name: "添加子分类",
                code: "AddSubCategory",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 32,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 15,
                name: "修改分类",
                code: "UpdateCategory",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 33,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 15,
                name: "删除分类",
                code: "DeleteCategory",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
            ],
          },
          {
            id: 16,
            createTime: "2021-06-18 17:12:21",
            updateTime: "2023-04-28 11:03:39",
            pid: 8,
            name: "平台属性管理",
            code: "Attr",
            toCode: null,
            type: 1,
            status: null,
            level: 3,
            children: [
              {
                id: 34,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 16,
                name: "添加属性",
                code: "AddAttr",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 35,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 16,
                name: "修改属性",
                code: "UpdateAttr",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 36,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 16,
                name: "删除属性",
                code: "DeleteAttr",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
            ],
          },
          {
            id: 17,
            createTime: "2021-06-18 17:12:21",
            updateTime: "2023-04-28 11:03:39",
            pid: 8,
            name: "品牌管理",
            code: "Brand",
            toCode: null,
            type: 1,
            status: null,
            level: 3,
            children: [
              {
                id: 37,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 17,
                name: "添加品牌",
                code: "AddBrand",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 38,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 17,
                name: "修改品牌",
                code: "UpdateBrand",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 39,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 17,
                name: "删除品牌",
                code: "DeleteBrand",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
            ],
          },
          {
            id: 18,
            createTime: "2021-06-18 17:12:21",
            updateTime: "2023-04-28 11:03:39",
            pid: 8,
            name: "SPU管理",
            code: "Spu",
            toCode: null,
            type: 1,
            status: null,
            level: 3,
            children: [
              {
                id: 40,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 18,
                name: "添加SPU",
                code: "AddSpu",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 41,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 18,
                name: "添加SKU",
                code: "AddSku",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 42,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 18,
                name: "修改SPU",
                code: "UpdateSpu",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 43,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 18,
                name: "查看SKU列表",
                code: "ViewSkuList",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 44,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 18,
                name: "删除SPU",
                code: "DeleteSpu",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
            ],
          },
          {
            id: 19,
            createTime: "2021-06-18 17:12:21",
            updateTime: "2023-04-28 11:03:39",
            pid: 8,
            name: "SKU管理",
            code: "Sku",
            toCode: null,
            type: 1,
            status: null,
            level: 3,
            children: [
              {
                id: 45,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 19,
                name: "SKU上下架",
                code: "SkuStatus",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 46,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 19,
                name: "更新SKU",
                code: "UpdateSku",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 47,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 19,
                name: "SKU详情",
                code: "SkuDetail",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
              {
                id: 48,
                createTime: "2021-06-18 17:12:21",
                updateTime: "2023-04-28 11:03:39",
                pid: 19,
                name: "删除SKU",
                code: "DeleteSku",
                toCode: null,
                type: 1,
                status: null,
                level: 4,
              },
            ],
          },
        ],
      },
      {
        id: 9,
        createTime: "2021-06-18 17:12:21",
        updateTime: "2023-04-28 11:03:39",
        pid: 1,
        name: "全部",
        code: null,
        toCode: null,
        type: 1,
        status: null,
        level: 2,
        children: [],
      },
    ],
  },
];
// 定义各角色权限映射
const rolePermissions = {
  1: [
    7, 12, 13, 14, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 8, 15, 16, 17,
    18, 19, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    48, 9,
  ], // 超级管理员拥有全部权限
  2: [12, 20, 21, 23], // 前台
  3: [8, 15, 31, 32, 16, 34, 35], // 运营
  4: [8, 17, 37, 38, 18, 40, 41, 42, 19, 45], // 产品
  5: [8, 18, 40, 41, 42, 43, 19, 45, 46, 47], // 前端
  6: [
    8, 15, 31, 32, 16, 34, 35, 17, 37, 38, 18, 40, 41, 42, 43, 19, 45, 46, 47,
    48,
  ], // 后端
  7: [
    8, 15, 31, 32, 16, 34, 35, 17, 37, 38, 18, 40, 41, 42, 43, 44, 19, 45, 46,
    47, 48,
  ], // 测试
  8: [9], // 财务
  9: [
    8, 15, 16, 17, 18, 19, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
    44, 45, 46, 47, 48,
  ], // 运维
  10: [9], // 销售
  11: [12, 20, 22, 23], // 程序鼓励师
};
export default [
  // 获取所有用户信息
  {
    url: "/api/acl/role/",
    method: "get",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }

      // 获取参数
      const page = parseInt(request.query.page); // page是需要的页数
      const limit = parseInt(request.query.limit); // limit是每页需要多少条数据
      const roleName = request.query.keyword; // 获取职位参数

      // 根据username过滤数据
      let filteredList = allRoleList;
      if (roleName && roleName.trim()) {
        const searchTerm = roleName.trim();
        filteredList = allRoleList.filter(
          (role) => role.roleName && role.roleName.includes(searchTerm)
        );
      }
      // 计算分页数据
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const pageList = filteredList.slice(startIndex, endIndex);

      // 返回分页格式数据
      return {
        code: 200,
        message: "成功",
        data: {
          records: pageList,
          total: filteredList.length,
          limit: limit,
          page: page,
          searchCount: true,
        },
      };
      // 返回数据
    },
  },
  // 添加职位
  {
    url: "/api/acl/role/save",
    method: "post",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      // 生成新职位ID (当前最大ID+1)
      const newId = Math.max(...allRoleList.map((u) => u.id)) + 1;
      const currentTime = new Date()
        .toLocaleString("zh-CN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
        .replace(/\//g, "-");

      const newRole = {
        id: newId,
        createTime: currentTime,
        updateTime: currentTime,
        roleName: request.body.roleName,
        remark: null,
      };

      allRoleList.push(newRole);
      return {
        code: 200,
        message: "添加成功",
        data: null,
      };
    },
  },
  // 更新职位
  {
    url: "/api/acl/role/update",
    method: "post",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      const roleIndex = allRoleList.findIndex((u) => u.id === request.body.id);
      if (roleIndex === -1) {
        return { code: 202, message: "用户不存在", data: null };
      }

      // 更新用户信息
      const currentTime = new Date()
        .toLocaleString("zh-CN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
        .replace(/\//g, "-");
      allRoleList[roleIndex] = {
        ...allRoleList[roleIndex],
        ...request.body,
        updateTime: currentTime,
        // 保留原始创建时间
        createTime: allRoleList[roleIndex].createTime,
      };

      return {
        code: 200,
        message: "更新成功",
        data: null,
      };
    },
  },
  // 获取全部菜单权限，当前账号拥有的菜单权限
  {
    url: "/api/acl/permission/toAssign/",
    method: "get",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      const roleId = request.query.roleId;
      if (!roleId) {
        return { code: 203, message: "缺少roleId参数", data: null };
      }

      // 克隆菜单树避免污染原始数据
      const cloneTree = JSON.parse(JSON.stringify(AllMenuArr));
      // 获取当前角色的权限ID列表
      const permissionIds = rolePermissions[roleId] || [];
      // 递归函数：标记节点选中状态
      const markSelected = (node) => {
        // 检查当前节点是否在权限列表中
        node.isSelected = permissionIds.includes(node.id);

        // 递归处理子节点
        if (node.children && Array.isArray(node.children)) {
          node.children.forEach((child) => markSelected(child));
        }
      };

      // 遍历每个根节点并标记选中状态
      cloneTree.forEach((rootNode) => markSelected(rootNode));
      return {
        code: 200,
        message: "成功",
        data: cloneTree,
      };
      // 返回数据形式
      //AllMenuList 是一个固定数组，有多个菜单，每个菜单都有一个id,有一个pid指向属于哪个菜单，name如下：
      // 全部数据
      //   --权限管理
      //     --用户管理
      //       --添加用户
      //       --删除用户
      //       --修改用户
      //       --分配角色
      //     --角色管理
      //       --分配权限
      //       --添加角色
      //       --修改角色
      //       --删除角色
      //     --菜单管理
      //       --添加
      //       --修改
      //       --删除
      //   --商品管理
      //     --分类管理
      //       --添加子分类
      //       --修改分类
      //       --删除分类
      //     --平台属性管理
      //       --添加属性
      //       --修改属性
      //       --删除属性
      //     --品牌管理
      //       --添加品牌
      //       --修改品牌
      //       --删除品牌
      //     --SPU管理
      //       --添加SPU
      //       --添加SKU
      //       --修改SPU
      //       --查看SKU列表
      //       --删除SPU
      //     --SKU管理
      //       --SKU上下架
      //       --更新SKU
      //       --SKU详情
      //       --删除SKU
      //   --全部
      // {
      //   code: 200,
      //     message: "成功",
      //       data: {
      //     {
      //       id: 1,
      //       createTime: "2021-06-18 17:12:21",
      //       updateTime: "2023-04-28 11:03:39",
      //       pid: 0,
      //       name: "全部数据",
      //       code:null,
      //       toCode:null,
      //       type:1,
      //       status:null,
      //       level:1,
      //       children:[
      //         {
      //           id: 7,
      //           createTime: "2021-06-18 17:12:21",
      //           updateTime: "2023-04-28 11:03:39",
      //           pid: 1,
      //           name: "权限管理",
      //           code:Acl,
      //           toCode:null,
      //           type:1,
      //           status:null,
      //           level:2,
      //           children:[
      //             {
      //               id: 12,
      //               createTime: "2021-06-18 17:12:21",
      //               updateTime: "2023-04-28 11:03:39",
      //               pid: 7,
      //               name: "用户管理",
      //               code:User,
      //               toCode:null,
      //               type:1,
      //               status:null,
      //               level:3,
      //               children:[
      //                 {
      //                   id: 20,
      //                   createTime: "2021-06-18 17:12:21",
      //                   updateTime: "2023-04-28 11:03:39",
      //                   pid: 12,
      //                   name: "添加用户",
      //                   code:Save,
      //                   toCode:null,
      //                   type:1,
      //                   status:null,
      //                   level:4,
      //                 },
      //                 {
      //                   id: 21,
      //                   createTime: "2021-06-18 17:12:21",
      //                   updateTime: "2023-04-28 11:03:39",
      //                   pid: 12,
      //                   name: "删除用户",
      //                   code:Remove,
      //                   toCode:null,
      //                   type:1,
      //                   status:null,
      //                   level:4,
      //                 },
      //                 {
      //                   id: 22,
      //                   createTime: "2021-06-18 17:12:21",
      //                   updateTime: "2023-04-28 11:03:39",
      //                   pid: 12,
      //                   name: "修改用户",
      //                   code:Update,
      //                   toCode:null,
      //                   type:1,
      //                   status:null,
      //                   level:4,
      //                 },
      //                 {
      //                   id: 23,
      //                   createTime: "2021-06-18 17:12:21",
      //                   updateTime: "2023-04-28 11:03:39",
      //                   pid: 12,
      //                   name: "分配角色",
      //                   code:DoAssignRole,
      //                   toCode:null,
      //                   type:1,
      //                   status:null,
      //                   level:4,
      //                 },
      //               ]
      //             },
      //             {
      //               id: 13,
      //               createTime: "2021-06-18 17:12:21",
      //               updateTime: "2023-04-28 11:03:39",
      //               pid: 7,
      //               name: "角色管理",
      //               code:Role,
      //               toCode:null,
      //               type:1,
      //               status:null,
      //               level:3,
      //               children:[]
      //             },
      //             {
      //               id: 14,
      //               createTime: "2021-06-18 17:12:21",
      //               updateTime: "2023-04-28 11:03:39",
      //               pid: 7,
      //               name: "菜单管理",
      //               code:Menu,
      //               toCode:null,
      //               type:1,
      //               status:null,
      //               level:3,
      //               children:[]
      //             },

      //           ]
      //         },
      //         {
      //           id: 8,
      //           createTime: "2021-06-18 17:12:21",
      //           updateTime: "2023-04-28 11:03:39",
      //           pid: 1,
      //           name: "商品管理",
      //           code:Trademark,
      //           toCode:null,
      //           type:1,
      //           status:null,
      //           level:2,
      //           children:[
      //             {

      //             }
      //           ]
      //         },
      //         {
      //           id: 9,
      //           createTime: "2021-06-18 17:12:21",
      //           updateTime: "2023-04-28 11:03:39",
      //           pid: 1,
      //           name: "全部",
      //           code:null,
      //           toCode:null,
      //           type:1,
      //           status:null,
      //           level:2,
      //           children:[
      //             {

      //             }
      //           ]
      //         },
      //       ]
      //     },
      // }
      // }
    },
  },
  // 保存分配权限
  {
    url: "/api/acl/permission/doAssign/",
    method: "post",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      let roleId = request.query.roleId
      let permissionId = request.query.permissionId
      if (!roleId || !permissionId) {
        return { code: 203, message: "缺少必要参数", data: null };
      }

      // 将字符串类型的权限ID转换为数字数组
      const permissionIds = permissionId.split(',').map(id => Number(id));

      // 更新角色权限映射
      rolePermissions[roleId] = permissionIds;

      return {
        code: 200,
        message: "权限分配成功",
        data: null
      };
    }
  },
  // 删除角色
  {
    url: "/api/acl/role/remove/",
    method: "delete",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      let roleId = request.query.roleId;
      if (!roleId) {
        return { code: 400, message: "缺少roleId参数", data: null };
      }
      // 查找角色索引
      const index = allRoleList.findIndex(role => role.id == roleId);
      if (index === -1) {
        return { code: 404, message: "角色不存在", data: null };
      }
      // 删除角色
      allRoleList.splice(index, 1);
      // 也可以同步删除权限映射
      delete rolePermissions[roleId];
      return { code: 200, message: "删除成功", data: null };
    }

  }
];
