<template>
  <div class="suggestion-list">
    <!-- 搜索表单 -->
    <div class="search-form-container">
      <el-form :model="searchForm" class="search-form" inline>
        <el-form-item label="建议人">
          <el-input v-model="searchForm.suggester" placeholder="请输入建议人" clearable style="width: 180px;" />
        </el-form-item>
        <el-form-item label="提交时间">
          <el-date-picker
            v-model="searchForm.timeRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="YYYY-MM-DD"
            style="width: 320px;"
          />
        </el-form-item>
        <el-form-item label="采纳状态">
          <el-select v-model="searchForm.status" placeholder="请选择状态">
            <el-option label="全部" value="" />
            <el-option label="待采纳" value="pending" />
            <el-option label="已采纳" value="adopted" />
            <el-option label="不采纳" value="rejected" />
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
          <el-table-column prop="suggester" label="建议人姓名" width="120" show-overflow-tooltip />
          <el-table-column prop="contact" label="联系方式" width="150" show-overflow-tooltip />
          <el-table-column prop="title" label="建议标题" min-width="150" show-overflow-tooltip />
          <el-table-column label="建议内容摘要" min-width="200">
            <template #default="{ row }">
              <div class="content-wrapper">
                <div class="content-summary">{{ getContentSummary(row.content) }}</div>
                <el-button v-if="row.content.length > 50" link type="primary" size="small" @click="showFullContent(row)" class="expand-button">
                  展开全文
                </el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="建议时间" width="180" show-overflow-tooltip />
          <el-table-column prop="status" label="采纳状态" width="100" show-overflow-tooltip>
            <template #default="{ row }">
              <el-tag :type="getStatusType(row.status)" size="small" effect="light">
                {{ getStatusName(row.status) }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="180" fixed="right">
            <template #default="{ row }">
              <div class="table-actions">
                <el-button 
                  link 
                  type="primary" 
                  class="operation-button" 
                  @click="handleViewDetail(row)"
                >
                  <el-icon><View /></el-icon>
                  <span>详情</span>
                </el-button>
                <el-button 
                  v-if="row.status === 'pending'" 
                  link 
                  type="primary" 
                  class="operation-button" 
                  @click="handleProcess(row)"
                >
                  <el-icon><Edit /></el-icon>
                  <span>处理</span>
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
      v-model="detailDialogVisible"
      title="建议详情"
      width="70%"
      :close-on-click-modal="false"
      destroy-on-close
    >
      <div v-loading="detailLoading" class="detail-content">
        <!-- 基本信息 -->
        <div class="detail-section">
          <div class="section-title">基本信息</div>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="建议编号">{{ currentDetail.id }}</el-descriptions-item>
            <el-descriptions-item label="建议人">{{ currentDetail.suggester }}</el-descriptions-item>
            <el-descriptions-item label="联系方式">{{ currentDetail.contact }}</el-descriptions-item>
            <el-descriptions-item label="建议类型">
              <el-tag :type="getTypeTag(currentDetail.type)" size="small" effect="light">
                {{ getTypeName(currentDetail.type) }}
              </el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="提交时间">{{ currentDetail.createTime }}</el-descriptions-item>
            <el-descriptions-item label="处理状态">
              <el-tag :type="getStatusType(currentDetail.status)" size="small" effect="light">
                {{ getStatusName(currentDetail.status) }}
              </el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 详细信息 -->
        <div class="detail-section">
          <div class="section-title">详细信息</div>
          <el-descriptions :column="1" border>
            <el-descriptions-item label="建议标题">{{ currentDetail.title }}</el-descriptions-item>
            <el-descriptions-item label="建议内容">
              <div class="content-box">{{ currentDetail.content }}</div>
            </el-descriptions-item>
            <el-descriptions-item label="附件信息">{{ currentDetail.attachments || '暂无附件' }}</el-descriptions-item>
            <el-descriptions-item label="备注信息">{{ currentDetail.remark || '暂无备注' }}</el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 处理记录 -->
        <div v-if="currentDetail.processInfo?.length" class="detail-section">
          <div class="section-title">处理记录</div>
          <el-timeline>
            <el-timeline-item
              v-for="(item, index) in currentDetail.processInfo"
              :key="index"
              :timestamp="item.time"
              :type="getProcessType(item.status)"
            >
              <h4>{{ item.operator }}</h4>
              <p>{{ item.content }}</p>
              <div class="status-tag">
                <el-tag :type="getStatusType(item.status)" size="small" effect="light">
                  {{ getStatusName(item.status) }}
                </el-tag>
              </div>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="detailDialogVisible = false">关闭</el-button>
          <el-button 
            v-if="currentDetail.status === 'pending'" 
            type="primary" 
            @click="handleProcess(currentDetail)"
          >
            处理建议
          </el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 处理弹窗 -->
    <el-dialog
      v-model="processDialogVisible"
      title="处理建议"
      width="60%"
      :close-on-click-modal="false"
      destroy-on-close
    >
      <el-form 
        ref="processFormRef" 
        :model="processForm" 
        :rules="processRules" 
        label-width="100px" 
        label-position="right"
      >
        <el-form-item label="建议编号">
          <span>{{ currentDetail.id }}</span>
        </el-form-item>
        <el-form-item label="建议人">
          <span>{{ currentDetail.suggester }}</span>
        </el-form-item>
        <el-form-item label="联系方式">
          <span>{{ currentDetail.contact }}</span>
        </el-form-item>
        <el-form-item label="建议标题">
          <span>{{ currentDetail.title }}</span>
        </el-form-item>
        <el-form-item label="建议内容">
          <div class="readonly-content">{{ currentDetail.content }}</div>
        </el-form-item>
        <el-form-item label="处理结果" prop="status">
          <el-select v-model="processForm.status" placeholder="请选择处理结果" style="width: 100%">
            <el-option label="采纳" value="adopted" />
            <el-option label="不采纳" value="rejected" />
          </el-select>
        </el-form-item>
        <el-form-item label="处理反馈" prop="feedback">
          <el-input 
            v-model="processForm.feedback" 
            type="textarea" 
            :rows="4" 
            placeholder="请输入处理反馈"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="processDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitProcess" :loading="submitting">提交</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { View, Edit, Search, ArrowLeft, ArrowRight, Refresh } from '@element-plus/icons-vue'
import { getSuggestionList, processSuggestion, type SuggestionQueryParams } from '@/api/suggestion'
import type { FormInstance, FormRules } from 'element-plus'

// 搜索表单数据
const searchForm = reactive({
  suggester: '',
  status: '',
  timeRange: [] as string[]
})

// 加载状态
const loading = ref(false)
const detailLoading = ref(false)
const submitting = ref(false)

// 表格数据
const tableData = ref<SuggestionRecord[]>([])

// 分页相关
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// 建议记录接口定义
interface SuggestionRecord {
  id: string
  suggester: string
  contact: string
  title: string
  type: string
  content: string
  createTime: string
  status: string
  attachments?: string
  remark?: string
  processInfo?: Array<{
    time: string
    operator: string
    content: string
    status: string
    feedback?: string
  }>
}

// 获取表格数据
const fetchTableData = async () => {
  loading.value = true
  try {
    const params: SuggestionQueryParams = {
      suggester: searchForm.suggester,
      status: searchForm.status,
      timeRange: searchForm.timeRange,
      pageNum: currentPage.value,
      pageSize: pageSize.value
    }
    
    // 调用API获取数据
    const res = await getSuggestionList(params)
    if (res.code === 200) {
      tableData.value = res.data.list
      total.value = res.data.total
    } else {
      ElMessage.error(res.message || '获取建议记录列表失败')
    }
  } catch (error) {
    console.error('获取建议记录列表失败', error)
    ElMessage.error('获取建议记录列表失败')
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
  currentPage.value = 1 // 重置到第一页
  fetchTableData()
}

// 重置查询表单
const handleReset = () => {
  searchForm.suggester = ''
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
const detailDialogVisible = ref(false)
const currentDetail = ref<SuggestionRecord>({} as SuggestionRecord)

// 处理弹窗相关
const processDialogVisible = ref(false)
const processFormRef = ref<FormInstance>()
const processForm = reactive({
  status: '',
  feedback: ''
})

// 处理表单校验规则
const processRules = reactive<FormRules>({
  status: [
    { required: true, message: '请选择处理结果', trigger: 'change' }
  ],
  feedback: [
    { required: true, message: '请输入处理反馈', trigger: 'blur' },
    { min: 5, max: 500, message: '处理反馈长度在5-500个字符之间', trigger: 'blur' }
  ]
})

// 获取建议类型标签样式
const getTypeTag = (type: string) => {
  const typeMap: Record<string, 'success' | 'warning' | 'info' | 'primary' | 'danger'> = {
    'feature': 'primary',
    'bug': 'danger',
    'optimization': 'success',
    'other': 'info',
  };
  return typeMap[type] || 'info';
}

// 获取建议类型显示文本
const getTypeName = (type: string) => {
  const map: Record<string, string> = {
    function: '功能优化',
    ui: '界面体验',
    data: '数据服务',
    other: '其他'
  }
  return map[type] || type
}

// 获取状态标签样式
const getStatusType = (status: string) => {
  const statusMap: Record<string, 'success' | 'warning' | 'info' | 'primary' | 'danger'> = {
    'pending': 'info',
    'adopted': 'success',
    'rejected': 'danger',
  };
  return statusMap[status] || 'info';
}

// 获取状态显示文本
const getStatusName = (status: string) => {
  const map: Record<string, string> = {
    pending: '待采纳',
    adopted: '已采纳',
    rejected: '不采纳'
  }
  return map[status] || status
}

// 获取处理记录标签样式
const getProcessType = (status: string) => {
  const statusMap: Record<string, 'success' | 'warning' | 'info' | 'primary' | 'danger'> = {
    'adopted': 'success',
    'rejected': 'danger',
    'pending': 'info',
  };
  return statusMap[status] || 'primary';
}

// 查看详情
const handleViewDetail = (row: SuggestionRecord) => {
  currentDetail.value = row
  detailDialogVisible.value = true
}

// 处理建议
const handleProcess = (row: SuggestionRecord) => {
  currentDetail.value = row
  processForm.status = ''
  processForm.feedback = ''
  processDialogVisible.value = true
}

// 提交处理
const submitProcess = async () => {
  if (!processFormRef.value) return;
  
  await processFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      submitting.value = true
      try {
        // 调用API处理建议
        const res = await processSuggestion(currentDetail.value.id, {
          status: processForm.status,
          feedback: processForm.feedback
        })
        
        if (res.code === 200) {
          ElMessage.success('处理成功')
          processDialogVisible.value = false
          
          // 重新查询数据，添加短暂延时确保后端数据已更新
          setTimeout(() => {
            // 强制重置当前页为1并刷新数据
            currentPage.value = 1
            fetchTableData()
            // 二次刷新确保数据最新
            setTimeout(() => {
              fetchTableData()
            }, 300)
          }, 300)
        } else {
          ElMessage.error(res.message || '处理失败')
        }
      } catch (error) {
        console.error('处理建议失败', error)
        ElMessage.error('处理建议失败')
      } finally {
        submitting.value = false
      }
    }
  });
}

