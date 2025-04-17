<template>
  <el-dialog
    v-model="dialogVisible"
    :title="reviewType === 'initial' ? '数据授权初审' : '数据授权审核'"
    width="900px"
    destroy-on-close
    @close="handleClose"
  >
    <div v-loading="loading" class="review-content">
      <!-- 基本信息 -->
      <el-descriptions title="基本信息" :column="2" border>
        <el-descriptions-item label="数据资源名称" :span="1">{{ authInfo.resourceName }}</el-descriptions-item>
        <el-descriptions-item label="数据类型" :span="1">{{ authInfo.resourceType }}</el-descriptions-item>
        <el-descriptions-item label="数据描述">{{ authInfo.resourceDescription }}</el-descriptions-item>
        <el-descriptions-item label="申请编号" :span="1">{{ authInfo.applyNo }}</el-descriptions-item>
        <el-descriptions-item label="申请时间" :span="1">{{ authInfo.applyTime }}</el-descriptions-item>
        <el-descriptions-item label="申请状态" :span="1">
          <el-tag :type="getStatusType(authInfo.status)">
            {{ getStatusLabel(authInfo.status) }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="申请类型" :span="1">{{ authInfo.applyType === 'operation' ? '运营授权' : '使用授权' }}</el-descriptions-item>
      </el-descriptions>

      <!-- 申请内容 -->
      <el-descriptions title="申请内容" :column="2" border class="mt-20">
        <el-descriptions-item label="使用范围" :span="2">
          <div class="content-text">{{ authInfo.useScope }}</div>
        </el-descriptions-item>
        <el-descriptions-item label="申请理由" :span="2">
          <div class="content-text">{{ authInfo.applyReason }}</div>
        </el-descriptions-item>
      </el-descriptions>

      <!-- 申请方信息 -->
      <el-descriptions title="申请方信息" :column="2" border class="mt-20">
        <el-descriptions-item label="单位名称" :span="1">{{ authInfo.organizationName }}</el-descriptions-item>
        <el-descriptions-item label="联系人" :span="1">{{ authInfo.contactName }}</el-descriptions-item>
        <el-descriptions-item label="联系电话" :span="1">{{ authInfo.contactPhone }}</el-descriptions-item>
        <el-descriptions-item label="电子邮箱" :span="1">{{ authInfo.contactEmail }}</el-descriptions-item>
      </el-descriptions>

      <!-- 申请材料 -->
      <div class="attachment-list mt-20">
        <div class="attachment-title">申请材料</div>
        <div v-if="authInfo.attachments && authInfo.attachments.length > 0" class="attachment-items">
          <div v-for="(file, index) in authInfo.attachments" :key="index" class="attachment-item">
            <el-icon><Document /></el-icon>
            <span class="attachment-name">{{ file.name }}</span>
            <el-button link type="primary" size="small" @click="downloadFile(file)">下载</el-button>
            <el-button link type="primary" size="small" @click="previewFile(file)">预览</el-button>
          </div>
        </div>
        <el-empty v-else description="无申请材料" :image-size="60" />
      </div>

      <!-- 审核意见表单 -->
      <div class="review-form-container mt-20">
        <div class="review-form-title">审核意见</div>
        <el-form
          ref="reviewFormRef"
          :model="reviewForm"
          :rules="reviewRules"
          label-width="100px"
          class="review-form"
        >
          <div class="form-row">
            <el-form-item label="审核结果" prop="result" class="form-item-half">
              <el-radio-group v-model="reviewForm.result">
                <el-radio label="pass">通过</el-radio>
                <el-radio label="reject">不通过</el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="自动通知" prop="sendNotification" class="form-item-half">
              <el-switch
                v-model="reviewForm.sendNotification"
                active-text="审核结果将自动通知申请方"
                inactive-text="仅保存审核结果，不发送通知"
              />
            </el-form-item>
          </div>

          <el-form-item 
            label="审核意见" 
            prop="reason"
            :rules="[
              { required: true, message: '请填写审核意见', trigger: 'blur' },
              { min: 5, message: '审核意见不能少于5个字符', trigger: 'blur' }
            ]"
          >
            <el-input 
              type="textarea" 
              v-model="reviewForm.reason" 
              placeholder="请详细说明审核意见，包括对申请各方面的评价，不少于5个字符"
              :rows="4"
            />
          </el-form-item>

          <div class="form-row" v-if="reviewForm.result === 'pass'">
            <el-form-item 
              label="不足之处"
              class="form-item-full"
            >
              <el-input 
                type="textarea" 
                v-model="reviewForm.weaknesses" 
                placeholder="请填写申请中存在的不足之处，可以为空"
                :rows="3"
              />
            </el-form-item>
          </div>

          <div class="form-row" v-if="reviewForm.result === 'reject'">
            <el-form-item 
              label="整改建议"
              prop="improvementSuggestions"
              :rules="[
                { required: true, message: '请填写整改建议', trigger: 'blur' }
              ]"
              class="form-item-full"
            >
              <el-input 
                type="textarea" 
                v-model="reviewForm.improvementSuggestions" 
                placeholder="请填写整改建议，以便申请方进行修改"
                :rows="3"
              />
            </el-form-item>
          </div>

          <div class="form-row" v-if="reviewForm.result === 'pass' && reviewType === 'center'">
            <el-form-item 
              label="授权期限"
              prop="authPeriod"
              class="form-item-half"
            >
              <el-date-picker
                v-model="reviewForm.authPeriod"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                style="width: 100%;"
              />
            </el-form-item>

            <el-form-item 
              label="授权条件"
              class="form-item-half"
            >
              <el-input 
                type="textarea" 
                v-model="reviewForm.conditions" 
                placeholder="请填写授权使用的其他条件要求（选填）"
                :rows="3"
              />
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitReview" :loading="submitLoading">提交审核</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import { ElMessage, FormInstance } from 'element-plus'
import { Document } from '@element-plus/icons-vue'
import { submitAuthReview } from '@/api/data-auth'

