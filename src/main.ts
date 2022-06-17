import { createApp } from 'vue'
import App from './App.vue'
import directives from './directives/index'

import './styles/index.scss'

createApp(App)
  .use(directives)
  .mount('#app')
