<template>
  <el-form
    ref="formRef"
    :model="form"
    :rules="rules"
    label-width="120px"
  >
    <el-form-item label="数据源名称" prop="name">
      <el-input v-model="form.name" placeholder="请输入数据源名称" />
    </el-form-item>
    
    <el-form-item label="数据源类型" prop="type">
      <el-select
        v-model="form.type"
        placeholder="请选择数据源类型"
        :disabled="props.type === 'edit'"
        @change="handleTypeChange"
      >
        <el-option
          v-for="item in dataSourceTypeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    
    <el-form-item label="敏感级别" prop="sensitivityLevel">
      <el-select
        v-model="form.sensitivityLevel"
        placeholder="请选择敏感级别"
      >
        <el-option
          v-for="item in sensitivityLevelOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    
    <el-form-item label="描述" prop="description">
      <el-input
        v-model="form.description"
        type="textarea"
        placeholder="请输入数据源描述"
      />
    </el-form-item>

    <!-- MySQL配置 -->
    <template v-if="form.type === DataSourceType.MYSQL">
      <el-form-item label="服务器地址" prop="config.host">
        <el-input v-model="form.config.host" placeholder="请输入服务器地址" />
      </el-form-item>
      <el-form-item label="端口号" prop="config.port">
        <el-input-number v-model="form.config.port" :min="1" :max="65535" />
      </el-form-item>
      <el-form-item label="用户名" prop="config.username">
        <el-input v-model="form.config.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="config.password">
        <el-input
          v-model="form.config.password"
          type="password"
          placeholder="请输入密码"
          show-password
        />
      </el-form-item>
      <el-form-item label="数据库名" prop="config.database">
        <el-input v-model="form.config.database" placeholder="请输入数据库名" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="testConnection">测试连接</el-button>
      </el-form-item>
    </template>

    <!-- GaussDB配置 -->
    <template v-if="form.type === DataSourceType.GAUSSDB">
      <el-form-item label="服务器地址" prop="config.host">
        <el-input v-model="form.config.host" placeholder="请输入服务器地址" />
      </el-form-item>
      <el-form-item label="端口号" prop="config.port">
        <el-input-number v-model="form.config.port" :min="1" :max="65535" />
      </el-form-item>
      <el-form-item label="用户名" prop="config.username">
        <el-input v-model="form.config.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="config.password">
        <el-input
          v-model="form.config.password"
          type="password"
          placeholder="请输入密码"
          show-password
        />
      </el-form-item>
      <el-form-item label="数据库名" prop="config.database">
        <el-input v-model="form.config.database" placeholder="请输入数据库名" />
      </el-form-item>
      <el-form-item label="集群信息" prop="config.cluster">
        <el-input v-model="form.config.cluster" placeholder="请输入集群信息（选填）" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="testConnection">测试连接</el-button>
      </el-form-item>
    </template>

    <!-- 数据报告配置 -->
    <template v-if="form.type === DataSourceType.REPORT">
      <el-form-item label="报告名称" prop="config.reportName">
        <el-input v-model="form.config.reportName" placeholder="请输入报告名称" />
      </el-form-item>
      <el-form-item label="报告格式" prop="config.reportFormat">
        <el-select v-model="form.config.reportFormat" placeholder="请选择报告格式">
          <el-option label="PDF" value="pdf" />
          <el-option label="Word" value="word" />
        </el-select>
      </el-form-item>
      <el-form-item label="使用限制" prop="config.useLimit">
        <el-input
          v-model="form.config.useLimit"
          type="textarea"
          placeholder="请输入使用限制说明（选填）"
        />
      </el-form-item>
      <el-form-item label="上传文件" prop="config.fileList">
        <el-upload
          v-model:file-list="form.config.fileList"
          action="/api/upload"
          :on-success="handleUploadSuccess"
          :on-error="handleUploadError"
          :before-upload="beforeUpload"
        >
          <el-button type="primary">点击上传</el-button>
          <template #tip>
            <div class="el-upload__tip">
              只能上传 PDF/Word 文件
            </div>
          </template>
        </el-upload>
      </el-form-item>
    </template>

    <!-- 数据文件配置 -->
    <template v-if="form.type === DataSourceType.FILE">
      <el-form-item label="文件名称" prop="config.fileName">
        <el-input v-model="form.config.fileName" placeholder="请输入文件名称" />
      </el-form-item>
      <el-form-item label="文件格式" prop="config.fileFormat">
        <el-select v-model="form.config.fileFormat" placeholder="请选择文件格式">
          <el-option label="CSV" value="csv" />
          <el-option label="TXT" value="txt" />
        </el-select>
      </el-form-item>
      <el-form-item label="特征数量" prop="config.featureCount">
        <el-input-number v-model="form.config.featureCount" :min="0" />
      </el-form-item>
      <el-form-item label="特征信息" prop="config.featureInfo">
        <div v-for="(feature, index) in form.config.featureInfo" :key="index" class="feature-item">
          <el-input v-model="feature.name" placeholder="特征名称" style="width: 180px" />
          <el-select v-model="feature.type" placeholder="特征类型" style="width: 120px; margin-left: 10px">
            <el-option label="字符串" value="string" />
            <el-option label="数值" value="number" />
            <el-option label="日期" value="date" />
          </el-select>
          <el-button type="danger" link @click="removeFeature(index)">删除</el-button>
        </div>
        <el-button type="primary" link @click="addFeature">添加特征</el-button>
      </el-form-item>
      <el-form-item label="上传文件" prop="config.fileList">
        <el-upload
          v-model:file-list="form.config.fileList"
          action="/api/upload"
          :on-success="handleUploadSuccess"
          :on-error="handleUploadError"
          :before-upload="beforeUpload"
        >
          <el-button type="primary">点击上传</el-button>
          <template #tip>
            <div class="el-upload__tip">
              只能上传 CSV/TXT 文件
            </div>
          </template>
        </el-upload>
      </el-form-item>
    </template>

    <!-- API配置 -->
    <template v-if="form.type === DataSourceType.API">
      <el-form-item label="API地址" prop="config.apiUrl">
        <el-input v-model="form.config.apiUrl" placeholder="请输入API接口地址" />
      </el-form-item>
      <el-form-item label="请求方式" prop="config.method">
        <el-select v-model="form.config.method" placeholder="请选择请求方式">
          <el-option label="GET" value="GET" />
          <el-option label="POST" value="POST" />
          <el-option label="PUT" value="PUT" />
          <el-option label="DELETE" value="DELETE" />
        </el-select>
      </el-form-item>
      <el-form-item label="请求参数" prop="config.params">
        <div v-for="(param, index) in form.config.params" :key="index" class="param-item">
          <el-input v-model="param.name" placeholder="参数名称" style="width: 120px" />
          <el-select v-model="param.type" placeholder="参数类型" style="width: 100px; margin-left: 5px">
            <el-option label="字符串" value="string" />
            <el-option label="数值" value="number" />
            <el-option label="布尔值" value="boolean" />
          </el-select>
          <el-checkbox v-model="param.required" style="margin-left: 5px; margin-right: 5px">必填</el-checkbox>
          <el-input
            v-model="param.description"
            placeholder="参数说明"
            style="flex: 1; margin-right: 5px"
          />
          <el-button type="danger" link @click="removeParam(index)" class="delete-btn">删除</el-button>
        </div>
        <el-button type="primary" link @click="addParam">添加参数</el-button>
      </el-form-item>
      <el-form-item label="返回参数" prop="config.response">
        <div v-for="(resp, index) in form.config.response" :key="index" class="param-item">
          <el-input v-model="resp.name" placeholder="参数名称" style="width: 120px" />
          <el-select v-model="resp.type" placeholder="参数类型" style="width: 100px; margin-left: 5px">
            <el-option label="字符串" value="string" />
            <el-option label="数值" value="number" />
            <el-option label="布尔值" value="boolean" />
            <el-option label="对象" value="object" />
            <el-option label="数组" value="array" />
          </el-select>
          <el-input
            v-model="resp.description"
            placeholder="参数说明"
            style="flex: 1; margin-left: 5px; margin-right: 5px"
          />
          <el-button type="danger" link @click="removeResponse(index)" class="delete-btn">删除</el-button>
        </div>
        <el-button type="primary" link @click="addResponse">添加参数</el-button>
      </el-form-item>
      <el-form-item label="请求示例" prop="config.requestExample">
        <el-input
          v-model="form.config.requestExample"
          type="textarea"
          placeholder="请输入请求示例代码"
          :rows="4"
        />
      </el-form-item>
      <el-form-item label="返回示例" prop="config.responseExample">
        <el-input
          v-model="form.config.responseExample"
          type="textarea"
          placeholder="请输入返回示例代码"
          :rows="4"
        />
      </el-form-item>
    </template>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, UploadProps } from 'element-plus'
import {
  DataSourceType,
  type DataSource,
  type MySQLConfig,
  type GaussDBConfig,
  type ReportConfig,
  type FileConfig,
  type APIConfig,
  addDataSource,
  updateDataSource,
  testDBConnection
} from '@/api/data-access'

const props = defineProps<{
  type: 'add' | 'edit'
  formData?: Partial<DataSource>
  addDataSource?: (formData: Partial<DataSource>) => Promise<boolean>
  updateDataSource?: (id: string, formData: Partial<DataSource>) => Promise<boolean>
  editId?: string
}>()

const emit = defineEmits<{
  (e: 'submit'): void
  (e: 'cancel'): void
}>()

// 数据源类型选项
const dataSourceTypeOptions = [
  { label: 'MySQL', value: DataSourceType.MYSQL },
  { label: 'GaussDB', value: DataSourceType.GAUSSDB },
  { label: '数据报告', value: DataSourceType.REPORT },
  { label: '数据文件', value: DataSourceType.FILE },
  { label: 'API接口', value: DataSourceType.API }
]

// 敏感级别选项
const sensitivityLevelOptions = [
  { label: '公开', value: 'public' },
  { label: '内部', value: 'internal' },
  { label: '保密', value: 'confidential' },
  { label: '高度保密', value: 'strictly_confidential' }
]

