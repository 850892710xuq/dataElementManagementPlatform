<template>
  <el-dialog
    v-model="dialogVisible"
    title="运营授权申请"
    width="700px"
    destroy-on-close
    @close="handleClose"
  >
    <el-form
      ref="formRef"
      :model="applyForm"
      :rules="formRules"
      label-width="120px"
      class="apply-form"
    >
      <el-form-item label="数据资源名称" prop="resourceId">
        <el-select
          v-model="applyForm.resourceId"
          filterable
          placeholder="请选择数据资源"
          style="width: 100%"
          @change="handleResourceChange"
          :loading="loadingResources"
        >
          <el-option
            v-for="item in resourceOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
          <template #empty>
            <div class="empty-select-tip">
              <p v-if="loadingResources">正在加载数据资源...</p>
              <p v-else>暂无已登记数据资源</p>
            </div>
          </template>
        </el-select>
      </el-form-item>

      <el-form-item label="数据类型">
        <el-input v-model="resourceInfo.type" disabled />
      </el-form-item>

      <el-form-item label="数据描述">
        <el-input type="textarea" v-model="resourceInfo.description" disabled :rows="2" />
      </el-form-item>

      <el-form-item label="申请使用范围" prop="useScope">
        <el-input
          type="textarea"
          v-model="applyForm.useScope"
          placeholder="请详细描述数据使用场景和用途"
          :rows="3"
        />
      </el-form-item>

      <el-form-item label="申请理由" prop="applyReason">
        <el-input
          type="textarea"
          v-model="applyForm.applyReason"
          placeholder="请填写申请该数据资源的理由"
          :rows="3"
        />
      </el-form-item>

      <el-form-item label="申请材料" prop="attachments">
        <el-upload
          class="upload-area"
          action="#"
          :http-request="customUpload"
          :file-list="fileList"
          :on-remove="handleRemove"
          :before-upload="beforeUpload"
          multiple
        >
          <el-button type="primary">
            <el-icon><Upload /></el-icon>
            <span>点击上传</span>
          </el-button>
          <template #tip>
            <div class="el-upload__tip">
              支持上传PDF、Word等常用格式，可上传多个文件，单个文件不超过10MB
            </div>
          </template>
        </el-upload>
      </el-form-item>

      <el-form-item label="申请单位信息">
        <el-input v-model="applyForm.organizationName" placeholder="申请单位名称" class="mb-10" />
        <el-input v-model="applyForm.organizationAddr" placeholder="申请单位地址" class="mb-10" />
        <el-input v-model="applyForm.organizationContact" placeholder="申请单位联系方式" />
      </el-form-item>

      <el-form-item label="联系人信息">
        <div class="contact-info">
          <el-input v-model="applyForm.contactName" placeholder="联系人姓名" class="contact-input" />
          <el-input v-model="applyForm.contactPhone" placeholder="联系人电话" class="contact-input" />
          <el-input v-model="applyForm.contactEmail" placeholder="联系人邮箱" class="contact-input" />
        </div>
      </el-form-item>
    </el-form>
    
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm" :loading="submitLoading">提交申请</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, watch, computed, onMounted } from 'vue'
import { ElMessage, FormInstance, UploadProps, UploadUserFile, genFileId } from 'element-plus'
import { Upload } from '@element-plus/icons-vue'
import { getRegisteredResources, getResourceDetail } from '@/api/data-auth'

// 定义props和emits
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'success'])

// 弹窗可见性双向绑定
const dialogVisible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

// 表单ref
const formRef = ref<FormInstance>()

// 申请表单数据
const applyForm = reactive({
  resourceId: '',
  useScope: '',
  applyReason: '',
  attachments: [],
  organizationName: '',
  organizationAddr: '',
  organizationContact: '',
  contactName: '',
  contactPhone: '',
  contactEmail: ''
})

// 资源信息
const resourceInfo = reactive({
  type: '',
  description: ''
})

// 表单验证规则
const formRules = {
  resourceId: [
    { required: true, message: '请选择数据资源', trigger: 'change' }
  ],
  useScope: [
    { required: true, message: '请填写申请使用范围', trigger: 'blur' },
    { min: 10, message: '申请使用范围不能少于10个字符', trigger: 'blur' }
  ],
  applyReason: [
    { required: true, message: '请填写申请理由', trigger: 'blur' },
    { min: 10, message: '申请理由不能少于10个字符', trigger: 'blur' }
  ],
  attachments: [
    { required: true, message: '请上传申请材料', trigger: 'change' }
  ]
}

