<template>
  <!-- 搜索表单 -->
  <el-form :model="searchForm" class="search-form" inline>
    <!-- 搜索区域 -->
    <div class="right-area">
      <el-form-item label="数据产品名称">
        <el-input v-model="searchForm.name" placeholder="请输入数据产品名称" clearable />
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
    </div>
  </el-form>

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
        <el-table-column prop="name" label="数据产品名称" min-width="180" show-overflow-tooltip />
        <el-table-column prop="sampleCount" label="样本数量" width="100" align="center" />
        <el-table-column prop="matchCount" label="匹配数量" width="100" align="center" />
        <el-table-column prop="matchRate" label="匹配率" width="100" align="center">
          <template #default="{ row }">
            {{ (row.matchRate * 100).toFixed(2) }}%
          </template>
        </el-table-column>
        <el-table-column prop="maxValue" label="最大值" width="120" show-overflow-tooltip />
        <el-table-column prop="minValue" label="最小值" width="120" show-overflow-tooltip />
        <el-table-column prop="medianValue" label="中位数" width="120" show-overflow-tooltip />
        <el-table-column label="操作" width="200" fixed="right">
          <template #default="{ row }">
            <div class="table-actions">
              <el-button
                link
                type="primary"
                class="operation-button"
                @click="handleViewDetail(row)"
              >
                <el-icon><View /></el-icon>
                <span>查看</span>
              </el-button>
              <el-button
                link
                type="primary"
                class="operation-button"
                @click="handleDownloadReport(row)"
              >
                <el-icon><Download /></el-icon>
                <span>下载</span>
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
        :total="total"
        :pager-count="5"
        layout="total, sizes, prev, pager, next, jumper"
        prev-text="<"
        next-text=">"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        class="custom-pagination"
      >
        <template #total>
          共 {{ total }} 条
        </template>
        <template #sizes>
          <el-select
            v-model="pageSize"
            style="width: 95px"
            popper-class="pagination-dropdown"
            @change="handleSizeChange"
          >
            <el-option
              v-for="item in [10, 20, 50, 100]"
              :key="item"
              :value="item"
              :label="`${item}条/页`"
            />
          </el-select>
        </template>
        <template #jumper>
          前往 <el-input
            v-model.number="currentPage"
            class="jump-input"
            @change="handleCurrentChange"
          /> 页
        </template>
      </el-pagination>
    </div>
  </div>

  <!-- 详情弹窗 -->
  <el-dialog
    v-model="detailDialogVisible"
    title="探查报告详情"
    width="70%"
    :close-on-click-modal="false"
    destroy-on-close
  >
    <div v-loading="detailLoading" class="detail-content">
      <!-- 基本信息 -->
      <div class="detail-section">
        <div class="section-title">基本信息</div>
        <el-descriptions :column="2" border>
          <el-descriptions-item label="数据产品名称">
            {{ currentDetail.name }}
          </el-descriptions-item>
          <el-descriptions-item label="样本数量">
            {{ currentDetail.sampleCount }}
          </el-descriptions-item>
          <el-descriptions-item label="匹配数量">
            {{ currentDetail.matchCount }}
          </el-descriptions-item>
          <el-descriptions-item label="匹配率">
            {{ (currentDetail.matchRate * 100).toFixed(2) }}%
          </el-descriptions-item>
        </el-descriptions>
      </div>

      <!-- 特征统计 -->
      <div class="detail-section">
        <div class="section-title">特征统计</div>
        <el-table
          :data="currentDetail.features"
          border
          style="width: 100%"
        >
          <el-table-column prop="name" label="特征名称" min-width="150" />
          <el-table-column prop="type" label="数据类型" width="100" />
          <el-table-column label="统计指标" min-width="200">
            <template #default="{ row }">
              <div v-if="row.type === '数值型'">
                <div>平均值: {{ row.stats.mean }}</div>
                <div>标准差: {{ row.stats.std }}</div>
                <div>方差: {{ row.stats.variance }}</div>
              </div>
              <div v-else-if="row.type === '文本型'">
                <div>词频统计:</div>
                <el-tag
                  v-for="(count, word) in row.stats.wordFrequency"
                  :key="word"
                  size="small"
                  class="mr-2"
                >
                  {{ word }}: {{ count }}
                </el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="maxValue" label="最大值" width="120" show-overflow-tooltip />
          <el-table-column prop="minValue" label="最小值" width="120" show-overflow-tooltip />
          <el-table-column prop="medianValue" label="中位数" width="120" show-overflow-tooltip />
        </el-table>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="detailDialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="handleDownloadReport(currentDetail)">下载报告</el-button>
      </span>
    </template>
  </el-dialog>

  <!-- 下载格式选择弹窗 -->
  <el-dialog
    v-model="downloadDialogVisible"
    title="选择下载格式"
    width="30%"
    :close-on-click-modal="false"
  >
    <div class="download-options">
      <el-radio-group v-model="downloadFormat">
        <el-radio label="pdf">PDF格式</el-radio>
        <el-radio label="excel">Excel格式</el-radio>
      </el-radio-group>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="downloadDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmDownload">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { Search, Refresh, View, Download } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { getReportList, getReportDetail, downloadReport } from '@/api/explore-report'

