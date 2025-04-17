<template>
  <!-- 搜索表单 -->
  <el-form :model="searchForm" class="search-form" inline>
    <!-- 新增按钮 -->
    <div class="left-buttons">
      <el-button type="success" @click="handleAdd">
        <el-icon><Plus /></el-icon>
        <span>新增</span>
      </el-button>
    </div>

    <!-- 搜索区域 -->
    <div class="right-area">
      <el-form-item label="数据资源名称">
        <el-input v-model="searchForm.name" placeholder="请输入数据资源名称" clearable />
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
      >
        <el-table-column prop="name" label="数据资源名称" min-width="180" show-overflow-tooltip />
        <el-table-column prop="type" label="类型" width="120">
          <template #default="{ row }">
            <el-tag :type="getTypeTagType(row.type)">{{ row.type }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="industry" label="所属行业" width="150" show-overflow-tooltip />
        <el-table-column prop="createTime" label="创建时间" width="160" show-overflow-tooltip />
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
                @click="handleEdit(row)"
              >
                <el-icon><Edit /></el-icon>
                <span>编辑</span>
              </el-button>
              <el-button
                link
                type="danger"
                class="operation-button"
                @click="handleDelete(row)"
              >
                <el-icon><Delete /></el-icon>
                <span>删除</span>
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
    title="数据资源详情"
    width="60%"
    :close-on-click-modal="false"
    destroy-on-close
  >
    <div v-loading="detailLoading" class="detail-content">
      <!-- 基本信息 -->
      <div class="detail-section">
        <div class="section-title">基本信息</div>
        <el-descriptions :column="2" border>
          <el-descriptions-item label="数据资源名称">
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
          <div v-if="currentDetail.hasMore" class="download-link">
            <el-button type="primary" link @click="handleDownloadSample">
              <el-icon><Download /></el-icon>
              <span>下载完整样例</span>
            </el-button>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="detailDialogVisible = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>

  <!-- 新增/编辑弹窗 -->
  <el-dialog
    v-model="formDialogVisible"
    :title="formType === 'add' ? '新增数据资源' : '编辑数据资源'"
    width="60%"
    :close-on-click-modal="false"
    destroy-on-close
  >
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="120px"
      class="data-form"
    >
      <el-form-item label="数据资源名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入数据资源名称" />
      </el-form-item>
      <el-form-item label="数据类型" prop="type">
        <el-select v-model="formData.type" placeholder="请选择数据类型" style="width: 100%">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="所属行业" prop="industry">
        <el-select v-model="formData.industry" placeholder="请选择所属行业" style="width: 100%">
          <el-option
            v-for="item in industryOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input
          v-model="formData.description"
          type="textarea"
          :rows="3"
          placeholder="请输入数据资源描述"
        />
      </el-form-item>

      <!-- 数据库配置 -->
      <template v-if="formData.type === '数据库'">
        <el-form-item label="数据库类型" prop="dbType">
          <el-select v-model="formData.dbType" placeholder="请选择数据库类型" style="width: 100%">
            <el-option
              v-for="item in dbTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="服务地址" prop="host">
          <el-input v-model="formData.host" placeholder="请输入服务地址" />
        </el-form-item>
        <el-form-item label="端口" prop="port">
          <el-input v-model="formData.port" placeholder="请输入端口号" />
        </el-form-item>
        <el-form-item label="数据库名称" prop="dbName">
          <el-input v-model="formData.dbName" placeholder="请输入数据库名称" />
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="formData.password"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>
        <el-form-item label="查询语句" prop="query">
          <el-input
            v-model="formData.query"
            type="textarea"
            :rows="3"
            placeholder="请输入查询语句"
          />
        </el-form-item>
      </template>

      <!-- CSV配置 -->
      <template v-if="formData.type === 'CSV'">
        <el-form-item label="CSV文件" prop="file">
          <el-upload
            class="upload-demo"
            drag
            action="/api/upload"
            :on-success="handleUploadSuccess"
            :before-upload="beforeUpload"
            :limit="1"
            accept=".csv"
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                只能上传csv文件，且不超过10MB
              </div>
            </template>
          </el-upload>
        </el-form-item>
      </template>

      <!-- S3对象存储配置 -->
      <template v-if="formData.type === 'S3对象存储'">
        <el-form-item label="对象存储类型" prop="s3Type">
          <el-select v-model="formData.s3Type" placeholder="请选择对象存储类型" style="width: 100%">
            <el-option
              v-for="item in s3TypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="服务端点" prop="endpoint">
          <el-input v-model="formData.endpoint" placeholder="请输入服务端点" />
        </el-form-item>
        <el-form-item label="区域" prop="region">
          <el-input v-model="formData.region" placeholder="请输入区域" />
        </el-form-item>
        <el-form-item label="Access Key" prop="accessKey">
          <el-input v-model="formData.accessKey" placeholder="请输入Access Key" />
        </el-form-item>
        <el-form-item label="Secret Key" prop="secretKey">
          <el-input
            v-model="formData.secretKey"
            type="password"
            placeholder="请输入Secret Key"
            show-password
          />
        </el-form-item>
        <el-form-item label="Bucket" prop="bucket">
          <el-input v-model="formData.bucket" placeholder="请输入Bucket" />
        </el-form-item>
        <el-form-item label="Path" prop="path">
          <el-input v-model="formData.path" placeholder="请输入Path" />
        </el-form-item>
      </template>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="formDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import {
  Search,
  Refresh,
  Plus,
  View,
  Edit,
  Delete,
  Download,
  UploadFilled
} from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance, UploadProps } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { useLocale } from 'element-plus'
import { getDataList, getDataDetail, addData, updateData, deleteData } from '@/api/explore-data'

