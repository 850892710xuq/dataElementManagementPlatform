// 异议列表数据
const objectionList = [
  {
    id: 301,
    name: '邵阳市交通路况实时数据',
    provider: '邵阳市交通管理局',
    objector: '张三',
    objectorContact: '13800138000',
    objectionTime: '2023-06-25 10:15:36',
    status: 1, // 1-待处理 2-已处理 3-已驳回
    objectionType: '数据权属异议'
  },
  {
    id: 302,
    name: '邵阳市空气质量检测数据',
    provider: '邵阳市环保局',
    objector: '李四',
    objectorContact: '13900139000',
    objectionTime: '2023-06-28 14:25:48',
    status: 2,
    objectionType: '数据内容异议'
  },
  {
    id: 303,
    name: '邵阳市公共交通运行数据',
    provider: '邵阳市公交公司',
    objector: '王五',
    objectorContact: '13700137000',
    objectionTime: '2023-06-30 09:18:22',
    status: 3,
    objectionType: '资质证明异议'
  }
]

// 异议详情
const objectionDetail = {
  id: 301,
  name: '邵阳市交通路况实时数据',
  provider: '邵阳市交通管理局',
  objector: '张三',
  objectorContact: '13800138000',
  objectorEmail: 'zhangsan@example.com',
  objectionTime: '2023-06-25 10:15:36',
  status: 1,
  objectionType: '数据权属异议',
  objectionContent: '该数据的部分路段交通数据采集设备为我司安装维护，数据所有权存在争议，需要进行权属确认。',
  objectionEvidence: [
    {
      name: '设备安装协议.pdf',
      url: 'https://data.shaoyang.gov.cn/objection/evidence_301_1.pdf'
    },
    {
      name: '数据采集授权书.pdf',
      url: 'https://data.shaoyang.gov.cn/objection/evidence_301_2.pdf'
    }
  ],
  handlingOpinions: '',
  handlingTime: '',
  handler: ''
}

// 导出模拟数据
export {
  objectionList,
  objectionDetail
}