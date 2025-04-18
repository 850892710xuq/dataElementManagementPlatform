// 质量评估申诉列表
const qualityAppealList = [
  {
    id: 701,
    originalEvaluationId: 403,
    name: '邵阳市公共交通运行数据',
    provider: '邵阳市公交公司',
    applicant: '邵阳市公交公司',
    applyTime: '2023-07-08 10:15:36',
    status: 1, // 1-待受理 2-复评中 3-已完成
    originalScore: 92,
    appealScore: null
  },
  {
    id: 702,
    originalEvaluationId: 404,
    name: '邵阳市医疗资源分布数据',
    provider: '邵阳市卫健委',
    applicant: '邵阳市卫健委',
    applyTime: '2023-07-05 14:28:52',
    status: 3,
    originalScore: 85,
    appealScore: 88
  }
]

// 安全评估申诉列表
const securityAppealList = [
  {
    id: 801,
    originalEvaluationId: 502,
    name: '邵阳市空气质量检测数据',
    provider: '邵阳市环保局',
    applicant: '邵阳市环保局',
    applyTime: '2023-07-10 09:20:15',
    status: 2, // 1-待受理 2-复评中 3-已完成
    originalRiskLevel: '低风险',
    appealRiskLevel: null
  }
]

// 产品定价评估申诉列表
const pricingAppealList = [
  {
    id: 901,
    originalEvaluationId: 602,
    name: '邵阳市空气质量检测数据',
    provider: '邵阳市环保局',
    applicant: '邵阳市环保局',
    applyTime: '2023-07-09 11:35:48',
    status: 3, // 1-待受理 2-复评中 3-已完成
    originalPrice: '2000元/月',
    appealPrice: '3000元/月'
  }
]

// 质量评估申诉详情
const qualityAppealDetail = {
  id: 701,
  originalEvaluationId: 403,
  name: '邵阳市公共交通运行数据',
  provider: '邵阳市公交公司',
  applicant: '邵阳市公交公司',
  applicantContact: '赵经理',
  applicantPhone: '13600136000',
  applicantEmail: 'ztjlc@shaoyang.gov.cn',
  applyTime: '2023-07-08 10:15:36',
  status: 1,
  originalScore: 92,
  appealScore: null,
  originalEvaluation: {
    completeness: 95,
    accuracy: 90,
    consistency: 88,
    timeliness: 96,
    availability: 92,
    security: 91
  },
  appealReason: '我公司对数据一致性方面的评分有异议，经过近期的数据治理工作，数据一致性已有明显提高，希望重新进行评估。',
  appealEvidence: [
    {
      name: '数据一致性检测报告.pdf',
      url: 'https://data.shaoyang.gov.cn/appeal/evidence_701_1.pdf'
    },
    {
      name: '数据治理工作总结.docx',
      url: 'https://data.shaoyang.gov.cn/appeal/evidence_701_2.docx'
    }
  ],
  reappraisalResult: null,
  reappraisalComments: null,
  reappraisalTime: null,
  appraiser: null
}

// 导出模拟数据
export {
  qualityAppealList,
  securityAppealList,
  pricingAppealList,
  qualityAppealDetail
} 