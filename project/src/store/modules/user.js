//创建用户相关的小仓库
import { defineStore } from 'pinia'
//引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
//引入路由(常量路由)
// import { constantRoute, anyRoute } from '@/router/routes'
import { constantRoute, asnycRoute, anyRoute } from '@/router/routes'
// 引入接口
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user'
import router from '@/router/index'
//引入深拷贝方法cloneDeep
//@ts-expect-error
import cloneDeep from 'lodash/cloneDeep'
// 用于过滤当前用户需要展示的异步路由
function filterAsnycRoute(asnycRoute, routes) {
  return asnycRoute.filter((item) => {
    if (routes.includes(item.name)) {
      if (item.children && item.children.length > 0) {
        item.children = filterAsnycRoute(item.children, routes)
      }
      return true
    }
  })
}
//创建用户小仓库
const useUserStore = defineStore('User', {
  //小仓库存储数据地方
  state: () => {
    return {
      token: GET_TOKEN(), //用户唯一标识token
      menuRoutes: constantRoute, //仓库存储生成菜单需要数组(路由)
      username: '',
      avatar: '',
      //存储当前用户是否包含某一个按钮
      buttons: [],
      dynamicRouteNames: []  // 新增：存储动态路由的名称
    }
  },
  //异步|逻辑的地方
  actions: {
    //用户登录的方法
    async userLogin(data) {
      //登录请求
      const result = await reqLogin(data)
      //登录请求:成功200->token
      //登录请求:失败201->登录失败错误的信息
      if (result.code == 200) {
        //pinia仓库存储一下token
        //由于pinia|vuex存储数据其实利用js对象
        // 对result.data 进行结构
        const { token } = result.data
        this.token = token
        //本地存储持久化存储一份
        SET_TOKEN(token)
        //能保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    //获取用户信息方法
    async userInfo() {
      // 获取用户信息进行存储仓库当中[用户头像、名字]
      let result = await reqUserInfo();
      if (result.code === 200) {
        this.username = result.data.checkUser.username;
        this.avatar = result.data.checkUser.avatar;
        this.buttons = result.data.buttons;
        // 清空之前记录的路由名称
        this.dynamicRouteNames = [];
        // 过滤异步路由
        // 用户的异步路由:cloneDeep使用深拷贝解决在对asnycRoute的直接修改问题，防止比如一个用户有权限，结果由于重新赋值给item.children导致asnycRoute被修改问题
        let userAsnycRoute = filterAsnycRoute(cloneDeep(asnycRoute), result.data.routes);
        let dynamicRoutes = [...userAsnycRoute, anyRoute];
        // 动态添加路由并记录名称
        dynamicRoutes.forEach(route => {
          router.addRoute(route);
          // 关键：记录路由名称
          if (route.name) {
            this.dynamicRouteNames.push(route.name);
          }
        });

        // 更新菜单路由
        this.menuRoutes = [...constantRoute, ...userAsnycRoute, anyRoute];
        return 'ok';
      } else {
        return Promise.reject(new Error("获取用户信息失败"));
      }
    },

    //退出登录
    async userLogout() {
      // 1. 移除动态添加的路由
      this.dynamicRouteNames.forEach(name => {
        router.removeRoute(name); // 根据名称移除路由
      });
      this.dynamicRouteNames = []; // 清空记录
      //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
      this.token = ''
      this.username = ''
      this.avatar = ''
      this.menuRoutes = constantRoute
      REMOVE_TOKEN()
    },
  },
  getters: {},
})
//对外暴露获取小仓库方法
export default useUserStore
