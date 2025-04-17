import type { LowSecurityEvidence, HighSecurityEvidence } from '@/types/evidence';
import type { DataEvidence } from '@/types';

// 模拟数据
const lowSecurityEvidence: LowSecurityEvidence = {
  id: '1',
  productName: '数据分析平台',
  productType: 'LOW_SECURITY',
  developmentTeam: '数据研发团队',
  startTime: '2024-01-01',
  endTime: '2024-03-01',
  technicalArchitecture: '采用Vue3 + TypeScript + Element Plus开发，后端使用Node.js + Express，数据库使用MySQL',
  functionalModules: [
    '数据导入导出',
    '数据清洗转换',
    '数据可视化展示',
    '报表生成'
  ],
  versions: [
    {
      version: '1.0.0',
      updateTime: '2024-02-01',
      updateContent: '完成基础功能开发'
    },
    {
      version: '1.1.0',
      updateTime: '2024-02-15',
      updateContent: '优化数据导入性能，新增数据导出功能'
    },
    {
      version: '1.2.0',
      updateTime: '2024-03-01',
      updateContent: '新增报表生成功能，优化用户界面'
    }
  ],
  testReports: [
    {
      name: '功能测试报告',
      type: '功能测试',
      fileUrl: 'http://example.com/test-report.pdf'
    },
    {
      name: '性能测试报告',
      type: '性能测试',
      fileUrl: 'http://example.com/performance-report.pdf'
    }
  ],
  evidenceNo: 'EVIDENCE-2024-001',
  evidenceTime: '2024-03-01'
};

const highSecurityEvidence: HighSecurityEvidence = {
  ...lowSecurityEvidence,
  id: '2',
  productName: '隐私计算平台',
  productType: 'HIGH_SECURITY',
  developmentTeam: '安全研发团队',
  startTime: '2024-01-15',
  endTime: '2024-03-15',
  technicalArchitecture: '采用联邦学习框架，结合MPC和同态加密技术，实现数据安全计算',
  functionalModules: [
    '联邦学习训练',
    '安全多方计算',
    '隐私数据查询',
    '模型安全评估'
  ],
  versions: [
    {
      version: '1.0.0',
      updateTime: '2024-02-15',
      updateContent: '完成基础框架搭建'
    },
    {
      version: '1.1.0',
      updateTime: '2024-03-01',
      updateContent: '实现联邦学习核心功能'
    },
    {
      version: '1.2.0',
      updateTime: '2024-03-15',
      updateContent: '新增MPC和隐私查询功能'
    }
  ],
  securityTechnologies: [
    {
      name: '联邦学习',
      description: '采用横向联邦学习框架，实现多方数据联合建模',
      securityMeasures: [
        '差分隐私保护',
        '模型参数加密传输',
        '安全聚合协议'
      ]
    },
    {
      name: '安全多方计算',
      description: '使用MPC技术实现多方数据安全计算',
      securityMeasures: [
        '秘密分享协议',
        '零知识证明',
        '安全通信通道'
      ]
    }
  ],
  dataSources: [
    {
      name: '企业数据',
      description: '来自合作企业的脱敏数据',
      legality: '已签署数据使用协议，确保数据来源合法'
    },
    {
      name: '政府数据',
      description: '政府部门提供的加密数据',
      legality: '已获得政府授权，符合数据安全规范'
    }
  ],
  privacyProtection: {
    strategy: '采用多层次隐私保护策略，确保数据安全',
    technicalMeasures: [
      '数据脱敏处理',
      '访问权限控制',
      '操作审计日志',
      '加密传输存储'
    ]
  },
  evidenceNo: 'EVIDENCE-2024-002',
  evidenceTime: '2024-03-15'
};

