<template>
  <!-- 搜索表单 -->
  <el-form :model="searchForm" class="search-form" inline>
    <!-- 申请按钮 -->
    <div class="left-buttons">
      <el-button 
        class="apply-button"
        type="success" 
        :disabled="!selectedData.length"
        @click="handleApply"
      >
        <el-icon><Plus /></el-icon>
        <span>申请探查</span>
      </el-button>
    </div>

    <!-- 搜索区域 -->
    <div class="right-area">
      <el-form-item label="数据产品名称">
        <el-input v-model="searchForm.name" placeholder="请输入数据产品名称" clearable />
      </el-form-item>
      <el-form-item label="所属行业">
        <el-select v-model="searchForm.industry" placeholder="请选择所属行业" clearable style="width: 180px">
          <el-option v-for="item in industryOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
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
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="name" label="数据产品名称" min-width="180" show-overflow-tooltip />
        <el-table-column prop="type" label="类型" width="120">
          <template #default="{ row }">
            <el-tag :type="getTypeTagType(row.type)">{{ row.type }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="industry" label="所属行业" width="150" show-overflow-tooltip />
        <el-table-column prop="createTime" label="创建时间" width="160" show-overflow-tooltip />
        <el-table-column label="操作" width="120" fixed="right">
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
          /> 页
        </template>
      </el-pagination>
    </div>
  </div>

  <!-- 详情弹窗 -->
  <el-dialog
    v-model="detailDialogVisible"
    title="数据产品详情"
    width="60%"
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
          <el-descriptions-item label="类型">
            <el-tag :type="getTypeTagType(currentDetail.type)">{{ currentDetail.type }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="所属行业">
            {{ currentDetail.industry }}
          </el-descriptions-item>
          <el-descriptions-item label="创建时间">
            {{ currentDetail.createTime }}
          </el-descriptions-item>
          <el-descriptions-item label="描述" :span="2">
            {{ currentDetail.description || '暂无描述' }}
          </el-descriptions-item>
        </el-descriptions>
      </div>

      <!-- 数据源信息 -->
      <div class="detail-section">
        <div class="section-title">数据源信息</div>
        <el-descriptions :column="1" border>
          <template v-if="currentDetail.type === '数据库'">
            <el-descriptions-item label="数据库类型">
              {{ currentDetail.dbType }}
            </el-descriptions-item>
            <el-descriptions-item label="服务地址">
              {{ currentDetail.host }}
            </el-descriptions-item>
            <el-descriptions-item label="端口">
              {{ currentDetail.port }}
            </el-descriptions-item>
            <el-descriptions-item label="数据库名称">
              {{ currentDetail.dbName }}
            </el-descriptions-item>
            <el-descriptions-item label="用户名">
              {{ maskUsername(currentDetail.username) }}
            </el-descriptions-item>
          </template>
          <template v-else-if="currentDetail.type === 'CSV'">
            <el-descriptions-item label="文件路径">
              {{ currentDetail.filePath }}
            </el-descriptions-item>
          </template>
          <template v-else-if="currentDetail.type === 'S3对象存储'">
            <el-descriptions-item label="对象存储类型">
              {{ currentDetail.s3Type }}
            </el-descriptions-item>
            <el-descriptions-item label="服务端点">
              {{ currentDetail.endpoint }}
            </el-descriptions-item>
            <el-descriptions-item label="区域">
              {{ currentDetail.region }}
            </el-descriptions-item>
            <el-descriptions-item label="Bucket">
              {{ currentDetail.bucket }}
            </el-descriptions-item>
            <el-descriptions-item label="Path">
              {{ currentDetail.path }}
            </el-descriptions-item>
          </template>
        </el-descriptions>
      </div>

      <!-- 数据样例 -->
      <div class="detail-section">
        <div class="section-title">数据样例</div>
        <div class="sample-data">
          <el-table
            v-if="currentDetail.sampleData && currentDetail.sampleData.length"
            :data="currentDetail.sampleData"
            border
            style="width: 100%"
            max-height="300"
          >
            <el-table-column
              v-for="(col, index) in currentDetail.columns"
              :key="index"
              :prop="col"
              :label="col"
              show-overflow-tooltip
            />
          </el-table>
          <div v-else class="no-data">暂无数据样例</div>
        </div>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="detailDialogVisible = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>

  <!-- 申请确认弹窗 -->
  <el-dialog
    v-model="applyDialogVisible"
    title="确认申请探查"
    width="50%"
    :close-on-click-modal="false"
  >
    <div class="apply-content">
      <div class="apply-info">
        <h4>您选择了以下数据产品进行探查：</h4>
        <el-table :data="selectedData" border style="width: 100%">
          <el-table-column prop="name" label="数据产品名称" />
          <el-table-column prop="type" label="类型" width="120">
            <template #default="{ row }">
              <el-tag :type="getTypeTagType(row.type)">{{ row.type }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="industry" label="所属行业" width="120" />
        </el-table>
      </div>
      <div class="apply-tips">
        <el-alert
          title="提示"
          type="info"
          :closable="false"
          show-icon
        >
          <template #default>
            <p>1. 提交申请后，系统将自动创建探查任务</p>
            <p>2. 探查结果将在任务完成后通过系统消息通知您</p>
            <p>3. 您可以在"探查记录管理"中查看任务进度和结果</p>
          </template>
        </el-alert>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="applyDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitApply">确认申请</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import {
  Search,
  Refresh,
  View,
  DocumentAdd
} from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { useLocale } from 'element-plus'
import { getDataList, getDataDetail } from '@/api/explore-data'
import { submitExploreApply } from '@/api/explore-apply'

// 设置Element Plus的语言为中文
const { locale } = useLocale()
locale.value = zhCn

// 搜索表单数据
const searchForm = reactive({
  name: '',
  industry: ''
})

// 定义数据项接口
interface ExploreDataItem {
  id: number
  name: string
  type: string
  industry: string
  description?: string
  createTime: string
  dbType?: string
  host?: string
  port?: string
  dbName?: string
  username?: string
  filePath?: string
  s3Type?: string
  endpoint?: string
  region?: string
  bucket?: string
  path?: string
  sampleData?: any[]
  columns?: string[]
}

// 表格数据
const loading = ref(false)
const tableData = ref<ExploreDataItem[]>([])
const selectedData = ref<ExploreDataItem[]>([])

// 分页相关
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// 详情弹窗相关
const detailDialogVisible = ref(false)
const detailLoading = ref(false)
const currentDetail = ref<ExploreDataItem>({} as ExploreDataItem)

// 申请弹窗相关
const applyDialogVisible = ref(false)

// 选项数据
const industryOptions = [
  { label: '制造业', value: '制造业' },
  { label: '农业', value: '农业' },
  { label: '建筑业', value: '建筑业' },
  { label: '金融业', value: '金融业' },
  { label: '教育', value: '教育' },
  { label: '卫生和社会工作', value: '卫生和社会工作' }
]

// 获取类型对应的标签样式
const getTypeTagType = (type: string) => {
  const typeMap: Record<string, string> = {
    '数据库': 'primary',
    'CSV': 'success',
    'S3对象存储': 'warning'
  }
  return typeMap[type] || 'info'
}

// 用户名脱敏显示
const maskUsername = (username: string | undefined) => {
  if (!username) return ''
  if (username.length <= 6) return username
  return username.slice(0, 3) + '***' + username.slice(-3)
}

// 获取表格数据
const fetchTableData = async () => {
  loading.value = true
  try {
    const params = {
      name: searchForm.name,
      industry: searchForm.industry,
      currentPage: currentPage.value,
      pageSize: pageSize.value
    }
    const response = await getDataList(params)
    console.log('API响应数据:', response)
    
    // 类型断言
    const res = response as any
    
    if (res && res.code === 200 && res.data) {
      tableData.value = res.data.list || []
      total.value = res.data.total || 0
    } else {
      console.error('API响应格式不符合预期:', res)
      tableData.value = []
      total.value = 0
      ElMessage.warning('获取数据失败')
    }
  } catch (error) {
    console.error('获取数据列表失败', error)
    tableData.value = []
    total.value = 0
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
  currentPage.value = 1
  fetchTableData()
}

// 重置查询表单
const handleReset = () => {
  searchForm.name = ''
  searchForm.industry = ''
  currentPage.value = 1
  fetchTableData()
}

// 查看详情
const handleViewDetail = async (row: any) => {
  detailDialogVisible.value = true
  detailLoading.value = true
  try {
    const response = await getDataDetail(row.id)
    console.log('详情响应:', response)
    
    // 类型断言
    const res = response as any
    
    if (res && res.code === 200 && res.data) {
      currentDetail.value = res.data as ExploreDataItem
    } else {
      ElMessage.error(res?.message || '获取详情失败')
    }
  } catch (error) {
    console.error('获取详情失败', error)
    ElMessage.error('获取详情失败，请稍后重试')
  } finally {
    detailLoading.value = false
  }
}

// 选择数据变化
const handleSelectionChange = (selection: ExploreDataItem[]) => {
  selectedData.value = selection
}

// 申请探查
const handleApply = () => {
  if (!selectedData.value.length) {
    ElMessage.warning('请选择要探查的数据产品')
    return
  }
  applyDialogVisible.value = true
}

// 提交申请
const submitApply = async () => {
  try {
    const data = {
      dataIds: selectedData.value.map(item => item.id),
      applyTime: new Date().toISOString()
    }
    const res = await submitExploreApply(data)
    if (res.code === 200) {
      ElMessage.success('申请提交成功')
      applyDialogVisible.value = false
      selectedData.value = []
    }
  } catch (error) {
    console.error('提交申请失败', error)
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
  justify-content: space-between;
  align-items: center;

  .left-buttons {
    flex-shrink: 0;

    .apply-button {
      --el-button-bg-color: #67c23a;
      --el-button-border-color: #67c23a;
      --el-button-hover-bg-color: #85ce61;
      --el-button-hover-border-color: #85ce61;
      --el-button-active-bg-color: #5daf34;
      --el-button-active-border-color: #5daf34;

      &.is-disabled {
        --el-button-disabled-bg-color: #95d475;
        --el-button-disabled-border-color: #95d475;
        --el-button-disabled-text-color: #fff;
        opacity: 0.6;
        cursor: not-allowed;

        &:hover {
          --el-button-hover-bg-color: #95d475;
          --el-button-hover-border-color: #95d475;
        }
      }
    }
  }

  .right-area {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: flex-end;
    margin-left: auto;
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
  
  :deep(.el-button--success) {
    --el-button-bg-color: #67C23A;
    --el-button-border-color: #67C23A;
    --el-button-hover-bg-color: #85ce61;
    --el-button-hover-border-color: #85ce61;
    --el-button-active-bg-color: #5daf34;
    --el-button-active-border-color: #5daf34;
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

      .el-tag {
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
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
    
    .sample-data {
      .no-data {
        text-align: center;
        color: #909399;
        padding: 20px 0;
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

.apply-content {
  .apply-info {
    margin-bottom: 20px;

    h4 {
      margin: 0 0 15px 0;
      font-size: 16px;
      color: #303133;
    }
  }

  .apply-tips {
    margin-top: 20px;

    :deep(.el-alert) {
      padding: 12px 16px;
      
      .el-alert__title {
        font-size: 14px;
        margin-bottom: 8px;
      }

      p {
        margin: 4px 0;
        font-size: 13px;
        color: #606266;
      }
    }
  }
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

:deep(.el-select__popper) {
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