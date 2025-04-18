// 登记审核列表数据
export const registryAuditList = [
  {
    id: 1001,
    name: '城市公交实时位置及客流数据',
    provider: '市公共交通集团有限公司',
    industry: '交通运输',
    dataType: '流式数据',
    submitTime: '2023-07-15 09:35:42',
    status: 1, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '张志明',
    updateTime: null
  },
  {
    id: 1002,
    name: '市区道路交通流量监测数据',
    provider: '市交通管理局',
    industry: '交通运输',
    dataType: '结构化数据',
    submitTime: '2023-07-18 14:22:10',
    status: 1,
    submitUser: '李文杰',
    updateTime: null
  },
  {
    id: 1003,
    name: '重点区域空气质量检测数据',
    provider: '市环境监测中心',
    industry: '环保',
    dataType: '时序数据',
    submitTime: '2023-07-12 11:45:36',
    status: 2,
    submitUser: '王红梅',
    updateTime: '2023-07-14 16:23:19'
  },
  {
    id: 1004,
    name: '城市供水水质监测数据',
    provider: '市自来水公司',
    industry: '公共事业',
    dataType: '结构化数据',
    submitTime: '2023-07-10 16:48:22',
    status: 3,
    submitUser: '赵明辉',
    updateTime: '2023-07-13 10:17:32'
  },
  {
    id: 1005,
    name: '公共场所WiFi使用情况数据',
    provider: '市数据管理中心',
    industry: '信息技术',
    dataType: '流式数据',
    submitTime: '2023-07-14 09:12:05',
    status: 2,
    submitUser: '刘敏',
    updateTime: '2023-07-16 15:43:28'
  },
  {
    id: 1006,
    name: '医疗资源分布及使用情况数据',
    provider: '市卫健委',
    industry: '医疗健康',
    dataType: '结构化数据',
    submitTime: '2023-07-06 10:23:45',
    status: 2,
    submitUser: '陈建国',
    updateTime: '2023-07-08 14:37:12'
  },
  {
    id: 1007,
    name: '城市地下管网分布数据',
    provider: '市住建局',
    industry: '市政工程',
    dataType: '空间数据',
    submitTime: '2023-07-17 08:55:37',
    status: 1,
    submitUser: '郑华',
    updateTime: null
  },
  {
    id: 1008,
    name: '企业工商注册信息数据',
    provider: '市市场监督管理局',
    industry: '政务',
    dataType: '结构化数据',
    submitTime: '2023-07-07 13:42:19',
    status: 2,
    submitUser: '吴丽娟',
    updateTime: '2023-07-09 11:28:44'
  },
  {
    id: 1009,
    name: '城市电力使用量数据',
    provider: '市电力公司',
    industry: '能源',
    dataType: '时序数据',
    submitTime: '2023-07-16 15:32:27',
    status: 1,
    submitUser: '黄志强',
    updateTime: null
  },
  {
    id: 1010,
    name: '智慧路灯运行状态数据',
    provider: '市城市管理局',
    industry: '市政工程',
    dataType: '物联网数据',
    submitTime: '2023-07-09 09:28:53',
    status: 3,
    submitUser: '孙伟',
    updateTime: '2023-07-11 17:05:23'
  }
]

// 变更登记列表数据
export const changeRegistryList = [
  {
    id: 2001,
    name: '城市公交实时位置及客流数据',
    provider: '市公共交通集团有限公司',
    changeType: '数据结构变更',
    changeReason: '新增乘客流量预测字段，优化数据获取频率',
    submitTime: '2023-07-19 10:25:46',
    status: 1, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '张志明',
    originalId: 1001
  },
  {
    id: 2002,
    name: '重点区域空气质量检测数据',
    provider: '市环境监测中心',
    changeType: '使用范围变更',
    changeReason: '扩大数据授权范围，允许第三方研究机构使用',
    submitTime: '2023-07-17 09:18:35',
    status: 2,
    submitUser: '王红梅',
    originalId: 1003,
    updateTime: '2023-07-18 16:45:21'
  },
  {
    id: 2003,
    name: '城市供水水质监测数据',
    provider: '市自来水公司',
    changeType: '数据提供方信息变更',
    changeReason: '单位联系人和联系方式变更',
    submitTime: '2023-07-18 14:33:27',
    status: 1,
    submitUser: '赵明辉',
    originalId: 1004
  },
  {
    id: 2004,
    name: '医疗资源分布及使用情况数据',
    provider: '市卫健委',
    changeType: '更新频率变更',
    changeReason: '由每周更新改为每天更新',
    submitTime: '2023-07-15 11:22:38',
    status: 2,
    submitUser: '陈建国',
    originalId: 1006,
    updateTime: '2023-07-16 09:57:14'
  }
]

