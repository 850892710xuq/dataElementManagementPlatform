import request from './request'
import type { AxiosResponse } from 'axios'

// 查询参数类型
export interface QueryParams {
  pageNum: number
  pageSize: number
  productName?: string
  transactionType?: string
  transactionStatus?: string
  transactionTimeStart?: string
  transactionTimeEnd?: string
}

// 产品上架存证类型
export interface ProductListingEvidence {
  id: string
  productName: string
  transactionTime: string
  transactionType: '上架'
  transactionStatus: '上架审核通过' | '上架审核不通过'
  evidenceNo: string
  applyTime: string
  applicant: string
  applicantId: string
  productPrice: number
  productDescription: string
  auditTime: string
  auditor: string
  auditResult: '通过' | '不通过'
  auditReason: string
  evidenceTime: string
}

// 产品订单交易存证类型
export interface ProductOrderEvidence {
  id: string
  productName: string
  transactionTime: string
  transactionType: '订单交易'
  transactionStatus: '订单交易成功' | '订单交易失败'
  evidenceNo: string
  orderTime: string
  buyer: string
  buyerId: string
  quantity: number
  unitPrice: number
  paymentMethod: string
  auditTime: string
  auditor: string
  auditResult: '通过' | '不通过'
  auditReason: string
  completeTime: string
  totalAmount: number
  evidenceTime: string
}

// 产品交易存证类型（联合类型）
export type ProductTransactionEvidence = ProductListingEvidence | ProductOrderEvidence

// 获取产品交易存证列表
export function getProductTransactionEvidenceList(params: QueryParams): Promise<{
  list: ProductTransactionEvidence[]
  total: number
}> {
  return request({
    url: '/api/evidence/product-transaction/list',
    method: 'get',
    params
  })
}

// 获取产品交易存证详情
export function getProductTransactionEvidenceDetail(id: string): Promise<ProductTransactionEvidence> {
  return request({
    url: `/api/evidence/product-transaction/detail/${id}`,
    method: 'get'
  })
}

// 导出产品交易存证列表
export function exportProductTransactionEvidenceList(params: QueryParams): Promise<Blob> {
  return request({
    url: '/api/evidence/product-transaction/export',
    method: 'get',
    params,
    responseType: 'blob'
  })
}

// 下载产品交易存证
export function downloadProductTransactionEvidence(evidenceNo: string): Promise<Blob> {
  return request({
    url: `/api/evidence/product-transaction/download/${evidenceNo}`,
    method: 'get',
    responseType: 'blob'
  })
}

// 验证产品交易存证
export function verifyProductTransactionEvidence(evidenceNo: string): Promise<{
  verified: boolean
  message: string
}> {
  return request({
    url: `/api/evidence/product-transaction/verify/${evidenceNo}`,
    method: 'get'
  })
} 