<template>
  <div class="data-register-container">


    <!-- 搜索过滤栏 -->
    <div class="action-bar">
      <div class="action-bar-left">
        <el-button type="primary" @click="handleInitialRegister" class="add-btn">
          <el-icon><Plus /></el-icon>初始登记
        </el-button>
      </div>
      <div class="action-bar-right">
        <el-form :inline="true" :model="filterForm" class="demo-form-inline">
          <el-form-item label="数据资源名称">
            <el-input v-model="filterForm.resourceName" placeholder="请输入数据资源名称" clearable />
          </el-form-item>
          <el-form-item label="数据类型">
            <el-select v-model="filterForm.dataType" placeholder="请选择数据类型" clearable style="width: 180px;">
              <el-option v-for="item in dataTypeOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="登记状态">
            <el-select v-model="filterForm.registerStatus" placeholder="请选择登记状态" clearable style="width: 180px;">
              <el-option v-for="item in statusOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">
              <el-icon><Search /></el-icon>搜索
            </el-button>
            <el-button @click="resetFilter">
              <el-icon><Refresh /></el-icon>重置
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!-- 数据表格 -->
    <div class="data-table-card">
      <el-table
        v-loading="tableLoading"
        :data="tableData"
        style="width: 100%"
        border
        stripe
        @row-click="handleRowClick"
      >
        <el-table-column prop="resourceName" label="数据资源名称" min-width="200" />
        <el-table-column prop="dataType" label="数据类型" width="150">
          <template #default="scope">
            {{ getDataTypeName(scope.row.dataType) }}
          </template>
        </el-table-column>
        <el-table-column prop="registerTime" label="登记时间" width="180" />
        <el-table-column prop="updateTime" label="更新时间" width="180" />
        <el-table-column label="价格" width="120">
          <template #default="scope">
            <span class="price-tag">{{ scope.row.price ? `¥${scope.row.price.toFixed(2)}` : '¥0.00' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="registerStatus" label="登记状态" width="150">
          <template #default="scope">
            <el-tag :type="getStatusTagType(scope.row.registerStatus)">
              {{ getStatusName(scope.row.registerStatus) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="400" fixed="right">
          <template #default="scope">
            <div class="table-actions">
              <el-button
                link
                type="primary"
                @click.stop="handleView(scope.row)"
                >
                <el-icon><View /></el-icon>查看
              </el-button>
              <el-button
                v-if="scope.row.registerStatus === 'registered'"
                link
                type="primary"
                @click.stop="handleChange(scope.row)"
                >
                <el-icon><Edit /></el-icon>变更登记
              </el-button>
              <el-button
                v-if="scope.row.registerStatus === 'registered'"
                link
                type="danger"
                @click.stop="handleCancel(scope.row)"
                >
                <el-icon><CloseBold /></el-icon>注销登记
              </el-button>
              <el-button
                link
                type="danger"
                @click.stop="handleDelete(scope.row)"
                class="delete-btn"
                >
                <el-icon><Delete /></el-icon>删除
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="pagination-container">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>

    <!-- 各种对话框，根据需要显示不同的内容 -->
    <!-- 查看登记详情对话框 -->
    <register-detail-dialog
      v-model="dialogs.detail.visible"
      :register-data="currentRecord"
      @close="dialogs.detail.visible = false"
    />

    <!-- 初始登记表单对话框 -->
    <register-form-dialog
      v-model="dialogs.initialRegister.visible"
      :type="'initial'"
      @close="dialogs.initialRegister.visible = false"
      @submit-success="loadTableData"
    />

    <!-- 变更登记表单对话框 -->
    <register-form-dialog
      v-model="dialogs.changeRegister.visible"
      :type="'change'"
      :initial-data="currentRecord"
      @close="dialogs.changeRegister.visible = false"
      @submit-success="loadTableData"
    />

    <!-- 注销登记表单对话框 -->
    <register-form-dialog
      v-model="dialogs.cancelRegister.visible"
      :type="'cancel'"
      :initial-data="currentRecord"
      @close="dialogs.cancelRegister.visible = false"
      @submit-success="loadTableData"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Plus, View, Edit, CloseBold, Delete, Search, Refresh } from '@element-plus/icons-vue'
import RegisterDetailDialog from './components/RegisterDetailDialog.vue'
import RegisterFormDialog from './components/RegisterFormDialog.vue'
import { getRegistrationList, deleteRegistration } from '@/api/data-register'

// 定义数据类型选项
const dataTypeOptions = [
  { value: 'mysql', label: 'MySQL数据库' },
  { value: 'gaussdb', label: 'GaussDB数据库' },
  { value: 'report', label: '数据报告' },
  { value: 'file', label: '数据文件' },
  { value: 'api', label: 'API接口' }
]

// 定义登记状态选项
const statusOptions = [
  { value: 'initial', label: '初始登记' },
  { value: 'reviewing', label: '审核中' },
  { value: 'registered', label: '已登记' },
  { value: 'changing', label: '变更登记中' },
  { value: 'cancelling', label: '注销登记中' },
  { value: 'cancelled', label: '已注销' }
]

// 过滤表单
const filterForm = reactive({
  resourceName: '',
  dataType: '',
  registerStatus: ''
})

// 表格数据
const tableData = ref([])
const tableLoading = ref(false)
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// 当前选中的记录
const currentRecord = ref(null)

// 定义对话框的显示状态
const dialogs = reactive({
  detail: {
    visible: false
  },
  initialRegister: {
    visible: false
  },
  changeRegister: {
    visible: false
  },
  cancelRegister: {
    visible: false
  }
})

// 获取数据类型名称
const getDataTypeName = (type) => {
  const item = dataTypeOptions.find(item => item.value === type)
  return item ? item.label : type
}

// 获取状态名称
const getStatusName = (status) => {
  const item = statusOptions.find(item => item.value === status)
  return item ? item.label : status
}

// 获取状态标签类型
const getStatusTagType = (status) => {
  switch (status) {
    case 'initial':
      return 'info'
    case 'reviewing':
    case 'changing':
    case 'cancelling':
      return 'warning'
    case 'registered':
      return 'success'
    case 'cancelled':
      return 'danger'
    default:
      return 'info'
  }
}

// 加载表格数据
const loadTableData = async () => {
  try {
    tableLoading.value = true
    
    // 调用API获取数据
    const params = {
      page: currentPage.value,
      pageSize: pageSize.value,
      ...filterForm
    }
    
    // 模拟API调用
    const res = await getRegistrationList(params)
    
    // 更新表格数据
    tableData.value = res.data.list
    total.value = res.data.total
  } catch (error) {
    console.error('获取登记列表失败', error)
    ElMessage.error('获取登记列表失败')
  } finally {
    tableLoading.value = false
  }
}

// 搜索
const handleSearch = () => {
  currentPage.value = 1
  loadTableData()
}

// 重置过滤条件
const resetFilter = () => {
  Object.keys(filterForm).forEach(key => {
    filterForm[key] = ''
  })
  handleSearch()
}

// 切换每页显示数量
const handleSizeChange = (val) => {
  pageSize.value = val
  loadTableData()
}

// 切换页码
const handleCurrentChange = (val) => {
  currentPage.value = val
  loadTableData()
}

// 行点击事件
const handleRowClick = (row) => {
  currentRecord.value = row
  dialogs.detail.visible = true
}

// 查看按钮点击事件
const handleView = (row) => {
  currentRecord.value = row
  dialogs.detail.visible = true
}

// 初始登记按钮点击事件
const handleInitialRegister = () => {
  dialogs.initialRegister.visible = true
}

// 变更登记按钮点击事件
const handleChange = (row) => {
  currentRecord.value = row
  dialogs.changeRegister.visible = true
}

// 注销登记按钮点击事件
const handleCancel = (row) => {
  currentRecord.value = row
  dialogs.cancelRegister.visible = true
}

// 删除按钮点击事件
const handleDelete = (row) => {
  ElMessageBox.confirm(
    '确定要删除该登记信息吗？删除后数据将不可恢复。',
    '警告',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  )
    .then(async () => {
      try {
        await deleteRegistration(row.id)
        ElMessage.success('删除成功')
        loadTableData()
      } catch (error) {
        console.error('删除失败', error)
        ElMessage.error('删除失败')
      }
    })
    .catch(() => {
      // 用户取消删除
    })
}

// 页面加载时获取数据
onMounted(() => {
  loadTableData()
})
</script>

<style scoped lang="scss">
.data-register-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .page-header {
    margin-bottom: 20px;
    
    h2 {
      font-size: 20px;
      font-weight: 500;
      color: #303133;
    }
  }
  
  .action-bar {
    margin-bottom: 20px;
    padding: 15px;
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .action-bar-left {
      display: flex;
      align-items: center;
      margin-right: 20px;
      
      .add-btn {
        display: flex;
        align-items: center;
        
        .el-icon {
          margin-right: 5px;
        }
      }
    }
    
    .action-bar-right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      
      .demo-form-inline {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;
        
        :deep(.el-form-item) {
          margin-bottom: 0;
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
  
  .pagination-container {
    margin-top: 20px;
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    
    .el-pagination {
      padding: 0;
      margin: 0;
    }
  }
  
  .price-tag {
    color: #f56c6c;
    font-weight: bold;
  }
  
  .table-actions {
    display: flex;
    flex-wrap: nowrap !important;
    align-items: center;
    white-space: nowrap !important;
    width: 100%;
    
    .el-button {
      padding: 4px 6px !important;
      margin-right: 8px !important;
      
      .el-icon {
        margin-right: 2px !important;
      }
      
      &.delete-btn {
        margin-right: 0 !important;
      }
    }
  }
}
</style> 