// 获取内容摘要
const getContentSummary = (content: string) => {
  if (!content) return '';
  return content.length > 50 ? content.substring(0, 50) + '...' : content;
}

// 显示全文内容
const showFullContent = (row: SuggestionRecord) => {
  ElMessageBox.alert(row.content, row.title || '建议详情', {
    confirmButtonText: '关闭',
    customClass: 'full-content-dialog'
  });
}

// 获取模拟数据
const fetchSuggestionData = () => {
  loading.value = true;
  // 模拟API请求延迟
  setTimeout(() => {
    // 模拟建议数据
    const mockData: SuggestionRecord[] = [
      {
        id: 'SG000001',
        suggester: '张明',
        contact: '13812345678',
        title: '数据目录搜索优化建议',
        type: 'optimization',
        content: '目前数据目录搜索功能较为简单，建议增加高级搜索功能，支持按数据源、更新时间、责任部门等多维度组合查询，提高数据查找效率。',
        createTime: '2024-05-15 09:30:22',
        status: 'adopted',
        attachments: '优化方案.docx',
        processInfo: [
          {
            time: '2024-05-16 14:25:10',
            operator: '王管理',
            content: '已采纳该建议，计划在下一版本中实现高级搜索功能，感谢您的宝贵意见。',
            status: 'adopted'
          }
        ]
      },
      {
        id: 'SG000002',
        suggester: '李华',
        contact: '15987654321',
        title: '数据质量评价功能建议',
        type: 'feature',
        content: '建议在数据管理平台增加数据质量评价功能，用户可以对数据集进行评分和评价，帮助其他用户了解数据质量情况。',
        createTime: '2024-05-14 16:45:33',
        status: 'pending',
        attachments: '',
      },
      {
        id: 'SG000003',
        suggester: '赵小红',
        contact: '18612345678',
        title: '元数据展示优化',
        type: 'bug',
        content: '在查看元数据详情时，部分长文本字段显示不完整，且没有提供展开查看的功能，影响用户体验。',
        createTime: '2024-05-10 10:22:15',
        status: 'rejected',
        attachments: '问题截图.png',
        processInfo: [
          {
            time: '2024-05-11 09:15:30',
            operator: '系统管理员',
            content: '经研究，该问题已在新版本中修复，将在下周发布。暂不做额外处理。',
            status: 'rejected'
          }
        ]
      }
    ];

    tableData.value = mockData;
    total.value = mockData.length;
    loading.value = false;
    
    // 延迟显示加载完成的消息
    setTimeout(() => {
      ElMessage.success('加载成功');
    }, 300);
  }, 800);
};
</script>

