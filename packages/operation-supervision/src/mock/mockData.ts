/**
 * 模拟数据生成工具
 * 提供各种模拟数据生成函数，用于开发和测试
 */

// 操作类型列表
export const operationTypes = [
  '登录系统', 
  '查询数据', 
  '新增数据', 
  '修改数据', 
  '删除数据', 
  '导出数据', 
  '授权操作', 
  '审批操作', 
  '修改密码', 
  '设置系统参数'
]

// 模块列表
export const modules = [
  '数据管理', 
  '用户管理', 
  '权限管理', 
  '数据目录', 
  '系统设置', 
  '数据授权', 
  '交易管理', 
  '异议处理', 
  '数据接入', 
  '日志管理'
]

// 用户列表
export const users = ['admin', 'dataManager', 'operator', 'auditor', 'visitor']

// IP前缀列表
export const ipPrefixes = ['192.168.1.', '10.10.10.', '172.16.0.', '220.181.38.']

/**
 * 生成随机日期时间字符串
 * @param days 随机天数范围（从现在开始往前推的最大天数）
 * @returns 格式化的日期时间字符串 YYYY-MM-DD HH:mm:ss
 */
export function generateRandomTime(days = 30) {
  const now = new Date()
  const randomDays = Math.floor(Math.random() * days)
  const hours = Math.floor(Math.random() * 24)
  const minutes = Math.floor(Math.random() * 60)
  const seconds = Math.floor(Math.random() * 60)
  
  now.setDate(now.getDate() - randomDays)
  now.setHours(hours, minutes, seconds)
  
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hour = String(now.getHours()).padStart(2, '0')
  const minute = String(now.getMinutes()).padStart(2, '0')
  const second = String(now.getSeconds()).padStart(2, '0')
  
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

/**
 * 生成操作日志模拟数据
 * @param params 查询参数
 * @returns 模拟的操作日志数据和总数
 */
export function generateOperationLogData(params: {
  username?: string;
  ip?: string;
  operationType?: string;
  module?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  pageNum: number;
  pageSize: number;
}) {
  // 生成总数据池
  const totalPool = []
  const totalCount = 100 // 模拟总数据量
  
  for (let i = 0; i < totalCount; i++) {
    const moduleIndex = i % modules.length
    const operationIndex = i % operationTypes.length
    const module = modules[moduleIndex]
    const operationType = operationTypes[operationIndex]
    
    // 生成随机用户名
    const userIndex = Math.floor(Math.random() * users.length)
    const username = users[userIndex]
    
    // 生成随机IP
    const ipPrefix = ipPrefixes[Math.floor(Math.random() * ipPrefixes.length)]
    const ipEnd = Math.floor(Math.random() * 255) + 1
    const ip = `${ipPrefix}${ipEnd}`
    
    // 生成详细的操作内容
    let operation = ''
    let description = ''
    let params = ''
    let result = ''
    const success = Math.random() > 0.1 // 90%的成功率
    const status = success ? 'success' : 'fail'
    
    switch (operationType) {
      case '登录系统':
        operation = '用户登录系统'
        description = `用户${username}通过Web界面成功登录系统`
        params = `{"username":"${username}","loginTime":"${generateRandomTime()}"}`
        result = success ? '登录成功' : '密码错误，登录失败'
        break
        
      case '查询数据':
        operation = `查询${module}数据列表`
        description = `用户${username}在${module}模块执行数据查询操作`
        params = `{"pageNum":1,"pageSize":20,"searchKey":"示例数据${i}"}`
        result = success ? `成功查询到${Math.floor(Math.random() * 100)}条记录` : '查询失败，数据源连接异常'
        break
        
      case '新增数据':
        operation = `新增${module}数据`
        description = `用户${username}在${module}模块新增数据记录`
        params = `{"name":"示例数据${i}","type":"类型${i % 5 + 1}","status":"启用"}`
        result = success ? '数据添加成功，ID:10086' : '数据添加失败，字段验证未通过'
        break
        
      case '修改数据':
        operation = `修改${module}数据`
        description = `用户${username}在${module}模块修改ID为${1000 + i}的数据记录`
        params = `{"id":${1000 + i},"name":"更新的数据${i}","type":"类型${i % 5 + 1}","status":"启用"}`
        result = success ? '数据更新成功' : '数据更新失败，记录可能已被删除'
        break
        
      case '删除数据':
        operation = `删除${module}数据`
        description = `用户${username}在${module}模块删除ID为${1000 + i}的数据记录`
        params = `{"id":${1000 + i}}`
        result = success ? '数据删除成功' : '数据删除失败，可能缺少删除权限'
        break
        
      case '导出数据':
        operation = `导出${module}数据`
        description = `用户${username}在${module}模块导出数据`
        params = `{"format":"excel","ids":[${1000 + i},${1001 + i},${1002 + i}]}`
        result = success ? '数据导出成功，共导出3条记录' : '数据导出失败，导出超时'
        break
        
      case '授权操作':
        operation = `${module}数据授权`
        description = `用户${username}对数据资源进行授权操作`
        params = `{"resourceId":${2000 + i},"targetUser":"user${i}","permission":"read,write"}`
        result = success ? '授权成功' : '授权失败，没有授权管理权限'
        break
        
      case '审批操作':
        const approveStatus = success ? '通过' : '驳回'
        operation = `${approveStatus}${module}审批申请`
        description = `用户${username}${approveStatus}了ID为${3000 + i}的${module}审批申请`
        params = `{"applicationId":${3000 + i},"approveStatus":"${approveStatus}","comment":"审批意见${i}"}`
        result = success ? '审批流程已更新' : '审批操作失败，流程状态已变更'
        break
        
      case '修改密码':
        operation = '修改账户密码'
        description = `用户${username}修改了登录密码`
        params = `{"username":"${username}","passwordChange":true}`
        result = success ? '密码修改成功' : '密码修改失败，原密码验证错误'
        break
        
      case '设置系统参数':
        operation = '修改系统配置参数'
        description = `用户${username}修改了${module}的系统配置参数`
        params = `{"paramName":"maxUploadSize","paramValue":"20MB","module":"${module}"}`
        result = success ? '系统参数设置成功' : '系统参数设置失败，参数值不合法'
        break
    }
    
    totalPool.push({
      id: i + 1,
      username,
      ip,
      operation,
      operateTime: generateRandomTime(),
      status,
      module, // 添加模块信息
      operationType, // 添加操作类型信息
      description,
      params,
      result
    })
  }
  
  // 根据查询条件筛选数据
  let filteredData = [...totalPool]
  
  // 用户名筛选
  if (params.username) {
    filteredData = filteredData.filter(item => 
      item.username.toLowerCase().includes(params.username!.toLowerCase())
    )
  }
  
  // IP地址筛选
  if (params.ip) {
    filteredData = filteredData.filter(item => 
      item.ip.includes(params.ip!)
    )
  }
  
  // 操作类型筛选
  if (params.operationType) {
    filteredData = filteredData.filter(item => 
      item.operationType === params.operationType
    )
  }
  
  // 模块筛选
  if (params.module) {
    filteredData = filteredData.filter(item => 
      item.module === params.module
    )
  }
  
  // 状态筛选
  if (params.status) {
    filteredData = filteredData.filter(item => 
      item.status === params.status
    )
  }
  
  // 时间范围筛选
  if (params.startTime && params.endTime) {
    const startDate = new Date(params.startTime).getTime()
    const endDate = new Date(params.endTime).getTime()
    
    filteredData = filteredData.filter(item => {
      const itemDate = new Date(item.operateTime).getTime()
      return itemDate >= startDate && itemDate <= endDate
    })
  }
  
  // 计算分页
  const total = filteredData.length
  const start = (params.pageNum - 1) * params.pageSize
  const end = start + params.pageSize
  const pageData = filteredData.slice(start, end)
  
  return {
    list: pageData,
    total
  }
}

/**
 * 获取操作日志详情
 * @param id 日志ID
 * @returns 日志详情数据
 */
export function getOperationLogDetailData(id: number) {
  // 生成一条模拟数据作为详情
  const moduleIndex = id % modules.length
  const operationIndex = id % operationTypes.length
  const module = modules[moduleIndex]
  const operationType = operationTypes[operationIndex]
  
  const userIndex = Math.floor(Math.random() * users.length)
  const username = users[userIndex]
  
  const ipPrefix = ipPrefixes[Math.floor(Math.random() * ipPrefixes.length)]
  const ipEnd = Math.floor(Math.random() * 255) + 1
  const ip = `${ipPrefix}${ipEnd}`
  
  let operation = ''
  let description = ''
  let params = ''
  let result = ''
  const success = Math.random() > 0.1
  const status = success ? 'success' : 'fail'
  
  // 根据不同操作类型生成不同的详情内容
  switch (operationType) {
    case '登录系统':
      operation = '用户登录系统'
      description = `用户${username}通过Web界面成功登录系统`
      params = `{"username":"${username}","loginTime":"${generateRandomTime()}"}`
      result = success ? '登录成功' : '密码错误，登录失败'
      break
      
    case '查询数据':
      operation = `查询${module}数据列表`
      description = `用户${username}在${module}模块执行数据查询操作`
      params = `{"pageNum":1,"pageSize":20,"searchKey":"查询关键词"}`
      result = success ? `成功查询到${Math.floor(Math.random() * 100)}条记录` : '查询失败，数据源连接异常'
      break
    
    // ... 其他操作类型的详情生成逻辑省略
    default:
      operation = `${operationType}操作`
      description = `用户${username}在${module}模块执行${operationType}操作`
      params = `{"id":${id},"module":"${module}","type":"${operationType}"}`
      result = success ? `${operationType}操作成功` : `${operationType}操作失败`
  }
  
  return {
    id,
    username,
    ip,
    operation,
    operateTime: generateRandomTime(),
    status,
    module,
    operationType,
    description,
    params,
    result,
    // 额外的详情信息
    browser: 'Chrome 118.0.5993.89',
    os: 'Windows 10',
    location: '北京市海淀区',
    source: 'Web平台'
  }
}

/**
 * 生成登录日志模拟数据
 * @param params 查询参数
 * @returns 模拟的登录日志数据和总数
 */
export function generateLoginLogData(params: {
  username?: string;
  ip?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  pageNum: number;
  pageSize: number;
}) {
  // 生成总数据池
  const totalPool = []
  const totalCount = 100 // 模拟总数据量
  
  // 设备列表
  const devices = ['桌面电脑', '移动设备', '平板设备']
  
  // 浏览器列表
  const browsers = ['Chrome 120.0.0.0', 'Firefox 121.0', 'Safari 17.0', 'Edge 120.0.0.0', 'Opera 105.0.0.0']
  
  // 操作系统列表
  const osList = ['Windows 10', 'Windows 11', 'macOS 13.0', 'macOS 14.0', 'iOS 17.0', 'Android 14', 'Linux Ubuntu 22.04']
  
  // 位置列表
  const locations = ['北京市海淀区', '上海市浦东新区', '广州市天河区', '深圳市南山区', '杭州市西湖区', '成都市高新区', '南京市鼓楼区']
  
  // 失败原因列表
  const failReasons = ['密码错误', '账号已锁定', '验证码错误', '账号不存在', 'IP地址限制', '异常登录拦截']
  
  for (let i = 0; i < totalCount; i++) {
    // 生成随机用户名
    const userIndex = Math.floor(Math.random() * users.length)
    const username = users[userIndex]
    
    // 生成随机IP
    const ipPrefix = ipPrefixes[Math.floor(Math.random() * ipPrefixes.length)]
    const ipEnd = Math.floor(Math.random() * 255) + 1
    const ip = `${ipPrefix}${ipEnd}`
    
    // 随机设备、浏览器和操作系统
    const deviceIndex = Math.floor(Math.random() * devices.length)
    const browserIndex = Math.floor(Math.random() * browsers.length)
    const osIndex = Math.floor(Math.random() * osList.length)
    
    // 随机登录状态（80%成功率）
    const success = Math.random() > 0.2
    const status = success ? 'success' : 'failed'
    
    // 随机失败原因
    const failReasonIndex = Math.floor(Math.random() * failReasons.length)
    
    // 随机位置
    const locationIndex = Math.floor(Math.random() * locations.length)
    
    totalPool.push({
      id: i + 1,
      username,
      ip,
      device: devices[deviceIndex],
      browser: browsers[browserIndex],
      os: osList[osIndex],
      loginTime: generateRandomTime(),
      logoutTime: success ? (Math.random() > 0.3 ? generateRandomTime() : null) : null, // 70%的成功登录有登出时间
      status,
      failReason: success ? null : failReasons[failReasonIndex],
      location: locations[locationIndex],
      remark: `这是第${i + 1}条登录记录的备注信息`
    })
  }
  
  // 根据查询条件筛选数据
  let filteredData = [...totalPool]
  
  // 用户名筛选
  if (params.username) {
    filteredData = filteredData.filter(item => 
      item.username.toLowerCase().includes(params.username!.toLowerCase())
    )
  }
  
  // IP地址筛选
  if (params.ip) {
    filteredData = filteredData.filter(item => 
      item.ip.includes(params.ip!)
    )
  }
  
  // 状态筛选
  if (params.status) {
    filteredData = filteredData.filter(item => 
      item.status === params.status
    )
  }
  
  // 时间范围筛选
  if (params.startTime && params.endTime) {
    const startDate = new Date(params.startTime).getTime()
    const endDate = new Date(params.endTime).getTime()
    
    filteredData = filteredData.filter(item => {
      const itemDate = new Date(item.loginTime).getTime()
      return itemDate >= startDate && itemDate <= endDate
    })
  }
  
  // 计算分页
  const total = filteredData.length
  const start = (params.pageNum - 1) * params.pageSize
  const end = start + params.pageSize
  const pageData = filteredData.slice(start, end)
  
  return {
    list: pageData,
    total
  }
}

/**
 * 获取登录日志详情
 * @param id 日志ID
 * @returns 日志详情数据
 */
export function getLoginLogDetailData(id: number) {
  // 设备列表
  const devices = ['桌面电脑', '移动设备', '平板设备']
  
  // 浏览器列表
  const browsers = ['Chrome 120.0.0.0', 'Firefox 121.0', 'Safari 17.0', 'Edge 120.0.0.0', 'Opera 105.0.0.0']
  
  // 操作系统列表
  const osList = ['Windows 10', 'Windows 11', 'macOS 13.0', 'macOS 14.0', 'iOS 17.0', 'Android 14', 'Linux Ubuntu 22.04']
  
  // 位置列表
  const locations = ['北京市海淀区', '上海市浦东新区', '广州市天河区', '深圳市南山区', '杭州市西湖区', '成都市高新区', '南京市鼓楼区']
  
  // 失败原因列表
  const failReasons = ['密码错误', '账号已锁定', '验证码错误', '账号不存在', 'IP地址限制', '异常登录拦截']
  
  // 生成随机索引
  const userIndex = id % users.length
  const deviceIndex = id % devices.length
  const browserIndex = id % browsers.length
  const osIndex = id % osList.length
  const locationIndex = id % locations.length
  const failReasonIndex = id % failReasons.length
  
  // 随机登录状态（根据ID的奇偶性决定）
  const success = id % 2 === 0
  const status = success ? 'success' : 'failed'
  
  // 生成请求参数对象
  const requestParams = {
    username: users[userIndex],
    timestamp: new Date().getTime(),
    ipAddress: `${ipPrefixes[id % ipPrefixes.length]}.${100 + (id % 100)}`,
    clientInfo: {
      device: devices[deviceIndex],
      browser: browsers[browserIndex],
      os: osList[osIndex]
    },
    loginMode: id % 3 === 0 ? "密码登录" : (id % 3 === 1 ? "短信验证码登录" : "扫码登录")
  }
  
  return {
    id,
    username: users[userIndex],
    ip: `${ipPrefixes[id % ipPrefixes.length]}.${100 + (id % 100)}`,
    device: devices[deviceIndex],
    browser: browsers[browserIndex],
    os: osList[osIndex],
    loginTime: generateRandomTime(),
    logoutTime: success ? (id % 3 === 0 ? generateRandomTime() : null) : null,
    status,
    failReason: success ? null : failReasons[failReasonIndex],
    location: locations[locationIndex],
    remark: `这是ID为${id}的登录记录的备注信息`,
    requestParams: requestParams // 添加请求参数
  }
}

/**
 * 投诉状态
 */
export const complaintStatusList = ['pending', 'processing', 'completed', 'closed']

/**
 * 投诉类型
 */
export const complaintTypeList = ['平台服务', '数据质量', '订单交易', '系统性能', '界面操作', '其他']

// 投诉记录数组
export const complaintRecords: {
  id: string;
  complainant: string;
  contactInfo: string;
  title: string;
  content: string;
  createTime: string;
  status: string;
  replyTime?: string;
  replyContent?: string;
  attachments?: string[];
}[] = []

// 建议记录数组
export const suggestionRecords: {
  id: string;
  suggester: string;
  contact: string;
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
}[] = []

/**
 * 生成投诉记录模拟数据
 * @param params 查询参数
 * @returns 模拟的投诉记录数据和总数
 */
export function generateComplaintData(params: {
  complainant?: string;
  title?: string;
  status?: string;
  timeRange?: string[];
  pageNum: number;
  pageSize: number;
}) {
  // 判断是否已初始化投诉记录数据
  if (complaintRecords.length === 0) {
    // 生成总数据池
    const totalCount = 35 // 模拟总数据量
  
    const complainants = ['张三', '李四', '王五', '赵六', '钱七', '孙八', '周九', '吴十']
    const contactPrefixes = ['138', '139', '137', '136', '135', '158', '159', '188', '186']
  
    const titlePrefixes = [
      '系统响应速度问题',
      '数据质量异常',
      '操作界面不友好',
      '数据导出失败',
      '平台功能建议',
      '授权流程太复杂',
      '数据更新不及时',
      '用户体验优化建议',
      '系统稳定性问题',
      '数据展示错误'
    ]
  
    const contentTemplates = [
      '平台在高峰期使用时页面加载缓慢，影响了业务办理效率，希望能够优化系统性能，提高响应速度。多次尝试访问平台进行数据查询，但都出现卡顿现象。',
      '下载的数据报表中存在多处数据不准确的情况，影响了我们后续的分析工作。具体表现为：1. 部分数值明显偏离正常范围；2. 有些字段存在空值；3. 日期格式不统一。',
      '系统界面操作复杂，按钮位置不合理，需要多次点击才能完成一项简单的操作。建议优化用户界面，简化操作流程，提高用户体验。',
      '尝试导出数据时频繁出现失败情况，特别是数据量较大时，无法完成导出操作。希望技术团队能够排查原因，优化导出功能。',
      '建议在平台首页增加数据分析仪表盘，方便用户快速了解数据概况。同时，希望能够提供个性化设置，让用户可以自定义首页展示内容。',
      '当前数据授权流程步骤繁多，审批环节过多，导致数据获取效率低下。建议简化授权流程，设置快速审批通道，提高工作效率。',
      '平台数据更新不及时，部分数据存在滞后现象，影响决策分析。建议提高数据更新频率，确保数据的实时性和准确性。',
      '系统的搜索功能不够智能，无法支持复杂条件组合查询，查找特定数据很困难。希望优化搜索功能，支持多条件组合和模糊匹配。',
      '系统在使用过程中偶尔会出现崩溃现象，导致已填写的数据丢失。希望加强系统稳定性，增加自动保存功能，避免数据丢失。',
      '数据可视化图表展示不直观，颜色搭配不合理，难以快速读取信息。建议优化图表设计，提高数据可读性。'
    ]
  
    const replyContentTemplates = [
      '感谢您的反馈。我们已经优化了系统性能，提高了响应速度。目前高峰期访问已经明显改善，请您再次尝试使用。',
      '非常感谢您反馈的数据质量问题。我们已经修复了数据异常，并加强了数据质量监控机制，确保类似问题不再发生。',
      '感谢您对用户界面的宝贵建议。我们已经根据您的反馈优化了操作流程，简化了界面，提升了用户体验。',
      '我们已经解决了数据导出功能的问题，并增加了分批导出选项，提高了大数据量导出的成功率。请您再次尝试。',
      '非常感谢您的建议。我们已经将您的意见纳入产品迭代计划，将在下一版本中推出数据分析仪表盘功能。',
      '我们已经收到您关于授权流程的反馈，已经简化了审批流程，减少了不必要的环节，提高了效率。',
      '感谢您的反馈。我们已经优化了数据更新机制，提高了更新频率，确保数据的实时性和准确性。',
      '我们已经根据您的建议优化了搜索功能，现在支持多条件组合查询和模糊匹配，提高了数据查找效率。',
      '感谢您反馈的系统稳定性问题。我们已经修复了导致崩溃的bug，并增加了数据自动保存功能，防止数据丢失。',
      '非常感谢您对数据可视化的建议。我们已经优化了图表设计和颜色方案，提高了数据可读性。'
    ]
  
    for (let i = 0; i < totalCount; i++) {
      const id = `CP${String(100001 + i).substring(1)}`
      const complainantIndex = i % complainants.length
      const complainant = complainants[complainantIndex]
    
      // 生成随机联系方式
      const contactPrefix = contactPrefixes[Math.floor(Math.random() * contactPrefixes.length)]
      const contactSuffix = String(Math.floor(Math.random() * 10000000) + 10000000).substring(1)
      const contactInfo = `${contactPrefix}${contactSuffix}`
    
      // 生成随机标题和内容
      const titleIndex = i % titlePrefixes.length
      const title = `${titlePrefixes[titleIndex]}${i > 9 ? '-' + Math.floor(i / 10) : ''}`
      const content = contentTemplates[titleIndex]
    
      // 生成随机创建时间
      const createTime = generateRandomTime(60)
    
      // 生成随机状态
      let status
      if (i < 10) {
        status = 'pending' // 约30%待处理
      } else if (i < 18) {
        status = 'processing' // 约25%处理中
      } else if (i < 28) {
        status = 'completed' // 约30%已完成
      } else {
        status = 'closed' // 约15%已关闭
      }
    
      // 生成回复信息（仅已完成和已关闭状态有回复）
      let replyTime = undefined
      let replyContent = undefined
      if (status === 'completed' || status === 'closed') {
        // 回复时间晚于创建时间
        const createDate = new Date(createTime)
        createDate.setHours(createDate.getHours() + Math.floor(Math.random() * 48) + 1)
        replyTime = createDate.toISOString().replace('T', ' ').substring(0, 19)
      
        replyContent = replyContentTemplates[titleIndex]
      }
    
      // 生成附件（只有部分记录有附件）
      let attachments = undefined
      if (i % 5 === 0) {
        attachments = ['问题截图.png']
        if (i % 10 === 0) {
          attachments.push('系统日志.txt')
        }
      }
    
      complaintRecords.push({
        id,
        complainant,
        contactInfo,
        title,
        content,
        createTime,
        status,
        replyTime,
        replyContent,
        attachments
      })
    }
  }
  
  // 根据查询条件筛选数据
  let filteredData = [...complaintRecords]
  
  // 投诉人筛选
  if (params.complainant) {
    filteredData = filteredData.filter(item => 
      item.complainant.includes(params.complainant!)
    )
  }
  
  // 标题筛选
  if (params.title) {
    filteredData = filteredData.filter(item => 
      item.title.includes(params.title!)
    )
  }
  
  // 状态筛选
  if (params.status) {
    filteredData = filteredData.filter(item => 
      item.status === params.status
    )
  }
  
  // 时间范围筛选
  if (params.timeRange && params.timeRange.length === 2) {
    const startDate = new Date(params.timeRange[0]).getTime()
    const endDate = new Date(params.timeRange[1]).getTime()
    
    filteredData = filteredData.filter(item => {
      const itemDate = new Date(item.createTime).getTime()
      return itemDate >= startDate && itemDate <= endDate
    })
  }
  
  // 计算分页
  const total = filteredData.length
  const start = (params.pageNum - 1) * params.pageSize
  const end = start + params.pageSize
  const pageData = filteredData.slice(start, end)
  
  return {
    code: 200,
    message: 'success',
    data: {
      list: pageData,
      total
    }
  }
}

/**
 * 获取投诉记录详情
 * @param id 投诉记录ID
 * @returns 投诉记录详情
 */
export function getComplaintDetailData(id: string) {
  // 确保数据已初始化
  if (complaintRecords.length === 0) {
    // 调用一次generateComplaintData来初始化数据
    generateComplaintData({
      pageNum: 1,
      pageSize: 10
    });
  }
  
  // 从complaintRecords数组中查找数据
  const complaint = complaintRecords.find(item => item.id === id);
  
  if (complaint) {
    return {
      code: 200,
      message: 'success',
      data: complaint
    };
  } else {
    return {
      code: 404,
      message: '未找到投诉记录',
      data: null
    };
  }
}

/**
 * 处理投诉
 * @param id 投诉记录ID
 * @param data 处理数据
 * @returns 处理结果
 */
export function processComplaintData(id: string, data: {
  status: string;
  replyContent: string;
}) {
  // 确保数据已初始化
  if (complaintRecords.length === 0) {
    // 调用一次generateComplaintData来初始化数据
    generateComplaintData({
      pageNum: 1,
      pageSize: 10
    });
  }

  // 查找并更新模拟数据中的记录
  const complaintIndex = complaintRecords.findIndex(item => item.id === id);
  if (complaintIndex !== -1) {
    // 更新状态和回复内容
    complaintRecords[complaintIndex].status = data.status;
    complaintRecords[complaintIndex].replyContent = data.replyContent;
    complaintRecords[complaintIndex].replyTime = new Date().toISOString().replace('T', ' ').substring(0, 19);
  }

  return {
    code: 200,
    message: '处理成功',
    data: {
      id,
      ...data,
      replyTime: new Date().toISOString().replace('T', ' ').substring(0, 19)
    }
  }
}

/**
 * 生成建议数据
 * @param params 查询参数
 * @returns 建议数据列表
 */
export function generateSuggestionData(params: {
  suggester?: string;
  status?: string;
  timeRange?: string[];
  pageNum: number;
  pageSize: number;
}) {
  // 第一次调用时初始化数据
  if (suggestionRecords.length === 0) {
    // 生成示例数据 - 真实的建议数据场景
    const suggestionData = [
      {
        id: 'SG000001',
        suggester: '李明',
        contact: '13866667777',
        title: '优化数据目录搜索功能',
        type: 'function',
        content: '建议在数据目录页面增加高级搜索功能，允许用户按照数据类型、更新时间、安全等级等多维度进行筛选。目前的搜索功能较为简单，只能通过名称进行查询，无法满足复杂场景下的精准查找需求。添加多维度筛选将大大提高数据查找效率，特别是对于数据量大的单位来说尤为重要。',
        createTime: '2024-05-02 09:15:23',
        status: 'pending',
        remark: '用户反馈在管理大量数据时搜索不便',
        attachments: '搜索功能设计建议.pdf, 界面截图.jpg'
      },
      {
        id: 'SG000002',
        suggester: '张华',
        contact: '13912345678',
        title: '增加数据可视化分析工具',
        type: 'function',
        content: '建议平台增加数据可视化分析工具，能够对已有数据进行图表展示和趋势分析。当前平台主要关注数据管理和存储，但缺乏直观的数据分析能力。集成可视化工具后，用户可以通过拖拽方式自定义图表，实现数据价值的快速发现，提升数据使用效率。建议可以考虑集成开源的可视化库如ECharts或自研简易分析工具。',
        createTime: '2024-04-28 14:30:45',
        status: 'adopted',
        processInfo: [
          {
            time: '2024-05-05 11:20:36',
            operator: '产品经理-王志强',
            content: '经产品部门评估，该建议具有较高价值，计划在下一季度版本中实现基础可视化功能，已列入产品路线图。',
            status: 'adopted'
          }
        ]
      },
      {
        id: 'SG000003',
        suggester: '赵敏',
        contact: '15822223333',
        title: '优化移动端适配体验',
        type: 'ui',
        content: '目前系统在手机等移动设备上显示不够友好，建议对关键页面进行移动端适配优化。主要问题包括：表格内容溢出屏幕需要横向滚动、按钮过小不易点击、表单在小屏幕上排版混乱。建议采用响应式设计，针对不同屏幕尺寸优化布局，确保用户在移动设备上也能获得良好的使用体验。',
        createTime: '2024-04-30 16:42:10',
        status: 'rejected',
        processInfo: [
          {
            time: '2024-05-07 09:45:22',
            operator: 'UI设计师-林小燕',
            content: '感谢您的建议。经评估，本平台主要面向企业内部管理人员使用，以PC端操作为主。当前阶段移动端适配不在优先级范围内，我们会在未来的迭代中考虑此需求。',
            status: 'rejected'
          }
        ]
      },
      {
        id: 'SG000004',
        suggester: '陈建国',
        contact: '13588889999',
        title: '添加批量导入导出功能',
        type: 'function',
        content: '建议系统增加数据批量导入导出功能，支持Excel、CSV等常用格式。在日常工作中，经常需要处理大量数据记录，目前系统只能单条添加，效率较低。批量导入功能可以大幅提高数据录入效率，导出功能则有助于数据备份和离线分析。建议考虑添加数据验证和错误提示机制，确保批量导入的数据质量。',
        createTime: '2024-05-01 10:18:33',
        status: 'adopted',
        attachments: '数据导入模板示例.xlsx',
        processInfo: [
          {
            time: '2024-05-08 14:20:15',
            operator: '开发主管-刘志伟',
            content: '该建议已采纳，计划在下一版本中实现Excel和CSV格式的批量导入导出功能，预计两周内完成开发。',
            status: 'adopted'
          }
        ]
      },
      {
        id: 'SG000005',
        suggester: '王丽',
        contact: '13699998888',
        title: '优化系统响应速度',
        type: 'function',
        content: '系统在数据加载时响应速度较慢，特别是在处理大量数据时明显卡顿。建议优化后端查询性能和前端渲染机制，提高系统整体响应速度。可以考虑实施以下优化措施：1. 数据库查询优化，添加合适的索引；2. 前端数据分页和懒加载；3. 使用数据缓存机制减少重复查询；4. 优化前端组件渲染性能。',
        createTime: '2024-05-03 15:40:27',
        status: 'pending'
      },
      {
        id: 'SG000006',
        suggester: '黄明明',
        contact: '15933334444',
        title: '增强数据安全保护措施',
        type: 'other',
        content: '建议加强系统数据安全保护措施，包括敏感数据脱敏显示、操作日志完善和权限控制精细化。当前系统对敏感数据（如手机号、身份证号等）显示完整信息，存在安全隐患。建议实现：1. 敏感字段自动脱敏展示；2. 完善数据访问和修改日志；3. 细化数据访问权限控制，实现行级和列级的权限管理；4. 添加异常操作预警机制。',
        createTime: '2024-04-27 11:28:56',
        status: 'adopted',
        processInfo: [
          {
            time: '2024-05-06 16:15:30',
            operator: '安全负责人-张强',
            content: '该建议对提升系统安全性具有重要价值，已纳入安全优化计划。第一阶段将实现敏感数据脱敏和操作日志完善，计划本月内完成。',
            status: 'adopted'
          }
        ]
      },
      {
        id: 'SG000007',
        suggester: '刘晓芳',
        contact: '13777778888',
        title: '简化数据授权审批流程',
        type: 'function',
        content: '当前数据授权审批流程过于复杂，需要多级审批，导致授权周期长。建议简化审批流程，对常规数据授权实现一键审批或自动审批。可以考虑基于数据安全等级设置不同的审批策略：低敏感度数据可以简化审批流程甚至自动授权，高敏感度数据维持严格审批流程。这样可以在保障数据安全的同时提高工作效率。',
        createTime: '2024-04-29 09:50:15',
        status: 'pending',
        remark: '来自数据使用频繁部门的建议'
      },
      {
        id: 'SG000008',
        suggester: '吴志远',
        contact: '13866665555',
        title: '增加系统使用教程和帮助文档',
        type: 'ui',
        content: '建议系统增加详细的使用教程和在线帮助文档，方便新用户快速上手。当前系统功能较为丰富但缺乏引导，新用户上手困难。建议添加：1. 功能引导流程，新用户首次使用时自动触发；2. 关键页面添加帮助提示按钮，点击后展示该功能的操作说明；3. 建立知识库，包含常见问题解答和操作指南；4. 添加视频教程，展示核心功能的操作流程。',
        createTime: '2024-05-04 13:25:48',
        status: 'adopted',
        processInfo: [
          {
            time: '2024-05-09 10:30:20',
            operator: '文档专员-陈丽',
            content: '已采纳该建议，正在编写系统使用手册和视频教程，计划本月底前完成并上线。',
            status: 'adopted'
          }
        ]
      },
      {
        id: 'SG000009',
        suggester: '钱海燕',
        contact: '15911112222',
        title: '改进系统通知机制',
        type: 'function',
        content: '建议改进系统通知机制，增加站内消息、邮件和手机短信等多渠道通知方式。目前系统只有简单的站内通知，容易被用户忽略。建议实现：1. 多渠道通知方式，用户可自行选择偏好的接收方式；2. 通知分级管理，重要通知可触发多渠道提醒；3. 通知中心功能，集中管理所有系统消息；4. 通知已读标记和批量处理功能。这些改进将显著提升用户体验和工作效率。',
        createTime: '2024-05-05 16:55:39',
        status: 'pending'
      },
      {
        id: 'SG000010',
        suggester: '孙伟',
        contact: '13612345678',
        title: '添加数据质量评估功能',
        type: 'data',
        content: '建议系统增加数据质量评估功能，对数据完整性、准确性、一致性等维度进行自动检查和评分。当前系统缺乏数据质量管控机制，容易导致低质量数据影响分析结果。建议实现：1. 数据质量自动检测规则配置；2. 定期质量评估任务和报告生成；3. 问题数据标记和处理流程；4. 数据质量评分和趋势分析。这将有助于提升整体数据资产价值和可信度。',
        createTime: '2024-04-26 14:30:00',
        status: 'rejected',
        processInfo: [
          {
            time: '2024-05-03 11:45:18',
            operator: '产品总监-张建国',
            content: '感谢您的宝贵建议。当前阶段我们正专注于数据管理基础功能的完善，数据质量评估功能较为复杂且需要较大投入。我们已将此建议纳入长期规划，但近期无法实施。',
            status: 'rejected'
          }
        ]
      },
      {
        id: 'SG000011',
        suggester: '郑小龙',
        contact: '18922223333',
        title: '优化表格导出PDF格式',
        type: 'function',
        content: '建议优化系统表格导出PDF的格式和样式，当前导出的PDF格式简陋，不支持自定义表头和样式。希望能够：1. 支持自定义导出字段；2. 提供多种PDF模板选择；3. 允许添加公司Logo和页眉页脚；4. 支持表格分页和分组统计。这些改进将使导出的报表更加专业和易用，满足正式场合使用需求。',
        createTime: '2024-05-06 11:05:27',
        status: 'pending'
      },
      {
        id: 'SG000012',
        suggester: '马丽丽',
        contact: '13588889999',
        title: '增加自定义仪表盘功能',
        type: 'function',
        content: '建议系统增加自定义仪表盘功能，允许用户根据自己的需求配置首页展示内容。当前系统首页对所有用户显示相同内容，无法突出重点信息。建议实现：1. 拖拽式组件布局配置；2. 多种数据展示组件（如卡片、图表、列表等）；3. 个性化设置保存和应用；4. 仪表盘模板共享机制。这将显著提升用户体验和工作效率，让用户能够快速关注关键信息。',
        createTime: '2024-04-25 16:48:32',
        status: 'adopted',
        processInfo: [
          {
            time: '2024-05-02 15:10:25',
            operator: '前端开发负责人-李强',
            content: '该建议已纳入产品规划，将在下一版本中实现基础的仪表盘配置功能，后续版本将持续完善和丰富组件库。',
            status: 'adopted'
          }
        ]
      },
      {
        id: 'SG000013',
        suggester: '周建',
        contact: '15811112222',
        title: '支持多语言切换功能',
        type: 'function',
        content: '建议增加系统多语言支持，至少包括中英文切换功能。随着业务国际化，越来越多的外籍人员需要使用系统，语言障碍影响工作效率。建议实现：1. 系统界面多语言支持框架；2. 关键数据的多语言存储机制；3. 用户个人语言偏好设置；4. 导出报表的多语言支持。这将大大提升系统的国际化水平，满足多元化用户需求。',
        createTime: '2024-05-07 09:30:14',
        status: 'pending'
      },
      {
        id: 'SG000014',
        suggester: '谢明',
        contact: '13755556666',
        title: '改进系统错误提示',
        type: 'ui',
        content: '建议改进系统错误提示机制，使错误信息更加友好和具体。当前系统在操作失败时只显示简单的"操作失败"，未提供具体原因和解决方法。建议优化为：1. 清晰说明错误原因；2. 提供可能的解决方案；3. 对技术性错误提供错误代码和详情查看选项；4. 重要操作失败时提供联系技术支持的入口。这些改进将减少用户疑惑和技术支持压力。',
        createTime: '2024-04-24 13:40:58',
        status: 'adopted',
        processInfo: [
          {
            time: '2024-05-01 10:25:33',
            operator: 'UI/UX设计师-王悦',
            content: '该建议已采纳，我们正在重新设计错误提示机制，优化提示文案，将在下一版本中完成优化。',
            status: 'adopted'
          }
        ]
      },
      {
        id: 'SG000015',
        suggester: '唐小华',
        contact: '18966667777',
        title: '增加系统深色模式',
        type: 'ui',
        content: '建议系统增加深色模式选项，减少长时间使用时的视觉疲劳。当前系统只有亮色主题，在弱光环境下使用容易导致眼睛疲劳。深色模式不仅能提供更好的视觉体验，还能在某些设备上节省电量。建议实现：1. 深色主题配色方案；2. 主题切换按钮和快捷键；3. 跟随系统主题自动切换选项；4. 用户主题偏好保存功能。',
        createTime: '2024-05-08 15:20:43',
        status: 'pending'
      },
      {
        id: 'SG000016',
        suggester: '韩晓峰',
        contact: '13688889999',
        title: '优化数据展示性能',
        type: 'function',
        content: '建议优化大数据量展示时的性能，当前系统在加载大量数据时速度明显下降。建议采取以下措施：1. 实现虚拟滚动技术，只渲染可视区域的数据；2. 优化后端分页查询机制；3. 引入数据缓存层减少重复查询；4. 针对大数据量表格提供简化视图选项。这些优化将显著提升用户在处理大数据集时的体验。',
        createTime: '2024-04-29 16:33:27',
        status: 'adopted',
        processInfo: [
          {
            time: '2024-05-06 10:45:12',
            operator: '性能优化工程师-赵刚',
            content: '已分析性能瓶颈，计划分阶段实施优化方案。第一阶段将实现虚拟滚动和查询优化，计划两周内完成。',
            status: 'adopted'
          }
        ]
      },
      {
        id: 'SG000017',
        suggester: '郭小梅',
        contact: '15199998888',
        title: '增加数据版本控制功能',
        type: 'function',
        content: '建议系统增加数据版本控制功能，记录重要数据的变更历史和支持版本回溯。当前系统在数据更新后无法查看历史版本，容易造成重要信息丢失。建议实现：1. 关键数据的变更历史记录；2. 数据版本比对功能；3. 特定场景下的版本回溯能力；4. 变更原因和操作人记录。这将大大提升系统的数据安全性和可追溯性。',
        createTime: '2024-05-09 09:15:33',
        status: 'pending'
      },
      {
        id: 'SG000018',
        suggester: '方建华',
        contact: '13522223333',
        title: '改进表单验证机制',
        type: 'ui',
        content: '建议改进系统表单验证机制，提升用户填写体验。当前表单验证存在以下问题：1. 错误提示滞后，仅在提交时才显示；2. 提示信息位置不统一；3. 部分复杂规则缺乏明确说明。建议优化为：即时验证（输入完成后立即验证）、清晰的内联错误提示、必填字段明显标识、复杂规则的帮助提示等。这些改进将减少用户填写错误，提高表单提交效率。',
        createTime: '2024-04-28 11:30:42',
        status: 'rejected',
        processInfo: [
          {
            time: '2024-05-05 14:20:35',
            operator: '前端架构师-吴浩',
            content: '感谢您的建议。我们当前使用Element Plus组件库的表单验证机制，整体替换成本较高。我们会在新开发模块中注意改进验证体验，但暂时不会对现有表单进行全面改造。',
            status: 'rejected'
          }
        ]
      },
      {
        id: 'SG000019',
        suggester: '钟伟',
        contact: '13966665555',
        title: '添加用户行为分析功能',
        type: 'function',
        content: '建议系统增加用户行为分析功能，收集和分析用户的使用习惯和路径。这些数据可以帮助产品团队了解：1. 最常用和最少使用的功能；2. 用户操作路径和停留时间；3. 功能发现率和使用障碍；4. 不同用户群体的使用差异。基于这些分析可以有针对性地优化产品设计，提升整体用户体验。当然，数据收集应充分考虑隐私保护，并提供选择退出选项。',
        createTime: '2024-05-03 14:28:37',
        status: 'pending'
      },
      {
        id: 'SG000020',
        suggester: '潘小龙',
        contact: '18866667777',
        title: '支持定制化数据导出模板',
        type: 'data',
        content: '建议系统支持定制化的数据导出模板功能，满足不同部门的报表需求。当前系统导出功能较为基础，无法满足各部门的特定格式要求。建议实现：1. 模板设计器，支持拖拽布局和样式设置；2. 模板权限管理，控制模板的使用范围；3. 支持Excel、PDF、Word等多种格式导出；4. 导出历史记录和常用模板收藏功能。这将大大提升报表工作效率，减少手工调整需求。',
        createTime: '2024-05-01 09:42:15',
        status: 'adopted',
        processInfo: [
          {
            time: '2024-05-07 16:35:22',
            operator: '产品经理-陈志远',
            content: '该建议对提升系统实用性有重要价值，已纳入产品路线图。计划分阶段实施，首先支持Excel模板定制，后续扩展到其他格式。',
            status: 'adopted'
          }
        ]
      }
    ];
    
    // 添加到suggestionRecords
    suggestionRecords.push(...suggestionData);
  }

  // 根据查询条件筛选数据
  let filteredData = [...suggestionRecords];
  
  // 提出人筛选
  if (params.suggester) {
    filteredData = filteredData.filter(item => 
      item.suggester.includes(params.suggester!)
    );
  }
  
  // 状态筛选
  if (params.status) {
    filteredData = filteredData.filter(item => 
      item.status === params.status
    );
  }
  
  // 时间范围筛选
  if (params.timeRange && params.timeRange.length === 2) {
    const startDate = new Date(params.timeRange[0]).getTime();
    const endDate = new Date(params.timeRange[1] + ' 23:59:59').getTime();
    
    filteredData = filteredData.filter(item => {
      const itemDate = new Date(item.createTime).getTime();
      return itemDate >= startDate && itemDate <= endDate;
    });
  }
  
  // 计算分页
  const total = filteredData.length;
  const start = (params.pageNum - 1) * params.pageSize;
  const end = start + params.pageSize;
  const pageData = filteredData.slice(start, end);
  
  return {
    code: 200,
    message: 'success',
    data: {
      list: pageData,
      total
    }
  };
}

/**
 * 获取建议详情
 * @param id 建议ID
 * @returns 建议详情
 */
export function getSuggestionDetailData(id: string) {
  // 确保数据已初始化
  if (suggestionRecords.length === 0) {
    generateSuggestionData({
      pageNum: 1,
      pageSize: 10
    });
  }
  
  // 查找建议记录
  const suggestion = suggestionRecords.find(item => item.id === id);
  
  if (suggestion) {
    return {
      code: 200,
      message: 'success',
      data: suggestion
    };
  } else {
    return {
      code: 404,
      message: '未找到建议记录',
      data: null
    };
  }
}

/**
 * 处理建议
 * @param id 建议ID
 * @param data 处理数据
 * @returns 处理结果
 */
export function processSuggestionData(id: string, data: {
  status: string;
  feedback: string;
}) {
  // 确保数据已初始化
  if (suggestionRecords.length === 0) {
    generateSuggestionData({
      pageNum: 1,
      pageSize: 10
    });
  }
  
  // 查找并更新模拟数据中的记录
  const suggestionIndex = suggestionRecords.findIndex(item => item.id === id);
  
  if (suggestionIndex !== -1) {
    // 更新状态
    suggestionRecords[suggestionIndex].status = data.status;
    
    // 当前时间
    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
    
    // 添加处理记录
    const processInfo = suggestionRecords[suggestionIndex].processInfo || [];
    processInfo.push({
      time: now,
      operator: '管理员',
      content: data.feedback,
      status: data.status
    });
    
    suggestionRecords[suggestionIndex].processInfo = processInfo;
  }
  
  return {
    code: 200,
    message: '处理成功',
    data: {
      id,
      ...data,
      processTime: new Date().toISOString().replace('T', ' ').substring(0, 19)
    }
  };
} 