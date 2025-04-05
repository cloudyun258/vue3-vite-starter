// eslint-define-config 可以帮助做语法提示
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  // 一旦发现配置文件中有 root: true，它就会停止在父级目录中寻找
  root: true,
  // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  // 额外定义小程序环境的全局变量
  globals: {
    uni: true,
    wx: true,
    tt: true,
    ks: true,
    App: true,
    Page: true,
    Component: true,
    getCurrentPages: true,
    getApp: true
  },
  // 启用的规则
  extends: [
    'plugin:vue/vue3-recommended',
    'standard'
  ],
  parserOptions: {
    // js的版本
    ecmaVersion: 13,
    // 模块化方案
    sourceType: 'module',
    // 解析 .ts 文件
    parser: '@typescript-eslint/parser'
  },
  // 引用的插件  下载的插件去掉 eslint-plugin- 前缀引入
  plugins: ['vue', 'import', 'promise', 'n', '@typescript-eslint'],
  // 除了 extends 中启用的规则外，额外的自定义规则
  rules: {
    semi: ['warn', 'never'], // 不使用分号
    indent: ['warn', 2], // 缩进为2
    quotes: ['warn', 'single'], // 字符串使用单引号
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always', // 匿名函数可以有空格
        named: 'never', // 命名函数不可以有空格
        asyncArrow: 'always' // async 箭头函数可以有空格（可选）
      }
    ],
    'comma-dangle': ['warn', 'never'], // 对象和数组最后一项后面不能有逗号
    'vue/html-self-closing': 'off',
    'vue/html-indent': [2, 2],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-explicit-emits': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // 允许使用 any 作为类型
    '@typescript-eslint/no-unsafe-function-type': 'off' // 允许使用 Function 作为参数类型
  }
})
