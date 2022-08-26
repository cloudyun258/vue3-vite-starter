/**
 * 接口管理目录
 */
import axios from '@/utils/request'

export const getUserInfo = (params?: any) => {
  return axios.get('/users/cloudyun258', { params })
}
