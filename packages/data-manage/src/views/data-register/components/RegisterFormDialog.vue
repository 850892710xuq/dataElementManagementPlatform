<template>
  <el-dialog
    v-model="dialogVisible"
    :title="dialogTitle"
    width="800px"
    :close-on-click-modal="false"
    @close="handleClose"
  >
    <!-- 初始登记表单 -->
    <template v-if="type === 'initial'">
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="120px"
        class="register-form"
      >
        <!-- 基本信息 -->
        <h3>基本信息</h3>
        <el-form-item label="数据资源名称" prop="resourceName">
          <el-input v-model="form.resourceName" placeholder="请输入数据资源名称" />
        </el-form-item>
        
        <el-form-item label="数据类型" prop="dataType">
          <el-select v-model="form.dataType" placeholder="请选择数据类型" style="width: 100%" @change="handleDataTypeChange">
            <el-option v-for="item in dataTypeOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        
        <el-form-item label="行业领域" prop="industryField">
          <el-select v-model="form.industryField" placeholder="请选择行业领域" style="width: 100%">
            <el-option v-for="item in industryFieldOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        
        <el-form-item label="数据目录" prop="catalogId">
          <el-cascader
            v-model="form.catalogId"
            :options="catalogOptions"
            :props="{
              expandTrigger: 'click',
              checkStrictly: true,
              label: 'name',
              value: 'id',
              children: 'children',
              disabled: (data) => data.children && data.children.length > 0
            }"
            placeholder="请选择数据目录"
            style="width: 100%"
            clearable
          />
        </el-form-item>
        
        <el-form-item label="数据来源" prop="dataSource">
          <el-input v-model="form.dataSource" placeholder="请输入数据来源" />
        </el-form-item>
        
        <el-form-item label="数据描述" prop="description">
          <el-input
            v-model="form.description"
            type="textarea"
            :rows="4"
            placeholder="请输入数据资源描述"
          />
        </el-form-item>
        
        <el-form-item label="数据量" prop="dataVolume">
          <el-input-number
            v-model="form.dataVolume"
            :min="0"
            controls-position="right"
            placeholder="请输入数据量"
            style="width: 100%"
          />
        </el-form-item>
        
        <el-form-item label="价格" prop="price">
          <el-input-number
            v-model="form.price"
            :min="0"
            :precision="2"
            :step="0.01"
            controls-position="right"
            placeholder="请输入价格(元)"
            style="width: 100%"
          />
        </el-form-item>
        
        <!-- 数据资源详细信息 -->
        <h3>数据资源详细信息</h3>
        
        <!-- 新增数据源选择下拉框 -->
        <el-form-item label="数据源" prop="resourceDetails.dataSourceId">
          <el-select 
            v-model="form.resourceDetails.dataSourceId" 
            placeholder="请选择数据源" 
            style="width: 100%"
            @change="handleDataSourceChange"
          >
            <el-option 
              v-for="item in filteredDataSourceOptions" 
              :key="item.id" 
              :label="item.name" 
              :value="item.id" 
            />
          </el-select>
        </el-form-item>
        
        <!-- MySQL类型数据 -->
        <template v-if="form.dataType === 'mysql'">
          <!-- 去掉数据源相关的录入项，只保留其他必要信息 -->
          <el-form-item label="数据表" prop="resourceDetails.tableName">
            <el-input v-model="form.resourceDetails.tableName" placeholder="请输入数据表名称" />
          </el-form-item>
        </template>
        
        <!-- 数据报告类型 -->
        <template v-else-if="form.dataType === 'report'">
          <!-- 数据报告类型不再需要额外字段，所有信息都从选择的数据源获取 -->
        </template>
        
        <!-- API接口类型 -->
        <template v-else-if="form.dataType === 'api'">
          <!-- API接口类型不再需要额外字段，所有信息都从选择的数据源获取 -->
        </template>
        
        <!-- 文件类型 -->
        <template v-else-if="form.dataType === 'file'">
          <!-- 数据文件类型不再需要额外字段，所有信息都从选择的数据源获取 -->
        </template>
        
        <!-- 上传附件 -->
        <h3>上传附件</h3>
        <p class="upload-tips">请上传数据来源证明文件（如数据采集授权书、合作协议等）、评估报告（说明数据质量、价值等）等材料</p>
        
        <el-upload
          class="upload-demo"
          :action="uploadAction"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :before-upload="beforeUpload"
          :file-list="fileList"
          multiple
        >
          <el-button type="primary">上传附件</el-button>
          <template #tip>
            <div class="el-upload__tip">
              支持上传PDF、Word等常用格式文件，单个文件不超过10MB
            </div>
          </template>
        </el-upload>
      </el-form>
    </template>
    
    <!-- 变更登记表单 -->
    <template v-else-if="type === 'change'">
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="120px"
        class="register-form"
      >
        <!-- 只读信息 -->
        <h3>基本信息（只读）</h3>
        <el-descriptions :column="2" border>
          <el-descriptions-item label="登记编号">
            {{ form.registerNo }}
          </el-descriptions-item>
          <el-descriptions-item label="数据资源名称">
            {{ form.resourceName }}
          </el-descriptions-item>
          <el-descriptions-item label="数据类型">
            {{ getDataTypeName(form.dataType) }}
          </el-descriptions-item>
          <el-descriptions-item label="行业领域">
            {{ getIndustryFieldName(form.industryField) }}
          </el-descriptions-item>
          <el-descriptions-item label="数据目录">
            {{ getCatalogPathName(form.catalogId) }}
          </el-descriptions-item>
          <el-descriptions-item label="登记状态">
            <el-tag :type="getStatusTagType(form.registerStatus)">
              {{ getStatusName(form.registerStatus) }}
            </el-tag>
          </el-descriptions-item>
        </el-descriptions>
        
        <!-- 变更信息 -->
        <h3>变更信息</h3>
        <el-form-item label="变更原因" prop="changeReason">
          <el-input
            v-model="form.changeReason"
            type="textarea"
            :rows="4"
            placeholder="请输入变更原因"
          />
        </el-form-item>
        
        <el-form-item label="行业领域" prop="industryField">
          <el-select v-model="form.industryField" placeholder="请选择行业领域" style="width: 100%">
            <el-option v-for="item in industryFieldOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        
        <el-form-item label="数据目录" prop="catalogId">
          <el-cascader
            v-model="form.catalogId"
            :options="catalogOptions"
            :props="{
              expandTrigger: 'click',
              checkStrictly: true,
              label: 'name',
              value: 'id',
              children: 'children',
              disabled: (data) => data.children && data.children.length > 0
            }"
            placeholder="请选择数据目录"
            style="width: 100%"
            clearable
          />
        </el-form-item>
        
        <el-form-item label="数据来源" prop="dataSource">
          <el-input v-model="form.dataSource" placeholder="请输入数据来源" />
        </el-form-item>
        
        <el-form-item label="数据描述" prop="description">
          <el-input
            v-model="form.description"
            type="textarea"
            :rows="4"
            placeholder="请输入数据资源描述"
          />
        </el-form-item>
        
        <el-form-item label="数据量" prop="dataVolume">
          <el-input-number
            v-model="form.dataVolume"
            :min="0"
            controls-position="right"
            placeholder="请输入数据量"
            style="width: 100%"
          />
        </el-form-item>
        
        <el-form-item label="价格" prop="price">
          <el-input-number
            v-model="form.price"
            :min="0"
            :precision="2"
            :step="0.01"
            controls-position="right"
            placeholder="请输入价格(元)"
            style="width: 100%"
          />
        </el-form-item>
        
        <!-- 数据资源详细信息 -->
        <h3>数据资源详细信息</h3>
        
        <!-- 新增数据源选择下拉框 -->
        <el-form-item label="数据源" prop="resourceDetails.dataSourceId">
          <el-select 
            v-model="form.resourceDetails.dataSourceId" 
            placeholder="请选择数据源" 
            style="width: 100%"
            @change="handleDataSourceChange"
          >
            <el-option 
              v-for="item in filteredDataSourceOptions" 
              :key="item.id" 
              :label="item.name" 
              :value="item.id" 
            />
          </el-select>
        </el-form-item>
        
        <!-- MySQL类型数据 -->
        <template v-if="form.dataType === 'mysql'">
          <!-- 去掉数据源相关的录入项，只保留其他必要信息 -->
          <el-form-item label="数据表" prop="resourceDetails.tableName">
            <el-input v-model="form.resourceDetails.tableName" placeholder="请输入数据表名称" />
          </el-form-item>
        </template>
        
        <!-- 数据报告类型 -->
        <template v-else-if="form.dataType === 'report'">
          <!-- 数据报告类型不再需要额外字段，所有信息都从选择的数据源获取 -->
        </template>
        
        <!-- API接口类型 -->
        <template v-else-if="form.dataType === 'api'">
          <!-- API接口类型不再需要额外字段，所有信息都从选择的数据源获取 -->
        </template>
        
        <!-- 文件类型 -->
        <template v-else-if="form.dataType === 'file'">
          <!-- 数据文件类型不再需要额外字段，所有信息都从选择的数据源获取 -->
        </template>
        
        <!-- 上传附件 -->
        <h3>上传附件</h3>
        <p class="upload-tips">请上传变更所需的证明材料</p>
        
        <el-upload
          class="upload-demo"
          :action="uploadAction"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :before-upload="beforeUpload"
          :file-list="fileList"
          multiple
        >
          <el-button type="primary">上传附件</el-button>
          <template #tip>
            <div class="el-upload__tip">
              支持上传PDF、Word等常用格式文件，单个文件不超过10MB
            </div>
          </template>
        </el-upload>
      </el-form>
    </template>
    
    <!-- 注销登记表单 -->
    <template v-else-if="type === 'cancel'">
      <el-form
        ref="formRef"
        :model="form"
        :rules="cancelRules"
        label-width="120px"
        class="register-form"
      >
        <!-- 只读信息 -->
        <h3>基本信息（只读）</h3>
        <el-descriptions :column="2" border>
          <el-descriptions-item label="登记编号">
            {{ form.registerNo }}
          </el-descriptions-item>
          <el-descriptions-item label="数据资源名称">
            {{ form.resourceName }}
          </el-descriptions-item>
          <el-descriptions-item label="数据类型">
            {{ getDataTypeName(form.dataType) }}
          </el-descriptions-item>
          <el-descriptions-item label="数据来源">
            {{ form.dataSource }}
          </el-descriptions-item>
          <el-descriptions-item label="行业领域">
            {{ getIndustryFieldName(form.industryField) }}
          </el-descriptions-item>
          <el-descriptions-item label="数据目录">
            {{ getCatalogPathName(form.catalogId) }}
          </el-descriptions-item>
          <el-descriptions-item label="登记状态">
            <el-tag :type="getStatusTagType(form.registerStatus)">
              {{ getStatusName(form.registerStatus) }}
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="数据源名称">
            {{ form.resourceDetails.dataSourceName || '未选择' }}
          </el-descriptions-item>
          <el-descriptions-item label="数据量">
            {{ form.dataVolume || '0' }}
          </el-descriptions-item>
          <el-descriptions-item label="价格">
            {{ form.price ? `¥${form.price.toFixed(2)}` : '¥0.00' }}
          </el-descriptions-item>
        </el-descriptions>
        
        <!-- 注销原因 -->
        <h3>注销原因</h3>
        <el-form-item label="注销原因" prop="cancelReason">
          <el-input
            v-model="form.cancelReason"
            type="textarea"
            :rows="4"
            placeholder="请输入注销原因"
          />
        </el-form-item>
        
        <!-- 上传附件 -->
        <h3>上传附件</h3>
        <p class="upload-tips">请上传注销所需的证明材料</p>
        
        <el-upload
          class="upload-demo"
          :action="uploadAction"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :before-upload="beforeUpload"
          :file-list="fileList"
          multiple
        >
          <el-button type="primary">上传附件</el-button>
          <template #tip>
            <div class="el-upload__tip">
              支持上传PDF、Word等常用格式文件，单个文件不超过10MB
            </div>
          </template>
        </el-upload>
      </el-form>
    </template>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch, computed, reactive, onMounted } from 'vue'
