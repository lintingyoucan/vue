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
                                code: "btn.Menu.add",
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
                                code: "btn.Menu.update",
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
                                code: "btn.Menu.remove",
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
                                code: "btn.Brand.add",
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
                                code: "btn.Brand.update",
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
                                code: "btn.Brand.remove",
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
// 辅助函数：查找树中最大的 ID 值
function findMaxId(tree) {
    let maxId = 0;
    tree.forEach(node => {
        if (node.id > maxId) maxId = node.id;
        if (node.children && node.children.length > 0) {
            const childMax = findMaxId(node.children);
            if (childMax > maxId) maxId = childMax;
        }
    });
    return maxId;
}
// 辅助函数：根据 ID 查找节点
function findNodeById(tree, id) {
    for (const node of tree) {
        if (node.id === id) return node;
        if (node.children && node.children.length > 0) {
            const found = findNodeById(node.children, id);
            if (found) return found;
        }
    }
    return null;
}

// 辅助函数：根据 PID 查找父节点
function findParentNode(tree, pid) {
    for (const node of tree) {
        if (node.id === pid) return node;
        if (node.children && node.children.length > 0) {
            const found = findParentNode(node.children, pid);
            if (found) return found;
        }
    }
    return null;
}
export default [
    // 获取全部菜单
    {
        url: "/api/acl/permission",
        method: "get",
        response: (request) => {
            const token = request.headers.token;
            if (!token) {
                return { code: 201, message: "token无效或已过期", data: null };
            }
            return {
                code: 200,
                message: "成功",
                data: AllMenuArr
            };
        }
    },
    // 添加菜单
    {
        url: "/api/acl/permission/save",
        method: "post",
        response: (request) => {
            const token = request.headers.token;
            if (!token) {
                return { code: 201, message: "token无效或已过期", data: null };
            }
            const menuData = request.body;
            // 生成新ID
            const newId = findMaxId(AllMenuArr) + 1;

            // 创建新菜单项
            const newMenu = {
                id: newId,
                createTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
                updateTime: new Date().toISOString().replace('T', ' ').substring(0, 19),
                pid: menuData.pid,
                name: menuData.name,
                code: menuData.code || null,
                toCode: null,
                type: 1,
                status: null,
                level: menuData.level,
                children: []
            };

            // 查找父节点
            const parentNode = findParentNode(AllMenuArr, menuData.pid);
            if (!parentNode) {
                return { code: 404, message: "未找到父级菜单", data: null };
            }

            // 初始化父节点的 children 数组（如果不存在）
            if (!parentNode.children) {
                parentNode.children = [];
            }

            // 添加新菜单到父节点
            parentNode.children.push(newMenu);

            return {
                code: 200,
                message: "菜单添加成功",
                data: newMenu
            };
        }
    },
    // 更新菜单
    {
        url: "/api/acl/permission/update",
        method: "post",
        response: (request) => {
            const token = request.headers.token;
            if (!token) {
                return { code: 201, message: "token无效或已过期", data: null };
            }
            const menuData = request.body;
            // 查找要更新的菜单项
            const existingMenu = findNodeById(AllMenuArr, menuData.id);

            if (!existingMenu) {
                return { code: 404, message: "未找到指定的菜单项", data: null };
            }

            // 更新可修改字段
            if (menuData.name) existingMenu.name = menuData.name;
            if (menuData.code) existingMenu.code = menuData.code;
            if (menuData.level) existingMenu.level = menuData.level;

            // 更新修改时间
            existingMenu.updateTime = new Date().toISOString().replace('T', ' ').substring(0, 19);

            return {
                code: 200,
                message: "菜单更新成功",
                data: existingMenu
            };

        }
    },
    // 删除菜单
    {
        url: "/api/acl/permission/remove/",
        method: "delete",
        response: (request) => {
            const token = request.headers.token;
            if (!token) {
                return { code: 201, message: "token无效或已过期", data: null };
            }
            // 获取要删除的菜单ID
            const menuId = parseInt(request.query.id);

            // 验证ID
            if (!menuId || menuId <= 0) {
                return { code: 400, message: "无效的菜单ID", data: null };
            }

            // 防止删除根节点（全部数据）
            if (menuId === 1) {
                return { code: 403, message: "不能删除根菜单", data: null };
            }

            // 查找要删除的节点及其父节点
            let found = false;
            let parentNode = null;
            let nodeIndex = -1;
            // 递归查找函数
            const findNode = (tree) => {
                for (let i = 0; i < tree.length; i++) {
                    const node = tree[i];

                    // 检查当前节点
                    if (node.id === menuId) {
                        return { node, parent: tree, index: i };
                    }

                    // 递归检查子节点
                    if (node.children && node.children.length > 0) {
                        const result = findNode(node.children);
                        if (result) return result;
                    }
                }
                return null;
            };
            // 在菜单树中查找节点
            const result = findNode(AllMenuArr);

            if (!result) {
                return { code: 404, message: "未找到指定的菜单项", data: null };
            }

            // 从父节点中删除该节点
            result.parent.splice(result.index, 1);

            return {
                code: 200,
                message: "菜单删除成功",
                data: {
                    deletedId: menuId
                }
            };
        }
    }
]