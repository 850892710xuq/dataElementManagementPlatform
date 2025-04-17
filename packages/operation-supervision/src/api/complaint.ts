import request from '@/utils/request';
import { generateComplaintData, getComplaintDetailData, processComplaintData } from '@/mock/mockData';

// 投诉记录接口类型定义
export interface ComplaintRecord {
  id: string;             // 投诉编号
  complainant: string;    // 投诉人姓名
  contactInfo: string;    // 联系方式
  title: string;          // 投诉标题
  content: string;        // 投诉内容
  createTime: string;     // 投诉时间
  status: 'pending' | 'processing' | 'completed' | 'closed'; // 处理状态
  replyContent?: string;  // 回复内容
  replyTime?: string;     // 回复时间
  attachments?: string[]; // 附件列表
}

// 投诉记录查询参数
export interface ComplaintQueryParams {
  complainant?: string;    // 投诉人
  title?: string;          // 投诉标题
  status?: string;         // 处理状态
  timeRange?: string[];    // 时间范围
  pageNum: number;         // 页码
  pageSize: number;        // 每页条数
}

// 分页结果类型
export interface PageResult<T> {
  total: number;          // 总条数
  list: T[];              // 数据列表
}

/**
 * 获取投诉记录列表
 * @param params 查询参数
 * @returns 投诉记录分页列表
 */
export function getComplaintList(params: ComplaintQueryParams) {
  // 使用模拟数据
  return Promise.resolve(generateComplaintData(params));
  
  // 实际开发中通过API请求
  // return request({
  //   url: '/api/operation-supervision/complaint/list',
  //   method: 'get',
  //   params
  // });
}

/**
 * 获取投诉记录详情
 * @param id 投诉记录ID
 * @returns 投诉记录详情
 */
export function getComplaintDetail(id: string) {
  // 使用模拟数据
  return Promise.resolve(getComplaintDetailData(id));
  
  // 实际开发中通过API请求
  // return request({
  //   url: `/api/operation-supervision/complaint/${id}`,
  //   method: 'get'
  // });
}

/**
 * 处理投诉
 * @param id 投诉记录ID
 * @param data 处理数据
 * @returns 处理结果
 */
export function processComplaint(id: string, data: {
  status: string;
  replyContent: string;
}) {
  // 使用模拟数据
  return Promise.resolve(processComplaintData(id, data));
  
  // 实际开发中通过API请求
  // return request({
  //   url: `/api/operation-supervision/complaint/${id}/process`,
  //   method: 'post',
  //   data
  // });
}

/**
 * 导出投诉记录
 * @param params 查询参数
 * @returns blob数据
 */
export function exportComplaintRecords(params: ComplaintQueryParams) {
  return request({
    url: '/api/operation-supervision/complaint/export',
    method: 'get',
    params,
    responseType: 'blob'
  });
} 