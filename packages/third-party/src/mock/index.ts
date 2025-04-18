// 导入各模块的模拟数据
import MockJS from 'mockjs'
import { registryAuditList, changeRegistryList, cancelRegistryList, registryAuditDetail } from './registry-audit'
import { certificateList, certificateDetail } from './certificate'
import { publicityList, publicitySettings } from './publicity'
import { objectionList, objectionDetail } from './objection'
import { qualityEvaluationList, securityEvaluationList, pricingEvaluationList, qualityEvaluationDetail } from './evaluation'
import { qualityAppealList, securityAppealList, pricingAppealList, qualityAppealDetail } from './appeal'
import { reportList, reportDetail } from './report'

// 注册模拟接口
const mocks = [
  // 登记审核接口
  {
    url: '/api/registry-audit/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          list: registryAuditList,
          total: registryAuditList.length
        }
      }
    }
  },
  {
    url: '/api/registry-audit/detail',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: registryAuditDetail
      }
    }
  },
  
  // 其他模块接口可以按需添加...
]

// 设置XHR拦截
export function mockXHR() {
  // 初始化MockJS
  console.log('启用 MockJS 进行请求拦截')
  
  // 注册所有Mock接口
  mocks.forEach(mock => {
    MockJS.mock(
      new RegExp(mock.url),
      mock.method || 'get',
      mock.response
    )
  })
  
  console.log('三方服务中心模拟数据已初始化')
} 