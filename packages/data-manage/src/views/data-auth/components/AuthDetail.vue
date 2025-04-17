<template>
  <el-dialog
    v-model="dialogVisible"
    title="授权详情"
    width="900px"
    destroy-on-close
  >
    <div v-loading="loading" class="detail-content">
      <el-descriptions title="基本信息" :column="2" border>
        <el-descriptions-item label="数据资源名称" :span="1">{{ detailInfo.resourceName }}</el-descriptions-item>
        <el-descriptions-item label="数据类型" :span="1">{{ detailInfo.resourceType }}</el-descriptions-item>
        <el-descriptions-item label="申请编号" :span="1">{{ detailInfo.applyNo }}</el-descriptions-item>
        <el-descriptions-item label="申请时间" :span="1">{{ detailInfo.applyTime }}</el-descriptions-item>
        <el-descriptions-item label="申请状态" :span="1">
          <el-tag :type="getStatusType(detailInfo.status)">
            {{ getStatusLabel(detailInfo.status) }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="申请类型" :span="1">{{ detailInfo.applyType === 'operation' ? '运营授权' : '使用授权' }}</el-descriptions-item>
      </el-descriptions>

      <el-descriptions title="申请内容" :column="2" border class="mt-20">
        <el-descriptions-item label="数据描述" :span="2">
          <div class="content-text">{{ detailInfo.resourceDescription }}</div>
        </el-descriptions-item>
        <el-descriptions-item label="使用范围" :span="2">
          <div class="content-text">{{ detailInfo.useScope }}</div>
        </el-descriptions-item>
        <el-descriptions-item label="申请理由" :span="2">
          <div class="content-text">{{ detailInfo.applyReason }}</div>
        </el-descriptions-item>
        <el-descriptions-item v-if="detailInfo.authPeriod" label="授权期限" :span="2">
          <div class="content-text">{{ detailInfo.authPeriod }}</div>
        </el-descriptions-item>
      </el-descriptions>
      
      <el-descriptions title="申请方信息" :column="2" border class="mt-20">
        <el-descriptions-item label="单位名称" :span="1">{{ detailInfo.organizationName }}</el-descriptions-item>
        <el-descriptions-item label="联系人" :span="1">{{ detailInfo.contactName }}</el-descriptions-item>
        <el-descriptions-item label="联系电话" :span="1">{{ detailInfo.contactPhone }}</el-descriptions-item>
        <el-descriptions-item label="电子邮箱" :span="1">{{ detailInfo.contactEmail }}</el-descriptions-item>
      </el-descriptions>

      <div class="attachment-list mt-20">
        <div class="attachment-title">申请材料</div>
        <div v-if="detailInfo.attachments && detailInfo.attachments.length > 0" class="attachment-items">
          <div v-for="(file, index) in detailInfo.attachments" :key="index" class="attachment-item">
            <el-icon><Document /></el-icon>
            <span class="attachment-name">{{ file.name }}</span>
            <el-button link type="primary" size="small" @click="downloadFile(file)">下载</el-button>
          </div>
        </div>
        <el-empty v-else description="无申请材料" :image-size="60" />
      </div>

      <!-- 审核记录 -->
      <div v-if="detailInfo.reviews && detailInfo.reviews.length > 0" class="review-records mt-20">
        <div class="review-title">审核记录</div>
        <el-timeline>
          <el-timeline-item
            v-for="(review, index) in detailInfo.reviews"
            :key="index"
            :timestamp="review.reviewTime"
            :type="review.result === 'pass' ? 'success' : (review.result === 'reject' ? 'danger' : 'warning')"
          >
            <div class="review-content">
              <div class="review-header">
                <span class="review-type">{{ review.type === 'initial' ? '初审' : '管理中心审核' }}</span>
                <el-tag :type="review.result === 'pass' ? 'success' : 'danger'" size="small">
                  {{ review.result === 'pass' ? '通过' : '不通过' }}
                </el-tag>
              </div>
              <div class="review-reason">
                <span class="label">审核意见：</span>
                <span>{{ review.reason }}</span>
              </div>
              <div class="review-handler">
                <span class="label">审核人：</span>
                <span>{{ review.reviewer }}</span>
              </div>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
    
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Document } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

// 定义props和emits
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  authId: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

// 弹窗可见性双向绑定
const dialogVisible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

// 加载状态
const loading = ref(false)

// 详情信息
const detailInfo = ref<any>({})

// 状态选项
const statusOptions = [
  { value: 'applying', label: '申请中' },
  { value: 'initial_review_pass', label: '初审通过' },
  { value: 'initial_review_reject', label: '初审不通过' },
  { value: 'center_review', label: '审核管理中心审核中' },
  { value: 'review_pass', label: '审核通过' },
  { value: 'review_reject', label: '审核不通过' }
]