import { ElMessage, FormInstance } from 'element-plus'
import { cloneDeep } from 'lodash-es'
import type { CatalogNode } from '@/api/data-catalog'
import { getCatalogTree } from '@/api/data-catalog'
import { 
  createDataRegister, 
  updateDataRegister, 
  cancelDataRegister, 
  getDataRegisterDetail 
} from '@/api/data-register'
// 引入数据接入管理的API和接口
import {
  getDataSourceList,
  type DataSource,
  DataSourceType
} from '@/api/data-access'

// 接收传入的props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'initial', // initial, change, cancel
    validator: (value: string) => ['initial', 'change', 'cancel'].includes(value)
  },
  initialData: {
    type: Object,
    default: () => null
  }
})

// 触发事件
const emit = defineEmits(['update:modelValue', 'close', 'submit-success'])

// 对话框显示状态
const dialogVisible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

// 对话框标题
const dialogTitle = computed(() => {
  switch (props.type) {
    case 'initial':
      return '初始登记'
    case 'change':
      return '变更登记'
    case 'cancel':
      return '注销登记'
    default:
      return '数据登记'
  }
})

// 表单引用
const formRef = ref<FormInstance | null>(null)

// 定义数据类型选项
const dataTypeOptions = [
  { value: 'mysql', label: 'MySQL数据库' },
  { value: 'gaussdb', label: 'GaussDB数据库' },
  { value: 'report', label: '数据报告' },
  { value: 'file', label: '数据文件' },
  { value: 'api', label: 'API接口' }
]

