<template>
  <div class="explore-record-container">
    <!-- 搜索表单 -->
    <el-form :model="searchForm" ref="searchFormRef" class="search-form">
      <div class="form-content">
        <div class="search-items">
          <el-form-item label="资源名称" prop="resourceName">
            <el-input v-model="searchForm.resourceName" placeholder="请输入资源名称" clearable />
          </el-form-item>
          <el-form-item label="我的资源" prop="myResourceName">
            <el-input v-model="searchForm.myResourceName" placeholder="请输入我的资源名称" clearable />
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <el-select 
              v-model="searchForm.status" 
              placeholder="请选择状态" 
              clearable
              style="width: 120px"
            >
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </div>
        <div class="search-buttons">
          <el-button type="primary" :icon="Search" @click="handleSearch">查询</el-button>
          <el-button :icon="Refresh" @click="handleReset">重置</el-button>
        </div>
      </div>
    </el-form>

    <!-- 数据表格 -->
    <div class="card-container">
      <el-table
        v-loading="loading"
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column prop="resourceName" label="资源名称" min-width="180" show-overflow-tooltip />
        <el-table-column prop="myResourceName" label="我的资源" min-width="180" show-overflow-tooltip />
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="getStatusTagType(row.status)">{{ row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="180" />
        <el-table-column label="操作" width="150" fixed="right">
          <template #default="{ row }">
            <div class="table-actions">
              <el-button
                type="primary"
                link
                :icon="View"
                class="operation-button"
                @click="handleViewDetail(row)"
              >
                查看
              </el-button>
              <el-button
                type="danger"
                link
                :icon="Delete"
                class="operation-button"
                @click="handleDelete(row)"
              >
                删除
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="pagination-container">
        <el-pagination
          v-model:current-page="searchForm.pageNum"
          v-model:page-size="searchForm.pageSize"
          :page-sizes="[10, 20, 50, 100]"
          :total="total"
          layout="total, sizes, prev, pager, next, jumper"
          class="custom-pagination"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>

    <!-- 详情弹窗 -->
    <el-dialog
      v-model="detailDialogVisible"
      title="探查记录详情"
      width="80%"
      :close-on-click-modal="false"
      destroy-on-close
    >
      <div v-loading="detailLoading" class="detail-content">
        <!-- 基本信息 -->
        <div class="detail-section">
          <div class="section-title">基本信息</div>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="资源名称">{{ currentDetail?.resourceName }}</el-descriptions-item>
            <el-descriptions-item label="我的资源">{{ currentDetail?.myResourceName }}</el-descriptions-item>
            <el-descriptions-item label="状态">
              <el-tag :type="getStatusTagType(currentDetail?.status || '')">{{ currentDetail?.status }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="创建时间">{{ currentDetail?.createTime }}</el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 探查结果概览 -->
        <div class="detail-section">
          <div class="section-title">探查结果概览</div>
          <div class="overview-cards">
            <el-card class="overview-card">
              <div class="card-header">
                <span>样本总数</span>
                <el-tooltip content="数据集中的样本总数" placement="top">
                  <el-icon><QuestionFilled /></el-icon>
                </el-tooltip>
              </div>
              <div class="card-value">{{ currentDetail?.sampleCount || 0 }}</div>
            </el-card>
            <el-card class="overview-card">
              <div class="card-header">
                <span>匹配数量</span>
                <el-tooltip content="成功匹配的样本数量" placement="top">
                  <el-icon><QuestionFilled /></el-icon>
                </el-tooltip>
              </div>
              <div class="card-value">{{ currentDetail?.matchCount || 0 }}</div>
            </el-card>
            <el-card class="overview-card">
              <div class="card-header">
                <span>匹配率</span>
                <el-tooltip content="匹配成功的样本占比" placement="top">
                  <el-icon><QuestionFilled /></el-icon>
                </el-tooltip>
              </div>
              <div class="card-value">{{ currentDetail?.matchRate || 0 }}%</div>
            </el-card>
          </div>
        </div>

        <!-- 特征详情 -->
        <div class="detail-section">
          <div class="section-title">特征详情</div>
          <el-table :data="currentDetail?.features" border style="width: 100%">
            <el-table-column prop="name" label="特征名称" min-width="120" show-overflow-tooltip />
            <el-table-column prop="type" label="数据类型" width="100" />
            <el-table-column prop="statistics" label="特征统计" min-width="180" show-overflow-tooltip />
            <el-table-column prop="maxValue" label="最大值" min-width="100" show-overflow-tooltip />
            <el-table-column prop="minValue" label="最小值" min-width="100" show-overflow-tooltip />
            <el-table-column prop="medianValue" label="中位数" min-width="100" show-overflow-tooltip />
          </el-table>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="danger" @click="handleDeleteFromDetail">删除</el-button>
          <el-button @click="detailDialogVisible = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch, nextTick } from 'vue'
import {
  Search,
  Refresh,
  View,
  Delete,
  QuestionFilled
} from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance } from 'element-plus'
import type { RecordItem, Feature, RecordPageParams } from '@/api/explore-record'
import { getRecordList, getRecordDetail, deleteRecord } from '@/api/explore-record'
import * as echarts from 'echarts'

// 搜索表单数据
const searchForm = reactive<RecordPageParams>({
  pageNum: 1,
  pageSize: 10,
  resourceName: '',
  myResourceName: '',
  status: ''
})

// 表格数据
const tableData = ref<RecordItem[]>([])
const total = ref(0)
const loading = ref(false)

// 详情对话框
const detailDialogVisible = ref(false)
const currentDetail = ref<RecordItem | null>(null)
const detailLoading = ref(false)

// 选项数据
const statusOptions = [
  { label: '已完成', value: '已完成' },
  { label: '进行中', value: '进行中' },
  { label: '失败', value: '失败' }
]

// 获取状态对应的标签样式
const getStatusTagType = (status: string) => {
  const statusMap: Record<string, string> = {
    '已完成': 'success',
    '进行中': 'warning',
    '失败': 'danger'
  }
  return statusMap[status] || 'info'
}

// 格式化百分比
const formatPercent = (value: number | undefined) => {
  if (value === undefined) return '0.00%'
  return (value * 100).toFixed(2) + '%'
}

// 获取表格数据
const fetchTableData = async () => {
  loading.value = true
  try {
    const res = await getRecordList(searchForm)
    if (res.data.code === 200) {
      tableData.value = res.data.data.list
      total.value = res.data.data.total
    }
  } catch (error) {
    console.error('获取探查记录列表失败', error)
    ElMessage.error('获取数据失败，请稍后重试')
  } finally {
    loading.value = false
  }
}

// 初始化加载数据
onMounted(() => {
  fetchTableData()
})

// 查询方法
const handleSearch = () => {
  searchForm.pageNum = 1
  fetchTableData()
}

// 重置查询表单
const handleReset = () => {
  searchForm.resourceName = ''
  searchForm.myResourceName = ''
  searchForm.status = ''
  searchForm.pageNum = 1
  fetchTableData()
}

// 查看详情
const handleViewDetail = async (row: RecordItem) => {
  detailDialogVisible.value = true
  detailLoading.value = true
  try {
    const res = await getRecordDetail(row.id)
    if (res.data.code === 200) {
      currentDetail.value = res.data.data
    }
  } catch (error) {
    console.error('获取详情失败', error)
    ElMessage.error('获取详情失败，请稍后重试')
  } finally {
    detailLoading.value = false
  }
}

// 删除探查记录
const handleDelete = (row: RecordItem) => {
  ElMessageBox.confirm(
    '确认删除该探查记录吗？删除后将无法恢复。',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(async () => {
    try {
      const res = await deleteRecord(row.id)
      if (res.data.code === 200) {
        ElMessage.success('删除成功')
        fetchTableData()
      }
    } catch (error) {
      console.error('删除失败', error)
      ElMessage.error('删除失败，请稍后重试')
    }
  })
}

// 从详情页删除
const handleDeleteFromDetail = () => {
  const id = currentDetail.value?.id
  if (!id) return
  
  ElMessageBox.confirm(
    '确认删除该探查记录吗？删除后将无法恢复。',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(async () => {
    try {
      const res = await deleteRecord(id)
      if (res.data.code === 200) {
        ElMessage.success('删除成功')
        detailDialogVisible.value = false
        fetchTableData()
      }
    } catch (error) {
      console.error('删除失败', error)
      ElMessage.error('删除失败，请稍后重试')
    }
  })
}

// 分页方法
const handleSizeChange = (val: number) => {
  searchForm.pageSize = val
  searchForm.pageNum = 1
  fetchTableData()
}

const handleCurrentChange = (val: number) => {
  searchForm.pageNum = val
  fetchTableData()
}
</script>

<style lang="scss" scoped>
.explore-record-container {
  background-color: #f5f7fa;
  min-height: 100%;
}

.search-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .form-content {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }

  .search-items {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: flex-end;
  }

  .search-buttons {
    display: flex;
    gap: 10px;
    margin-left: 20px;
  }

  :deep(.el-form-item) {
    margin-bottom: 0;
    margin-right: 0;
  }

  :deep(.el-button--primary) {
    --el-button-bg-color: #3370ff;
    --el-button-border-color: #3370ff;
    --el-button-hover-bg-color: #66b1ff;
    --el-button-hover-border-color: #66b1ff;
  }

  :deep(.el-select) {
    width: 120px;
    
    .el-input__inner {
      width: 100%;
    }
  }

  :deep(.el-select-dropdown__item) {
    padding: 0 16px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #606266;

    &.selected {
      color: #3370ff;
      font-weight: normal;
    }

    &:hover {
      background-color: #f5f7fa;
    }
  }
}

.card-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  :deep(.el-table) {
    margin-top: 0px;
    --el-table-header-bg-color: #f5f7fa;
    --el-table-border-color: #ebeef5;
    --el-table-row-hover-bg-color: #f5f7fa;
    
    th {
      font-weight: bold;
      height: 40px;
      line-height: 40px;
      padding: 0;
    }

    .el-table__row {
      height: 40px;
      line-height: 40px;
    }

    td {
      height: 40px;
      line-height: 40px;
      padding: 0;
    }
    
    .cell {
      padding: 0 12px;
      height: 40px;
      line-height: 40px;
      white-space: nowrap;
    }

    .el-tag {
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
    }
  }

  .table-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 4px;
    height: 40px;
    padding: 0 4px;

    .operation-button {
      display: inline-flex;
      align-items: center;
      padding: 0;
      height: 24px;
      line-height: 24px;
      font-size: 14px;

      .el-icon {
        font-size: 14px;
        margin-right: 2px;
      }

      span {
        font-size: 14px;
      }
    }
  }

  .pagination-container {
    display: flex;
    justify-content: flex-end;

    :deep(.custom-pagination) {
      --el-pagination-font-size: 14px;
      --el-pagination-button-height: 28px;
      --el-pagination-button-width: 28px;
      font-weight: normal;
      color: #606266;

      .el-pagination__total {
        margin-right: 16px;
        font-size: 13px;
      }

      .el-pagination__sizes {
        margin-right: 16px;

        .el-select {
          .el-input {
            width: 95px;
            margin: 0;

            .el-input__inner {
              height: 28px;
              line-height: 28px;
              font-size: 13px;
            }
          }
        }
      }

      .el-pagination__jump {
        margin-left: 16px;
        margin-right: 0;
        font-size: 13px;

        .jump-input {
          width: 40px;
          margin: 0 4px;

          :deep(.el-input__inner) {
            height: 28px;
            line-height: 28px;
            padding: 0 4px;
            text-align: center;
            font-size: 13px;
          }
        }
      }

      .btn-prev,
      .btn-next {
        background: none;
        border: none;
        padding: 0;
        margin: 0 4px;
        color: #606266;
        min-width: 16px;
        font-size: 12px;
        
        &:hover {
          color: #409eff;
        }

        &.is-disabled {
          color: #c0c4cc;
          cursor: not-allowed;
        }
      }

      .el-pager {
        li {
          margin: 0 4px;
          background-color: #fff;
          border: none;
          border-radius: 2px;
          min-width: 28px;
          height: 28px;
          line-height: 28px;
          font-size: 13px;
          color: #606266;

          &:hover {
            color: #409eff;
          }

          &.is-active {
            background-color: transparent;
            color: #409eff;
          }
        }
      }
    }
  }
}

.detail-content {
  max-height: 700px;
  overflow-y: auto;
  padding-right: 10px;

  .detail-section {
    margin-bottom: 25px;

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
    
    :deep(.el-descriptions__label) {
      width: 120px;
      font-weight: bold;
      color: #606266;
    }
    
    :deep(.el-descriptions__content) {
      color: #303133;
    }
  }
}

.overview-cards {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
  .overview-card {
    flex: 1;
    
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #606266;
    }
    
    .card-value {
      font-size: 24px;
      font-weight: bold;
      color: #303133;
      padding: 10px 0;
      text-align: center;
    }
  }
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>

<style lang="scss">
.pagination-dropdown {
  .el-select-dropdown__item {
    padding: 0 16px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #606266;

    &.selected {
      color: #3370ff;
      font-weight: normal;
    }

    &:hover {
      background-color: #f5f7fa;
    }
  }
}
</style> 