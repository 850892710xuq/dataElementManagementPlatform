<template>
  <div class="permission-monitor">
    <!-- 搜索表单 -->
    <div class="search-form-container">
      <el-form :model="searchForm" class="search-form" inline>
        <el-form-item label="用户名">
          <el-input v-model="searchForm.username" placeholder="请输入用户名" clearable />
        </el-form-item>
        <el-form-item label="操作人">
          <el-input v-model="searchForm.operator" placeholder="请输入操作人" clearable />
        </el-form-item>
        <el-form-item label="变更时间">
          <el-date-picker
            v-model="searchForm.timeRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="YYYY-MM-DD"
          />
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
          <el-table-column prop="username" label="用户名" min-width="120" show-overflow-tooltip />
          <el-table-column prop="changeTime" label="变更时间" min-width="180" show-overflow-tooltip />
          <el-table-column prop="beforePermission" label="变更前权限" min-width="200" show-overflow-tooltip>
            <template #default="{ row }">
              <div class="permission-tags">
                <el-tag v-for="(permission, index) in row.beforePermission" :key="index" class="permission-tag" type="info">
                  {{ permission }}
                </el-tag>
                <span v-if="!row.beforePermission || row.beforePermission.length === 0" class="empty-tag">无权限</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="afterPermission" label="变更后权限" min-width="200" show-overflow-tooltip>
            <template #default="{ row }">
              <div class="permission-tags">
                <el-tag v-for="(permission, index) in row.afterPermission" :key="index" class="permission-tag" type="success">
                  {{ permission }}
                </el-tag>
                <span v-if="!row.afterPermission || row.afterPermission.length === 0" class="empty-tag">无权限</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="reason" label="变更原因" min-width="200" show-overflow-tooltip />
          <el-table-column prop="operator" label="操作人" min-width="120" show-overflow-tooltip />
          <el-table-column label="操作" width="120" fixed="right">
            <template #default="{ row }">
              <div class="table-actions">
                <el-button link type="primary" class="operation-button" @click="handleViewDetail(row)">
                  <el-icon><View /></el-icon>
                  <span>详情</span>
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
      title="权限变更详情"
      width="60%"
      :close-on-click-modal="false"
      destroy-on-close
    >
      <div v-loading="detailLoading" class="detail-content">
        <!-- 基本信息 -->
        <div class="detail-section">
          <div class="section-title">基本信息</div>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="用户名">{{ currentDetail.username }}</el-descriptions-item>
            <el-descriptions-item label="变更时间">{{ currentDetail.changeTime }}</el-descriptions-item>
            <el-descriptions-item label="操作人">{{ currentDetail.operator }}</el-descriptions-item>
            <el-descriptions-item label="变更原因">{{ currentDetail.reason }}</el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 权限变更详情 -->
        <div class="detail-section">
          <div class="section-title">权限变更详情</div>
          <el-descriptions :column="1" border>
            <el-descriptions-item label="变更前权限">
              <div class="permission-list">
                <el-tag v-for="(permission, index) in currentDetail.beforePermission" :key="index" 
                  class="permission-tag" type="info">
                  {{ permission }}
                </el-tag>
                <span v-if="!currentDetail.beforePermission || currentDetail.beforePermission.length === 0" class="empty-tag">无权限</span>
              </div>
            </el-descriptions-item>
            <el-descriptions-item label="变更后权限">
              <div class="permission-list">
                <el-tag v-for="(permission, index) in currentDetail.afterPermission" :key="index" 
                  class="permission-tag" type="success">
                  {{ permission }}
                </el-tag>
                <span v-if="!currentDetail.afterPermission || currentDetail.afterPermission.length === 0" class="empty-tag">无权限</span>
              </div>
            </el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 变更说明 -->
        <div class="detail-section">
          <div class="section-title">变更说明</div>
          <div class="remark-content">
            {{ currentDetail.remark || '暂无说明' }}
          </div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="detailDialogVisible = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { 
  View, 
  Search, 
  ArrowLeft, 
  ArrowRight,
  Refresh 
} from '@element-plus/icons-vue'

// 定义权限变更记录接口
interface PermissionChangeLog {
  id: number;
  username: string;
  changeTime: string;
  beforePermission: string[];
  afterPermission: string[];
  reason: string;
  operator: string;
  remark?: string;
}

