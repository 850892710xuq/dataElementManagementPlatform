<template>
  <div class="catalog-monitor">
    <!-- 搜索表单 -->
    <div class="search-form-container">
      <el-form :model="searchForm" class="search-form" inline>
        <el-form-item label="目录名称">
          <el-input v-model="searchForm.name" placeholder="请输入目录名称" clearable />
        </el-form-item>
        <el-form-item label="变更时间">
          <el-date-picker
            v-model="searchForm.timeRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">
            <el-icon><Search /></el-icon>
            <span>搜索</span>
          </el-button>
          <el-button @click="handleReset">
            <el-icon><Refresh /></el-icon>
            <span>重置</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 数据表格 -->
    <div class="card-container">
      <div class="table-container">
        <el-table
          v-loading="loading"
          :data="tableData"
          border
          style="width: 100%"
          :header-cell-style="{ background: '#f5f7fa', color: '#606266' }"
        >
          <el-table-column prop="catalogName" label="目录名称" min-width="180" show-overflow-tooltip />
          <el-table-column prop="changeType" label="变更类型" width="100" show-overflow-tooltip>
            <template #default="{ row }">
              <el-tag :type="getChangeTypeTag(row.changeType || '')">
                {{ getChangeTypeLabel(row.changeType || '') }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="oldValue" label="变更前值" min-width="200" show-overflow-tooltip />
          <el-table-column prop="newValue" label="变更后值" min-width="200" show-overflow-tooltip />
          <el-table-column prop="changeTime" label="变更时间" width="180" show-overflow-tooltip />
          <el-table-column label="操作" width="120" fixed="right">
            <template #default="{ row }">
              <div class="table-actions">
                <el-button link type="primary" class="operation-button" @click="handleDetail(row)">
                  <el-icon><View /></el-icon>
                  <span>详情</span>
                </el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 分页控件 -->
      <div class="pagination-container">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          prev-text="<"
          next-text=">"
          :pager-count="5"
          prev-icon="ArrowLeft"
          next-icon="ArrowRight"
        />
      </div>
    </div>

    <!-- 详情对话框 -->
    <el-dialog
      v-model="detailDialogVisible"
      title="变更详情"
      width="60%"
      :close-on-click-modal="false"
      destroy-on-close
    >
      <div v-loading="detailLoading" class="detail-content">
        <!-- 基本信息 -->
        <div class="detail-section">
          <div class="section-title">基本信息</div>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="目录名称">{{ currentDetail.catalogName }}</el-descriptions-item>
            <el-descriptions-item label="变更类型">
              <el-tag :type="getChangeTypeTag(currentDetail.changeType || '')">
                {{ getChangeTypeLabel(currentDetail.changeType || '') }}
              </el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="变更时间">{{ currentDetail.changeTime }}</el-descriptions-item>
            <el-descriptions-item label="变更人员">{{ currentDetail.changeUser }}</el-descriptions-item>
            <el-descriptions-item label="变更原因">{{ currentDetail.changeReason }}</el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 变更内容 -->
        <div class="detail-section">
          <div class="section-title">变更内容</div>
          <el-descriptions :column="1" border>
            <el-descriptions-item label="变更前值">
              <div class="value-content">{{ currentDetail.oldValue || '无' }}</div>
            </el-descriptions-item>
            <el-descriptions-item label="变更后值">
              <div class="value-content">{{ currentDetail.newValue || '无' }}</div>
            </el-descriptions-item>
            <el-descriptions-item v-if="currentDetail.details" label="详细说明">
              <div class="value-content">{{ currentDetail.details }}</div>
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="detailDialogVisible = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { View, Search, ArrowLeft, ArrowRight, Refresh } from '@element-plus/icons-vue'

// 定义类型
interface CatalogChange {
  id: number;
  catalogName: string;
  changeType: 'add' | 'update' | 'delete';
  oldValue: string;
  newValue: string;
  changeTime: string;
  changeUser: string;
  changeReason: string;
  details?: string;
}

// 搜索表单数据
const searchForm = reactive({
  name: '',
  timeRange: [] as string[]
})

// 加载状态
const loading = ref(false)
const detailLoading = ref(false)

// 表格数据
const tableData = ref<CatalogChange[]>([])

// 分页相关
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)

