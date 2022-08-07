import axios from 'axios'

const request = axios.create({
  timeout: 60000,
  baseURL: ''
})

// 请求拦截器
request.interceptors.request.use(config => config)

// 响应拦截器
request.interceptors.response.use(res => res.data)

export default request
