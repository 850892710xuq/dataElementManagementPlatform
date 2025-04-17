import { get, post } from './request'
import type { PageResult, QueryParams, TransactionEvidence } from '@/types'

/**
 * 获取产品交易存证列表
 * @param params 查询参数
 * @returns Promise
 */
export function getTransactionEvidenceList(params: QueryParams): Promise<PageResult<TransactionEvidence>> {
  return get('/evidence/transaction/list', params)
}

/**
 * 获取产品交易存证详情
 * @param evidenceNo 存证编号
 * @returns Promise
 */
export function getTransactionEvidenceDetail(evidenceNo: string): Promise<TransactionEvidence> {
  return get(`/evidence/transaction/detail/${evidenceNo}`)
}

/**
 * 导出产品交易存证列表
 * @param params 查询参数
 * @returns Promise
 */
export function exportTransactionEvidenceList(params: QueryParams): Promise<Blob> {
  return post('/evidence/transaction/export', params, {
    responseType: 'blob'
  })
}

/**
 * 下载产品交易存证文件
 * @param evidenceNo 存证编号
 * @returns Promise
 */
export function downloadTransactionEvidence(evidenceNo: string): Promise<Blob> {
  return get(`/evidence/transaction/download/${evidenceNo}`, {}, {
    responseType: 'blob'
  })
}

/**
 * 验证产品交易存证真实性
 * @param evidenceNo 存证编号
 * @returns Promise
 */
export function verifyTransactionEvidence(evidenceNo: string): Promise<{
  verified: boolean
  message: string
}> {
  return get(`/evidence/transaction/verify/${evidenceNo}`)
} 