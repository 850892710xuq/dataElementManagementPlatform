/**
 * 数据存证管理模块Mock服务
 * 用于模拟API接口返回数据，解决开发阶段接口不可用问题
 */

import { DataEvidence } from '../types'
import { MockMethod } from 'vite-plugin-mock'
import { 
  lowSecurityEvidenceList, 
  highSecurityEvidenceList,
  requirementPublishEvidenceList,
  requirementClaimEvidenceList,
  dataEvidenceList
} from './evidence'

// 用户体系存证Mock数据
const userEvidenceList = [
  {
    evidenceNo: 'UE-2024-001',
    userAccount: 'zhangsan@example.com',
    userType: '个人用户',
    authStatus: '已认证',
    authTime: '2024-03-15 10:22:15',
    authChangeTime: '',
    permissionChangeTime: '2024-03-17 14:35:27',
    evidenceTime: '2024-03-18 09:32:15',
    registerTime: '2024-03-01 15:30:22',
    registerEmail: 'zhangsan@example.com',
    registerPhone: '13800138001',
    evidenceHash: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6',
    personalInfo: {
      name: '张三',
      idCard: '110101199001011234',
      phone: '13800138001',
      faceRecognitionStatus: '已通过'
    },
    authInfo: {
      auditor: '李审核',
      auditTime: '2024-03-15 10:22:15',
      auditComment: '资料齐全，身份验证通过'
    },
    permissionChangeRecords: [
      {
        operator: '王管理',
        changeTime: '2024-03-17 14:35:27',
        reason: '用户申请数据分析权限',
        beforePermissions: ['数据浏览', '数据下载'],
        afterPermissions: ['数据浏览', '数据下载', '数据分析']
      }
    ],
    blockchainInfo: {
      chainId: 'BC12345678',
      blockHeight: '3256782',
      transactionHash: '0x76f3d24a643597b95138995521675fb4f9d629cd103ac5be658d2a89c2ce69',
      consensusTime: '2024-03-18 09:33:05'
    }
  },
  {
    evidenceNo: 'UE-2024-002',
    userAccount: 'lisi@company.com',
    userType: '企业用户',
    authStatus: '已认证',
    authTime: '2024-03-10 16:45:33',
    authChangeTime: '2024-03-16 11:20:45',
    permissionChangeTime: '',
    evidenceTime: '2024-03-18 10:15:22',
    registerTime: '2024-03-05 09:15:30',
    registerEmail: 'lisi@company.com',
    registerPhone: '13900139002',
    evidenceHash: 'b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7',
    enterpriseInfo: {
      name: '某某科技有限公司',
      creditCode: '91110108MA01C6P52X',
      legalPerson: '李四',
      legalPersonIdCard: '110101198505079876',
      contactPhone: '13900139002'
    },
    authInfo: {
      auditor: '李审核',
      auditTime: '2024-03-10 16:45:33',
      auditComment: '企业资质符合要求，证件齐全'
    },
    authChangeRecords: [
      {
        changeType: '联系电话变更',
        changeTime: '2024-03-16 11:20:45',
        beforeChange: {
          '联系电话': '01062345678'
        },
        afterChange: {
          '联系电话': '01062345679'
        }
      }
    ],
    blockchainInfo: {
      chainId: 'BC12345678',
      blockHeight: '3257001',
      transactionHash: '0x88a2d3b5c7e9f1d4a6b8c0e2d4f6a8b0c2d4e6f8a0b2c4d6e8f0a2c4e6a8b0',
      consensusTime: '2024-03-18 10:16:05'
    }
  },
  {
    evidenceNo: 'UE-2024-003',
    userAccount: 'wangwu@example.com',
    userType: '个人用户',
    authStatus: '认证中',
    authTime: '',
    authChangeTime: '',
    permissionChangeTime: '',
    evidenceTime: '2024-03-18 11:05:33',
    registerTime: '2024-03-17 15:20:10',
    registerEmail: 'wangwu@example.com',
    registerPhone: '13700137003',
    evidenceHash: 'c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8',
    personalInfo: {
      name: '王五',
      idCard: '110101199203034567',
      phone: '13700137003',
      faceRecognitionStatus: '待验证'
    },
    authInfo: {
      auditor: '李审核',
      auditTime: '',
      auditComment: '等待人脸识别验证'
    },
    blockchainInfo: {
      chainId: 'BC12345678',
      blockHeight: '3257250',
      transactionHash: '0xc3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3',
      consensusTime: '2024-03-18 11:06:15'
    }
  },
  {
    evidenceNo: 'UE-2024-004',
    userAccount: 'zhaoliu@tech.org',
    userType: '企业用户',
    authStatus: '未认证',
    authTime: '',
    authChangeTime: '',
    permissionChangeTime: '',
    evidenceTime: '2024-03-18 14:22:47',
    registerTime: '2024-03-18 14:10:25',
    registerEmail: 'zhaoliu@tech.org',
    registerPhone: '13600136004',
    evidenceHash: 'd4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9',
    blockchainInfo: {
      chainId: 'BC12345678',
      blockHeight: '3257500',
      transactionHash: '0xd4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3',
      consensusTime: '2024-03-18 14:23:10'
    }
  },
  {
    evidenceNo: 'UE-2024-005',
    userAccount: 'sunqi@data.com',
    userType: '企业用户',
    authStatus: '已认证',
    authTime: '2024-03-15 11:30:22',
    authChangeTime: '',
    permissionChangeTime: '2024-03-18 16:36:09',
    evidenceTime: '2024-03-18 16:36:09',
    registerTime: '2024-03-10 10:00:15',
    registerEmail: 'sunqi@data.com',
    registerPhone: '13500135005',
    evidenceHash: 'e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0',
    enterpriseInfo: {
      name: '数据科技股份有限公司',
      creditCode: '91110108MA01D7Q63Y',
      legalPerson: '孙七',
      legalPersonIdCard: '110101198012123456',
      contactPhone: '13500135005'
    },
    authInfo: {
      auditor: '王审核',
      auditTime: '2024-03-15 11:30:22',
      auditComment: '资料完整，符合认证要求'
    },
    permissionChangeRecords: [
      {
        operator: '李管理',
        changeTime: '2024-03-18 16:36:09',
        reason: '提升企业权限等级',
        beforePermissions: ['数据浏览', '数据下载', '基础分析'],
        afterPermissions: ['数据浏览', '数据下载', '基础分析', '高级分析', '数据导出']
      }
    ],
    blockchainInfo: {
      chainId: 'BC12345678',
      blockHeight: '3257800',
      transactionHash: '0xe5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4',
      consensusTime: '2024-03-18 16:37:02'
    }
  }
];

