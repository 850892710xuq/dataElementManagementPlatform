import request from '@/utils/request'
import { changeRegistryList, changeRegistryDetails, getChangeRegistryDetailById } from '@/mock/registry-audit'

/**
 * 获取变更登记审核列表
 * @param params 查询参数
 * @returns 变更登记列表数据
 */
export function getChangeRegistryList(params: any) {
  // 如果接口尚未开发完成，使用模拟数据
  return new Promise((resolve) => {
    setTimeout(() => {
      // 根据查询参数过滤数据
      let filteredList = [...changeRegistryList];
      
      // 根据名称筛选
      if (params.name) {
        filteredList = filteredList.filter(item => 
          item.name.toLowerCase().includes(params.name.toLowerCase())
        );
      }
      
      // 根据提供方筛选
      if (params.provider) {
        filteredList = filteredList.filter(item => 
          item.provider.toLowerCase().includes(params.provider.toLowerCase())
        );
      }
      
      // 根据状态筛选
      if (params.status !== null && params.status !== undefined) {
        filteredList = filteredList.filter(item => item.status === params.status);
      }
      
      // 根据时间范围筛选
      if (params.timeRange && params.timeRange.length === 2) {
        const startDate = new Date(params.timeRange[0]).getTime();
        const endDate = new Date(params.timeRange[1]).getTime();
        
        filteredList = filteredList.filter(item => {
          const itemDate = new Date(item.submitTime).getTime();
          return itemDate >= startDate && itemDate <= endDate;
        });
      }
      
      // 分页处理
      const start = (params.pageNum - 1) * params.pageSize;
      const end = start + params.pageSize;
      
      resolve({
        code: 200,
        message: 'success',
        data: {
          total: filteredList.length,
          list: filteredList.slice(start, end)
        }
      });
    }, 500);
  });
}

/**
 * 获取变更登记审核详情
 * @param id 变更登记ID
 * @returns 变更登记详情数据
 */
export function getChangeRegistryDetail(id: string) {
  // 如果接口尚未开发完成，使用模拟数据
  return new Promise((resolve) => {
    setTimeout(() => {
      const detail = getChangeRegistryDetailById(id)
      
      resolve({
        code: 200,
        message: 'success',
        data: detail
      })
    }, 500)
  })
}

/**
 * 审核变更登记
 * @param id 变更登记ID
 * @param data 审核数据
 * @returns 审核结果
 */
export function auditChangeRegistry(id: string, data: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 查找对应记录并更新状态
      const record = changeRegistryList.find(item => item.id === id);
      if (record) {
        // 更新状态
        record.status = data.result === 'pass' ? 2 : 3;
        
        // 添加审核记录
        if (!record.auditRecords) {
          record.auditRecords = [];
        }
        
        record.auditRecords.unshift({
          time: new Date().toLocaleString(),
          auditor: '当前用户',
          result: data.result,
          remarks: data.remarks
        });
      }
      
      const mockData = {
        code: 200,
        message: 'success',
        data: {
          success: true
        }
      }
      resolve(mockData);
    }, 500)
  })
  
  // 实际API调用，后续接口开发完成后启用
  // return request({
  //   url: `/registry/change/audit/${id}`,
  //   method: 'post',
  //   data
  // })
} 