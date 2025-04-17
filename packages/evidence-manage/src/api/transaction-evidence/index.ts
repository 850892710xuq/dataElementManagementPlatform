import request from '@/utils/request'
import type { QueryParams } from '@/types'

/**
 * 获取交易存证列表
 * @param params 查询参数
 * @returns 交易存证列表数据
 */
export function getTransactionEvidenceList(params: QueryParams) {
  return request({
    url: '/api/v1/transaction-evidence/list',
    method: 'get',
    params
  })
}

/**
 * 获取交易存证详情
 * @param evidenceNo 存证编号
 * @returns 交易存证详情数据
 */
export function getTransactionEvidenceDetail(evidenceNo: string) {
  return request({
    url: `/api/v1/transaction-evidence/detail/${evidenceNo}`,
    method: 'get'
  })
}

/**
 * 导出交易存证列表
 * @param params 查询参数
 * @returns Blob数据
 */
export function exportTransactionEvidenceList(params: QueryParams) {
  return request({
    url: '/api/v1/transaction-evidence/export',
    method: 'get',
    params,
    responseType: 'blob' // 设置响应类型为blob
  })
}

/**
 * 下载交易存证文件
 * @param evidenceNo 存证编号
 * @returns Blob数据
 */
export function downloadTransactionEvidence(evidenceNo: string) {
  return request({
    url: `/api/v1/transaction-evidence/download/${evidenceNo}`,
    method: 'get',
    responseType: 'blob' // 设置响应类型为blob
  })
}

/**
 * 验证交易存证真实性
 * @param evidenceNo 存证编号
 * @returns 验证结果
 */
export function verifyTransactionEvidence(evidenceNo: string) {
  return request({
    url: `/api/v1/transaction-evidence/verify/${evidenceNo}`,
    method: 'get'
  })
}

/**
 * 删除交易存证
 * @param evidenceNo 存证编号
 * @returns 操作结果
 */
export function deleteTransactionEvidence(evidenceNo: string) {
  return request({
    url: `/api/v1/transaction-evidence/delete/${evidenceNo}`,
    method: 'delete'
  })
} 