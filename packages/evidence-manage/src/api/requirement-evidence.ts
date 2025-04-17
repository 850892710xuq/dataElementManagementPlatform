import request from '@/utils/request'
import type { QueryParams, PageResult, RequirementPublishEvidence, RequirementClaimEvidence } from '@/types'

/**
 * 获取需求定制上架存证列表
 * @param params 查询参数
 * @returns 分页结果
 */
export function getRequirementPublishList(params: QueryParams) {
  return request<PageResult<RequirementPublishEvidence>>({
    url: '/api/evidence/requirement/publish',
    method: 'get',
    params
  })
}

/**
 * 获取需求定制上架存证详情
 * @param evidenceNo 存证编号
 * @returns 需求定制上架存证详情
 */
export function getRequirementPublishDetail(evidenceNo: string) {
  return request<RequirementPublishEvidence>({
    url: `/api/evidence/requirement/publish/${evidenceNo}`,
    method: 'get'
  })
}

/**
 * 导出需求定制上架存证列表
 * @param params 查询参数
 * @returns Blob 对象
 */
export function exportRequirementPublishList(params: QueryParams) {
  return request<Blob>({
    url: '/api/evidence/requirement/publish/export',
    method: 'get',
    params,
    responseType: 'blob'
  })
}

/**
 * 获取需求认领记录存证列表
 * @param params 查询参数
 * @returns 分页结果
 */
export function getRequirementClaimList(params: QueryParams) {
  return request<PageResult<RequirementClaimEvidence>>({
    url: '/api/evidence/requirement/claim',
    method: 'get',
    params
  })
}

/**
 * 获取需求认领记录存证详情
 * @param evidenceNo 存证编号
 * @returns 需求认领记录存证详情
 */
export function getRequirementClaimDetail(evidenceNo: string) {
  return request<RequirementClaimEvidence>({
    url: `/api/evidence/requirement/claim/${evidenceNo}`,
    method: 'get'
  })
}

/**
 * 导出需求认领记录存证列表
 * @param params 查询参数
 * @returns Blob 对象
 */
export function exportRequirementClaimList(params: QueryParams) {
  return request<Blob>({
    url: '/api/evidence/requirement/claim/export',
    method: 'get',
    params,
    responseType: 'blob'
  })
} 