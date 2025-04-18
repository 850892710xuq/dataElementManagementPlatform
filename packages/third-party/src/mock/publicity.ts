// 公示列表数据
const publicityList = [
  {
    id: 201,
    name: '邵阳市交通路况实时数据',
    provider: '邵阳市交通管理局',
    startTime: '2023-06-20',
    endTime: '2023-07-05',
    status: 1, // 1-公示中 2-已完成 3-已取消
    viewCount: 156
  },
  {
    id: 202,
    name: '邵阳市空气质量检测数据',
    provider: '邵阳市环保局',
    startTime: '2023-06-22',
    endTime: '2023-07-07',
    status: 1,
    viewCount: 89
  },
  {
    id: 203,
    name: '邵阳市公共交通运行数据',
    provider: '邵阳市公交公司',
    startTime: '2023-06-01',
    endTime: '2023-06-16',
    status: 2,
    viewCount: 245
  }
]

// 公示设置
const publicitySettings = {
  defaultDuration: 15, // 默认公示时长(天)
  specialDataTypes: [
    {
      type: '个人信息类',
      duration: 20
    },
    {
      type: '金融类',
      duration: 20
    },
    {
      type: '医疗健康类',
      duration: 25
    }
  ]
}

// 导出模拟数据
export {
  publicityList,
  publicitySettings
} 