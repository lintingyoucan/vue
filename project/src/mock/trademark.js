// mock/trademark.js
let trademarkList = [
    { id: 1, tmName: '苹果', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 2, tmName: '三星', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 3, tmName: '华为', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 4, tmName: '小米', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 5, tmName: 'OPPO', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 6, tmName: 'VIVO', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 7, tmName: '荣耀', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 8, tmName: '一加', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 9, tmName: '联想', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 10, tmName: '戴尔', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 11, tmName: '惠普', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 12, tmName: '华硕', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 13, tmName: '宏碁', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 14, tmName: '微软', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 15, tmName: '谷歌', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 16, tmName: '索尼', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 17, tmName: 'LG', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 18, tmName: '诺基亚', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 19, tmName: '魅族', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
    { id: 20, tmName: '中兴', logoUrl: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png' },
];

function createTrademarkList() {
    return trademarkList; // 返回持久化的数组
}

export default [
    // 获取品牌列表接口
    {
        url: '/api/product/baseTrademark/', // 请求地址http://localhost:5173/api/product/aseTrademark/1/3
        method: 'get', // 请求方式
        response: (request) => {
            // 获取请求头携带的token
            const token = request.headers.token;

            // 验证token（这里使用您用户数据中的token）
            const validTokens = createUserList().map(item => item.token);
            if (!token || !validTokens.includes(token)) {
                return { code: 201, data: { message: 'token无效或已过期' } }
            }

            // 获取分页参数
            const page = parseInt(request.query.page);
            const limit = parseInt(request.query.limit) || 3;

            // 获取全部品牌数据
            const allTrademarks = createTrademarkList();
            const total = allTrademarks.length;

            // 计算分页数据
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            const records = allTrademarks.slice(startIndex, endIndex);

            return {
                code: 200,
                data: {
                    total,
                    size: limit,
                    current: page,
                    records
                }
            };
        },
    },

    // 上传文件
    {
        url: '/api/product/baseTrademark/uploadFile',
        method: 'post', // 请求方式
        response: (request) => {
            // 获取请求头携带的token
            const token = request.headers.token;

            // 验证token（这里使用您用户数据中的token）
            const validTokens = createUserList().map(item => item.token);
            if (!token || !validTokens.includes(token)) {
                return { code: 201, data: { message: 'token无效或已过期' } }
            }

            return {
                code: 200,
                message: 'success',
                data: 'https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png'
            };
        },
    },

    // 添加品牌
    {
        url: '/api/product/baseTrademark/save',
        method: 'post',
        response: (request) => {
            // 获取请求头携带的token
            const token = request.headers.token;

            // 验证token（这里使用您用户数据中的token）
            const validTokens = createUserList().map(item => item.token);
            if (!token || !validTokens.includes(token)) {
                return { code: 201, data: { message: 'token无效或已过期' } }
            }

            const { tmName, logoUrl } = request.body;
            if (!tmName || !logoUrl) {
                return {
                    code: 400,
                    data: null,
                    message: '品牌名称和Logo不能为空'
                }
            }
            // 获取当前最大ID的函数
            const currentList = createTrademarkList();

            // 计算新ID
            const maxId = currentList.length > 0
                ? Math.max(...currentList.map(item => item.id))
                : 0;
            const newId = maxId + 1;

            const newTrademark = {
                id: newId,
                tmName: tmName,
                logoUrl: logoUrl
            };

            // 添加到持久化数组
            trademarkList.push(newTrademark);
            return {
                code: 200,
                data: {
                    id: newId
                },
                message: '添加成功'
            }

        }
    },

    // 更新品牌
    {
        url: '/api/product/baseTrademark/update',
        method: 'put',
        response: (request) => {
            // 获取请求头携带的token
            const token = request.headers.token;

            // 验证token（这里使用您用户数据中的token）
            const validTokens = createUserList().map(item => item.token);
            if (!token || !validTokens.includes(token)) {
                return { code: 201, data: { message: 'token无效或已过期' } }
            }

            const { id, tmName, logoUrl } = request.body;
            // 查找需要更新的品牌
            const targetIndex = trademarkList.findIndex(item => item.id === id);

            if (targetIndex === -1) {
                return {
                    code: 404,
                    message: '品牌不存在',
                    data: null
                };
            }

            // 更新品牌信息
            trademarkList[targetIndex] = {
                ...trademarkList[targetIndex],
                tmName,
                logoUrl
            };

            return {
                code: 200,
                message: '更新成功',
                data: null
            };
        }
    },

    // 删除品牌
    {
        url: '/api/product/baseTrademark/delete',
        method: 'delete',
        response: (request) => {
            // 获取请求头携带的token
            const token = request.headers.token;

            // 验证token（这里使用您用户数据中的token）
            const validTokens = createUserList().map(item => item.token);
            if (!token || !validTokens.includes(token)) {
                return { code: 201, data: { message: 'token无效或已过期' } }
            }
            // 获取参数
            const id = parseInt(request.query.id);
            if (!id) {
                return {
                    code: 400,
                    message: '缺少品牌ID参数',
                    data: null
                };
            }
            // 查找品牌索引
            const index = trademarkList.findIndex(item => item.id === id);
            // 删除品牌
            const [deletedItem] = trademarkList.splice(index, 1);
            return {
                code: 200,
                message: '删除成功'
            }

        }
    }


]
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
