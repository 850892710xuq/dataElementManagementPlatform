import request from '@/utils/request'
import type { QueryParams, PageResult, LowSecurityDeliveryEvidence, HighSecurityDeliveryEvidence } from '@/types'

/**
 * 获取常规交付存证列表
 * @param params 查询参数
 * @returns 分页结果
 */
export function getLowSecurityDeliveryList(params: QueryParams) {
  return request<PageResult<LowSecurityDeliveryEvidence>>({
    url: '/api/evidence/delivery/low-security',
    method: 'get',
    params
  })
}

/**
 * 获取常规交付存证详情
 * @param evidenceNo 存证编号
 * @returns 常规交付存证详情
 */
export function getLowSecurityDeliveryDetail(evidenceNo: string) {
  return request<LowSecurityDeliveryEvidence>({
    url: `/api/evidence/delivery/low-security/${evidenceNo}`,
    method: 'get'
  })
}

/**
 * 导出常规交付存证列表
 * @param params 查询参数
 * @returns Blob 对象
 */
export function exportLowSecurityDeliveryList(params: QueryParams) {
  return request<Blob>({
    url: '/api/evidence/delivery/low-security/export',
    method: 'get',
    params,
    responseType: 'blob'
  })
}

/**
 * 获取高密交付存证列表
 * @param params 查询参数
 * @returns 分页结果
 */
export function getHighSecurityDeliveryList(params: QueryParams) {
  return request<PageResult<HighSecurityDeliveryEvidence>>({
    url: '/api/evidence/delivery/high-security',
    method: 'get',
    params
  })
}

/**
 * 获取高密交付存证详情
 * @param evidenceNo 存证编号
 * @returns 高密交付存证详情
 */
export function getHighSecurityDeliveryDetail(evidenceNo: string) {
  return request<HighSecurityDeliveryEvidence>({
    url: `/api/evidence/delivery/high-security/${evidenceNo}`,
    method: 'get'
  })
}

/**
 * 导出高密交付存证列表
 * @param params 查询参数
 * @returns Blob 对象
 */
export function exportHighSecurityDeliveryList(params: QueryParams) {
  return request<Blob>({
    url: '/api/evidence/delivery/high-security/export',
    method: 'get',
    params,
    responseType: 'blob'
  })
} 