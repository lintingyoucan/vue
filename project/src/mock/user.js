//用户信息数据
function createUserList() {
  return [
    {
      userId: 1,
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      username: "admin",
      password: "111111",
      desc: "平台管理员",
      roles: ["平台管理员"],
      buttons: ["cuser.detail"],
      routes: ["home"],
      token: "Admin Token",
    },
    {
      userId: 2,
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      username: "system",
      password: "111111",
      desc: "系统管理员",
      roles: ["系统管理员"],
      buttons: ["cuser.detail", "cuser.user"],
      routes: ["home"],
      token: "System Token",
    },
    {
      userId: 3,
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      username: "wang_wu",
      password: "111111",
      desc: "系统管理员",
      roles: ["系统管理员"],
      buttons: ["cuser.detail", "cuser.user"],
      routes: ["home"],
      token: "wang_wu",
    },
    {
      userId: 4,
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      username: "zhao_liu",
      password: "111111",
      desc: "系统管理员",
      roles: ["系统管理员"],
      buttons: ["cuser.detail", "cuser.user"],
      routes: ["home"],
      token: "zhao_liu",
    },
  ];
}
export { createUserList };
let userList = [
  {
    id: 1,
    createTime: "2021-05-31 18:08:43",
    updateTime: "2023-04-28 08:18:41",
    username: "admin",
    password: "dbe236c0fce6dc0a6bed67606cc87f86",
    name: "管理员",
    phone: "13800000001",
    roleName: "超级管理员",
    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    token: "Admin Token"
  },
  {
    id: 2,
    createTime: "2021-06-01 09:12:25",
    updateTime: "2023-04-27 14:32:11",
    username: "li_si",
    password: "dbe236c0fce6dc0a6bed67606cc87f86",
    name: "李四",
    phone: "13900000002",
    roleName: "运营,产品",
    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    token: "System Token"
  },
  {
    id: 3,
    createTime: "2021-06-02 10:23:18",
    updateTime: "2023-04-26 16:45:22",
    username: "wang_wu",
    password: "dbe236c0fce6dc0a6bed67606cc87f86",
    name: "王五",
    phone: "13700000003",
    roleName: "前端",
    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    token: "wang_wu"
  },
  {
    id: 4,
    createTime: "2021-06-03 14:45:32",
    updateTime: "2023-04-25 11:28:39",
    username: "zhao_liu",
    password: "dbe236c0fce6dc0a6bed67606cc87f86",
    name: "赵六",
    phone: "13600000004",
    roleName: "后端",
    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    token: "zhao_liu"
  },
  {
    id: 5,
    createTime: "2021-06-04 16:37:54",
    updateTime: "2023-04-24 09:15:47",
    username: "qian_qi",
    password: "dbe236c0fce6dc0a6bed67606cc87f86",
    name: "钱七",
    phone: "13500000005",
    roleName: "测试",
    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    token: "System Token"
  },
  {
    id: 6,
    createTime: "2021-06-05 11:28:13",
    updateTime: "2023-04-23 17:32:58",
    username: "sun_ba",
    password: "dbe236c0fce6dc0a6bed67606cc87f86",
    name: "孙八",
    phone: "13400000006",
    roleName: "财务",
    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    token: "System Token"
  },
  {
    id: 7,
    createTime: "2021-06-06 08:42:37",
    updateTime: "2023-04-22 13:45:21",
    username: "zhou_jiu",
    password: "dbe236c0fce6dc0a6bed67606cc87f86",
    name: "周九",
    phone: "13300000007",
    roleName: "运维",
    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    token: "System Token"
  },
  {
    id: 8,
    createTime: "2021-06-07 15:19:28",
    updateTime: "2023-04-21 10:37:44",
    username: "wu_shi",
    password: "dbe236c0fce6dc0a6bed67606cc87f86",
    name: "吴十",
    phone: "13200000008",
    roleName: "销售",
    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    token: "System Token"
  },
  {
    id: 9,
    createTime: "2021-06-08 17:53:46",
    updateTime: "2023-04-20 08:29:15",
    username: "zheng_shiyi",
    password: "dbe236c0fce6dc0a6bed67606cc87f86",
    name: "郑十一",
    phone: "13100000009",
    roleName: "前台",
    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    token: "System Token"
  },
  {
    id: 10,
    createTime: "2021-06-09 09:27:35",
    updateTime: "2023-04-19 14:18:52",
    username: "wang_shier",
    password: "dbe236c0fce6dc0a6bed67606cc87f86",
    name: "王十二",
    phone: "13000000010",
    roleName: "运营",
    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    token: "System Token"
  },
  {
    id: 11,
    createTime: "2021-06-10 13:45:21",
    updateTime: "2023-04-18 16:22:43",
    username: "feng_shisan",
    password: "dbe236c0fce6dc0a6bed67606cc87f86",
    name: "冯十三",
    phone: "15900000011",
    roleName: "程序鼓励师",
    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    token: "System Token"
  },
  {
    id: 12,
    createTime: "2021-06-11 10:38:49",
    updateTime: "2023-04-17 11:47:38",
    username: "chen_shisi",
    password: "dbe236c0fce6dc0a6bed67606cc87f86",
    name: "陈十四",
    phone: "15800000012",
    roleName: "测试",
    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    token: "System Token"
  }
];
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
                code: "btn.User.add",
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
                code: "btn.User.remove",
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
                code: "btn.User.update",
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
                code: "btn.User.AssignRole",
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
                code: "btn.Role.assignAuth",
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
                code: "btn.Role.add",
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
                code: "btn.Role.update",
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
                code: "btn.Role.remove",
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
            code: "Permission",
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
                code: "btn.Permission.add",
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
                code: "btn.Permission.update",
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
                code: "btn.Permission.remove",
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
        code: "Product",
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
                code: "btn.Category.add",
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
                code: "btn.Category.update",
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
                code: "btn.Category.remove",
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
                code: "btn.Attr.add",
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
                code: "btn.Attr.update",
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
                code: "btn.Attr.remove",
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
            code: "Trademark",
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
                code: "btn.Trademark.add",
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
                code: "btn.Trademark.update",
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
                code: "btn.Trademark.remove",
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
                code: "btn.Spu.add",
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
                code: "btn.Sku.add",
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
                code: "btn.Spu.update",
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
                code: "btn.Sku.Search",
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
                code: "btn.Spu.remove",
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
                code: "btn.Sku.onStatus",
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
                code: "btn.Sku.update",
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
                code: "btn.Sku.details",
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
                code: "btn.Sku.remove",
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
// 构建权限映射（提前计算以提高性能）
const idToCodeMap = {};
const idToTypeMap = {}; // 新增：记录权限类型
const allPermissionCodes = new Set();

