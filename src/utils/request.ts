import axios from 'axios'

const service = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000 // 请求超时10s
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    /**
     * 根据实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    /**
     * 根据项目实际情况来对 res 做处理
     * 这里只返回后端响应的数据
     */
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default service
