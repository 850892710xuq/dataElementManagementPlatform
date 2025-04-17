import { get, post } from './request'
import type { PageResult, QueryParams, DataEvidence } from '@/types'

/**
 * 获取数据登记存证列表
 * @param params 查询参数
 * @returns Promise
 */
export function getDataEvidenceList(params: QueryParams): Promise<PageResult<DataEvidence>> {
  return get('/evidence/data/list', params)
}

/**
 * 获取数据登记存证详情
 * @param evidenceNo 存证编号
 * @returns Promise
 */
export function getDataEvidenceDetail(evidenceNo: string): Promise<DataEvidence> {
  return get(`/evidence/data/detail/${evidenceNo}`)
}

/**
 * 下载存证材料
 * @param fileUrl 材料链接
 * @returns Promise
 */
export function downloadMaterial(fileUrl: string): Promise<Blob> {
  return get('/evidence/data/download', { fileUrl }, {
    responseType: 'blob'
  })
}

/**
 * 导出数据登记存证列表
 * @param params 查询参数
 * @returns Promise
 */
// export function exportDataEvidenceList(params: QueryParams): Promise<Blob> {
//   return post('/evidence/data/export', params, {
//     responseType: 'blob'
//   })
// } 