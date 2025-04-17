import Mock from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'

// 生成随机时间字符串
const randomTime = (isRecent = true, hoursRange = 24) => {
  const date = new Date()
  if (isRecent) {
    // 最近hoursRange小时内的时间
    date.setHours(date.getHours() - Math.floor(Math.random() * hoursRange))
    date.setMinutes(date.getMinutes() - Math.floor(Math.random() * 60))
  } else {
    // 未来hoursRange小时内的时间
    date.setHours(date.getHours() + Math.floor(Math.random() * hoursRange))
    date.setMinutes(date.getMinutes() + Math.floor(Math.random() * 60))
  }
  return date.toISOString().replace('T', ' ').substring(0, 19)
}

// 生成随机等待时间
const randomWaitTime = () => {
  const minutes = Math.floor(Math.random() * 120)
  if (minutes < 60) {
    return `${minutes}分钟`
  }
  return `${Math.floor(minutes / 60)}小时${minutes % 60}分钟`
}

// 生成随机状态
const randomStatus = () => {
  const statuses = ['running', 'paused', 'error']
  const weights = [0.7, 0.2, 0.1] // 70%运行中，20%暂停，10%异常
  const random = Math.random()
  let sum = 0
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i]
    if (random < sum) {
      return statuses[i]
    }
  }
  return statuses[0]
}

// 数据域类型
const dataTypes = [
  '结构化数据',
  '非结构化数据',
  '半结构化数据',
  '时序数据',
  '空间数据',
  '图数据'
]

// 数据来源
const dataSources = [
  '业务系统',
  '第三方API',
  '外部数据库',
  '爬虫采集',
  '用户上传',
  '物联网设备',
  '传感器'
]

// 探查类型
const exploreTypes = [
  '数据质量分析',
  '数据结构探查',
  '数据关联分析',
  '异常值检测',
  '数据分布统计',
  '时间序列分析',
  '空间数据探查'
]

// 部门信息
const departments = [
  '研发部',
  '市场部',
  '销售部',
  '客服部',
  '财务部',
  '人力资源部',
  '数据分析部',
  '运维部'
]

