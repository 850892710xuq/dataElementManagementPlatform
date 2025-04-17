import { MockMethod } from 'vite-plugin-mock'

// 定义申请参数接口
interface ApplyParams {
  dataIds: number[]
  applyTime: string
}

// 定义申请记录接口
interface ApplyRecord {
  id: number
  userId: number
  userName: string
  dataIds: number[]
  applyTime: string
  status: string
  createTime: string
}

// 模拟申请记录列表
const applyRecords: ApplyRecord[] = []

// 生成mock数据
const mockData: MockMethod[] = [
  {
    url: '/api/explore-apply/submit',
    method: 'post',
    response: (options: { body: ApplyParams }) => {
      const { dataIds, applyTime } = options.body
      
      // 生成新的申请记录
      const newRecord: ApplyRecord = {
        id: applyRecords.length + 1,
        userId: 1, // 模拟用户ID
        userName: '张三', // 模拟用户名
        dataIds,
        applyTime,
        status: '待处理',
        createTime: new Date().toISOString()
      }
      
      // 添加到申请记录列表
      applyRecords.push(newRecord)
      
      return {
        code: 200,
        data: newRecord,
        message: '申请提交成功'
      }
    }
  }
]

export default mockData 