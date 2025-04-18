import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建axios实例
const service = axios.create({
  // 基础URL，实际项目中应替换为真实的API地址
  baseURL: '/api',
  // 请求超时时间
  timeout: 15000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求发送前可以进行一些处理，例如添加token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    console.error('请求错误：', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    
    // 判断响应状态
    if (res.code !== 200) {
      // 显示错误信息
      ElMessage.error(res.message || '请求失败')
      
      // 特定错误码处理，例如401表示未授权
      if (res.code === 401) {
        // 可以在这里处理登录过期的情况
        ElMessage.error('登录已过期，请重新登录')
      }
      
      return Promise.reject(new Error(res.message || '请求失败'))
    } else {
      return res
    }
  },
  error => {
    console.error('响应错误：', error)
    ElMessage.error(error.message || '请求失败')
    return Promise.reject(error)
  }
)

// 封装GET请求
export function get(url: string, params?: any) {
  return service.get(url, { params })
}

// 封装POST请求
export function post(url: string, data?: any) {
  return service.post(url, data)
}

// 封装PUT请求
export function put(url: string, data?: any) {
  return service.put(url, data)
}

// 封装DELETE请求
export function del(url: string, params?: any) {
  return service.delete(url, { params })
}

// 导出axios实例
export default service 