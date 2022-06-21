# Vite 2.x + Vue 3.x + TypeScript 项目工程模板

项目从以下几个方面展开：

- 架构搭建
- 代码规范
- 提交规范
- 单元测试
- 自动部署



## 技术栈

- 编程语言：[TypeScript 4.x](https://link.juejin.cn?target=https%3A%2F%2Fwww.typescriptlang.org%2Fzh%2F) + [JavaScript](https://link.juejin.cn?target=https%3A%2F%2Fwww.javascript.com%2F)
- 构建工具：[Vite 2.x](https://link.juejin.cn?target=https%3A%2F%2Fcn.vitejs.dev%2F)
- 前端框架：[Vue 3.x](https://link.juejin.cn?target=https%3A%2F%2Fv3.cn.vuejs.org%2F)
- 路由工具：[Vue-Router 4.x](https://link.juejin.cn?target=https%3A%2F%2Fnext.router.vuejs.org%2Fzh%2Findex.html)
- 状态管理：[Vuex 4.x](https://link.juejin.cn?target=https%3A%2F%2Fnext.vuex.vuejs.org%2F)
- UI 框架：[Element-Plus](https://link.juejin.cn?target=https%3A%2F%2Felement-plus.org%2F%23%2Fzh-CN)
- CSS 预编译：[Sass](https://sass.bootcss.com/documentation)
- HTTP 工具：[Axios](https://link.juejin.cn?target=https%3A%2F%2Faxios-http.com%2F)
- 代码规范：[EditorConfig](https://link.juejin.cn/?target=http%3A%2F%2Feditorconfig.org) + [Prettier](https://link.juejin.cn/?target=https%3A%2F%2Fprettier.io%2F) + [ESLint](https://link.juejin.cn/?target=https%3A%2F%2Feslint.org%2F)
- Git Hook 工具：[husky](https://link.juejin.cn?target=https%3A%2F%2Ftypicode.github.io%2Fhusky%2F%23%2F) + [lint-staged](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fokonet%2Flint-staged)
- 提交规范：[Commitizen](https://link.juejin.cn?target=http%3A%2F%2Fcommitizen.github.io%2Fcz-cli%2F) + [Commitlint](https://link.juejin.cn?target=https%3A%2F%2Fcommitlint.js.org%2F%23%2F)
- 单元测试：[vue-test-utils](https://link.juejin.cn?target=https%3A%2F%2Fnext.vue-test-utils.vuejs.org%2F) + [jest](https://link.juejin.cn?target=https%3A%2F%2Fjestjs.io%2F) + [vue-jest](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue-jest) + [ts-jest](https://link.juejin.cn?target=https%3A%2F%2Fkulshekhar.github.io%2Fts-jest%2F)
- 自动部署：[GitHub-Actions](https://link.juejin.cn?target=https%3A%2F%2Fdocs.github.com%2Fcn%2Factions%2Flearn-github-actions)



### 架构搭建

本项目使用 Vite 构建工具，**需要 Node.js 版本 >= 12.0.0**

```bash
# 查看 Node.js 版本
   node -v
# 使用 nvm 安装最新稳定版 Node.js
   nvm install stable
```



**使用 Vite 快速初始化项目雏形**

```bash
	提示：使用 vite 创建项目，不像 vue-cli 那样，可以在创建的时候选择 vue-router、vuex、sass、eslint、test 等工具，这些都需要后面自己手动安装

# 使用 npm
    npm init @vitejs/app
# 使用 yarn
	yarn create @vitejs/app

# 还可以通过附加的命令行选项直接指定项目名和模板，本项目要构建 Vite + Vue3 + TypeScript 项目，则运行：
    # npm 6.x
    npm init @vitejs/app vue3-vite-starter --template vue-ts

    # npm 7+（需要额外的双横线）
    npm init @vitejs/app vue3-vite-starter -- --template vue-ts

    # yarn
    yarn create @vitejs/app vue3-vite-starter --template vue-ts
```



**规范目录结构**

```
├── public/
└── src/
	├── apis/                      // 接口管理目录
    ├── assets/                    // 静态资源目录
    ├── common/                    // 通用类库目录
    ├── components/                // 公共组件目录
    ├── constant/                  // 全局常量目录
    ├── directives/                // 指令配置目录
    ├── hooks/                     // hook函数目录
    ├── router/                    // 路由配置目录
    ├── store/                     // 状态管理目录
    ├── styles/                    // 通用 CSS 目录
	├── types/                     // 类型定义目录
    ├── utils/                     // 工具函数目录
    ├── views/                     // 页面组件目录
    ├── App.vue
    ├── main.ts
    ├── shims-vue.d.ts
├── tests/                         // 单元测试目录
├── index.html
├── tsconfig.json                  // TypeScript 配置文件
├── vite.config.ts                 // Vite 配置文件
└── package.json

```



**修改 Vite 配置文件**

```
关于 Vite 更多配置项及用法，请查看 Vite 官网 https://vitejs.cn/config

详细配置请查看项目内 vite.config.ts 文件
```



**集成路由工具 Vue-Router**

```bash
npm i vue-router

详细配置请查看项目内文件
```



**集成状态管理工具 Vuex**

```bash
npm i vuex@next

详细配置请查看项目内文件
```



**集成 UI 框架 Element-Plus**

```bash
npm i element-plus

详细配置请查看项目内文件
```



**集成 HTTP 工具 Axios**

```bash
npm i axios

详细配置请查看项目内文件
```



**集成 CSS 预编译器 Sass**

```bash
# vite 内部已帮我们集成了相关的 loader，不需要额外安装 sass-loader
npm i sass -D
```





### 代码规范

使用 **EditorConfig + Prettier + ESLint** 组合来实现代码规范化

这三者的配置常常会发生冲突，为了避免出现相同的配置导致冲突，我们先来明确一下 **各司其职** 的原则：

- **EditorConfig** 将负责统一各种编辑器的配置，所有和编辑器相关的配置都交给它
- **Prettier** 作为 **代码格式化** 工具
- 其余的，也就是 **代码质量** 方面的语法检查，用 **ESLint** 来做



**集成 EditorConfig 配置**

​	EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。VSCode 使用 EditorConfig 需要下载插件 **EditorConfig for VS Code** 。

在项目根目录下增加 `.editorconfig` 文件，vue 项目常用配置如下：

```bash
# https://editorconfig.org
[*.{js,jsx,ts,tsx,vue}]
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型（lf | cr | crlf）（保存时生效）
trim_trailing_whitespace = true # 去除行首的任意空白字符（保存时生效）
insert_final_newline = true # 始终在文件末尾插入一个新行（保存时生效）
# max_line_length = 120 # 最大列数（需要 shift + alt + f 才生效，最大列数最好是用 prettier 来配置）


1、不需要修改 EditorConfig for VS Code 插件的配置，用默认就行
2、有些配置是默认生效，有些是保存时才生效，有些需要手动格式化：shift + alt + f
3、配置在当前项目中默认会覆盖编辑器自带的配置，另外可能会受到 Prettier、ESLint 等配置的影响而导致失效



还有一个较常用的配置：
root = true

[*]
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格 (tab | space)
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md]
max_line_length = off
trim_trailing_whitespace = false

```



**集成 Prettier 配置**

​	Prettier 是一款强大的代码格式化工具，支持多种格式的配置文件，比如 `.json`、`.yml`、`.yaml`、`.js`等，VSCode 使用 Prettier 配置需要下载插件 **Prettier - Code formatter** 。

在项目根目录下创建 `.prettierrc.js` 文件，vue 项目常用配置如下：

```javascript
1、安装 prettier
   npm i prettier -D

2、创建 Prettier 配置文件（.prettierrc 或 .prettierrc.js 或 .prettierrc.json）
   这里使用 .prettierrc.js 文件
   
3、常见配置
	https://prettier.io/docs/en/options.html
	详细配置请查看项目内文件

4、如何格式化
    // 格式化所有文件（. 表示所有文件）
    npx prettier --write .
    // 或先在 package.json 里配置 script  "prettier": "npx prettier --write ."
    npm run prettier
    // 或保存时自动格式化
    ......
    
    
1、可以在 vscode 设置里配置保存的时候默认使用 Prettier 来格式化代码（我这里没启用）
  参考：https://blog.csdn.net/bianliuzhu/article/details/123667127

2、VSCode 设置里也可以配置 Prettier，但如果项目里有配置文件，VSCode里的配置会被覆盖，优先用配置文件的

3、关于 .prettierignore 文件
   .prettierignore 基于.gitignore 和 .eslintignore（如果有的话）。所以如果把一个文件添加到了 .gitignore 或者.eslintignore 中，即使没有 .prettierignore 这个文件，那些文件也会被 Prettier 忽略。
```







