<template>
  <!-- 搜索表单 -->
  <div class="search-form-container">
    <el-form :model="searchForm" class="search-form" inline>
      <el-form-item label="用户名">
        <el-input v-model="searchForm.username" placeholder="请输入用户名" clearable />
      </el-form-item>
      <el-form-item label="操作类型">
        <el-select v-model="searchForm.operationType" placeholder="请选择操作类型" clearable style="width: 180px">
          <el-option v-for="item in operationTypes" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item label="操作时间">
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
        <el-table-column prop="username" label="用户名" width="120" show-overflow-tooltip />
        <el-table-column prop="ip" label="IP地址" width="140" show-overflow-tooltip />
        <el-table-column prop="operation" label="操作内容" min-width="180" show-overflow-tooltip />
        <el-table-column prop="description" label="操作描述" min-width="200" show-overflow-tooltip />
        <el-table-column prop="operateTime" label="操作时间" width="160" show-overflow-tooltip />
        <el-table-column label="操作结果" width="100" show-overflow-tooltip>
          <template #default="{ row }">
            <el-tag :type="row.status === 'success' ? 'success' : 'danger'">
              {{ row.status === 'success' ? '成功' : '失败' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100" fixed="right">
          <template #default="{ row }">
            <div class="table-actions">
              <el-button
                link
                type="primary"
                class="operation-button"
                @click="handleViewDetail(row)"
              >
                <el-icon><View /></el-icon>
                <span>查看详情</span>
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

  <!-- 详情弹窗 -->
  <el-dialog
    v-model="dialogVisible"
    title="操作日志详情"
    width="60%"
    :close-on-click-modal="false"
    destroy-on-close
  >
    <div v-loading="detailLoading" class="detail-content">
      <!-- 基本信息 -->
      <div class="detail-section">
        <div class="section-title">基本信息</div>
        <el-descriptions :column="2" border>
          <el-descriptions-item label="用户名">
            {{ currentDetail.username }}
          </el-descriptions-item>
          <el-descriptions-item label="IP地址">
            {{ currentDetail.ip }}
          </el-descriptions-item>
          <el-descriptions-item label="操作内容">
            {{ currentDetail.operation }}
          </el-descriptions-item>
          <el-descriptions-item label="操作时间">
            {{ currentDetail.operateTime }}
          </el-descriptions-item>
          <el-descriptions-item label="操作结果">
            <el-tag :type="currentDetail.status === 'success' ? 'success' : 'danger'">
              {{ currentDetail.status === 'success' ? '成功' : '失败' }}
            </el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </div>

      <!-- 详细信息 -->
      <div class="detail-section">
        <div class="section-title">详细信息</div>
        <el-descriptions :column="1" border>
          <el-descriptions-item label="操作描述">
            {{ currentDetail.description || '暂无描述' }}
          </el-descriptions-item>
          <el-descriptions-item label="操作参数">
            <div v-if="currentDetail.params" class="code-content">
              <pre>{{ formatJSON(currentDetail.params) }}</pre>
            </div>
            <span v-else>暂无参数</span>
          </el-descriptions-item>
          <el-descriptions-item label="操作结果">
            {{ currentDetail.result || '暂无结果' }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
      
      <!-- 日志来源信息 -->
      <div class="detail-section">
        <div class="section-title">来源信息</div>
        <el-descriptions :column="2" border>
          <el-descriptions-item label="操作来源">
            {{ currentDetail.source || 'Web平台' }}
          </el-descriptions-item>
          <el-descriptions-item label="浏览器">
            {{ currentDetail.browser || 'Chrome 118.0.5993.89' }}
          </el-descriptions-item>
          <el-descriptions-item label="操作系统">
            {{ currentDetail.os || 'Windows 10' }}
          </el-descriptions-item>
          <el-descriptions-item label="位置">
            {{ currentDetail.location || '北京市海淀区' }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { View, ArrowLeft, ArrowRight, Search, Refresh } from '@element-plus/icons-vue'
import { getOperationLogs, getOperationLogDetail, type OperationLogItem } from '@/api/log'
import { operationTypes, modules } from '@/mock/mockData'
import { ElMessage } from 'element-plus'
import type { FormInstance } from 'element-plus'

// 判断是否为开发环境
const isDev = process.env.NODE_ENV === 'development'

// 定义操作日志数据接口
interface OperationLog extends OperationLogItem {
  module?: string
  operationType?: string
  browser?: string
  os?: string
  location?: string
  source?: string
}

// 搜索表单数据
const searchForm = reactive({
  username: '',
  operationType: '',
  timeRange: [] as string[]
})

// 表格数据
const loading = ref(false)
const tableData = ref<OperationLog[]>([])

// 分页相关
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// 详情弹窗相关
const dialogVisible = ref(false)
const detailLoading = ref(false)
const currentDetail = ref<OperationLog>({} as OperationLog)

// 格式化时间范围
const timeRangeParams = computed(() => {
  if (searchForm.timeRange && searchForm.timeRange.length === 2) {
    return {
      startTime: searchForm.timeRange[0],
      endTime: searchForm.timeRange[1]
    }
  }
  return {}
})

// 获取表格数据
const fetchTableData = async () => {
  loading.value = true
  try {
    const params = {
      pageNum: currentPage.value,
      pageSize: pageSize.value,
      username: searchForm.username || undefined,
      operationType: searchForm.operationType || undefined,
      ...timeRangeParams.value
    }
    
    const res: any = await getOperationLogs(params)
    tableData.value = res.data.list
    total.value = res.data.total
  } catch (error) {
    console.error('获取操作日志列表失败', error)
  } finally {
    loading.value = false
  }
}

// 获取详情数据
const fetchDetailData = async (id: number) => {
  detailLoading.value = true
  try {
    const res: any = await getOperationLogDetail(id)
    currentDetail.value = res.data
  } catch (error) {
    console.error('获取操作日志详情失败', error)
  } finally {
    detailLoading.value = false
  }
}

// 初始化加载数据
onMounted(() => {
  fetchTableData()
})

// 监听搜索条件变化
watch(
  () => [currentPage.value, pageSize.value],
  () => {
    fetchTableData()
  }
)

// 查询方法
const handleSearch = () => {
  currentPage.value = 1 // 重置到第一页
  fetchTableData()
}

// 重置查询表单
const handleReset = () => {
  searchForm.username = ''
  searchForm.operationType = ''
  searchForm.timeRange = []
  currentPage.value = 1 // 重置到第一页
  fetchTableData()
}

// 查看详情
const handleViewDetail = (row: OperationLog) => {
  fetchDetailData(row.id)
  dialogVisible.value = true
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

// 格式化JSON字符串
const formatJSON = (jsonString: string) => {
  try {
    // 将JSON字符串转换为对象
    const jsonObj = JSON.parse(jsonString)
    // 将对象转换为格式化的JSON字符串
    return JSON.stringify(jsonObj, null, 2)
  } catch (error) {
    // 如果解析失败，直接返回原字符串
    return jsonString
  }
}
</script>

<style lang="scss" scoped>
.search-form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .search-form {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: flex-end;

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
    
    :deep(.el-button--success) {
      --el-button-bg-color: #67C23A;
      --el-button-border-color: #67C23A;
      --el-button-hover-bg-color: #85ce61;
      --el-button-hover-border-color: #85ce61;
    }
  }
}

.card-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .table-container {
    margin-bottom: 20px;
    
    :deep(.el-table) {
      --el-table-header-bg-color: #f5f7fa;
      --el-table-border-color: #ebeef5;
      --el-table-row-hover-bg-color: #f5f7fa;
      
      th {
        font-weight: bold;
      }
      
      .el-tag {
        padding: 0 8px;
      }
    }
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
    
    .code-content {
      background-color: #f8f8f8;
      border-radius: 4px;
      padding: 10px;
      
      pre {
        margin: 0;
        white-space: pre-wrap;
        word-break: break-word;
        font-family: Consolas, Monaco, monospace;
        font-size: 13px;
        color: #333;
      }
    }
    
    :deep(.el-descriptions__label) {
      width: 100px;
      font-weight: bold;
      color: #606266;
    }
    
    :deep(.el-descriptions__content) {
      color: #303133;
    }
  }
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style> 