import request from '@/utils/request'

// 目录节点接口
export interface CatalogNode {
  id: string
  name: string
  code: string
  parentId: string | null
  children?: CatalogNode[]
  createTime: string
  creator: string
  dataSourceCount: number
  childrenCount: number
}

// 模拟数据
const defaultCatalogTree: CatalogNode[] = [
  {
    id: '1',
    name: '数据市场',
    code: 'data-market',
    parentId: null,
    createTime: '2024-03-18 10:00:00',
    creator: 'admin',
    dataSourceCount: 16,
    childrenCount: 4,
    children: [
      {
        id: '1-1',
        name: '基础数据',
        code: 'basic-data',
        parentId: '1',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 4,
        childrenCount: 4,
        children: [
          {
            id: '1-1-1',
            name: '用户数据',
            code: 'user-data',
            parentId: '1-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 3,
            childrenCount: 0
          },
          {
            id: '1-1-2',
            name: '交易数据',
            code: 'transaction-data',
            parentId: '1-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 5,
            childrenCount: 0
          },
          {
            id: '1-1-3',
            name: '企业数据',
            code: 'enterprise-data',
            parentId: '1-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '1-1-4',
            name: '地理数据',
            code: 'geography-data',
            parentId: '1-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 4,
            childrenCount: 0
          }
        ]
      },
      {
        id: '1-2',
        name: '行业数据',
        code: 'industry-data',
        parentId: '1',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 8,
        childrenCount: 4,
        children: [
          {
            id: '1-2-1',
            name: '金融数据',
            code: 'finance-data',
            parentId: '1-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 6,
            childrenCount: 0
          },
          {
            id: '1-2-2',
            name: '医疗数据',
            code: 'medical-data',
            parentId: '1-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 3,
            childrenCount: 0
          },
          {
            id: '1-2-3',
            name: '教育数据',
            code: 'education-data',
            parentId: '1-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 4,
            childrenCount: 0
          },
          {
            id: '1-2-4',
            name: '零售数据',
            code: 'retail-data',
            parentId: '1-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 3,
            childrenCount: 0
          }
        ]
      },
      {
        id: '1-3',
        name: '智能数据',
        code: 'intelligent-data',
        parentId: '1',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 6,
        childrenCount: 3,
        children: [
          {
            id: '1-3-1',
            name: '标注数据',
            code: 'labeled-data',
            parentId: '1-3',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '1-3-2',
            name: '训练数据',
            code: 'training-data',
            parentId: '1-3',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 3,
            childrenCount: 0
          },
          {
            id: '1-3-3',
            name: '测试数据',
            code: 'test-data',
            parentId: '1-3',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          }
        ]
      },
      {
        id: '1-4',
        name: '媒体数据',
        code: 'media-data',
        parentId: '1',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 10,
        childrenCount: 4,
        children: [
          {
            id: '1-4-1',
            name: '图片数据',
            code: 'image-data',
            parentId: '1-4',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 3,
            childrenCount: 0
          },
          {
            id: '1-4-2',
            name: '视频数据',
            code: 'video-data',
            parentId: '1-4',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '1-4-3',
            name: '音频数据',
            code: 'audio-data',
            parentId: '1-4',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '1-4-4',
            name: '文本数据',
            code: 'text-data',
            parentId: '1-4',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 3,
            childrenCount: 0
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: '模型市场',
    code: 'model-market',
    parentId: null,
    createTime: '2024-03-18 10:00:00',
    creator: 'admin',
    dataSourceCount: 9,
    childrenCount: 3,
    children: [
      {
        id: '2-1',
        name: '深度学习',
        code: 'deep-learning',
        parentId: '2',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 3,
        childrenCount: 3,
        children: [
          {
            id: '2-1-1',
            name: '图像识别',
            code: 'image-recognition',
            parentId: '2-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '2-1-2',
            name: '语音识别',
            code: 'speech-recognition',
            parentId: '2-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          },
          {
            id: '2-1-3',
            name: '自然语言处理',
            code: 'nlp',
            parentId: '2-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 3,
            childrenCount: 0
          }
        ]
      },
      {
        id: '2-2',
        name: '机器学习',
        code: 'machine-learning',
        parentId: '2',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 3,
        childrenCount: 3,
        children: [
          {
            id: '2-2-1',
            name: '分类算法',
            code: 'classification',
            parentId: '2-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '2-2-2',
            name: '回归算法',
            code: 'regression',
            parentId: '2-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '2-2-3',
            name: '聚类算法',
            code: 'clustering',
            parentId: '2-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          }
        ]
      },
      {
        id: '2-3',
        name: '预训练模型',
        code: 'pretrained-models',
        parentId: '2',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 3,
        childrenCount: 3,
        children: [
          {
            id: '2-3-1',
            name: 'BERT',
            code: 'bert-model',
            parentId: '2-3',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          },
          {
            id: '2-3-2',
            name: 'GPT',
            code: 'gpt-model',
            parentId: '2-3',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          },
          {
            id: '2-3-3',
            name: 'ResNet',
            code: 'resnet-model',
            parentId: '2-3',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          }
        ]
      }
    ]
  },
  {
    id: '3',
    name: '应用市场',
    code: 'app-market',
    parentId: null,
    createTime: '2024-03-18 10:00:00',
    creator: 'admin',
    dataSourceCount: 9,
    childrenCount: 3,
    children: [
      {
        id: '3-1',
        name: '效率工具',
        code: 'efficiency-tools',
        parentId: '3',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 3,
        childrenCount: 3,
        children: [
          {
            id: '3-1-1',
            name: '办公应用',
            code: 'office-apps',
            parentId: '3-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '3-1-2',
            name: '在线协作',
            code: 'online-collaboration',
            parentId: '3-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          },
          {
            id: '3-1-3',
            name: '项目管理',
            code: 'project-management',
            parentId: '3-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          }
        ]
      },
      {
        id: '3-2',
        name: '数据处理',
        code: 'data-processing',
        parentId: '3',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 3,
        childrenCount: 3,
        children: [
          {
            id: '3-2-1',
            name: '数据分析',
            code: 'data-analysis',
            parentId: '3-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '3-2-2',
            name: '数据可视化',
            code: 'data-visualization',
            parentId: '3-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '3-2-3',
            name: '数据清洗',
            code: 'data-cleaning',
            parentId: '3-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          }
        ]
      },
      {
        id: '3-3',
        name: '人工智能',
        code: 'ai-applications',
        parentId: '3',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 3,
        childrenCount: 3,
        children: [
          {
            id: '3-3-1',
            name: 'AI助手',
            code: 'ai-assistant',
            parentId: '3-3',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          },
          {
            id: '3-3-2',
            name: '智能识别',
            code: 'intelligent-recognition',
            parentId: '3-3',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '3-3-3',
            name: '机器学习',
            code: 'ml-applications',
            parentId: '3-3',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          }
        ]
      }
    ]
  },
  {
    id: '4',
    name: '服务市场',
    code: 'service-market',
    parentId: null,
    createTime: '2024-03-18 10:00:00',
    creator: 'admin',
    dataSourceCount: 9,
    childrenCount: 3,
    children: [
      {
        id: '4-1',
        name: '技术开发',
        code: 'tech-development',
        parentId: '4',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 3,
        childrenCount: 3,
        children: [
          {
            id: '4-1-1',
            name: '定制开发',
            code: 'customized-dev',
            parentId: '4-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          },
          {
            id: '4-1-2',
            name: '系统集成',
            code: 'system-integration',
            parentId: '4-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '4-1-3',
            name: '技术升级',
            code: 'tech-upgrade',
            parentId: '4-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          }
        ]
      },
      {
        id: '4-2',
        name: '技术服务',
        code: 'tech-services',
        parentId: '4',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 3,
        childrenCount: 3,
        children: [
          {
            id: '4-2-1',
            name: '咨询服务',
            code: 'consulting-services',
            parentId: '4-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          },
          {
            id: '4-2-2',
            name: '运维服务',
            code: 'maintenance-services',
            parentId: '4-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '4-2-3',
            name: '培训服务',
            code: 'training-services',
            parentId: '4-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          }
        ]
      },
      {
        id: '4-3',
        name: '解决方案',
        code: 'solutions',
        parentId: '4',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 3,
        childrenCount: 3,
        children: [
          {
            id: '4-3-1',
            name: '行业解决方案',
            code: 'industry-solutions',
            parentId: '4-3',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '4-3-2',
            name: '通用解决方案',
            code: 'general-solutions',
            parentId: '4-3',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          },
          {
            id: '4-3-3',
            name: '定制解决方案',
            code: 'custom-solutions',
            parentId: '4-3',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          }
        ]
      }
    ]
  },
  {
    id: '5',
    name: '需求广场',
    code: 'demand-plaza',
    parentId: null,
    createTime: '2024-03-18 10:00:00',
    creator: 'admin',
    dataSourceCount: 9,
    childrenCount: 3,
    children: [
      {
        id: '5-1',
        name: '定制开发',
        code: 'custom-development',
        parentId: '5',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 3,
        childrenCount: 3,
        children: [
          {
            id: '5-1-1',
            name: '平台开发',
            code: 'platform-dev',
            parentId: '5-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          },
          {
            id: '5-1-2',
            name: '系统开发',
            code: 'system-dev',
            parentId: '5-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '5-1-3',
            name: '应用开发',
            code: 'app-dev',
            parentId: '5-1',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          }
        ]
      },
      {
        id: '5-2',
        name: '模型定制',
        code: 'model-customization',
        parentId: '5',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 3,
        childrenCount: 3,
        children: [
          {
            id: '5-2-1',
            name: 'AI模型',
            code: 'ai-models',
            parentId: '5-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '5-2-2',
            name: '算法模型',
            code: 'algorithm-models',
            parentId: '5-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '5-2-3',
            name: '预测模型',
            code: 'prediction-models',
            parentId: '5-2',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          }
        ]
      },
      {
        id: '5-3',
        name: '数据服务',
        code: 'data-services',
        parentId: '5',
        createTime: '2024-03-18 10:01:00',
        creator: 'admin',
        dataSourceCount: 3,
        childrenCount: 3,
        children: [
          {
            id: '5-3-1',
            name: '数据采集',
            code: 'data-collection',
            parentId: '5-3',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 1,
            childrenCount: 0
          },
          {
            id: '5-3-2',
            name: '数据处理',
            code: 'data-processing-services',
            parentId: '5-3',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          },
          {
            id: '5-3-3',
            name: '数据分析',
            code: 'data-analysis-services',
            parentId: '5-3',
            createTime: '2024-03-18 10:02:00',
            creator: 'admin',
            dataSourceCount: 2,
            childrenCount: 0
          }
        ]
      }
    ]
  }
]

// localStorage存储键名
const STORAGE_KEY = 'mock_catalog_tree'

// 获取模拟数据，优先从localStorage读取，如果没有则使用默认值
const getMockCatalogTree = (): CatalogNode[] => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY)
    if (storedData) {
      // 尝试解析数据
      const parsedData = JSON.parse(storedData)
      // 验证数据是否包含目录树的基本结构
      if (Array.isArray(parsedData) && parsedData.length > 0) {
        return parsedData
      }
    }
  } catch (e) {
    console.error('读取本地存储的目录数据失败:', e)
  }
  
  // 如果本地存储没有数据、数据格式不正确或读取失败，则使用默认数据并存储到localStorage
  console.log('使用默认目录树数据并保存到localStorage')
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultCatalogTree))
  return defaultCatalogTree
}

// 保存模拟数据到localStorage
const saveMockCatalogTree = (data: CatalogNode[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (e) {
    console.error('保存目录数据到本地存储失败:', e)
  }
}

// 获取目录树
export function getCatalogTree() {
  // 从localStorage获取最新数据
  const mockCatalogTree = getMockCatalogTree()
  
  // 返回深拷贝，确保每次调用都返回一个新的对象，避免响应式引用问题
  return Promise.resolve(JSON.parse(JSON.stringify(mockCatalogTree)))
  
  // 实际API调用
  // return request<CatalogNode[]>({
  //   url: '/catalog/tree',
  //   method: 'get'
  // })
}

// 重置目录树数据到默认值
export function resetCatalogTree() {
  // 将默认数据写入localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultCatalogTree))
  console.log('目录树数据已重置为默认值')
  return Promise.resolve(true)
}

// 检查目录名称或编号是否重复
export function checkCatalogExists(params: {
  name?: string
  code?: string
  excludeId?: string
}) {
  // 模拟检查逻辑
  return Promise.resolve(false)

  // 实际API调用
  // return request<boolean>({
  //   url: '/catalog/check',
  //   method: 'get',
  //   params
  // })
}

// 新建目录
export function createCatalog(data: {
  name: string
  code: string
  parentId?: string
}) {
  // 模拟新建逻辑
  // 格式化时间为 yyyy-MM-dd HH:mm:ss
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
  const newNode: CatalogNode = {
    id: Date.now().toString(),
    name: data.name,
    code: data.code,
    parentId: data.parentId || null,
    createTime: formattedTime,
    creator: 'admin',
    dataSourceCount: 0,
    childrenCount: 0
  }
  
  // 获取最新的模拟数据
  const mockCatalogTree = getMockCatalogTree()
  
  // 将新节点添加到模拟数据树中
  if (data.parentId) {
    // 如果有父节点，将新节点添加到父节点的children中
    const findAndAddToParent = (nodes: CatalogNode[], parentId: string): boolean => {
      for (const node of nodes) {
        if (node.id === parentId) {
          // 初始化children数组（如果不存在）
          if (!node.children) {
            node.children = [];
          }
          node.children.push(newNode);
          // 更新父节点的子目录数量
          node.childrenCount = (node.children.length || 0);
          return true;
        }
        if (node.children) {
          if (findAndAddToParent(node.children, parentId)) {
            return true;
          }
        }
      }
      return false;
    }
    
    findAndAddToParent(mockCatalogTree, data.parentId);
  } else {
    // 如果没有父节点，则直接添加到根节点
    mockCatalogTree.push(newNode);
  }
  
  // 保存更新后的数据到localStorage
  saveMockCatalogTree(mockCatalogTree)
  
  return Promise.resolve(newNode)

  // 实际API调用
  // return request<CatalogNode>({
  //   url: '/catalog',
  //   method: 'post',
  //   data
  // })
}

// 更新目录
export function updateCatalog(id: string, data: {
  name?: string
  code?: string
  parentId?: string
}) {
  // 获取最新的模拟数据
  const mockCatalogTree = getMockCatalogTree()
  
  // 模拟更新逻辑
  let updatedNode: CatalogNode | null = null;
  
  // 在mockCatalogTree中查找并更新节点
  const findAndUpdateNode = (nodes: CatalogNode[], targetId: string): boolean => {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id === targetId) {
        // 更新节点信息
        nodes[i].name = data.name || nodes[i].name;
        nodes[i].code = data.code || nodes[i].code;
        // 如果更改了父节点ID，需要在其他地方处理移动逻辑
        if (data.parentId !== undefined) {
          nodes[i].parentId = data.parentId;
        }
        updatedNode = { ...nodes[i] };
        return true;
      }
      // 安全地检查和访问children属性
      const children = nodes[i].children;
      if (children && children.length > 0) {
        if (findAndUpdateNode(children, targetId)) {
          return true;
        }
      }
    }
    return false;
  };
  
  findAndUpdateNode(mockCatalogTree, id);
  
  // 保存更新后的数据到localStorage
  saveMockCatalogTree(mockCatalogTree)
  
  // 格式化时间为 yyyy-MM-dd HH:mm:ss
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
  return Promise.resolve(updatedNode || {
    id,
    name: data.name || '',
    code: data.code || '',
    parentId: data.parentId || null,
    createTime: formattedTime,
    creator: 'admin',
    dataSourceCount: 0,
    childrenCount: 0
  })

  // 实际API调用
  // return request<CatalogNode>({
  //   url: `/catalog/${id}`,
  //   method: 'put',
  //   data
  // })
}

// 获取目录详情
export function getCatalogDetail(id: string) {
  // 获取最新的模拟数据
  const mockCatalogTree = getMockCatalogTree()
  
  // 模拟获取详情逻辑
  const findNode = (nodes: CatalogNode[], targetId: string): CatalogNode | null => {
    for (const node of nodes) {
      if (node.id === targetId) {
        return node
      }
      if (node.children) {
        const found = findNode(node.children, targetId)
        if (found) {
          return found
        }
      }
    }
    return null
  }

  const node = findNode(mockCatalogTree, id)
  
  // 创建节点的深拷贝，确保返回独立的对象而不是直接引用
  const clonedNode = node ? JSON.parse(JSON.stringify(node)) : null
  
  return Promise.resolve(clonedNode)

  // 实际API调用
  // return request<CatalogNode>({
  //   url: `/catalog/${id}`,
  //   method: 'get'
  // })
}

// 删除目录
export function deleteCatalog(id: string) {
  // 获取最新的模拟数据
  const mockCatalogTree = getMockCatalogTree()
  
  // 模拟删除逻辑
  const removeNode = (nodes: CatalogNode[], targetId: string): boolean => {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id === targetId) {
        // 从数组中删除该节点
        nodes.splice(i, 1);
        return true;
      }
      // 安全地检查和访问children属性
      const children = nodes[i].children;
      if (children && children.length > 0) {
        const removed = removeNode(children, targetId);
        if (removed) {
          // 更新父节点的子目录数量
          nodes[i].childrenCount = (nodes[i].children?.length || 0);
          return true;
        }
      }
    }
    return false;
  };
  
  removeNode(mockCatalogTree, id);
  
  // 保存更新后的数据到localStorage
  saveMockCatalogTree(mockCatalogTree)
  
  return Promise.resolve(true)

  // 实际API调用
  // return request({
  //   url: `/catalog/${id}`,
  //   method: 'delete'
  // })
} 