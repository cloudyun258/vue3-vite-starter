import { createStore, Store, useStore as baseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { AllState, IRootState } from './store.d'
import { homePage } from './modules/pageHome'
import { listPage } from './modules/pageList'

const store = createStore<IRootState>({
  state: {
    token: 'Hello World'
  },
  modules: {
    homePage,
    listPage
  }
})

export const key: InjectionKey<Store<IRootState>> = Symbol('rootStore') // 定义一个 key

export function useStore() {
  return baseStore<AllState>(key)
}

export default store