// 低密度产品开发存证列表数据
const lowSecurityEvidenceList: LowSecurityEvidence[] = [
  {
    id: '10001',
    productName: '数据分析平台',
    productType: 'LOW_SECURITY',
    developmentTeam: '数字技术部',
    startTime: '2023-01-10',
    endTime: '2023-06-20',
    technicalArchitecture: 'Vue3 + Spring Boot + MySQL',
    functionalModules: [
      '数据采集模块',
      '数据清洗模块',
      '数据分析模块',
      '数据可视化模块',
      '报表导出模块'
    ],
    versions: [
      {
        version: 'v1.0.0',
        updateTime: '2023-03-15',
        updateContent: '初始版本，完成基础功能开发'
      },
      {
        version: 'v1.1.0',
        updateTime: '2023-05-20',
        updateContent: '优化数据处理性能，新增自定义分析功能'
      },
      {
        version: 'v1.2.0',
        updateTime: '2023-06-18',
        updateContent: '完善数据可视化功能，新增多种图表类型'
      }
    ],
    testReports: [
      {
        name: '功能测试报告',
        type: '功能测试',
        fileUrl: 'https://example.com/reports/10001/function.pdf'
      },
      {
        name: '性能测试报告',
        type: '性能测试',
        fileUrl: 'https://example.com/reports/10001/performance.pdf'
      }
    ],
    evidenceNo: 'EV-20230620-001',
    evidenceTime: '2023-06-21'
  },
  {
    id: '10002',
    productName: '客户管理系统',
    productType: 'LOW_SECURITY',
    developmentTeam: '业务系统部',
    startTime: '2023-02-15',
    endTime: '2023-08-10',
    technicalArchitecture: 'React + Node.js + MongoDB',
    functionalModules: [
      '客户信息管理',
      '联系人管理',
      '跟进记录管理',
      '统计分析',
      '系统管理'
    ],
    versions: [
      {
        version: 'v1.0.0',
        updateTime: '2023-04-20',
        updateContent: '完成客户信息管理和联系人管理功能'
      },
      {
        version: 'v1.1.0',
        updateTime: '2023-06-15',
        updateContent: '完成跟进记录管理和基础统计功能'
      },
      {
        version: 'v1.2.0',
        updateTime: '2023-08-08',
        updateContent: '完善统计分析功能，优化用户体验'
      }
    ],
    testReports: [
      {
        name: '功能测试报告',
        type: '功能测试',
        fileUrl: 'https://example.com/reports/10002/function.pdf'
      },
      {
        name: '用户体验测试报告',
        type: '用户体验',
        fileUrl: 'https://example.com/reports/10002/ux.pdf'
      }
    ],
    evidenceNo: 'EV-20230810-002',
    evidenceTime: '2023-08-12'
  },
  {
    id: '10003',
    productName: '资源调度系统',
    productType: 'LOW_SECURITY',
    developmentTeam: '平台研发部',
    startTime: '2023-03-05',
    endTime: '2023-09-15',
    technicalArchitecture: 'Angular + Spring Cloud + PostgreSQL',
    functionalModules: [
      '资源管理',
      '任务调度',
      '监控告警',
      '资源统计',
      '系统配置'
    ],
    versions: [
      {
        version: 'v1.0.0',
        updateTime: '2023-05-10',
        updateContent: '完成资源管理和基础调度功能'
      },
      {
        version: 'v1.1.0',
        updateTime: '2023-07-20',
        updateContent: '完成监控告警功能，优化调度算法'
      },
      {
        version: 'v1.2.0',
        updateTime: '2023-09-12',
        updateContent: '完善资源统计功能，提升系统稳定性'
      }
    ],
    testReports: [
      {
        name: '功能测试报告',
        type: '功能测试',
        fileUrl: 'https://example.com/reports/10003/function.pdf'
      },
      {
        name: '性能测试报告',
        type: '性能测试',
        fileUrl: 'https://example.com/reports/10003/performance.pdf'
      },
      {
        name: '稳定性测试报告',
        type: '稳定性测试',
        fileUrl: 'https://example.com/reports/10003/stability.pdf'
      }
    ],
    evidenceNo: 'EV-20230915-003',
    evidenceTime: '2023-09-18'
  }
];