// 定义props和emits
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  authId: {
    type: String,
    default: ''
  },
  reviewType: {
    type: String,
    default: 'initial' // initial: 初审, center: 中心审核
  }
})

const emit = defineEmits(['update:modelValue', 'success'])

// 弹窗可见性双向绑定
const dialogVisible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

// 表单ref
const reviewFormRef = ref<FormInstance>()

// 加载状态
const loading = ref(false)
const submitLoading = ref(false)

// 授权详情信息
const authInfo = ref<any>({})

// 审核表单
const reviewForm = reactive({
  result: 'pass',
  reason: '',
  weaknesses: '',
  improvementSuggestions: '',
  authPeriod: [],
  conditions: '',
  sendNotification: true
})

// 表单验证规则
const reviewRules = {
  result: [
    { required: true, message: '请选择审核结果', trigger: 'change' }
  ],
  reason: [
    { required: true, message: '请填写审核意见', trigger: 'blur' },
    { min: 5, message: '审核意见不能少于5个字符', trigger: 'blur' }
  ],
  improvementSuggestions: [
    { required: true, message: '请填写整改建议', trigger: 'blur' }
  ],
  authPeriod: [
    { 
      required: true, 
      message: '请选择授权期限', 
      trigger: 'change',
      validator: (rule, value, callback) => {
        if (reviewForm.result === 'pass' && props.reviewType === 'center' && (!value || value.length !== 2)) {
          callback(new Error('请选择授权期限'))
        } else {
          callback()
        }
      }
    }
  ]
}

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

