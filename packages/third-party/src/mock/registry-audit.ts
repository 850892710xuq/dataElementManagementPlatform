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
    id: '2001',
    name: '城市交通实时流量数据',
    provider: '智慧交通管理局',
    industry: '交通',
    changeType: '内容变更',
    changeReason: '数据结构优化，增加车流密度和路况信息字段',
    submitTime: '2023-10-15 09:23:45',
    submitter: '张建国',
    status: 1,
    originalId: '1001'
  },
  {
    id: '2002',
    name: '医疗健康数据共享平台',
    provider: '省卫生健康委员会',
    industry: '医疗',
    changeType: '接口变更',
    changeReason: '升级API接口规范，由REST迁移至GraphQL，提升查询效率',
    submitTime: '2023-10-12 14:35:20',
    submitter: '李卫东',
    status: 2,
    originalId: '1003',
    updateTime: '2023-10-14 10:25:16'
  },
  {
    id: '2003',
    name: '企业信用评估数据',
    provider: '金融监管科技中心',
    industry: '金融',
    changeType: '属性变更',
    changeReason: '根据监管要求调整风险评估指标算法和权重',
    submitTime: '2023-10-10 16:40:30',
    submitter: '王丽华',
    status: 3,
    originalId: '1005',
    updateTime: '2023-10-11 11:18:45'
  },
  {
    id: '2004',
    name: '空气质量监测网格数据',
    provider: '环境监测中心',
    industry: '环保',
    changeType: '数据源变更',
    changeReason: '监测站点布局调整，数据采集设备升级，精度提升',
    submitTime: '2023-10-08 09:32:15',
    submitter: '孙明亮',
    status: 1,
    originalId: '1004'
  },
  {
    id: '2005',
    name: '城市公共设施分布数据',
    provider: '城市规划与建设局',
    industry: '城建',
    changeType: '安全级别变更',
    changeReason: '根据数据安全法要求，提升数据安全保护级别',
    submitTime: '2023-10-05 13:25:40',
    submitter: '赵琳',
    status: 2,
    originalId: '1006',
    updateTime: '2023-10-07 09:12:33'
  },
  {
    id: '2006',
    name: '农产品批发价格指数',
    provider: '农业农村部信息中心',
    industry: '农业',
    changeType: '更新周期变更',
    changeReason: '由每周更新调整为每日实时更新，提高数据时效性',
    submitTime: '2023-10-03 10:15:25',
    submitter: '刘农',
    status: 1,
    originalId: '1008'
  },
  {
    id: '2007',
    name: '电力负荷预测数据服务',
    provider: '省电力公司',
    industry: '能源',
    changeType: '数据模型变更',
    changeReason: '引入新的AI预测模型，提升预测准确率',
    submitTime: '2023-09-28 15:50:12',
    submitter: '钱电',
    status: 3,
    originalId: '1009',
    updateTime: '2023-09-30 16:45:28'
  },
  {
    id: '2008',
    name: '旅游景点客流量分析',
    provider: '文化旅游大数据中心',
    industry: '旅游',
    changeType: '内容变更',
    changeReason: '增加游客画像和消费行为分析维度',
    submitTime: '2023-09-25 11:30:45',
    submitter: '吴旅',
    status: 2,
    originalId: '1012',
    updateTime: '2023-09-26 14:22:51'
  },
  {
    id: '2009',
    name: '城市地下管网数据资源',
    provider: '市政工程管理处',
    industry: '市政',
    changeType: '精度变更',
    changeReason: '完成新一轮管网普查，更新数据精度和完整性',
    submitTime: '2023-09-20 08:45:30',
    submitter: '郑工',
    status: 1,
    originalId: '1007'
  },
  {
    id: '2010',
    name: '气象灾害风险预警数据',
    provider: '气象局',
    industry: '气象',
    changeType: '服务变更',
    changeReason: '新增极端天气事件预警推送服务',
    submitTime: '2023-09-18 16:20:10',
    submitter: '冯天',
    status: 1,
    originalId: '1010'
  },
  {
    id: '2011',
    name: '商业区域人流热力图',
    provider: '城市大数据研究院',
    industry: '商业',
    changeType: '采集方式变更',
    changeReason: '由传统视频分析升级为多源数据融合分析',
    submitTime: '2023-09-15 13:10:25',
    submitter: '陈商',
    status: 2,
    originalId: '1011',
    updateTime: '2023-09-17 10:35:42'
  },
  {
    id: '2012',
    name: '公共安全监控数据',
    provider: '公安局技术处',
    industry: '安防',
    changeType: '脱敏规则变更',
    changeReason: '根据最新隐私保护条例，调整个人信息脱敏规则',
    submitTime: '2023-09-12 10:05:35',
    submitter: '徐安',
    status: 3,
    originalId: '1002',
    updateTime: '2023-09-14 09:48:20'
  }
]