// 高密度产品开发存证列表数据
const highSecurityEvidenceList: HighSecurityEvidence[] = [
  {
    id: '20001',
    productName: '金融风控系统',
    productType: 'HIGH_SECURITY',
    developmentTeam: '金融科技部',
    startTime: '2023-01-15',
    endTime: '2023-07-20',
    technicalArchitecture: 'Vue3 + Spring Cloud + Oracle',
    functionalModules: [
      '用户信用评估',
      '交易风险分析',
      '反欺诈监控',
      '规则引擎',
      '风险报告'
    ],
    versions: [
      {
        version: 'v1.0.0',
        updateTime: '2023-03-20',
        updateContent: '完成用户信用评估和基础风险分析功能'
      },
      {
        version: 'v1.1.0',
        updateTime: '2023-05-25',
        updateContent: '完成反欺诈监控和规则引擎功能'
      },
      {
        version: 'v1.2.0',
        updateTime: '2023-07-18',
        updateContent: '完善风险报告功能，优化算法性能'
      }
    ],
    testReports: [
      {
        name: '功能测试报告',
        type: '功能测试',
        fileUrl: 'https://example.com/reports/20001/function.pdf'
      },
      {
        name: '安全测试报告',
        type: '安全测试',
        fileUrl: 'https://example.com/reports/20001/security.pdf'
      },
      {
        name: '性能测试报告',
        type: '性能测试',
        fileUrl: 'https://example.com/reports/20001/performance.pdf'
      }
    ],
    evidenceNo: 'EV-20230720-001',
    evidenceTime: '2023-07-22',
    securityTechnologies: [
      {
        name: '数据加密技术',
        description: '采用国密SM2/SM4算法对敏感数据进行加密保护',
        securityMeasures: [
          '传输层TLS加密',
          '数据存储加密',
          '密钥安全管理'
        ]
      },
      {
        name: '身份认证技术',
        description: '多因素身份认证和细粒度权限控制',
        securityMeasures: [
          '双因素认证',
          '生物特征认证',
          'OAuth2授权',
          'RBAC权限模型'
        ]
      },
      {
        name: '安全审计技术',
        description: '全方位的安全审计和监控机制',
        securityMeasures: [
          '操作日志记录',
          '异常行为监控',
          '实时告警机制'
        ]
      }
    ],
    dataSources: [
      {
        name: '用户基础信息',
        description: '用户注册和实名认证信息',
        legality: '用户授权同意'
      },
      {
        name: '交易记录数据',
        description: '用户交易的历史记录和模式',
        legality: '服务协议授权'
      },
      {
        name: '外部风险数据',
        description: '合作方提供的风险信息',
        legality: '数据共享协议'
      }
    ],
    privacyProtection: {
      strategy: '采用数据脱敏、数据分级和权限控制相结合的隐私保护策略',
      technicalMeasures: [
        '敏感信息脱敏展示',
        '最小权限原则',
        '数据访问审计',
        '数据生命周期管理',
        '个人信息匿名化处理'
      ]
    }
  },
  {
    id: '20002',
    productName: '医疗数据管理平台',
    productType: 'HIGH_SECURITY',
    developmentTeam: '医疗信息部',
    startTime: '2023-02-20',
    endTime: '2023-08-15',
    technicalArchitecture: 'React + .NET Core + SQL Server',
    functionalModules: [
      '患者信息管理',
      '电子病历',
      '医疗影像管理',
      '处方管理',
      '数据分析与报告'
    ],
    versions: [
      {
        version: 'v1.0.0',
        updateTime: '2023-04-25',
        updateContent: '完成患者信息管理和电子病历基础功能'
      },
      {
        version: 'v1.1.0',
        updateTime: '2023-06-30',
        updateContent: '完成医疗影像管理和处方管理功能'
      },
      {
        version: 'v1.2.0',
        updateTime: '2023-08-12',
        updateContent: '完善数据分析与报告功能'
      }
    ],
    testReports: [
      {
        name: '功能测试报告',
        type: '功能测试',
        fileUrl: 'https://example.com/reports/20002/function.pdf'
      },
      {
        name: '安全合规测试报告',
        type: '安全合规',
        fileUrl: 'https://example.com/reports/20002/compliance.pdf'
      },
      {
        name: '性能测试报告',
        type: '性能测试',
        fileUrl: 'https://example.com/reports/20002/performance.pdf'
      }
    ],
    evidenceNo: 'EV-20230815-002',
    evidenceTime: '2023-08-18',
    securityTechnologies: [
      {
        name: '医疗数据加密',
        description: '符合HIPAA标准的医疗数据加密方案',
        securityMeasures: [
          '端到端加密',
          '分级加密策略',
          '密钥轮换机制'
        ]
      },
      {
        name: '访问控制技术',
        description: '基于角色和场景的细粒度访问控制',
        securityMeasures: [
          '基于角色的访问控制',
          '基于属性的访问控制',
          '患者授权机制',
          '临时访问控制'
        ]
      },
      {
        name: '数据隔离技术',
        description: '多租户数据隔离技术',
        securityMeasures: [
          '逻辑隔离',
          '物理隔离',
          '数据库级隔离'
        ]
      }
    ],
    dataSources: [
      {
        name: '患者基本信息',
        description: '患者的个人基础信息',
        legality: '患者知情同意'
      },
      {
        name: '医疗检查数据',
        description: '各类医疗检查的结果数据',
        legality: '医疗服务协议'
      },
      {
        name: '治疗记录',
        description: '患者接受治疗的记录数据',
        legality: '医疗机构授权'
      }
    ],
    privacyProtection: {
      strategy: '采用严格的数据访问控制和匿名化处理，确保患者隐私安全',
      technicalMeasures: [
        '医疗数据脱敏',
        '患者身份匿名化',
        '基于目的的访问限制',
        '数据使用审计',
        '定期隐私评估'
      ]
    }
  },
  {
    id: '20003',
    productName: '政务安全通信系统',
    productType: 'HIGH_SECURITY',
    developmentTeam: '政务信息部',
    startTime: '2023-03-10',
    endTime: '2023-10-05',
    technicalArchitecture: 'Native + Java + PostgreSQL',
    functionalModules: [
      '加密通信',
      '身份认证',
      '文件传输',
      '群组管理',
      '审计日志'
    ],
    versions: [
      {
        version: 'v1.0.0',
        updateTime: '2023-05-15',
        updateContent: '完成加密通信和身份认证基础功能'
      },
      {
        version: 'v1.1.0',
        updateTime: '2023-07-25',
        updateContent: '完成文件传输和群组管理功能'
      },
      {
        version: 'v1.2.0',
        updateTime: '2023-10-01',
        updateContent: '完善审计日志和安全性提升'
      }
    ],
    testReports: [
      {
        name: '功能测试报告',
        type: '功能测试',
        fileUrl: 'https://example.com/reports/20003/function.pdf'
      },
      {
        name: '安全渗透测试报告',
        type: '安全渗透',
        fileUrl: 'https://example.com/reports/20003/penetration.pdf'
      },
      {
        name: '等级保护测评报告',
        type: '等级保护',
        fileUrl: 'https://example.com/reports/20003/security-level.pdf'
      }
    ],
    evidenceNo: 'EV-20231005-003',
    evidenceTime: '2023-10-08',
    securityTechnologies: [
      {
        name: '国密算法应用',
        description: '全面应用国密SM2/SM3/SM4算法',
        securityMeasures: [
          'SM2非对称加密',
          'SM3密码杂凑',
          'SM4对称加密',
          '国密SSL协议'
        ]
      },
      {
        name: '多重身份认证',
        description: '多因素、多维度身份认证体系',
        securityMeasures: [
          '智能卡认证',
          '生物特征识别',
          '动态口令认证',
          '行为特征认证'
        ]
      },
      {
        name: '可靠性保障技术',
        description: '确保系统高可用性的技术措施',
        securityMeasures: [
          '多中心部署',
          '实时数据同步',
          '故障自动切换',
          '灾备恢复机制'
        ]
      }
    ],
    dataSources: [
      {
        name: '用户身份信息',
        description: '系统用户的身份认证信息',
        legality: '政务系统授权'
      },
      {
        name: '通信内容数据',
        description: '加密后的通信内容',
        legality: '系统使用规定'
      },
      {
        name: '组织架构数据',
        description: '政务单位的组织架构信息',
        legality: '内部管理授权'
      }
    ],
    privacyProtection: {
      strategy: '采用零信任安全架构，实现数据全生命周期保护',
      technicalMeasures: [
        '端到端加密通信',
        '敏感信息识别与保护',
        '通信记录最小化',
        '数据本地存储优先',
        '自动数据清理机制'
      ]
    }
  }
];

