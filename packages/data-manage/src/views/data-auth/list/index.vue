<template>
  <div class="data-auth-container">
    <!-- 搜索过滤栏 -->
    <div class="action-bar">
      <div class="action-bar-left">
        <el-button type="primary" @click="handleApplyAuth" class="add-btn">
          <el-icon><Plus /></el-icon>申请授权
        </el-button>
      </div>
      <div class="action-bar-right">
        <el-form :inline="true" :model="filterForm" class="demo-form-inline">
          <el-form-item label="申请状态">
            <el-select v-model="filterForm.status" placeholder="请选择申请状态" clearable style="width: 180px;">
              <el-option v-for="item in statusOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="申请时间">
            <el-date-picker
              v-model="filterForm.timeRange"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              style="width: 260px;"
            />
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
      >
        <el-table-column type="index" label="序号" width="60" align="center" />
        <el-table-column prop="applyNo" label="申请编号" min-width="120" show-overflow-tooltip />
        <el-table-column prop="resourceName" label="数据资源名称" min-width="150" show-overflow-tooltip />
        <el-table-column prop="applyTime" label="申请时间" width="160" />
        <el-table-column prop="status" label="申请状态" width="120">
          <template #default="scope">
            <el-tag :type="getStatusType(scope.row.status)">
              {{ getStatusLabel(scope.row.status) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="220">
          <template #default="scope">
            <div class="table-actions">
              <el-button
                link
                type="primary"
                @click="handleViewDetail(scope.row)"
                class="action-btn"
              >
                <el-icon><View /></el-icon>查看详情
              </el-button>
              <el-button
                v-if="scope.row.status === 'initial_review' && userRole === 'provider'"
                link
                type="primary"
                @click="handleReview(scope.row)"
                class="action-btn"
              >
                <el-icon><Check /></el-icon>初审
              </el-button>
              <el-button
                v-if="scope.row.status === 'center_review' && userRole === 'admin'"
                link
                type="primary"
                @click="handleReview(scope.row)"
                class="action-btn"
              >
                <el-icon><Check /></el-icon>审核
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

    <!-- 授权申请对话框 -->
    <auth-operation-apply
      v-if="dialogs.operationApply.visible"
      v-model="dialogs.operationApply.visible"
      @success="handleApplySuccess"
    />

    <!-- 授权详情对话框 -->
    <auth-detail
      v-if="dialogs.detail.visible"
      v-model="dialogs.detail.visible"
      :auth-id="currentAuthId"
    />

    <!-- 授权审核对话框 -->
    <auth-review
      v-if="dialogs.review.visible"
      v-model="dialogs.review.visible"
      :auth-id="currentAuthId"
      :review-type="currentReviewType"
      @success="handleReviewSuccess"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus, Search, Refresh, View, Check } from '@element-plus/icons-vue'
import AuthOperationApply from '../components/AuthOperationApply.vue'
import AuthDetail from '../components/AuthDetail.vue'
import AuthReview from '../components/AuthReview.vue'

// 用户角色（实际项目中应该从用户信息或权限系统获取）
const userRole = ref('operator') // operator: 运营方，provider: 提供方，admin: 管理中心

// 筛选表单
const filterForm = reactive({
  status: '',
  timeRange: []
})

// 状态选项
const statusOptions = [
  { value: 'applying', label: '申请中' },
  { value: 'initial_review_pass', label: '初审通过' },
  { value: 'initial_review_reject', label: '初审不通过' },
  { value: 'center_review', label: '审核管理中心审核中' },
  { value: 'review_pass', label: '审核通过' },
  { value: 'review_reject', label: '审核不通过' }
]

// 表格数据
const tableData = ref([])
const tableLoading = ref(false)
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// 当前选中的记录ID
const currentAuthId = ref('')
const currentReviewType = ref('')

// 对话框控制
const dialogs = reactive({
  operationApply: {
    visible: false
  },
  detail: {
    visible: false
  },
  review: {
    visible: false
  }
})

// 获取状态标签类型
const getStatusType = (status) => {
  const statusMap = {
    'applying': 'info',
    'initial_review_pass': 'success',
    'initial_review_reject': 'danger',
    'center_review': 'warning',
    'review_pass': 'success',
    'review_reject': 'danger'
  }
  return statusMap[status] || 'info'
}

// 获取状态标签文字
const getStatusLabel = (status) => {
  const option = statusOptions.find(item => item.value === status)
  return option ? option.label : status
}

// 加载表格数据
const loadTableData = async () => {
  tableLoading.value = true
  try {
    // 模拟API请求
    setTimeout(() => {
      // 生成模拟数据
      const mockData = Array.from({ length: 20 }, (_, index) => {
        const statusList = ['applying', 'initial_review_pass', 'initial_review_reject', 'center_review', 'review_pass', 'review_reject']
        const randomStatus = statusList[Math.floor(Math.random() * statusList.length)]
        const applyType = Math.random() > 0.5 ? 'operation' : 'usage'
        
        return {
          id: `auth_${index + 1}`,
          applyNo: `AUTH${new Date().getFullYear()}${String(index + 1).padStart(4, '0')}`,
          resourceName: `测试数据资源 ${index + 1}`,
          applyTime: `2023-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
          status: randomStatus,
          applyType: applyType
        }
      })
      
      // 根据筛选条件过滤
      let filteredData = [...mockData]
      if (filterForm.status) {
        filteredData = filteredData.filter(item => item.status === filterForm.status)
      }
      
      if (filterForm.timeRange && filterForm.timeRange.length === 2) {
        const [startDate, endDate] = filterForm.timeRange
        filteredData = filteredData.filter(item => {
          const itemDate = new Date(item.applyTime)
          return itemDate >= new Date(startDate) && itemDate <= new Date(endDate)
        })
      }
      
      // 分页
      const startIndex = (currentPage.value - 1) * pageSize.value
      const endIndex = startIndex + pageSize.value
      
      tableData.value = filteredData.slice(startIndex, endIndex)
      total.value = filteredData.length
      
      tableLoading.value = false
    }, 500)
  } catch (error) {
    console.error('获取数据授权列表失败', error)
    tableLoading.value = false
  }
}

// 搜索
const handleSearch = () => {
  currentPage.value = 1
  loadTableData()
}

// 重置筛选条件
const resetFilter = () => {
  filterForm.status = ''
  filterForm.timeRange = []
  currentPage.value = 1
  loadTableData()
}

// 页码大小变化
const handleSizeChange = (size: number) => {
  pageSize.value = size
  loadTableData()
}

// 页码变化
const handleCurrentChange = (page: number) => {
  currentPage.value = page
  loadTableData()
}

// 申请授权
const handleApplyAuth = () => {
  dialogs.operationApply.visible = true
}

// 申请成功回调
const handleApplySuccess = () => {
  ElMessage.success('申请提交成功')
  loadTableData()
}

// 查看详情
const handleViewDetail = (row) => {
  if (!row || !row.id) {
    ElMessage.warning('无法获取授权ID，请重试')
    return
  }
  console.log('查看详情，授权ID:', row.id)
  currentAuthId.value = row.id
  dialogs.detail.visible = true
}

// 审核
const handleReview = (row) => {
  currentAuthId.value = row.id
  currentReviewType.value = row.status === 'initial_review' ? 'initial' : 'center'
  dialogs.review.visible = true
}

// 审核成功回调
const handleReviewSuccess = () => {
  ElMessage.success('审核操作提交成功')
  loadTableData()
}

// 页面加载时获取数据
onMounted(() => {
  loadTableData()
})
</script>

<style scoped lang="scss">
.data-auth-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  
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
  
  .el-table {
    margin-bottom: 20px;
    border-radius: 4px;
    
    :deep(.el-table__body-wrapper) {
      overflow-x: hidden;
    }
  }
  
  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    
    :deep(.el-pagination) {
      padding: 0;
      margin: 0;
    }
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
      font-size: 14px !important;
      
      .el-icon {
        margin-right: 2px !important;
        font-size: 14px !important;
      }
      
      &:last-child {
        margin-right: 0 !important;
      }
    }
    
    .action-btn {
      min-width: 70px !important;
    }
  }
}
</style> 