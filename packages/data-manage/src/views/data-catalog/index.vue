<template>
  <div class="data-catalog">
    <el-container>
      <!-- 左侧目录树 -->
      <el-aside width="300px">
        <div class="catalog-tree-container">
          <div class="tree-header">
            <span class="title">数据目录</span>
            <el-button
              type="primary"
              link
              size="small"
              @click="handleResetCatalog"
              title="重置默认目录"
            >
              <el-icon><Refresh /></el-icon>
            </el-button>
          </div>
          <el-tree
            ref="treeRef"
            :data="catalogTree"
            :props="{
              label: 'name',
              children: 'children'
            }"
            node-key="id"
            highlight-current
            v-loading="treeLoading"
            element-loading-text="加载中..."
            @node-click="handleNodeClick"
          >
            <template #default="{ node, data }">
              <div class="custom-tree-node">
                <span class="node-label">{{ data.name }}</span>
                <span class="node-code">({{ data.code }})</span>
              </div>
            </template>
          </el-tree>
        </div>
      </el-aside>

      <!-- 右侧子节点列表 -->
      <el-main>
        <div class="catalog-list-header">
          <div class="header-left">
            <el-button type="primary" @click="handleAdd(currentParentNode?.id || null)">
              <el-icon><Plus /></el-icon>新建目录
            </el-button>
          </div>
          <div class="header-right">
            <el-form :inline="true" :model="searchForm">
              <el-form-item label="目录名称">
                <el-input v-model="searchForm.name" placeholder="请输入目录名称" clearable />
              </el-form-item>
              <el-form-item label="目录编号">
                <el-input v-model="searchForm.code" placeholder="请输入目录编号" clearable />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handleSearch">
                  <el-icon><Search /></el-icon>搜索
                </el-button>
                <el-button @click="resetSearch">
                  <el-icon><Refresh /></el-icon>重置
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        
        <div class="data-table-card">
          <el-table
            v-loading="tableLoading"
            :data="displayedChildrenList"
            border
          >
            <el-table-column prop="name" label="目录名称" />
            <el-table-column prop="code" label="目录编号" width="180" />
            <el-table-column prop="creator" label="创建人" width="120" />
            <el-table-column prop="createTime" label="创建时间" width="180" />
            <el-table-column label="操作" width="160" fixed="right">
              <template #default="{ row }">
                <div class="table-actions">
                  <el-button link type="primary" @click="handleEdit(row)">
                    <el-icon><Edit /></el-icon>编辑
                  </el-button>
                  <el-button link type="danger" @click="confirmDelete(row.id)">
                    <el-icon><Delete /></el-icon>删除
                  </el-button>
                </div>
              </template>
            </el-table-column>
            <template #empty>
              <el-empty description="暂无数据"></el-empty>
            </template>
          </el-table>
          
          <!-- 分页控件 -->
          <div class="pagination">
            <el-pagination
              v-model:current-page="pagination.currentPage"
              v-model:page-size="pagination.pageSize"
              :page-sizes="[10, 20, 50, 100]"
              :total="pagination.total"
              layout="total, sizes, prev, pager, next, jumper"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </el-main>
    </el-container>

    <!-- 新建/编辑目录弹窗 -->
    <el-dialog
      v-model="dialogVisible"
      :title="dialogType === 'add' ? '新建目录' : '编辑目录'"
      width="500px"
    >
      <el-form
        ref="formRef"
        :model="formData"
        :rules="formRules"
        label-width="100px"
      >
        <el-form-item label="目录名称" prop="name">
          <el-input v-model="formData.name" placeholder="请输入目录名称" />
        </el-form-item>
        <el-form-item label="目录编号" prop="code">
          <el-input v-model="formData.code" placeholder="请输入目录编号" />
        </el-form-item>
        <el-form-item v-if="dialogType === 'add' && formData.parentId" label="上级目录">
          <el-input v-model="parentNodeName" disabled />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { ElMessage, ElMessageBox, type FormInstance, type FormRules } from 'element-plus'
import { Plus, Edit, Delete, Search, Refresh } from '@element-plus/icons-vue'
import type { CatalogNode } from '@/api/data-catalog'
import {
  getCatalogTree,
  createCatalog,
  updateCatalog,
  deleteCatalog,
  checkCatalogExists,
  getCatalogDetail,
  resetCatalogTree
} from '@/api/data-catalog'

// 目录树相关
const treeRef = ref()
const treeLoading = ref(false)
const tableLoading = ref(false)
const catalogTree = ref<CatalogNode[]>([])
const currentParentNode = ref<CatalogNode | null>(null)
const currentChildrenList = ref<CatalogNode[]>([])

// 目录对话框相关
const dialogVisible = ref(false)
const dialogType = ref<'add' | 'edit'>('add')
const currentEditNodeId = ref<string>('')
const formRef = ref<FormInstance>()
const formData = ref({
  name: '',
  code: '',
  parentId: ''
})

