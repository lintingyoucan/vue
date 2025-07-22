import { createApp } from 'vue'
import App from './App.vue'
import './styles/reset.css'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 给组件svg-icons注册图标
import 'virtual:svg-icons-register'
//引入自定义插件对象:注册整个项目全局组件
import gloalComponent from '@/components'
// 引入路由
import router from './router/index';
// 引入仓库
import pinia from './store';
// 引入全局样式
import './styles/variable.css';
// 引入路由鉴权
import '@/permission'
// 引入暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
// 1. 创建应用实例
const app = createApp(App);
// 2. 注册ElementPlus插件（在挂载前）
app.use(ElementPlus, {
  locale: zhCn
});
app.use(router);
// 注册pinia仓库
app.use(pinia);
//安装自定义插件
app.use(gloalComponent)
//引入自定义指令文件
import { isHasButton } from '@/directive/has'
isHasButton(app)
// 3. 挂载应用
app.mount('#app')