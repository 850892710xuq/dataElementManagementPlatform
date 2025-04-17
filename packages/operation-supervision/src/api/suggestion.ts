import request from '@/utils/request';
import { generateSuggestionData, getSuggestionDetailData, processSuggestionData } from '@/mock/mockData';

// 建议记录接口类型定义
export interface SuggestionRecord {
  id: string;
  suggester: string;
  contact: string;
  title: string;
  type: string;
  content: string;
  createTime: string;
  status: string;
  attachments?: string;
  remark?: string;
  processInfo?: {
    time: string;
    operator: string;
    content: string;
    status: string;
  }[];
}

// 建议记录查询参数
export interface SuggestionQueryParams {
  suggester?: string;
  status?: string;
  timeRange?: string[];
  pageNum: number;
  pageSize: number;
}

// 分页结果类型
export interface PageResult<T> {
  total: number;
  list: T[];
}

/**
 * 获取建议记录列表
 * @param params 查询参数
 * @returns 建议记录分页列表
 */
export function getSuggestionList(params: SuggestionQueryParams) {
  // 使用模拟数据
  return Promise.resolve(generateSuggestionData(params));
  
  // 实际开发中通过API请求
  // return request({
  //   url: '/api/operation-supervision/suggestion/list',
  //   method: 'get',
  //   params
  // });
}

/**
 * 获取建议记录详情
 * @param id 建议记录ID
 * @returns 建议记录详情
 */
export function getSuggestionDetail(id: string) {
  // 使用模拟数据
  return Promise.resolve(getSuggestionDetailData(id));
  
  // 实际开发中通过API请求
  // return request({
  //   url: `/api/operation-supervision/suggestion/${id}`,
  //   method: 'get'
  // });
}

/**
 * 处理建议
 * @param id 建议记录ID
 * @param data 处理数据
 * @returns 处理结果
 */
export function processSuggestion(id: string, data: {
  status: string;
  feedback: string;
}) {
  // 使用模拟数据
  return Promise.resolve(processSuggestionData(id, data));
  
  // 实际开发中通过API请求
  // return request({
  //   url: `/api/operation-supervision/suggestion/${id}/process`,
  //   method: 'post',
  //   data
  // });
}

/**
 * 导出建议记录
 * @param params 查询参数
 * @returns blob数据
 */
export function exportSuggestionRecords(params: SuggestionQueryParams) {
  return request({
    url: '/api/operation-supervision/suggestion/export',
    method: 'get',
    params,
    responseType: 'blob'
  });
} 