<template>
  <div class="data-evidence-container">
    <!-- 搜索表单 -->
    <SearchForm @search="handleSearch" @reset="handleReset" />
    
    <!-- 数据列表 -->
    <div class="card-container">
      <div class="table-container">
        <el-table
          v-loading="loading"
          :data="tableData"
          border
          style="width: 100%"
          :header-cell-style="{ background: '#f5f7fa', color: '#606266' }"
        >
          <el-table-column prop="dataName" label="数据名称" min-width="150" show-overflow-tooltip />
          <el-table-column prop="ownerName" label="所有者" min-width="150" show-overflow-tooltip />
          <el-table-column prop="registerType" label="登记类型" width="120" show-overflow-tooltip />
          <el-table-column prop="registerTime" label="登记时间" min-width="150" show-overflow-tooltip />
          <el-table-column prop="registrant" label="登记人" width="120" show-overflow-tooltip />
          <el-table-column label="审核状态" width="120" show-overflow-tooltip>
            <template #default="{ row }">
              <el-tag :type="row.auditStatus === '审核通过' ? 'success' : 'danger'">
                {{ row.auditStatus }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="evidenceNo" label="存证编号" min-width="180" show-overflow-tooltip />
          <el-table-column prop="evidenceTime" label="存证时间" min-width="150" show-overflow-tooltip />
          <el-table-column label="操作" width="120" fixed="right">
            <template #default="{ row }">
              <div class="table-actions">
                <el-button
                  link
                  type="primary"
                  class="operation-button"
                  @click="handleViewDetail(row.evidenceNo)"
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
          v-model:currentPage="queryParams.pageNum"
          v-model:page-size="queryParams.pageSize"
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
      v-model="detailDialog.visible"
      title="数据登记存证详情"
      width="60%"
      :close-on-click-modal="false"
      destroy-on-close
    >
      <div v-loading="detailDialog.loading" class="detail-content">
        <!-- 基本信息 -->
        <div class="detail-section">
          <div class="section-title">基本信息</div>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="数据名称">
              {{ detailDialog.data?.dataName }}
            </el-descriptions-item>
            <el-descriptions-item label="数据所有者">
              {{ detailDialog.data?.ownerName }}
            </el-descriptions-item>
            <el-descriptions-item label="登记类型">
              {{ detailDialog.data?.registerType }}
            </el-descriptions-item>
            <el-descriptions-item label="审核状态">
              <el-tag :type="detailDialog.data?.auditStatus === '审核通过' ? 'success' : 'danger'">
                {{ detailDialog.data?.auditStatus }}
              </el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="登记时间">
              {{ detailDialog.data?.registerTime }}
            </el-descriptions-item>
            <el-descriptions-item label="登记人">
              {{ detailDialog.data?.registrant }}
            </el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 数据信息 -->
        <div class="detail-section">
          <div class="section-title">数据信息</div>
          <el-descriptions :column="1" border>
            <el-descriptions-item label="数据描述">
              {{ detailDialog.data?.dataDescription || '暂无描述' }}
            </el-descriptions-item>
            <el-descriptions-item label="数据来源">
              {{ detailDialog.data?.dataOrigin || '暂无来源' }}
            </el-descriptions-item>
            <el-descriptions-item label="数据格式">
              {{ detailDialog.data?.formatType || '暂无格式' }}
            </el-descriptions-item>
            <el-descriptions-item label="数据大小">
              {{ detailDialog.data?.dataSize || '暂无大小' }}
            </el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 存证信息 -->
        <div class="detail-section">
          <div class="section-title">存证信息</div>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="存证编号">
              {{ detailDialog.data?.evidenceNo }}
            </el-descriptions-item>
            <el-descriptions-item label="存证时间">
              {{ detailDialog.data?.evidenceTime }}
            </el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 文件信息 -->
        <div class="detail-section" v-if="detailDialog.data?.materials?.length">
          <div class="section-title">登记材料</div>
          <el-table :data="detailDialog.data.materials" border>
            <el-table-column prop="name" label="材料名称" />
            <el-table-column prop="type" label="材料类型" />
            <el-table-column label="操作" width="120">
              <template #default="{ row }">
                <el-button type="primary" link @click="handleDownload(row)">
                  下载
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <!-- 审核信息 -->
        <div class="detail-section" v-if="detailDialog.data?.auditReason">
          <div class="section-title">审核信息</div>
          <el-descriptions :column="1" border>
            <el-descriptions-item label="审核原因">
              {{ detailDialog.data.auditReason || '暂无意见' }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="detailDialog.visible = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { ArrowLeft, ArrowRight, View } from '@element-plus/icons-vue'
import SearchForm from './components/SearchForm.vue'
import { getDataEvidenceList, getDataEvidenceDetail } from '@/api/data-evidence'
import type { DataEvidence, QueryParams } from '@/types'

// 查询参数
const queryParams = reactive<QueryParams>({
  pageNum: 1,
  pageSize: 10
})

// 表格数据
const tableData = ref<DataEvidence[]>([])
// 总记录数
const total = ref(0)
// 加载状态
const loading = ref(false)

// 详情弹窗
const detailDialog = reactive({
  visible: false,
  loading: false,
  data: null as DataEvidence | null
})

// 详情数据
const detailData = ref<DataEvidence | null>(null)

// 初始化
onMounted(() => {
  fetchDataList()
})

// 获取数据列表
const fetchDataList = async () => {
  loading.value = true
  try {
    const res = await getDataEvidenceList(queryParams)
    tableData.value = res.list
    total.value = res.total
  } catch (error) {
    console.error('获取数据失败', error)
    ElMessage.error('获取数据失败')
  } finally {
    loading.value = false
  }
}

// 处理搜索
const handleSearch = (formData: any) => {
  queryParams.pageNum = 1
  Object.assign(queryParams, formData)
  fetchDataList()
}

// 处理重置
const handleReset = () => {
  queryParams.pageNum = 1
  queryParams.pageSize = 10
  // 清除其他查询条件，保留分页参数
  Object.keys(queryParams).forEach(key => {
    if (!['pageNum', 'pageSize'].includes(key)) {
      delete queryParams[key]
    }
  })
  fetchDataList()
}

// 处理每页条数变化
const handleSizeChange = (val: number) => {
  queryParams.pageSize = val
  fetchDataList()
}

// 处理页码变化
const handleCurrentChange = (val: number) => {
  queryParams.pageNum = val
  fetchDataList()
}

// 处理查看详情
const handleViewDetail = async (evidenceNo: string) => {
  detailDialog.visible = true
  detailDialog.loading = true
  
  try {
    const res = await getDataEvidenceDetail(evidenceNo)
    detailData.value = res
    detailDialog.data = res
  } catch (error) {
    console.error('获取详情失败', error)
    ElMessage.error('获取详情失败')
  } finally {
    detailDialog.loading = false
  }
}

// 处理下载
const handleDownload = (file: any) => {
  // 实际情况中应该调用下载API
  if (file.url) {
    window.open(file.url, '_blank')
  } else {
    ElMessage.warning('文件链接不存在')
  }
}
</script>

<style lang="scss" scoped>
.data-evidence-container {
  min-height: 100%;
  
  .detail-container {
    padding: 0;
    max-height: 65vh;
    overflow-y: auto;
    
    .title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ebeef5;
    }
    
    .section {
      margin-bottom: 25px;
      
      .section-title {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 15px;
        color: #303133;
      }
      
      .info-item {
        display: flex;
        margin-bottom: 12px;
        
        .label {
          width: 120px;
          font-weight: 500;
          color: #606266;
        }
        
        .value {
          flex: 1;
          color: #303133;
        }
        
        .content-block {
          background-color: #f5f7fa;
          padding: 10px;
          border-radius: 4px;
          
          pre {
            margin: 0;
            white-space: pre-wrap;
            word-break: break-all;
          }
        }
      }
    }
  }
  
  .dialog-footer {
    text-align: right;
    margin-top: 10px;
  }
}

:deep(.el-dialog__body) {
  padding: 20px 20px 0;
}

.detail-content {
  max-height: 65vh;
  overflow-y: auto;
  padding: 0 20px;

  .detail-section {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }

    .section-title {
      font-size: 16px;
      font-weight: 500;
      color: #303133;
      margin-bottom: 16px;
      padding-left: 8px;
      border-left: 4px solid #409EFF;
    }
  }

  :deep(.el-descriptions) {
    margin-bottom: 16px;
  }

  :deep(.el-descriptions__label) {
    width: 120px;
    color: #606266;
  }

  :deep(.el-descriptions__content) {
    color: #303133;
  }

  :deep(.el-table) {
    margin-bottom: 16px;
  }
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style> 