// 搜索表单数据
const searchForm = reactive({
  username: '',
  operator: '',
  timeRange: [] as string[]
})

// 加载状态
const loading = ref(false)
const detailLoading = ref(false)

// 表格数据
const tableData = ref<PermissionChangeLog[]>([])

// 分页相关
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

// 格式化时间范围
const timeRangeParams = computed(() => {
  if (searchForm.timeRange && searchForm.timeRange.length === 2) {
    return {
      startTime: searchForm.timeRange[0],
      endTime: searchForm.timeRange[1]
    }
  }
  return {}
})

// 模拟获取表格数据
const fetchTableData = async () => {
  loading.value = true
  try {
    // 模拟数据，实际开发中需要替换为真实API调用
    const mockData = {
      list: [
        {
          id: 1,
          username: 'zhangsan',
          changeTime: '2024-03-20 10:00:00',
          beforePermission: ['数据查看', '报表导出'],
          afterPermission: ['数据查看', '报表导出', '数据编辑', '数据审核'],
          reason: '晋升为数据主管',
          operator: 'admin',
          remark: '根据2024年第一季度绩效考核结果，用户晋升为数据主管，增加数据编辑和审核权限'
        },
        {
          id: 2,
          username: 'lisi',
          changeTime: '2024-03-19 15:30:00',
          beforePermission: ['系统管理', '用户管理', '角色管理'],
          afterPermission: ['系统管理', '用户管理'],
          reason: '岗位调整',
          operator: 'system',
          remark: '用户从系统管理员调整为普通管理员，移除角色管理权限'
        },
        {
          id: 3,
          username: 'wangwu',
          changeTime: '2024-03-18 09:15:00',
          beforePermission: [],
          afterPermission: ['数据查看', '报表导出'],
          reason: '新员工入职',
          operator: 'hr_admin',
          remark: '新员工入职，根据岗位要求分配基础数据查看权限'
        },
        {
          id: 4,
          username: 'zhaoliu',
          changeTime: '2024-03-17 14:20:00',
          beforePermission: ['数据查看', '数据编辑', '数据审核'],
          afterPermission: ['数据查看'],
          reason: '权限回收',
          operator: 'security_admin',
          remark: '用户违反数据安全规定，暂时回收编辑和审核权限'
        },
        {
          id: 5,
          username: 'qianqi',
          changeTime: '2024-03-16 11:45:00',
          beforePermission: ['系统管理', '用户管理', '角色管理', '权限分配'],
          afterPermission: ['系统管理', '用户管理', '角色管理', '权限分配', '审计日志'],
          reason: '增加审计权限',
          operator: 'admin',
          remark: '根据安全审计要求，为系统管理员增加审计日志查看权限'
        },
        {
          id: 6,
          username: 'sunba',
          changeTime: '2024-03-15 16:30:00',
          beforePermission: ['数据查看', '报表导出', '数据编辑'],
          afterPermission: [],
          reason: '员工离职',
          operator: 'hr_admin',
          remark: '用户已办理离职手续，系统权限已全部回收'
        },
        {
          id: 7,
          username: 'zhoujiu',
          changeTime: '2024-03-14 13:20:00',
          beforePermission: ['数据查看'],
          afterPermission: ['数据查看', '数据编辑', '数据审核', '报表导出'],
          reason: '临时授权',
          operator: 'admin',
          remark: '因项目需要，临时授予用户完整的数据操作权限，有效期至2024-06-14'
        },
        {
          id: 8,
          username: 'wushi',
          changeTime: '2024-03-13 09:45:00',
          beforePermission: ['系统管理', '用户管理'],
          afterPermission: ['系统管理', '用户管理', '角色管理', '权限分配', '审计日志'],
          reason: '晋升为系统管理员',
          operator: 'admin',
          remark: '用户晋升为系统管理员，授予完整系统管理权限'
        },
        {
          id: 9,
          username: 'zhengshiyi',
          changeTime: '2024-03-12 14:15:00',
          beforePermission: ['数据查看', '数据编辑'],
          afterPermission: ['数据查看'],
          reason: '权限调整',
          operator: 'admin',
          remark: '根据最新数据安全政策，普通用户仅保留数据查看权限'
        },
        {
          id: 10,
          username: "liushi'er",
          changeTime: '2024-03-11 11:30:00',
          beforePermission: [],
          afterPermission: ['数据查看', '报表导出', '数据编辑', '数据审核'],
          reason: '新项目启动',
          operator: 'project_admin',
          remark: '新项目启动，为用户分配项目所需的数据操作权限'
        }
      ],
      total: 10
    }
    
    // 创建数据副本
    let filteredData = [...mockData.list];
    
    // 按用户名搜索过滤
    if (searchForm.username && searchForm.username.trim() !== '') {
      const searchValue = searchForm.username.trim().toLowerCase();
      filteredData = filteredData.filter(item => 
        item.username.toLowerCase().includes(searchValue)
      );
      console.log('按用户名过滤后数据条数:', filteredData.length);
    }
    
    // 按操作人搜索过滤
    if (searchForm.operator && searchForm.operator.trim() !== '') {
      const searchValue = searchForm.operator.trim().toLowerCase();
      filteredData = filteredData.filter(item => 
        item.operator.toLowerCase().includes(searchValue)
      );
      console.log('按操作人过滤后数据条数:', filteredData.length);
    }
    
    // 按时间范围过滤
    if (searchForm.timeRange && searchForm.timeRange.length === 2) {
      const startDate = new Date(searchForm.timeRange[0]);
      const endDate = new Date(searchForm.timeRange[1]);
      // 将结束日期设置为当天的23:59:59
      endDate.setHours(23, 59, 59);
      
      filteredData = filteredData.filter(item => {
        const itemDate = new Date(item.changeTime);
        return itemDate >= startDate && itemDate <= endDate;
      });
      console.log('按时间过滤后数据条数:', filteredData.length);
    }
    
    // 更新表格数据和总数
    tableData.value = filteredData;
    total.value = filteredData.length;
    loading.value = false;
  } catch (error) {
    console.error('获取权限变更记录失败', error)
    ElMessage.error('获取权限变更记录失败')
    loading.value = false
  }
}