// 注销登记列表数据
export const cancelRegistryList = [
  {
    id: 3001,
    name: '城市电力使用量数据',
    provider: '市电力公司',
    cancelReason: '数据采集设备更新，原有数据结构与新系统不兼容，申请注销后重新提交新版本数据资源',
    submitTime: '2023-09-18 14:08:52',
    status: 1, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '黄志强',
    originalId: 1009,
    certificates: ['CERT-1009-001']
  },
  {
    id: 3002,
    name: '智慧路灯运行状态数据',
    provider: '市城市管理局',
    cancelReason: '数据采集项目已结束，不再提供该数据服务，现申请注销相关证书',
    submitTime: '2023-09-12 13:47:29',
    status: 2,
    submitUser: '孙伟',
    originalId: 1010,
    updateTime: '2023-09-14 10:22:46',
    certificates: ['CERT-1010-001'],
    reviewHistory: [
      {
        reviewer: '孙伟',
        reviewTime: '2023-09-12 13:47:29',
        action: '提交注销申请',
        status: '待审核',
        comments: '项目结束，申请注销数据资源'
      },
      {
        reviewer: '数据管理员',
        reviewTime: '2023-09-14 10:22:46',
        action: '审核通过',
        status: '已通过',
        comments: '经核实项目确已结束，同意注销'
      }
    ]
  },
  {
    id: 3003,
    name: '公共场所WiFi使用情况数据',
    provider: '市数据管理中心',
    cancelReason: '因数据安全合规要求，需对该数据资源进行重新评估，暂时注销现有数据资源',
    submitTime: '2023-09-20 09:32:18',
    status: 1,
    submitUser: '刘敏',
    originalId: 1005,
    certificates: ['CERT-1005-001', 'CERT-1005-002']
  },
  {
    id: 3004,
    name: '医疗资源分布及使用情况数据',
    provider: '市卫健委',
    cancelReason: '根据最新《医疗健康数据安全管理规定》，需对现有数据资源重新分级分类，申请注销后重新登记',
    submitTime: '2023-09-15 11:23:45',
    status: 3,
    submitUser: '陈建国',
    originalId: 1006,
    updateTime: '2023-09-17 15:37:22',
    certificates: ['CERT-1006-001'],
    reviewHistory: [
      {
        reviewer: '陈建国',
        reviewTime: '2023-09-15 11:23:45',
        action: '提交注销申请',
        status: '待审核',
        comments: '根据新规定需重新登记'
      },
      {
        reviewer: '数据管理员',
        reviewTime: '2023-09-17 15:37:22',
        action: '审核拒绝',
        status: '已拒绝',
        comments: '现有数据资源符合新规定要求，无需注销，可通过变更登记调整相关分类'
      }
    ]
  },
  {
    id: 3005,
    name: '企业工商注册信息数据',
    provider: '市市场监督管理局',
    cancelReason: '该数据资源与市大数据中心提供的企业信用信息数据存在重复，为避免数据重复发布，申请注销本数据资源',
    submitTime: '2023-09-25 16:42:19',
    status: 2,
    submitUser: '吴丽娟',
    originalId: 1008,
    updateTime: '2023-09-27 14:28:35',
    certificates: ['CERT-1008-001'],
    reviewHistory: [
      {
        reviewer: '吴丽娟',
        reviewTime: '2023-09-25 16:42:19',
        action: '提交注销申请',
        status: '待审核',
        comments: '与市大数据中心数据重复，申请注销'
      },
      {
        reviewer: '数据管理员',
        reviewTime: '2023-09-27 14:28:35',
        action: '审核通过',
        status: '已通过',
        comments: '经核实确实存在数据重复，同意注销，建议后续考虑联合共建'
      }
    ]
  },
  {
    id: 3006,
    name: '重点区域空气质量检测数据',
    provider: '市环境监测中心',
    cancelReason: '监测站点设备全面升级，数据采集精度和频率发生变化，需重新规范数据标准后再次提交',
    submitTime: '2023-09-28 08:45:36',
    status: 1,
    submitUser: '王红梅',
    originalId: 1003,
    certificates: ['CERT-1003-001', 'CERT-1003-002']
  },
  {
    id: 3007,
    name: '城市地下管网分布数据',
    provider: '市住建局',
    cancelReason: '因城市安全管理需要，该数据资源需调整访问权限和使用范围，申请注销现有数据资源后重新登记',
    submitTime: '2023-09-22 13:55:37',
    status: 2,
    submitUser: '郑华',
    originalId: 1007,
    updateTime: '2023-09-24 10:12:48',
    certificates: ['CERT-1007-001'],
    reviewHistory: [
      {
        reviewer: '郑华',
        reviewTime: '2023-09-22 13:55:37',
        action: '提交注销申请',
        status: '待审核',
        comments: '需调整数据安全级别和访问权限'
      },
      {
        reviewer: '数据管理员',
        reviewTime: '2023-09-24 10:12:48',
        action: '审核通过',
        status: '已通过',
        comments: '同意注销，请尽快重新提交符合安全要求的数据资源登记'
      }
    ]
  },
  {
    id: 3008,
    name: '城市供水水质监测数据',
    provider: '市自来水公司',
    cancelReason: '原数据资源存在数据项缺失和标准不统一问题，需注销后重新规范提交',
    submitTime: '2023-09-23 14:38:22',
    status: 1,
    submitUser: '赵明辉',
    originalId: 1004,
    certificates: ['CERT-1004-001']
  },
  {
    id: 3009,
    name: '市区道路交通流量监测数据',
    provider: '市交通管理局',
    cancelReason: '监测系统迁移至新的平台，数据格式和接口协议发生变更，需注销现有数据资源',
    submitTime: '2023-09-10 09:12:10',
    status: 3,
    submitUser: '李文杰',
    originalId: 1002,
    updateTime: '2023-09-11 16:43:28',
    certificates: ['CERT-1002-001'],
    reviewHistory: [
      {
        reviewer: '李文杰',
        reviewTime: '2023-09-10 09:12:10',
        action: '提交注销申请',
        status: '待审核',
        comments: '系统升级，接口变更，申请注销'
      },
      {
        reviewer: '数据管理员',
        reviewTime: '2023-09-11 16:43:28',
        action: '审核拒绝',
        status: '已拒绝',
        comments: '系统更新不影响数据资源本身，建议通过变更登记流程更新相关接口信息'
      }
    ]
  },
  {
    id: 3010,
    name: '城市公交实时位置及客流数据',
    provider: '市公共交通集团有限公司',
    cancelReason: '由于公交路线优化调整，原有数据结构无法适应新的线路编码体系，申请注销后重新提交',
    submitTime: '2023-09-26 10:35:42',
    status: 1,
    submitUser: '张志明',
    originalId: 1001,
    certificates: ['CERT-1001-001', 'CERT-1001-002']
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

// 变更登记详情数据
export const changeRegistryDetails = [
  {
    id: '2001',
    name: '城市交通实时流量数据',
    provider: '智慧交通管理局',
    providerContact: '张建国',
    providerPhone: '010-88661234',
    providerEmail: 'zhangjg@traffic.gov.cn',
    industry: '交通',
    dataCategory: '城市交通数据',
    changeType: '内容变更',
    changeReason: '数据结构优化，增加车流密度和路况信息字段',
    submitTime: '2023-10-15 09:23:45',
    submitter: '张建国',
    status: 1,
    changeDetails: [
      {
        title: '数据内容',
        before: '包含车辆数量、平均车速、拥堵指数',
        after: '包含车辆数量、平均车速、拥堵指数、车流密度、道路状况评级'
      },
      {
        title: '数据格式',
        before: 'JSON',
        after: 'JSON, CSV'
      },
      {
        title: '更新频率',
        before: '每小时',
        after: '每10分钟'
      }
    ],
    documents: [
      { id: '1', name: '数据变更申请表.pdf', url: '/files/traffic-change-request.pdf' },
      { id: '2', name: '数据结构变更说明.docx', url: '/files/traffic-structure-change.docx' },
      { id: '3', name: '新增字段使用说明.pdf', url: '/files/traffic-new-fields.pdf' }
    ],
    originalId: '1001'
  },
  {
    id: '2002',
    name: '医疗健康数据共享平台',
    provider: '省卫生健康委员会',
    providerContact: '李卫东',
    providerPhone: '010-65432198',
    providerEmail: 'liwd@health.gov.cn',
    industry: '医疗',
    dataCategory: '医疗健康数据',
    changeType: '接口变更',
    changeReason: '升级API接口规范，由REST迁移至GraphQL，提升查询效率',
    submitTime: '2023-10-12 14:35:20',
    submitter: '李卫东',
    status: 2,
    auditTime: '2023-10-14 10:25:16',
    auditor: '王审核',
    auditResult: 'pass',
    auditRemarks: '接口变更方案设计合理，考虑了兼容性和性能问题，同意升级。',
    changeDetails: [
      {
        title: 'API调用方式',
        before: 'REST API',
        after: 'GraphQL API + 兼容层REST API'
      },
      {
        title: '认证方式',
        before: 'API Key',
        after: 'OAuth 2.0 + JWT'
      },
      {
        title: '数据获取效率',
        before: '多次请求获取关联数据',
        after: '单次请求获取所需全部数据'
      }
    ],
    documents: [
      { id: '1', name: 'API接口变更方案.pdf', url: '/files/health-api-change.pdf' },
      { id: '2', name: 'GraphQL架构设计.docx', url: '/files/health-graphql-design.docx' },
      { id: '3', name: '兼容性测试报告.pdf', url: '/files/health-compatibility-test.pdf' }
    ],
    originalId: '1003'
  },
  {
    id: '2003',
    name: '企业信用评估数据',
    provider: '金融监管科技中心',
    providerContact: '王丽华',
    providerPhone: '010-66554433',
    providerEmail: 'wanglh@fintech.gov.cn',
    industry: '金融',
    dataCategory: '企业信用数据',
    changeType: '属性变更',
    changeReason: '根据监管要求调整风险评估指标算法和权重',
    submitTime: '2023-10-10 16:40:30',
    submitter: '王丽华',
    status: 3,
    auditTime: '2023-10-11 11:18:45',
    auditor: '周审核',
    auditResult: 'reject',
    auditRemarks: '指标算法变更缺乏足够的验证数据支持，建议补充验证报告后再次提交。',
    changeDetails: [
      {
        title: '风险评估指标',
        before: '基于历史交易数据的5项核心指标',
        after: '基于历史交易及关联方风险的8项综合指标'
      },
      {
        title: '算法模型',
        before: '线性加权模型',
        after: '机器学习模型(随机森林)'
      },
      {
        title: '安全等级',
        before: '二级',
        after: '三级'
      }
    ],
    documents: [
      { id: '1', name: '指标调整方案.pdf', url: '/files/credit-indicators-adjustment.pdf' },
      { id: '2', name: '算法模型说明.pptx', url: '/files/credit-algorithm-model.pptx' },
      { id: '3', name: '监管合规说明.docx', url: '/files/credit-compliance.docx' }
    ],
    originalId: '1005'
  }
]

// 获取变更登记详情数据
export function getChangeRegistryDetailById(id: string) {
  const detail = changeRegistryDetails.find(item => item.id === id)
  return detail || null
}

// 登记进度查询专用数据
export const registryProgressList = [
  {
    id: 3001,
    name: '智慧城市人流量监测数据',
    provider: '城市数据科技有限公司',
    industry: '智慧城市',
    dataType: '流式数据',
    submitTime: '2023-09-05 10:23:45',
    status: 1, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '王明亮',
    progressStatus: '资料审核中',
    progressPercent: 60,
    submitter: '王明亮',
    providerContact: '王明亮',
    dataSource: '市区监控摄像头',
    updateFrequency: '实时',
    updateTime: null
  },
  {
    id: 3002,
    name: '城市交通拥堵指数数据',
    provider: '交通大数据分析公司',
    industry: '交通运输',
    dataType: '结构化数据',
    submitTime: '2023-09-01 14:35:21',
    status: 2, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '李道明',
    progressStatus: '已完成',
    progressPercent: 100,
    submitter: '李道明',
    providerContact: '李道明',
    dataSource: '交通监控系统',
    updateFrequency: '每5分钟',
    updateTime: '2023-09-03 16:42:30'
  },
  {
    id: 3003,
    name: '区域商业消费行为分析数据',
    provider: '联合支付科技有限公司',
    industry: '金融',
    dataType: '结构化数据',
    submitTime: '2023-08-25 09:12:38',
    status: 2, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '张金融',
    progressStatus: '已完成',
    progressPercent: 100,
    submitter: '张金融',
    providerContact: '刘海涛',
    dataSource: '支付交易系统',
    updateFrequency: '每日',
    updateTime: '2023-08-27 11:30:15'
  },
  {
    id: 3004,
    name: '医疗资源分布及使用效率数据',
    provider: '智慧医疗大数据平台',
    industry: '医疗健康',
    dataType: '结构化数据',
    submitTime: '2023-09-10 08:45:33',
    status: 3, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '钱医生',
    progressStatus: '已拒绝',
    progressPercent: 100,
    submitter: '钱医生',
    providerContact: '钱医生',
    dataSource: '全市医疗信息系统',
    updateFrequency: '每周',
    updateTime: '2023-09-12 15:38:42'
  },
  {
    id: 3005,
    name: '农产品产销监测数据',
    provider: '农业农村大数据中心',
    industry: '农业',
    dataType: '结构化数据',
    submitTime: '2023-09-08 11:22:55',
    status: 1, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '周农业',
    progressStatus: '资料审核中',
    progressPercent: 40,
    submitter: '周农业',
    providerContact: '周农业',
    dataSource: '农业物联网监测系统',
    updateFrequency: '每日',
    updateTime: null
  },
  {
    id: 3006,
    name: '城市供水水质监测数据',
    provider: '市供水集团',
    industry: '公共事业',
    dataType: '时序数据',
    submitTime: '2023-08-20 16:30:47',
    status: 2, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '吴水质',
    progressStatus: '已完成',
    progressPercent: 100,
    submitter: '吴水质',
    providerContact: '孙工程师',
    dataSource: '水质监测站',
    updateFrequency: '每小时',
    updateTime: '2023-08-22 09:25:18'
  },
  {
    id: 3007,
    name: '城市垃圾分类回收数据',
    provider: '环保科技有限公司',
    industry: '环保',
    dataType: '结构化数据',
    submitTime: '2023-09-02 10:18:36',
    status: 3, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '郑环保',
    progressStatus: '已拒绝',
    progressPercent: 100,
    submitter: '郑环保',
    providerContact: '郑环保',
    dataSource: '智能垃圾分类系统',
    updateFrequency: '每日',
    updateTime: '2023-09-04 14:28:50'
  },
  {
    id: 3008,
    name: '企业信用评分数据',
    provider: '企业信用评估中心',
    industry: '金融',
    dataType: '结构化数据',
    submitTime: '2023-08-15 13:42:25',
    status: 2, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '赵信用',
    progressStatus: '已完成',
    progressPercent: 100,
    submitter: '赵信用',
    providerContact: '赵信用',
    dataSource: '企业征信系统',
    updateFrequency: '每月',
    updateTime: '2023-08-18 10:15:33'
  },
  {
    id: 3009,
    name: '智慧校园学生行为数据',
    provider: '教育信息化中心',
    industry: '教育',
    dataType: '结构化数据',
    submitTime: '2023-09-12 09:28:45',
    status: 1, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '孙教育',
    progressStatus: '资料审核中',
    progressPercent: 60,
    submitter: '孙教育',
    providerContact: '孙教育',
    dataSource: '校园一卡通系统',
    updateFrequency: '每日',
    updateTime: null
  },
  {
    id: 3010,
    name: '城市房地产交易监测数据',
    provider: '房产信息数据中心',
    industry: '房地产',
    dataType: '时序数据',
    submitTime: '2023-08-28 15:55:38',
    status: 2, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '钱房产',
    progressStatus: '已完成',
    progressPercent: 100,
    submitter: '钱房产',
    providerContact: '钱房产',
    dataSource: '房产交易平台',
    updateFrequency: '每日',
    updateTime: '2023-08-30 11:23:45'
  },
  {
    id: 3011,
    name: '新能源汽车充电桩使用数据',
    provider: '新能源科技有限公司',
    industry: '能源',
    dataType: '流式数据',
    submitTime: '2023-09-15 08:30:22',
    status: 1, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '周电能',
    progressStatus: '资料审核中',
    progressPercent: 20,
    submitter: '周电能',
    providerContact: '周电能',
    dataSource: '充电桩物联网平台',
    updateFrequency: '实时',
    updateTime: null
  },
  {
    id: 3012,
    name: '气象灾害风险预警数据',
    provider: '气象局',
    industry: '气象',
    dataType: '时序数据',
    submitTime: '2023-08-10 10:15:30',
    status: 2, // 1-待审核 2-已通过 3-已拒绝
    submitUser: '冯气象',
    progressStatus: '已完成',
    progressPercent: 100,
    submitter: '冯气象',
    providerContact: '冯气象',
    dataSource: '气象监测站网',
    updateFrequency: '每小时',
    updateTime: '2023-08-12 14:20:18'
  }
]

// 为登记进度详情准备详细的进度节点数据
export function getRegistryProgressNodes(status, submitTime, updateTime) {
  const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
  
  // 基础节点 - 提交申请（所有状态都有）
  const nodes = [
    {
      title: '提交申请',
      time: submitTime,
      description: '提交数据登记申请，等待审核',
      status: 'success',
      operator: '数据提供方'
    }
  ];
  
  // 根据状态添加不同的节点
  if (status === 1) { // 待审核
    // 资料初审
    nodes.push({
      title: '资料初审',
      time: new Date(new Date(submitTime).getTime() + 24*60*60*1000).toISOString().replace('T', ' ').substring(0, 19),
      description: '系统自动校验提交资料的完整性',
      status: 'success',
      operator: '系统'
    });
    
    // 专家评审中
    nodes.push({
      title: '专家评审',
      time: '',
      description: '正在进行专家评审，请耐心等待',
      status: 'process',
      operator: '评审专家'
    });
    
    // 审核结果
    nodes.push({
      title: '审核结果',
      time: '',
      description: '等待审核完成',
      status: 'wait',
      operator: ''
    });
    
    // 登记完成
    nodes.push({
      title: '登记完成',
      time: '',
      description: '等待审核通过后完成登记',
      status: 'wait',
      operator: ''
    });
  } else if (status === 2) { // 已通过
    // 资料初审
    nodes.push({
      title: '资料初审',
      time: new Date(new Date(submitTime).getTime() + 24*60*60*1000).toISOString().replace('T', ' ').substring(0, 19),
      description: '系统自动校验提交资料的完整性，校验通过',
      status: 'success',
      operator: '系统'
    });
    
    // 专家评审
    nodes.push({
      title: '专家评审',
      time: new Date(new Date(submitTime).getTime() + 48*60*60*1000).toISOString().replace('T', ' ').substring(0, 19),
      description: '专家评审已完成，评审通过',
      status: 'success',
      operator: '评审专家'
    });
    
    // 审核结果
    nodes.push({
      title: '审核结果',
      time: updateTime,
      description: '审核通过，符合数据登记要求',
      status: 'success',
      operator: '数据管理员'
    });
    
    // 登记完成
    nodes.push({
      title: '登记完成',
      time: updateTime,
      description: '恭喜您，数据登记已完成',
      status: 'success',
      operator: '系统'
    });
  } else if (status === 3) { // 已拒绝
    // 资料初审
    nodes.push({
      title: '资料初审',
      time: new Date(new Date(submitTime).getTime() + 24*60*60*1000).toISOString().replace('T', ' ').substring(0, 19),
      description: '系统自动校验提交资料的完整性，校验通过',
      status: 'success',
      operator: '系统'
    });
    
    // 专家评审
    nodes.push({
      title: '专家评审',
      time: new Date(new Date(submitTime).getTime() + 48*60*60*1000).toISOString().replace('T', ' ').substring(0, 19),
      description: '专家评审已完成，评审未通过',
      status: 'error',
      operator: '评审专家'
    });
    
    // 审核结果
    nodes.push({
      title: '审核结果',
      time: updateTime,
      description: '审核未通过，不符合数据登记要求',
      status: 'error',
      operator: '数据管理员'
    });
    
    // 登记完成
    nodes.push({
      title: '登记完成',
      time: '',
      description: '登记未完成，请根据审核意见修改后重新提交',
      status: 'wait',
      operator: ''
    });
  }
  
  return nodes;
} 