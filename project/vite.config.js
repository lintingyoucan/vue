import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// 导入 SVG 插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// 添加 path 模块导入
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
// 引入
// https://vite.dev/config/
export default defineConfig(({command,mode}) => {
  // 获取各种环境下对应的环境变量
  let env =  loadEnv(mode,process.cwd());
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
          // Specify the icon folder to be cached
          iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
          // Specify symbolId format
          symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
          mockPath:'./src/mock', // 指定 mock 文件夹路径
          localEnabled: command === 'serve',
      }),
    ],
    resolve: {
        alias: {
            "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
        }
    },
    // 跨域暂且不做
    // server: {
    //   proxy: {
    //      每个路由前面自带的前缀，每个环境都不一样，有的携带/api
    //     [env.VITE_APP_BASE_API]: {
    //     target: env.VITE_SERVER,
    //     changeOrigin: true,
    //     // 重写url,去掉前面api
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    //   }
    // }
  }
})