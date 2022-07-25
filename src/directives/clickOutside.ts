import { DirectiveBinding } from 'vue'

const clickOutside = {
  mounted(el: any, binding: DirectiveBinding) {
    function clickHandler(e: Event) {
      // 如果点击的是元素本身或子元素，则什么也不做
      if (el.contains(e.target)) {
        return
      }
      // 仅支持绑定函数
      const callback = binding.value
      if (typeof callback === 'function') {
        callback(e)
      }
    }
    // 给元素添加一个属性，方便解绑
    el.__vueClickOutside__ = clickHandler
    document.addEventListener('click', clickHandler, false)
  },
  updated(el: any, binding: DirectiveBinding) {
    if (binding.value === binding.oldValue) {
      return
    }
    clickOutside.mounted(el, binding)
  },
  unmounted(el: any) {
    document.removeEventListener('click', el.__vueClickOutside__, false)
    delete el.__vueClickOutside__
  }
}

export default clickOutside
