import type { ProductTransactionEvidence, QueryParams } from '@/api/product-transaction-evidence'

// 模拟产品交易存证数据
const mockData: ProductTransactionEvidence[] = [
  {
    id: '1',
    productName: '智能数据分析平台',
    transactionTime: '2023-06-15 10:30:25',
    transactionType: '上架',
    transactionStatus: '上架审核通过',
    evidenceNo: 'EV-20230615-001',
    applyTime: '2023-06-10 09:15:20',
    applicant: '数智科技有限公司',
    applicantId: 'ORG-10023',
    productPrice: 9800,
    productDescription: '基于AI技术的智能数据分析平台，提供数据清洗、分析、可视化等一站式服务。',
    auditTime: '2023-06-15 09:45:30',
    auditor: '平台管理员',
    auditResult: '通过',
    auditReason: '',
    evidenceTime: '2023-06-15 10:30:25'
  },
  {
    id: '2',
    productName: '企业数据治理工具包',
    transactionTime: '2023-07-20 14:20:15',
    transactionType: '上架',
    transactionStatus: '上架审核不通过',
    evidenceNo: 'EV-20230720-002',
    applyTime: '2023-07-15 16:30:40',
    applicant: '云数据科技有限公司',
    applicantId: 'ORG-10045',
    productPrice: 15600,
    productDescription: '企业级数据治理工具包，包含数据质量管理、元数据管理、数据标准化等模块。',
    auditTime: '2023-07-20 11:30:10',
    auditor: '平台审核专员',
    auditResult: '不通过',
    auditReason: '产品描述不完整，缺少必要的技术规格说明。',
    evidenceTime: '2023-07-20 14:20:15'
  },
  {
    id: '3',
    productName: '智能数据分析平台',
    transactionTime: '2023-08-05 09:10:35',
    transactionType: '订单交易',
    transactionStatus: '订单交易成功',
    evidenceNo: 'EV-20230805-003',
    orderTime: '2023-08-01 15:25:30',
    buyer: '远景数据科技有限公司',
    buyerId: 'ORG-20078',
    quantity: 2,
    unitPrice: 9800,
    paymentMethod: '企业在线支付',
    auditTime: '2023-08-03 10:15:20',
    auditor: '交易审核员',
    auditResult: '通过',
    auditReason: '',
    completeTime: '2023-08-05 09:10:35',
    totalAmount: 19600,
    evidenceTime: '2023-08-05 09:30:15'
  },
  {
    id: '4',
    productName: '数据安全合规评估服务',
    transactionTime: '2023-09-12 11:45:20',
    transactionType: '订单交易',
    transactionStatus: '订单交易失败',
    evidenceNo: 'EV-20230912-004',
    orderTime: '2023-09-10 16:40:10',
    buyer: '金融数据应用研究所',
    buyerId: 'ORG-30056',
    quantity: 1,
    unitPrice: 25000,
    paymentMethod: '银行转账',
    auditTime: '2023-09-11 14:30:25',
    auditor: '高级交易审核员',
    auditResult: '通过',
    auditReason: '',
    completeTime: '2023-09-12 11:45:20',
    totalAmount: 25000,
    evidenceTime: '2023-09-12 12:10:30'
  },
  {
    id: '5',
    productName: '数据标准化平台',
    transactionTime: '2023-10-05 13:25:40',
    transactionType: '上架',
    transactionStatus: '上架审核通过',
    evidenceNo: 'EV-20231005-005',
    applyTime: '2023-10-01 11:10:30',
    applicant: '标准科技有限公司',
    applicantId: 'ORG-10067',
    productPrice: 12500,
    productDescription: '数据标准化平台，提供数据标准管理、数据字典管理、质量规则配置等功能。',
    auditTime: '2023-10-04 16:30:20',
    auditor: '平台管理员',
    auditResult: '通过',
    auditReason: '',
    evidenceTime: '2023-10-05 13:25:40'
  },
  {
    id: '6',
    productName: '数据标准化平台',
    transactionTime: '2023-10-15 10:15:30',
    transactionType: '订单交易',
    transactionStatus: '订单交易成功',
    evidenceNo: 'EV-20231015-006',
    orderTime: '2023-10-12 09:20:15',
    buyer: '金融数字化研究院',
    buyerId: 'ORG-20089',
    quantity: 1,
    unitPrice: 12500,
    paymentMethod: '企业在线支付',
    auditTime: '2023-10-13 14:10:25',
    auditor: '交易审核员',
    auditResult: '通过',
    auditReason: '',
    completeTime: '2023-10-15 10:15:30',
    totalAmount: 12500,
    evidenceTime: '2023-10-15 10:30:45'
  },
  {
    id: '7',
    productName: '数据资产管理系统',
    transactionTime: '2023-11-08 15:40:25',
    transactionType: '上架',
    transactionStatus: '上架审核通过',
    evidenceNo: 'EV-20231108-007',
    applyTime: '2023-11-03 14:25:10',
    applicant: '资产云科技有限公司',
    applicantId: 'ORG-10078',
    productPrice: 18600,
    productDescription: '数据资产管理系统，支持资产目录管理、血缘分析、价值评估和风险管理等功能。',
    auditTime: '2023-11-07 11:30:45',
    auditor: '平台高级管理员',
    auditResult: '通过',
    auditReason: '',
    evidenceTime: '2023-11-08 15:40:25'
  },
  {
    id: '8',
    productName: '智能数据质量监控平台',
    transactionTime: '2023-12-10 16:20:35',
    transactionType: '上架',
    transactionStatus: '上架审核不通过',
    evidenceNo: 'EV-20231210-008',
    applyTime: '2023-12-05 09:30:20',
    applicant: '质量科技有限公司',
    applicantId: 'ORG-10092',
    productPrice: 14800,
    productDescription: '智能数据质量监控平台，提供实时监控、异常检测和质量评分等功能。',
    auditTime: '2023-12-09 14:15:30',
    auditor: '平台审核专员',
    auditResult: '不通过',
    auditReason: '产品价格超出同类产品合理价格区间，需调整后重新提交。',
    evidenceTime: '2023-12-10 16:20:35'
  },
  {
    id: '9',
    productName: '数据资产管理系统',
    transactionTime: '2023-12-20 11:25:15',
    transactionType: '订单交易',
    transactionStatus: '订单交易成功',
    evidenceNo: 'EV-20231220-009',
    orderTime: '2023-12-15 10:10:30',
    buyer: '科创数据科技有限公司',
    buyerId: 'ORG-20104',
    quantity: 1,
    unitPrice: 18600,
    paymentMethod: '银行转账',
    auditTime: '2023-12-18 15:40:25',
    auditor: '高级交易审核员',
    auditResult: '通过',
    auditReason: '',
    completeTime: '2023-12-20 11:25:15',
    totalAmount: 18600,
    evidenceTime: '2023-12-20 11:40:30'
  },
  {
    id: '10',
    productName: '数据标签引擎',
    transactionTime: '2024-01-15 14:30:45',
    transactionType: '上架',
    transactionStatus: '上架审核通过',
    evidenceNo: 'EV-20240115-010',
    applyTime: '2024-01-10 09:45:30',
    applicant: '标签科技有限公司',
    applicantId: 'ORG-10115',
    productPrice: 11800,
    productDescription: '数据标签引擎，支持自动标签生成、标签管理、标签应用和效果评估等功能。',
    auditTime: '2024-01-14 16:20:15',
    auditor: '平台管理员',
    auditResult: '通过',
    auditReason: '',
    evidenceTime: '2024-01-15 14:30:45'
  },
]

