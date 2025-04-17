import request from '@/utils/request'

// 数据资源类型枚举
export enum DataSourceType {
  MYSQL = 'mysql',
  GAUSSDB = 'gaussdb',
  REPORT = 'report',
  FILE = 'file',
  API = 'api'
}

// 数据资源接口
export interface DataSource {
  id: string
  name: string
  type: DataSourceType
  createTime: string
  creator: string
  status: string
  description?: string
  sensitivityLevel?: string // 敏感级别
}

// MySQL数据源配置
export interface MySQLConfig {
  host: string
  port: number
  username: string
  password: string
  database: string
}

// GaussDB数据源配置
export interface GaussDBConfig extends MySQLConfig {
  cluster?: string
}

// 数据报告配置
export interface ReportConfig {
  reportName: string
  reportFormat: string
  useLimit?: string
  fileList: Array<{
    name: string
    url: string
  }>
}

// 数据文件配置
export interface FileConfig {
  fileName: string
  fileFormat: string
  featureCount?: number
  featureInfo?: Array<{
    name: string
    type: string
  }>
  fileList: Array<{
    name: string
    url: string
  }>
}

// API配置
export interface APIConfig {
  apiUrl: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  params?: Array<{
    name: string
    type: string
    required: boolean
    description?: string
  }>
  response?: Array<{
    name: string
    type: string
    description?: string
  }>
  requestExample?: string
  responseExample?: string
}

// 获取数据资源列表
export function getDataSourceList(params: {
  page: number
  pageSize: number
  name?: string
  type?: DataSourceType
}) {
  return request({
    url: '/api/data-source/list',
    method: 'get',
    params
  })
}

// 新增数据资源
export function addDataSource(data: {
  name: string
  type: DataSourceType
  description?: string
  config: MySQLConfig | GaussDBConfig | ReportConfig | FileConfig | APIConfig
}) {
  return request({
    url: '/api/data-source',
    method: 'post',
    data
  })
}

// 更新数据资源
export function updateDataSource(id: string, data: {
  name?: string
  description?: string
  config?: MySQLConfig | GaussDBConfig | ReportConfig | FileConfig | APIConfig
}) {
  return request({
    url: `/api/data-source/${id}`,
    method: 'put',
    data
  })
}

// 删除数据资源
export function deleteDataSource(id: string) {
  return request({
    url: `/api/data-source/${id}`,
    method: 'delete'
  })
}

// 测试数据库连接
export function testDBConnection(config: MySQLConfig | GaussDBConfig) {
  return request({
    url: '/api/data-source/test-connection',
    method: 'post',
    data: config
  })
} 