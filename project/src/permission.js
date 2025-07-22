// 路由鉴权，哪个路由可以访问，哪个不可以访问
import router from '@/router'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
// 不需要加载小球
nprogress.configure({ showSpinner: false });
// 引入仓库
import useUserStore from './store/modules/user'
import pinia from './store/index'
import setting from './setting';
let userStore  = useUserStore(pinia);
// 全局前置守卫
router.beforeEach(async(to, from,next)=>{
    // 每个路由的页签标题
    document.title = `${setting.title}-${to.meta.title}`;
    // next路由放行函数
    nprogress.start();
    let token = userStore.token;
    let username = userStore.username;
    // 根据token来判断用户是否登录
    if (token) {
        // 登录成功
        if (to.path === '/login'){
            next({path:'/'});
        } else {
            // 有用户信息
            if(username){
                next();
            } else {
                // 没有用户信息，就发送请求获取信息
                try {
                    const result  = await userStore.userInfo();
                    // {...to}保证访问的如果是异步路由，可以在渲染后再放行
                    next({...to});
                } catch (error) {
                    console.log(error)
                    // token过期，销毁数据
                    userStore.userLogout();
                    next({path:'/login',query:{redirect:to.path}});  
                }
            }
        }
    } else {
        // 登录失败
        if (to.path === '/login'){
            next() ;
        } else {
            next({path:'/login',query:{redirect: to.path}});
        }
    }
    
}
)
// 全局后置守卫
router.afterEach((to, from) => {
    nprogress.done();
})
// 用户登录成功，不可以访问/login,其余可以
// 用户未登录，只能访问/login,其余不可以