// 获取父节点名称
const parentNodeName = computed(() => {
  if (!formData.value.parentId) return ''
  
  const findNode = (nodes: CatalogNode[], id: string): CatalogNode | null => {
    for (const node of nodes) {
      if (node.id === id) return node
      if (node.children) {
        const found = findNode(node.children, id)
        if (found) return found
      }
    }
    return null
  }
  
  const parentNode = findNode(catalogTree.value, formData.value.parentId)
  return parentNode ? parentNode.name : ''
})

// 表单校验规则
const formRules: FormRules = {
  name: [
    { required: true, message: '请输入目录名称', trigger: 'blur' },
    { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入目录编号', trigger: 'blur' },
    { pattern: /^[a-z0-9-]+$/, message: '只能包含小写字母、数字和横线', trigger: 'blur' }
  ]
}

// 初始化加载
onMounted(async () => {
  // 重置目录树数据，确保包含数据市场、模型市场等目录
  await resetCatalogTree()
  // 加载目录树
  await loadCatalogTree()
  // 默认加载所有根节点
  currentChildrenList.value = catalogTree.value
})

// 加载目录树
const loadCatalogTree = async () => {
  treeLoading.value = true
  try {
    catalogTree.value = await getCatalogTree()
    treeLoading.value = false
  } catch (error) {
    ElMessage.error('加载目录树失败')
    treeLoading.value = false
  }
}

// 重置目录树数据
const handleResetCatalog = async () => {
  try {
    await resetCatalogTree()
    ElMessage.success('目录树数据已重置')
    await loadCatalogTree()
    // 刷新当前视图
    currentParentNode.value = null
    currentChildrenList.value = catalogTree.value
  } catch (error) {
    ElMessage.error('重置目录树数据失败')
    console.error('重置目录树数据失败:', error)
  }
}

// 搜索相关
const searchForm = reactive({
  name: '',
  code: ''
})

// 分页相关
const pagination = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 0
})

// 过滤和分页后的数据列表
const displayedChildrenList = computed(() => {
  // 首先过滤数据
  let filtered = currentChildrenList.value.filter(item => {
    const nameMatch = !searchForm.name || 
      item.name.toLowerCase().includes(searchForm.name.toLowerCase());
    const codeMatch = !searchForm.code || 
      item.code.toLowerCase().includes(searchForm.code.toLowerCase());
    return nameMatch && codeMatch;
  });
  
  // 更新总数
  pagination.total = filtered.length;
  
  // 然后分页
  const start = (pagination.currentPage - 1) * pagination.pageSize;
  const end = start + pagination.pageSize;
  return filtered.slice(start, end);
});

// 搜索
const handleSearch = () => {
  pagination.currentPage = 1;
  // 计算结果会通过 computed 自动更新
};

// 重置搜索
const resetSearch = () => {
  searchForm.name = '';
  searchForm.code = '';
  pagination.currentPage = 1;
  // 计算结果会通过 computed 自动更新
};

// 每页条数改变
const handleSizeChange = (size: number) => {
  pagination.pageSize = size;
  pagination.currentPage = 1;
  // 计算结果会通过 computed 自动更新
};

// 页码改变
const handleCurrentChange = (page: number) => {
  pagination.currentPage = page;
  // 计算结果会通过 computed 自动更新
};

// 点击节点，显示其子节点列表
const handleNodeClick = async (node: CatalogNode) => {
  tableLoading.value = true;
  try {
    currentParentNode.value = node;
    
    // 重置搜索和分页
    resetSearch();
    pagination.currentPage = 1;
    
    // 获取最新的节点详情
    const detail = await getCatalogDetail(node.id);
    if (detail) {
      // 如果有子节点，则展示子节点列表
      if (detail.children && detail.children.length > 0) {
        currentChildrenList.value = detail.children;
      } else {
        // 如果没有子节点，则展示空数组
        currentChildrenList.value = [];
      }
    } else {
      // 如果获取详情失败，则使用当前节点数据
      currentChildrenList.value = node.children || [];
    }
  } catch (error) {
    console.error('获取目录详情失败:', error)
    currentChildrenList.value = node.children || [];
  } finally {
    tableLoading.value = false;
  }
}

// 新建目录
const handleAdd = (parentId: string | null) => {
  dialogType.value = 'add'
  formData.value = {
    name: '',
    code: '',
    parentId: parentId || ''
  }
  dialogVisible.value = true
}

// 编辑目录
const handleEdit = (node: CatalogNode) => {
  dialogType.value = 'edit'
  currentEditNodeId.value = node.id
  formData.value = {
    name: node.name,
    code: node.code,
    parentId: node.parentId || ''
  }
  dialogVisible.value = true
}

// 确认删除目录
const confirmDelete = (id: string) => {
  ElMessageBox.confirm(
    '确定要删除该目录吗？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
      center: true
    }
  )
    .then(async () => {
      await handleDelete(id)
    })
    .catch(() => {
      // 取消删除，不执行任何操作
    })
}