function buildPermissionMap(nodes) {
  nodes.forEach(node => {
    if (node.code) {
      idToCodeMap[node.id] = node.code;
      idToTypeMap[node.id] = node.type; // 记录权限类型
      allPermissionCodes.add(node.code);
    }
    if (node.children && node.children.length) {
      buildPermissionMap(node.children);
    }
  });
}
buildPermissionMap(AllMenuArr);
export default [
  // 用户登录接口
  {
    url: "/api/user/login", //请求地址
    method: "post", //请求方式
    response: ({ body }) => {
      //获取请求体携带过来的用户名与密码
      const { username, password } = body;
      //调用获取用户信息函数,用于判断是否有此用户
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password
      );
      //没有用户返回失败信息
      if (!checkUser) {
        return { code: 201, data: { message: "账号或者密码不正确" } };
      }
      //如果有返回成功信息
      const { token } = checkUser;
      return { code: 200, data: { token } };
    },
  },
  // 获取用户信息
  {
    url: "/api/user/info",
    method: "get",
    response: (request) => {
      const token = request.headers.token;
      const checkUser = userList.find((item) => item.token === token);

      if (!checkUser) {
        return { code: 201, data: { message: "获取用户信息失败" } };
      }

      // 解析用户角色
      const roles = checkUser.roleName.split(',').map(role => role.trim());

      // 获取用户所有角色ID
      const roleIds = [];
      roles.forEach(role => {
        const matchedRole = allRoleList.find(r => r.roleName === role);
        if (matchedRole) roleIds.push(matchedRole.id);
      });
      // 计算权限路由和按钮权限
      const userRoutes = new Set();    // 路由权限
      const userButtons = new Set();   // 按钮权限

      // 如果是超级管理员，添加所有权限
      if (roleIds.includes(1)) {
        allPermissionCodes.forEach(code => userRoutes.add(code));
        // 单独添加所有按钮权限
        Object.entries(idToTypeMap).forEach(([id, type]) => {
          if (type === 1 && idToCodeMap[id] && idToCodeMap[id].startsWith("btn")) {
            userButtons.add(idToCodeMap[id]);
          }
        });
      } else {
        // 合并所有角色的权限
        roleIds.forEach(roleId => {
          const permissions = rolePermissions[roleId] || [];
          permissions.forEach(permissionId => {
            const code = idToCodeMap[permissionId];
            if (code) {
              userRoutes.add(code);
              // 如果是按钮权限（类型为1且code以"btn"开头）
              if (idToTypeMap[permissionId] === 1 && code.startsWith("btn")) {
                userButtons.add(code);
              }
            }
          });
        });
      }
      // 构建响应数据
      return {
        code: 200,
        data: {
          checkUser,
          roles: roles,
          routes: Array.from(userRoutes),
          buttons: Array.from(userButtons)  // 添加按钮权限列表
        }
      };
    }
  },
  // {
  //   url: "/api/user/info",
  //   method: "get",
  //   response: (request) => {
  //     //获取请求头携带token
  //     const token = request.headers.token;
  //     //查看用户信息是否包含有token用户
  //     const checkUser = createUserList().find((item) => item.token == token);
  //     //没有返回失败的信息
  //     if (!checkUser) {
  //       return { code: 201, data: { message: "获取用户信息失败" } };
  //     }
  //     //如果有返回成功信息
  //     return { code: 200, data: { checkUser } };
  //     // 返回数据形式
  //     // {
  //     //   code:200,
  //     //   message:"成功",
  //     //   data:{
  //     //     avatar:"", 用户头像url
  //     //     name:"",   用户名称
  //     //     roles:[],  用户角色名称
  //     //     routes:[]  用户拥有的permission,对应AllMenuArr里面的code
  //     //   }
  //     // }
  //   },
  // },
  // 获取所有用户信息
  {
    url: "/api/acl/user/",
    method: "get",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }

      // 获取参数
      const page = parseInt(request.query.page); // page是需要的页数
      const limit = parseInt(request.query.limit); // limit是每页需要多少条数据
      const username = request.query.username; // 获取用户名参数

      // 根据username过滤数据
      let filteredList = userList;
      if (username && username.trim()) {
        const searchTerm = username.trim();
        filteredList = userList.filter(
          (user) => user.username && user.username.includes(searchTerm)
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
      // 返回数据格式
      // {
      //     code:200,
      //     message:"成功",
      //     data:{
      //         records:[
      //             {
      //                 id:1,
      //                 createTime:"2021-05-31 18:08:43",
      //                 updateTime:"2023-04-28 08:18:41",
      //                 username:"admin",
      //                 password:"dbe236c0fce6dc0a6bed67606cc87f86",
      //                 name:"admin",
      //                 phone:null,
      //                 roleName:"超级管理员,前台,运营,产品,前端,后端,测试,财务,运维,销售"

      //             },
      //         ],
      //         total:6,
      //         limit:5,
      //         page:2,
      //         searchCount:true
      //     }
      // }
    },
  },
  // 添加用户
  {
    url: "/api/acl/user/save",
    method: "post",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      // 生成新用户ID (当前最大ID+1)
      const newId = Math.max(...userList.map((u) => u.id)) + 1;
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

      const newUser = {
        id: newId,
        createTime: currentTime,
        updateTime: currentTime,
        username: request.body.username,
        password: request.body.password,
        name: request.body.name,
        phone: request.body.phone || null,
        roleName: request.body.roleName || null,
      };

      userList.push(newUser);
      return {
        code: 200,
        message: "添加成功",
        data: null,
      };
      // 请求体形式
      // {
      //     username:"",
      //     name:"",
      //     password:""
      // }
    },
  },
  // 更新用户
  {
    url: "/api/acl/user/update",
    method: "post",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      const userIndex = userList.findIndex((u) => u.id === request.body.id);
      if (userIndex === -1) {
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
      userList[userIndex] = {
        ...userList[userIndex],
        ...request.body,
        updateTime: currentTime,
        // 保留原始创建时间
        createTime: userList[userIndex].createTime,
      };

      return {
        code: 200,
        message: "更新成功",
        data: null,
      };
      // 请求体形式
      // {
      //     id:'',
      //     username:"",
      //     name:"",
      //     password:""
      // }
    },
  },
  // 获取全部职位，当前账号拥有的职位接口
  {
    url: "/api/acl/user/toAssign/",
    method: "get",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      const userId = request.query.userId;
      if (!userId) {
        return { code: 203, message: "缺少用户ID参数", data: null };
      }

      const user = userList.find((u) => u.id == userId);
      if (!user) {
        return { code: 202, message: "用户不存在", data: null };
      }
      // 获取用户分配到的角色（处理多个角色）
      const userRoles = user.roleName.split(",").map((r) => r.trim());
      const assignRoles = allRoleList.filter((role) =>
        userRoles.includes(role.roleName)
      );

      return {
        code: 200,
        message: "成功",
        data: {
          assignRoles,
          allRoleList,
        },
      };
      // 返回数据形式
      //allRoleList 是一个固定数组，roleName有11个，分别是 超级管理员、前台、运营、产品、前端、后端、测试、财务、运维、销售、程序鼓励师
      // {
      //     code:200,
      //     message:"成功",
      //     data:{
      //         assignRoles:[  用户分配到的职位
      //             {
      //                 id:3,
      //                 createTime:"2021-06-18 17:12:21",
      //                 updateTime:"2023-04-28 11:03:39",
      //                 roleName:"运营",
      //                 remark:null
      //             },
      //             {
      //                 id:5,
      //                 createTime:"2022-01-18 17:12:21",
      //                 updateTime:"2023-04-28 11:03:39",
      //                 roleName:"前端",
      //                 remark:null
      //             },
      //         ],
      //         allRoleList:[
      //             {
      //                 id:1,
      //                 createTime:"2021-06-18 17:12:21",
      //                 updateTime:"2023-04-28 11:03:39",
      //                 roleName:"超级管理员",
      //                 remark:null
      //             }
      //         ]
      //     }
      // }
    },
  },
  // 给已有的用户分配角色接口
  {
    url: "/api/acl/user/doAssignRole",
    method: "post",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      const { userId, roleIdList } = request.body;
      if (!userId || !roleIdList || !Array.isArray(roleIdList)) {
        return { code: 203, message: "参数不完整或格式错误", data: null };
      }

      const userIndex = userList.findIndex((u) => u.id == userId);
      if (userIndex === -1) {
        return { code: 202, message: "用户不存在", data: null };
      }

      // 使用全局的allRoleList定义（确保角色数据一致）
      const rolesMap = new Map(
        allRoleList.map((role) => [role.id, role.roleName])
      );

      // 验证角色ID并收集角色名称
      const assignedRoles = [];
      const invalidRoleIds = [];

      for (const roleId of roleIdList) {
        if (rolesMap.has(roleId)) {
          assignedRoles.push(rolesMap.get(roleId));
        } else {
          invalidRoleIds.push(roleId);
        }
      }

      if (invalidRoleIds.length > 0) {
        return {
          code: 204,
          message: `无效的角色ID: ${invalidRoleIds.join(", ")}`,
          data: null,
        };
      }

      // 更新用户角色（用逗号连接多个角色）
      userList[userIndex].roleName = assignedRoles.join(",");

      return {
        code: 200,
        message: "角色分配成功",
        data: null,
      };
      // 参数形式
      // {
      //     "roleIdList":[1,] // role的id
      //     "userId":1,//用户id
      // }
    },
  },
  // 删除某一账号
  {
    url: "/api/acl/user/remove/",
    method: "delete",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      const userId = request.query.userId;
      if (!userId) {
        return { code: 203, message: "参数不完整，缺少userId", data: null };
      }

      // 查找用户索引
      const userIndex = userList.findIndex((u) => u.id == userId);
      if (userIndex === -1) {
        return { code: 202, message: "用户不存在", data: null };
      }

      // 检查是否为管理员（防止删除管理员账号）
      if (userList[userIndex].roleName.includes("超级管理员")) {
        return {
          code: 205,
          message: "无法删除管理员账号",
          data: null,
        };
      }

      // 从用户列表中删除
      const [deletedUser] = userList.splice(userIndex, 1);
      return {
        code: 200,
        message: `用户 ${deletedUser.name} (ID: ${deletedUser.id}) 删除成功`,
        data: null,
      };
    },
  },
  // 删除批量账号
  {
    url: "/api/acl/user/batchRemove",
    method: "delete",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      let selectUserIds = request.body;

      // 验证请求参数
      if (!selectUserIds) {
        return { code: 203, message: "参数不完整", data: null };
      }

      if (selectUserIds.length === 0) {
        return { code: 206, message: "请选择要删除的用户", data: null };
      }

      // 检查用户是否存在
      const notFoundIds = [];
      const adminUsers = [];
      // 先检查所有用户是否存在且不是管理员
      for (const userId of selectUserIds) {
        const user = userList.find((u) => u.id == userId);

        if (!user) {
          notFoundIds.push(userId);
        }
        // 检查是否为管理员（防止删除管理员账号）
        else if (user.roleName.includes("超级管理员")) {
          adminUsers.push(user);
        }
      }

      // 处理错误情况
      if (notFoundIds.length > 0) {
        return {
          code: 202,
          message: `部分用户不存在: ${notFoundIds.join(", ")}`,
          data: null,
        };
      }
      if (adminUsers.length > 0) {
        const adminIds = adminUsers.map((u) => u.id).join(", ");
        return {
          code: 205,
          message: `无法删除管理员账号: ${adminIds}`,
          data: null,
        };
      }

      // 执行批量删除（从后往前删除避免索引问题）
      const sortedIds = [...selectUserIds].sort((a, b) => b - a);
      const deletedUsers = [];

      for (const userId of sortedIds) {
        const index = userList.findIndex((u) => u.id == userId);
        if (index !== -1) {
          deletedUsers.push(userList[index].name);
          userList.splice(index, 1);
        }
      }

      return {
        code: 200,
        message: `成功删除 ${deletedUsers.length} 个用户: ${deletedUsers.join(
          ", "
        )}`,
        data: null,
      };
    },
  },
];
