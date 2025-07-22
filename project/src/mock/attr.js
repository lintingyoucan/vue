let C1List = [
  { id: 1, name: "家用电器" },
  { id: 2, name: "手机数码" },
  { id: 3, name: "电脑办公" },
];

let C2List = [
  { id: 1, name: "电视", categoryId1: 1 },
  { id: 2, name: "空调", categoryId1: 1 },
  { id: 3, name: "洗衣机", categoryId1: 1 },
  { id: 4, name: "手机", categoryId1: 2 },
  { id: 5, name: "相机", categoryId1: 2 },
  { id: 6, name: "笔记本", categoryId1: 3 },
  { id: 7, name: "台式机", categoryId1: 3 },
];

let C3List = [
  { id: 1, name: "曲面电视", categoryId2: 1 },
  { id: 2, name: "超薄电视", categoryId2: 1 },
  { id: 3, name: "智能电视", categoryId2: 1 },
  { id: 4, name: "壁挂式空调", categoryId2: 2 },
  { id: 5, name: "立式空调", categoryId2: 2 },
  { id: 6, name: "滚筒洗衣机", categoryId2: 3 },
  { id: 7, name: "波轮洗衣机", categoryId2: 3 },
  { id: 8, name: "智能手机", categoryId2: 4 },
  { id: 9, name: "拍照手机", categoryId2: 4 },
  { id: 10, name: "单反相机", categoryId2: 5 },
  { id: 11, name: "微单相机", categoryId2: 5 },
  { id: 12, name: "游戏本", categoryId2: 6 },
  { id: 13, name: "轻薄本", categoryId2: 6 },
  { id: 14, name: "电竞台式机", categoryId2: 7 },
  { id: 15, name: "设计师电脑", categoryId2: 7 },
];

