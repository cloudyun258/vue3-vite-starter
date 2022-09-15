import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000 // 请求超时10s
})

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    /**
     * 根据实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    /**
     * 根据项目实际情况来对 response 做处理
     * 这里只返回后端响应的数据
     */
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios
