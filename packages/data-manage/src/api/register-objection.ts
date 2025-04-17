import axios from 'axios'

// 数据公示状态
export enum PublicationStatus {
  ONGOING = 'ongoing',   // 公示中
  COMPLETED = 'completed',  // 公示完成
  CANCELLED = 'cancelled',  // 已取消
}

// 异议处理状态
export enum ObjectionStatus {
  PENDING = 'pending',    // 待处理
  PROCESSING = 'processing', // 处理中
  RESOLVED = 'resolved',   // 已解决
  REJECTED = 'rejected',   // 已驳回
}

// 数据公示信息接口
export interface PublicationItem {
  id: string;
  dataName: string;
  dataType: string;
  description: string;
  startTime: string;
  endTime: string;
  status: PublicationStatus;
  objectionCount: number;  // 异议数量
}

// 异议信息接口
export interface ObjectionItem {
  id: string;
  publicationId: string;  // 关联的公示ID
  dataName: string;       // 数据名称
  objectorName: string;   // 异议人姓名/账号
  content: string;        // 异议内容
  submitTime: string;     // 提交时间
  status: ObjectionStatus; // 处理状态
  reply?: string;         // 回复内容
  replyTime?: string;     // 回复时间
  handler?: string;       // 处理人
}

// 获取数据公示列表
export function getPublicationList(params: {
  page: number;
  pageSize: number;
  dataName?: string;
  dataType?: string;
  status?: PublicationStatus;
}) {
  // 模拟API请求
  return new Promise((resolve) => {
    setTimeout(() => {
      // 模拟后端数据
      const list = Array.from({ length: 20 }, (_, index) => ({
        id: `pub${10000 + index}`,
        dataName: `测试数据资源${index + 1}`,
        dataType: ['mysql', 'gaussdb', 'report', 'file', 'api'][index % 5],
        description: `这是测试数据资源${index + 1}的描述信息，包含了数据资源的基本情况和用途等。`,
        startTime: new Date(Date.now() - (index + 10) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        endTime: new Date(Date.now() + (20 - index) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status: index < 15 ? PublicationStatus.ONGOING : 
                (index === 15 ? PublicationStatus.CANCELLED : PublicationStatus.COMPLETED),
        objectionCount: index % 5
      }));

      // 筛选数据
      const filteredList = list.filter(item => {
        let match = true;
        
        if (params.dataName && !item.dataName.includes(params.dataName)) {
          match = false;
        }
        
        if (params.dataType && item.dataType !== params.dataType) {
          match = false;
        }
        
        if (params.status && item.status !== params.status) {
          match = false;
        }
        
        return match;
      });

      // 分页
      const startIndex = (params.page - 1) * params.pageSize;
      const endIndex = startIndex + params.pageSize;
      const pageData = filteredList.slice(startIndex, endIndex);

      resolve({
        code: 200,
        message: 'success',
        data: {
          list: pageData,
          total: filteredList.length
        }
      });
    }, 500);
  });
}

// 获取异议列表
export function getObjectionList(params: {
  page: number;
  pageSize: number;
  dataName?: string;
  status?: ObjectionStatus;
  publicationId?: string;
}) {
  // 模拟API请求
  return new Promise((resolve) => {
    setTimeout(() => {
      // 模拟后端数据
      const list = Array.from({ length: 30 }, (_, index) => ({
        id: `obj${10000 + index}`,
        publicationId: `pub${10000 + (index % 20)}`,
        dataName: `测试数据资源${(index % 20) + 1}`,
        objectorName: `用户${index + 1}`,
        content: `我对该数据资源有异议，理由是：${index % 3 === 0 ? '数据质量存在问题' : 
                  (index % 3 === 1 ? '数据来源不明确' : '数据描述不准确')}`,
        submitTime: new Date(Date.now() - index * 12 * 60 * 60 * 1000).toISOString().split('T')[0] + ' ' +
                    new Date(Date.now() - index * 12 * 60 * 60 * 1000).toISOString().split('T')[1].slice(0, 8),
        status: index % 4 === 0 ? ObjectionStatus.PENDING :
                (index % 4 === 1 ? ObjectionStatus.PROCESSING :
                (index % 4 === 2 ? ObjectionStatus.RESOLVED : ObjectionStatus.REJECTED)),
        reply: index % 4 > 1 ? `感谢您的反馈，我们已经${index % 4 === 2 ? '采纳了您的建议并进行了修改' : '审核了您的异议，但未发现相关问题'}` : undefined,
        replyTime: index % 4 > 1 ? new Date(Date.now() - (index - 2) * 12 * 60 * 60 * 1000).toISOString().split('T')[0] + ' ' + 
                    new Date(Date.now() - (index - 2) * 12 * 60 * 60 * 1000).toISOString().split('T')[1].slice(0, 8) : undefined,
        handler: index % 4 > 1 ? `管理员${index % 3 + 1}` : undefined
      }));

      // 筛选数据
      const filteredList = list.filter(item => {
        let match = true;
        
        if (params.dataName && !item.dataName.includes(params.dataName)) {
          match = false;
        }
        
        if (params.status && item.status !== params.status) {
          match = false;
        }
        
        if (params.publicationId && item.publicationId !== params.publicationId) {
          match = false;
        }
        
        return match;
      });

      // 分页
      const startIndex = (params.page - 1) * params.pageSize;
      const endIndex = startIndex + params.pageSize;
      const pageData = filteredList.slice(startIndex, endIndex);

      resolve({
        code: 200,
        message: 'success',
        data: {
          list: pageData,
          total: filteredList.length
        }
      });
    }, 500);
  });
}

// 获取异议详情
export function getObjectionDetail(id: string) {
  // 模拟API请求
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = parseInt(id.replace('obj', '')) - 10000;
      
      // 模拟数据
      const detail = {
        id: `obj${10000 + index}`,
        publicationId: `pub${10000 + (index % 20)}`,
        dataName: `测试数据资源${(index % 20) + 1}`,
        objectorName: `用户${index + 1}`,
        content: `我对该数据资源有异议，理由是：${index % 3 === 0 ? '数据质量存在问题' : 
                 (index % 3 === 1 ? '数据来源不明确' : '数据描述不准确')}，希望能够得到解决。`,
        submitTime: new Date(Date.now() - index * 12 * 60 * 60 * 1000).toISOString().split('T')[0] + ' ' +
                    new Date(Date.now() - index * 12 * 60 * 60 * 1000).toISOString().split('T')[1].slice(0, 8),
        status: index % 4 === 0 ? ObjectionStatus.PENDING :
                (index % 4 === 1 ? ObjectionStatus.PROCESSING :
                (index % 4 === 2 ? ObjectionStatus.RESOLVED : ObjectionStatus.REJECTED)),
        reply: index % 4 > 1 ? `感谢您的反馈，我们已经${index % 4 === 2 ? '采纳了您的建议并进行了修改。具体修改内容包括：1. 更新了数据描述；2. 补充了数据来源说明；3. 提供了更详细的数据字段说明。' 
                                        : '审核了您的异议，但未发现相关问题。具体原因是：该数据已经经过多轮验证，符合质量标准。如有其他问题，欢迎再次反馈。'}` : undefined,
        replyTime: index % 4 > 1 ? new Date(Date.now() - (index - 2) * 12 * 60 * 60 * 1000).toISOString().split('T')[0] + ' ' + 
                    new Date(Date.now() - (index - 2) * 12 * 60 * 60 * 1000).toISOString().split('T')[1].slice(0, 8) : undefined,
        handler: index % 4 > 1 ? `管理员${index % 3 + 1}` : undefined,
        // 额外的详情信息
        objectorContact: `user${index + 1}@example.com`,
        publicationInfo: {
          dataName: `测试数据资源${(index % 20) + 1}`,
          dataType: ['mysql', 'gaussdb', 'report', 'file', 'api'][index % 5],
          startTime: new Date(Date.now() - (index + 10) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          endTime: new Date(Date.now() + (20 - index) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        }
      };

      resolve({
        code: 200,
        message: 'success',
        data: detail
      });
    }, 300);
  });
}

