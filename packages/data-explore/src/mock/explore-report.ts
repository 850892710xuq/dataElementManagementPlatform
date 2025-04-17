import { MockMethod } from 'vite-plugin-mock'

// 生成固定的随机数值（基于种子）
const generateFixedNumber = (seed: number, min: number, max: number, decimal = 2) => {
  const value = min + ((seed * 9301 + 49297) % 233280) / 233280 * (max - min)
  return parseFloat(value.toFixed(decimal))
}

// 生成固定的随机日期（基于种子）
const generateFixedDate = (seed: number) => {
  const start = new Date(2023, 0, 1).getTime()
  const end = new Date().getTime()
  const randomTime = start + ((seed * 9301 + 49297) % 233280) / 233280 * (end - start)
  const date = new Date(randomTime)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

// 数据产品名称列表 - 更贴合实际业务
const dataProductNames = [
  '企业信用评分数据',
  '个人消费行为画像',
  '城市交通流量统计',
  '医疗健康指标分析',
  '教育资源分布数据',
  '房地产市场趋势',
  '农产品产量预测',
  '旅游景区客流量',
  '电商平台用户行为',
  '金融市场风险评估',
  '环境污染监测数据',
  '社交网络关系图谱',
  '智慧城市基础设施',
  '制造业供应链分析',
  '人口统计学特征',
  '能源消耗与分布',
  '政务服务满意度',
  '公共安全事件分析',
  '文化娱乐消费数据',
  '物流配送效率分析'
]

// 特征名称和类型映射
const featureConfigs = {
  // 企业类
  '企业信用评分数据': {
    features: [
      { name: '注册资本', type: '数值型' },
      { name: '成立年限', type: '数值型' },
      { name: '员工规模', type: '数值型' },
      { name: '所属行业', type: '文本型' },
      { name: '企业类型', type: '文本型' },
      { name: '纳税等级', type: '文本型' }
    ]
  },
  // 消费类
  '个人消费行为画像': {
    features: [
      { name: '月均消费', type: '数值型' },
      { name: '消费频次', type: '数值型' },
      { name: '客单价', type: '数值型' },
      { name: '偏好品类', type: '文本型' },
      { name: '消费场景', type: '文本型' },
      { name: '支付方式', type: '文本型' }
    ]
  },
  // 交通类
  '城市交通流量统计': {
    features: [
      { name: '日均车流量', type: '数值型' },
      { name: '高峰时段', type: '文本型' },
      { name: '拥堵指数', type: '数值型' },
      { name: '公交覆盖率', type: '数值型' },
      { name: '交通事故率', type: '数值型' },
      { name: '路网密度', type: '数值型' }
    ]
  },
  // 医疗类
  '医疗健康指标分析': {
    features: [
      { name: '就诊频率', type: '数值型' },
      { name: '医疗费用', type: '数值型' },
      { name: '疾病类型', type: '文本型' },
      { name: '医保覆盖率', type: '数值型' },
      { name: '医院等级', type: '文本型' },
      { name: '患者年龄', type: '数值型' }
    ]
  }
}

// 默认特征配置
const defaultFeatures = [
  { name: '数值特征1', type: '数值型' },
  { name: '数值特征2', type: '数值型' },
  { name: '类别特征1', type: '文本型' },
  { name: '类别特征2', type: '文本型' }
]

// 生成词频统计
const generateWordFrequency = (id: number, featureName: string) => {
  // 根据特征名称选择合适的类别值
  let words: string[] = []
  
  if (featureName.includes('行业')) {
    words = ['制造业', '信息技术', '金融业', '零售业', '物流运输', '教育', '医疗健康', '建筑业', '餐饮服务', '文化传媒']
  } else if (featureName.includes('类型')) {
    words = ['有限责任', '股份有限', '个体工商户', '合伙企业', '外商投资', '国有企业', '集体所有制', '民营企业']
  } else if (featureName.includes('等级')) {
    words = ['A级', 'B级', 'C级', 'D级', '特级', '优良', '一般', '较差']
  } else if (featureName.includes('品类') || featureName.includes('偏好')) {
    words = ['电子产品', '服装鞋帽', '食品饮料', '家居用品', '美妆个护', '母婴产品', '运动户外', '图书音像', '珠宝配饰']
  } else if (featureName.includes('场景')) {
    words = ['线上电商', '实体门店', '餐饮外卖', '休闲娱乐', '交通出行', '教育培训', '医疗服务', '金融理财']
  } else if (featureName.includes('方式')) {
    words = ['支付宝', '微信支付', '银行卡', '信用卡', '现金', '分期付款', '企业支付']
  } else if (featureName.includes('时段')) {
    words = ['早高峰', '午高峰', '晚高峰', '工作日', '周末', '节假日', '全天']
  } else if (featureName.includes('疾病')) {
    words = ['心血管疾病', '呼吸系统疾病', '消化系统疾病', '内分泌疾病', '骨科疾病', '神经系统疾病', '皮肤疾病']
  } else if (featureName.includes('医院') || featureName.includes('等级')) {
    words = ['三甲医院', '三乙医院', '二甲医院', '二乙医院', '一级医院', '专科医院', '社区医院']
  } else {
    // 默认类别
    words = ['类别A', '类别B', '类别C', '类别D', '类别E', '类别F', '类别G', '类别H', '类别I', '类别J']
  }
  
  const frequency: Record<string, number> = {}
  
  // 使用id作为种子，确保每次生成相同id的词频结果一致
  const seed = id * 1000
  // 限制词频生成数量，避免生成过大的数据
  const wordCount = Math.min(5, words.length)
  
  let total = 0
  for (let i = 0; i < wordCount; i++) {
    const index = (seed + i * 11) % words.length
    const count = 10 + ((seed + i * 17) % 91) // 10-100之间的值
    frequency[words[index]] = count
    total += count
  }
  
  // 计算百分比
  for (const word in frequency) {
    frequency[word] = parseFloat((frequency[word] / total * 100).toFixed(2))
  }
  
  return frequency
}

// 生成特征数据
const generateFeatures = (id: number, productName: string) => {
  try {
    // 获取产品对应的特征配置
    let featureConfig = featureConfigs[productName as keyof typeof featureConfigs]
    
    // 如果没有找到特定配置，使用默认配置
    const features = featureConfig ? [...featureConfig.features] : [...defaultFeatures]
    
    // 使用固定的随机种子（基于id），确保每次生成相同id的特征数据结果一致
    const seed = id * 100
    
    // 处理每个特征的统计值
    return features.map((feature, index) => {
      const featureSeed = seed + index * 10
      
      if (feature.type === '数值型') {
        // 根据特征名称生成合适范围的数值
        let min = 0, max = 100, mean = 50, std = 15
        
        if (feature.name.includes('资本') || feature.name.includes('费用')) {
          min = 10000
          max = 10000000
          mean = 1000000
          std = 500000
        } else if (feature.name.includes('年限')) {
          min = 1
          max = 30
          mean = 10
          std = 5
        } else if (feature.name.includes('规模') || feature.name.includes('人数')) {
          min = 5
          max = 5000
          mean = 300
          std = 200
        } else if (feature.name.includes('比例') || feature.name.includes('率')) {
          min = 0
          max = 100
          mean = 60
          std = 20
        } else if (feature.name.includes('频率') || feature.name.includes('次数')) {
          min = 1
          max = 50
          mean = 12
          std = 8
        } else if (feature.name.includes('指数')) {
          min = 0
          max = 10
          mean = 5
          std = 2
        } else if (feature.name.includes('密度')) {
          min = 0.1
          max = 5
          mean = 1.5
          std = 0.8
        }
        
        // 生成固定的统计值
        const maxValue = generateFixedNumber(featureSeed, min, max).toFixed(2)
        const minValue = generateFixedNumber(featureSeed + 1, min, min + (max - min) * 0.3).toFixed(2)
        const medianValue = generateFixedNumber(featureSeed + 2, parseFloat(minValue), parseFloat(maxValue)).toFixed(2)
        const actualMean = generateFixedNumber(featureSeed + 3, parseFloat(minValue), parseFloat(maxValue)).toFixed(2)
        const actualStd = generateFixedNumber(featureSeed + 4, 1, parseFloat(maxValue) * 0.2).toFixed(2)
        const variance = (parseFloat(actualStd) * parseFloat(actualStd)).toFixed(2)
        
        return {
          name: feature.name,
          type: feature.type,
          stats: {
            mean: actualMean,
            std: actualStd,
            variance
          },
          maxValue,
          minValue,
          medianValue
        }
      } else {
        // 文本型特征
        return {
          name: feature.name,
          type: feature.type,
          stats: {
            wordFrequency: generateWordFrequency(featureSeed, feature.name)
          },
          maxValue: '类别数据',
          minValue: '类别数据',
          medianValue: '类别数据'
        }
      }
    })
  } catch (error) {
    console.error('生成特征数据出错:', error)
    // 出错时返回一个简单的特征数据
    return [
      {
        name: '备用特征',
        type: '数值型',
        stats: {
          mean: '50.00',
          std: '15.00',
          variance: '225.00'
        },
        maxValue: '100.00',
        minValue: '10.00',
        medianValue: '55.00'
      }
    ]
  }
}

// 缓存数据，确保列表和详情API返回一致的数据
const dataCache: Record<number, any> = {}

// 从缓存中获取数据，如果没有则生成一条新的
const getDataById = (id: number) => {
  if (dataCache[id]) {
    return dataCache[id]
  }
  
  // 使用id作为种子生成一致的数据
  const seed = id * 10
  
  // 选择产品名称 - 确保不重复
  // 之前的实现可能导致重复的名称
  // const nameIndex = seed % dataProductNames.length
  // const name = dataProductNames[nameIndex]
  
  // 新的实现：直接使用id作为索引，确保每个id对应唯一的产品名称
  const nameIndex = (id - 1) % dataProductNames.length
  const name = dataProductNames[nameIndex]
  
  // 生成样本和匹配数据
  const sampleCount = 1000 + (seed % 9000) // 1000-10000
  const matchRate = 0.7 + (seed % 30) / 100 // 70%-100%
  const matchCount = Math.floor(sampleCount * matchRate)
  
  // 生成固定的最大值、最小值和中位数
  const maxValue = (100 + (seed % 900)).toString() // 100-999
  const minValue = (seed % 50).toString() // 0-49
  const medianValue = Math.floor((parseInt(maxValue) + parseInt(minValue)) / 2).toString()
  
  const data = {
    id,
    name,
    sampleCount,
    matchCount,
    matchRate,
    maxValue,
    minValue,
    medianValue,
    features: generateFeatures(id, name),
    createTime: generateFixedDate(seed) // 生成固定的创建时间
  }
  
  // 缓存数据
  dataCache[id] = data
  
  return data
}

// 生成模拟列表数据 - 修改为保证产品名称不重复
const generateMockData = (count: number) => {
  const data = []
  
  // 确保不超过可用的产品名称数量
  const actualCount = Math.min(count, dataProductNames.length)
  
  for (let i = 1; i <= actualCount; i++) {
    // 获取或生成对应id的数据
    const reportData = getDataById(i)
    data.push(reportData)
  }
  
  return data
}

export default [
  // 列表数据接口
  {
    url: '/api/explore-report/list',
    method: 'get',
    response: ({ query }: any) => {
      try {
        const { name, currentPage = 1, pageSize = 10 } = query
        
        // 生成数据，不超过产品名称列表的长度
        const allData = generateMockData(dataProductNames.length)
        
        // 根据名称筛选
        let filteredData = allData
        if (name) {
          filteredData = allData.filter(item => item.name.includes(name))
        }
        
        // 分页
        const start = (currentPage - 1) * pageSize
        const end = start + pageSize
        const pageData = filteredData.slice(start, end)
        
        return {
          code: 200,
          data: {
            list: pageData,
            total: filteredData.length
          },
          message: 'success'
        }
      } catch (error) {
        console.error('生成列表数据出错:', error)
        return {
          code: 200,
          data: {
            list: [],
            total: 0
          },
          message: 'success'
        }
      }
    }
  },
  
  // 详情数据接口
  {
    url: '/api/explore-report/detail/:id',
    method: 'get',
    response: ({ params }: any) => {
      try {
        const id = parseInt(params.id) || 1 // 确保id总是有效的数字
        
        // 获取与列表一致的数据
        const data = getDataById(id)
        
        return {
          code: 200,
          data,
          message: 'success'
        }
      } catch (error) {
        console.error('生成详情数据出错:', error)
        // 返回一个简单的固定数据，确保接口不会崩溃
        return {
          code: 200,
          data: {
            id: 1,
            name: '测试数据产品',
            sampleCount: 100,
            matchCount: 80,
            matchRate: 0.8,
            features: []
          },
          message: 'success'
        }
      }
    }
  },
  
  // 下载报告接口
  {
    url: '/api/explore-report/download/:id',
    method: 'get',
    response: ({ params, query }: any) => {
      try {
        const id = parseInt(params.id) || 1
        const format = query.format || 'pdf'
        
        // 获取对应ID的数据名称
        const data = getDataById(id)
        const productName = data.name || `数据产品${id}`
        
        // 返回一个模拟的成功响应
        return {
          code: 200,
          message: 'success',
          data: {
            fileName: `${productName}探查报告.${format}`,
            fileUrl: `https://example.com/reports/${id}.${format}`
          }
        }
      } catch (error) {
        console.error('下载报告出错:', error)
        return {
          code: 500,
          message: '下载失败',
          data: null
        }
      }
    }
  }
] as MockMethod[] 