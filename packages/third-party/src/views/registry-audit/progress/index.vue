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
        
        <el-form-item label="提交时间">
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
        
        <el-form-item label="审核状态">
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
      <el-table v-loading="loading" :data="progressList" stripe border>
        <el-table-column type="index" label="序号" width="60" align="center" />
        
        <el-table-column prop="name" label="数据资源名称" min-width="180" show-overflow-tooltip>
          <template #default="{ row }">
            {{ row.name }}
          </template>
        </el-table-column>
        
        <el-table-column prop="provider" label="数据提供方" min-width="150" show-overflow-tooltip />
        
        <el-table-column prop="industry" label="所属行业" width="100" align="center" />
        
        <el-table-column prop="dataType" label="数据类型" width="100" align="center" />
        
        <el-table-column prop="submitTime" label="提交时间" width="170" align="center" show-overflow-tooltip />
        
        <el-table-column label="进度状态" width="110" align="center">
          <template #default="{ row }">
            <el-tag v-if="row.status === 1" type="warning">{{ row.progressStatus }}</el-tag>
            <el-tag v-else-if="row.status === 2" type="success">{{ row.progressStatus }}</el-tag>
            <el-tag v-else-if="row.status === 3" type="danger">{{ row.progressStatus }}</el-tag>
          </template>
        </el-table-column>
        
        <el-table-column label="进度" width="180" align="center">
          <template #default="{ row }">
            <el-progress 
              :percentage="row.progressPercent" 
              :status="row.status === 3 ? 'exception' : row.status === 2 ? 'success' : ''"
              :stroke-width="15"
              :format="percentFormat"
            />
          </template>
        </el-table-column>
        
        <el-table-column label="操作" width="100" fixed="right">
          <template #default="{ row }">
            <div class="table-actions">
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
    
    <!-- 空数据提示 -->
    <div v-if="!loading && progressList.length === 0" class="empty-data">
      <el-empty description="暂无登记数据" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Refresh, View } from '@element-plus/icons-vue'
import { getRegistryProgressList } from '@/api/registry-audit'
import { ElMessage } from 'element-plus'

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
const progressList = ref<any[]>([])
const total = ref(0)
const loading = ref(false)

// 格式化进度百分比显示
const percentFormat = (percentage: number) => {
  return percentage === 100 ? '完成' : `${percentage}%`
}

// 获取登记进度列表
const getList = async () => {
  loading.value = true
  try {
    const res: any = await getRegistryProgressList(queryParams)
    if (res.code === 200) {
      progressList.value = res.data.list
      total.value = res.data.total
    } else {
      ElMessage.error(res.message || '获取登记进度列表失败')
    }
  } catch (error) {
    console.error('获取登记进度列表失败', error)
    ElMessage.error('获取登记进度列表失败')
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

// 查看详情
const handleDetail = (row: any) => {
  router.push({ name: 'RegistryProgressDetail', params: { id: row.id } })
}

// 页面初始化
onMounted(() => {
  getList()
})
</script>

<style lang="scss" scoped>
.app-container {
  .page-header {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    
    .page-title {
      margin: 0 0 10px 0;
      font-size: 20px;
      color: #303133;
    }
    
    .page-description {
      color: #606266;
      font-size: 14px;
    }
  }
  
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
      justify-content: center;
      width: 100%;

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
  
  .empty-data {
    background-color: #fff;
    padding: 40px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-top: 20px;
  }
}
</style> 