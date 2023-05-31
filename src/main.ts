import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { key } from './store'
import directives from './directives'

import {
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElIcon,
  ElCard,
  ElButton,
  vLoading
} from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

// 全局样式
import './styles/index.scss'

const app = createApp(App)

app.use(router)
  .use(store, key)
  .use(directives)

app.use(ElContainer)
  .use(ElHeader)
  .use(ElAside)
  .use(ElMain)
  .use(ElIcon)
  .use(ElCard)
  .use(ElButton)

app.directive('loading', vLoading)

// 注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
