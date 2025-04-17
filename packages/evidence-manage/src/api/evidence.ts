import request from '@/utils/request';
import type { EvidenceQueryParams, LowSecurityEvidence, HighSecurityEvidence } from '@/types/evidence';

/**
 * 获取存证列表
 * @param params 查询参数
 * @returns 存证列表及分页信息
 */
export function getEvidenceList(params: EvidenceQueryParams) {
  return request({
    url: '/evidence/list',
    method: 'get',
    params
  });
}

/**
 * 获取低密产品开发存证详情
 * @param id 存证ID
 * @returns 低密产品开发存证详情
 */
export function getLowSecurityEvidenceDetail(id: string) {
  return request({
    url: `/evidence/low-security/${id}`,
    method: 'get'
  });
}

/**
 * 获取高密产品开发存证详情
 * @param id 存证ID
 * @returns 高密产品开发存证详情
 */
export function getHighSecurityEvidenceDetail(id: string) {
  return request({
    url: `/evidence/high-security/${id}`,
    method: 'get'
  });
}

/**
 * 检查是否有权限访问高密产品开发存证
 * @param id 存证ID
 * @returns 权限检查结果
 */
export function checkHighSecurityAccess(id: string) {
  return request({
    url: `/evidence/high-security/${id}/access`,
    method: 'get'
  });
}

// 查询参数类型定义
export interface QueryParams {
  pageNum: number;
  pageSize: number;
  [key: string]: any;
}

// 分页结果类型定义
export interface PageResult<T> {
  list: T[];
  total: number;
}

// 响应结果类型定义
export interface ApiResponse<T> {
  code: number;
  msg: string;
  data: T;
}

/**
 * 获取数据资源存证列表
 * @param params 查询参数
 * @returns 分页结果
 */
export function getDataResourceEvidenceList(params: QueryParams) {
  return request<ApiResponse<PageResult<any>>>({
    url: '/api/evidence/data-resource',
    method: 'get',
    params
  })
}

/**
 * 获取数据资源存证详情
 * @param evidenceNo 存证编号
 * @returns 数据资源存证详情
 */
export function getDataResourceEvidenceDetail(evidenceNo: string) {
  return request<ApiResponse<any>>({
    url: `/api/evidence/data-resource/${evidenceNo}`,
    method: 'get'
  })
}

/**
 * 获取需求定制上架存证列表
 * @param params 查询参数
 * @returns 分页结果
 */
export function getRequirementPublishEvidenceList(params: QueryParams) {
  return request<ApiResponse<PageResult<any>>>({
    url: '/evidence/requirement/publish',
    method: 'get',
    params
  })
}

/**
 * 获取需求定制上架存证详情
 * @param evidenceNo 存证编号
 * @returns 需求定制上架存证详情
 */
export function getRequirementPublishEvidenceDetail(evidenceNo: string) {
  return request<ApiResponse<any>>({
    url: `/evidence/requirement/publish/${evidenceNo}`,
    method: 'get'
  })
}

/**
 * 获取需求认领记录存证列表
 * @param params 查询参数
 * @returns 分页结果
 */
export function getRequirementClaimEvidenceList(params: QueryParams) {
  return request<ApiResponse<PageResult<any>>>({
    url: '/evidence/requirement/claim',
    method: 'get',
    params
  })
}

/**
 * 获取需求认领记录存证详情
 * @param evidenceNo 存证编号
 * @returns 需求认领记录存证详情
 */
export function getRequirementClaimEvidenceDetail(evidenceNo: string) {
  return request<ApiResponse<any>>({
    url: `/evidence/requirement/claim/${evidenceNo}`,
    method: 'get'
  })
} 