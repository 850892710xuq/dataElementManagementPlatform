import { MockMethod } from 'vite-plugin-mock'

// 定义请求参数接口
interface QueryParams {
  pageNum?: number
  pageSize?: number
  name?: string
  industry?: string
}

interface RouteParams {
  id: string
}

interface RequestBody {
  [key: string]: any
}

// 定义数据项接口
interface ExploreDataItem {
  id: number
  name: string
  type: string
  industry: string
  description: string
  createTime: string
  dbType?: string
  host?: string
  port?: number
  dbName?: string
  username?: string
  filePath?: string
  s3Type?: string
  endpoint?: string
  region?: string
  bucket?: string
  path?: string
  sampleData: any[]
  columns: string[]
}

// 模拟数据列表
const dataList = [
  {
    id: 1,
    name: '生产数据仓库',
    type: '数据库',
    industry: '制造业',
    description: '存储生产线的实时数据，包括设备状态、产量、质量等指标',
    createTime: '2024-01-15 10:30:00',
    dbType: 'MySQL',
    host: '192.168.1.100',
    port: 3306,
    dbName: 'production_db',
    username: 'prod_admin',
    sampleData: [
      { id: 1, device_id: 'DEV001', status: '运行中', output: 1200, quality: '合格', timestamp: '2024-01-15 10:00:00' },
      { id: 2, device_id: 'DEV002', status: '待机', output: 0, quality: '-', timestamp: '2024-01-15 10:00:00' },
      { id: 3, device_id: 'DEV003', status: '维护中', output: 0, quality: '-', timestamp: '2024-01-15 10:00:00' }
    ],
    columns: ['id', 'device_id', 'status', 'output', 'quality', 'timestamp']
  },
  {
    id: 2,
    name: '客户行为分析数据',
    type: 'CSV',
    industry: '金融业',
    description: '记录客户在APP上的行为数据，用于分析用户习惯和偏好',
    createTime: '2024-01-16 14:20:00',
    filePath: '/data/customer_behavior_202401.csv',
    sampleData: [
      { user_id: 'U1001', page: '首页', duration: 120, action: '点击', timestamp: '2024-01-16 10:00:00' },
      { user_id: 'U1002', page: '产品详情', duration: 45, action: '浏览', timestamp: '2024-01-16 10:05:00' },
      { user_id: 'U1003', page: '购物车', duration: 30, action: '添加', timestamp: '2024-01-16 10:10:00' }
    ],
    columns: ['user_id', 'page', 'duration', 'action', 'timestamp']
  },
  {
    id: 3,
    name: '物联网设备数据',
    type: 'S3对象存储',
    industry: '农业',
    description: '农业物联网设备采集的环境数据，包括温度、湿度、光照等',
    createTime: '2024-01-17 09:15:00',
    s3Type: 'MinIO',
    endpoint: 'http://minio.example.com',
    region: 'cn-east-1',
    bucket: 'iot-data',
    path: 'agriculture/2024/01/',
    sampleData: [
      { device_id: 'IOT001', temperature: 25.6, humidity: 65, light: 1200, timestamp: '2024-01-17 09:00:00' },
      { device_id: 'IOT002', temperature: 26.2, humidity: 63, light: 1150, timestamp: '2024-01-17 09:00:00' },
      { device_id: 'IOT003', temperature: 24.8, humidity: 68, light: 1250, timestamp: '2024-01-17 09:00:00' }
    ],
    columns: ['device_id', 'temperature', 'humidity', 'light', 'timestamp']
  },
  {
    id: 4,
    name: '医疗影像数据',
    type: 'S3对象存储',
    industry: '卫生和社会工作',
    description: '医院影像科存储的CT、MRI等医疗影像数据',
    createTime: '2024-01-18 11:30:00',
    s3Type: '阿里云OSS',
    endpoint: 'oss-cn-hangzhou.aliyuncs.com',
    region: 'cn-hangzhou',
    bucket: 'medical-images',
    path: 'radiology/2024/01/',
    sampleData: [
      { patient_id: 'P1001', type: 'CT', date: '2024-01-18', doctor: '张医生', status: '已诊断' },
      { patient_id: 'P1002', type: 'MRI', date: '2024-01-18', doctor: '李医生', status: '待诊断' },
      { patient_id: 'P1003', type: 'X光', date: '2024-01-18', doctor: '王医生', status: '已诊断' }
    ],
    columns: ['patient_id', 'type', 'date', 'doctor', 'status']
  },
  {
    id: 5,
    name: '学生成绩数据库',
    type: '数据库',
    industry: '教育',
    description: '存储学生各科目成绩和评价数据',
    createTime: '2024-01-19 08:45:00',
    dbType: 'PostgreSQL',
    host: '192.168.2.100',
    port: 5432,
    dbName: 'education_db',
    username: 'edu_admin',
    sampleData: [
      { student_id: 'S1001', name: '张三', math: 95, english: 88, physics: 92, total: 275 },
      { student_id: 'S1002', name: '李四', math: 88, english: 92, physics: 85, total: 265 },
      { student_id: 'S1003', name: '王五', math: 90, english: 85, physics: 88, total: 263 }
    ],
    columns: ['student_id', 'name', 'math', 'english', 'physics', 'total']
  },
  {
    id: 6,
    name: '建筑项目进度数据',
    type: 'CSV',
    industry: '建筑业',
    description: '记录建筑项目的进度、质量和安全数据',
    createTime: '2024-01-20 13:20:00',
    filePath: '/data/project_progress_202401.csv',
    sampleData: [
      { project_id: 'PJ001', phase: '地基工程', progress: 85, quality: '良好', safety: '正常', date: '2024-01-20' },
      { project_id: 'PJ002', phase: '主体结构', progress: 60, quality: '良好', safety: '正常', date: '2024-01-20' },
      { project_id: 'PJ003', phase: '装修工程', progress: 30, quality: '良好', safety: '正常', date: '2024-01-20' }
    ],
    columns: ['project_id', 'phase', 'progress', 'quality', 'safety', 'date']
  }
]

