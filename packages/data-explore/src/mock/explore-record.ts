import { MockMethod } from 'vite-plugin-mock'

// 探查记录列表数据
const recordList = Array.from({ length: 50 }, (_, index) => {
  // 前10条数据状态设为"已完成"
  const status = index < 10 ? '已完成' : ['已完成', '进行中', '失败'][Math.floor(Math.random() * 3)]
  
  // 生成特征数据
  const features = [
    {
      name: '年龄',
      type: '数值型',
      statistics: '范围: 18-80, 中位数: 35',
      maxValue: 80,
      minValue: 18,
      medianValue: 35,
      distribution: [
        { range: '18-25', count: 1500 },
        { range: '26-35', count: 3000 },
        { range: '36-45', count: 2500 },
        { range: '46-55', count: 2000 },
        { range: '56-65', count: 800 },
        { range: '66-80', count: 200 }
      ]
    },
    {
      name: '性别',
      type: '文本型',
      statistics: '文本长度: 1字符',
      distribution: [
        { word: '男', count: 6000 },
        { word: '女', count: 4000 }
      ]
    },
    {
      name: '城市',
      type: '文本型',
      statistics: '文本长度: 2-4字符',
      distribution: [
        { word: '北京', count: 3000 },
        { word: '上海', count: 2500 },
        { word: '广州', count: 2000 },
        { word: '深圳', count: 1500 },
        { word: '杭州', count: 1000 }
      ]
    },
    {
      name: '消费金额',
      type: '数值型',
      statistics: '范围: 0-10000, 中位数: 2500',
      maxValue: 10000,
      minValue: 0,
      medianValue: 2500,
      distribution: [
        { range: '0-1000', count: 2000 },
        { range: '1001-2000', count: 3000 },
        { range: '2001-3000', count: 2500 },
        { range: '3001-5000', count: 1500 },
        { range: '5001-10000', count: 1000 }
      ]
    }
  ]

  return {
    id: index + 1,
    resourceName: ['用户行为数据', '交易记录数据', '商品信息数据', '订单数据', '物流信息数据'][Math.floor(Math.random() * 5)],
    myResourceName: ['用户画像数据', '交易分析数据', '商品分类数据', '订单分析数据', '物流分析数据'][Math.floor(Math.random() * 5)],
    status,
    createTime: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000)
      .toISOString()
      .replace('T', ' ')
      .substring(0, 19),
    sampleCount: Math.floor(Math.random() * 1000000),
    matchCount: Math.floor(Math.random() * 800000),
    matchRate: Math.random() * 0.8 + 0.1,
    features
  }
})

// 数据资源列表
const dataResourceList = [
  { id: 1, name: '用户行为数据' },
  { id: 2, name: '用户画像数据' },
  { id: 3, name: '销售数据' },
  { id: 4, name: '客户数据' },
  { id: 5, name: '产品数据' },
  { id: 6, name: '库存数据' }
]

// 本方数据资源列表
const myDataResourceList = [
  { id: 2, name: '用户画像数据' },
  { id: 4, name: '客户数据' },
  { id: 6, name: '库存数据' }
]

export default [
  {
    url: '/api/explore-record/list',
    method: 'get',
    response: ({ query }: { query: any }) => {
      const { resourceName, myResourceName, status, currentPage = 1, pageSize = 10 } = query
      
      // 过滤数据
      let filteredList = [...recordList]
      if (resourceName) {
        filteredList = filteredList.filter(item => item.resourceName.includes(resourceName))
      }
      if (myResourceName) {
        filteredList = filteredList.filter(item => item.myResourceName?.includes(myResourceName))
      }
      if (status) {
        filteredList = filteredList.filter(item => item.status === status)
      }
      
      // 分页
      const start = (currentPage - 1) * pageSize
      const end = start + pageSize
      const pageList = filteredList.slice(start, end)
      
      return {
        code: 200,
        message: 'success',
        data: {
          list: pageList,
          total: filteredList.length
        }
      }
    }
  },
  {
    url: '/api/explore-record/detail/:id',
    method: 'get',
    response: ({ query }: { query: any }) => {
      const { id } = query
      const record = recordList.find(item => item.id === Number(id))
      return {
        code: 200,
        message: 'success',
        data: record
      }
    }
  },
  {
    url: '/api/explore-record/delete/:id',
    method: 'delete',
    response: () => {
      return {
        code: 200,
        message: '删除成功'
      }
    }
  },
  {
    url: '/api/explore/data/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: dataResourceList
      }
    }
  },
  {
    url: '/api/explore/data/my',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: myDataResourceList
      }
    }
  }
] as MockMethod[] 