<style lang="scss" scoped>
.search-form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

  .search-form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-end;

    :deep(.el-form-item) {
      margin-bottom: 0;
      margin-right: 0;
      
      .el-form-item__label {
        min-width: 70px;
        font-weight: normal;
        color: #606266;
      }
      
      .el-input__wrapper,
      .el-select .el-input__wrapper,
      .el-date-editor .el-input__wrapper {
        padding-left: 12px;
        border-radius: 4px;
      }
      
      .el-input,
      .el-select {
        min-width: 180px;
      }
      
      .el-date-editor--daterange {
        min-width: 320px;
      }
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
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

  .table-container {
    margin-bottom: 20px;
    overflow-x: auto;
    
    :deep(.el-table) {
      --el-table-border-color: #ebeef5;
      --el-table-row-hover-bg-color: #f5f7fa;
      --el-table-header-bg-color: #f5f7fa;
      
      .el-tag {
        font-size: 12px;
        padding: 0 8px;
        height: 24px;
        line-height: 22px;
        border-radius: 4px;
        
        &.el-tag--warning {
          --el-tag-bg-color: var(--el-color-warning-light-9);
          --el-tag-border-color: var(--el-color-warning-light-8);
          --el-tag-text-color: var(--el-color-warning-dark-2);
        }
        
        &.el-tag--success {
          --el-tag-bg-color: var(--el-color-success-light-9);
          --el-tag-border-color: var(--el-color-success-light-8);
          --el-tag-text-color: var(--el-color-success-dark-2);
        }
        
        &.el-tag--danger {
          --el-tag-bg-color: var(--el-color-danger-light-9);
          --el-tag-border-color: var(--el-color-danger-light-8);
          --el-tag-text-color: var(--el-color-danger-dark-2);
        }
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
      font-size: 14px;
      padding: 0;
      height: auto;
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
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }

    .section-title {
      font-size: 16px;
      font-weight: bold;
      color: #303133;
      margin-bottom: 16px;
      position: relative;
      padding-left: 10px;
      border-left: 4px solid #3370ff;
    }
    
    :deep(.el-descriptions__label) {
      width: 100px;
      font-weight: normal;
      background-color: #f5f7fa;
    }
    
    :deep(.el-tag) {
      font-size: 12px;
      padding: 0 8px;
      height: 24px;
      line-height: 22px;
      border-radius: 4px;
    }
    
    .content-box {
      background-color: #f9f9f9;
      border: 1px solid #ebeef5;
      border-radius: 4px;
      padding: 16px;
      line-height: 1.6;
      color: #606266;
      white-space: pre-wrap;
      word-break: break-word;
    }
  }
}

:deep(.el-timeline-item__content) {
  h4 {
    margin: 0 0 8px;
    font-size: 16px;
    color: #303133;
  }

  p {
    margin: 4px 0 8px;
    color: #606266;
    font-size: 14px;
  }
  
  .status-tag {
    margin-top: 5px;
  }
}

.content-wrapper {
  display: flex;
  flex-direction: column;
}

.content-summary {
  color: #606266;
  margin-bottom: 5px;
  line-height: 1.5;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.expand-button {
  align-self: flex-start;
  margin-top: 5px;
  padding: 0;
  height: auto;
  font-size: 13px;
}

:deep(.full-content-dialog) {
  width: 600px;
  max-width: 90vw;
  
  .el-message-box__header {
    padding: 15px 20px;
    
    .el-message-box__title {
      font-size: 16px;
      font-weight: bold;
      word-break: break-word;
    }
  }
  
  .el-message-box__content {
    max-height: 60vh;
    overflow-y: auto;
    white-space: pre-line;
    line-height: 1.6;
    color: #303133;
    padding: 15px 20px;
    word-break: break-word;
  }
  
  .el-message-box__btns {
    padding: 10px 20px 15px;
    justify-content: center;
    
    .el-button {
      min-width: 80px;
    }
  }
  
  @media screen and (max-width: 576px) {
    width: 95vw;
    
    .el-message-box__header {
      padding: 12px 15px;
    }
    
    .el-message-box__content {
      padding: 12px 15px;
      max-height: 70vh;
    }
    
    .el-message-box__btns {
      padding: 8px 15px 12px;
    }
  }
}
</style> 