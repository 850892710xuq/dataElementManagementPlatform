import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: '', // 移除baseURL，因为API路径已经包含/api前缀
  timeout: 30000, // 超时时间30秒
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理
    return config
  },
  (error) => {
    // 处理请求错误
    console.error('请求配置错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    
    // 如果是文件下载，直接返回
    if (response.config.responseType === 'blob') {
      return {
        code: 200,
        data: res,
        message: 'success'
      }
    }
    
    // 根据自定义错误码判断请求是否成功
    if (res.code === 200) {
      // 请求成功，返回完整的响应对象
      return res
    } else {
      // 处理业务错误
      const errMsg = res.message || '操作失败'
      ElMessage.error(errMsg)
      return Promise.reject(new Error(errMsg))
    }
  },
  (error) => {
    // 处理 HTTP 网络错误
    let message = '网络连接故障'
    
    // 打印详细错误信息，方便调试
    console.error('响应错误:', error)
    console.log('请求配置:', error.config) 
    
    try {
      // HTTP 状态码
      const status = error.response?.status
      switch (status) {
        case 400:
          message = '请求错误'
          break
        case 401:
          message = '未授权'
          break
        case 403:
          message = '拒绝访问'
          break
        case 404:
          message = '请求地址出错或资源不存在'
          break
        case 408:
          message = '请求超时'
          break
        case 500:
          message = '服务器内部错误'
          break
        case 501:
          message = '服务未实现'
          break
        case 502:
          message = '网关错误'
          break
        case 503:
          message = '服务不可用'
          break
        case 504:
          message = '网关超时'
          break
        case 505:
          message = 'HTTP版本不受支持'
          break
        default:
          if (error.code === 'ERR_NETWORK') {
            message = '网络连接失败，请检查网络'
          } else if (error.code === 'ECONNABORTED') {
            message = '请求超时，请稍后重试'
          } else {
            message = error.message || '网络连接故障'
          }
      }
      
      // 对于模拟接口错误，提供特殊处理
      // 如果是Mock API，在开发环境中返回一个默认成功响应
      if (process.env.NODE_ENV === 'development' && error.config?.url?.includes('/api/explore-report/')) {
        console.warn('Mock API错误，返回默认值:', error.config.url)
        
        // 探查报告详情接口
        if (error.config.url.includes('/detail/')) {
          return Promise.resolve({
            code: 200,
            message: 'success (mock fallback)',
            data: {
              id: 1,
              name: '模拟数据产品',
              sampleCount: 100,
              matchCount: 80,
              matchRate: 0.8,
              maxValue: '100',
              minValue: '1',
              medianValue: '50',
              features: []
            }
          })
        }
        
        // 下载接口
        if (error.config.url.includes('/download/')) {
          return Promise.resolve({
            code: 200,
            message: 'success (mock fallback)',
            data: {
              fileName: '模拟报告.pdf',
              fileUrl: 'https://example.com/reports/mock.pdf'
            }
          })
        }
      }
      
      ElMessage.error(message)
    } catch (e) {
      console.error('响应错误处理失败:', e)
      ElMessage.error('请求处理失败')
    }
    
    return Promise.reject(error)
  }
)

// 导出 axios 实例
export default service 