// 定义行业领域选项
const industryFieldOptions = [
  { value: 'finance', label: '金融' },
  { value: 'healthcare', label: '医疗' },
  { value: 'education', label: '教育' },
  { value: 'transportation', label: '交通' },
  { value: 'retail', label: '零售' },
  { value: 'manufacturing', label: '制造' }
]

// 定义登记状态选项
const statusOptions = [
  { value: 'initial', label: '初始登记' },
  { value: 'reviewing', label: '审核中' },
  { value: 'registered', label: '已登记' },
  { value: 'changing', label: '变更登记中' },
  { value: 'cancelling', label: '注销登记中' },
  { value: 'cancelled', label: '已注销' }
]

// 表单数据
const form = reactive({
  registerNo: '',
  resourceName: '',
  dataType: '',
  dataSource: '',
  industryField: '',
  catalogId: '',
  description: '',
  registerStatus: '',
  registerTime: '',
  updateTime: '',
  changeReason: '',
  cancelReason: '',
  dataVolume: 0,
  price: 0,
  resourceDetails: {
    // MySQL数据库
    dbName: '',
    dbHost: '',
    dbPort: '',
    dbUser: '',
    dbPassword: '',
    // 数据报告
    reportTitle: '',
    reportAuthor: '',
    publishDate: '',
    // API接口
    apiUrl: '',
    method: '',
    authType: '',
    // 数据文件
    fileFormat: '',
    encoding: '',
    // 新增数据源选择下拉框
    dataSourceId: '',
    // 新增数据源名称
    dataSourceName: '',
    // 新增数据表名称
    tableName: ''
  }
})