// 注销登记列表数据
export const cancelRegistryList = [
  {
    id: 3001,
    name: '城市电力使用量数据',
    provider: '市电力公司',
    cancelReason: '数据来源系统升级改造，暂停数据服务',
    submitTime: '2023-07-19 14:08:52',
    status: 1, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '黄志强',
    originalId: 1009
  },
  {
    id: 3002,
    name: '智慧路灯运行状态数据',
    provider: '市城市管理局',
    cancelReason: '数据采集项目已结束，不再提供该数据服务',
    submitTime: '2023-07-12 13:47:29',
    status: 2,
    submitUser: '孙伟',
    originalId: 1010,
    updateTime: '2023-07-14 10:22:46'
  }
]

// 登记审核详情数据列表
export const registryAuditDetails = [
  {
    id: 1001,
    name: '城市公交实时位置及客流数据',
    provider: '市公共交通集团有限公司',
    providerContact: '张志明',
    providerPhone: '0731-88889999',
    providerEmail: 'jtjt@public-transit.gov.cn',
    industry: '交通运输',
    dataCategory: '公共交通数据',
    dataType: '流式数据',
    submitTime: '2023-07-15 09:35:42',
    submitter: '张志明',
    status: 1,
    dataDescription: '包含全市公交车辆的实时位置、速度、载客量等信息，以及各站点实时客流量数据。数据更新频率为30秒一次。',
    dataOrigin: '公交车辆GPS定位系统、车载客流统计设备、公交IC卡系统',
    dataFormat: 'JSON格式，包含车辆ID、线路ID、当前位置(经纬度)、当前速度、载客量、下一站点、预计到站时间等字段',
    updateFrequency: '30秒/次',
    dataSize: '约2MB/次',
    usageScope: '交通规划、公交调度、智慧交通应用开发',
    qualityLevel: 'A级',
    securityLevel: '公开数据',
    hasPrivacyData: false,
    sampleData: 'https://data.transport.gov.cn/sample/bus_realtime_sample.json',
    qualificationFiles: [
      {
        name: '数据资源提供单位资质证明.pdf',
        url: 'https://data.transport.gov.cn/files/qualification_1001_1.pdf'
      },
      {
        name: '数据质量检测报告.pdf',
        url: 'https://data.transport.gov.cn/files/qualification_1001_2.pdf'
      },
      {
        name: '数据安全评估报告.pdf',
        url: 'https://data.transport.gov.cn/files/qualification_1001_3.pdf'
      }
    ],
    reviewHistory: [
      {
        reviewer: '系统管理员',
        reviewTime: '2023-07-15 10:05:27',
        action: '提交审核',
        status: '待审核',
        comments: '提交数据登记申请'
      }
    ]
  },
  {
    id: 1002,
    name: '市区道路交通流量监测数据',
    provider: '市交通管理局',
    providerContact: '李文杰',
    providerPhone: '0731-87654321',
    providerEmail: 'traffic-data@transport.gov.cn',
    industry: '交通运输',
    dataCategory: '道路交通数据',
    dataType: '结构化数据',
    submitTime: '2023-07-18 14:22:10',
    submitter: '李文杰',
    status: 1,
    dataDescription: '包含城市主要道路的车流量、平均车速、拥堵指数等信息，覆盖全市重要路段和交通枢纽。',
    dataOrigin: '道路监控摄像头、地面感应线圈、交通信号控制系统',
    dataFormat: 'CSV格式，包含监测点ID、时间戳、车流量、平均车速、车型分布、拥堵级别等字段',
    updateFrequency: '5分钟/次',
    dataSize: '约500KB/次',
    usageScope: '交通规划、拥堵预测、智能交通灯控制',
    qualityLevel: 'A级',
    securityLevel: '公开数据',
    hasPrivacyData: false,
    sampleData: 'https://data.transport.gov.cn/sample/traffic_flow_sample.csv',
    qualificationFiles: [
      {
        name: '数据资源提供单位资质证明.pdf',
        url: 'https://data.transport.gov.cn/files/qualification_1002_1.pdf'
      },
      {
        name: '数据质量检测报告.pdf',
        url: 'https://data.transport.gov.cn/files/qualification_1002_2.pdf'
      }
    ],
    reviewHistory: [
      {
        reviewer: '系统管理员',
        reviewTime: '2023-07-18 14:30:12',
        action: '提交审核',
        status: '待审核',
        comments: '提交数据登记申请'
      }
    ]
  },
  {
    id: 1003,
    name: '重点区域空气质量检测数据',
    provider: '市环境监测中心',
    providerContact: '王红梅',
    providerPhone: '0731-76543210',
    providerEmail: 'airquality@env-monitor.gov.cn',
    industry: '环保',
    dataCategory: '环境监测数据',
    dataType: '时序数据',
    submitTime: '2023-07-12 11:45:36',
    submitter: '王红梅',
    status: 2,
    dataDescription: '包含市区及周边重点区域的空气质量指标，包括PM2.5、PM10、二氧化硫、二氧化氮、一氧化碳、臭氧等数据。',
    dataOrigin: '环境空气质量自动监测站',
    dataFormat: 'JSON格式，包含监测站ID、时间戳、各项污染物指标值、AQI值、空气质量等级等字段',
    updateFrequency: '1小时/次',
    dataSize: '约100KB/次',
    usageScope: '环境质量评估、污染源分析、公众健康研究',
    qualityLevel: 'A级',
    securityLevel: '公开数据',
    hasPrivacyData: false,
    sampleData: 'https://data.env-monitor.gov.cn/sample/air_quality_sample.json',
    qualificationFiles: [
      {
        name: '数据资源提供单位资质证明.pdf',
        url: 'https://data.env-monitor.gov.cn/files/qualification_1003_1.pdf'
      },
      {
        name: '监测设备认证证书.pdf',
        url: 'https://data.env-monitor.gov.cn/files/qualification_1003_2.pdf'
      }
    ],
    reviewHistory: [
      {
        reviewer: '系统管理员',
        reviewTime: '2023-07-12 12:00:45',
        action: '提交审核',
        status: '待审核',
        comments: '提交数据登记申请'
      },
      {
        reviewer: '环保数据审核员',
        reviewTime: '2023-07-14 16:23:19',
        action: '审核通过',
        status: '已通过',
        comments: '数据格式规范，来源可靠，质量高，同意登记'
      }
    ]
  }
]