// 生成更有业务意义的任务ID
const generateTaskId = (prefix, index) => {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${prefix}${year}${month}${day}${String(index).padStart(4, '0')}`
}

// 生成数据产品名称
const generateDataName = (index) => {
  const prefixes = ['客户', '订单', '产品', '交易', '用户', '设备', '位置', '行为', '评论']
  const suffixes = ['数据集', '报表', '分析表', '统计表', '指标库', '画像', '标签', '关系图', '趋势图']
  
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)]
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)]
  
  return `${randomPrefix}${randomSuffix}-${String(index).padStart(3, '0')}`
}

// 生成运行中任务数据
const generateRunningTasks = (count = 100) => {
  const result = []
  for (let i = 1; i <= count; i++) {
    const status = randomStatus()
    const progress = status === 'running' ? Math.floor(Math.random() * 100) : 
                    status === 'paused' ? Math.floor(Math.random() * 70) : 
                    Math.floor(Math.random() * 50)
    
    // 根据任务完成度计算更合理的预计结束时间
    const hoursToComplete = status === 'running' ? 
                         Math.max(1, Math.round((100 - progress) / 10)) : 
                         Math.max(2, Math.round((100 - progress) / 5))
    
    const dataType = dataTypes[Math.floor(Math.random() * dataTypes.length)]
    const dataSource = dataSources[Math.floor(Math.random() * dataSources.length)]
    const exploreType = exploreTypes[Math.floor(Math.random() * exploreTypes.length)]
    const department = departments[Math.floor(Math.random() * departments.length)]
    
    result.push({
      id: i,
      taskId: generateTaskId('XQT', i),
      dataName: generateDataName(i),
      progress,
      startTime: randomTime(true, 48),
      estimatedEndTime: randomTime(false, hoursToComplete),
      status,
      dataType,
      dataSource,
      exploreType,
      department,
      dataSize: `${Math.floor(Math.random() * 990) + 10}GB`,
      priority: Math.floor(Math.random() * 3) + 1 // 1-3的优先级
    })
  }
  return result
}

// 生成排队中任务数据
const generateQueuedTasks = (count = 50) => {
  const result = []
  for (let i = 1; i <= count; i++) {
    const dataType = dataTypes[Math.floor(Math.random() * dataTypes.length)]
    const dataSource = dataSources[Math.floor(Math.random() * dataSources.length)]
    const exploreType = exploreTypes[Math.floor(Math.random() * exploreTypes.length)]
    const department = departments[Math.floor(Math.random() * departments.length)]
    
    result.push({
      id: i,
      taskId: generateTaskId('DDT', i),
      dataName: generateDataName(i + 100),
      submitTime: randomTime(true, 72),
      queuePosition: i,
      estimatedWaitTime: randomWaitTime(),
      dataType,
      dataSource,
      exploreType,
      department,
      dataSize: `${Math.floor(Math.random() * 990) + 10}GB`,
      priority: Math.floor(Math.random() * 3) + 1 // 1-3的优先级
    })
  }
  return result
}

// 预生成数据
const runningTasks = generateRunningTasks()
const queuedTasks = generateQueuedTasks()

export default [
  // 获取运行中任务列表
  {
    url: '/api/task-schedule/running',
    method: 'get',
    response: (request) => {
      const { taskId, dataName, status, dataType, currentPage = 1, pageSize = 10 } = request.query

      // 过滤数据
      let filteredData = [...runningTasks]
      
      if (taskId) {
        filteredData = filteredData.filter(item => item.taskId.includes(taskId))
      }
      
      if (dataName) {
        filteredData = filteredData.filter(item => item.dataName.includes(dataName))
      }
      
      if (status) {
        filteredData = filteredData.filter(item => item.status === status)
      }
      
      if (dataType) {
        filteredData = filteredData.filter(item => item.dataType === dataType)
      }
      
      // 分页
      const start = (currentPage - 1) * pageSize
      const end = currentPage * pageSize
      const list = filteredData.slice(start, end)
      
      return {
        code: 200,
        data: {
          list,
          total: filteredData.length,
          currentPage: parseInt(currentPage),
          pageSize: parseInt(pageSize)
        },
        message: '获取运行中任务列表成功'
      }
    }
  },
  
  // 获取排队中任务列表
  {
    url: '/api/task-schedule/queued',
    method: 'get',
    response: (request) => {
      const { taskId, dataName, sortBy, sortOrder = 'asc', currentPage = 1, pageSize = 10 } = request.query

      // 过滤数据
      let filteredData = [...queuedTasks]
      
      if (taskId) {
        filteredData = filteredData.filter(item => item.taskId.includes(taskId))
      }
      
      if (dataName) {
        filteredData = filteredData.filter(item => item.dataName.includes(dataName))
      }
      
      // 排序
      if (sortBy) {
        filteredData.sort((a, b) => {
          const isAsc = sortOrder === 'asc'
          if (sortBy === 'submitTime') {
            return isAsc ? 
              new Date(a.submitTime).getTime() - new Date(b.submitTime).getTime() : 
              new Date(b.submitTime).getTime() - new Date(a.submitTime).getTime()
          }
          if (sortBy === 'queuePosition') {
            return isAsc ? a.queuePosition - b.queuePosition : b.queuePosition - a.queuePosition
          }
          if (sortBy === 'priority') {
            return isAsc ? a.priority - b.priority : b.priority - a.priority
          }
          return 0
        })
      }
      
      // 分页
      const start = (currentPage - 1) * pageSize
      const end = currentPage * pageSize
      const list = filteredData.slice(start, end)
      
      return {
        code: 200,
        data: {
          list,
          total: filteredData.length,
          currentPage: parseInt(currentPage),
          pageSize: parseInt(pageSize)
        },
        message: '获取排队中任务列表成功'
      }
    }
  },
  
  // 移除任务
  {
    url: '/api/task-schedule/task/:id',
    method: 'delete',
    response: (request) => {
      const { id } = request.params
      console.log('移除任务请求参数:', id) // 调试日志
      
      // 查找并移除任务
      const index = runningTasks.findIndex(item => item.taskId === id)
      console.log('找到的任务索引:', index, '任务ID:', id) // 调试日志
      
      if (index > -1) {
        const removedTask = runningTasks.splice(index, 1)[0]
        console.log('成功移除任务:', removedTask.taskId) // 调试日志
        return {
          code: 200,
          data: null,
          message: '任务移除成功'
        }
      }
      
      console.log('未找到任务:', id) // 调试日志
      return {
        code: 404,
        data: null,
        message: '未找到指定任务'
      }
    }
  }
] as MockMethod[] 