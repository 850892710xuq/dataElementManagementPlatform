// 评估报告列表
const reportList = [
  {
    id: 1001,
    name: '邵阳市公共交通运行数据_质量评估报告',
    dataName: '邵阳市公共交通运行数据',
    provider: '邵阳市公交公司',
    reportType: '质量评估报告',
    evaluationTime: '2023-07-05 15:28:42',
    downloadCount: 56
  },
  {
    id: 1002,
    name: '邵阳市空气质量检测数据_安全评估报告',
    dataName: '邵阳市空气质量检测数据',
    provider: '邵阳市环保局',
    reportType: '安全评估报告',
    evaluationTime: '2023-07-06 10:15:36',
    downloadCount: 32
  },
  {
    id: 1003,
    name: '邵阳市空气质量检测数据_定价评估报告',
    dataName: '邵阳市空气质量检测数据',
    provider: '邵阳市环保局',
    reportType: '产品定价评估报告',
    evaluationTime: '2023-07-07 11:35:48',
    downloadCount: 28
  }
]

// 评估报告详情
const reportDetail = {
  id: 1001,
  name: '邵阳市公共交通运行数据_质量评估报告',
  dataName: '邵阳市公共交通运行数据',
  provider: '邵阳市公交公司',
  reportType: '质量评估报告',
  evaluationTime: '2023-07-05 15:28:42',
  evaluator: '张评估师',
  score: 92,
  evaluationStandard: '国家公共数据质量评估标准V2.0',
  dataCategory: '交通数据',
  dataType: '结构化数据',
  dataSize: '50MB/日',
  evaluationResult: {
    completeness: 95, // 完整性
    accuracy: 90, // 准确性
    consistency: 88, // 一致性
    timeliness: 96, // 时效性
    availability: 92, // 可用性
    security: 91 // 安全性
  },
  evaluationComments: '该数据整体质量较高，尤其在完整性和时效性方面表现突出。但在数据一致性方面还有提升空间，建议优化数据一致性检查机制。',
  suggestions: [
    '建议优化数据一致性检查机制，提高数据一致性评分',
    '建议完善数据字典，增强数据可理解性',
    '建议建立数据质量监控机制，定期对数据质量进行评估'
  ],
  reportUrl: 'https://data.shaoyang.gov.cn/report/quality_report_1001.pdf',
  downloadCount: 56
}

// 导出模拟数据
export {
  reportList,
  reportDetail
} 