// 验证规则
const rules = reactive({
  resourceName: [
    { required: true, message: '请输入数据资源名称', trigger: 'blur' },
    { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
  ],
  dataType: [
    { required: true, message: '请选择数据类型', trigger: 'change' }
  ],
  dataSource: [
    { required: true, message: '请输入数据来源', trigger: 'blur' }
  ],
  industryField: [
    { required: true, message: '请选择行业领域', trigger: 'change' }
  ],
  catalogId: [
    { required: true, message: '请选择数据目录', trigger: 'change' }
  ],
  description: [
    { required: true, message: '请输入数据描述', trigger: 'blur' }
  ],
  dataVolume: [
    { required: true, message: '请输入数据量', trigger: 'blur' }
  ],
  price: [
    { required: true, message: '请输入价格', trigger: 'blur' }
  ],
  changeReason: [
    { required: true, message: '请输入变更原因', trigger: 'blur' }
  ],
  'resourceDetails.dataSourceId': [
    { required: true, message: '请选择数据源', trigger: 'change' }
  ],
  'resourceDetails.tableName': [
    { required: true, message: '请输入数据表名称', trigger: 'blur' }
  ]
})

// 注销登记验证规则
const cancelRules = reactive({
  cancelReason: [
    { required: true, message: '请输入注销原因', trigger: 'blur' }
  ]
})

// 文件列表
const fileList = ref([])

// 上传地址
const uploadAction = '/api/data-register/upload'

// 数据目录树选项
const catalogOptions = ref<CatalogNode[]>([])

// 加载数据目录树
const loadCatalogTree = async () => {
  try {
    const fullTree = await getCatalogTree()
    // 只保留数据市场(id为1)下的子节点
    const dataMarket = fullTree.find(node => node.id === '1')
    if (dataMarket && dataMarket.children) {
      catalogOptions.value = dataMarket.children
    } else {
      catalogOptions.value = []
      console.error('未找到数据市场节点或其子节点')
    }
  } catch (error) {
    console.error('加载数据目录树失败:', error)
    ElMessage.error('加载数据目录树失败')
  }
}

// 获取数据类型名称
const getDataTypeName = (type) => {
  const item = dataTypeOptions.find(item => item.value === type)
  return item ? item.label : type || '暂无'
}

// 获取行业领域名称
const getIndustryFieldName = (field) => {
  const item = industryFieldOptions.find(item => item.value === field)
  return item ? item.label : field || '暂无'
}

// 获取状态名称
const getStatusName = (status) => {
  const item = statusOptions.find(item => item.value === status)
  return item ? item.label : status || '暂无'
}

// 获取状态标签类型
const getStatusTagType = (status) => {
  switch (status) {
    case 'initial':
      return 'info'
    case 'reviewing':
    case 'changing':
    case 'cancelling':
      return 'warning'
    case 'registered':
      return 'success'
    case 'cancelled':
      return 'danger'
    default:
      return 'info'
  }
}

// 获取数据目录路径名
const getCatalogPathName = (catalogId: string) => {
  if (!catalogId) return '暂无'
  
  // 递归查找目录节点
  const findCatalogNode = (nodes: CatalogNode[], id: string): CatalogNode | null => {
    for (const node of nodes) {
      if (node.id === id) return node
      if (node.children && node.children.length > 0) {
        const found = findCatalogNode(node.children, id)
        if (found) return found
      }
    }
    return null
  }
  
  // 构建目录路径
  const buildPath = (node: CatalogNode | null): string => {
    if (!node) return '未知目录'
    
    const pathParts = []
    let current: CatalogNode | null = node
    
    // 添加当前节点名称
    pathParts.unshift(current.name)
    
    // 查找父节点，但只在数据市场的子节点范围内查找
    if (current.parentId && current.parentId !== '1') { // 不是直接挂在数据市场下的节点
      const parentNode = findCatalogNode(catalogOptions.value, current.parentId)
      if (parentNode) {
        pathParts.unshift(parentNode.name)
      }
    }
    
    return pathParts.join(' > ')
  }
  
  const node = findCatalogNode(catalogOptions.value, catalogId)
  return buildPath(node)
}

// 文件上传前验证
const beforeUpload = (file) => {
  // 检查文件类型
  const allowTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  const isAllowedType = allowTypes.includes(file.type)
  if (!isAllowedType) {
    ElMessage.error('只能上传PDF、Word等常用格式文件!')
    return false
  }
  
  // 检查文件大小
  const isLt10M = file.size / 1024 / 1024 < 10
  if (!isLt10M) {
    ElMessage.error('上传文件大小不能超过 10MB!')
    return false
  }
  
  return true
}

// 处理文件上传成功
const handleSuccess = (response, file, fileList) => {
  // 上传成功后处理
  ElMessage.success(`文件 ${file.name} 上传成功`)
  // 实际项目中可能需要保存文件ID等信息
}

// 处理文件移除
const handleRemove = (file, fileList) => {
  // 移除文件时处理
  console.log('移除文件:', file)
}

// 处理预览文件
const handlePreview = (file) => {
  // 预览文件
  console.log('预览文件:', file)
  // 实际项目中可能需要弹出预览窗口或下载文件
}

// 关闭对话框
const handleClose = () => {
  // 重置表单
  formRef.value?.resetFields()
  fileList.value = []
  emit('close')
}

// 提交表单
const submitForm = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 设置更新时间为当前时间
      const currentTime = new Date().toISOString().slice(0, 19).replace('T', ' ')
      
      // 根据不同类型提交不同的数据
      let submitData = {}
      
      if (props.type === 'initial') {
        // 初始登记提交数据
        submitData = {
          ...form,
          updateTime: currentTime,
          registerStatus: 'reviewing', // 提交后状态变为"审核中"
          attachments: fileList.value.map(file => ({
            fileName: file.name,
            fileType: file.raw?.type || '',
            fileSize: file.size || 0,
            uploadTime: new Date().toISOString(),
            fileId: file.response?.fileId || ''
          }))
        }
      } else if (props.type === 'change') {
        // 变更登记提交数据
        submitData = {
          id: props.initialData?.id,
          registerNo: form.registerNo,
          resourceName: form.resourceName,
          dataType: form.dataType,
          dataSource: form.dataSource,
          industryField: form.industryField,
          description: form.description,
          dataVolume: form.dataVolume,
          price: form.price,
          resourceDetails: form.resourceDetails,
          changeReason: form.changeReason,
          updateTime: currentTime,
          registerStatus: 'changing', // 提交后状态变为"变更登记中"
          attachments: fileList.value.map(file => ({
            fileName: file.name,
            fileType: file.raw?.type || '',
            fileSize: file.size || 0,
            uploadTime: new Date().toISOString(),
            fileId: file.response?.fileId || ''
          }))
        }
      } else if (props.type === 'cancel') {
        // 注销登记提交数据
        submitData = {
          id: props.initialData?.id,
          registerNo: form.registerNo,
          cancelReason: form.cancelReason,
          updateTime: currentTime,
          registerStatus: 'cancelling', // 提交后状态变为"注销登记中"
          attachments: fileList.value.map(file => ({
            fileName: file.name,
            fileType: file.raw?.type || '',
            fileSize: file.size || 0,
            uploadTime: new Date().toISOString(),
            fileId: file.response?.fileId || ''
          }))
        }
      }
      
      // 模拟提交API请求
      setTimeout(() => {
        ElMessage.success('提交成功，请等待审核')
        dialogVisible.value = false
        emit('submit-success')
      }, 1000)
      
      console.log('提交的数据:', submitData)
    } else {
      ElMessage.error('请完善表单信息')
      return false
    }
  })
}

