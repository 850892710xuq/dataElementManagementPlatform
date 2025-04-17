import request from '@/utils/request'

// 获取探查报告列表
export function getReportList(params: {
  name?: string
  currentPage: number
  pageSize: number
}) {
  return request({
    url: '/api/explore-report/list',
    method: 'get',
    params
  }).then(res => {
    // 确保返回的数据格式正确
    if (res.data && typeof res.data === 'object') {
      return {
        code: 200,
        data: {
          list: res.data.list || [],
          total: res.data.total || 0
        },
        message: 'success'
      }
    }
    return res
  })
}

// 获取探查报告详情
export function getReportDetail(id: number) {
  return request({
    url: `/api/explore-report/detail/${id}`,
    method: 'get'
  })
}

// 下载探查报告
export function downloadReport(id: number, format: 'pdf' | 'excel') {
  return request({
    url: `/api/explore-report/download/${id}`,
    method: 'get',
    params: { format },
    responseType: 'blob'
  })
} 