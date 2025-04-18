// 质量评估列表
const qualityEvaluationList = [
  {
    id: 401,
    name: '邵阳市交通路况实时数据',
    provider: '邵阳市交通管理局',
    applicant: '邵阳市智慧交通研究院',
    applyTime: '2023-07-05 09:23:45',
    status: 1, // 1-待受理 2-评估中 3-已完成 4-已拒绝
    score: null
  },
  {
    id: 402,
    name: '邵阳市空气质量检测数据',
    provider: '邵阳市环保局',
    applicant: '邵阳市环境科学研究所',
    applyTime: '2023-07-03 14:15:36',
    status: 2,
    score: null
  },
  {
    id: 403,
    name: '邵阳市公共交通运行数据',
    provider: '邵阳市公交公司',
    applicant: '湖南大学交通研究中心',
    applyTime: '2023-06-28 10:45:22',
    status: 3,
    score: 92
  }
]

// 安全评估列表
const securityEvaluationList = [
  {
    id: 501,
    name: '邵阳市交通路况实时数据',
    provider: '邵阳市交通管理局',
    applicant: '邵阳市智慧交通研究院',
    applyTime: '2023-07-06 11:28:45',
    status: 1, // 1-待受理 2-评估中 3-已完成 4-已拒绝
    riskLevel: null
  },
  {
    id: 502,
    name: '邵阳市空气质量检测数据',
    provider: '邵阳市环保局',
    applicant: '邵阳市环境科学研究所',
    applyTime: '2023-07-04 16:35:28',
    status: 3,
    riskLevel: '低风险'
  }
]

// 产品定价评估列表
const pricingEvaluationList = [
  {
    id: 601,
    name: '邵阳市交通路况实时数据',
    provider: '邵阳市交通管理局',
    applicant: '邵阳市智慧交通研究院',
    applyTime: '2023-07-07 14:25:36',
    status: 2, // 1-待受理 2-评估中 3-已完成 4-已拒绝
    suggestedPrice: null
  },
  {
    id: 602,
    name: '邵阳市空气质量检测数据',
    provider: '邵阳市环保局',
    applicant: '邵阳市环境科学研究所',
    applyTime: '2023-07-01 09:18:22',
    status: 3,
    suggestedPrice: '2000元/月'
  }
]

// 质量评估详情
const qualityEvaluationDetail = {
  id: 403,
  name: '邵阳市公共交通运行数据',
  provider: '邵阳市公交公司',
  applicant: '湖南大学交通研究中心',
  applicantContact: '刘教授',
  applicantPhone: '13500135000',
  applicantEmail: 'liuprof@hnu.edu.cn',
  applyTime: '2023-06-28 10:45:22',
  status: 3,
  score: 92,
  dataCategory: '交通数据',
  dataType: '结构化数据',
  dataSize: '50MB/日',
  evaluationStandard: '国家公共数据质量评估标准V2.0',
  evaluationTime: '2023-07-05 15:28:42',
  evaluator: '张评估师',
  evaluationResult: {
    completeness: 95, // 完整性
    accuracy: 90, // 准确性
    consistency: 88, // 一致性
    timeliness: 96, // 时效性
    availability: 92, // 可用性
    security: 91 // 安全性
  },
  evaluationComments: '该数据整体质量较高，尤其在完整性和时效性方面表现突出。但在数据一致性方面还有提升空间，建议优化数据一致性检查机制。'
}

// 导出模拟数据
export {
  qualityEvaluationList,
  securityEvaluationList,
  pricingEvaluationList,
  qualityEvaluationDetail
} 