// 需求定制上架存证列表数据
const requirementPublishEvidenceList = [
  {
    evidenceNo: 'RP-2024-001',
    requirementName: '金融数据分析平台',
    requesterName: '中国金融研究院',
    requesterId: 'FR-2024-001',
    publishApplyTime: '2024-01-08 10:25:30',
    publishAuditTime: '2024-01-09 16:45:12',
    publishTime: '2024-01-10 14:30:00',
    expireTime: '2024-07-10 14:30:00',
    budget: '500000',
    requirementStatus: '已发布',
    requirementInfo: '需要开发一个能够处理大规模金融数据的分析平台，支持多种金融模型计算和可视化展示。包括但不限于：基础的金融数据清洗、转换功能；各类金融指标的计算分析功能；综合的数据可视化展示功能；数据报表自动生成功能；多用户权限管理和协同工作功能。系统需要支持至少10TB级别数据的高效处理。',
    requirementDescription: '需要一个能够处理大规模金融数据的分析平台，支持多种金融模型计算和可视化展示',
    technicalRequirements: '使用Python/R进行数据处理，前端使用Vue.js开发，支持分布式计算',
    auditStatus: '审核通过',
    auditOpinion: '通过',
    auditReason: '满足平台需求标准',
    auditor: '张审核',
    demander: '中国金融研究院',
    demanderId: 'FR-2024-001',
    evidenceTime: '2024-01-10 16:30:00',
    evidenceChain: 'chain-hash-001'
  },
  {
    evidenceNo: 'RP-2024-002',
    requirementName: '医疗数据共享平台',
    requesterName: '北京医学研究所',
    requesterId: 'MI-2024-002',
    publishApplyTime: '2024-01-12 13:40:15',
    publishAuditTime: '2024-01-14 11:20:36',
    publishTime: '2024-01-15 09:15:00',
    expireTime: '2024-06-15 09:15:00',
    budget: '800000',
    requirementStatus: '已发布',
    requirementInfo: '构建一个安全的医疗数据共享平台，支持多家医院之间的数据安全交换和分析。该平台需要满足以下核心需求：严格的数据隐私保护和访问控制机制；支持不同医疗信息系统之间的标准化数据交换；医疗数据的安全加密存储和传输；基于权限的多级数据访问控制；医疗数据分析和辅助诊断功能。平台需要符合国家医疗数据安全法规和隐私保护要求。',
    requirementDescription: '构建一个安全的医疗数据共享平台，支持多家医院之间的数据安全交换和分析',
    technicalRequirements: '采用区块链技术保证数据安全，前端React框架，后端Java Spring Boot',
    auditStatus: '审核通过',
    auditOpinion: '通过',
    auditReason: '符合医疗数据交换标准',
    auditor: '李审核',
    demander: '北京医学研究所',
    demanderId: 'MI-2024-002',
    evidenceTime: '2024-01-15 11:30:00',
    evidenceChain: 'chain-hash-002'
  },
  {
    evidenceNo: 'RP-2024-003',
    requirementName: '智能交通数据平台',
    requesterName: '交通运输部科学研究院',
    requesterId: 'TR-2024-003',
    publishApplyTime: '2024-01-18 09:30:45',
    publishAuditTime: '2024-01-19 15:10:25',
    publishTime: '2024-01-20 13:45:00',
    expireTime: '2024-08-20 13:45:00',
    budget: '650000',
    requirementStatus: '已发布',
    requirementInfo: '建设一个智能交通数据平台，对交通流量、路况等数据进行实时处理和分析。平台核心功能包括：交通数据的实时采集和存储；交通流量的预测分析；交通状态可视化展示；交通事件的自动识别和预警；为交通管理决策提供数据支持。系统需要支持城市级交通数据的高并发处理，并提供开放API接口供其他系统调用。',
    requirementDescription: '建设一个智能交通数据平台，对交通流量、路况等数据进行实时处理和分析',
    technicalRequirements: '支持大数据实时处理，采用Kafka+Spark架构，前端使用Angular',
    auditStatus: '审核通过',
    auditOpinion: '通过',
    auditReason: '项目具有重要社会价值',
    auditor: '王审核',
    demander: '交通运输部科学研究院',
    demanderId: 'TR-2024-003',
    evidenceTime: '2024-01-20 16:15:00',
    evidenceChain: 'chain-hash-003'
  },
  {
    evidenceNo: 'RP-2024-004',
    requirementName: '农业大数据分析系统',
    requesterName: '国家农业农村部',
    requesterId: 'AG-2024-004',
    publishApplyTime: '2024-01-25 14:20:35',
    publishAuditTime: '2024-01-26 10:15:22',
    publishTime: '2024-01-27 09:30:00',
    expireTime: '2024-09-27 09:30:00',
    budget: '720000',
    requirementStatus: '已发布',
    requirementInfo: '开发一个全国农业大数据分析系统，整合各地农业生产、气象、水利、土壤等数据，为农业生产提供决策支持。系统需要实现以下功能：多源农业数据的采集和清洗；农作物生长环境监测和分析；农业生产预测和预警；智能农业决策支持；农产品产销对接服务。系统需要支持大规模空间数据处理和分析。',
    requirementDescription: '开发全国农业大数据分析系统，整合各地农业生产、气象、水利、土壤等数据',
    technicalRequirements: '使用Hadoop生态系统，结合GIS技术，前端采用Vue.js，支持移动端访问',
    auditStatus: '待审核',
    auditOpinion: '待审核',
    auditReason: '',
    auditor: '-',
    demander: '国家农业农村部',
    demanderId: 'AG-2024-004',
    evidenceTime: '2024-01-27 11:45:00',
    evidenceChain: 'chain-hash-004'
  },
  {
    evidenceNo: 'RP-2024-005',
    requirementName: '智慧教育数据平台',
    requesterName: '教育部教育信息化司',
    requesterId: 'ED-2024-005',
    publishApplyTime: '2024-02-03 11:10:25',
    publishAuditTime: '2024-02-04 14:30:40',
    publishTime: '2024-02-05 10:00:00',
    expireTime: '2024-10-05 10:00:00',
    budget: '550000',
    requirementStatus: '已发布',
    requirementInfo: '建设一个面向全国教育系统的智慧教育数据平台，整合教育资源、学生学习行为和教学过程数据，实现教育教学的智能化管理和决策支持。平台核心功能包括：教育资源的统一管理和智能推荐；学生学习行为的追踪和分析；教学过程数据的采集和处理；个性化学习路径的生成；教育质量评估和分析。系统需要支持全国范围内的多级教育机构接入。',
    requirementDescription: '建设面向全国教育系统的智慧教育数据平台，整合教育资源和教学过程数据',
    technicalRequirements: '采用微服务架构，后端Spring Cloud，前端React，支持私有云部署',
    auditStatus: '审核通过',
    auditOpinion: '通过',
    auditReason: '符合国家教育信息化战略',
    auditor: '周审核',
    demander: '教育部教育信息化司',
    demanderId: 'ED-2024-005',
    evidenceTime: '2024-02-05 13:25:00',
    evidenceChain: 'chain-hash-005'
  }
];