// 数据源选项列表
const dataSourceOptions = ref<DataSource[]>([])

// 根据当前选择的数据类型过滤数据源选项
const filteredDataSourceOptions = computed(() => {
  if (!form.dataType) {
    return dataSourceOptions.value // 未选择数据类型时显示全部
  }
  // 根据选择的数据类型过滤数据源
  return dataSourceOptions.value.filter(item => item.type === form.dataType)
})

// 处理数据类型变更事件
const handleDataTypeChange = (value: string) => {
  if (!value) return
  
  // 清空已选择的数据源，避免类型不匹配
  form.resourceDetails.dataSourceId = ''
  form.resourceDetails.dataSourceName = ''
  
  // 如果没有该类型的数据源，提示用户
  if (filteredDataSourceOptions.value.length === 0) {
    ElMessage.warning(`没有可用的${getDataTypeName(value)}类型数据源，请先在数据接入管理中添加`)
  }
}

// 加载数据源列表
const loadDataSourceOptions = async () => {
  try {
    // 使用本地存储中的数据
    const mockDataList = localStorage.getItem('dataSourceList')
    if (mockDataList) {
      dataSourceOptions.value = JSON.parse(mockDataList)
    } else {
      // 如果没有本地存储数据，使用模拟数据
      dataSourceOptions.value = [
        {
          id: '1',
          name: 'MySQL数据库',
          type: DataSourceType.MYSQL,
          createTime: '2023-10-15 10:30:45',
          creator: 'admin',
          status: 'active',
          description: 'MySQL测试数据库'
        },
        {
          id: '2',
          name: 'GaussDB实例',
          type: DataSourceType.GAUSSDB,
          createTime: '2023-10-16 09:22:10',
          creator: 'admin',
          status: 'active',
          description: 'GaussDB测试数据库'
        },
        {
          id: '3',
          name: '业务月度报表',
          type: DataSourceType.REPORT,
          createTime: '2023-10-16 14:22:10',
          creator: 'admin',
          status: 'active',
          description: '业务数据月度统计报表'
        }
      ]
    }
  } catch (error) {
    console.error('加载数据源列表失败:', error)
    ElMessage.error('加载数据源列表失败')
  }
}

