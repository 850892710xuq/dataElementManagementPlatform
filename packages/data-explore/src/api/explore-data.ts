import request from '@/utils/request'

// 定义接口参数类型
export interface PageParams {
  pageNum: number
  pageSize: number
  name?: string
  industry?: string
}

// 定义数据项类型
export interface DataItem {
  id: number
  name: string
  type: string
  industry: string
  createTime: string
  // 数据库特有字段
  dbType?: string
  host?: string
  port?: string
  dbName?: string
  username?: string
  password?: string
  sql?: string
  // CSV特有字段
  csvFile?: string
  // S3特有字段
  s3Type?: string
  endpoint?: string
  region?: string
  accessKey?: string
  secretKey?: string
  bucket?: string
  path?: string
}

// 定义分页结果类型
export interface PageResult<T> {
  list: T[]
  total: number
}

// 定义响应类型
interface ApiResponse<T> {
  code: number
  data: T
  message?: string
}

// 定义数据列表响应类型
interface ListResponse {
  list: any[]
  total: number
  currentPage: number
  pageSize: number
}

// 获取数据列表
export function getDataList(params: {
  name?: string
  industry?: string
  currentPage: number
  pageSize: number
}) {
  return request.get<ApiResponse<ListResponse>>('/api/explore-data/list', { params })
}

// 获取行业选项
export function getIndustryOptions() {
  return request({
    url: '/api/common/industry-options',
    method: 'get'
  })
}

// 获取数据详情
export function getDataDetail(id: number) {
  return request.get<ApiResponse<any>>(`/api/explore-data/${id}`)
}

// 新增数据
export function addData(data: any) {
  return request.post<ApiResponse<any>>('/api/explore-data', data)
}

// 编辑数据
export function updateData(id: number, data: any) {
  return request.put<ApiResponse<any>>(`/api/explore-data/${id}`, data)
}

// 删除数据
export function deleteData(id: number) {
  return request.delete<ApiResponse<any>>(`/api/explore-data/${id}`)
} 