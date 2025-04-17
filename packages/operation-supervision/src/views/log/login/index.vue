<template>
  <div class="login-log">
    <!-- 搜索表单 -->
    <div class="search-form-container">
      <el-form :model="searchForm" class="search-form" inline>
        <el-form-item label="用户名">
          <el-input v-model="searchForm.username" placeholder="请输入用户名" clearable />
        </el-form-item>
        <el-form-item label="IP地址">
          <el-input v-model="searchForm.ip" placeholder="请输入IP地址" clearable />
        </el-form-item>
        <el-form-item label="登录状态">
          <el-select v-model="searchForm.status" placeholder="请选择登录状态" clearable style="width: 120px;">
            <el-option label="成功" value="success" />
            <el-option label="失败" value="failed" />
          </el-select>
        </el-form-item>
        <el-form-item label="登录时间">
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
          <el-table-column prop="username" label="用户名" min-width="120" show-overflow-tooltip />
          <el-table-column prop="ip" label="IP地址" min-width="140" show-overflow-tooltip />
          <el-table-column prop="device" label="登录设备" min-width="150" show-overflow-tooltip />
          <el-table-column prop="browser" label="浏览器" min-width="180" show-overflow-tooltip />
          <el-table-column prop="loginTime" label="登录时间" min-width="180" show-overflow-tooltip />
          <el-table-column prop="status" label="登录状态" width="100" show-overflow-tooltip>
            <template #default="{ row }">
              <el-tag :type="row.status === 'success' ? 'success' : 'danger'">
                {{ row.status === 'success' ? '成功' : '失败' }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="120" fixed="right">
            <template #default="{ row }">
              <div class="table-actions">
                <el-button link type="primary" class="operation-button" @click="handleViewDetail(row)">
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

    <!-- 详情弹窗 -->
    <el-dialog
      v-model="dialogVisible"
      title="登录详情"
      width="60%"
      :close-on-click-modal="false"
      destroy-on-close
    >
      <div v-loading="detailLoading" class="detail-content">
        <!-- 基本信息 -->
        <div class="detail-section">
          <div class="section-title">基本信息</div>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="用户名">{{ currentDetail.username }}</el-descriptions-item>
            <el-descriptions-item label="IP地址">{{ currentDetail.ip }}</el-descriptions-item>
            <el-descriptions-item label="登录设备">{{ currentDetail.device }}</el-descriptions-item>
            <el-descriptions-item label="浏览器">{{ currentDetail.browser }}</el-descriptions-item>
            <el-descriptions-item label="操作系统">{{ currentDetail.os }}</el-descriptions-item>
            <el-descriptions-item label="登录时间">{{ currentDetail.loginTime }}</el-descriptions-item>
            <el-descriptions-item label="登录状态">
              <el-tag :type="currentDetail.status === 'success' ? 'success' : 'danger'">
                {{ currentDetail.status === 'success' ? '成功' : '失败' }}
              </el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="地理位置">{{ currentDetail.location || '未知' }}</el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 详细信息 -->
        <div class="detail-section">
          <div class="section-title">详细信息</div>
          <el-descriptions :column="1" border>
            <el-descriptions-item v-if="currentDetail.status === 'failed'" label="失败原因">
              {{ currentDetail.failReason || '未知原因' }}
            </el-descriptions-item>
            <el-descriptions-item label="备注信息">{{ currentDetail.remark || '暂无备注' }}</el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 请求参数 -->
        <div v-if="currentDetail.requestParams" class="detail-section">
          <div class="section-title">请求参数</div>
          <div class="json-container">
            <pre>{{ formatJSON(currentDetail.requestParams) }}</pre>
          </div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { View, Search, ArrowLeft, ArrowRight, Refresh } from '@element-plus/icons-vue'
import { getLoginLogs, getLoginLogDetail, type LoginLogItem } from '@/api/log'
import { ElMessage } from 'element-plus'

// 定义登录日志数据接口
interface LoginLog extends LoginLogItem {
  requestParams?: any; // 添加请求参数字段，修复类型错误
}

// 搜索表单数据
const searchForm = reactive({
  username: '',
  ip: '',
  status: '',
  timeRange: [] as string[]
})

// 加载状态
const loading = ref(false)
const detailLoading = ref(false)

// 表格数据
const tableData = ref<LoginLog[]>([])

// 分页相关
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

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
      ip: searchForm.ip || undefined,
      status: searchForm.status || undefined,
      ...timeRangeParams.value
    }
    
    const res: any = await getLoginLogs(params)
    tableData.value = res.data.list
    total.value = res.data.total
  } catch (error) {
    console.error('获取登录日志列表失败', error)
    ElMessage.error('获取登录日志列表失败')
  } finally {
    loading.value = false
  }
}

// 获取详情数据
const fetchDetailData = async (id: number) => {
  detailLoading.value = true
  try {
    const res: any = await getLoginLogDetail(id)
    currentDetail.value = res.data
  } catch (error) {
    console.error('获取登录日志详情失败', error)
    ElMessage.error('获取登录日志详情失败')
  } finally {
    detailLoading.value = false
  }
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
  searchForm.username = ''
  searchForm.ip = ''
  searchForm.status = ''
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

// 详情弹窗相关
const dialogVisible = ref(false)
const currentDetail = ref<LoginLog>({} as LoginLog)

// 查看详情
const handleViewDetail = (row: LoginLog) => {
  fetchDetailData(row.id)
  dialogVisible.value = true
}

// 格式化JSON数据为易读的格式
const formatJSON = (json: any) => {
  if (!json) return ''
  try {
    if (typeof json === 'string') {
      return JSON.stringify(JSON.parse(json), null, 2)
    } else {
      return JSON.stringify(json, null, 2)
    }
  } catch (e) {
    return json
  }
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
      margin-right: 0; /* 覆盖Element Plus默认样式 */
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
  }

  .json-container {
    background-color: #f8f8f8;
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    
    pre {
      padding: 16px;
      margin: 0;
      white-space: pre-wrap;
      word-wrap: break-word;
      font-family: 'Courier New', Courier, monospace;
      font-size: 14px;
      color: #333;
      max-height: 300px;
      overflow-y: auto;
    }
  }
}
</style> 