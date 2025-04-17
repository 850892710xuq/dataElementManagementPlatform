<template>
  <div class="behavior-monitor">
    <!-- 搜索表单 -->
    <div class="search-form-container">
      <el-form :model="searchForm" class="search-form" inline>
        <el-form-item label="用户名">
          <el-input v-model="searchForm.username" placeholder="请输入用户名" clearable />
        </el-form-item>
        <el-form-item label="操作类型">
          <el-select v-model="searchForm.operationType" placeholder="请选择操作类型" clearable style="width: 160px;">
            <el-option label="查看" value="view" />
            <el-option label="新增" value="add" />
            <el-option label="修改" value="update" />
            <el-option label="删除" value="delete" />
            <el-option label="下载" value="download" />
            <el-option label="上传" value="upload" />
          </el-select>
        </el-form-item>
        <el-form-item label="操作时间">
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
          <el-table-column prop="operationTime" label="操作时间" min-width="180" show-overflow-tooltip />
          <el-table-column prop="operationType" label="操作类型" min-width="120" show-overflow-tooltip>
            <template #default="{ row }">
              <el-tag :type="getOperationTypeTag(row.operationType)">
                {{ getOperationTypeLabel(row.operationType) }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="operationContent" label="操作内容" min-width="200" show-overflow-tooltip />
          <el-table-column prop="operationObject" label="操作对象" min-width="200" show-overflow-tooltip />
          <el-table-column label="操作" width="120" fixed="right">
            <template #default="{ row }">
              <div class="table-actions">
                <el-button link type="primary" class="operation-button" @click="handleDetail(row)">
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

    <!-- 详情对话框 -->
    <el-dialog
      v-model="detailDialogVisible"
      title="操作详情"
      width="60%"
      :close-on-click-modal="false"
      destroy-on-close
    >
      <div v-loading="detailLoading" class="detail-content">
        <!-- 基本信息 -->
        <div class="detail-section">
          <div class="section-title">基本信息</div>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="用户名" width="180">{{ currentDetail.username }}</el-descriptions-item>
            <el-descriptions-item label="操作时间">{{ currentDetail.operationTime }}</el-descriptions-item>
            <el-descriptions-item label="操作类型" width="180">
              <el-tag :type="getOperationTypeTag(currentDetail.operationType)">
                {{ getOperationTypeLabel(currentDetail.operationType) }}
              </el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 详细信息 -->
        <div class="detail-section">
          <div class="section-title">操作详情</div>
          <el-descriptions :column="1" border>
            <el-descriptions-item label="操作内容">{{ currentDetail.operationContent }}</el-descriptions-item>
            <el-descriptions-item label="操作对象">{{ currentDetail.operationObject }}</el-descriptions-item>
            <el-descriptions-item label="备注信息" :span="currentDetail.remark ? 1 : 0" v-if="currentDetail.remark">{{ currentDetail.remark }}</el-descriptions-item>
          </el-descriptions>
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
import { View, Search, ArrowLeft, ArrowRight, Refresh } from '@element-plus/icons-vue'

// 定义用户操作记录接口
interface OperationRecord {
  id: string;
  username: string;
  operationTime: string;
  operationType: string;
  operationContent: string;
  operationObject: string;
  ip: string;
  location?: string;
  device?: string;
  result?: string;
  remark?: string;
}

// 搜索表单数据
const searchForm = reactive({
  username: '',
  operationType: '',
  timeRange: [] as string[]
})

// 加载状态
const loading = ref(false)
const detailLoading = ref(false)

// 表格数据
const tableData = ref<OperationRecord[]>([])

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

// 模拟数据生成函数
const generateMockData = (page: number, pageSize: number) => {
  const start = (page - 1) * pageSize
  const end = start + pageSize
  const mockData: OperationRecord[] = []
  
  // 定义更真实的用户列表
  const users = [
    { username: 'admin', name: '系统管理员' },
    { username: 'zhangsan', name: '张三' },
    { username: 'lisi', name: '李四' },
    { username: 'wangwu', name: '王五' },
    { username: 'zhaoliu', name: '赵六' }
  ]
  
  // 定义更真实的操作对象
  const operationObjects = [
    { type: 'dataset', name: '销售数据2024Q1' },
    { type: 'dataset', name: '客户信息数据库' },
    { type: 'report', name: '月度销售报表' },
    { type: 'user', name: '用户权限配置' },
    { type: 'system', name: '系统参数设置' },
    { type: 'file', name: '产品资料文档' }
  ]
  
  // 定义更真实的操作内容
  const operationContents = {
    view: [
      '查看数据详情',
      '浏览报表内容',
      '查询用户信息',
      '查看系统日志',
      '预览文件内容'
    ],
    add: [
      '新增数据记录',
      '创建新报表',
      '添加用户账号',
      '上传新文件',
      '添加系统配置'
    ],
    update: [
      '更新数据信息',
      '修改报表内容',
      '编辑用户资料',
      '调整系统参数',
      '更新文件内容'
    ],
    delete: [
      '删除数据记录',
      '移除报表文件',
      '删除用户账号',
      '清理系统日志',
      '删除过期文件'
    ],
    download: [
      '下载数据文件',
      '导出报表文档',
      '获取用户列表',
      '备份系统配置',
      '下载附件资料'
    ],
    upload: [
      '上传数据文件',
      '导入报表数据',
      '提交用户资料',
      '上传系统更新',
      '提交文档附件'
    ]
  }
  
  // 定义更真实的设备信息
  const devices = [
    'Chrome 120.0.0 / Windows 11',
    'Firefox 123.0.0 / macOS 14.2',
    'Edge 121.0.0 / Windows 10',
    'Safari 17.2 / macOS 13.6',
    'Chrome 119.0.0 / Ubuntu 22.04'
  ]
  
  // 定义更真实的地理位置
  const locations = [
    '北京市海淀区中关村',
    '上海市浦东新区张江',
    '广州市天河区珠江新城',
    '深圳市南山区科技园',
    '杭州市西湖区文三路'
  ]
  
  // 生成模拟数据
  for (let i = start; i < end; i++) {
    const user = users[i % users.length]
    const object = operationObjects[i % operationObjects.length]
    const operationType = ['view', 'add', 'update', 'delete', 'download', 'upload'][i % 6]
    const contentList = operationContents[operationType as keyof typeof operationContents]
    const content = contentList[i % contentList.length]
    
    // 生成更真实的时间戳（最近30天内的随机时间）
    const now = new Date()
    const randomDays = Math.floor(Math.random() * 30)
    const randomHours = Math.floor(Math.random() * 24)
    const randomMinutes = Math.floor(Math.random() * 60)
    const randomSeconds = Math.floor(Math.random() * 60)
    const operationTime = new Date(now)
    operationTime.setDate(now.getDate() - randomDays)
    operationTime.setHours(randomHours, randomMinutes, randomSeconds)
    
    mockData.push({
      id: String(i + 1),
      username: user.username,
      operationTime: operationTime.toISOString().replace('T', ' ').substring(0, 19),
      operationType: operationType,
      operationContent: content,
      operationObject: `${object.name}(${object.type})`,
      ip: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
      location: locations[i % locations.length],
      device: devices[i % devices.length],
      result: Math.random() > 0.1 ? '成功' : '失败',
      remark: Math.random() > 0.7 ? `操作ID-${i+1}的备注信息，包含一些补充说明` : ''
    })
  }
  
  return mockData
}

// 获取表格数据
const fetchTableData = () => {
  loading.value = true
  try {
    // 模拟API调用
    setTimeout(() => {
      // 先生成所有数据
      const allData = generateMockData(1, 100) // 模拟获取全部数据
      
      // 应用筛选条件
      let filteredData = [...allData] // 创建数据副本以避免引用问题
      
      // 按用户名筛选 - 确保大小写不敏感的包含匹配
      if (searchForm.username && searchForm.username.trim() !== '') {
        const searchValue = searchForm.username.trim().toLowerCase()
        filteredData = filteredData.filter(item => 
          item.username.toLowerCase().includes(searchValue)
        )
        console.log('按用户名过滤后数据条数:', filteredData.length)
      }
      
      // 按操作类型筛选
      if (searchForm.operationType) {
        filteredData = filteredData.filter(item => 
          item.operationType === searchForm.operationType
        )
        console.log('按操作类型过滤后数据条数:', filteredData.length)
      }
      
      // 按时间范围筛选
      if (searchForm.timeRange && searchForm.timeRange.length === 2) {
        const startDate = new Date(searchForm.timeRange[0])
        const endDate = new Date(searchForm.timeRange[1])
        // 将结束日期设置为当天的23:59:59
        endDate.setHours(23, 59, 59)
        
        filteredData = filteredData.filter(item => {
          const itemDate = new Date(item.operationTime)
          return itemDate >= startDate && itemDate <= endDate
        })
        console.log('按时间过滤后数据条数:', filteredData.length)
      }
      
      // 计算总条数
      total.value = filteredData.length
      
      // 分页处理
      const start = (currentPage.value - 1) * pageSize.value
      const end = Math.min(start + pageSize.value, filteredData.length)
      tableData.value = filteredData.slice(start, end)
      
      loading.value = false
    }, 500)
  } catch (error) {
    console.error('获取操作记录失败', error)
    ElMessage.error('获取操作记录失败')
    loading.value = false
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
  searchForm.operationType = ''
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

// 详情对话框
const detailDialogVisible = ref(false)
const currentDetail = ref<OperationRecord>({} as OperationRecord)

// 获取操作类型标签样式
const getOperationTypeTag = (type: string): 'success' | 'warning' | 'info' | 'primary' | 'danger' => {
  const map: Record<string, 'success' | 'warning' | 'info' | 'primary' | 'danger'> = {
    view: 'info',
    add: 'success',
    update: 'primary',
    delete: 'danger',
    download: 'warning',
    upload: 'warning'
  }
  return map[type] || 'info'
}

// 获取操作类型显示文本
const getOperationTypeLabel = (type: string) => {
  const map: Record<string, string> = {
    view: '查看',
    add: '新增',
    update: '修改',
    delete: '删除',
    download: '下载',
    upload: '上传'
  }
  return map[type] || type
}

// 查看详情
const handleDetail = (row: OperationRecord) => {
  currentDetail.value = {...row}
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
  }
}
</style> 