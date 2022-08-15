import { IHomeState } from './modules/pageHome'
import { IListState } from './modules/pageList'

// 根模块 state 类型
export interface IRootState {
  token: string
}

// 子模块的 state 类型
export interface IModuleState {
  homePage: IHomeState,
  listPage: IListState
}

export type AllState = IRootState & IModuleState