// 回复异议
export function replyObjection(data: {
  id: string;
  reply: string;
  status: ObjectionStatus;
}) {
  // 模拟API请求
  return new Promise((resolve) => {
    setTimeout(() => {
      // 获取当前时间
      const now = new Date();
      const currentDate = now.toISOString().split('T')[0];
      const currentTime = now.toISOString().split('T')[1].slice(0, 8);
      const formattedDateTime = `${currentDate} ${currentTime}`;
      
      resolve({
        code: 200,
        message: 'success',
        data: {
          ...data,
          replyTime: formattedDateTime,
          handler: '当前管理员'
        }
      });
    }, 500);
  });
}

// 获取数据类型选项
export function getDataTypeOptions() {
  return [
    { value: 'mysql', label: 'MySQL数据库' },
    { value: 'gaussdb', label: 'GaussDB数据库' },
    { value: 'report', label: '数据报告' },
    { value: 'file', label: '数据文件' },
    { value: 'api', label: 'API接口' }
  ];
}

// 获取异议状态选项
export function getObjectionStatusOptions() {
  return [
    { value: ObjectionStatus.PENDING, label: '待处理' },
    { value: ObjectionStatus.PROCESSING, label: '处理中' },
    { value: ObjectionStatus.RESOLVED, label: '已解决' },
    { value: ObjectionStatus.REJECTED, label: '已驳回' }
  ];
}

// 获取公示状态选项
export function getPublicationStatusOptions() {
  return [
    { value: PublicationStatus.ONGOING, label: '公示中' },
    { value: PublicationStatus.COMPLETED, label: '公示完成' },
    { value: PublicationStatus.CANCELLED, label: '已取消' }
  ];
} 