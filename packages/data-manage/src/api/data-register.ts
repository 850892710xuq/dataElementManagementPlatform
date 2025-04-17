import axios from 'axios'

// 获取登记列表
export function getRegistrationList(params) {
  // 模拟API请求
  return new Promise((resolve) => {
    setTimeout(() => {
      // 模拟后端数据
      const list = Array.from({ length: 20 }, (_, index) => ({
        id: `${10000 + index}`,
        registerNo: `REG${202400 + index}`,
        resourceName: `测试数据资源${index + 1}`,
        dataType: ['mysql', 'gaussdb', 'report', 'file', 'api'][index % 5],
        registerStatus: ['initial', 'reviewing', 'registered', 'changing', 'cancelling', 'cancelled'][index % 6],
        registerTime: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        updateTime: new Date(Date.now() - (index % 10) * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + ' ' + 
                    new Date(Date.now() - (index % 10) * 24 * 60 * 60 * 1000).toISOString().split('T')[1].slice(0, 8),
        dataSource: `数据来源${index + 1}`,
        registerEntity: `登记主体${index + 1}`,
        description: `这是测试数据资源${index + 1}的描述信息，包含了数据资源的基本情况和用途等。`,
        dataVolume: (index + 1) * 1000,
        price: parseFloat(((index + 1) * 10.5).toFixed(2)),
        resourceDetails: {
          // 根据不同类型给出不同的详情
          ...(index % 5 === 0 ? {
            dbName: `test_db_${index}`,
            dbHost: '192.168.1.100',
            dbPort: '3306',
            dbUser: 'test_user'
          } : {}),
          ...(index % 5 === 2 ? {
            reportTitle: `数据报告${index}`,
            reportAuthor: `作者${index}`,
            publishDate: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
          } : {})
        },
        // 附件列表
        attachments: Array.from({ length: index % 3 + 1 }, (_, i) => ({
          fileName: `附件${i + 1}.pdf`,
          fileType: 'application/pdf',
          fileSize: (i + 1) * 1024 + 'KB',
          uploadTime: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          fileId: `file_${index}_${i}`
        })),
        // 审核信息
        auditInfo: index % 6 !== 0 ? {
          status: index % 3 === 0 ? 'pending' : (index % 3 === 1 ? 'approved' : 'rejected'),
          auditor: `审核员${index % 5 + 1}`,
          auditTime: new Date(Date.now() - (index % 10) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          comments: index % 3 === 2 ? '存在数据质量问题，需要重新提交' : '审核通过，符合要求'
        } : null
      }))

      // 筛选数据
      const filteredList = list.filter(item => {
        let match = true
        
        if (params.registerNo && !item.registerNo.includes(params.registerNo)) {
          match = false
        }
        
        if (params.resourceName && !item.resourceName.includes(params.resourceName)) {
          match = false
        }
        
        if (params.dataType && item.dataType !== params.dataType) {
          match = false
        }
        
        if (params.registerStatus && item.registerStatus !== params.registerStatus) {
          match = false
        }
        
        return match
      })

      // 分页
      const startIndex = (params.page - 1) * params.pageSize
      const endIndex = startIndex + params.pageSize
      const pageData = filteredList.slice(startIndex, endIndex)

      resolve({
        code: 200,
        message: 'success',
        data: {
          list: pageData,
          total: filteredList.length
        }
      })
    }, 500)
  })
}

// 获取登记详情
export function getRegistrationDetail(id) {
  // 模拟API请求
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = parseInt(id) - 10000
      
      // 模拟数据
      const detail = {
        id: `${10000 + index}`,
        registerNo: `REG${202400 + index}`,
        resourceName: `测试数据资源${index + 1}`,
        dataType: ['mysql', 'gaussdb', 'report', 'file', 'api'][index % 5],
        registerStatus: ['initial', 'reviewing', 'registered', 'changing', 'cancelling', 'cancelled'][index % 6],
        registerTime: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        updateTime: new Date(Date.now() - (index % 10) * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + ' ' + 
                    new Date(Date.now() - (index % 10) * 24 * 60 * 60 * 1000).toISOString().split('T')[1].slice(0, 8),
        dataSource: `数据来源${index + 1}`,
        registerEntity: `登记主体${index + 1}`,
        description: `这是测试数据资源${index + 1}的描述信息，包含了数据资源的基本情况和用途等。`,
        dataVolume: (index + 1) * 1000,
        price: parseFloat(((index + 1) * 10.5).toFixed(2)),
        resourceDetails: {
          // 根据不同类型给出不同的详情
          ...(index % 5 === 0 ? {
            dbName: `test_db_${index}`,
            dbHost: '192.168.1.100',
            dbPort: '3306',
            dbUser: 'test_user'
          } : {}),
          ...(index % 5 === 2 ? {
            reportTitle: `数据报告${index}`,
            reportAuthor: `作者${index}`,
            publishDate: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
          } : {})
        },
        // 附件列表
        attachments: Array.from({ length: index % 3 + 1 }, (_, i) => ({
          fileName: `附件${i + 1}.pdf`,
          fileType: 'application/pdf',
          fileSize: (i + 1) * 1024 + 'KB',
          uploadTime: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          fileId: `file_${index}_${i}`
        })),
        // 审核信息
        auditInfo: index % 6 !== 0 ? {
          status: index % 3 === 0 ? 'pending' : (index % 3 === 1 ? 'approved' : 'rejected'),
          auditor: `审核员${index % 5 + 1}`,
          auditTime: new Date(Date.now() - (index % 10) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          comments: index % 3 === 2 ? '存在数据质量问题，需要重新提交' : '审核通过，符合要求'
        } : null
      }

      resolve({
        code: 200,
        message: 'success',
        data: detail
      })
    }, 300)
  })
}