// 设置Element Plus的语言为中文 - 不要直接修改计算属性
// const { locale } = useLocale()
// locale.value = zhCn  // 这会导致警告：computed value is readonly

// 可以用app.use(ElementPlus, { locale: zhCn })方式在main.ts中全局设置

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
  port?: number
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
  hasMore?: boolean
}

// 表格数据
const loading = ref(false)
const tableData = ref<ExploreDataItem[]>([])

// 分页相关
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// 详情弹窗相关
const detailDialogVisible = ref(false)
const detailLoading = ref(false)
const currentDetail = ref<ExploreDataItem>({} as ExploreDataItem)

// 表单弹窗相关
const formDialogVisible = ref(false)
const formType = ref('add')
const formRef = ref<FormInstance>()
const formData = reactive({
  name: '',
  type: '',
  industry: '',
  description: '',
  // 数据库相关
  dbType: '',
  host: '',
  port: '3306',
  dbName: '',
  username: '',
  password: '',
  query: '',
  // CSV相关
  file: null,
  // S3相关
  s3Type: '',
  endpoint: '',
  region: '',
  accessKey: '',
  secretKey: '',
  bucket: '',
  path: ''
})

// 表单校验规则
const formRules = {
  name: [{ required: true, message: '请输入数据资源名称', trigger: 'blur' }],
  type: [{ required: true, message: '请选择数据类型', trigger: 'change' }],
  industry: [{ required: true, message: '请选择所属行业', trigger: 'change' }]
}

// 选项数据
const typeOptions = [
  { label: '数据库', value: '数据库' },
  { label: 'CSV', value: 'CSV' },
  { label: 'S3对象存储', value: 'S3对象存储' }
]

const industryOptions = [
  { label: '制造业', value: '制造业' },
  { label: '农业', value: '农业' },
  { label: '建筑业', value: '建筑业' },
  { label: '金融业', value: '金融业' },
  { label: '教育', value: '教育' },
  { label: '卫生和社会工作', value: '卫生和社会工作' }
]

const dbTypeOptions = [
  { label: 'MySQL', value: 'MySQL' },
  { label: 'Oracle', value: 'Oracle' },
  { label: 'PostgreSQL', value: 'PostgreSQL' },
  { label: 'SQL Server', value: 'SQL Server' }
]

const s3TypeOptions = [
  { label: 'AWS S3', value: 'AWS S3' },
  { label: 'MinIO', value: 'MinIO' },
  { label: '阿里云OSS', value: '阿里云OSS' }
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
    const res = await getDataList(params)
    if (res.code === 200) {
      tableData.value = res.data.list
      total.value = res.data.total
    }
  } catch (error) {
    console.error('获取数据列表失败', error)
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

// 新增数据
const handleAdd = () => {
  formType.value = 'add'
  formDialogVisible.value = true
}

// 查看详情
const handleViewDetail = async (row: any) => {
  detailDialogVisible.value = true
  detailLoading.value = true
  try {
    const res = await getDataDetail(row.id)
    if (res.code === 200) {
      currentDetail.value = res.data
    }
  } catch (error) {
    console.error('获取详情失败', error)
  } finally {
    detailLoading.value = false
  }
}

// 编辑数据
const handleEdit = (row: any) => {
  formType.value = 'edit'
  Object.assign(formData, row)
  formDialogVisible.value = true
}

// 删除数据
const handleDelete = (row: any) => {
  ElMessageBox.confirm(
    '确认删除该数据资源吗？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(async () => {
    try {
      const res = await deleteData(row.id)
      if (res.code === 200) {
        ElMessage.success('删除成功')
        fetchTableData()
      }
    } catch (error) {
      console.error('删除失败', error)
    }
  })
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

// 文件上传相关
const beforeUpload: UploadProps['beforeUpload'] = (file) => {
  const isCSV = file.type === 'text/csv'
  const isLt10M = file.size / 1024 / 1024 < 10

  if (!isCSV) {
    ElMessage.error('只能上传CSV文件!')
    return false
  }
  if (!isLt10M) {
    ElMessage.error('文件大小不能超过10MB!')
    return false
  }
  return true
}

const handleUploadSuccess = (response: any) => {
  formData.file = response.data
  ElMessage.success('上传成功')
}

// 提交表单
const handleSubmit = async () => {
  if (!formRef.value) return
  await formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        const submitData = { ...formData }
        const res = formType.value === 'add' 
          ? await addData(submitData)
          : await updateData(submitData.id, submitData)
        
        if (res.code === 200) {
          ElMessage.success(formType.value === 'add' ? '新增成功' : '编辑成功')
          formDialogVisible.value = false
          fetchTableData()
        }
      } catch (error) {
        console.error(formType.value === 'add' ? '新增失败' : '编辑失败', error)
      }
    }
  })
}

// 下载样例数据
const handleDownloadSample = () => {
  // TODO: 实现下载功能
  ElMessage.success('开始下载样例数据')
}

// 分页大小选项
const pageSizeOptions = [
  { value: 10, label: '10条/页' },
  { value: 20, label: '20条/页' },
  { value: 50, label: '50条/页' },
  { value: 100, label: '100条/页' }
]
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

      .download-link {
        margin-top: 10px;
        text-align: right;
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

.data-form {
  :deep(.el-form-item__label) {
    font-weight: bold;
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