const mockData: MockMethod[] = [
  // 获取数据列表
  {
    url: '/api/explore-data/list',
    method: 'get',
    response: ({ query }) => {
      const { name, industry, currentPage, pageSize } = query
      let filteredList = [...dataList]

      // 根据查询条件过滤
      if (name) {
        filteredList = filteredList.filter(item => item.name.includes(name))
      }
      if (industry) {
        filteredList = filteredList.filter(item => item.industry === industry)
      }

      // 分页处理
      const total = filteredList.length
      const start = (Number(currentPage) - 1) * Number(pageSize)
      const end = start + Number(pageSize)
      const list = filteredList.slice(start, end)

      return {
        code: 200,
        data: {
          list,
          total,
          currentPage: Number(currentPage),
          pageSize: Number(pageSize)
        }
      }
    }
  },

  // 获取数据详情
  {
    url: '/api/explore-data/:id',
    method: 'get',
    response: ({ query }) => {
      const { id } = query
      const detail = dataList.find(item => item.id === Number(id))
      return {
        code: 200,
        data: detail
      }
    }
  },

  // 新增数据
  {
    url: '/api/explore-data',
    method: 'post',
    response: ({ body }) => {
      const newData = {
        id: dataList.length + 1,
        createTime: new Date().toLocaleString(),
        ...body
      }
      dataList.push(newData)
      return {
        code: 200,
        data: newData
      }
    }
  },

  // 编辑数据
  {
    url: '/api/explore-data/:id',
    method: 'put',
    response: ({ body }) => {
      const index = dataList.findIndex(item => item.id === body.id)
      if (index !== -1) {
        dataList[index] = { ...dataList[index], ...body }
      }
      return {
        code: 200,
        data: dataList[index]
      }
    }
  },

  // 删除数据
  {
    url: '/api/explore-data/:id',
    method: 'delete',
    response: ({ query }) => {
      const { id } = query
      const index = dataList.findIndex(item => item.id === Number(id))
      if (index !== -1) {
        dataList.splice(index, 1)
      }
      return {
        code: 200,
        data: null
      }
    }
  },
  
  // 获取行业选项
  {
    url: '/api/common/industry-options',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: [
          { label: '制造业', value: '制造业' },
          { label: '农业', value: '农业' },
          { label: '建筑业', value: '建筑业' },
          { label: '金融业', value: '金融业' },
          { label: '教育', value: '教育' },
          { label: '卫生和社会工作', value: '卫生和社会工作' }
        ]
      }
    }
  }
]

export default mockData 