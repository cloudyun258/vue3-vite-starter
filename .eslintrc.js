// eslint-define-config 可以帮助我们做语法提示
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  // ESLint 一旦发现配置文件中有 root: true，它就会停止在父级目录中寻找
  root: true,
  // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  // 定义全局变量，防止报错
  globals: {
    uni: true,
    wx: true,
    tt: true,
    getCurrentPages: true
  },
  // 启用的规则
  extends: ['plugin:vue/vue3-recommended', 'standard'],
  parserOptions: {
    // js的版本
    ecmaVersion: 13,
    // 解析 .ts 文件
    parser: '@typescript-eslint/parser',
    // 模块化方案
    sourceType: 'module'
  },
  // 引用的插件  下载的插件去掉 eslint-plugin- 前缀引入
  plugins: ['vue', '@typescript-eslint', 'import', 'promise', 'n'],
  // 除了 extends 中启用的规则外，额外的自定义规则
  rules: {
    'space-before-function-paren': 'off', // 函数括号左边不留空格
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/comment-directive': 'off'
  }
})
