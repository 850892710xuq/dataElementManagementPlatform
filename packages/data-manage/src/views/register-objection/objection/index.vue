<template>
  <div class="objection-page">
    <!-- 搜索区域 -->
    <div class="search-area">
      <div class="search-form-container">
        <el-button type="primary" @click="showAddObjectionDialog">
          <el-icon><Plus /></el-icon>新增登记异议
        </el-button>
        <el-form :inline="true" :model="searchForm" class="search-form">
          <el-form-item label="数据名称">
            <el-input v-model="searchForm.dataName" placeholder="请输入数据名称" clearable @keyup.enter="handleSearch" />
          </el-form-item>
          <el-form-item label="处理状态">
            <el-select v-model="searchForm.status" placeholder="请选择处理状态" clearable class="wider-select">
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">
              <el-icon><Search /></el-icon>搜索
            </el-button>
            <el-button @click="handleReset">
              <el-icon><Refresh /></el-icon>重置
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!-- 数据表格 -->
    <div class="data-table-card">
      <el-table
        class="data-table"
        v-loading="loading"
        :data="objectionList"
        border
        stripe
        style="width: 100%"
      >
        <el-table-column type="index" label="序号" width="60" align="center" />
        <el-table-column prop="dataName" label="数据名称" min-width="150" show-overflow-tooltip />
        <el-table-column prop="objectorName" label="异议人" width="100" />
        <el-table-column prop="content" label="异议内容" min-width="200" show-overflow-tooltip />
        <el-table-column prop="submitTime" label="提交时间" width="160" />
        <el-table-column prop="status" label="处理状态" width="100">
          <template #default="scope">
            <el-tag
              :type="getStatusTagType(scope.row.status)"
              size="small"
            >
              {{ getStatusLabel(scope.row.status) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <div class="table-actions">
              <el-button
                link
                type="primary"
                @click="handleView(scope.row)"
                class="action-btn"
              >
                <el-icon><View /></el-icon>查看
              </el-button>
              <el-button
                v-if="scope.row.status === 'pending' || scope.row.status === 'processing'"
                link
                type="primary"
                @click="handleReply(scope.row)"
                class="action-btn"
              >
                <el-icon><ChatSquare /></el-icon>回复
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="pagination-container">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>

    <!-- 详情对话框 -->
    <el-dialog
      v-model="detailDialogVisible"
      title="异议详情"
      width="650px"
      destroy-on-close
    >
      <el-descriptions title="异议信息" :column="2" border>
        <el-descriptions-item label="数据名称" :span="1">{{ currentDetail.dataName }}</el-descriptions-item>
        <el-descriptions-item label="异议人" :span="1">{{ currentDetail.objectorName }}</el-descriptions-item>
        <el-descriptions-item label="联系方式" :span="1">{{ currentDetail.objectorContact || '无' }}</el-descriptions-item>
        <el-descriptions-item label="提交时间" :span="1">{{ currentDetail.submitTime }}</el-descriptions-item>
        <el-descriptions-item label="处理状态" :span="2">
          <el-tag :type="getStatusTagType(currentDetail.status)">
            {{ getStatusLabel(currentDetail.status) }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="异议内容" :span="2">
          <div class="content-text">{{ currentDetail.content }}</div>
        </el-descriptions-item>
      </el-descriptions>

      <div v-if="currentDetail.reply" class="reply-info">
        <el-descriptions title="回复信息" :column="2" border>
          <el-descriptions-item label="处理人" :span="1">{{ currentDetail.handler || '无' }}</el-descriptions-item>
          <el-descriptions-item label="回复时间" :span="1">{{ currentDetail.replyTime || '无' }}</el-descriptions-item>
          <el-descriptions-item label="回复内容" :span="2">
            <div class="content-text">{{ currentDetail.reply }}</div>
          </el-descriptions-item>
        </el-descriptions>
      </div>
      
      <template #footer>
        <el-button @click="detailDialogVisible = false">关闭</el-button>
        <el-button 
          v-if="currentDetail.status === 'pending' || currentDetail.status === 'processing'" 
          type="primary" 
          @click="handleReply(currentDetail)"
        >
          回复
        </el-button>
      </template>
    </el-dialog>

    <!-- 回复对话框 -->
    <el-dialog
      v-model="replyDialogVisible"
      title="异议回复"
      width="650px"
      destroy-on-close
    >
      <el-form 
        ref="replyFormRef" 
        :model="replyForm" 
        :rules="replyRules" 
        label-width="100px"
      >
        <el-form-item label="数据名称">
          <span>{{ currentDetail.dataName }}</span>
        </el-form-item>
        <el-form-item label="异议人">
          <span>{{ currentDetail.objectorName }}</span>
        </el-form-item>
        <el-form-item label="异议内容">
          <el-input type="textarea" :rows="3" disabled v-model="currentDetail.content" />
        </el-form-item>
        <el-form-item label="回复内容" prop="reply">
          <el-input type="textarea" :rows="5" v-model="replyForm.reply" placeholder="请输入回复内容" />
        </el-form-item>
        <el-form-item label="处理结果" prop="status">
          <el-radio-group v-model="replyForm.status">
            <el-radio :label="ObjectionStatus.RESOLVED">解决</el-radio>
            <el-radio :label="ObjectionStatus.REJECTED">驳回</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      
      <template #footer>
        <el-button @click="replyDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitReply">提交</el-button>
      </template>
    </el-dialog>

    <!-- 新增登记异议对话框 -->
    <el-dialog
      v-model="addObjectionDialogVisible"
      title="新增登记异议"
      width="650px"
      destroy-on-close
    >
      <el-form 
        ref="addFormRef" 
        :model="addForm" 
        :rules="addRules" 
        label-width="100px"
      >
        <el-form-item label="数据名称" prop="publicationId">
          <el-select 
            v-model="addForm.publicationId"
            filterable
            placeholder="请选择数据资源"
            style="width: 100%"
            @change="handlePublicationChange"
          >
            <el-option
              v-for="item in publicationOptions"
              :key="item.id"
              :label="item.dataName"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="异议人" prop="objectorName">
          <el-input v-model="addForm.objectorName" placeholder="请输入异议人姓名" />
        </el-form-item>
        <el-form-item label="联系方式" prop="objectorContact">
          <el-input v-model="addForm.objectorContact" placeholder="请输入联系方式" />
        </el-form-item>
        <el-form-item label="异议内容" prop="content">
          <el-input 
            type="textarea" 
            :rows="5" 
            v-model="addForm.content" 
            placeholder="请详细描述您的异议内容..." 
          />
        </el-form-item>
      </el-form>
      
      <template #footer>
        <el-button @click="addObjectionDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitAddObjection">提交</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage, FormInstance } from 'element-plus'
import { 
  getObjectionList, 
  getObjectionDetail,
  replyObjection,
  getObjectionStatusOptions,
  getPublicationList,
  ObjectionStatus,
  type ObjectionItem,
  type PublicationItem
} from '@/api/register-objection'
import { Plus, Search, Refresh, View, ChatSquare } from '@element-plus/icons-vue'

const route = useRoute()

// 搜索表单
const searchForm = reactive({
  dataName: '',
  status: '',
  publicationId: ''
})

// 表格数据
const objectionList = ref<ObjectionItem[]>([])
const loading = ref(false)
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// 详情对话框
const detailDialogVisible = ref(false)
const currentDetail = ref<any>({})

// 回复对话框
const replyDialogVisible = ref(false)
const replyFormRef = ref<FormInstance>()
const replyForm = reactive({
  id: '',
  reply: '',
  status: ObjectionStatus.RESOLVED
})

// 表单验证规则
const replyRules = {
  reply: [
    { required: true, message: '请输入回复内容', trigger: 'blur' },
    { min: 5, message: '回复内容不能少于5个字符', trigger: 'blur' }
  ],
  status: [
    { required: true, message: '请选择处理结果', trigger: 'change' }
  ]
}

// 新增登记异议
const addObjectionDialogVisible = ref(false)
const addFormRef = ref<FormInstance>()
const addForm = reactive({
  publicationId: '',
  dataName: '',
  objectorName: '',
  objectorContact: '',
  content: ''
})

// 新增表单验证规则
const addRules = {
  publicationId: [
    { required: true, message: '请选择数据资源', trigger: 'change' }
  ],
  objectorName: [
    { required: true, message: '请输入异议人姓名', trigger: 'blur' },
    { min: 2, max: 20, message: '长度应为2-20个字符', trigger: 'blur' }
  ],
  objectorContact: [
    { required: true, message: '请输入联系方式', trigger: 'blur' }
  ],
  content: [
    { required: true, message: '请输入异议内容', trigger: 'blur' },
    { min: 10, message: '异议内容不能少于10个字符', trigger: 'blur' }
  ]
}

// 公示数据选项
const publicationOptions = ref<PublicationItem[]>([])

// 选项数据
const statusOptions = ref(getObjectionStatusOptions())

// 获取状态标签
const getStatusLabel = (status: ObjectionStatus) => {
  const option = statusOptions.value.find(item => item.value === status)
  return option ? option.label : status
}

// 获取状态标签类型
const getStatusTagType = (status: ObjectionStatus) => {
  switch (status) {
    case ObjectionStatus.PENDING:
      return 'warning'
    case ObjectionStatus.PROCESSING:
      return 'info'
    case ObjectionStatus.RESOLVED:
      return 'success'
    case ObjectionStatus.REJECTED:
      return 'danger'
    default:
      return 'info'
  }
}

// 获取列表数据
const fetchList = async () => {
  loading.value = true
  try {
    const params = {
      page: currentPage.value,
      pageSize: pageSize.value,
      dataName: searchForm.dataName || undefined,
      status: searchForm.status || undefined,
      publicationId: searchForm.publicationId || undefined
    }
    const res = await getObjectionList(params)
    if (res.code === 200) {
      objectionList.value = res.data.list
      total.value = res.data.total
    }
  } catch (error) {
    console.error('获取异议列表失败', error)
  } finally {
    loading.value = false
  }
}

// 获取公示数据列表
const fetchPublicationList = async () => {
  try {
    const res = await getPublicationList({
      page: 1,
      pageSize: 100,
      status: 'ongoing'  // 只获取正在公示中的数据
    })
    if (res.code === 200) {
      publicationOptions.value = res.data.list
    }
  } catch (error) {
    console.error('获取公示列表失败', error)
  }
}

// 搜索
const handleSearch = () => {
  currentPage.value = 1
  fetchList()
}

// 重置
const handleReset = () => {
  Object.keys(searchForm).forEach(key => {
    if (key !== 'publicationId') {
      searchForm[key] = ''
    }
  })
  currentPage.value = 1
  fetchList()
}

// 分页大小变化
const handleSizeChange = (val: number) => {
  pageSize.value = val
  fetchList()
}

// 页码变化
const handleCurrentChange = (val: number) => {
  currentPage.value = val
  fetchList()
}

// 查看详情
const handleView = async (row: ObjectionItem) => {
  try {
    const res = await getObjectionDetail(row.id)
    if (res.code === 200) {
      currentDetail.value = res.data
      detailDialogVisible.value = true
    }
  } catch (error) {
    console.error('获取异议详情失败', error)
  }
}

// 处理回复
const handleReply = async (row: ObjectionItem) => {
  try {
    const res = await getObjectionDetail(row.id)
    if (res.code === 200) {
      currentDetail.value = res.data
      replyForm.id = row.id
      replyForm.reply = row.reply || ''
      replyForm.status = row.status === ObjectionStatus.PROCESSING ? 
        ObjectionStatus.RESOLVED : 
        ObjectionStatus.RESOLVED
      
      detailDialogVisible.value = false
      replyDialogVisible.value = true
    }
  } catch (error) {
    console.error('获取异议详情失败', error)
  }
}

// 提交回复
const submitReply = async () => {
  if (!replyFormRef.value) return
  
  await replyFormRef.value.validate(async (valid) => {
    if (valid) {
      try {
        const res = await replyObjection({
          id: replyForm.id,
          reply: replyForm.reply,
          status: replyForm.status
        })
        
        if (res.code === 200) {
          ElMessage.success('回复成功')
          replyDialogVisible.value = false
          fetchList()
        }
      } catch (error) {
        console.error('回复异议失败', error)
      }
    }
  })
}

// 显示新增登记异议对话框
const showAddObjectionDialog = () => {
  // 重置表单
  if (addFormRef.value) {
    addFormRef.value.resetFields()
  } else {
    Object.keys(addForm).forEach(key => {
      addForm[key] = ''
    })
  }
  
  // 获取公示数据
  fetchPublicationList()
  
  // 显示对话框
  addObjectionDialogVisible.value = true
}

// 公示数据变更
const handlePublicationChange = (id: string) => {
  const publication = publicationOptions.value.find(item => item.id === id)
  if (publication) {
    addForm.dataName = publication.dataName
  }
}

// 提交新增登记异议
const submitAddObjection = async () => {
  if (!addFormRef.value) return
  
  await addFormRef.value.validate(async (valid) => {
    if (valid) {
      try {
        // 模拟API请求提交数据
        setTimeout(() => {
          ElMessage.success('登记异议提交成功')
          addObjectionDialogVisible.value = false
          fetchList()
        }, 500)
      } catch (error) {
        console.error('提交登记异议失败', error)
      }
    }
  })
}

// 监听路由参数变化
watch(() => route.query, (query) => {
  if (query.publicationId) {
    searchForm.publicationId = query.publicationId as string
    fetchList()
  }
}, { immediate: true })

// 初始化
onMounted(() => {
  // 从路由参数获取公示ID
  if (route.query.publicationId) {
    searchForm.publicationId = route.query.publicationId as string
  }
  fetchList()
})
</script>

<style scoped lang="scss">
.objection-page {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  
  .search-area {
    margin-bottom: 20px;
    padding: 15px;
    background-color: #fff;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    
    .search-form-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      
      .search-form {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;
        
        :deep(.el-form-item) {
          margin-bottom: 0;
        }
        
        .wider-select {
          width: 160px;
        }
      }
    }
  }
  
  .data-table-card {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .data-table {
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    
    :deep(.el-table) {
      width: 100% !important;
    }
    
    :deep(.el-table__body-wrapper) {
      overflow-x: hidden;
    }
    
    :deep(.el-table__row) {
      .table-actions {
        display: flex;
        flex-wrap: nowrap !important;
        justify-content: flex-start !important;
        align-items: center;
        width: 100%;
        
        .el-button {
          margin: 0 4px !important;
          padding: 4px 2px !important;
          font-size: 14px !important;
          
          &.action-btn {
            min-width: 70px !important;
            margin-right: 6px !important;
          }
          
          .el-icon {
            margin-right: 2px !important;
            font-size: 14px !important;
          }
        }
      }
    }
  }
  
  .pagination-container {
    margin-top: 20px;
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    box-sizing: border-box;
    
    .el-pagination {
      padding: 0;
      margin: 0;
    }
  }
  
  .reply-info {
    margin-top: 20px;
  }
  
  .table-actions {
    display: flex;
    flex-wrap: nowrap !important;
    align-items: center;
    white-space: nowrap !important;
    width: 100%;
    
    .el-button {
      padding: 4px 6px !important;
      margin-right: 8px !important;
      font-size: 14px !important;
      
      .el-icon {
        margin-right: 2px !important;
        font-size: 14px !important;
      }
      
      &:last-child {
        margin-right: 0 !important;
      }
    }
    
    .action-btn {
      min-width: 70px !important;
    }
  }
}
</style> 