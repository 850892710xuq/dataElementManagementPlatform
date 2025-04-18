import { get, post, put } from '@/utils/request'
import { registryAuditList, changeRegistryList, cancelRegistryList, registryAuditDetail, getRegistryAuditDetailById } from '@/mock/registry-audit'

/**
 * 获取登记审核列表
 * @param params 查询参数
 * @returns 返回登记审核列表数据
 */
export function getRegistryAuditList(params = {}) {
  // 返回模拟的登记审核列表数据
  return new Promise(resolve => {
    setTimeout(() => {
      // 过滤数据
      let filteredList = [...registryAuditList];
      
      // 按名称筛选
      if (params.name) {
        filteredList = filteredList.filter(item => 
          item.name.includes(params.name)
        );
      }
      
      // 按提供方筛选
      if (params.provider) {
        filteredList = filteredList.filter(item => 
          item.provider.includes(params.provider)
        );
      }
      
      // 按状态筛选
      if (params.status !== null && params.status !== undefined) {
        filteredList = filteredList.filter(item => 
          item.status === params.status
        );
      }
      
      // 按时间范围筛选
      if (params.timeRange && params.timeRange.length === 2) {
        const startDate = new Date(params.timeRange[0]).getTime();
        const endDate = new Date(params.timeRange[1]).getTime();
        
        filteredList = filteredList.filter(item => {
          const itemDate = new Date(item.submitTime).getTime();
          return itemDate >= startDate && itemDate <= endDate;
        });
      }
      
      // 分页处理
      const pageSize = params.pageSize || 10;
      const pageNum = params.pageNum || 1;
      const startIndex = (pageNum - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const pagedList = filteredList.slice(startIndex, endIndex);
      
      resolve({
        code: 200,
        data: {
          list: pagedList,
          total: filteredList.length
        },
        message: '操作成功'
      })
    }, 500)
  })
}

/**
 * 获取变更登记列表
 * @param params 查询参数
 * @returns 返回变更登记列表数据
 */
export function getChangeRegistryList(params = {}) {
  // 返回模拟的变更登记列表数据
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: {
          list: changeRegistryList,
          total: changeRegistryList.length
        },
        message: '操作成功'
      })
    }, 500)
  })
}

/**
 * 获取注销登记列表
 * @param params 查询参数
 * @returns 返回注销登记列表数据
 */
export function getCancelRegistryList(params = {}) {
  // 返回模拟的注销登记列表数据
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: {
          list: cancelRegistryList,
          total: cancelRegistryList.length
        },
        message: '操作成功'
      })
    }, 500)
  })
}

/**
 * 获取登记审核详情
 * @param id 登记项ID
 * @returns 返回登记审核详情数据
 */
export function getRegistryAuditDetail(id) {
  // 根据ID获取登记审核详情数据
  const detail = getRegistryAuditDetailById(id);
  
  // 如果能找到匹配的详情数据，直接返回
  if (detail) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          code: 200,
          data: detail,
          message: '操作成功'
        })
      }, 500)
    });
  }
  
  // 如果找不到对应ID的详情数据，则尝试从列表中找对应的数据
  const listItem = registryAuditList.find(item => item.id === Number(id));
  
  if (listItem) {
    // 找到列表项，创建详情数据
    const constructedDetail = {
      ...registryAuditDetail,
      id: listItem.id,
      name: listItem.name,
      provider: listItem.provider,
      industry: listItem.industry,
      dataType: listItem.dataType,
      submitTime: listItem.submitTime,
      submitter: listItem.submitUser || '系统用户',
      status: listItem.status,
      providerContact: listItem.submitUser || '未知',
      reviewHistory: [
        {
          reviewer: '系统',
          reviewTime: listItem.submitTime,
          action: '提交审核',
          status: '待审核',
          comments: '提交数据登记申请'
        }
      ]
    };
    
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          code: 200,
          data: constructedDetail,
          message: '操作成功'
        })
      }, 500)
    });
  }
  
  // 如果都找不到，则返回默认数据
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: { ...registryAuditDetail, id: Number(id) },
        message: '操作成功'
      })
    }, 500)
  });
}

/**
 * 审核登记
 * @param id 登记项ID
 * @param params 审核参数，包含审核结果和审核意见
 * @returns 返回审核结果
 */
export function auditRegistry(id, params) {
  // 获取当前时间
  const now = new Date();
  const formattedTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  
  // 审核记录
  const reviewRecord = {
    reviewer: '数据管理员',
    reviewTime: formattedTime,
    action: params.result === 'pass' ? '审核通过' : '审核拒绝',
    status: params.result === 'pass' ? '已通过' : '已拒绝',
    comments: params.remarks || (params.result === 'pass' ? '符合登记要求，审核通过' : '不符合登记要求，审核拒绝')
  };
  
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: {
          success: true,
          reviewRecord
        },
        message: '审核操作成功'
      })
    }, 1000)
  })
}

// 获取变更登记详情
export function getChangeRegistryDetail(id: number) {
  // 模拟API请求
  return new Promise(resolve => {
    setTimeout(() => {
      const detail = changeRegistryList.find(item => item.id === id)
      // 模拟请求响应
      resolve({
        code: 200,
        message: 'success',
        data: detail || {}
      })
    }, 300)
  })
}

// 获取注销登记详情
export function getCancelRegistryDetail(id: number) {
  // 模拟API请求
  return new Promise(resolve => {
    setTimeout(() => {
      const detail = cancelRegistryList.find(item => item.id === id)
      // 模拟请求响应
      resolve({
        code: 200,
        message: 'success',
        data: detail || {}
      })
    }, 300)
  })
} 