// 预览文件
const previewFile = (file) => {
  ElMessage.success(`预览文件：${file.name}`)
  // 实际项目中应该调用预览API
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
    // 模拟数据
    const idStr = String(id || '').padStart(4, '0')
    authInfo.value = {
      resourceName: '交通数据资源包A',
      resourceType: '结构化数据',
      resourceDescription: '包含交通流量、拥堵指数等数据',
      applyNo: `AUTH${new Date().getFullYear()}${idStr}`,
      applyTime: '2023-05-15',
      status: props.reviewType === 'initial' ? 'applying' : 'center_review',
      applyType: 'operation',
      useScope: '用于城市交通拥堵分析和智能交通规划，将结合人工智能算法进行交通流量预测和优化',
      applyReason: '我们正在开发一套城市智能交通系统，需要利用该数据进行交通流量分析和拥堵预测，以提高城市交通效率',
      organizationName: '智慧城市科技有限公司',
      contactName: '张三',
      contactPhone: '13912345678',
      contactEmail: 'zhangsan@example.com',
      attachments: [
        { id: '1', name: '运营方案.pdf', url: '#' },
        { id: '2', name: '市场分析报告.docx', url: '#' },
        { id: '3', name: '项目可行性研究.pptx', url: '#' }
      ]
    }
    
    // 日志输出便于调试
    console.log('获取到授权详情数据:', authInfo.value)
    
    loading.value = false
  } catch (error) {
    console.error('获取授权详情失败', error)
    ElMessage.error('获取授权详情失败，请稍后重试')
    loading.value = false
  }
}

// 提交审核
const submitReview = async () => {
  if (!reviewFormRef.value) return
  
  await reviewFormRef.value.validate(async (valid, fields) => {
    if (valid) {
      submitLoading.value = true
      try {
        // 构建提交的审核数据
        const reviewData = {
          ...reviewForm,
          reviewType: props.reviewType
        }
        
        // 调用API提交审核结果
        await submitAuthReview(props.authId, reviewData)
        
        submitLoading.value = false
        dialogVisible.value = false
        
        // 显示成功提示
        const resultText = reviewForm.result === 'pass' ? '通过' : '不通过'
        const reviewTypeText = props.reviewType === 'initial' ? '初审' : '最终审核'
        const notificationText = reviewForm.sendNotification ? '，已自动通知申请方' : ''
        
        ElMessage.success(`${reviewTypeText}${resultText}操作提交成功${notificationText}`)
        
        // 触发成功事件
        emit('success')
      } catch (error) {
        console.error('提交审核失败', error)
        ElMessage.error('提交审核失败')
        submitLoading.value = false
      }
    } else {
      console.log('表单验证失败', fields)
    }
  })
}

// 关闭弹窗
const handleClose = () => {
  // 重置表单
  if (reviewFormRef.value) {
    reviewFormRef.value.resetFields()
  }
  
  // 重置审核表单
  Object.assign(reviewForm, {
    result: 'pass',
    reason: '',
    weaknesses: '',
    improvementSuggestions: '',
    authPeriod: [],
    conditions: '',
    sendNotification: true
  })
}

// 监听ID变化
watch(() => props.authId, (newId) => {
  if (newId && dialogVisible.value) {
    console.log('authId变化，触发获取详情:', newId)
    getAuthDetail(newId)
  }
}, { immediate: true })

// 监听弹窗显示
watch(() => dialogVisible.value, (val) => {
  if (val && props.authId) {
    console.log('弹窗显示，触发获取详情:', props.authId)
    getAuthDetail(props.authId)
  }
})
</script>

<style scoped lang="scss">
.review-content {
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
}

.mt-10 {
  margin-top: 10px;
}

.mt-20 {
  margin-top: 20px;
}

.attachment-list,
.review-form-container {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  padding: 15px;
}

.attachment-title,
.review-form-title {
  font-weight: bold;
  margin-bottom: 15px;
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

.review-form {
  margin-top: 10px;

  .form-row {
    display: flex;
    gap: 20px;
    margin-bottom: 18px;

    .form-item-half {
      flex: 1;
      min-width: 0;
    }

    .form-item-full {
      width: 100%;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  :deep(.el-form-item) {
    margin-bottom: 18px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style> 
