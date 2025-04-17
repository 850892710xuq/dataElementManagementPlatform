import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

// 创建axios实例
const service = axios.create({
  // 基础URL，在实际项目中可以配置为环境变量
  baseURL: '/api',
  // 请求超时时间
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 可以在这里添加请求头，如token等认证信息
    // 模拟token
    config.headers['Authorization'] = `Bearer mock-token`
    return config
  },
  (error) => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    
    // 假设接口返回格式为 { code: number, message: string, data: any }
    if (res.code !== 0) {
      // 显示错误消息
      ElMessage.error(res.message || '请求失败')
      
      // 根据特定错误码处理
      if (res.code === 401) {
        // 未授权处理，如跳转到登录页
        console.warn('用户未授权，请重新登录')
      }
      
      return Promise.reject(new Error(res.message || '请求失败'))
    } else {
      return res.data
    }
  },
  (error) => {
    console.error('响应错误:', error)
    // 统一处理错误
    ElMessage.error(error.message || '网络异常，请稍后重试')
    return Promise.reject(error)
  }
)

/**
 * 封装GET请求
 * @param url 请求路径
 * @param params 请求参数
 * @param config 额外配置
 * @returns Promise
 */
export function get<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
  return service.get(url, { 
    params,
    ...config
  })
}

/**
 * 封装POST请求
 * @param url 请求路径
 * @param data 请求数据
 * @param config 额外配置
 * @returns Promise
 */
export function post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  return service.post(url, data, config)
}

/**
 * 封装PUT请求
 * @param url 请求路径
 * @param data 请求数据
 * @param config 额外配置
 * @returns Promise
 */
export function put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  return service.put(url, data, config)
}

/**
 * 封装DELETE请求
 * @param url 请求路径
 * @param params 请求参数
 * @param config 额外配置
 * @returns Promise
 */
export function del<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
  return service.delete(url, { 
    params,
    ...config
  })
}

/**
 * 封装文件上传请求
 * @param url 请求路径
 * @param file 文件对象
 * @param config 额外配置
 * @returns Promise
 */
export function uploadFile<T>(url: string, file: File, config?: AxiosRequestConfig): Promise<T> {
  const formData = new FormData()
  formData.append('file', file)
  
  return service.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    ...config
  })
}

export default service 