// 获取状态标签类型
const getStatusType = (status) => {
  const statusMap = {
    'applying': 'info',
    'initial_review_pass': 'success',
    'initial_review_reject': 'danger',
    'center_review': 'warning',
    'review_pass': 'success',
    'review_reject': 'danger'
  }
  return statusMap[status] || 'info'
}

// 获取状态标签文字
const getStatusLabel = (status) => {
  const option = statusOptions.find(item => item.value === status)
  return option ? option.label : status
}

// 下载文件
const downloadFile = (file) => {
  ElMessage.success(`开始下载文件：${file.name}`)
  // 实际项目中应该调用下载API
  // window.open(file.url, '_blank')
}

// 获取授权详情
const getAuthDetail = async (id) => {
  if (!id) {
    ElMessage.warning('缺少授权ID参数，无法获取详情')
    return
  }
  
  loading.value = true
  try {
    // 实际项目中应该调用真实API
    // 例如: const res = await getAuthDetailAPI(id)
    
    // 临时使用模拟数据，同步返回避免异步问题
    const idStr = String(id || '').padStart(4, '0')
    // 模拟数据
    detailInfo.value = {
      resourceName: '交通数据资源包A',
      resourceType: '结构化数据',
      resourceDescription: '包含交通流量、拥堵指数等数据',
      applyNo: `AUTH${new Date().getFullYear()}${idStr}`,
      applyTime: '2023-05-15',
      status: 'center_review',
      applyType: 'operation',
      useScope: '用于城市交通拥堵分析和智能交通规划，将结合人工智能算法进行交通流量预测和优化',
      applyReason: '我们正在开发一套城市智能交通系统，需要利用该数据进行交通流量分析和拥堵预测，以提高城市交通效率',
      authPeriod: '2023-06-01 至 2024-05-31',
      organizationName: '智慧城市科技有限公司',
      contactName: '张三',
      contactPhone: '13912345678',
      contactEmail: 'zhangsan@example.com',
      attachments: [
        { id: '1', name: '运营方案.pdf', url: '#' },
        { id: '2', name: '市场分析报告.docx', url: '#' },
        { id: '3', name: '项目可行性研究.pptx', url: '#' }
      ],
      reviews: [
        {
          type: 'initial',
          result: 'pass',
          reason: '申请材料齐全，使用范围明确，同意进入下一阶段审核',
          reviewer: '李四',
          reviewTime: '2023-05-18 14:30:00'
        }
      ]
    }
    
    // 日志输出便于调试
    console.log('获取到授权详情数据:', detailInfo.value)
    
    loading.value = false
  } catch (error) {
    console.error('获取授权详情失败', error)
    ElMessage.error('获取授权详情失败，请稍后重试')
    loading.value = false
  }
}

// 监听ID变化
watch(() => props.authId, (newId) => {
  if (newId && dialogVisible.value) {
    console.log('AuthDetail - authId变化，触发获取详情:', newId)
    getAuthDetail(newId)
  }
}, { immediate: true })

// 监听弹窗显示
watch(() => dialogVisible.value, (val) => {
  if (val && props.authId) {
    console.log('AuthDetail - 弹窗显示，触发获取详情:', props.authId)
    getAuthDetail(props.authId)
  }
})
</script>

<style scoped lang="scss">
.detail-content {
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 10px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #dcdfe6;
    border-radius: 3px;
  }

  :deep(.el-descriptions) {
    .el-descriptions__label {
      width: 120px;
      min-width: 120px;
    }
    
    .el-descriptions__content {
      .content-text {
        white-space: normal;
        word-break: break-all;
        line-height: 1.5;
      }
    }
  }
}

.mt-20 {
  margin-top: 20px;
}

.attachment-list,
.review-records {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  padding: 15px;
}

.attachment-title,
.review-title {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 16px;
  color: #303133;
}

.attachment-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.attachment-item {
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px dashed #ebeef5;
  
  .el-icon {
    color: #409eff;
    margin-right: 8px;
  }
  
  .attachment-name {
    flex: 1;
    margin-right: 10px;
  }
}

.review-content {
  padding: 10px;
  background-color: #f5f7fa;
  border-radius: 4px;
  
  .review-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    
    .review-type {
      font-weight: bold;
    }
  }
  
  .review-reason,
  .review-handler {
    margin-top: 5px;
    
    .label {
      color: #606266;
    }
  }
}

:deep(.el-timeline-item__content) {
  width: 100%;
}
</style> 