// 需求认领记录存证列表数据
const requirementClaimEvidenceList = [
  {
    evidenceNo: 'RC-2024-001',
    requirementName: '金融数据分析平台',
    requirementNo: 'RP-2024-001',
    requirementType: '数据分析',
    requirementStatus: '处理中',
    requirementContent: '需要开发一个能够处理大规模金融数据的分析平台，支持多种金融模型计算和可视化展示。包括但不限于：基础的金融数据清洗、转换功能；各类金融指标的计算分析功能；综合的数据可视化展示功能；数据报表自动生成功能；多用户权限管理和协同工作功能。系统需要支持至少10TB级别数据的高效处理。',
    claimant: '数据科技有限公司',
    claimantId: 'DST-2024-001',
    claimTime: '2024-01-15 10:20:00',
    estimatedCompletionTime: '2024-06-20',
    offerPrice: '480000',
    developmentPlan: '分四个阶段完成开发，包括需求分析、架构设计、功能实现和测试部署',
    technicalSolution: '采用Python+TensorFlow进行数据处理，Vue.js前端框架，Docker容器化部署',
    auditStatus: '审核通过',
    auditTime: '2024-01-16 14:35:42',
    auditor: '赵审核',
    evidenceTime: '2024-01-16 16:30:00',
    evidenceChain: 'chain-hash-004'
  },
  {
    evidenceNo: 'RC-2024-002',
    requirementName: '医疗数据共享平台',
    requirementNo: 'RP-2024-002',
    requirementType: '数据共享',
    requirementStatus: '处理中',
    requirementContent: '构建一个安全的医疗数据共享平台，支持多家医院之间的数据安全交换和分析。该平台需要满足以下核心需求：严格的数据隐私保护和访问控制机制；支持不同医疗信息系统之间的标准化数据交换；医疗数据的安全加密存储和传输；基于权限的多级数据访问控制；医疗数据分析和辅助诊断功能。平台需要符合国家医疗数据安全法规和隐私保护要求。',
    claimant: '医疗信息技术公司',
    claimantId: 'MIT-2024-002',
    claimTime: '2024-01-25 11:15:00',
    estimatedCompletionTime: '2024-05-30',
    offerPrice: '750000',
    developmentPlan: '采用敏捷开发方法，两周一个迭代，共计10个迭代完成所有功能',
    technicalSolution: '基于FHIR标准构建医疗数据交换服务，前端React，后端Spring Boot，数据库采用MongoDB',
    auditStatus: '审核通过',
    auditTime: '2024-01-26 09:30:18',
    auditor: '钱审核',
    evidenceTime: '2024-01-26 11:45:00',
    evidenceChain: 'chain-hash-005'
  },
  {
    evidenceNo: 'RC-2024-003',
    requirementName: '智能交通数据平台',
    requirementNo: 'RP-2024-003',
    requirementType: '智能交通',
    requirementStatus: '已认领',
    requirementContent: '建设一个智能交通数据平台，对交通流量、路况等数据进行实时处理和分析。平台核心功能包括：交通数据的实时采集和存储；交通流量的预测分析；交通状态可视化展示；交通事件的自动识别和预警；为交通管理决策提供数据支持。系统需要支持城市级交通数据的高并发处理，并提供开放API接口供其他系统调用。',
    claimant: '智慧城市科技有限公司',
    claimantId: 'SCT-2024-003',
    claimTime: '2024-02-01 14:40:00',
    estimatedCompletionTime: '2024-07-15',
    offerPrice: '620000',
    developmentPlan: '三个月完成核心功能开发，两个月进行系统测试和优化',
    technicalSolution: '采用微服务架构，Kafka处理实时数据流，Spark进行数据分析，ElasticSearch存储和检索数据',
    auditStatus: '审核通过',
    auditTime: '2024-02-02 16:55:33',
    auditor: '孙审核',
    evidenceTime: '2024-02-02 18:20:00',
    evidenceChain: 'chain-hash-006'
  },
  {
    evidenceNo: 'RC-2024-004',
    requirementName: '农业大数据分析系统',
    requirementNo: 'RP-2024-004',
    requirementType: '农业信息化',
    requirementStatus: '已完成',
    requirementContent: '开发一个全国农业大数据分析系统，整合各地农业生产、气象、水利、土壤等数据，为农业生产提供决策支持。系统需要实现以下功能：多源农业数据的采集和清洗；农作物生长环境监测和分析；农业生产预测和预警；智能农业决策支持；农产品产销对接服务。系统需要支持大规模空间数据处理和分析。',
    claimant: '农业大数据研究院',
    claimantId: 'ADI-2024-004',
    claimTime: '2024-02-10 09:15:00',
    estimatedCompletionTime: '2024-08-10',
    offerPrice: '680000',
    developmentPlan: '四个阶段开发：需求调研、数据整合、功能开发、系统测试',
    technicalSolution: '基于Hadoop生态系统，集成气象和地理信息系统，前端采用Vue.js，支持Web和移动端访问',
    auditStatus: '审核通过',
    auditTime: '2024-02-11 11:20:45',
    auditor: '吴审核',
    evidenceTime: '2024-02-11 14:30:00',
    evidenceChain: 'chain-hash-007'
  },
  {
    evidenceNo: 'RC-2024-005',
    requirementName: '智慧教育数据平台',
    requirementNo: 'RP-2024-005',
    requirementType: '教育信息化',
    requirementStatus: '已取消',
    requirementContent: '建设一个面向全国教育系统的智慧教育数据平台，整合教育资源、学生学习行为和教学过程数据，实现教育教学的智能化管理和决策支持。平台核心功能包括：教育资源的统一管理和智能推荐；学生学习行为的追踪和分析；教学过程数据的采集和处理；个性化学习路径的生成；教育质量评估和分析。系统需要支持全国范围内的多级教育机构接入。',
    claimant: '教育信息化公司',
    claimantId: 'EIC-2024-005',
    claimTime: '2024-02-15 13:45:00',
    estimatedCompletionTime: '2024-09-20',
    offerPrice: '520000',
    developmentPlan: '基于教育行业标准开发，分模块实现，逐步集成',
    technicalSolution: '采用微服务架构，云原生应用，支持多租户模式，整合AI推荐引擎',
    auditStatus: '审核通过',
    auditTime: '2024-02-16 10:30:26',
    auditor: '郑审核',
    evidenceTime: '2024-02-16 15:10:00',
    evidenceChain: 'chain-hash-008'
  }
];