// 获取登记审核详情
export const registryAuditDetail = {
  id: 1001,
  name: '城市公交实时位置及客流数据',
  provider: '市公共交通集团有限公司',
  providerContact: '张志明',
  providerPhone: '0731-88889999',
  providerEmail: 'jtjt@public-transit.gov.cn',
  industry: '交通运输',
  dataCategory: '公共交通数据',
  dataType: '流式数据',
  submitTime: '2023-07-15 09:35:42',
  submitter: '张志明',
  status: 1,
  dataDescription: '包含全市公交车辆的实时位置、速度、载客量等信息，以及各站点实时客流量数据。数据更新频率为30秒一次。',
  dataOrigin: '公交车辆GPS定位系统、车载客流统计设备、公交IC卡系统',
  dataFormat: 'JSON格式，包含车辆ID、线路ID、当前位置(经纬度)、当前速度、载客量、下一站点、预计到站时间等字段',
  updateFrequency: '30秒/次',
  dataSize: '约2MB/次',
  usageScope: '交通规划、公交调度、智慧交通应用开发',
  qualityLevel: 'A级',
  securityLevel: '公开数据',
  hasPrivacyData: false,
  sampleData: 'https://data.transport.gov.cn/sample/bus_realtime_sample.json',
  qualificationFiles: [
    {
      name: '数据资源提供单位资质证明.pdf',
      url: 'https://data.transport.gov.cn/files/qualification_1001_1.pdf'
    },
    {
      name: '数据质量检测报告.pdf',
      url: 'https://data.transport.gov.cn/files/qualification_1001_2.pdf'
    },
    {
      name: '数据安全评估报告.pdf',
      url: 'https://data.transport.gov.cn/files/qualification_1001_3.pdf'
    }
  ],
  reviewHistory: [
    {
      reviewer: '系统管理员',
      reviewTime: '2023-07-15 10:05:27',
      action: '提交审核',
      status: '待审核',
      comments: '提交数据登记申请'
    }
  ]
}

// 根据ID获取登记审核详情的函数
export function getRegistryAuditDetailById(id: number) {
  return registryAuditDetails.find(item => item.id === id) || null;
} 