// 属性存储
let attrList = [
  { id: 1, attrName: "屏幕尺寸", categoryId: 1, categoryLevel: 3 },
  { id: 2, attrName: "分辨率", categoryId: 1, categoryLevel: 3 },
  { id: 3, attrName: "制冷功率", categoryId: 4, categoryLevel: 3 },
  { id: 4, attrName: "能效等级", categoryId: 4, categoryLevel: 3 },
  { id: 5, attrName: "容量", categoryId: 6, categoryLevel: 3 },
  { id: 6, attrName: "洗涤方式", categoryId: 6, categoryLevel: 3 },
  { id: 7, attrName: "手机容量", categoryId: 8, categoryLevel: 3 },
  { id: 8, attrName: "颜色", categoryId: 8, categoryLevel: 3 },
  { id: 9, attrName: "摄像头像素", categoryId: 9, categoryLevel: 3 },
  { id: 10, attrName: "光学变焦", categoryId: 10, categoryLevel: 3 },
  { id: 11, attrName: "处理器型号", categoryId: 12, categoryLevel: 3 },
  { id: 12, attrName: "显卡类型", categoryId: 12, categoryLevel: 3 },
  { id: 13, attrName: "内存容量", categoryId: 14, categoryLevel: 3 },
  { id: 14, attrName: "硬盘类型", categoryId: 14, categoryLevel: 3 },
  { id: 15, attrName: "品牌", categoryId: 1, categoryLevel: 1 },
  { id: 16, attrName: "能效等级", categoryId: 1, categoryLevel: 1 },
  { id: 17, attrName: "产品类型", categoryId: 2, categoryLevel: 2 },
  { id: 18, attrName: "网络类型", categoryId: 2, categoryLevel: 2 },
];
// 属性值存储
let attrValueList = [
  { id: 1, valueName: "55英寸", attrId: 1 },
  { id: 2, valueName: "65英寸", attrId: 1 },
  { id: 3, valueName: "75英寸", attrId: 1 },
  { id: 4, valueName: "4K超高清", attrId: 2 },
  { id: 5, valueName: "8K超高清", attrId: 2 },
  { id: 6, valueName: "1.5匹", attrId: 3 },
  { id: 7, valueName: "2匹", attrId: 3 },
  { id: 8, valueName: "3匹", attrId: 3 },
  { id: 9, valueName: "一级能效", attrId: 4 },
  { id: 10, valueName: "二级能效", attrId: 4 },
  { id: 11, valueName: "三级能效", attrId: 4 },
  { id: 12, valueName: "8kg", attrId: 5 },
  { id: 13, valueName: "10kg", attrId: 5 },
  { id: 14, valueName: "12kg", attrId: 5 },
  { id: 15, valueName: "滚筒", attrId: 6 },
  { id: 16, valueName: "波轮", attrId: 6 },
  { id: 17, valueName: "128GB", attrId: 7 },
  { id: 18, valueName: "256GB", attrId: 7 },
  { id: 19, valueName: "512GB", attrId: 7 },
  { id: 20, valueName: "曜石黑", attrId: 8 },
  { id: 21, valueName: "珍珠白", attrId: 8 },
  { id: 22, valueName: "天空蓝", attrId: 8 },
  { id: 23, valueName: "4800万", attrId: 9 },
  { id: 24, valueName: "6400万", attrId: 9 },
  { id: 25, valueName: "1亿", attrId: 9 },
  { id: 26, valueName: "3倍", attrId: 10 },
  { id: 27, valueName: "5倍", attrId: 10 },
  { id: 28, valueName: "10倍", attrId: 10 },
  { id: 29, valueName: "i7-12700H", attrId: 11 },
  { id: 30, valueName: "Ryzen 7 6800H", attrId: 11 },
  { id: 31, valueName: "RTX 3060", attrId: 12 },
  { id: 32, valueName: "RTX 3070", attrId: 12 },
  { id: 33, valueName: "16GB", attrId: 13 },
  { id: 34, valueName: "32GB", attrId: 13 },
  { id: 35, valueName: "64GB", attrId: 13 },
  { id: 36, valueName: "SSD", attrId: 14 },
  { id: 37, valueName: "NVMe SSD", attrId: 14 },
  { id: 38, valueName: "海信", attrId: 15 },
  { id: 39, valueName: "TCL", attrId: 15 },
  { id: 40, valueName: "创维", attrId: 15 },
  { id: 41, valueName: "一级", attrId: 16 },
  { id: 42, valueName: "二级", attrId: 16 },
  { id: 43, valueName: "智能手机", attrId: 17 },
  { id: 44, valueName: "拍照手机", attrId: 17 },
  { id: 45, valueName: "5G", attrId: 18 },
  { id: 46, valueName: "4G", attrId: 18 },
];
// 生成唯一ID
let nextAttrId = Math.max(...attrList.map((item) => item.id), 0) + 1;
let nextAttrValueId = Math.max(...attrValueList.map((item) => item.id), 0) + 1;
export default [
  // 获取c1列表接口
  {
    url: "/api/product/getCategory1",
    method: "get", // 请求方式
    response: (request) => {
      // 获取请求头携带的token
      const token = request.headers.token;

      // 验证token（这里使用您用户数据中的token）
      const validTokens = createUserList().map((item) => item.token);
      if (!token || !validTokens.includes(token)) {
        return { code: 201, data: { message: "token无效或已过期" } };
      }

      return {
        code: 200,
        message: "成功",
        data: C1List,
      };
    },
  },
  // 获取c2列表接口
  {
    url: "/api/product/getCategory2/",
    method: "get", // 请求方式
    response: (request) => {
      // 获取请求头携带的token
      const token = request.headers.token;

      // 验证token（这里使用您用户数据中的token）
      const validTokens = createUserList().map((item) => item.token);
      if (!token || !validTokens.includes(token)) {
        return { code: 201, data: { message: "token无效或已过期" } };
      }
      // 获取参数
      const categoryId1 = parseInt(request.query.categoryId1);
      const data = C2List.filter((item) => item.categoryId1 == categoryId1);

      return {
        code: 200,
        message: "成功",
        data,
      };
    },
  },
  // 获取c3列表接口
  {
    url: "/api/product/getCategory3/",
    method: "get", // 请求方式
    response: (request) => {
      // 获取请求头携带的token
      const token = request.headers.token;

      // 验证token（这里使用您用户数据中的token）
      const validTokens = createUserList().map((item) => item.token);
      if (!token || !validTokens.includes(token)) {
        return { code: 201, data: { message: "token无效或已过期" } };
      }
      // 获取参数
      const categoryId2 = parseInt(request.query.categoryId2);
      const data = C3List.filter((item) => item.categoryId2 == categoryId2);

      return {
        code: 200,
        message: "成功",
        data,
      };
    },
  },
  // 获取属性和属性值
  {
    url: "/api/product/attrInfoList/",
    method: "get",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }

      // 获取参数
      const categoryId1 = parseInt(request.query.categoryId1);
      const categoryId2 = parseInt(request.query.categoryId2);
      const categoryId3 = parseInt(request.query.categoryId3);

      // 查找对应的三级分类
      const category3 = C3List.find((c3) => c3.id === categoryId3);
      if (!category3) {
        return { code: 404, message: "分类不存在", data: null };
      }
      // 查找对应分类的所有属性
      const attributes = attrList.filter(
        (attr) =>
          attr.categoryId === categoryId1 ||
          attr.categoryId === categoryId2 ||
          attr.categoryId === categoryId3
      );

      // 为每个属性添加属性值
      const result = attributes.map((attr) => {
        const values = attrValueList
          .filter((value) => value.attrId === attr.id)
          .map(({ id, valueName, attrId }) => ({ id, valueName, attrId }));

        return {
          id: attr.id,
          attrName: attr.attrName,
          categoryId: attr.categoryId,
          categoryLevel: attr.categoryLevel,
          attrValueList: values,
        };
      });
      return {
        code: 200,
        message: "成功",
        data: result,
      };
    },
  },

  // 添加或修改属性
  {
    url: "/api/product/saveAttrInfo/",
    method: "post",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      const attrData = request.body;

      // 验证必要字段
      if (
        !attrData.attrName ||
        !attrData.categoryId ||
        !attrData.categoryLevel
      ) {
        return { code: 400, message: "缺少必要参数", data: null };
      }

      // 检查属性名在相同分类下是否已存在
      const existingAttr = attrList.find(
        (attr) =>
          attr.attrName === attrData.attrName &&
          attr.categoryId === attrData.categoryId
      );

      let attrId;
      if (existingAttr) {
        // 如果存在同名属性，自动进行修改操作
        const index = attrList.findIndex((a) => a.id === existingAttr.id);
        attrList[index].attrName = attrData.attrName;
        attrList[index].categoryId = attrData.categoryId;
        attrList[index].categoryLevel = attrData.categoryLevel;
        attrId = existingAttr.id;
      } else {
        // 添加新属性
        const newAttr = {
          id: nextAttrId++,
          attrName: attrData.attrName,
          categoryId: attrData.categoryId,
          categoryLevel: attrData.categoryLevel,
        };
        attrList.push(newAttr);
        attrId = newAttr.id;
      }

      // 处理属性值 =============================================
      const validValues = (attrData.attrValueList || [])
        .filter((v) => v.valueName && v.valueName.trim() !== "")
        .map((v) => ({
          ...v,
          valueName: v.valueName.trim(),
        }));

      // 获取当前属性所有现有值
      const currentValues = attrValueList.filter((v) => v.attrId === attrId);

      // 更新或新增属性值
      validValues.forEach((value) => {
        // 检查是否已存在相同属性值
        const existingValue = currentValues.find(
          (v) => v.valueName.toLowerCase() === value.valueName.toLowerCase()
        );

        if (existingValue) {
          // 更新现有值
          const index = attrValueList.findIndex(
            (v) => v.id === existingValue.id
          );
          if (index !== -1) {
            attrValueList[index].valueName = value.valueName;
          }
        } else {
          // 新增属性值
          attrValueList.push({
            id: nextAttrValueId++,
            valueName: value.valueName,
            attrId: attrId,
          });
        }
      });

      // 删除不再存在的属性值
      const retainedValues = validValues.map((v) => v.valueName.toLowerCase());
      attrValueList = attrValueList.filter((v) => {
        if (v.attrId !== attrId) return true;
        return retainedValues.includes(v.valueName.toLowerCase());
      });
      return {
        code: 200,
        message: existingAttr ? "属性更新成功" : "属性添加成功",
        data: { id: attrId }, // 始终返回操作的属性ID
      };
    },
  },
  // 根据attrid删除属性和对应属性值
  {
    url: "/api/product/deleteAttr/",
    method: "delete",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      // 获取要删除的属性ID
      const attrId = parseInt(request.query.attrId);
      const attrIndex = attrList.findIndex((attr) => attr.id === attrId);
      // 删除属性
      attrList.splice(attrIndex, 1);

      // 删除关联的属性值
      attrValueList = attrValueList.filter((value) => value.attrId !== attrId);

      return {
        code: 200,
        message: "删除成功",
        data: null,
      };
    },
  },
];

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
