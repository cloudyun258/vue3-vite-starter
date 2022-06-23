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

这三者的配置常常会发生冲突，为了避免出现相同的配置导致冲突，我们先来明确一下**各司其职**的原则：

- **EditorConfig** 负责统一各种编辑器的配置，所有和编辑器相关的配置都交给它
- **Prettier** 作为 **代码外观上** 的格式化工具
- 其余的，也就是 **代码逻辑和质量上** 的语法检查，用 **ESLint** 来做



**集成 EditorConfig 配置**

​	EditorConfig 有助于为不同编辑器上处理同一项目的多个开发人员维护一致的编码风格。VSCode 使用 EditorConfig 需要下载插件 **EditorConfig for VS Code** 。

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
# max_line_length = 120 # 最大列数（需要 shift + alt + f 才生效，最大列数最好用 prettier 来配置）


1、不需要修改 EditorConfig for VS Code 插件的配置，用默认就行
2、有些配置是默认生效，有些是保存时才生效，有些需要手动格式化：shift + alt + f
3、配置在当前项目中会覆盖编辑器自带的配置，另外可能会受到 Prettier、ESLint 等配置的影响而导致失效



还有一套较常用的配置：
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

​	Prettier 是一款强大的代码格式化工具，支持多种格式的配置文件，比如 `.json`、`.yml`、`.yaml`、`.js`等。VSCode 使用 Prettier 需要下载插件 **Prettier - Code formatter** 。

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
    ...... 这里使用这种形式
    
  

1、可以在 vscode 设置里配置保存的时候默认使用 Prettier 来格式化代码
  参考：https://blog.csdn.net/bianliuzhu/article/details/123667127
    "editor.formatOnSave": true,
    "[vue]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }

2、VSCode 设置里也可以配置 Prettier，但如果项目里有配置文件，VSCode里的配置会被覆盖，优先用配置文件的

3、关于 .prettierignore 文件
   .prettierignore 基于.gitignore 和 .eslintignore（如果有的话）。所以如果把一个文件添加到了 .gitignore 或者.eslintignore 中，即使没有 .prettierignore 这个文件，那些文件也会被 Prettier 忽略。
```



**集成 ESLint 配置**

​	ESLint 是一款用于查找并报告代码中问题的工具，并且支持部分问题自动修复。VSCode 使用 ESLint 配置文件需要下载插件 **ESLint**。

VSCode 设置里配置报错时格式化代码

```json
"eslint.autoFixOnSave": true,  // 启用保存时自动修复，默认只支持.js文件
"eslint.validate": [
    "javascript",  // 用 eslint 的规则检测 js 文件
    {
        "language": "vue",   // 检测vue文件
        "autoFix": true   // 为vue文件开启保存自动修复的功能
    },
    {
        "language": "html",
        "autoFix": true
    }
],
"eslint.rules.customizations": []
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

依赖安装

```bash
# http://eslint.cn

1、安装 ESLint
   npm i eslint -D
   局部安装的 eslint，需要通过 ./node_modules/.bin/eslint eslint xxx 或 npx eslint xxx 的形式使用

2、支持 vue 项目
   npm i eslint-plugin-vue -D

3、支持 ts
   npm i @typescript-eslint/eslint-plugin -D
   npm i @typescript-eslint/parser -D

4、支持 es6 模块化
   npm i eslint-plugin-import -D

5、支持 defineConfig 函数形式定义配置，可以帮助我们做语法提示
   npm i eslint-define-config -D

6、引入社区流行的 eslint 规则库
   npm i eslint-config-standard -D

一键安装： npm i eslint eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-define-config eslint-config-standard -D

如果使用了 eslint-config-standard 了这个规则库，eslint 不生效的话，还需要安装：
  npm i eslint-plugin-promise eslint-plugin-n -D
```

在项目根目录下创建 `.eslintrc.js` 和 `.eslintignore`文件，vue 项目常用配置如下：

```bash
.eslintignore
    public
    dist
    build
    tests
    themes
    node_modules
    src/common/libs

.eslintrc.js 详细配置查看项目内文件
```



**解决 Prettier 和 ESLint 的冲突**

​	通常会在项目中同时使用 ESLint 和 Prettier 来保证代码规范，难免会存在规则冲突的情况。解决两者冲突问题，需要用到 **eslint-plugin-prettier** 和 **eslint-config-prettier**。

