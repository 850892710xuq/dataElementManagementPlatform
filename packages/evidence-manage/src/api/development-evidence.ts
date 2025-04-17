import { get, post } from './request'
import type { 
  PageResult, 
  QueryParams, 
  LowSecurityDevelopmentEvidence, 
  HighSecurityDevelopmentEvidence 
} from '@/types'

/**
 * 获取低密产品开发存证列表
 * @param params 查询参数
 * @returns Promise
 */
export function getLowSecurityDevelopmentList(params: QueryParams): Promise<PageResult<LowSecurityDevelopmentEvidence>> {
  return get('/evidence/development/low-security/list', params)
}

/**
 * 获取低密产品开发存证详情
 * @param evidenceNo 存证编号
 * @returns Promise
 */
export function getLowSecurityDevelopmentDetail(evidenceNo: string): Promise<LowSecurityDevelopmentEvidence> {
  return get(`/evidence/development/low-security/detail/${evidenceNo}`)
}

/**
 * 获取高密产品开发存证列表
 * @param params 查询参数
 * @returns Promise
 */
export function getHighSecurityDevelopmentList(params: QueryParams): Promise<PageResult<HighSecurityDevelopmentEvidence>> {
  return get('/evidence/development/high-security/list', params)
}

/**
 * 获取高密产品开发存证详情
 * @param evidenceNo 存证编号
 * @returns Promise
 */
export function getHighSecurityDevelopmentDetail(evidenceNo: string): Promise<HighSecurityDevelopmentEvidence> {
  return get(`/evidence/development/high-security/detail/${evidenceNo}`)
}

/**
 * 下载测试报告
 * @param fileUrl 文件链接
 * @returns Promise
 */
export function downloadTestReport(fileUrl: string): Promise<Blob> {
  return get('/evidence/development/download', { fileUrl }, {
    responseType: 'blob'
  })
}

/**
 * 导出低密产品开发存证列表
 * @param params 查询参数
 * @returns Promise
 */
export function exportLowSecurityDevelopmentList(params: QueryParams): Promise<Blob> {
  return post('/evidence/development/low-security/export', params, {
    responseType: 'blob'
  })
}

/**
 * 导出高密产品开发存证列表
 * @param params 查询参数
 * @returns Promise
 */
export function exportHighSecurityDevelopmentList(params: QueryParams): Promise<Blob> {
  return post('/evidence/development/high-security/export', params, {
    responseType: 'blob'
  })
} 