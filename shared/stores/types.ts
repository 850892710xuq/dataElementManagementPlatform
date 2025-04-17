// 定义通用的数据类型接口
export interface BaseModel {
  id: string | number;
  createTime: string;
  updateTime: string;
}

// 定义通用的分页参数接口
export interface PaginationQuery {
  page: number;
  pageSize: number;
  total?: number;
}

// 定义通用的响应格式
export interface ApiResponse<T> {
  code: number;
  data: T;
  message: string;
} 