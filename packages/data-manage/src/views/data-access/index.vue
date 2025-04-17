<template>
  <div class="data-access">
    <!-- 搜索和操作区域 -->
    <div class="action-bar">
      <div class="action-bar-left">
        <el-button type="primary" @click="handleAdd" class="add-btn">
          <el-icon><Plus /></el-icon>新增数据源
        </el-button>
        <el-button @click="resetToInitialData" type="info" plain>
          <el-icon><Refresh /></el-icon>重置示例数据
        </el-button>
      </div>
      <div class="action-bar-right">
        <el-form :inline="true" :model="searchForm">
          <el-form-item label="数据源名称">
            <el-input v-model="searchForm.name" placeholder="请输入数据源名称" clearable />
          </el-form-item>
          <el-form-item label="数据源类型">
            <el-select 
              v-model="searchForm.type" 
              placeholder="请选择数据源类型" 
              clearable
              class="type-select"
              style="width: 180px;"
            >
              <el-option
                v-for="item in dataSourceTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="敏感级别">
            <el-select 
              v-model="searchForm.sensitivityLevel" 
              placeholder="请选择敏感级别" 
              clearable
              class="level-select"
              style="width: 180px;"
            >
              <el-option
                v-for="item in sensitivityLevelOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
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

    <!-- 数据源列表和分页控件的卡片容器 -->
    <div class="data-table-card">
      <!-- 数据源列表 -->
      <el-table
        v-loading="loading"
        :data="dataSourceList"
        border
        style="width: 100%"
      >
        <el-table-column prop="name" label="数据源名称" min-width="150" />
        <el-table-column label="数据源类型" width="120">
          <template #default="{ row }">
            {{ getDataSourceTypeLabel(row.type) }}
          </template>
        </el-table-column>
        <el-table-column label="敏感级别" width="120">
          <template #default="{ row }">
            <el-tag :type="getSensitivityLevelType(row.sensitivityLevel)">
              {{ getSensitivityLevelLabel(row.sensitivityLevel) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="creator" label="创建人" width="120" />
        <el-table-column prop="createTime" label="创建时间" width="180" />
        <el-table-column label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="row.status === 'active' ? 'success' : 'danger'">
              {{ row.status === 'active' ? '正常' : '异常' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="240" fixed="right">
          <template #default="{ row }">
            <div class="table-actions">
              <el-button link type="primary" @click="handleDetail(row)">
                <el-icon><View /></el-icon>详情
              </el-button>
              <el-button link type="primary" @click="handleEdit(row)">
                <el-icon><Edit /></el-icon>编辑
              </el-button>
              <el-button link type="danger" @click="confirmDelete(row.id)" class="delete-btn">
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

    <!-- 新增/编辑对话框 -->
    <el-dialog
      v-model="formDialogVisible"
      :title="formType === 'add' ? '新增数据源' : '编辑数据源'"
      width="700px"
      destroy-on-close
    >
      <DataSourceForm
        ref="formRef"
        :type="formType"
        :form-data="formData"
        :edit-id="editId"
        :add-data-source="addDataSource"
        :update-data-source="updateDataSource"
        @submit="handleFormSubmit"
        @cancel="formDialogVisible = false"
      />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="formDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitForm">确定</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 详情对话框 -->
    <el-dialog
      v-model="detailDialogVisible"
      title="数据源详情"
      width="700px"
    >
      <DataSourceDetail
        v-if="detailDialogVisible"
        :data="currentDetailData"
        @close="detailDialogVisible = false"
      />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Search, Refresh, Plus, View, Edit, Delete } from '@element-plus/icons-vue'
import { 
  DataSourceType, 
  type DataSource as BaseDataSource,
  type MySQLConfig,
  type GaussDBConfig,
  type ReportConfig,
  type FileConfig,
  type APIConfig,
  getDataSourceList
  // 注释掉导入的API函数，避免与本地实现冲突
  // deleteDataSource
} from '@/api/data-access'
import DataSourceForm from './components/DataSourceForm.vue'
import DataSourceDetail from './components/DataSourceDetail.vue'

// 扩展DataSource类型，添加config属性
interface DataSource extends BaseDataSource {
  config?: MySQLConfig | GaussDBConfig | ReportConfig | FileConfig | APIConfig
}

// 数据源类型选项
const dataSourceTypeOptions = [
  { label: 'MySQL', value: DataSourceType.MYSQL },
  { label: 'GaussDB', value: DataSourceType.GAUSSDB },
  { label: '数据报告', value: DataSourceType.REPORT },
  { label: '数据文件', value: DataSourceType.FILE },
  { label: 'API接口', value: DataSourceType.API }
]

// 敏感级别选项
const sensitivityLevelOptions = [
  { label: '公开', value: 'public' },
  { label: '内部', value: 'internal' },
  { label: '保密', value: 'confidential' },
  { label: '高度保密', value: 'strictly_confidential' }
]

// 获取数据源类型标签
const getDataSourceTypeLabel = (type: DataSourceType) => {
  return dataSourceTypeOptions.find(item => item.value === type)?.label || type
}

// 获取敏感级别标签
const getSensitivityLevelLabel = (level: string) => {
  return sensitivityLevelOptions.find(item => item.value === level)?.label || '公开'
}

// 获取敏感级别标签类型
const getSensitivityLevelType = (level: string) => {
  switch (level) {
    case 'public':
      return 'success'
    case 'internal':
      return 'info'
    case 'confidential':
      return 'warning'
    case 'strictly_confidential':
      return 'danger'
    default:
      return 'success'
  }
}

// 搜索表单
const searchForm = reactive({
  name: '',
  type: '' as DataSourceType | '',
  sensitivityLevel: '' as string | ''
})

// 重置搜索表单
const resetSearch = () => {
  searchForm.name = ''
  searchForm.type = ''
  searchForm.sensitivityLevel = ''
  fetchDataSourceList()
}

// 搜索
const handleSearch = () => {
  pagination.currentPage = 1
  fetchDataSourceList()
}

// 分页数据
const pagination = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 0
})

// 页码改变
const handleCurrentChange = (page: number) => {
  pagination.currentPage = page
  fetchDataSourceList()
}

// 每页条数改变
const handleSizeChange = (size: number) => {
  pagination.pageSize = size
  pagination.currentPage = 1
  fetchDataSourceList()
}

// 数据源列表
const dataSourceList = ref<DataSource[]>([])
const loading = ref(false)

// 表单对话框
const formDialogVisible = ref(false)
const formType = ref<'add' | 'edit'>('add')
const formData = ref<Partial<DataSource>>({})
const editId = ref<string>('')
const formRef = ref()

// 从本地存储获取数据
const getFromLocalStorage = (): DataSource[] => {
  try {
    const data = localStorage.getItem('dataSourceList')
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('从本地存储获取数据失败:', error)
    return []
  }
}

// 保存数据到本地存储
const saveToLocalStorage = (data: DataSource[]) => {
  try {
    localStorage.setItem('dataSourceList', JSON.stringify(data))
  } catch (error) {
    console.error('保存数据到本地存储失败:', error)
  }
}

// 初始化模拟数据
const initMockData = (): DataSource[] => {
  const sensitivityLevels = ['public', 'internal', 'confidential', 'strictly_confidential']
  return [
    {
      id: '1',
      name: '企业客户主数据',
      type: DataSourceType.MYSQL,
      createTime: '2023-05-10 14:30:00',
      creator: '张三',
      status: 'active',
      sensitivityLevel: 'internal',
      description: '包含所有企业客户基础信息的MySQL数据库',
      config: {
        host: '192.168.1.100',
        port: 3306,
        username: 'datauser',
        password: '********',
        database: 'customer_master'
      }
    },
    {
      id: '2',
      name: '产品信息数据',
      type: DataSourceType.GAUSSDB,
      createTime: '2023-06-15 09:45:00',
      creator: '李四',
      status: 'active',
      sensitivityLevel: 'public',
      description: '所有产品的基本信息、价格和库存数据',
      config: {
        host: '192.168.1.200',
        port: 8432,
        username: 'product_admin',
        password: '********',
        database: 'product_info',
        cluster: 'prod-cluster-1'
      }
    },
    {
      id: '3',
      name: '月度销售报告',
      type: DataSourceType.REPORT,
      createTime: '2023-07-01 16:20:00',
      creator: '王五',
      status: 'active',
      sensitivityLevel: 'confidential',
      description: '每月销售情况统计报告，包含各区域和产品线的销售数据分析',
      config: {
        reportName: '2023年月度销售报告',
        reportFormat: 'pdf',
        useLimit: '仅供内部销售部门和管理层查阅'
      }
    },
    {
      id: '4',
      name: '客户反馈数据',
      type: DataSourceType.FILE,
      createTime: '2023-07-10 11:15:00',
      creator: '赵六',
      status: 'active',
      sensitivityLevel: 'internal',
      description: '收集的客户反馈和满意度调查数据',
      config: {
        fileName: '客户反馈数据集',
        fileFormat: 'csv',
        featureCount: 15
      }
    },
    {
      id: '5',
      name: '天气预报API',
      type: DataSourceType.API,
      createTime: '2023-08-05 13:40:00',
      creator: '钱七',
      status: 'active',
      sensitivityLevel: 'public',
      description: '实时天气预报数据接口，用于业务决策支持',
      config: {
        apiUrl: 'https://api.weather.com/forecast',
        method: 'GET'
      }
    },
    {
      id: '6',
      name: '用户行为分析数据',
      type: DataSourceType.MYSQL,
      createTime: '2023-09-12 10:30:00',
      creator: '孙八',
      status: 'active',
      sensitivityLevel: 'strictly_confidential',
      description: '用户在系统中的行为数据，用于优化产品和用户体验',
      config: {
        host: '192.168.1.101',
        port: 3306,
        username: 'behavior_analyst',
        password: '********',
        database: 'user_behavior'
      }
    }
  ]
}

// 获取数据源列表
const fetchDataSourceList = async () => {
  loading.value = true
  try {
    // 检查本地存储是否有数据
    let data = getFromLocalStorage()
    
    // 如果本地存储中没有数据，则初始化模拟数据
    if (!data || data.length === 0) {
      data = initMockData()
      saveToLocalStorage(data)
    }
    
    // 应用搜索过滤
    let filteredData = [...data]
    
    if (searchForm.name) {
      filteredData = filteredData.filter(item => 
        item.name.toLowerCase().includes(searchForm.name.toLowerCase())
      )
    }
    
    if (searchForm.type) {
      filteredData = filteredData.filter(item => item.type === searchForm.type)
    }
    
    if (searchForm.sensitivityLevel) {
      filteredData = filteredData.filter(item => item.sensitivityLevel === searchForm.sensitivityLevel)
    }
    
    // 更新总数
    pagination.total = filteredData.length
    
    // 分页处理
    const start = (pagination.currentPage - 1) * pagination.pageSize
    const end = start + pagination.pageSize
    dataSourceList.value = filteredData.slice(start, end)
    
  } catch (error) {
    console.error('获取数据源列表失败:', error)
    ElMessage.error('获取数据源列表失败')
  } finally {
    loading.value = false
  }
}

// 初始化加载
onMounted(() => {
  // 如果需要强制重新加载示例数据，可以取消下面这行的注释
  // localStorage.removeItem('dataSourceList')
  fetchDataSourceList()
})

// 强制重置数据为初始示例数据
const resetToInitialData = () => {
  try {
    // 清除本地存储中的数据
    localStorage.removeItem('dataSourceList')
    // 重新加载初始示例数据
    const data = initMockData()
    saveToLocalStorage(data)
    // 刷新列表
    fetchDataSourceList()
    ElMessage.success('数据已重置为初始示例数据')
  } catch (error) {
    console.error('重置数据失败:', error)
    ElMessage.error('重置数据失败')
  }
}

// 处理表单提交完成
const handleFormSubmit = () => {
  formDialogVisible.value = false
  fetchDataSourceList()
}

// 提交表单
const submitForm = () => {
  if (formRef.value) {
    formRef.value.submitForm()
  }
}

// 模拟添加数据源
const mockAddDataSource = (data: Partial<DataSource>) => {
  // 获取当前数据
  const currentData = getFromLocalStorage()
  
  // 生成新数据
  const now = new Date()
  const formatDate = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }
  
  const newData: DataSource = {
    id: Date.now().toString(),
    name: data.name || '',
    type: data.type as DataSourceType,
    createTime: formatDate(now),
    creator: 'admin',
    status: 'active',
    description: data.description || '',
    config: data.config || {}
  }
  
  // 添加到数据源列表
  currentData.push(newData)
  
  // 保存到本地存储
  saveToLocalStorage(currentData)
  
  return true
}

