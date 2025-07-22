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
let trademarkList = [
  {
    id: 1,
    tmName: "苹果",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 2,
    tmName: "三星",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 3,
    tmName: "华为",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 4,
    tmName: "小米",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 5,
    tmName: "OPPO",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 6,
    tmName: "VIVO",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 7,
    tmName: "荣耀",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 8,
    tmName: "一加",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 9,
    tmName: "联想",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 10,
    tmName: "戴尔",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 11,
    tmName: "惠普",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 12,
    tmName: "华硕",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 13,
    tmName: "宏碁",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 14,
    tmName: "微软",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 15,
    tmName: "谷歌",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 16,
    tmName: "索尼",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 17,
    tmName: "LG",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 18,
    tmName: "诺基亚",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 19,
    tmName: "魅族",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
  {
    id: 20,
    tmName: "中兴",
    logoUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
  },
];
// 固定的SPU测试数据
const spuList = [
  // 拍照手机 (category3Id:9)
  {
    id: 1,
    spuName: "VIVO S10 Pro",
    description:
      "品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo产品名称\nS10 Pro\n品牌\nvivo",
    category3Id: 9,
    tmId: 5,
  },
  {
    id: 2,
    spuName: "VIVO S10",
    description:
      "产品名称\nS10\n品牌\nvivo\nVIVO是专注于智能手机领域的国际化品牌，以拍照和音乐功能著称。",
    category3Id: 9,
    tmId: 5,
  },
  {
    id: 3,
    spuName: "VIVO S11",
    description:
      "产品名称\nS11\n品牌\nvivo\nVIVO是专注于智能手机领域的国际化品牌，以拍照和音乐功能著称。",
    category3Id: 9,
    tmId: 5,
  },
  {
    id: 4,
    spuName: "OPPO Reno8",
    description:
      "产品名称\nReno8\n品牌\nOPPO\nOPPO专注于手机拍照领域的技术创新，主打年轻人市场。",
    category3Id: 9,
    tmId: 6,
  },

  // 智能手机 (category3Id:8)
  {
    id: 5,
    spuName: "iPhone 14",
    description: "产品名称\niPhone 14\n品牌\nApple",
    category3Id: 8,
    tmId: 3,
  },
  {
    id: 6,
    spuName: "华为 P60",
    description: "产品名称\nP60\n品牌\n华为",
    category3Id: 8,
    tmId: 1,
  },

  // 曲面电视 (category3Id:1)
  {
    id: 7,
    spuName: "三星 QLED 曲面电视",
    description: "产品名称\nQLED曲面电视\n品牌\n三星",
    category3Id: 1,
    tmId: 4,
  },
  {
    id: 8,
    spuName: "索尼 X90J 曲面",
    description: "产品名称\nX90J曲面\n品牌\n索尼",
    category3Id: 1,
    tmId: 7,
  },

  // 超薄电视 (category3Id:2)
  {
    id: 9,
    spuName: "小米 超薄电视 4K",
    description: "产品名称\n超薄电视4K\n品牌\n小米",
    category3Id: 2,
    tmId: 2,
  },

  // 智能电视 (category3Id:3)
  {
    id: 10,
    spuName: "TCL 智能电视",
    description: "产品名称\n智能电视\n品牌\nTCL",
    category3Id: 3,
    tmId: 8,
  },

  // 壁挂式空调 (category3Id:4)
  {
    id: 11,
    spuName: "格力 壁挂式空调",
    description: "产品名称\n壁挂式空调\n品牌\n格力",
    category3Id: 4,
    tmId: 9,
  },

  // 立式空调 (category3Id:5)
  {
    id: 12,
    spuName: "美的 立式空调",
    description: "产品名称\n立式空调\n品牌\n美的",
    category3Id: 5,
    tmId: 10,
  },

  // 滚筒洗衣机 (category3Id:6)
  {
    id: 13,
    spuName: "海尔 滚筒洗衣机",
    description: "产品名称\n滚筒洗衣机\n品牌\n海尔",
    category3Id: 6,
    tmId: 11,
  },

  // 波轮洗衣机 (category3Id:7)
  {
    id: 14,
    spuName: "小天鹅 波轮洗衣机",
    description: "产品名称\n波轮洗衣机\n品牌\n小天鹅",
    category3Id: 7,
    tmId: 12,
  },

  // 单反相机 (category3Id:10)
  {
    id: 15,
    spuName: "佳能 EOS R5",
    description: "产品名称\nEOS R5\n品牌\n佳能",
    category3Id: 10,
    tmId: 13,
  },

  // 微单相机 (category3Id:11)
  {
    id: 16,
    spuName: "索尼 Alpha 7 IV",
    description: "产品名称\nAlpha 7 IV\n品牌\n索尼",
    category3Id: 11,
    tmId: 7,
  },

  // 游戏本 (category3Id:12)
  {
    id: 17,
    spuName: "ROG 枪神6",
    description: "产品名称\n枪神6\n品牌\nROG",
    category3Id: 12,
    tmId: 14,
  },

  // 轻薄本 (category3Id:13)
  {
    id: 18,
    spuName: "MacBook Air M2",
    description: "产品名称\nMacBook Air M2\n品牌\nApple",
    category3Id: 13,
    tmId: 3,
  },

  // 电竞台式机 (category3Id:14)
  {
    id: 19,
    spuName: "Alienware Aurora R13",
    description: "产品名称\nAurora R13\n品牌\nAlienware",
    category3Id: 14,
    tmId: 15,
  },

  // 设计师电脑 (category3Id:15)
  {
    id: 20,
    spuName: "联想 ThinkStation",
    description: "产品名称\nThinkStation\n品牌\n联想",
    category3Id: 15,
    tmId: 16,
  },

  // 为category3Id:9添加更多数据，方便分页测试
  {
    id: 21,
    spuName: "华为 P50 Pro",
    description:
      "产品名称\nP50 Pro\n品牌\n华为华为是全球领先的信息与通信技术解决方案供应商，以智能手机和5G技术闻名。",
    category3Id: 9,
    tmId: 1,
  },
  {
    id: 22,
    spuName: "小米 12 Ultra",
    description:
      "产品名称\n12 Ultra\n品牌\n小米\n小米以高性价比智能手机和智能硬件产品著称，生态链覆盖广泛。",
    category3Id: 9,
    tmId: 2,
  },
  {
    id: 23,
    spuName: "三星 Galaxy S22",
    description: "产品名称\nGalaxy S22\n品牌\n三星",
    category3Id: 9,
    tmId: 4,
  },
  {
    id: 24,
    spuName: "iPhone 14 Pro",
    description: "产品名称\niPhone 14 Pro\n品牌\nApple",
    category3Id: 9,
    tmId: 3,
  },
];

// ==================== 图片数据 ====================
const fixedImageData = {
  1: [
    {
      id: 101,
      spuId: 1,
      imgName: "main",
      imgUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    },
    {
      id: 102,
      spuId: 1,
      imgName: "detail",
      imgUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    },
    {
      id: 103,
      spuId: 1,
      imgName: "side",
      imgUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    },
  ],
  2: [
    {
      id: 201,
      spuId: 2,
      imgName: "front",
      imgUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    },
    {
      id: 202,
      spuId: 2,
      imgName: "back",
      imgUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    },
  ],
  // 其他SPU的图片数据
  3: [
    {
      id: 301,
      spuId: 3,
      imgName: "main",
      imgUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    },
  ],
  4: [
    {
      id: 401,
      spuId: 4,
      imgName: "front",
      imgUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    },
    {
      id: 402,
      spuId: 4,
      imgName: "angle",
      imgUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    },
  ],
  // 通用图片数据（为没有单独设置的SPU提供）
  default: [
    {
      id: 9991,
      spuId: 999,
      imgName: "default1",
      imgUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    },
    {
      id: 9992,
      spuId: 999,
      imgName: "default2",
      imgUrl: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    },
  ],
};

// ==================== 销售属性数据 ====================
const fixedSaleAttrData = {
  1: [
    {
      id: "43",
      spuId: 1,
      baseSaleAttrId: "1",
      saleAttrName: "颜色",
      spuSaleAttrValueList: [
        { id: "431", baseSaleAttrId: "1", saleAttrValueName: "曜石黑" },
        { id: "432", baseSaleAttrId: "1", saleAttrValueName: "珍珠白" },
      ],
    },
    {
      id: "44",
      spuId: 1,
      baseSaleAttrId: "2",
      saleAttrName: "版本",
      spuSaleAttrValueList: [
        { id: "441", baseSaleAttrId: "2", saleAttrValueName: "8GB+128GB" },
        { id: "442", baseSaleAttrId: "2", saleAttrValueName: "8GB+256GB" },
      ],
    },
  ],
  2: [
    {
      id: "45",
      spuId: 2,
      baseSaleAttrId: "1",
      saleAttrName: "颜色",
      spuSaleAttrValueList: [
        { id: "451", baseSaleAttrId: "1", saleAttrValueName: "星空蓝" },
        { id: "452", baseSaleAttrId: "1", saleAttrValueName: "樱花粉" },
      ],
    },
  ],
  // 通用销售属性（为没有单独设置的SPU提供）
  default: [
    {
      id: "99",
      spuId: 999,
      baseSaleAttrId: "1",
      saleAttrName: "颜色",
      spuSaleAttrValueList: [
        { id: "991", baseSaleAttrId: "1", saleAttrValueName: "经典黑" },
      ],
    },
    {
      id: "100",
      spuId: 999,
      baseSaleAttrId: "3",
      saleAttrName: "尺码",
      spuSaleAttrValueList: [
        { id: "1001", baseSaleAttrId: "3", saleAttrValueName: "标准版" },
      ],
    },
  ],
};

// ==================== 全部销售属性（固定值） ====================
const allSaleAttrs = [
  { id: 1, name: "颜色" },
  { id: 2, name: "版本" },
  { id: 3, name: "尺码" },
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
// ==================== SKU数据存储 ====================
let skuList = [
  {
    id: 1,
    spuId: 1,
    price: 2999.0,
    skuName: "VIVO S10 Pro 曜石黑 8GB+128GB",
    skuDesc: "VIVO旗舰拍照手机，专业人像模式",
    weight: 0.18,
    tmId: 5,
    category3Id: 9,
    skuDefaultImg: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    skuAttrValueList: [
      { attrId: 9, valueId: 23 }, // 摄像头像素: 4800万
      { attrId: 7, valueId: 17 }, // 手机容量: 128GB
    ],
    skuSaleAttrValueList: [
      { saleAttrId: "1", saleAttrValueId: "431" }, // 颜色: 曜石黑
      { saleAttrId: "2", saleAttrValueId: "441" }, // 版本: 8GB+128GB
    ],
    isSale: 1,
  },
  {
    id: 2,
    spuId: 1,
    price: 3299.0,
    skuName: "VIVO S10 Pro 珍珠白 8GB+256GB",
    skuDesc: "VIVO旗舰拍照手机，专业人像模式",
    weight: 0.18,
    tmId: 5,
    category3Id: 9,
    skuDefaultImg: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    skuAttrValueList: [
      { attrId: 9, valueId: 23 }, // 摄像头像素: 4800万
      { attrId: 7, valueId: 18 }, // 手机容量: 256GB
    ],
    skuSaleAttrValueList: [
      { saleAttrId: "1", saleAttrValueId: "432" }, // 颜色: 珍珠白
      { saleAttrId: "2", saleAttrValueId: "442" }, // 版本: 8GB+256GB
    ],
    isSale: 1,
  },
  {
    id: 3,
    spuId: 5,
    price: 5999.0,
    skuName: "iPhone 14 经典黑 256GB",
    skuDesc: "Apple最新款智能手机",
    weight: 0.17,
    tmId: 3,
    category3Id: 8,
    skuDefaultImg: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    skuAttrValueList: [
      { attrId: 7, valueId: 18 }, // 手机容量: 256GB
      { attrId: 8, valueId: 20 }, // 颜色: 经典黑
    ],
    skuSaleAttrValueList: [
      { saleAttrId: "1", saleAttrValueId: "991" }, // 颜色: 经典黑
      { saleAttrId: "3", saleAttrValueId: "1001" }, // 版本: 标准版
    ],
    isSale: 1,
  },
  {
    id: 4,
    spuId: 7,
    price: 8999.0,
    skuName: "三星 QLED 曲面电视 65英寸",
    skuDesc: "三星旗舰曲面电视，QLED显示技术",
    weight: 25.5,
    tmId: 4,
    category3Id: 1,
    skuDefaultImg: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    skuAttrValueList: [
      { attrId: 1, valueId: 2 }, // 屏幕尺寸: 65英寸
      { attrId: 2, valueId: 4 }, // 分辨率: 4K超高清
    ],
    skuSaleAttrValueList: [
      { saleAttrId: "1", saleAttrValueId: "991" }, // 颜色: 经典黑
    ],
    isSale: 1,
  },
  {
    id: 5,
    spuId: 2,
    price: 2699.0,
    skuName: "VIVO S10 星空蓝 8GB+128GB",
    skuDesc: "VIVO S10基础版，轻薄设计",
    weight: 0.17,
    tmId: 5,
    category3Id: 9,
    skuDefaultImg: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    skuAttrValueList: [
      { attrId: 9, valueId: 24 },
      { attrId: 7, valueId: 17 },
    ],
    skuSaleAttrValueList: [
      { saleAttrId: "1", saleAttrValueId: "451" },
    ],
    isSale: 1,
  },
  {
    id: 6,
    spuId: 4,
    price: 3199.0,
    skuName: "OPPO Reno8 珍珠白 8GB+256GB",
    skuDesc: "OPPO Reno系列，主打拍照",
    weight: 0.18,
    tmId: 6,
    category3Id: 9,
    skuDefaultImg: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    skuAttrValueList: [
      { attrId: 9, valueId: 25 },
      { attrId: 7, valueId: 18 },
    ],
    skuSaleAttrValueList: [
      { saleAttrId: "1", saleAttrValueId: "452" },
    ],
    isSale: 1,
  },
  {
    id: 7,
    spuId: 6,
    price: 4999.0,
    skuName: "华为 P60 曜石黑 8GB+256GB",
    skuDesc: "华为P系列旗舰手机",
    weight: 0.19,
    tmId: 1,
    category3Id: 8,
    skuDefaultImg: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    skuAttrValueList: [
      { attrId: 7, valueId: 18 },
      { attrId: 8, valueId: 20 },
    ],
    skuSaleAttrValueList: [
      { saleAttrId: "1", saleAttrValueId: "991" },
    ],
    isSale: 1,
  },
  {
    id: 8,
    spuId: 8,
    price: 7599.0,
    skuName: "索尼 X90J 曲面电视 75英寸",
    skuDesc: "索尼高端曲面电视",
    weight: 28.2,
    tmId: 7,
    category3Id: 1,
    skuDefaultImg: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    skuAttrValueList: [
      { attrId: 1, valueId: 3 },
      { attrId: 2, valueId: 5 },
    ],
    skuSaleAttrValueList: [
      { saleAttrId: "1", saleAttrValueId: "991" },
    ],
    isSale: 1,
  },
  {
    id: 9,
    spuId: 9,
    price: 3299.0,
    skuName: "小米 超薄电视 4K 55英寸",
    skuDesc: "小米超薄4K电视",
    weight: 12.5,
    tmId: 2,
    category3Id: 2,
    skuDefaultImg: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    skuAttrValueList: [
      { attrId: 1, valueId: 1 },
      { attrId: 2, valueId: 4 },
    ],
    skuSaleAttrValueList: [
      { saleAttrId: "1", saleAttrValueId: "991" },
    ],
    isSale: 1,
  },
  {
    id: 10,
    spuId: 10,
    price: 2899.0,
    skuName: "TCL 智能电视 65英寸",
    skuDesc: "TCL智能电视，4K分辨率",
    weight: 18.7,
    tmId: 8,
    category3Id: 3,
    skuDefaultImg: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    skuAttrValueList: [
      { attrId: 1, valueId: 2 },
      { attrId: 2, valueId: 4 },
    ],
    skuSaleAttrValueList: [
      { saleAttrId: "1", saleAttrValueId: "991" },
    ],
    isSale: 1,
  },
  {
    id: 11,
    spuId: 11,
    price: 3299.0,
    skuName: "格力 壁挂式空调 1.5匹 一级能效",
    skuDesc: "格力壁挂式空调",
    weight: 28.0,
    tmId: 9,
    category3Id: 4,
    skuDefaultImg: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    skuAttrValueList: [
      { attrId: 3, valueId: 6 },
      { attrId: 4, valueId: 9 },
    ],
    skuSaleAttrValueList: [
      { saleAttrId: "1", saleAttrValueId: "991" },
    ],
    isSale: 1,
  },
  {
    id: 12,
    spuId: 12,
    price: 5699.0,
    skuName: "美的 立式空调 3匹 一级能效",
    skuDesc: "美的大功率立式空调",
    weight: 45.0,
    tmId: 10,
    category3Id: 5,
    skuDefaultImg: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    skuAttrValueList: [
      { attrId: 3, valueId: 8 },
      { attrId: 4, valueId: 9 },
    ],
    skuSaleAttrValueList: [
      { saleAttrId: "1", saleAttrValueId: "991" },
    ],
    isSale: 1,
  },
  {
    id: 13,
    spuId: 13,
    price: 2599.0,
    skuName: "海尔 滚筒洗衣机 10kg",
    skuDesc: "海尔大容量滚筒洗衣机",
    weight: 72.0,
    tmId: 11,
    category3Id: 6,
    skuDefaultImg: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    skuAttrValueList: [
      { attrId: 5, valueId: 13 },
      { attrId: 6, valueId: 15 },
    ],
    skuSaleAttrValueList: [
      { saleAttrId: "1", saleAttrValueId: "991" },
    ],
    isSale: 1,
  },
  {
    id: 14,
    spuId: 15,
    price: 18999.0,
    skuName: "佳能 EOS R5 专业全画幅",
    skuDesc: "佳能专业级全画幅单反",
    weight: 1.2,
    tmId: 13,
    category3Id: 10,
    skuDefaultImg: "https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png",
    skuAttrValueList: [
      { attrId: 10, valueId: 27 },
    ],
    skuSaleAttrValueList: [
      { saleAttrId: "1", saleAttrValueId: "991" },
    ],
    isSale: 1,
  },
];
// SKU ID计数器
let nextSkuId = Math.max(...skuList.map((sku) => sku.id)) + 1;
// 添加全局ID计数器（用于生成新ID）
let globalSpuId = Math.max(...spuList.map((spu) => spu.id)) + 1;
let globalImageId =
  Math.max(
    ...Object.values(fixedImageData)
      .flat()
      .map((img) => img.id)
  ) + 1;
let globalSaleAttrId =
  Math.max(
    ...Object.values(fixedSaleAttrData)
      .flat()
      .map((attr) => parseInt(attr.id))
  ) + 1;
export default [
  // 根据categoryId3获取SPU列表
  {
    url: "/api/product/",
    method: "get",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }

      // 获取参数
      const page = parseInt(request.query.page);
      const limit = parseInt(request.query.limit);
      const category3Id = parseInt(request.query.category3Id);

      if (!category3Id) {
        return {
          code: 400,
          message: "缺少category3Id参数",
          data: null,
        };
      }

      // 过滤指定分类的SPU
      const filteredSPU = spuList.filter(
        (spu) => spu.category3Id === category3Id
      );

      // 分页处理
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedSPU = filteredSPU.slice(startIndex, endIndex);

      return {
        code: 200,
        message: "成功",
        data: {
          records: paginatedSPU,
          total: filteredSPU.length,
          page: page,
          size: limit,
        },
      };
    },
  },
  // 获取全部品牌数据
  {
    url: "/api/product/baseTrademark/getTrademarkList",
    method: "get",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      return {
        code: 200,
        message: "成功",
        data: trademarkList,
      };
      // 返回数据结构
      // {
      //   "code":200,
      //   "message":"成功",
      //   "data":[
      //     {
      //       "id":1,
      //       "tmName":"苹果",
      //       "logoUrl":"https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png"
      //     },
      //     {
      //       "id":2,
      //       "tmName":"三星",
      //       "logoUrl":"https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png"
      //     },
      //   ]
      // }
    },
  },
  // 获取某个SPU下的全部的售卖商品的图片数据
  {
    url: "/api/product/spuImageList/",
    method: "get",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      // 获取参数
      const spuId = parseInt(request.query.spuId);
      if (!spuId) {
        return {
          code: 400,
          message: "缺少spuId参数",
          data: null,
        };
      }
      // 获取图片数据（优先使用专用数据，没有则使用默认数据）
      const imageData = fixedImageData[spuId] || fixedImageData.default;

      // 替换spuId为请求的spuId
      const result = imageData.map((item) => ({
        ...item,
        spuId: spuId.toString(),
      }));

      return {
        code: 200,
        message: "成功",
        data: result,
      };
      // 返回数据形式
      // {
      //   "code":200,
      //   "message":"成功",
      //   "data":[
      //     {
      //       "id":"1",
      //       "spuId":"19",
      //       "imgName":"1.png",
      //       "imgUrl":"https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png"
      //     },
      //     {
      //       "id":"2",
      //       "spuId":"19",
      //       "imgName":"2.png",
      //       "imgUrl":"https://s2.loli.net/2025/07/08/gC7jQWTu8LhpzY4.png"
      //     }
      //   ]
      // }
    },
  },
  // 获取某个SPU下的全部的已有的销售属性的接口地址
  {
    url: "/api/product/spuSaleAttrList/",
    method: "get",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      // 获取参数
      const spuId = parseInt(request.query.spuId);
      if (!spuId) {
        return {
          code: 400,
          message: "缺少spuId参数",
          data: null,
        };
      }
      // 获取销售属性（优先使用专用数据，没有则使用默认数据）
      const saleAttrData =
        fixedSaleAttrData[spuId] || fixedSaleAttrData.default;

      // 替换spuId为请求的spuId
      const result = saleAttrData.map((item) => ({
        ...item,
        spuId: spuId.toString(),
      }));

      return {
        code: 200,
        message: "成功",
        data: result,
      };
      // 返回数据形式
      // {
      //   "code":200,
      //   "message":"成功",
      //   "data":[
      //     {
      //       "id":"43",
      //       "spuId":"1",
      //       "baseSaleAttrId":"1",
      //       "saleSttrName":"颜色",
      //       "spuSaleAttrValueList":[]
      //     },
      //   ]
      // }
    },
  },
  // 获取整个项目全部的销售属性[颜色、版本、尺码]
  {
    url: "/api/product/baseSaleAttrList",
    method: "get",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      return {
        code: 200,
        message: "成功",
        data: allSaleAttrs,
      };
      // 返回数据形式
      // {
      //   "code":200,
      //   "message":"成功",
      //   "data":[
      //     {
      //       "id":1,
      //       "name":"颜色"
      //     },
      //     {
      //       "id":2,
      //       "name":"版本"
      //     },
      //     {
      //       "id":3,
      //       "name":"尺码"
      //     },
      //   ]
      // }
    },
  },
  // 添加SPU
  {
    url: "/api/product/saveSpuInfo",
    method: "post",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }

      const newSPU = request.body;
      const { category3Id, spuName } = newSPU;

      // 检查同一category3Id下是否已存在相同spuName
      const isDuplicate = spuList.some(
        (spu) => spu.category3Id === category3Id && spu.spuName === spuName
      );
      if (isDuplicate) {
        return {
          code: 400,
          message: `在相同三级分类下已存在名为【${spuName}】的SPU`,
          data: null,
        };
      }

      // 生成新ID
      const newId = globalSpuId++;

      // 创建新SPU对象
      const spuToAdd = {
        ...newSPU,
        id: newId,
      };

      // 添加到SPU列表
      spuList.push(spuToAdd);
      // 处理图片数据
      if (newSPU.spuImageList && newSPU.spuImageList.length > 0) {
        fixedImageData[newId] = newSPU.spuImageList.map((img) => ({
          ...img,
          id: globalImageId++,
          spuId: newId,
        }));
      } else {
        // 添加默认图片数据
        fixedImageData[newId] = fixedImageData.default.map((img) => ({
          ...img,
          id: globalImageId++,
          spuId: newId,
        }));
      }
      // 处理销售属性数据
      if (newSPU.spuSaleAttrList && newSPU.spuSaleAttrList.length > 0) {
        fixedSaleAttrData[newId] = newSPU.spuSaleAttrList.map((attr) => {
          const newAttrId = globalSaleAttrId++;
          return {
            ...attr,
            id: newAttrId.toString(),
            spuId: newId,
            spuSaleAttrValueList: attr.spuSaleAttrValueList.map((val) => ({
              ...val,
              id: (globalSaleAttrId++).toString(),
            })),
          };
        });
      } else {
        // 添加默认销售属性数据
        fixedSaleAttrData[newId] = fixedSaleAttrData.default.map((attr) => {
          const newAttrId = globalSaleAttrId++;
          return {
            ...attr,
            id: newAttrId.toString(),
            spuId: newId,
            spuSaleAttrValueList: attr.spuSaleAttrValueList.map((val) => ({
              ...val,
              id: (globalSaleAttrId++).toString(),
            })),
          };
        });
      }

      return {
        code: 200,
        message: "添加SPU成功",
        data: null,
      };
    },
  },
  // 更新SPU
  {
    url: "/api/product/updateSpuInfo",
    method: "post",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }

      const updatedSPU = request.body;
      const { id, category3Id, spuName } = updatedSPU;
      // 查找现有SPU
      const existingSPUIndex = spuList.findIndex((spu) => spu.id === id);

      if (existingSPUIndex === -1) {
        return {
          code: 404,
          message: "SPU不存在",
          data: null,
        };
      }

      // 检查同一category3Id下是否存在相同spuName（排除自身）
      const isDuplicate = spuList.some(
        (spu) =>
          spu.id !== id &&
          spu.category3Id === category3Id &&
          spu.spuName === spuName
      );

      if (isDuplicate) {
        return {
          code: 400,
          message: `在相同三级分类下已存在名为【${spuName}】的SPU`,
          data: null,
        };
      }

      // 更新SPU基本信息
      spuList[existingSPUIndex] = {
        ...spuList[existingSPUIndex],
        ...updatedSPU,
      };

      // 更新图片数据（如果提供）
      if (updatedSPU.spuImageList) {
        fixedImageData[id] = updatedSPU.spuImageList.map((img) => ({
          ...img,
          spuId: id,
        }));
      }

      // 更新销售属性数据（如果提供）
      if (updatedSPU.spuSaleAttrList) {
        fixedSaleAttrData[id] = updatedSPU.spuSaleAttrList.map((attr) => ({
          ...attr,
          spuId: id,
          spuSaleAttrValueList: attr.spuSaleAttrValueList.map((val) => ({
            ...val,
          })),
        }));
      }
      return {
        code: 200,
        message: "更新SPU成功",
        data: null,
      };
    },
  },
  // 删除某个spu
  {
    url: "/api/product/deleteSpu/",
    method: "delete",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      const spuId = parseInt(request.query.spuId);
      if (!spuId) {
        return {
          code: 400,
          message: "缺少spuId参数",
          data: null,
        };
      }
      // 1. 检查SPU是否存在
      const spuIndex = spuList.findIndex((spu) => spu.id === spuId);
      if (spuIndex === -1) {
        return {
          code: 404,
          message: `ID为${spuId}的SPU不存在`,
          data: null,
        };
      }

      // 2. 删除SPU
      spuList.splice(spuIndex, 1);

      // 3. 删除图片数据
      if (fixedImageData[spuId]) {
        delete fixedImageData[spuId];
      }
      // 4. 删除销售属性数据
      if (fixedSaleAttrData[spuId]) {
        delete fixedSaleAttrData[spuId];
      }

      // 5. 删除关联的SKU
      const originalSkuCount = skuList.length;
      skuList = skuList.filter((sku) => sku.spuId !== spuId);
      const deletedSkuCount = originalSkuCount - skuList.length;

      return {
        code: 200,
        message: `删除SPU成功，同时删除了${deletedSkuCount}个关联的SKU`,
        data: null,
      };
    },
  },
  // 添加SKU
  {
    url: "/api/product/saveSkuInfo",
    method: "post",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }
      const newSKU = request.body;
      const { spuId, skuName } = newSKU;

      // 检查同一SPU下是否已存在相同名称的SKU
      const isDuplicate = skuList.some(
        (sku) => sku.spuId === spuId && sku.skuName === skuName
      );
      if (isDuplicate) {
        return {
          code: 400,
          message: `在相同SPU下已存在名为【${skuName}】的SKU`,
          data: null,
        };
      }
      // 生成新ID并添加到SKU列表
      const skuToAdd = {
        ...newSKU,
        id: nextSkuId++,
      };
      skuList.push(skuToAdd);

      return {
        code: 200,
        message: "添加SKU成功",
        data: null,
      };
      // 新增需要的参数:
      // {
      //   category3Id:"", // 三级分类id
      //   spuId:"",//已有的spu的ID
      //   tmId:"",//spu品牌(trademark)的id
      //   skuName:"",//sku名字
      //   price:"",//sku价格
      //   weight:"",//sku重量
      //   skuDesc:"",//sku描述
      //   skuAttrValueList:[  //平台属性收集
      //     {
      //       attrId:"",//平台属性ID
      //       valueId:"",//属性值ID
      //     }
      //   ],
      //   skuSaleAttrValueList:[ //销售属性
      //     {
      //       saleAttrId:"",//属性id
      //       saleAttrValueId:"",//属性值ID
      //     }
      //   ],
      //   skuDefaultImg:"", // sku图片地址
      // }
    },
  },
  // 获取某个SPU下的所有SKU（可选实现）
  {
    url: "/api/product/findBySpuId/",
    method: "get",
    response: (request) => {
      const token = request.headers.token;
      if (!token) {
        return { code: 201, message: "token无效或已过期", data: null };
      }

      const spuId = parseInt(request.query.spuId);
      if (!spuId) {
        return {
          code: 400,
          message: "缺少spuId参数",
          data: null,
        };
      }
      // 过滤指定SPU的SKU
      const spuSKUs = skuList.filter((sku) => sku.spuId === spuId);

      return {
        code: 200,
        message: "成功",
        data: spuSKUs,
      };
    },
  },
];
