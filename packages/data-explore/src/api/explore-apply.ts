import request from '@/utils/request'

// 定义接口返回类型
interface ApiResponse<T> {
  code: number
  data: T
  message: string
}

// 定义申请参数接口
interface ApplyParams {
  dataIds: number[]
  applyTime: string
}

// 提交数据探查申请
export function submitExploreApply(data: ApplyParams) {
  return request<ApiResponse<any>>({
    url: '/api/explore-apply/submit',
    method: 'post',
    data
  })
} 