import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/*
  1、如果提示 path 模块找不到，则需要安装 @types/node
  2、如果报错模块 path 只能在使用 “allowSyntheticDefaultImports“ 标志时进行默认导入，
    则在 tsconfig.node.json 文件的 compilerOptions 对象里加上配置 "allowSyntheticDefaultImports": true
*/
import path from 'path'

console.log('项目运行环境(NODE_ENV): ', process.env.NODE_ENV)

/*
  https://vitejs.dev/config
  vite.config.ts 中无法使用 import.meta.env 对象的解决办法：https://www.jianshu.com/p/4973bd983e96
*/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 4000,
    open: true,
    cors: true
    // 开发环境接口代理，根据项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'https://admin.inside.xiaoe-tech.com',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  base: './', // 设置打包路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        /*
          在 main.ts 或 App.vue 中全局导入 _variable.scss 和 _mixins.scss 文件是无效的，
          只能每个组件使用的时候都在内部导入，或者在这里通过 “additionalData” 属性配置全局导入
        */
        additionalData: '@import "@/styles/_variable.scss";'
      }
    }
  }
})
