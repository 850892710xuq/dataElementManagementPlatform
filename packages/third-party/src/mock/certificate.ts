// 登记证书列表数据
const certificateList = [
  {
    id: 101,
    name: '邵阳市交通路况实时数据',
    provider: '邵阳市交通管理局',
    certificateNo: 'SJZS20230001',
    issueDate: '2023-06-20',
    validPeriod: '2023-06-20 至 2026-06-19',
    status: 1 // 1-有效 2-已过期 3-已注销
  },
  {
    id: 102,
    name: '邵阳市空气质量检测数据',
    provider: '邵阳市环保局',
    certificateNo: 'SJZS20230002',
    issueDate: '2023-06-22',
    validPeriod: '2023-06-22 至 2026-06-21',
    status: 1
  },
  {
    id: 103,
    name: '邵阳市公共交通运行数据',
    provider: '邵阳市公交公司',
    certificateNo: 'SJZS20230003',
    issueDate: '2023-06-25',
    validPeriod: '2023-06-25 至 2026-06-24',
    status: 2
  }
]

// 登记证书详情
const certificateDetail = {
  id: 101,
  name: '邵阳市交通路况实时数据',
  provider: '邵阳市交通管理局',
  certificateNo: 'SJZS20230001',
  issueDate: '2023-06-20',
  validPeriod: '2023-06-20 至 2026-06-19',
  status: 1,
  providerAddress: '邵阳市双清区清风路123号',
  providerContact: '张明',
  providerPhone: '0739-1234567',
  providerEmail: 'jtglj@shaoyang.gov.cn',
  dataCategory: '交通数据',
  dataType: '流式数据',
  description: '包含邵阳市主要道路的实时交通流量、车速、路况信息等数据',
  usageScope: '交通规划、智能交通应用开发',
  registerTime: '2023-06-15',
  auditTime: '2023-06-19',
  certificateUrl: 'https://data.shaoyang.gov.cn/certificate/SJZS20230001.pdf'
}

// 导出模拟数据
export {
  certificateList,
  certificateDetail
} 