// 表单数据
const form = reactive<{
  name: string
  type: DataSourceType
  description?: string
  sensitivityLevel: string
  config: Partial<MySQLConfig | GaussDBConfig | ReportConfig | FileConfig | APIConfig>
}>({
  name: '',
  type: DataSourceType.MYSQL,
  description: '',
  sensitivityLevel: 'public', // 默认为公开
  config: {}
})

// 表单校验规则
const rules = {
  name: [
    { required: true, message: '请输入数据源名称', trigger: 'blur' }
  ],
  type: [
    { required: true, message: '请选择数据源类型', trigger: 'change' }
  ],
  sensitivityLevel: [
    { required: true, message: '请选择敏感级别', trigger: 'change' }
  ],
  'config.host': [
    { required: true, message: '请输入服务器地址', trigger: 'blur' }
  ],
  'config.port': [
    { required: true, message: '请输入端口号', trigger: 'blur' }
  ],
  'config.username': [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  'config.password': [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ],
  'config.database': [
    { required: true, message: '请输入数据库名', trigger: 'blur' }
  ],
  'config.reportName': [
    { required: true, message: '请输入报告名称', trigger: 'blur' }
  ],
  'config.reportFormat': [
    { required: true, message: '请选择报告格式', trigger: 'change' }
  ],
  'config.fileName': [
    { required: true, message: '请输入文件名称', trigger: 'blur' }
  ],
  'config.fileFormat': [
    { required: true, message: '请选择文件格式', trigger: 'change' }
  ],
  'config.apiUrl': [
    { required: true, message: '请输入API接口地址', trigger: 'blur' }
  ],
  'config.method': [
    { required: true, message: '请选择请求方式', trigger: 'change' }
  ]
}

const formRef = ref<FormInstance>()

// 监听表单数据变化
watch(() => props.formData, (newVal) => {
  if (newVal) {
    Object.assign(form, newVal)
  }
}, { immediate: true })

// 数据源类型变化时重置配置
const handleTypeChange = () => {
  form.config = {}
}

// 测试数据库连接
const testConnection = async () => {
  try {
    await testDBConnection(form.config as MySQLConfig | GaussDBConfig)
    ElMessage.success('连接成功')
  } catch (error) {
    console.error('测试连接失败:', error)
    ElMessage.error('连接失败')
  }
}

// 添加特征
const addFeature = () => {
  // @ts-ignore - 忽略类型错误，确保功能正常
  if (!Array.isArray(form.config.featureInfo)) {
    // @ts-ignore
    form.config.featureInfo = []
  }
  // @ts-ignore
  form.config.featureInfo.push({
    name: '',
    type: 'string'
  })
}

// 删除特征
const removeFeature = (index: number) => {
  // @ts-ignore
  if (Array.isArray(form.config.featureInfo)) {
    // @ts-ignore
    form.config.featureInfo.splice(index, 1)
  }
}

// 添加请求参数
const addParam = () => {
  // @ts-ignore
  if (!Array.isArray(form.config.params)) {
    // @ts-ignore
    form.config.params = []
  }
  // @ts-ignore
  form.config.params.push({
    name: '',
    type: 'string',
    required: false,
    description: ''
  })
}

// 删除请求参数
const removeParam = (index: number) => {
  // @ts-ignore
  if (Array.isArray(form.config.params)) {
    // @ts-ignore
    form.config.params.splice(index, 1)
  }
}

// 添加返回参数
const addResponse = () => {
  if (!Array.isArray(form.config.response)) {
    form.config.response = []
  }
  form.config.response.push({
    name: '',
    type: 'string',
    description: ''
  })
}

// 删除返回参数
const removeResponse = (index: number) => {
  if (Array.isArray(form.config.response)) {
    form.config.response.splice(index, 1)
  }
}

// 文件上传成功
const handleUploadSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  ElMessage.success('上传成功')
}

