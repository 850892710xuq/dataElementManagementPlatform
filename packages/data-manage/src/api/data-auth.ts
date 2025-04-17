import request from '@/utils/request'
import { getRegistrationList, getRegistrationDetail } from './data-register'

// 获取已登记的数据资源
export function getRegisteredResources() {
  // 调用数据登记列表API，仅获取已登记状态的数据
  return getRegistrationList({
    page: 1,
    pageSize: 100,
    registerStatus: 'registered'  // 只获取已登记状态的数据
  }).then(res => {
    if (res.code === 200 && res.data?.list) {
      // 将数据格式化为下拉选择框需要的格式
      return res.data.list.map(item => ({
        id: item.id,
        name: item.resourceName,
        dataType: getDataTypeName(item.dataType),
        description: item.description
      }))
    }
    return []
  })
}

// 获取数据资源详情
export function getResourceDetail(id) {
  return getRegistrationDetail(id).then(res => {
    if (res.code === 200 && res.data) {
      return {
        id: res.data.id,
        name: res.data.resourceName,
        dataType: getDataTypeName(res.data.dataType),
        description: res.data.description
      }
    }
    return null
  })
}

// 数据类型映射
function getDataTypeName(type) {
  const typeMap = {
    'mysql': '关系型数据库(MySQL)',
    'gaussdb': '关系型数据库(GaussDB)',
    'report': '数据报告',
    'file': '文件数据',
    'api': 'API接口'
  }
  return typeMap[type] || type
}

// 提交授权审核结果
export function submitAuthReview(authId, reviewData) {
  // 模拟提交审核结果的API
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('提交审核结果:', authId, reviewData)
      
      // 自动发送通知
      if (reviewData.sendNotification) {
        sendAuthNotification(authId, reviewData)
      }
      
      resolve({
        code: 200,
        message: '审核提交成功',
        data: null
      })
    }, 800)
  })
}

// 发送授权审核通知
function sendAuthNotification(authId, reviewData) {
  // 模拟发送通知的API
  return new Promise((resolve) => {
    setTimeout(() => {
      // 根据审核结果组装通知内容
      const notificationTitle = reviewData.result === 'pass' 
        ? '您的数据授权申请已通过审核' 
        : '您的数据授权申请未通过审核'
      
      const notificationContent = `
申请编号: ${authId}
审核结果: ${reviewData.result === 'pass' ? '通过' : '不通过'}
审核意见: ${reviewData.reason}
${reviewData.result === 'pass' && reviewData.authPeriod && reviewData.authPeriod.length === 2 ? 
  '授权期限: ' + reviewData.authPeriod.join(' 至 ') : ''}
${reviewData.result === 'pass' && reviewData.conditions ? 
  '授权条件: ' + reviewData.conditions : ''}
      `.trim()
      
      console.log('发送通知:', {
        title: notificationTitle,
        content: notificationContent,
        to: 'applicant@example.com'  // 实际项目中应该从申请信息中获取
      })
      
      resolve({
        code: 200,
        message: '通知发送成功',
        data: null
      })
    }, 500)
  })
} 