// 处理数据源变更事件
const handleDataSourceChange = (value: string) => {
  if (!value) return
  
  // 根据选择的数据源ID查找对应的数据源
  const selectedDataSource = dataSourceOptions.value.find(item => item.id === value)
  if (selectedDataSource) {
    // 保存数据源名称，用于显示
    form.resourceDetails.dataSourceName = selectedDataSource.name
    
    // 如果是数据报告类型，直接从数据源获取相关信息
    if (form.dataType === 'report' && selectedDataSource.type === DataSourceType.REPORT) {
      // 这里可以尝试从数据源配置中获取报告相关信息
      // 实际项目中可能需要调用API来获取具体的报告信息
      const reportConfig = (selectedDataSource as any).config as { reportName?: string; }
      if (reportConfig?.reportName) {
        // 保存报告名称等信息，但不在界面显示
        form.resourceDetails.reportTitle = reportConfig.reportName
      }
    }
    
    // 如果是数据文件类型，直接从数据源获取相关信息
    if (form.dataType === 'file' && selectedDataSource.type === DataSourceType.FILE) {
      // 这里可以尝试从数据源配置中获取文件相关信息
      const fileConfig = (selectedDataSource as any).config as { fileFormat?: string; encoding?: string; }
      if (fileConfig) {
        // 保存文件格式等信息，但不在界面显示
        form.resourceDetails.fileFormat = fileConfig.fileFormat || ''
        form.resourceDetails.encoding = fileConfig.encoding || ''
      }
    }
    
    // 如果是API接口类型，直接从数据源获取相关信息
    if (form.dataType === 'api' && selectedDataSource.type === DataSourceType.API) {
      // 这里可以尝试从数据源配置中获取API相关信息
      const apiConfig = (selectedDataSource as any).config as { apiUrl?: string; method?: string; authType?: string; }
      if (apiConfig) {
        // 保存API相关信息，但不在界面显示
        form.resourceDetails.apiUrl = apiConfig.apiUrl || ''
        form.resourceDetails.method = apiConfig.method || ''
        form.resourceDetails.authType = apiConfig.authType || ''
      }
    }
    
    // 更新表单提示
    ElMessage.success(`已选择数据源: ${selectedDataSource.name}`)
  }
}

