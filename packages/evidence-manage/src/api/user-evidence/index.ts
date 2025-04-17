import request from '@/utils/request'
import type { QueryParams } from '@/types'

/**
 * 获取用户操作存证列表
 * @param params 查询参数
 * @returns 用户操作存证列表数据
 */
export function getUserEvidenceList(params: QueryParams) {
  return request({
    url: '/api/v1/user-evidence/list',
    method: 'get',
    params
  })
}

/**
 * 获取用户操作存证详情
 * @param evidenceNo 存证编号
 * @returns 用户操作存证详情数据
 */
export function getUserEvidenceDetail(evidenceNo: string) {
  return request({
    url: `/api/v1/user-evidence/detail/${evidenceNo}`,
    method: 'get'
  })
}

/**
 * 导出用户操作存证列表
 * @param params 查询参数
 * @returns Blob数据
 */
export function exportUserEvidenceList(params: QueryParams) {
  return request({
    url: '/api/v1/user-evidence/export',
    method: 'get',
    params,
    responseType: 'blob' // 设置响应类型为blob
  })
}

/**
 * 删除用户操作存证
 * @param evidenceNo 存证编号
 * @returns 操作结果
 */
export function deleteUserEvidence(evidenceNo: string) {
  return request({
    url: `/api/v1/user-evidence/delete/${evidenceNo}`,
    method: 'delete'
  })
} 