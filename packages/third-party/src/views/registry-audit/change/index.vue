<template>
  <div class="app-container">
    <!-- 搜索区域 -->
    <div class="search-form-container">
      <el-form :model="queryParams" ref="queryForm" :inline="true" class="search-form">
        <el-form-item label="数据资源名称">
          <el-input v-model="queryParams.name" placeholder="请输入数据资源名称" clearable />
        </el-form-item>
        
        <el-form-item label="数据提供方">
          <el-input v-model="queryParams.provider" placeholder="请输入数据提供方" clearable />
        </el-form-item>
        
        <el-form-item label="变更申请时间">
          <el-date-picker
            v-model="queryParams.timeRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
        
        <el-form-item label="变更审核状态">
          <el-select v-model="queryParams.status" placeholder="全部" clearable style="width: 120px;">
            <el-option label="待审核" :value="1" />
            <el-option label="已通过" :value="2" />
            <el-option label="已拒绝" :value="3" />
          </el-select>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="handleQuery">
            <el-icon><Search /></el-icon>
            <span>查询</span>
          </el-button>
          <el-button @click="resetQuery">
            <el-icon><Refresh /></el-icon>
            <span>重置</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    
    <!-- 表格区域 -->
    <div class="card-container">
      <el-table v-loading="loading" :data="changeList" stripe border>
        <el-table-column type="index" label="序号" width="60" align="center" />
        
        <el-table-column prop="name" label="数据资源名称" min-width="180" show-overflow-tooltip>
          <template #default="{ row }">
            {{ row.name }}
          </template>
        </el-table-column>
        
        <el-table-column prop="provider" label="数据提供方" min-width="150" show-overflow-tooltip />
        
        <el-table-column prop="industry" label="所属行业" width="100" align="center" />
        
        <el-table-column prop="changeType" label="变更类型" width="120" align="center" />
        
        <el-table-column prop="submitTime" label="变更申请时间" width="150" align="center" show-overflow-tooltip />
        
        <el-table-column prop="status" label="变更审核状态" width="120" align="center">
          <template #default="{ row }">
            <el-tag v-if="row.status === 1" type="warning">待审核</el-tag>
            <el-tag v-else-if="row.status === 2" type="success">已通过</el-tag>
            <el-tag v-else-if="row.status === 3" type="danger">已拒绝</el-tag>
          </template>
        </el-table-column>
        
        <el-table-column label="操作" width="180" fixed="right">
          <template #default="{ row }">
            <div class="table-actions">
              <div class="first-action">
                <el-button 
                  type="primary" 
                  link 
                  class="operation-button" 
                  @click="handleDetail(row)"
                >
                  <el-icon><View /></el-icon>
                  <span>详情</span>
                </el-button>
              </div>
              <div class="second-action">
                <el-button 
                  v-if="row.status === 1" 
                  type="primary" 
                  link 
                  class="operation-button"
                  @click="handleAudit(row)"
                >
                  <el-icon><Edit /></el-icon>
                  <span>审核</span>
                </el-button>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
      
      <!-- 分页 -->
      <div class="pagination-container">
        <el-pagination
          :current-page="queryParams.pageNum"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="queryParams.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    
    <!-- 审核弹窗 -->
    <el-dialog title="变更登记审核" v-model="auditVisible" width="500px" append-to-body>
      <el-form ref="auditFormRef" :model="auditForm" label-width="100px">
        <el-form-item label="数据名称">
          <span>{{ (currentRow as any).name }}</span>
        </el-form-item>
        <el-form-item label="数据提供方">
          <span>{{ (currentRow as any).provider }}</span>
        </el-form-item>
        <el-form-item label="变更类型">
          <span>{{ (currentRow as any).changeType }}</span>
        </el-form-item>
        <el-form-item label="审核结果" prop="result">
          <el-radio-group v-model="auditForm.result">
            <el-radio label="pass">通过</el-radio>
            <el-radio label="reject">不通过</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="审核意见" prop="remarks" :rules="[{ required: true, message: '请输入审核意见', trigger: 'blur' }]">
          <el-input 
            v-model="auditForm.remarks" 
            type="textarea" 
            placeholder="请输入审核意见" 
            :rows="4"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="auditVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitAudit">确 认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Refresh, View, Edit } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getChangeRegistryList, auditChangeRegistry } from '@/api/registry-change'

const router = useRouter()

// 查询参数
const queryParams = reactive({
  name: '',
  provider: '',
  timeRange: [] as string[],
  status: null as number | null,
  pageNum: 1,
  pageSize: 10
})

// 表格数据
const changeList = ref<any[]>([])
const total = ref(0)
const loading = ref(false)

// 审核相关
const auditVisible = ref(false)
const currentRow = ref({})
const auditForm = reactive({
  result: 'pass',
  remarks: ''
})

// 获取变更登记审核列表
const getList = async () => {
  loading.value = true
  try {
    // 调用API获取变更登记列表数据
    const res: any = await getChangeRegistryList(queryParams)
    changeList.value = res.data.list
    total.value = res.data.total
  } catch (error) {
    console.error('获取变更登记审核列表失败', error)
    ElMessage.error('获取数据失败，请稍后重试')
  } finally {
    loading.value = false
  }
}

// 查询按钮
const handleQuery = () => {
  queryParams.pageNum = 1
  getList()
}

// 重置按钮
const resetQuery = () => {
  queryParams.name = ''
  queryParams.provider = ''
  queryParams.timeRange = []
  queryParams.status = null
  queryParams.pageNum = 1
  getList()
}

// 分页相关
const handleSizeChange = (size: number) => {
  queryParams.pageSize = size
  getList()
}

const handleCurrentChange = (current: number) => {
  queryParams.pageNum = current
  getList()
}

// 审核操作
const handleAudit = (row: any) => {
  currentRow.value = row
  auditForm.result = 'pass'
  auditForm.remarks = ''
  auditVisible.value = true
}

// 查看详情
const handleDetail = (row: any) => {
  router.push({ name: 'ChangeRegistryDetail', params: { id: row.id } })
}

// 提交审核
const submitAudit = async () => {
  try {
    const params = {
      result: auditForm.result,
      remarks: auditForm.remarks
    }
    
    // 调用API提交审核结果
    await auditChangeRegistry((currentRow.value as any).id, params)
    
    ElMessage.success('变更登记审核操作成功')
    auditVisible.value = false
    getList()
  } catch (error) {
    console.error('审核操作失败', error)
    ElMessage.error('审核操作失败')
  }
}

// 页面初始化
onMounted(() => {
  getList()
})
</script>

<style lang="scss" scoped>
.app-container {
  .search-form-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .search-form {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: flex-end;

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
    }
  }

  .card-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    :deep(.el-table) {
      --el-table-header-bg-color: #f5f7fa;
      --el-table-border-color: #ebeef5;
      --el-table-row-hover-bg-color: #f5f7fa;
      
      th {
        font-weight: bold;
      }
      
      .el-tag {
        padding: 0 8px;
      }
    }

    .table-actions {
      display: flex;
      width: 100%;
      
      .first-action {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        padding-right: 4px;
      }
      
      .second-action {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        padding-left: 4px;
      }

      .operation-button {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 14px;
        padding: 0;
        
        .el-icon {
          font-size: 14px;
        }
      }
    }

    .pagination-container {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
    }
  }

  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
}
</style> 