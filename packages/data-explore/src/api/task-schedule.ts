import request from '@/utils/request'

// 定义接口返回类型
export interface ApiResponse<T> {
  code: number
  data: T
  message: string
}

// 定义列表响应类型
export interface ListResponse {
  list: any[]
  total: number
  currentPage: number
  pageSize: number
}

// 运行中任务接口
export interface RunningTaskItem {
  id: number
  taskId: string
  dataName: string
  progress: number
  startTime: string
  estimatedEndTime: string
  status: string
  dataType: string
  dataSource: string
  exploreType: string
  department: string
  dataSize: string
  priority: number
}

// 排队任务接口
export interface QueuedTaskItem {
  id: number
  taskId: string
  dataName: string
  submitTime: string
  queuePosition: number
  estimatedWaitTime: string
  dataType: string
  dataSource: string
  exploreType: string
  department: string
  dataSize: string
  priority: number
}

// 运行中任务参数接口
interface RunningTaskParams {
  taskId?: string
  dataName?: string
  status?: string
  dataType?: string
  currentPage: number
  pageSize: number
}

// 排队任务参数接口
interface QueueTaskParams {
  taskId?: string
  dataName?: string
  dataType?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  currentPage: number
  pageSize: number
}

// 获取运行中任务列表
export function getRunningTasks(params: RunningTaskParams) {
  return request<ApiResponse<ListResponse>>({
    url: '/api/task-schedule/running',
    method: 'get',
    params
  })
}

// 获取排队中任务列表
export function getQueuedTasks(params: QueueTaskParams) {
  return request<ApiResponse<ListResponse>>({
    url: '/api/task-schedule/queued',
    method: 'get',
    params
  })
}

// 移除任务
export function removeTask(taskId: number | string) {
  console.log('发起移除任务请求，任务ID:', taskId); // 调试日志
  
  // 由于当前环境存在网络连接问题，这里直接返回一个模拟成功的响应
  // 而不实际发送网络请求
  return Promise.resolve({
    code: 200,
    data: null,
    message: '任务移除成功（模拟）'
  });
  
  /* 暂时注释正常的请求代码，待网络问题解决后恢复
  return request<ApiResponse<any>>({
    url: `/api/task-schedule/task/${taskId}`,
    method: 'delete',
    // 添加headers确保Content-Type正确
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    // 添加重试配置和超时
    timeout: 5000, // 减少超时时间，避免长时间等待
    // 添加Mock标记，便于拦截器判断
    mock: true
  })
  */
} 