// 标准响应格式
const success = (data: any) => {
  return {
    code: 0,
    message: 'success',
    data
  }
}

// 分页请求处理函数
const handlePageQuery = (list: any[], params: any) => {
  const { pageNum = 1, pageSize = 10, ...filters } = params
  
  // 过滤数据
  let filteredList = [...list]
  
  // 根据过滤条件筛选数据
  Object.keys(filters).forEach(key => {
    if (filters[key]) {
      filteredList = filteredList.filter(item => {
        // 处理时间范围
        if (key.includes('StartTime')) {
          const fieldName = key.replace('StartTime', 'Time')
          return new Date(item[fieldName]).getTime() >= new Date(filters[key]).getTime()
        }
        
        if (key.includes('EndTime')) {
          const fieldName = key.replace('EndTime', 'Time')
          return new Date(item[fieldName]).getTime() <= new Date(filters[key]).getTime()
        }
        
        // 处理普通字段，模糊匹配
        if (typeof item[key] === 'string') {
          return item[key].toLowerCase().includes(filters[key].toLowerCase())
        }
        
        // 精确匹配
        return item[key] === filters[key]
      })
    }
  })
  
  // 计算分页数据
  const startIndex = (Number(pageNum) - 1) * Number(pageSize)
  const endIndex = startIndex + Number(pageSize)
  const pageList = filteredList.slice(startIndex, endIndex)
  
  return {
    list: pageList,
    total: filteredList.length
  }
}

