<template>
  <div class="publication-page">
    <!-- 搜索区域 -->
    <div class="search-area">
      <el-form :inline="true" :model="searchForm" class="search-form">
        <el-form-item label="数据名称">
          <el-input v-model="searchForm.dataName" placeholder="请输入数据名称" clearable @keyup.enter="handleSearch" />
        </el-form-item>
        <el-form-item label="数据类型">
          <el-select v-model="searchForm.dataType" placeholder="请选择数据类型" clearable class="wider-select">
            <el-option
              v-for="item in dataTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="公示状态">
          <el-select v-model="searchForm.status" placeholder="请选择公示状态" clearable class="wider-select">
            <el-option
              v-for="item in statusOptions"
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
          <el-button @click="handleReset">
            <el-icon><Refresh /></el-icon>重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 数据表格 -->
    <div class="data-table-card">
      <el-table
        class="data-table"
        v-loading="loading"
        :data="publicationList"
        border
        stripe
        style="width: 100%"
      >
        <el-table-column type="index" label="序号" width="60" align="center" />
        <el-table-column prop="dataName" label="数据名称" min-width="100" show-overflow-tooltip />
        <el-table-column prop="dataType" label="数据类型" width="140">
          <template #default="scope">
            {{ getDataTypeLabel(scope.row.dataType) }}
          </template>
        </el-table-column>
        <el-table-column prop="description" label="数据描述" min-width="140" show-overflow-tooltip />
        <el-table-column prop="startTime" label="公示开始时间" width="140" />
        <el-table-column prop="endTime" label="公示截止时间" width="140" />
        <el-table-column prop="status" label="公示状态" width="100">
          <template #default="scope">
            <el-tag
              :type="getStatusTagType(scope.row.status)"
              size="small"
            >
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
                @click="viewObjections(scope.row)"
                class="action-btn"
              >
                <el-icon><ChatDotRound /></el-icon>查看异议
              </el-button>
              <el-button
                v-if="scope.row.status === 'ongoing'"
                link
                type="primary"
                @click="viewDetails(scope.row)"
                class="action-btn"
              >
                <el-icon><View /></el-icon>查看详情
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

    <!-- 详情对话框 -->
    <el-dialog
      v-model="detailDialogVisible"
      title="数据公示详情"
      width="600px"
      destroy-on-close
    >
      <el-descriptions :column="2" border>
        <el-descriptions-item label="数据名称" :span="1">{{ currentDetail.dataName }}</el-descriptions-item>
        <el-descriptions-item label="数据类型" :span="1">{{ getDataTypeLabel(currentDetail.dataType) }}</el-descriptions-item>
        <el-descriptions-item label="公示开始时间" :span="1">{{ currentDetail.startTime }}</el-descriptions-item>
        <el-descriptions-item label="公示截止时间" :span="1">{{ currentDetail.endTime }}</el-descriptions-item>
        <el-descriptions-item label="异议数量" :span="1">{{ currentDetail.objectionCount }}</el-descriptions-item>
        <el-descriptions-item label="公示状态" :span="1">
          <el-tag :type="getStatusTagType(currentDetail.status)">
            {{ getStatusLabel(currentDetail.status) }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="数据描述" :span="2">
          <div class="detail-text">{{ currentDetail.description }}</div>
        </el-descriptions-item>
      </el-descriptions>
      <template #footer>
        <el-button @click="detailDialogVisible = false">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Refresh, ChatDotRound, View } from '@element-plus/icons-vue'
import { 
  getPublicationList, 
  getDataTypeOptions, 
  getPublicationStatusOptions,
  PublicationStatus,
  type PublicationItem
} from '@/api/register-objection'

const router = useRouter()

// 搜索表单
const searchForm = reactive({
  dataName: '',
  dataType: '',
  status: ''
})

// 表格数据
const publicationList = ref<PublicationItem[]>([])
const loading = ref(false)
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// 详情对话框
const detailDialogVisible = ref(false)
const currentDetail = ref<PublicationItem>({} as PublicationItem)

// 选项数据
const dataTypeOptions = ref(getDataTypeOptions())
const statusOptions = ref(getPublicationStatusOptions())

// 获取数据类型标签
const getDataTypeLabel = (type: string) => {
  const option = dataTypeOptions.value.find(item => item.value === type)
  return option ? option.label : type
}

// 获取状态标签
const getStatusLabel = (status: PublicationStatus) => {
  const option = statusOptions.value.find(item => item.value === status)
  return option ? option.label : status
}

// 获取状态标签类型
const getStatusTagType = (status: PublicationStatus) => {
  switch (status) {
    case PublicationStatus.ONGOING:
      return 'success'
    case PublicationStatus.COMPLETED:
      return 'info'
    case PublicationStatus.CANCELLED:
      return 'danger'
    default:
      return 'info'
  }
}

// 获取列表数据
const fetchList = async () => {
  loading.value = true
  try {
    const params = {
      page: currentPage.value,
      pageSize: pageSize.value,
      dataName: searchForm.dataName || undefined,
      dataType: searchForm.dataType || undefined,
      status: searchForm.status || undefined
    }
    const res = await getPublicationList(params)
    if (res.code === 200) {
      publicationList.value = res.data.list
      total.value = res.data.total
    }
  } catch (error) {
    console.error('获取公示列表失败', error)
  } finally {
    loading.value = false
  }
}

// 搜索
const handleSearch = () => {
  currentPage.value = 1
  fetchList()
}

// 重置
const handleReset = () => {
  Object.keys(searchForm).forEach(key => {
    searchForm[key] = ''
  })
  currentPage.value = 1
  fetchList()
}

// 分页大小变化
const handleSizeChange = (val: number) => {
  pageSize.value = val
  fetchList()
}

// 页码变化
const handleCurrentChange = (val: number) => {
  currentPage.value = val
  fetchList()
}

// 查看详情
const viewDetails = (row: PublicationItem) => {
  currentDetail.value = row
  detailDialogVisible.value = true
}

// 查看异议
const viewObjections = (row: PublicationItem) => {
  // 跳转到异议列表页面，并传递公示ID用于筛选
  router.push({
    path: '/register-objection/objection',
    query: {
      publicationId: row.id
    }
  })
}

// 初始化
onMounted(() => {
  fetchList()
})
</script>

<style scoped lang="scss">
.publication-page {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  
  .search-area {
    margin-bottom: 20px;
    padding: 15px;
    background-color: #fff;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    
    .search-form {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      
      :deep(.el-form-item) {
        margin-bottom: 0;
      }
      
      .wider-select {
        width: 160px;
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
  
  .data-table {
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    
    :deep(.el-table) {
      width: 100% !important;
    }
    
    :deep(.el-table__body-wrapper) {
      overflow-x: hidden;
    }
    
    :deep(.el-table__row) {
      .table-actions {
        display: flex;
        flex-wrap: nowrap !important;
        justify-content: flex-start !important;
        align-items: center;
        width: 100%;
        
        .el-button {
          margin: 0 4px !important;
          padding: 4px 2px !important;
          font-size: 14px !important;
          
          &.action-btn {
            min-width: 75px !important;
            margin-right: 6px !important;
          }
          
          .el-icon {
            margin-right: 2px !important;
            font-size: 14px !important;
          }
        }
      }
    }
  }
  
  .pagination-container {
    margin-top: 20px;
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    box-sizing: border-box;
    
    .el-pagination {
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