// 删除目录
const handleDelete = async (id: string) => {
  try {
    await deleteCatalog(id)
    ElMessage.success('删除成功')
    await loadCatalogTree()
    
    // 重新加载当前父节点的子节点列表
    if (currentParentNode.value) {
      handleNodeClick(currentParentNode.value)
    } else {
      // 如果当前没有选中父节点，则展示根节点列表
      currentChildrenList.value = catalogTree.value
    }
  } catch (error) {
    ElMessage.error('删除失败')
    console.error('删除目录失败:', error)
  }
}

// 提交表单
const handleSubmit = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        // 检查名称和编号是否重复
        const excludeId = dialogType.value === 'edit' ? currentEditNodeId.value : undefined
        const exists = await checkCatalogExists({
          name: formData.value.name,
          code: formData.value.code,
          excludeId
        })
        
        if (exists) {
          ElMessage.error('目录名称或编号已存在')
          return
        }

        let newNode
        if (dialogType.value === 'add') {
          // 保存新节点的引用
          newNode = await createCatalog(formData.value)
          ElMessage.success('新建成功')
        } else {
          newNode = await updateCatalog(currentEditNodeId.value, formData.value)
          ElMessage.success('更新成功')
        }

        dialogVisible.value = false
        
        // 重新加载完整的目录树
        await loadCatalogTree()
        
        // 刷新当前列表
        if (dialogType.value === 'add') {
          // 如果是新建目录
          if (formData.value.parentId) {
            // 如果有父节点，找到父节点并刷新其子节点列表
            console.log('查找父节点:', formData.value.parentId)
            const parentNode = findNode(catalogTree.value, formData.value.parentId)
            console.log('找到父节点:', parentNode)
            
            if (parentNode) {
              currentParentNode.value = parentNode
              // 直接使用API重新获取父节点详情，确保获取最新的子节点列表
              const detail = await getCatalogDetail(parentNode.id)
              if (detail && detail.children) {
                currentChildrenList.value = detail.children
              } else {
                currentChildrenList.value = parentNode.children || []
              }
            }
          } else {
            // 如果是根节点，重新获取完整的根目录列表
            currentParentNode.value = null
            const freshTree = await getCatalogTree()
            currentChildrenList.value = freshTree
          }
        } else {
          // 如果是编辑
          if (currentParentNode.value) {
            // 编辑成功后，重新加载当前选中节点的子节点列表
            const refreshedParentNode = await getCatalogDetail(currentParentNode.value.id)
            if (refreshedParentNode) {
              currentParentNode.value = refreshedParentNode
              if (refreshedParentNode.children) {
                currentChildrenList.value = refreshedParentNode.children
              } else {
                currentChildrenList.value = []
              }
            }
          } else {
            // 如果没有选中父节点（处于根节点列表），则刷新根节点列表
            const freshTree = await getCatalogTree()
            currentChildrenList.value = freshTree
          }
        }
      } catch (error) {
        ElMessage.error(dialogType.value === 'add' ? '新建失败' : '更新失败')
        console.error('保存目录失败:', error)
      }
    }
  })
}

// 添加查找节点的辅助函数
const findNode = (nodes: CatalogNode[], id: string): CatalogNode | null => {
  for (const node of nodes) {
    if (node.id === id) return node
    if (node.children) {
      const found = findNode(node.children, id)
      if (found) return found
    }
  }
  return null
}
</script>

<style lang="scss" scoped>
.data-catalog {
  height: 100%;
  
  .el-container {
    height: 100%;
  }
  
  .el-aside {
    background-color: white;
    border-right: 1px solid #dcdfe6;
    
    .catalog-tree-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      
      .tree-header {
        padding: 15px;
        border-bottom: 1px solid #dcdfe6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .title {
          font-size: 16px;
          font-weight: 600;
          color: #303133;
        }
      }
      
      .el-tree {
        flex: 1;
        padding: 10px;
        overflow-y: auto;
        
        :deep(.custom-tree-node) {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          font-size: 14px;
          
          .node-label {
            margin-right: 5px;
          }
          
          .node-code {
            font-size: 12px;
            color: #909399;
          }
        }
      }
    }
  }
  
  .el-main {
    padding: 20px;
    background-color: #f5f7fa;
    overflow-y: auto;
    
    .catalog-list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding: 16px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      
      .header-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      
      .header-right {
        display: flex;
        align-items: center;
        
        :deep(.el-form-item) {
          margin-bottom: 0;
        }
      }
    }
    
    .data-table-card {
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      padding: 20px;
      display: flex;
      flex-direction: column;
    }
    
    .el-table {
      margin-bottom: 20px;
      border-radius: 4px;
      
      .table-actions {
        display: flex;
        align-items: center;
        white-space: nowrap;
        
        .el-button {
          padding: 4px 8px;
          margin-right: 8px;
        }
        
        .el-button:last-child {
          margin-right: 0;
        }
      }
    }
    
    .pagination {
      display: flex;
      justify-content: flex-end;
      margin-top: 0;
    }
  }
}
</style> 