// 初始化
onMounted(() => {
  loadCatalogTree()
  loadDataSourceOptions()
})

// 监听初始数据变化，更新表单
watch(() => props.initialData, (newVal) => {
  if (newVal) {
    // 先处理除resourceDetails外的其他属性
    Object.keys(form).forEach(key => {
      if (key in newVal && key !== 'resourceDetails') {
        form[key] = newVal[key]
      }
    })
    
    // 再处理resourceDetails，确保数据类型先设置
    if ('resourceDetails' in newVal) {
      form.resourceDetails = cloneDeep(newVal.resourceDetails || {})
      
      // 延迟执行，确保数据类型已经被正确设置
      setTimeout(() => {
        // 如果有数据源ID，则先验证是否与当前数据类型匹配
        if (form.resourceDetails.dataSourceId) {
          const selectedDataSource = dataSourceOptions.value.find(
            item => item.id === form.resourceDetails.dataSourceId
          )
          
          if (selectedDataSource && selectedDataSource.type === form.dataType) {
            // 类型匹配，设置数据源名称
            form.resourceDetails.dataSourceName = selectedDataSource.name
          } else {
            // 类型不匹配，清空数据源相关的字段
            form.resourceDetails.dataSourceId = ''
            form.resourceDetails.dataSourceName = ''
            ElMessage.warning('原数据源与当前数据类型不匹配，请重新选择数据源')
          }
        }
      }, 300)
    }
  }
}, { immediate: true })

// 监听对话框打开关闭状态
watch(() => dialogVisible.value, (newVal) => {
  if (!newVal) {
    // 关闭对话框时重置表单
    formRef.value?.resetFields()
    fileList.value = []
  } else if (props.type === 'initial') {
    // 初始登记时重置表单
    Object.keys(form).forEach(key => {
      if (key !== 'dataType') {
        form[key] = ''
      }
    })
    // 清空数据类型
    form.dataType = ''
    
    // 设置更新时间为当前时间
    form.updateTime = new Date().toISOString().slice(0, 19).replace('T', ' ')
    
    // 重置resourceDetails
    form.resourceDetails = {
      // 保留所有字段，但在表单中不再显示报告相关字段
      reportTitle: '',
      reportAuthor: '',
      publishDate: '',
      apiUrl: '',
      method: '',
      authType: '',
      fileFormat: '',
      encoding: '',
      dataSourceId: '',
      dataSourceName: '',
      tableName: ''
    }
    form.industryField = ''
  }
})
</script>

<style scoped lang="scss">
.register-form {
  h3 {
    font-size: 16px;
    font-weight: 500;
    margin: 25px 0 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ebeef5;
  }
  
  .upload-tips {
    color: #606266;
    font-size: 14px;
    margin-bottom: 15px;
  }
  
  &:first-child h3 {
    margin-top: 0;
  }
}

.dialog-footer {
  text-align: right;
}

.upload-demo {
  margin-bottom: 20px;
}
</style> 