// 文件上传失败
const handleUploadError: UploadProps['onError'] = (error, uploadFile) => {
  console.error('上传失败:', error)
  ElMessage.error('上传失败')
}

// 上传前校验
const beforeUpload: UploadProps['beforeUpload'] = (file) => {
  const isValidFormat = form.type === DataSourceType.REPORT
    ? ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)
    : ['text/csv', 'text/plain'].includes(file.type)
  
  if (!isValidFormat) {
    ElMessage.error('文件格式不正确')
    return false
  }
  return true
}

// 重置表单
const resetForm = () => {
  if (formRef.value) {
    formRef.value.resetFields()
  }
  
  // 重置配置
  form.name = ''
  form.type = DataSourceType.MYSQL
  form.description = ''
  form.sensitivityLevel = 'public'
  form.config = {}
}

// 添加响应字段
const addResponseField = () => {
  // @ts-ignore
  if (!Array.isArray(form.config.response)) {
    // @ts-ignore
    form.config.response = []
  }
  // @ts-ignore
  form.config.response.push({
    name: '',
    type: 'string',
    description: ''
  })
}

// 删除响应字段
const removeResponseField = (index: number) => {
  // @ts-ignore
  if (Array.isArray(form.config.response)) {
    // @ts-ignore
    form.config.response.splice(index, 1)
  }
}

// 表单提交方法
const submitForm = async () => {
  // 表单验证
  if (!formRef.value) return
    
  await formRef.value.validate(async (valid, fields) => {
    if (valid) {
      try {
        // 构造表单数据
        const formData = {
          name: form.name,
          type: form.type,
          description: form.description || '',
          sensitivityLevel: form.sensitivityLevel,
          // @ts-ignore - 忽略类型错误，确保功能正常
          config: form.config
        }
        
        let result = false
        
        // 根据不同类型分别处理
        if (props.type === 'add') {
          // 调用父组件注入的添加方法
          if (props.addDataSource) {
            result = await props.addDataSource(formData)
          }
        } else if (props.type === 'edit' && props.editId) {
          // 调用父组件注入的更新方法
          if (props.updateDataSource) {
            result = await props.updateDataSource(props.editId, formData)
          }
        }
        
        if (result) {
          ElMessage.success('保存成功')
          resetForm()
          emit('submit')
        } else {
          ElMessage.error('保存失败')
        }
      } catch (error) {
        console.error('提交失败:', error)
        ElMessage.error('操作失败，请检查网络连接')
      }
    } else {
      console.error('表单验证失败:', fields)
      ElMessage.error('请检查表单内容')
    }
  })
}

// 暴露方法给父组件
defineExpose({
  submitForm
})
</script>

<style lang="scss" scoped>
.feature-item,
.param-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  
  .delete-btn {
    min-width: 60px;
  }
  
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    
    .el-input,
    .el-select {
      margin-bottom: 8px;
    }
  }
}
</style> 