// 导出 mock 数据，适配 vite-plugin-mock
export default [
  // 数据类存证列表接口
  {
    url: '/api/evidence/data/list',
    method: 'get',
    response: (req) => {
      try {
        const params = req.query || {}
        // 使用数据登记存证列表
        const pageResult = handlePageQuery(dataEvidenceList, params);
        return success(pageResult);
      } catch (error) {
        console.error('处理数据存证列表请求时出错:', error);
        return {
          code: 500,
          message: '服务器内部错误',
          data: null
        };
      }
    }
  },
  // 数据类存证详情接口
  {
    url: RegExp('/api/evidence/data/detail/.*'),
    method: 'get',
    response: (req) => {
      try {
        // 从URL中提取evidenceNo
        const url = req.url;
        const evidenceNoMatch = url.match(/\/api\/evidence\/data\/detail\/([^\/\?]+)/);
        const evidenceNo = evidenceNoMatch ? evidenceNoMatch[1] : null;
        
        console.log('接收到详情请求，URL:', url);
        console.log('提取的evidenceNo:', evidenceNo);
        console.log('当前数据列表长度:', dataEvidenceList.length);
        console.log('所有evidenceNo:', dataEvidenceList.map(item => item.evidenceNo).join(', '));
        
        if (!evidenceNo) {
          console.error('无法从URL中提取evidenceNo参数');
            return {
            code: 400,
            message: '缺少必要参数',
              data: null
            };
          }
          
        // 从数据登记存证列表中查找匹配的记录
        const detail = dataEvidenceList.find(item => item.evidenceNo === evidenceNo);
        console.log('查找到的详情:', detail ? '找到数据' : '未找到数据');
        
        if (!detail) {
          // 打印所有evidenceNo以便调试
          console.log('数据列表中的所有evidenceNo:', dataEvidenceList.map(item => item.evidenceNo));
          console.log('传入的evidenceNo:', evidenceNo);
          
          // 尝试返回第一条数据作为备用方案(仅用于调试)
          const fallbackDetail = dataEvidenceList[0];
          console.log('使用fallback数据:', fallbackDetail?.evidenceNo);
          
          // 在开发环境中，为了避免报错，返回第一条数据
          return success(fallbackDetail || null);
          
          // 正式代码应该返回404错误
          // return {
          //   code: 404,
          //   message: '未找到相关存证信息',
          //   data: null
          // };
        }
        
        return success(detail);
      } catch (error) {
        console.error('处理数据存证详情请求时出错:', error);
        return {
          code: 500,
          message: '服务器内部错误',
          data: null
        };
      }
    }
  },
  // 低密开发存证详情接口
  {
    url: RegExp('/api/evidence/low-security/.*'),
    method: 'get',
    response: (req) => {
      try {
        // 从URL中提取ID
        const url = req.url;
        const idMatch = url.match(/\/api\/evidence\/low-security\/([^\/\?]+)/);
        const id = idMatch ? idMatch[1] : null;
        
        console.log('接收到低密开发存证详情请求，URL:', url);
        console.log('提取的ID:', id);
        console.log('当前低密开发存证列表长度:', lowSecurityEvidenceList.length);
        
        if (!id) {
          console.error('无法从URL中提取ID参数');
          return {
            code: 400,
            message: '缺少必要参数',
            data: null
          };
        }
        
        // 从低密开发存证列表中查找匹配的记录
        const detail = lowSecurityEvidenceList.find(item => item.id === id);
        console.log('查找到的详情:', detail ? '找到数据' : '未找到数据');
        
        if (!detail) {
          // 打印所有ID以便调试
          console.log('数据列表中的所有ID:', lowSecurityEvidenceList.map(item => item.id));
          console.log('传入的ID:', id);
          
          // 尝试返回第一条数据作为备用方案(仅用于调试)
          const fallbackDetail = lowSecurityEvidenceList[0];
          console.log('使用fallback数据:', fallbackDetail?.id);
          
          // 在开发环境中，为了避免报错，返回第一条数据
          return success(fallbackDetail || null);
        }
        
        return success(detail);
          } catch (error) {
        console.error('处理低密开发存证详情请求时出错:', error);
            return {
              code: 500,
              message: '服务器内部错误',
              data: null
            };
          }
    }
  },
  // 高密开发存证详情接口
  {
    url: RegExp('/api/evidence/high-security/.*'),
    method: 'get',
    response: (req) => {
      try {
        // 从URL中提取ID
        const url = req.url;
        const idMatch = url.match(/\/api\/evidence\/high-security\/([^\/\?]+)/);
        const id = idMatch ? idMatch[1] : null;
        
        console.log('接收到高密开发存证详情请求，URL:', url);
        console.log('提取的ID:', id);
        console.log('当前高密开发存证列表长度:', highSecurityEvidenceList.length);
        
        if (!id) {
          console.error('无法从URL中提取ID参数');
              return {
            code: 400,
            message: '缺少必要参数',
                data: null
              };
            }
            
        // 从高密开发存证列表中查找匹配的记录
        const detail = highSecurityEvidenceList.find(item => item.id === id);
        console.log('查找到的详情:', detail ? '找到数据' : '未找到数据');
        
        if (!detail) {
          // 打印所有ID以便调试
          console.log('数据列表中的所有ID:', highSecurityEvidenceList.map(item => item.id));
          console.log('传入的ID:', id);
          
          // 尝试返回第一条数据作为备用方案(仅用于调试)
          const fallbackDetail = highSecurityEvidenceList[0];
          console.log('使用fallback数据:', fallbackDetail?.id);
          
          // 在开发环境中，为了避免报错，返回第一条数据
          return success(fallbackDetail || null);
        }
        
        return success(detail);
          } catch (error) {
        console.error('处理高密开发存证详情请求时出错:', error);
          return {
              code: 500,
              message: '服务器内部错误',
            data: null
            };
          }
    }
  },
  // 通用存证列表接口
  {
    url: '/api/evidence/list',
    method: 'get',
    response: (req) => {
      try {
        const params = req.query || {}
        // 根据productType参数决定返回哪种类型的列表
        let list: any[] = [];
        
        switch(params.productType) {
          case 'DATA_RESOURCE':
          case 'DATA_USAGE':
          case 'DATA_FLOW':
          case 'DEVELOPMENT':
          case 'DELIVERY':
          case 'PRODUCT_TRANSACTION':
          case 'LOW_SECURITY':
            list = lowSecurityEvidenceList;
            break;
          case 'HIGH_SECURITY':
            list = highSecurityEvidenceList;
            break;
          default:
            // 默认返回所有类型的存证数据
            list = [
                ...lowSecurityEvidenceList, 
                ...highSecurityEvidenceList
              ];
            }

        const pageResult = handlePageQuery(list, params);
        return success(pageResult);
          } catch (error) {
        console.error('处理存证列表请求时出错:', error);
            return {
              code: 500,
          message: '服务器内部错误',
          data: null
        };
      }
    }
  },
  // 需求定制上架存证列表接口
  {
    url: '/api/evidence/requirement/publish',
    method: 'get',
    response: (req) => {
      console.log('接收到需求定制上架存证列表请求:', req.query);
      try {
        // 非常详细的日志
        console.log('处理需求定制上架存证列表数据...');
        console.log('原始数据长度:', requirementPublishEvidenceList.length);
        console.log('查询参数:', JSON.stringify(req.query));
        
        const result = handlePageQuery(requirementPublishEvidenceList, req.query);
        console.log(`返回需求定制上架存证列表数据: ${result.list.length} 条记录，总计 ${result.total} 条`);
        
        // 标准API响应格式
              return {
          code: 0,
          message: 'success',
          data: result
            };
          } catch (error) {
        console.error('处理需求定制上架存证列表请求出错:', error);
        console.error('详细错误信息:', error.stack || error.message || error);
            return {
              code: 500,
          message: '服务器内部错误:' + (error.message || '未知错误'),
          data: null
        };
      }
    }
  },
  // 需求定制上架存证详情接口
  {
    url: RegExp('/api/evidence/requirement/publish/.*'),
    method: 'get',
    response: (req) => {
      try {
        const url = req.url;
        console.log('接收到需求定制上架存证详情请求，URL:', url);
        
        const evidenceNoMatch = url.match(/\/api\/evidence\/requirement\/publish\/([^\/]+)/);
        const evidenceNo = evidenceNoMatch ? evidenceNoMatch[1] : null;
        console.log('提取的evidenceNo:', evidenceNo);
        
        if (!evidenceNo) {
          console.error('无法从URL中提取evidenceNo参数');
              return {
            code: 400,
            message: '缺少必要参数',
            data: null
          };
        }
        
        console.log('查找记录，evidenceNo:', evidenceNo);
        console.log('可用的需求定制上架记录数:', requirementPublishEvidenceList.length);
        
        // 从需求定制上架存证列表中查找匹配的记录
        const detail = requirementPublishEvidenceList.find(item => item.evidenceNo === evidenceNo);
        console.log('查找到的详情:', detail ? '找到数据' : '未找到数据');
        
        if (!detail) {
          console.log('存证列表中的所有evidenceNo:', requirementPublishEvidenceList.map(item => item.evidenceNo).join(', '));
          console.log('传入的evidenceNo:', evidenceNo);
          
          // 尝试返回第一条数据作为备用方案(仅用于调试)
          const fallbackDetail = requirementPublishEvidenceList[0];
          console.log('使用fallback数据:', fallbackDetail?.evidenceNo);
          
          // 在开发环境中，为了避免报错，返回第一条数据
          return success(fallbackDetail || null);
        }
        
        return success(detail);
          } catch (error) {
        console.error('处理需求定制上架存证详情请求时出错:', error);
        console.error('详细错误信息:', error.stack || error.message || error);
            return {
              code: 500,
          message: '服务器内部错误:' + (error.message || '未知错误'),
          data: null
        };
      }
    }
  },
  // 需求认领记录存证列表接口
  {
    url: '/api/evidence/requirement/claim',
    method: 'get',
    response: (req) => {
      console.log('接收到需求认领记录存证列表请求:', req.query);
      try {
        // 非常详细的日志
        console.log('处理需求认领记录存证列表数据...');
        console.log('原始数据长度:', requirementClaimEvidenceList.length);
        console.log('查询参数:', JSON.stringify(req.query));
        
        const result = handlePageQuery(requirementClaimEvidenceList, req.query);
        console.log(`返回需求认领记录存证列表数据: ${result.list.length} 条记录，总计 ${result.total} 条`);
        
        // 标准API响应格式
              return {
          code: 0,
          message: 'success',
          data: result
            };
          } catch (error) {
        console.error('处理需求认领记录存证列表请求出错:', error);
        console.error('详细错误信息:', error.stack || error.message || error);
            return {
              code: 500,
          message: '服务器内部错误:' + (error.message || '未知错误'),
          data: null
        };
      }
    }
  },
  // 需求认领记录存证详情接口
  {
    url: RegExp('/api/evidence/requirement/claim/.*'),
    method: 'get',
    response: (req) => {
      try {
        const url = req.url;
        console.log('接收到需求认领记录存证详情请求，URL:', url);
        
        const evidenceNoMatch = url.match(/\/api\/evidence\/requirement\/claim\/([^\/]+)/);
        const evidenceNo = evidenceNoMatch ? evidenceNoMatch[1] : null;
        console.log('提取的evidenceNo:', evidenceNo);
        
        if (!evidenceNo) {
          console.error('无法从URL中提取evidenceNo参数');
              return {
            code: 400,
            message: '缺少必要参数',
            data: null
          };
        }
        
        console.log('查找记录，evidenceNo:', evidenceNo);
        console.log('可用的认领记录数:', requirementClaimEvidenceList.length);
        
        // 从需求认领记录存证列表中查找匹配的记录
        const detail = requirementClaimEvidenceList.find(item => item.evidenceNo === evidenceNo);
        console.log('查找到的详情:', detail ? '找到数据' : '未找到数据');
        
        if (!detail) {
          console.log('存证列表中的所有evidenceNo:', requirementClaimEvidenceList.map(item => item.evidenceNo).join(', '));
          console.log('传入的evidenceNo:', evidenceNo);
          
          // 尝试返回第一条数据作为备用方案(仅用于调试)
          const fallbackDetail = requirementClaimEvidenceList[0];
          console.log('使用fallback数据:', fallbackDetail?.evidenceNo);
          
          // 在开发环境中，为了避免报错，返回第一条数据
          return success(fallbackDetail || null);
        }
        
        return success(detail);
          } catch (error) {
        console.error('处理需求认领记录存证详情请求时出错:', error);
        console.error('详细错误信息:', error.stack || error.message || error);
            return {
              code: 500,
          message: '服务器内部错误:' + (error.message || '未知错误'),
          data: null
        };
      }
    }
  },
  // 添加用户体系存证相关API
  {
    url: '/api/v1/user-evidence/list',
    method: 'get',
    response: (req) => {
      console.log('接收到用户体系存证列表请求:', req.query); 
      
      // 解析查询参数
      const params = req.query || {};
      const pageNum = parseInt(params.pageNum) || 1;
      const pageSize = parseInt(params.pageSize) || 10;
      const userAccount = params.userAccount || '';
      const userType = params.userType || '';
      const authStatus = params.authStatus || '';
      const authTimeStart = params.authTimeStart || '';
      const authTimeEnd = params.authTimeEnd || '';

      console.log('处理用户体系存证列表数据...');
      
      // 根据查询条件过滤数据
      let filteredData = [...userEvidenceList];
      
      if (userAccount) {
        filteredData = filteredData.filter(item => item.userAccount.includes(userAccount));
      }
      
      if (userType) {
        filteredData = filteredData.filter(item => item.userType === userType);
      }
      
      if (authStatus) {
        filteredData = filteredData.filter(item => item.authStatus === authStatus);
      }
      
      if (authTimeStart && authTimeEnd) {
        filteredData = filteredData.filter(item => {
          if (!item.authTime) return false;
          const time = new Date(item.authTime).getTime();
          const start = new Date(authTimeStart).getTime();
          const end = new Date(authTimeEnd).getTime();
          return time >= start && time <= end;
        });
      }
      
      // 计算分页数据
      const startIdx = (pageNum - 1) * pageSize;
      const endIdx = startIdx + pageSize;
      const pageData = filteredData.slice(startIdx, endIdx);
      
      console.log(`返回用户体系存证列表数据: ${pageData.length} 条记录，总计 ${filteredData.length} 条`);
      
      return {
        code: 0,
        message: 'success',
        data: {
          list: pageData,
          total: filteredData.length
        }
      };
    }
  },
  // 获取用户体系存证详情
  {
    url: RegExp('/api/v1/user-evidence/detail/(.*)'),
    method: 'get',
    response: (req) => {
      console.log('接收到用户体系存证详情请求，URL:', req.url);
      
      // 从URL中提取存证编号
      const match = req.url.match(/\/api\/v1\/user-evidence\/detail\/([^?]+)/);
      const evidenceNo = match ? match[1] : '';
      console.log('提取的evidenceNo:', evidenceNo);
      
      // 查找对应的记录
      console.log('查找记录，evidenceNo:', evidenceNo);
      console.log('可用的用户体系存证记录数:', userEvidenceList.length);
      
      const detail = userEvidenceList.find(item => item.evidenceNo === evidenceNo);
      
      console.log('查找到的详情:', detail ? '找到数据' : '未找到数据');
      
      if (detail) {
        return {
          code: 0,
          message: 'success',
          data: detail
        };
      } else {
        return {
          code: 404,
          message: '未找到对应的存证记录',
          data: null
        };
      }
    }
  },
  // 导出用户体系存证列表
  {
    url: '/api/v1/user-evidence/export',
    method: 'get',
    response: () => {
      console.log('接收到导出用户体系存证列表请求');
      
      // Mock导出功能，返回成功消息
      return {
        code: 0,
        message: 'success',
        data: new Blob(['用户体系存证导出数据模拟'], { type: 'application/vnd.ms-excel' })
      };
    }
  },
  // 删除用户体系存证
  {
    url: RegExp('/api/v1/user-evidence/delete/(.*)'),
    method: 'delete',
    response: (req) => {
      console.log('接收到删除用户体系存证请求，URL:', req.url);
      
      // 从URL中提取存证编号
      const match = req.url.match(/\/api\/v1\/user-evidence\/delete\/([^?]+)/);
      const evidenceNo = match ? match[1] : '';
      
      console.log('删除的evidenceNo:', evidenceNo);
      
      // 模拟删除操作
      return {
        code: 0,
        message: 'success',
        data: null
      };
    }
  }
] as MockMethod[] 