// 获取详情数据
const fetchDetailData = async (id: number) => {
  detailLoading.value = true
  try {
    // 模拟API调用
    setTimeout(() => {
      // 查找对应的记录
      const record = tableData.value.find(item => item.id === id)
      if (record) {
        currentDetail.value = {...record}
      }
      detailLoading.value = false
    }, 500)
  } catch (error) {
    console.error('获取权限变更详情失败', error)
    ElMessage.error('获取权限变更详情失败')
    detailLoading.value = false
  }
}

// 初始化加载数据
onMounted(() => {
  fetchTableData()
})

// 查询方法
const handleSearch = () => {
  currentPage.value = 1 // 重置到第一页
  fetchTableData()
}

// 重置查询表单
const handleReset = () => {
  searchForm.username = ''
  searchForm.operator = ''
  searchForm.timeRange = []
  currentPage.value = 1 // 重置到第一页
  fetchTableData()
}

// 分页方法
const handleSizeChange = (val: number) => {
  pageSize.value = val
  currentPage.value = 1 // 切换每页条数时重置到第一页
  fetchTableData()
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
  fetchTableData()
}

// 详情弹窗相关
const detailDialogVisible = ref(false)
const currentDetail = ref<PermissionChangeLog>({} as PermissionChangeLog)

// 查看详情
const handleViewDetail = (row: PermissionChangeLog) => {
  fetchDetailData(row.id)
  detailDialogVisible.value = true
}
</script>

<style lang="scss" scoped>
.search-form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;

  .search-form {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
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

  .table-container {
    margin-bottom: 20px;
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
  
  .permission-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    
    .permission-tag {
      margin-bottom: 4px;
    }
    
    .empty-tag {
      color: #909399;
      font-style: italic;
    }
  }
}

.detail-content {
  max-height: 600px;
  overflow-y: auto;

  .detail-section {
    margin-bottom: 20px;

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
    
    .permission-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      
      .permission-tag {
        margin-bottom: 5px;
      }
      
      .empty-tag {
        color: #909399;
        font-style: italic;
      }
    }
  }

  .remark-content {
    padding: 16px;
    background-color: #f8f8f8;
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    color: #333;
    line-height: 1.6;
  }
}
</style> 