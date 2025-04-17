<template>
  <div class="complaint-list">
    <!-- 搜索表单 -->
    <div class="search-form-container">
      <el-form :model="searchForm" class="search-form" inline>
        <el-form-item label="投诉人">
          <el-input v-model="searchForm.complainant" placeholder="请输入投诉人" clearable />
        </el-form-item>
        <el-form-item label="投诉标题">
          <el-input v-model="searchForm.title" placeholder="请输入投诉标题" clearable />
        </el-form-item>
        <el-form-item label="处理状态">
          <el-select v-model="searchForm.status" placeholder="请选择处理状态" clearable style="width: 180px;">
            <el-option label="待处理" value="pending" />
            <el-option label="处理中" value="processing" />
            <el-option label="已完成" value="completed" />
            <el-option label="已关闭" value="closed" />
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
          <el-table-column prop="complainant" label="投诉人姓名" width="120" show-overflow-tooltip />
          <el-table-column prop="contactInfo" label="联系方式" width="150" show-overflow-tooltip />
          <el-table-column prop="title" label="投诉标题" min-width="150" show-overflow-tooltip />
          <el-table-column label="投诉内容摘要" min-width="200">
            <template #default="{ row }">
              <div class="content-wrapper">
                <div class="content-summary">{{ getContentSummary(row.content) }}</div>
                <el-button v-if="row.content.length > 50" link type="primary" size="small" @click="showFullContent(row)" class="expand-button">
                  展开全文
                </el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="投诉时间" width="180" show-overflow-tooltip />
          <el-table-column prop="status" label="处理状态" width="100" show-overflow-tooltip>
            <template #default="{ row }">
              <el-tag :type="getStatusType(row.status)">
                {{ getStatusName(row.status) }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="180" fixed="right">
            <template #default="{ row }">
              <div class="table-actions">
                <el-button link type="primary" class="operation-button" @click="handleViewDetail(row)">
                  <el-icon><View /></el-icon>
                  <span>详情</span>
                </el-button>
                <el-button 
                  v-if="row.status !== 'completed' && row.status !== 'closed'" 
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
      title="投诉详情"
      width="70%"
      :close-on-click-modal="false"
      destroy-on-close
    >
      <div v-loading="detailLoading" class="detail-content">
        <!-- 基本信息 -->
        <div class="detail-section">
          <div class="section-title">基本信息</div>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="投诉编号">{{ currentDetail.id }}</el-descriptions-item>
            <el-descriptions-item label="投诉状态">
              <el-tag :type="getStatusType(currentDetail.status)">
                {{ getStatusName(currentDetail.status) }}
              </el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="投诉人">{{ currentDetail.complainant }}</el-descriptions-item>
            <el-descriptions-item label="联系方式">{{ currentDetail.contactInfo }}</el-descriptions-item>
            <el-descriptions-item label="投诉标题">{{ currentDetail.title }}</el-descriptions-item>
            <el-descriptions-item label="投诉时间">{{ currentDetail.createTime }}</el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 投诉内容 -->
        <div class="detail-section">
          <div class="section-title">投诉内容</div>
          <div class="content-box">
            {{ currentDetail.content }}
          </div>
        </div>

        <!-- 处理结果 -->
        <div v-if="currentDetail.status === 'completed' || currentDetail.status === 'closed'" class="detail-section">
          <div class="section-title">处理结果</div>
          <el-descriptions :column="1" border>
            <el-descriptions-item label="处理时间">{{ currentDetail.replyTime || '-' }}</el-descriptions-item>
            <el-descriptions-item label="处理说明">{{ currentDetail.replyContent || '暂无处理说明' }}</el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 附件信息 -->
        <div v-if="currentDetail.attachments && currentDetail.attachments.length > 0" class="detail-section">
          <div class="section-title">附件信息</div>
          <div class="attachment-list">
            <div v-for="(item, index) in currentDetail.attachments" :key="index" class="attachment-item">
              <el-link type="primary" :underline="false">
                <el-icon><Document /></el-icon>
                <span>{{ item }}</span>
              </el-link>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="detailDialogVisible = false">关闭</el-button>
          <el-button 
            v-if="currentDetail.status !== 'completed' && currentDetail.status !== 'closed'" 
            type="primary" 
            @click="openProcessDialog(currentDetail)"
          >
            处理投诉
          </el-button>
        </span>
      </template>
    </el-dialog>
    
    <!-- 处理投诉弹窗 -->
    <el-dialog
      v-model="processDialogVisible"
      title="处理投诉"
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
        <el-form-item label="投诉编号">
          <span>{{ currentDetail.id }}</span>
        </el-form-item>
        <el-form-item label="投诉人">
          <span>{{ currentDetail.complainant }}</span>
        </el-form-item>
        <el-form-item label="投诉标题">
          <span>{{ currentDetail.title }}</span>
        </el-form-item>
        <el-form-item label="投诉内容">
          <div class="readonly-content">{{ currentDetail.content }}</div>
        </el-form-item>
        <el-form-item label="处理状态" prop="status">
          <el-select v-model="processForm.status" placeholder="请选择处理状态" style="width: 100%">
            <el-option label="待处理" value="pending" />
            <el-option label="处理中" value="processing" />
            <el-option label="已完成" value="completed" />
            <el-option label="已关闭" value="closed" />
          </el-select>
        </el-form-item>
        <el-form-item label="处理说明" prop="replyContent">
          <el-input 
            v-model="processForm.replyContent" 
            type="textarea" 
            :rows="4" 
            placeholder="请输入处理说明"
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

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { View, Edit, Search, ArrowLeft, ArrowRight, Document, Refresh } from '@element-plus/icons-vue'
import { getComplaintList, type ComplaintRecord, type ComplaintQueryParams, getComplaintDetail, processComplaint } from '@/api/complaint'
import type { FormInstance, FormRules } from 'element-plus'

// 搜索表单数据
const searchForm = reactive({
  complainant: '',
  title: '',
  status: '',
  timeRange: []
})

// 加载状态
const loading = ref(false)
const detailLoading = ref(false)
const submitting = ref(false)

// 表格数据
const tableData = ref<ComplaintRecord[]>([])

// 分页相关
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// 详情弹窗相关
const detailDialogVisible = ref(false)
const currentDetail = ref<ComplaintRecord>({} as ComplaintRecord)

// 处理弹窗相关
const processDialogVisible = ref(false)
const processFormRef = ref<FormInstance>()
const processForm = reactive({
  status: '',
  replyContent: ''
})

// 处理表单校验规则
const processRules = reactive<FormRules>({
  status: [
    { required: true, message: '请选择处理状态', trigger: 'change' }
  ],
  replyContent: [
    { required: true, message: '请输入处理说明', trigger: 'blur' },
    { min: 5, max: 500, message: '处理说明长度在5-500个字符之间', trigger: 'blur' }
  ]
})

// 获取状态标签样式
const getStatusType = (status: string) => {
  const statusMap: Record<string, "warning" | "primary" | "success" | "info" | "danger"> = {
    pending: "warning",
    processing: "primary",
    completed: "success",
    closed: "info"
  }
  return statusMap[status] || "info"
}

// 获取状态名称
const getStatusName = (status: string) => {
  const statusMap: Record<string, string> = {
    pending: '待处理',
    processing: '处理中',
    completed: '已完成',
    closed: '已关闭'
  }
  return statusMap[status] || '未知'
}

// 获取内容摘要
const getContentSummary = (content: string) => {
  if (!content) return '';
  return content.length > 50 ? content.substring(0, 50) + '...' : content;
}

// 显示全文内容
const showFullContent = (row: ComplaintRecord) => {
  ElMessageBox.alert(row.content, row.title, {
    confirmButtonText: '关闭',
    customClass: 'full-content-dialog'
  });
}

// 获取投诉详情
const fetchDetailData = async (id: string) => {
  detailLoading.value = true
  try {
    // 调用API接口获取详情数据
    const res = await getComplaintDetail(id)
    if (res.code === 200 && res.data) {
      // 确保返回数据包含所有必要字段
      if (res.data.id && res.data.complainant && res.data.contactInfo && 
          res.data.title && res.data.content && res.data.createTime && res.data.status) {
        // 类型转换，确保状态类型匹配
        currentDetail.value = {
          id: res.data.id,
          complainant: res.data.complainant,
          contactInfo: res.data.contactInfo,
          title: res.data.title,
          content: res.data.content,
          createTime: res.data.createTime,
          status: res.data.status as 'pending' | 'processing' | 'completed' | 'closed',
          replyTime: res.data.replyTime,
          replyContent: res.data.replyContent,
          attachments: res.data.attachments
        }
      } else {
        ElMessage.error('获取的投诉详情数据不完整')
      }
    } else {
      ElMessage.error(res.message || '获取投诉详情失败')
    }
  } catch (error) {
    console.error('获取投诉详情失败', error)
    ElMessage.error('获取投诉详情失败')
  } finally {
    detailLoading.value = false
  }
}

// 搜索
const handleSearch = async () => {
  loading.value = true
  try {
    const params: ComplaintQueryParams = {
      complainant: searchForm.complainant,
      title: searchForm.title,
      status: searchForm.status,
      timeRange: searchForm.timeRange,
      pageNum: currentPage.value,
      pageSize: pageSize.value
    }
    
    // 调用API接口获取数据
    const res = await getComplaintList(params)
    if (res.code === 200) {
      // 类型转换，确保状态类型匹配
      tableData.value = res.data.list.map(item => ({
        ...item,
        status: item.status as 'pending' | 'processing' | 'completed' | 'closed'
      }))
      total.value = res.data.total
    } else {
      ElMessage.error(res.message || '获取投诉记录列表失败')
    }
  } catch (error) {
    console.error('获取投诉记录列表失败', error)
    ElMessage.error('获取投诉记录列表失败')
  } finally {
    loading.value = false
  }
}

// 重置
const handleReset = () => {
  searchForm.complainant = ''
  searchForm.title = ''
  searchForm.status = ''
  searchForm.timeRange = []
  currentPage.value = 1
  handleSearch()
}

// 查看详情
const handleViewDetail = (row: ComplaintRecord) => {
  fetchDetailData(row.id);
  detailDialogVisible.value = true;
}

// 打开处理弹窗
const openProcessDialog = (row: ComplaintRecord) => {
  processForm.status = row.status;
  processForm.replyContent = row.replyContent || '';
  processDialogVisible.value = true;
  detailDialogVisible.value = false; // 关闭详情弹窗
}

// 处理投诉
const handleProcess = (row: ComplaintRecord) => {
  fetchDetailData(row.id);
  setTimeout(() => {
    openProcessDialog(currentDetail.value);
  }, 600);
}

// 提交处理结果
const submitProcess = async () => {
  if (!processFormRef.value) return;
  
  await processFormRef.value.validate(async (valid) => {
    if (valid) {
      submitting.value = true;
      try {
        // 调用API处理投诉
        const res = await processComplaint(currentDetail.value.id, {
          status: processForm.status,
          replyContent: processForm.replyContent
        });
        
        if (res.code === 200) {
          ElMessage.success('投诉处理成功');
          processDialogVisible.value = false;
          // 重新查询数据，添加短暂延时确保后端数据已更新
          setTimeout(() => {
            // 强制重置当前页为1并刷新数据
            currentPage.value = 1;
            handleSearch();
            // 二次刷新确保数据最新
            setTimeout(() => {
              handleSearch();
            }, 300);
          }, 300);
        } else {
          ElMessage.error(res.message || '处理投诉失败');
        }
      } catch (error) {
        console.error('处理投诉失败', error);
        ElMessage.error('处理投诉失败');
      } finally {
        submitting.value = false;
      }
    }
  });
}

// 分页大小改变
const handleSizeChange = (val: number) => {
  pageSize.value = val
  handleSearch()
}

// 当前页改变
const handleCurrentChange = (val: number) => {
  currentPage.value = val
  handleSearch()
}

// 页面加载时获取数据
onMounted(() => {
  handleSearch()
})
</script>

<style lang="scss" scoped>
.complaint-list {
  background-color: #f0f2f5;
  min-height: 100%;

  .search-form-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

    .search-form {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: flex-end;
      
      :deep(.el-form-item) {
        margin-bottom: 0;
        margin-right: 0;
        
        .el-form-item__label {
          min-width: 70px;
          font-weight: normal;
          color: #606266;
        }
        
        .el-input,
        .el-select {
          min-width: 180px;
        }
        
        @media screen and (max-width: 992px) {
          margin-bottom: 10px;
          
          .el-input,
          .el-select {
            width: 100%;
          }
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
  
  // 详情弹窗样式
  .detail-content {
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
      
      .attachment-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        
        .attachment-item {
          .el-link {
            display: flex;
            align-items: center;
            gap: 5px;
            
            .el-icon {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  
  // 处理表单样式
  .readonly-content {
    background-color: #f9f9f9;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    padding: 12px;
    line-height: 1.6;
    color: #606266;
    max-height: 120px;
    overflow-y: auto;
    white-space: pre-wrap;
    word-break: break-word;
  }
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