// 搜索表单数据
const searchForm = reactive({
  name: ''
})

// 定义数据项接口
interface ReportItem {
  id: number
  name: string
  sampleCount: number
  matchCount: number
  matchRate: number
  maxValue: string
  minValue: string
  medianValue: string
  features?: FeatureItem[]
}

interface FeatureItem {
  name: string
  type: string
  stats: {
    mean?: number
    std?: number
    variance?: number
    wordFrequency?: Record<string, number>
  }
  maxValue: string
  minValue: string
  medianValue: string
}

// 表格数据
const loading = ref(false)
const tableData = ref<ReportItem[]>([])

// 分页相关
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// 详情弹窗相关
const detailDialogVisible = ref(false)
const detailLoading = ref(false)
const currentDetail = ref<ReportItem>({} as ReportItem)

// 下载相关
const downloadDialogVisible = ref(false)
const downloadFormat = ref('pdf')
const currentDownloadItem = ref<ReportItem | null>(null)

// 获取表格数据
const fetchTableData = async () => {
  loading.value = true
  try {
    const params = {
      name: searchForm.name,
      currentPage: currentPage.value,
      pageSize: pageSize.value
    }
    const res = await getReportList(params)
    console.log('API响应数据:', res)
    
    if (res.code === 200 && res.data) {
      tableData.value = res.data.list || []
      total.value = res.data.total || 0
      
      if (res.data.list.length === 0) {
        ElMessage.info('暂无数据')
      }
    } else {
      tableData.value = []
      total.value = 0
      ElMessage.warning('数据格式错误')
    }
  } catch (error) {
    console.error('获取报告列表失败', error)
    ElMessage.error('获取数据失败，请稍后重试')
    tableData.value = []
    total.value = 0
  } finally {
    loading.value = false
  }
}

// 初始化加载数据
onMounted(() => {
  console.log('组件挂载，开始获取数据')
  fetchTableData()
})

// 查询方法
const handleSearch = () => {
  currentPage.value = 1
  fetchTableData()
}

// 重置查询表单
const handleReset = () => {
  searchForm.name = ''
  currentPage.value = 1
  fetchTableData()
}

// 查看详情
const handleViewDetail = async (row: ReportItem) => {
  detailDialogVisible.value = true
  detailLoading.value = true
  try {
    console.log('查看详情, 数据ID:', row.id)
    
    // 直接使用传入的行数据显示详情，确保显示的是列表中选中的那条数据
    currentDetail.value = { ...row };
    
    // 如果行数据没有features，则尝试获取一次详情
    if (!row.features || row.features.length === 0) {
      const res = await getReportDetail(row.id)
      console.log('获取详情响应:', res)
      if (res.code === 200 && res.data && res.data.features) {
        // 只更新features字段，保留其他字段的原始值
        currentDetail.value.features = res.data.features
      } else {
        // 如果获取失败，则生成一些基本的特征数据作为示例
        currentDetail.value.features = [
          {
            name: '示例特征',
            type: '数值型',
            stats: {
              mean: 100,
              std: 15,
              variance: 225
            },
            maxValue: '150',
            minValue: '50',
            medianValue: '100'
          }
        ]
      }
    }
  } catch (error: any) {
    console.error('获取详情失败', error)
    if (error.code === 'ERR_NETWORK') {
      ElMessage.error('无法连接到后端服务，请检查网络连接是否正常')
    } else {
      ElMessage.error(`获取详情失败: ${error.message}`)
    }
  } finally {
    detailLoading.value = false
  }
}

// 下载报告
const handleDownloadReport = (row: ReportItem) => {
  try {
    currentDownloadItem.value = row
    downloadDialogVisible.value = true
  } catch (error) {
    console.error('打开下载对话框失败', error)
    ElMessage.error('操作失败，请稍后重试')
  }
}

// 确认下载
const confirmDownload = async () => {
  if (!currentDownloadItem.value) return
  
  try {
    const res = await downloadReport(currentDownloadItem.value.id, downloadFormat.value)
    if (res.code === 200) {
      if (res.data?.fileUrl) {
        // 如果返回了文件URL，打开新窗口下载
        window.open(res.data.fileUrl, '_blank')
      }
      ElMessage.success('下载成功')
      downloadDialogVisible.value = false
    } else {
      ElMessage.error(res.message || '下载失败')
    }
  } catch (error: any) {
    console.error('下载失败', error)
    if (error.code === 'ERR_NETWORK') {
      ElMessage.error('网络连接失败，请检查网络并重试')
    } else {
      ElMessage.error('下载失败，请稍后重试')
    }
  }
}

// 分页方法
const handleSizeChange = (val: number) => {
  pageSize.value = val
  currentPage.value = 1
  fetchTableData()
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
  fetchTableData()
}
</script>

<style lang="scss" scoped>
.search-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .right-area {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: flex-end;
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
}

.card-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .table-container {
    margin-bottom: 20px;
    
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

.download-options {
  padding: 20px;
  text-align: center;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.mr-2 {
  margin-right: 8px;
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