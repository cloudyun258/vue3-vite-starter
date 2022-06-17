import { ObjectDirective, App } from 'vue'
import clickOutside from './clickOutside'

interface DirectivesConfig {
  [x: string]: ObjectDirective
}

const directives: DirectivesConfig = {
  clickOutside
}

export default {
  install(app: App) {
    Object.keys(directives).forEach(key => {
      app.directive(key, directives[key])
    })
  }
}