// 获取列表数据，支持分页和筛选
export function getProductTransactionEvidenceList(params: QueryParams) {
  let result = [...mockData]
  
  // 筛选条件
  if (params.productName) {
    result = result.filter(item => item.productName.includes(params.productName))
  }
  
  if (params.transactionType) {
    result = result.filter(item => item.transactionType === params.transactionType)
  }
  
  if (params.transactionStatus) {
    result = result.filter(item => item.transactionStatus === params.transactionStatus)
  }
  
  if (params.transactionTimeStart && params.transactionTimeEnd) {
    result = result.filter(item => {
      const time = new Date(item.transactionTime).getTime()
      const start = new Date(params.transactionTimeStart).getTime()
      const end = new Date(params.transactionTimeEnd).getTime()
      return time >= start && time <= end
    })
  }
  
  // 计算总记录数
  const total = result.length
  
  // 分页
  const startIndex = (params.pageNum - 1) * params.pageSize
  const endIndex = startIndex + params.pageSize
  result = result.slice(startIndex, endIndex)
  
  return {
    list: result,
    total
  }
}

// 获取详情数据
export function getProductTransactionEvidenceDetail(id: string) {
  return mockData.find(item => item.id === id)
}

// 验证存证
export function verifyProductTransactionEvidence(evidenceNo: string) {
  // 模拟验证逻辑，这里简单返回成功
  return {
    verified: true,
    message: '存证验证通过，数据真实有效且未被篡改。'
  }
} 