// 模拟数据生成函数
const generateMockData = (page: number, pageSize: number) => {
  const start = (page - 1) * pageSize
  const end = start + pageSize
  const mockData: CatalogChange[] = []
  
  const changeTypes: ('add' | 'update' | 'delete')[] = ['add', 'update', 'delete']
  
  for (let i = start; i < end; i++) {
    const changeType = changeTypes[i % 3]
    
    mockData.push({
      id: i + 1,
      catalogName: `数据目录${i + 1}`,
      changeType: changeType,
      oldValue: changeType === 'add' ? '' : `原目录内容-${i + 1}`,
      newValue: changeType === 'delete' ? '' : `新目录内容-${i + 1}`,
      changeTime: `2024-03-${20 - (i % 10)} 10:${i % 60}:00`,
      changeUser: `用户${(i % 5) + 1}`,
      changeReason: `变更原因说明-${i + 1}`
    })
  }
  
  return mockData
}

// 获取表格数据
const fetchTableData = () => {
  loading.value = true
  // 模拟API调用
  setTimeout(() => {
    tableData.value = generateMockData(currentPage.value, pageSize.value)
    loading.value = false
  }, 500)
}

// 初始化加载数据
onMounted(() => {
  fetchTableData()
})

// 查询方法
const handleSearch = () => {
  currentPage.value = 1 // 重置到第一页
  fetchTableData()
}

// 重置查询表单
const handleReset = () => {
  searchForm.name = ''
  searchForm.timeRange = []
  currentPage.value = 1 // 重置到第一页
  fetchTableData()
}

// 分页方法
const handleSizeChange = (val: number) => {
  pageSize.value = val
  currentPage.value = 1 // 切换每页条数时重置到第一页
  fetchTableData()
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
  fetchTableData()
}

// 详情对话框
const detailDialogVisible = ref(false)
const currentDetail = ref<CatalogChange>({} as CatalogChange)

// 查看详情
const handleDetail = (row: CatalogChange) => {
  currentDetail.value = row
  detailDialogVisible.value = true
}

// 获取变更类型标签样式
const getChangeTypeTag = (type: string): "primary" | "success" | "warning" | "danger" | "info" => {
  const map: Record<string, "primary" | "success" | "warning" | "danger" | "info"> = {
    add: 'success',
    update: 'warning',
    delete: 'danger'
  }
  return map[type] || 'info'
}

// 获取变更类型显示文本
const getChangeTypeLabel = (type: string): string => {
  const map: Record<string, string> = {
    add: '新增',
    update: '修改',
    delete: '删除'
  }
  return map[type] || type
}
</script>

<style lang="scss" scoped>
.search-form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;

  .search-form {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-end;

    :deep(.el-form-item) {
      margin-bottom: 0;
    }

    :deep(.el-button--primary) {
      --el-button-bg-color: #3370ff;
      --el-button-border-color: #3370ff;
      --el-button-hover-bg-color: #66b1ff;
      --el-button-hover-border-color: #66b1ff;
    }
  }
}

.card-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;

  .table-container {
    margin-bottom: 20px;
  }

  .table-actions {
    display: flex;
    align-items: center;
    gap: 8px;

    .operation-button {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }

  .pagination-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
}

.detail-content {
  max-height: 600px;
  overflow-y: auto;

  .detail-section {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    .section-title {
      font-size: 16px;
      font-weight: bold;
      color: #303133;
      margin-bottom: 16px;
      padding-left: 10px;
      border-left: 4px solid #409eff;
    }
    
    .value-content {
      word-break: break-all;
      white-space: pre-wrap;
      line-height: 1.5;
    }
  }
}
</style> 