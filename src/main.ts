import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import directives from './directives/index'
// 全局样式
import './styles/index.scss'

createApp(App)
  .use(router)
  .use(store)
  .use(directives)
  .mount('#app')
