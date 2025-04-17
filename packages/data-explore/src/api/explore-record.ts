import request from '@/utils/request'

// 定义探查记录参数类型
export interface RecordPageParams {
  pageNum: number
  pageSize: number
  resourceName?: string  // 数据资源名称
  myResourceName?: string // 本方数据资源名称
  status?: string  // 状态
}

// 定义API响应类型
export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

// 列表响应类型
export interface ListResponse<T> {
  list: T[];
  total: number;
}

// 定义探查记录项类型
export interface RecordItem {
  id: number
  resourceName: string  // 数据资源名称（被探查的）
  myResourceName?: string  // 本方数据资源名称（发起探查的）
  status: string  // 状态：已完成、进行中、失败
  createTime: string
  sampleCount?: number  // 样本数量
  matchCount?: number  // 匹配数量
  matchRate?: number  // 匹配率
  features?: Feature[]  // 特征列表
  charts?: any[]  // 图表数据
}

// 定义特征项类型
export interface Feature {
  name: string
  type: string
  statistics: string
  maxValue?: number
  minValue?: number
  medianValue?: number
  distribution?: any[]  // 分布数据
}

// 生成随机特征数据
const generateFeatures = (count: number): Feature[] => {
  const features: Feature[] = []
  const types = ['数值型', '文本型', '日期型', '布尔型']
  const textTypes = ['姓名', '地址', '城市', '国家', '描述', '备注']
  const numericTypes = ['年龄', '金额', '数量', '评分', '温度', '距离']
  const dateTypes = ['创建时间', '更新时间', '出生日期', '注册日期']
  const booleanTypes = ['是否有效', '是否启用', '是否删除', '是否完成']

  for (let i = 0; i < count; i++) {
    const type = types[Math.floor(Math.random() * types.length)]
    let name = ''
    let statistics = ''
    let maxValue, minValue, medianValue

    switch (type) {
      case '数值型':
        name = numericTypes[Math.floor(Math.random() * numericTypes.length)]
        maxValue = Math.floor(Math.random() * 1000)
        minValue = Math.floor(maxValue * 0.1)
        medianValue = Math.floor((maxValue + minValue) / 2)
        statistics = `范围: ${minValue}-${maxValue}, 中位数: ${medianValue}`
        break
      case '文本型':
        name = textTypes[Math.floor(Math.random() * textTypes.length)]
        statistics = '文本长度: 5-50字符'
        break
      case '日期型':
        name = dateTypes[Math.floor(Math.random() * dateTypes.length)]
        statistics = '日期范围: 2020-01-01 至 2023-12-31'
        break
      case '布尔型':
        name = booleanTypes[Math.floor(Math.random() * booleanTypes.length)]
        statistics = '真值比例: 60%'
        break
    }

    features.push({
      name,
      type,
      statistics,
      maxValue,
      minValue,
      medianValue,
      distribution: type === '数值型' ? generateNumericDistribution() : 
                   type === '文本型' ? generateTextDistribution() : []
    })
  }
  return features
}

// 生成数值型分布数据
const generateNumericDistribution = () => {
  const distribution = []
  const count = 10
  for (let i = 0; i < count; i++) {
    distribution.push({
      range: `${i * 100}-${(i + 1) * 100}`,
      count: Math.floor(Math.random() * 1000)
    })
  }
  return distribution
}

// 生成文本型分布数据
const generateTextDistribution = () => {
  const words = ['北京', '上海', '广州', '深圳', '杭州', '成都', '武汉', '南京', '西安', '重庆']
  return words.map(word => ({
    word,
    count: Math.floor(Math.random() * 1000)
  }))
}

// 生成探查记录列表
const generateRecordList = (): RecordItem[] => {
  const records: RecordItem[] = []
  const statuses = ['已完成', '进行中', '失败']
  const resourceNames = [
    '用户行为数据',
    '交易记录数据',
    '商品信息数据',
    '订单数据',
    '物流信息数据',
    '客户信息数据',
    '产品评价数据',
    '市场调研数据',
    '销售数据',
    '库存数据'
  ]
  const myResourceNames = [
    '用户画像数据',
    '交易分析数据',
    '商品分类数据',
    '订单分析数据',
    '物流分析数据',
    '客户分析数据',
    '产品分析数据',
    '市场分析数据',
    '销售分析数据',
    '库存分析数据'
  ]

  for (let i = 0; i < 50; i++) {
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    const resourceName = resourceNames[Math.floor(Math.random() * resourceNames.length)]
    const myResourceName = myResourceNames[Math.floor(Math.random() * myResourceNames.length)]
    const createTime = new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000)
      .toISOString()
      .replace('T', ' ')
      .substring(0, 19)

    records.push({
      id: i + 1,
      resourceName,
      myResourceName,
      status,
      createTime,
      sampleCount: Math.floor(Math.random() * 1000000),
      matchCount: Math.floor(Math.random() * 800000),
      matchRate: Math.random() * 0.8 + 0.1, // 10% - 90% 的匹配率
      features: generateFeatures(Math.floor(Math.random() * 10) + 5) // 5-15个特征
    })
  }
  return records
}

// 模拟数据
const mockRecords = generateRecordList()

// 获取探查记录列表
export const getRecordList = (params: RecordPageParams) => {
  // 转换参数名称以匹配后端接口
  const apiParams = {
    currentPage: params.pageNum,
    pageSize: params.pageSize,
    resourceName: params.resourceName,
    myResourceName: params.myResourceName,
    status: params.status
  }
  
  return new Promise((resolve) => {
    setTimeout(() => {
      // 模拟分页和过滤
      let filteredRecords = [...mockRecords]
      
      if (apiParams.resourceName) {
        filteredRecords = filteredRecords.filter(record => 
          record.resourceName.includes(apiParams.resourceName)
        )
      }
      
      if (apiParams.myResourceName) {
        filteredRecords = filteredRecords.filter(record => 
          record.myResourceName.includes(apiParams.myResourceName)
        )
      }
      
      if (apiParams.status) {
        filteredRecords = filteredRecords.filter(record => 
          record.status === apiParams.status
        )
      }
      
      const start = (apiParams.currentPage - 1) * apiParams.pageSize
      const end = start + apiParams.pageSize
      const paginatedRecords = filteredRecords.slice(start, end)
      
      resolve({
        data: {
          code: 200,
          message: 'success',
          data: {
            list: paginatedRecords,
            total: filteredRecords.length
          }
        }
      })
    }, 500)
  })
}

// 获取探查记录详情
export const getRecordDetail = (id: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const record = mockRecords.find(item => item.id === id)
      resolve({
        data: {
          code: 200,
          message: 'success',
          data: record
        }
      })
    }, 500)
  })
}

// 删除探查记录
export const deleteRecord = (id: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = mockRecords.findIndex(item => item.id === id)
      if (index !== -1) {
        mockRecords.splice(index, 1)
      }
      resolve({
        data: {
          code: 200,
          message: 'success',
          data: null
        }
      })
    }, 500)
  })
}

// 获取状态选项
export function getStatusOptions() {
  return request({
    url: '/api/common/status-options',
    method: 'get'
  })
} 