// 提交初始登记
export function submitInitialRegistration(data) {
  // 模拟API请求
  return new Promise((resolve) => {
    setTimeout(() => {
      // 获取格式化的当前时间作为更新时间
      const now = new Date();
      const currentDate = now.toISOString().split('T')[0];
      const currentTime = now.toISOString().split('T')[1].slice(0, 8);
      const formattedDateTime = `${currentDate} ${currentTime}`;
      
      resolve({
        code: 200,
        message: 'success',
        data: {
          id: new Date().getTime().toString(),
          registerNo: `REG${Math.floor(Math.random() * 100000)}`,
          ...data,
          registerTime: currentDate,
          updateTime: formattedDateTime
        }
      })
    }, 800)
  })
}

// 提交变更登记
export function submitChangeRegistration(data) {
  // 模拟API请求
  return new Promise((resolve) => {
    setTimeout(() => {
      // 获取格式化的当前时间作为更新时间
      const now = new Date();
      const currentDate = now.toISOString().split('T')[0];
      const currentTime = now.toISOString().split('T')[1].slice(0, 8);
      const formattedDateTime = `${currentDate} ${currentTime}`;
      
      resolve({
        code: 200,
        message: 'success',
        data: {
          ...data,
          updateTime: formattedDateTime
        }
      })
    }, 800)
  })
}

// 提交注销登记
export function submitCancelRegistration(data) {
  // 模拟API请求
  return new Promise((resolve) => {
    setTimeout(() => {
      // 获取格式化的当前时间作为更新时间
      const now = new Date();
      const currentDate = now.toISOString().split('T')[0];
      const currentTime = now.toISOString().split('T')[1].slice(0, 8);
      const formattedDateTime = `${currentDate} ${currentTime}`;
      
      resolve({
        code: 200,
        message: 'success',
        data: {
          ...data,
          updateTime: formattedDateTime
        }
      })
    }, 800)
  })
}

// 删除登记信息
export function deleteRegistration(id) {
  // 模拟API请求
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        message: 'success',
        data: null
      })
    }, 500)
  })
}

// 上传文件
export function uploadFile(file) {
  // 在实际应用中，这里应该使用FormData上传文件到服务器
  // 这里只是模拟上传过程
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        message: 'success',
        data: {
          fileId: `file_${new Date().getTime()}`,
          fileName: file.name,
          fileUrl: URL.createObjectURL(file)
        }
      })
    }, 1000)
  })
}

// 下载文件
export function downloadFile(fileId) {
  // 模拟下载文件
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        message: 'success',
        data: {
          fileUrl: `https://example.com/files/${fileId}`
        }
      })
    }, 500)
  })
}

// 审核通过
export function approveRegistration(id) {
  // 模拟API请求
  return new Promise((resolve) => {
    setTimeout(() => {
      // 获取格式化的当前时间作为更新时间
      const now = new Date();
      const currentDate = now.toISOString().split('T')[0];
      const currentTime = now.toISOString().split('T')[1].slice(0, 8);
      const formattedDateTime = `${currentDate} ${currentTime}`;
      
      resolve({
        code: 200,
        message: 'success',
        data: {
          id,
          registerStatus: 'registered', // 设置为已登记状态
          updateTime: formattedDateTime, // 更新时间为当前时间
          auditInfo: {
            status: 'approved',
            auditor: '系统管理员',
            auditTime: formattedDateTime,
            comments: '审核通过，符合要求'
          }
        }
      })
    }, 500)
  })
} 