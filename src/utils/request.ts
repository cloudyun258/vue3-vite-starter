import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000 // 请求超时 10s
})

// 请求拦截器
axios.interceptors.request.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里只返回后端响应的数据
     */
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios
