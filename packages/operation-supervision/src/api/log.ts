import request from '@/utils/request'
import { 
  generateOperationLogData, 
  getOperationLogDetailData,
  generateLoginLogData,
  getLoginLogDetailData
} from '@/mock/mockData'

// 判断是否为开发环境
const isDev = process.env.NODE_ENV === 'development'

// 操作日志接口
export interface OperationLogParams {
  username?: string
  ip?: string
  operationType?: string
  module?: string
  status?: string
  startTime?: string
  endTime?: string
  pageNum: number
  pageSize: number
}

export interface OperationLogItem {
  id: number
  username: string
  ip: string
  operation: string
  operateTime: string
  status: 'success' | 'fail'
  description?: string
  params?: string
  result?: string
  module?: string
  operationType?: string
}

// 获取操作日志列表
export function getOperationLogs(params: OperationLogParams) {
  // 判断是否为开发环境
  if (isDev) {
    // 开发环境使用模拟数据
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          message: 'success',
          data: generateOperationLogData(params)
        })
      }, 300) // 模拟网络延迟
    })
  }
  
  // 生产环境使用真实接口
  return request({
    url: '/api/operation-logs',
    method: 'get',
    params
  })
}

// 获取操作日志详情
export function getOperationLogDetail(id: number) {
  // 判断是否为开发环境
  if (isDev) {
    // 开发环境使用模拟数据
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          message: 'success',
          data: getOperationLogDetailData(id)
        })
      }, 300) // 模拟网络延迟
    })
  }
  
  // 生产环境使用真实接口
  return request({
    url: `/api/operation-logs/${id}`,
    method: 'get'
  })
}

// 登录日志接口
export interface LoginLogParams {
  username?: string
  ip?: string
  status?: string
  startTime?: string
  endTime?: string
  pageNum: number
  pageSize: number
}

export interface LoginLogItem {
  id: number
  username: string
  ip: string
  device?: string
  browser?: string
  os?: string
  loginTime: string
  logoutTime: string | null
  status: 'success' | 'failed'
  failReason?: string
  location?: string
  remark?: string
}

// 获取登录日志列表
export function getLoginLogs(params: LoginLogParams) {
  // 判断是否为开发环境
  if (isDev) {
    // 开发环境使用模拟数据
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          message: 'success',
          data: generateLoginLogData(params)
        })
      }, 300) // 模拟网络延迟
    })
  }
  
  // 生产环境使用真实接口
  return request({
    url: '/api/login-logs',
    method: 'get',
    params
  })
}

// 获取登录日志详情
export function getLoginLogDetail(id: number) {
  // 判断是否为开发环境
  if (isDev) {
    // 开发环境使用模拟数据
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          message: 'success',
          data: getLoginLogDetailData(id)
        })
      }, 300) // 模拟网络延迟
    })
  }
  
  // 生产环境使用真实接口
  return request({
    url: `/api/login-logs/${id}`,
    method: 'get'
  })
}

// 导出操作日志
export function exportOperationLogs(params: OperationLogParams) {
  // 开发环境下模拟导出功能
  if (isDev) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          message: 'success',
          data: {
            downloadUrl: 'https://example.com/download/operation-logs.xlsx'
          }
        })
      }, 500)
    })
  }
  
  // 生产环境下调用真实接口
  return request({
    url: '/api/operation-logs/export',
    method: 'get',
    params,
    responseType: 'blob'
  })
}

// 导出操作日志详情
export function exportOperationLogDetail(id: number) {
  // 开发环境下模拟导出功能
  if (isDev) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          message: 'success',
          data: {
            downloadUrl: `https://example.com/download/operation-log-${id}.xlsx`
          }
        })
      }, 500)
    })
  }
  
  // 生产环境下调用真实接口
  return request({
    url: `/api/operation-logs/${id}/export`,
    method: 'get',
    responseType: 'blob'
  })
} 