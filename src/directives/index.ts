import { ObjectDirective } from 'vue'
import clickOutside from './clickOutside'

interface DirectivesConfig {
  [x: string]: ObjectDirective
}

const directives: DirectivesConfig = {
  clickOutside
}

export default {
  install(Vue: any) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key])
    })
  }
}