- `eslint-plugin-prettier` 将 Prettier 的规则设置到 ESLint 的规则中
- `eslint-config-prettier` 关闭 ESLint 中与 Prettier 中会发生冲突的规则

最后形成优先级，当有相同的配置项时：`Prettier 配置规则` > `ESLint 配置规则`

```javascript
 // 启用的规则，添加 plugin:prettier/recommended 规则，这样就会覆盖 eslint 中相同的规则
 extends: ['plugin:vue/vue3-recommended', 'standard', 'plugin:prettier/recommended']

 但是，这种方式并不是使用的项目内 .prettierrc.js 文件内的配置来覆盖，而是使用的第三方库的规则，如何使用项目内的配置来覆盖？暂时没找到解决办法。。。。。。
 最终，决定不使用这种办法，而是选择了把两者相同的配置项的值都改成一样的，这样就不会有冲突了
```



**集成 husky 和 lint-staged**

​	我们在项目中已集成 ESLint 和 Prettier，在编码时，这些工具可以对我们写的代码进行实时校验，在一定程度上能有效规范我们写的代码，但团队可能会有些人觉得这些条条框框的限制很麻烦，选择视“提示”而不见，依旧按自己的一套风格来写代码，或者干脆禁用掉这些工具，开发完成就直接把代码提交到了仓库，日积月累，ESLint 也就形同虚设。

​	所以，我们还需要做一些限制，让没通过 ESLint 检测和修复的代码禁止提交，从而保证仓库代码都是符合规范的。

​	为了解决这个问题，我们需要用到 Git Hook，在本地执行 `git commit` 的时候，就对所提交的代码进行 ESLint 检测和修复（即执行 `eslint --fix`），如果这些代码没通过 ESLint 规则校验，则禁止提交。

实现这一功能，我们需要借助 **husky + lint-staged**

- husky：Git Hook 工具，可以设置在 git 各个阶段（`pre-commit`、`commit-msg`、`pre-push` 等）触发我们的命令。

- lint-staged：在 git 暂存的文件上运行 linters

  

**配置 husky**

```bash
使用 husky-init 命令快速在项目初始化一个 husky 配置
   npx husky-init && npm install
   这行命令做了四件事：
       1、安装 husky 到开发依赖
       2、项目根目录下创建 .husky 目录
       3、在 .husky 目录创建 pre-commit hook，并初始化 pre-commit 命令为 npm test
       4、修改 package.json 的 scripts，增加 "prepare": "husky install"
       
	husky 包含很多 hook（钩子），常用有：pre-commit、commit-msg、pre-push。这里，我们使用 pre-commit 来触发 ESLint 命令。
	
	修改 .husky/pre-commit hook 文件的触发命令：npx eslint --fix ./src --ext .vue,.js,.ts
	
	上面这个 pre-commit hook 文件的作用是：当我们执行 git commit -m "xxx" 时，会先对 src 目录下所有的 .vue、.js、.ts  文件执行命令，如果 ESLint 通过，成功 commit，否则终止 commit。
	
```

​	但是又存在一个问题，有时候明明只改动了一两个文件，却要对所有的文件执行 `eslint --fix`。假如这是一个历史项目，我们在中途配置了 ESLint 规则，那么在提交代码时，也会对其他未修改的历史文件都进行检查，可能会造成大量文件出现 ESLint 错误，显然不是我们想要的结果。

​	我们要做到只用 ESLint 修复自己此次写的代码，而不去影响其他的代码。所以我们还需借助一个神奇的工具 **lint-staged** 。



**配置 lint-staged**

​	lint-staged 这个工具一般结合 husky 来使用，它可以让 husky 的 `hook` 触发的命令只作用于 `git add` 那些文件（即处于 git 暂存区的文件），而不会影响到其他文件。

```bash
1、安装 lint-staged
   npm i lint-staged -D

2、在 package.json里增加 lint-staged 配置项
    "lint-staged": {
      "*.{vue,js,ts}": "npx eslint --fix"
    }
    这行命令表示：只对 git 暂存区的 .vue、.js、.ts 文件执行 npx eslint --fix

3、修改 .husky/pre-commit hook 的触发命令为：npx lint-staged
```

至此，husky 和 lint-staged 组合配置完成