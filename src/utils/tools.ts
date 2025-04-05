export function debounce(fn: Function, delay: number = 300) {
  let timer: number | null = null
  return function(this: any, ...args: any[]) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

// 节流
export function throttle(fn: Function, delay: number = 300) {
  let timer: number | null = null
  return function(this: any, ...args: any[]) {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}