// 模拟更新数据源
const mockUpdateDataSource = (id: string, data: Partial<DataSource>) => {
  // 获取当前数据
  const currentData = getFromLocalStorage()
  
  // 查找要更新的数据
  const index = currentData.findIndex(item => item.id === id)
  if (index !== -1) {
    // 更新数据
    currentData[index] = {
      ...currentData[index],
      name: data.name || currentData[index].name,
      description: data.description !== undefined ? data.description : currentData[index].description,
      config: data.config || currentData[index].config
    }
    
    // 保存到本地存储
    saveToLocalStorage(currentData)
    
    return true
  }
  
  return false
}

// 模拟删除数据源
const mockDeleteDataSource = (id: string) => {
  // 获取当前数据
  const currentData = getFromLocalStorage()
  
  // 过滤掉要删除的数据
  const newData = currentData.filter(item => item.id !== id)
  
  // 保存到本地存储
  saveToLocalStorage(newData)
  
  return true
}

// 添加数据源
const addDataSource = async (data: Partial<DataSource>) => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockAddDataSource(data)
}

// 更新数据源
const updateDataSource = async (id: string, data: Partial<DataSource>) => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockUpdateDataSource(id, data)
}

// 删除数据源
const deleteDataSource = async (id: string) => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockDeleteDataSource(id)
}

