import { IRootState } from '../store'
import { Module } from 'vuex'

interface ShopItem {
  shopId: string,
  shopName: string
  shopPrice: number,
  shopStatus: boolean
}

// 模块的 state 类型定义
export interface IListState {
  shopData: ShopItem[]
}

export const listPage: Module<IListState, IRootState> = {
  namespaced: true,
  state: {
    shopData: []
  },
  actions: {

  },
  mutations: {

  },
  getters: {

  }
}
