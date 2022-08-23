import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/*
  1、如果提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
  2、如果报错模块 path 只能在使用 “allowSyntheticDefaultImports“ 标志时进行默认导入，
  则在 tsconfig.node.json 文件的 compilerOptions 对象里写上 "allowSyntheticDefaultImports": true
*/
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 4000,
    open: true,
    cors: true // 允许跨域
    // 开发环境接口代理，根据项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:3009',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  base: './', // 设置打包路径
  resolve: {
    alias: { // 路径别名配置
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        /*
          在 main.js 或 App.vue 中全局导入 _variable.scss 和 _mixins.scss 文件是无效的，
          只能每个组件使用的时候都在内部导入，
          或者在这里通过 “additionalData” 属性配置全局导入！
        */
        additionalData: '@import "@/assets/styles/_variable.scss";'
      }
    }
  }
})