// 打开新增表单
const handleAdd = () => {
  formType.value = 'add'
  formData.value = {
    type: DataSourceType.MYSQL,
    description: '',
    config: {}
  }
  editId.value = ''
  formDialogVisible.value = true
}

// 打开编辑表单
const handleEdit = (row: DataSource) => {
  formType.value = 'edit'
  formData.value = { ...row }
  editId.value = row.id
  formDialogVisible.value = true
}

// 处理查看
const handleView = (row: DataSource) => {
  ElMessage.info(`查看数据源: ${row.name}`)
}

// 删除数据源
const handleDelete = async (id: string) => {
  try {
    await deleteDataSource(id)    
    ElMessage.success('删除成功')
    fetchDataSourceList()
  } catch (error) {
    console.error('删除失败:', error)
    ElMessage.error('删除失败')
  }
}

// 数据源详情
const detailDialogVisible = ref(false)
const currentDetailData = ref<DataSource | null>(null)

// 打开详情页
const handleDetail = (row: DataSource) => {
  currentDetailData.value = { ...row }
  detailDialogVisible.value = true
}

// 确认删除
const confirmDelete = (id: string) => {
  ElMessageBox.confirm(
    '确定要删除该数据源吗？',
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
</script>

<style lang="scss" scoped>
.data-access {
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .action-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 16px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    
    .action-bar-left {
      display: flex;
      align-items: center;
      gap: 16px;
      
      h2 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: #303133;
      }
    }
    
    .action-bar-right {
      display: flex;
      align-items: center;
      
      :deep(.el-form-item) {
        margin-bottom: 0;
      }
      
      :deep(.type-select) {
        .el-input__wrapper {
          padding-left: 12px;
          padding-right: 8px;
          border-radius: 4px;
        }
        
        .el-input__inner {
          font-size: 14px;
        }
        
        .el-select__popper {
          &.el-popper[role=tooltip] {
            min-width: 180px !important;
          }
        }
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
      padding-right: 20px;
      
      .el-button {
        padding: 4px 8px;
        margin-right: 8px;
      }
      
      .delete-btn {
        margin-right: 0;
      }
    }
  }
  
  :deep(.el-table__fixed-right) {
    height: auto !important;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  }
  
  :deep(.el-table__fixed-right-patch) {
    background-color: #f5f7fa;
  }
  
  .pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 0;
  }
}
</style>

<style>
/* 全局样式，确保下拉菜单选项样式美观 */
.el-select__popper.is-light .el-select-dropdown__item {
  padding: 0 12px;
  height: 34px;
  line-height: 34px;
  font-size: 14px;
}

.el-select__popper.is-light .el-select-dropdown__item.selected {
  font-weight: 600;
  color: #3370ff;
  background-color: #f0f7ff;
}

.el-select__popper.is-light .el-select-dropdown__item:hover {
  background-color: #f5f7fa;
}
</style> 