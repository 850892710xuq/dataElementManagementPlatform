<template>
  <div class="order-monitor">
    <!-- 搜索表单 -->
    <div class="search-form-container">
      <el-form :model="searchForm" class="search-form" inline>
        <el-form-item label="订单编号">
          <el-input v-model="searchForm.orderNo" placeholder="请输入订单编号" clearable />
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select v-model="searchForm.status" placeholder="请选择订单状态" clearable style="width: 160px;">
            <el-option label="待支付" value="pending" />
            <el-option label="已支付" value="paid" />
            <el-option label="已完成" value="completed" />
            <el-option label="已取消" value="cancelled" />
          </el-select>
        </el-form-item>
        <el-form-item label="下单时间">
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
          <el-table-column prop="orderNo" label="订单编号" min-width="200" show-overflow-tooltip />
          <el-table-column prop="creator" label="发起人" min-width="150" show-overflow-tooltip />
          <el-table-column prop="amount" label="金额" min-width="120" show-overflow-tooltip>
            <template #default="{ row }">
              ¥{{ row.amount.toFixed(2) }}
            </template>
          </el-table-column>
          <el-table-column prop="status" label="订单状态" min-width="100" show-overflow-tooltip>
            <template #default="{ row }">
              <el-tag :type="getStatusTag(row.status)">
                {{ getStatusLabel(row.status) }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="下单时间" min-width="180" show-overflow-tooltip />
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
      title="订单详情"
      width="60%"
      :close-on-click-modal="false"
      destroy-on-close
    >
      <div v-loading="detailLoading" class="detail-content">
        <!-- 基本信息 -->
        <div class="detail-section">
          <div class="section-title">基本信息</div>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="订单编号">{{ currentDetail?.orderNo }}</el-descriptions-item>
            <el-descriptions-item label="发起人">{{ currentDetail?.creator }}</el-descriptions-item>
            <el-descriptions-item label="订单金额">
              ¥{{ currentDetail?.amount?.toFixed(2) }}
            </el-descriptions-item>
            <el-descriptions-item label="订单状态">
              <el-tag :type="getStatusTag(currentDetail?.status || '')">
                {{ getStatusLabel(currentDetail?.status || '') }}
              </el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="下单时间">{{ currentDetail?.createTime }}</el-descriptions-item>
            <el-descriptions-item label="支付时间">{{ currentDetail?.payTime || '-' }}</el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 详细信息 -->
        <div class="detail-section">
          <div class="section-title">详细信息</div>
          <el-descriptions :column="1" border>
            <el-descriptions-item label="购买说明">{{ currentDetail?.description || '暂无说明' }}</el-descriptions-item>
            <el-descriptions-item label="支付方式">{{ currentDetail?.payMethod || '暂无数据' }}</el-descriptions-item>
            <el-descriptions-item label="备注信息">{{ currentDetail?.remark || '暂无备注' }}</el-descriptions-item>
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
import { ref, reactive, onMounted } from 'vue'
import { View, Search, ArrowLeft, ArrowRight, Refresh } from '@element-plus/icons-vue'

// 定义订单数据类型
interface OrderItem {
  id: number
  orderNo: string
  creator: string
  amount: number
  status: OrderStatus
  createTime: string
  payTime: string | null
  description: string
  payMethod: string | null
  remark: string
}

// 定义订单状态类型
type OrderStatus = 'pending' | 'paid' | 'completed' | 'cancelled'

// 定义搜索表单类型
interface SearchForm {
  orderNo: string
  status: OrderStatus | ''
  timeRange: string[]
}

// 搜索表单数据
const searchForm = reactive<SearchForm>({
  orderNo: '',
  status: '',
  timeRange: []
})

// 加载状态
const loading = ref(false)
const detailLoading = ref(false)

// 表格数据
const tableData = ref<OrderItem[]>([])

// 分页相关
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)

// 详情对话框
const detailDialogVisible = ref(false)
const currentDetail = ref<OrderItem | null>(null)

// 获取状态标签样式
const getStatusTag = (status: OrderStatus | ''): 'success' | 'warning' | 'info' | 'primary' | 'danger' => {
  const map: Record<OrderStatus, 'success' | 'warning' | 'info' | 'primary' | 'danger'> = {
    pending: 'warning',
    paid: 'success',
    completed: 'success',
    cancelled: 'info'
  }
  return status ? map[status] : 'info'
}

