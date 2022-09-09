import { IRootState } from '../store'
import { Module } from 'vuex'

// 模块的 state 类型定义
export interface IHomeState {
  count: number
}

export const homePage: Module<IHomeState, IRootState> = {
  namespaced: true,
  state: {
    count: 1
  },
  actions: {

  },
  mutations: {
    doubleCount(state: IHomeState) {
      state.count *= 2
    }
  },
  getters: {

  }
}