// 模拟数据登记存证列表
export const dataEvidenceList: DataEvidence[] = [
  {
    evidenceNo: 'DATA-2024-0001',
    evidenceTime: '2024-03-10 15:30:45',
    dataName: '城市交通流量数据集',
    ownerName: '北京市交通管理局',
    createTime: '2024-03-08 10:22:18',
    registerType: '初始登记',
    registerTime: '2024-03-09 14:25:33',
    dataDescription: '包含北京市主要道路的交通流量监测数据，含车流量、平均车速等指标',
    materials: [
      {
        name: '数据样本文件',
        type: 'CSV文件',
        url: 'http://example.com/traffic-sample.csv'
      },
      {
        name: '数据结构说明',
        type: 'PDF文档',
        url: 'http://example.com/traffic-structure.pdf'
      }
    ],
    auditStatus: '审核通过',
    dataType: '结构化数据',
    dataOrigin: '交通监控系统采集',
    registrant: '张明',
    securityLevel: '公开数据',
    storageLocation: '北京数据中心',
    dataSize: '1.5TB',
    formatType: 'CSV',
    updateCycle: '每日更新'
  },
  {
    evidenceNo: 'DATA-2024-0002',
    evidenceTime: '2024-03-12 09:45:22',
    dataName: '医疗健康数据集',
    ownerName: '上海市第一人民医院',
    createTime: '2024-03-10 08:15:35',
    registerType: '初始登记',
    registerTime: '2024-03-11 16:20:18',
    dataDescription: '脱敏后的门诊患者基础健康数据，包含生理指标但不含个人身份信息',
    materials: [
      {
        name: '数据安全评估报告',
        type: 'PDF文档',
        url: 'http://example.com/health-security.pdf'
      },
      {
        name: '数据格式说明',
        type: 'Word文档',
        url: 'http://example.com/health-format.docx'
      }
    ],
    auditStatus: '审核通过',
    auditReason: '数据已完成脱敏处理，符合隐私保护要求',
    dataType: '结构化数据',
    dataOrigin: '医院信息系统',
    registrant: '李刚',
    securityLevel: '内部数据',
    storageLocation: '上海医疗数据中心',
    dataSize: '500GB',
    formatType: 'JSON',
    updateCycle: '每周更新'
  },
  {
    evidenceNo: 'DATA-2024-0003',
    evidenceTime: '2024-03-15 14:18:36',
    dataName: '电商用户行为数据',
    ownerName: '深圳云购科技有限公司',
    createTime: '2024-03-12 11:05:42',
    registerType: '初始登记',
    registerTime: '2024-03-14 10:35:19',
    dataDescription: '用户在电商平台的浏览、收藏、购买等行为数据，已进行去标识化处理',
    materials: [
      {
        name: '数据样本',
        type: 'Excel文件',
        url: 'http://example.com/ecommerce-sample.xlsx'
      }
    ],
    auditStatus: '审核不通过',
    auditReason: '数据去标识化处理不完全，存在用户隐私泄露风险',
    dataType: '半结构化数据',
    dataOrigin: '电商平台',
    registrant: '王琳',
    securityLevel: '保密数据',
    storageLocation: '深圳数据中心',
    dataSize: '2TB',
    formatType: 'Parquet',
    updateCycle: '实时更新'
  },
  {
    evidenceNo: 'DATA-2024-0004',
    evidenceTime: '2024-03-18 11:30:25',
    dataName: '气象监测数据',
    ownerName: '国家气象局',
    createTime: '2024-03-16 09:12:54',
    registerType: '初始登记',
    registerTime: '2024-03-17 15:40:33',
    dataDescription: '全国各地区气象监测站的温度、湿度、气压等数据',
    materials: [
      {
        name: '数据接入说明',
        type: 'PDF文档',
        url: 'http://example.com/weather-access.pdf'
      },
      {
        name: '数据标准文档',
        type: 'PDF文档',
        url: 'http://example.com/weather-standard.pdf'
      }
    ],
    auditStatus: '审核通过',
    dataType: '时序数据',
    dataOrigin: '气象监测站',
    registrant: '周健',
    securityLevel: '公开数据',
    storageLocation: '国家数据中心',
    dataSize: '5TB',
    formatType: 'HDF5',
    updateCycle: '每小时更新'
  },
  {
    evidenceNo: 'DATA-2024-0005',
    evidenceTime: '2024-03-20 16:22:48',
    dataName: '企业财务数据',
    ownerName: '中国企业信息中心',
    createTime: '2024-03-18 14:05:22',
    registerType: '变更登记',
    registerTime: '2024-03-19 11:15:36',
    dataDescription: '上市公司公开的财务报表数据，包含资产负债表、利润表、现金流量表等',
    materials: [
      {
        name: '数据变更说明',
        type: 'PDF文档',
        url: 'http://example.com/finance-change.pdf'
      }
    ],
    auditStatus: '审核通过',
    dataType: '结构化数据',
    dataOrigin: '公开财报',
    registrant: '刘强',
    securityLevel: '公开数据',
    storageLocation: '金融数据中心',
    dataSize: '800GB',
    formatType: 'Excel',
    updateCycle: '季度更新'
  },
  {
    evidenceNo: 'DATA-2024-0006',
    evidenceTime: '2024-03-22 10:18:35',
    dataName: '城市监控影像数据',
    ownerName: '广州市公安局',
    createTime: '2024-03-20 09:33:47',
    registerType: '初始登记',
    registerTime: '2024-03-21 16:42:15',
    dataDescription: '城市主要路口和公共区域的监控摄像头采集的影像数据',
    materials: [
      {
        name: '数据使用授权书',
        type: 'PDF文档',
        url: 'http://example.com/surveillance-auth.pdf'
      },
      {
        name: '数据安全管理规定',
        type: 'Word文档',
        url: 'http://example.com/surveillance-security.docx'
      }
    ],
    auditStatus: '审核通过',
    dataType: '非结构化数据',
    dataOrigin: '监控摄像系统',
    registrant: '陈明',
    securityLevel: '机密数据',
    storageLocation: '广州安全数据中心',
    dataSize: '10TB',
    formatType: 'MP4/JPEG',
    updateCycle: '实时更新'
  },
  {
    evidenceNo: 'DATA-2024-0007',
    evidenceTime: '2024-03-25 15:45:22',
    dataName: '农产品价格数据',
    ownerName: '农业部信息中心',
    createTime: '2024-03-23 11:28:36',
    registerType: '初始登记',
    registerTime: '2024-03-24 09:30:42',
    dataDescription: '全国各农贸市场主要农产品的日均价格数据',
    materials: [
      {
        name: '数据采集方法说明',
        type: 'PDF文档',
        url: 'http://example.com/agri-collection.pdf'
      }
    ],
    auditStatus: '审核通过',
    dataType: '结构化数据',
    dataOrigin: '市场调研',
    registrant: '赵红',
    securityLevel: '公开数据',
    storageLocation: '农业数据中心',
    dataSize: '200GB',
    formatType: 'CSV',
    updateCycle: '每日更新'
  },
  {
    evidenceNo: 'DATA-2024-0008',
    evidenceTime: '2024-03-28 14:35:12',
    dataName: '智慧教育学生行为数据',
    ownerName: '北京智慧教育研究院',
    createTime: '2024-03-25 10:15:28',
    registerType: '初始登记',
    registerTime: '2024-03-26 16:40:30',
    dataDescription: '通过智能教室采集的学生学习行为数据，包括课堂参与度、互动频率等指标',
    materials: [
      {
        name: '数据采集方案',
        type: 'PDF文档',
        url: 'http://example.com/education-collection.pdf'
      },
      {
        name: '数据安全评估报告',
        type: 'PDF文档',
        url: 'http://example.com/education-security.pdf'
      }
    ],
    auditStatus: '审核通过',
    dataType: '结构化数据',
    dataOrigin: '智能教室系统',
    registrant: '钱明',
    securityLevel: '内部数据',
    storageLocation: '教育云数据中心',
    dataSize: '1.2TB',
    formatType: 'JSON',
    updateCycle: '每日更新'
  },
  {
    evidenceNo: 'DATA-2024-0009',
    evidenceTime: '2024-03-30 09:25:48',
    dataName: '智能家居用户行为数据',
    ownerName: '智慧生活科技有限公司',
    createTime: '2024-03-28 13:10:22',
    registerType: '初始登记',
    registerTime: '2024-03-29 16:30:15',
    dataDescription: '智能家居设备采集的用户生活习惯数据，已进行匿名化处理',
    materials: [
      {
        name: '数据隐私保护方案',
        type: 'PDF文档',
        url: 'http://example.com/smart-home-privacy.pdf'
      }
    ],
    auditStatus: '审核不通过',
    auditReason: '数据匿名化处理不足，建议进一步加强隐私保护措施',
    dataType: '半结构化数据',
    dataOrigin: '智能家居设备',
    registrant: '孙亮',
    securityLevel: '保密数据',
    storageLocation: '深圳智能云中心',
    dataSize: '750GB',
    formatType: 'JSON',
    updateCycle: '实时更新'
  },
  {
    evidenceNo: 'DATA-2024-0010',
    evidenceTime: '2024-04-02 15:22:36',
    dataName: '环境监测数据集',
    ownerName: '国家环境保护部',
    createTime: '2024-03-30 10:15:25',
    registerType: '初始登记',
    registerTime: '2024-04-01 14:20:18',
    dataDescription: '全国各地环境监测站采集的空气质量、水质、噪声等环境数据',
    materials: [
      {
        name: '数据质量报告',
        type: 'PDF文档',
        url: 'http://example.com/environment-quality.pdf'
      },
      {
        name: '监测点分布说明',
        type: 'Excel文件',
        url: 'http://example.com/monitor-points.xlsx'
      }
    ],
    auditStatus: '审核通过',
    dataType: '时序数据',
    dataOrigin: '环境监测站',
    registrant: '吴军',
    securityLevel: '公开数据',
    storageLocation: '国家环境数据中心',
    dataSize: '3.5TB',
    formatType: 'CSV/Parquet',
    updateCycle: '每小时更新'
  },
  {
    evidenceNo: 'DATA-2024-0011',
    evidenceTime: '2024-04-05 11:45:30',
    dataName: '城市公共交通运营数据',
    ownerName: '上海市交通委员会',
    createTime: '2024-04-02 09:10:15',
    registerType: '初始登记',
    registerTime: '2024-04-03 16:30:42',
    dataDescription: '上海市公交、地铁等公共交通工具的运营数据，包括客流量、运行状态等',
    materials: [
      {
        name: '数据采集方案',
        type: 'PDF文档',
        url: 'http://example.com/public-transit-collection.pdf'
      }
    ],
    auditStatus: '审核通过',
    dataType: '结构化数据',
    dataOrigin: '交通一卡通系统、车辆管理系统',
    registrant: '郑涛',
    securityLevel: '内部数据',
    storageLocation: '上海交通数据中心',
    dataSize: '2.3TB',
    formatType: 'JSON/Parquet',
    updateCycle: '每日更新'
  },
  {
    evidenceNo: 'DATA-2024-0012',
    evidenceTime: '2024-04-08 16:40:22',
    dataName: '制造业设备运行数据',
    ownerName: '江苏工业数字化研究院',
    createTime: '2024-04-05 13:15:36',
    registerType: '初始登记',
    registerTime: '2024-04-06 10:25:18',
    dataDescription: '制造业企业智能设备的运行状态、能耗、产量等数据',
    materials: [
      {
        name: '数据采集方案',
        type: 'PDF文档',
        url: 'http://example.com/manufacture-collection.pdf'
      },
      {
        name: '数据安全评估报告',
        type: 'Word文档',
        url: 'http://example.com/manufacture-security.docx'
      }
    ],
    auditStatus: '审核通过',
    dataType: '时序数据',
    dataOrigin: '工业物联网设备',
    registrant: '马晓',
    securityLevel: '保密数据',
    storageLocation: '苏州工业云平台',
    dataSize: '4.8TB',
    formatType: 'Parquet/ORC',
    updateCycle: '实时更新'
  },
  {
    evidenceNo: 'DATA-2024-0013',
    evidenceTime: '2024-04-10 09:35:15',
    dataName: '电力能源消耗数据',
    ownerName: '国家电网有限公司',
    createTime: '2024-04-07 14:20:28',
    registerType: '变更登记',
    registerTime: '2024-04-09 11:15:36',
    dataDescription: '全国各地区电力能源消耗数据，包括工业、商业、居民用电量等分类统计',
    materials: [
      {
        name: '数据变更说明',
        type: 'PDF文档',
        url: 'http://example.com/power-change.pdf'
      },
      {
        name: '数据结构文档',
        type: 'Word文档',
        url: 'http://example.com/power-structure.docx'
      }
    ],
    auditStatus: '审核通过',
    dataType: '结构化数据',
    dataOrigin: '电网监测系统',
    registrant: '李进',
    securityLevel: '内部数据',
    storageLocation: '国家电网数据中心',
    dataSize: '3.2TB',
    formatType: 'CSV/Parquet',
    updateCycle: '每小时更新'
  },
  {
    evidenceNo: 'DATA-2024-0014',
    evidenceTime: '2024-04-12 14:28:33',
    dataName: '农业生产监测数据',
    ownerName: '中国农业科学院',
    createTime: '2024-04-10 09:30:15',
    registerType: '初始登记',
    registerTime: '2024-04-11 16:45:20',
    dataDescription: '全国农业生产情况监测数据，包括作物生长状态、土壤湿度、气象条件等',
    materials: [
      {
        name: '数据采集系统说明',
        type: 'PDF文档',
        url: 'http://example.com/agriculture-system.pdf'
      }
    ],
    auditStatus: '审核通过',
    dataType: '混合数据',
    dataOrigin: '农业物联网系统',
    registrant: '张华',
    securityLevel: '内部数据',
    storageLocation: '农业科学院数据中心',
    dataSize: '2.8TB',
    formatType: 'JSON/CSV',
    updateCycle: '每日更新'
  },
  {
    evidenceNo: 'DATA-2024-0015',
    evidenceTime: '2024-04-15 11:30:45',
    dataName: '疫情监测数据',
    ownerName: '国家卫生健康委员会',
    createTime: '2024-04-12 16:20:33',
    registerType: '变更登记',
    registerTime: '2024-04-14 10:15:28',
    dataDescription: '全国疫情监测数据，包括传染病发病率、区域分布等，已进行脱敏处理',
    materials: [
      {
        name: '数据变更申请',
        type: 'PDF文档',
        url: 'http://example.com/health-change.pdf'
      },
      {
        name: '数据保密协议',
        type: 'PDF文档',
        url: 'http://example.com/health-confidential.pdf'
      }
    ],
    auditStatus: '审核通过',
    dataType: '结构化数据',
    dataOrigin: '医疗卫生系统',
    registrant: '王健',
    securityLevel: '保密数据',
    storageLocation: '国家健康数据中心',
    dataSize: '1.8TB',
    formatType: 'CSV/Excel',
    updateCycle: '每日更新'
  }
];

// 导出模拟数据
export {
  lowSecurityEvidenceList,
  highSecurityEvidenceList,
  requirementPublishEvidenceList,
  requirementClaimEvidenceList
}; 