// 获取状态显示文本
const getStatusLabel = (status: OrderStatus | ''): string => {
  const map: Record<OrderStatus, string> = {
    pending: '待支付',
    paid: '已支付',
    completed: '已完成',
    cancelled: '已取消'
  }
  return status ? map[status] : status
}

// 模拟数据生成函数
const generateMockData = (page: number, pageSize: number): OrderItem[] => {
  const start = (page - 1) * pageSize
  const end = start + pageSize
  const mockData: OrderItem[] = []
  
  // 用户名列表，用于生成更真实的发起人
  const users = [
    '张三', '李四', '王五', '赵六', '钱七', 
    '孙八', '周九', '吴十', '郑十一', '王十二',
    '北京数据科技有限公司', '上海信息技术服务中心', '广州智慧城市研究院',
    '深圳大数据应用有限公司', '杭州云计算科技有限公司'
  ]
  
  // 生成随机日期（最近30天内）
  const getRandomDate = (): string => {
    const now = new Date()
    const days = Math.floor(Math.random() * 30)
    const hours = Math.floor(Math.random() * 24)
    const minutes = Math.floor(Math.random() * 60)
    const seconds = Math.floor(Math.random() * 60)
    
    now.setDate(now.getDate() - days)
    now.setHours(hours, minutes, seconds)
    
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hour = String(now.getHours()).padStart(2, '0')
    const minute = String(now.getMinutes()).padStart(2, '0')
    const second = String(now.getSeconds()).padStart(2, '0')
    
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }
  
  // 生成合理的订单金额
  const getRandomAmount = (): number => {
    // 大部分订单金额在100-10000之间，小概率出现更大金额
    if (Math.random() < 0.9) {
      return Math.floor(Math.random() * 9900 + 100) / 100
    } else {
      return Math.floor(Math.random() * 90000 + 10000) / 100
    }
  }
  
  // 订单状态分布：待支付(20%)、已支付(30%)、已完成(40%)、已取消(10%)
  const getRandomStatus = (): OrderStatus => {
    const rand = Math.random()
    if (rand < 0.2) return 'pending'
    if (rand < 0.5) return 'paid'
    if (rand < 0.9) return 'completed'
    return 'cancelled'
  }
  
  for (let i = start; i < end; i++) {
    const status = getRandomStatus()
    const createTime = getRandomDate()
    
    // 订单编号格式：TR + 年月日 + 6位序号
    const datePart = createTime.substring(2, 4) + createTime.substring(5, 7) + createTime.substring(8, 10)
    const orderNo = `TR${datePart}${String(i + 1).padStart(6, '0')}`
    
    // 随机选择发起人
    const creator = users[Math.floor(Math.random() * users.length)]
    
    // 计算支付时间（如果已支付或已完成）
    let payTime = null
    if (status === 'paid' || status === 'completed') {
      // 支付时间比创建时间晚1分钟到24小时
      const createDate = new Date(createTime)
      const payDate = new Date(createDate.getTime() + Math.floor(Math.random() * 24 * 60 * 60 * 1000) + 60000)
      
      const year = payDate.getFullYear()
      const month = String(payDate.getMonth() + 1).padStart(2, '0')
      const day = String(payDate.getDate()).padStart(2, '0')
      const hour = String(payDate.getHours()).padStart(2, '0')
      const minute = String(payDate.getMinutes()).padStart(2, '0')
      const second = String(payDate.getSeconds()).padStart(2, '0')
      
      payTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`
    }
    
    mockData.push({
      id: i + 1,
      orderNo,
      creator,
      amount: getRandomAmount(),
      status,
      createTime,
      payTime,
      description: `${creator}的数据使用申请`,
      payMethod: status === 'paid' || status === 'completed' ? 
        (Math.random() > 0.5 ? '企业账户支付' : '在线支付') : null,
      remark: Math.random() > 0.7 ? `订单备注信息 - ${i + 1}` : ''
    })
  }
  
  return mockData
}

// 获取表格数据
const fetchTableData = () => {
  loading.value = true
  // 模拟API调用
  setTimeout(() => {
    tableData.value = generateMockData(currentPage.value, pageSize.value)
    loading.value = false
  }, 500)
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
  searchForm.orderNo = ''
  searchForm.status = ''
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

// 查看详情
const handleDetail = (row: any) => {
  currentDetail.value = row
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
    gap: 16px;
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