// 数据资源选项
const resourceOptions = ref([])
// 是否正在加载资源选项
const loadingResources = ref(false)

// 加载已登记的数据资源
const loadRegisteredResources = async () => {
  loadingResources.value = true
  try {
    const resources = await getRegisteredResources()
    resourceOptions.value = resources
    loadingResources.value = false
  } catch (error) {
    console.error('获取已登记数据资源失败:', error)
    ElMessage.error('获取数据资源列表失败')
    loadingResources.value = false
  }
}

// 组件挂载时加载资源
onMounted(() => {
  loadRegisteredResources()
})

// 上传文件列表
const fileList = ref<UploadUserFile[]>([])

// 提交加载状态
const submitLoading = ref(false)

// 资源选择变更
const handleResourceChange = async (id: string) => {
  // 重置资源信息
  resourceInfo.type = ''
  resourceInfo.description = ''
  
  if (!id) return
  
  try {
    // 首先从已加载的选项中查找
    let resource = resourceOptions.value.find(item => item.id === id)
    
    // 如果本地没有找到或信息不完整，则请求详情
    if (!resource || !resource.dataType || !resource.description) {
      const detail = await getResourceDetail(id)
      if (detail) {
        resource = detail
      }
    }
    
    // 更新资源信息
    if (resource) {
      resourceInfo.type = resource.dataType || ''
      resourceInfo.description = resource.description || ''
    }
  } catch (error) {
    console.error('获取数据资源详情失败:', error)
    ElMessage.error('获取数据资源详情失败')
  }
}

// 自定义上传方法
const customUpload = (options: any) => {
  // 模拟上传
  setTimeout(() => {
    const fileId = genFileId()
    // 将文件添加到表单中
    applyForm.attachments.push({
      id: fileId,
      name: options.file.name,
      url: URL.createObjectURL(options.file),
      size: options.file.size
    })
    
    options.onSuccess()
  }, 300)
}

// 上传前验证
const beforeUpload: UploadProps['beforeUpload'] = (file) => {
  // 允许的文件类型
  const allowedTypes = [
    'application/pdf',                                                      // PDF
    'application/msword',                                                  // DOC
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOCX
    'application/vnd.ms-excel',                                           // XLS
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',   // XLSX
    'application/vnd.ms-powerpoint',                                      // PPT
    'application/vnd.openxmlformats-officedocument.presentationml.presentation' // PPTX
  ]
  
  // 检查文件类型
  const isAllowed = allowedTypes.includes(file.type)
  if (!isAllowed) {
    ElMessage.error('不支持的文件类型，请上传PDF、Word、Excel或PPT格式的文件')
    return false
  }
  
  // 文件大小限制：10MB
  const isLt10M = file.size / 1024 / 1024 < 10
  if (!isLt10M) {
    ElMessage.error('文件大小不能超过10MB')
    return false
  }
  
  return true
}

// 移除文件
const handleRemove = (file: UploadUserFile) => {
  // 从表单中移除文件
  const index = applyForm.attachments.findIndex(item => item.id === file.uid)
  if (index !== -1) {
    applyForm.attachments.splice(index, 1)
  }
}

// 提交表单
const submitForm = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate(async (valid, fields) => {
    if (valid) {
      submitLoading.value = true
      try {
        // 模拟提交API
        setTimeout(() => {
          submitLoading.value = false
          dialogVisible.value = false
          emit('success')
        }, 1000)
      } catch (error) {
        console.error('提交授权申请失败', error)
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
  if (formRef.value) {
    formRef.value.resetFields()
  }
  
  // 重置资源信息
  resourceInfo.type = ''
  resourceInfo.description = ''
  
  // 重置文件列表
  fileList.value = []
}

// 监听弹窗显示
watch(() => props.modelValue, (val) => {
  if (val) {
    // 弹窗打开时的初始化操作
    loadRegisteredResources() // 刷新资源列表
  }
})
</script>

<style scoped lang="scss">
.apply-form {
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

.empty-select-tip {
  padding: 10px 0;
  text-align: center;
  color: #909399;
  font-size: 14px;
}

.mb-10 {
  margin-bottom: 10px;
}

.upload-area {
  width: 100%;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  
  .contact-input {
    flex: 1;
    min-width: 160px;
  }
}

:deep(.el-upload-list__item) {
  transition: all 0.3s;
}

:deep(.el-upload-list__item-status-label) {
  right: 0;
  transition: all 0.3s;
}

:deep(.el-upload-list__item-name) {
  margin-right: 20px;
}
</style> 