<template>
  <div class="authorization-monitor">
    <!-- 搜索表单 -->
    <div class="search-form-container">
      <el-form :model="searchForm" class="search-form" inline>
        <el-form-item label="申请方">
          <el-input v-model="searchForm.requester" placeholder="请输入申请方" clearable style="width: 180px" />
        </el-form-item>
        <el-form-item label="授权状态">
          <el-select v-model="searchForm.status" placeholder="请选择授权状态" clearable style="width: 180px">
            <el-option label="待审核" value="pending" />
            <el-option label="已通过" value="approved" />
            <el-option label="已拒绝" value="rejected" />
            <el-option label="已过期" value="expired" />
          </el-select>
        </el-form-item>
        <el-form-item label="时间范围">
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
          <el-table-column 
            prop="requester" 
            label="申请方" 
            min-width="220" 
            show-overflow-tooltip 
          />
          <el-table-column 
            prop="createTime" 
            label="申请时间" 
            min-width="160" 
            show-overflow-tooltip 
          />
          <el-table-column 
            prop="provider" 
            label="被授权方" 
            min-width="200" 
            show-overflow-tooltip 
          />
          <el-table-column 
            prop="dataName" 
            label="授权资源" 
            min-width="180" 
            show-overflow-tooltip 
          />
          <el-table-column 
            prop="validPeriod" 
            label="有效期" 
            min-width="200" 
            show-overflow-tooltip
          >
            <template #default="{ row }">
              {{ row.startTime }} 至 {{ row.endTime }}
            </template>
          </el-table-column>
          <el-table-column 
            prop="status" 
            label="状态" 
            min-width="100" 
            align="center"
            show-overflow-tooltip
          >
            <template #default="{ row }">
              <el-tag :type="getStatusTag(row.status)">
                {{ getStatusLabel(row.status) }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column 
            label="操作" 
            min-width="150" 
            fixed="right"
            align="center"
          >
            <template #default="{ row }">
              <div class="table-actions">
                <div class="action-group">
                  <el-button link type="primary" class="operation-button" @click="handleDetail(row)">
                    <el-icon><View /></el-icon>
                    <span>详情</span>
                  </el-button>
                </div>
                <div class="action-group">
                  <el-button 
                    v-if="row.status === 'pending'"
                    link 
                    type="warning" 
                    class="operation-button" 
                    @click="handleReview(row)"
                  >
                    <el-icon><Edit /></el-icon>
                    <span>审核</span>
                  </el-button>
                </div>
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
      title="授权详情"
      width="60%"
      :close-on-click-modal="false"
      destroy-on-close
    >
      <div v-loading="detailLoading" class="detail-content">
        <!-- 基本信息 -->
        <div class="detail-section">
          <div class="section-title">基本信息</div>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="申请方">{{ currentDetail.requester }}</el-descriptions-item>
            <el-descriptions-item label="被授权方">{{ currentDetail.provider }}</el-descriptions-item>
            <el-descriptions-item label="授权资源">{{ currentDetail.dataName }}</el-descriptions-item>
            <el-descriptions-item label="资源描述">{{ currentDetail.dataDescription }}</el-descriptions-item>
            <el-descriptions-item label="有效期">
              {{ currentDetail.startTime }} 至 {{ currentDetail.endTime }}
            </el-descriptions-item>
            <el-descriptions-item label="状态">
              <el-tag :type="getStatusTag(currentDetail.status)">
                {{ getStatusLabel(currentDetail.status) }}
              </el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="申请时间">{{ currentDetail.createTime }}</el-descriptions-item>
            <el-descriptions-item label="审核时间">{{ currentDetail.reviewTime || '-' }}</el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 申请信息 -->
        <div class="detail-section">
          <div class="section-title">申请信息</div>
          <el-descriptions :column="1" border>
            <el-descriptions-item label="申请理由">{{ currentDetail.reason || '暂无说明' }}</el-descriptions-item>
            <el-descriptions-item label="审核意见">{{ currentDetail.reviewComment || '暂无意见' }}</el-descriptions-item>
          </el-descriptions>
        </div>

        <!-- 授权过程日志 -->
        <div class="detail-section">
          <div class="section-title">授权过程日志</div>
          <el-timeline>
            <el-timeline-item
              v-for="(log, index) in currentDetail.logs"
              :key="index"
              :type="getLogType(log.type)"
              :timestamp="log.time"
              placement="top"
            >
              <el-card class="log-card">
                <template #header>
                  <div class="log-header">
                    <span class="log-title">{{ getLogTitle(log.type) }}</span>
                    <el-tag :type="getLogType(log.type)" size="small">{{ getLogStatus(log.type) }}</el-tag>
                  </div>
                </template>
                <div class="log-content">
                  <p v-if="log.operator">操作人：{{ log.operator }}</p>
                  <p v-if="log.comment">操作说明：{{ log.comment }}</p>
                </div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="detailDialogVisible = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 审核对话框 -->
    <el-dialog
      v-model="reviewDialogVisible"
      title="授权审核"
      width="500px"
      :close-on-click-modal="false"
    >
      <el-form :model="reviewForm" label-width="100px">
        <el-form-item label="审核结果" required>
          <el-radio-group v-model="reviewForm.result">
            <el-radio label="approve">通过</el-radio>
            <el-radio label="reject">拒绝</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="审核意见" required>
          <el-input
            v-model="reviewForm.comment"
            type="textarea"
            :rows="4"
            placeholder="请输入审核意见，说明通过或拒绝的理由"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="reviewDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSubmitReview">提交</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 撤销确认对话框 -->
    <el-dialog
      v-model="revokeDialogVisible"
      title="撤销确认"
      width="500px"
      :close-on-click-modal="false"
    >
      <el-form :model="revokeForm" label-width="100px">
        <el-form-item label="撤销原因">
          <el-input
            v-model="revokeForm.reason"
            type="textarea"
            :rows="4"
            placeholder="请输入撤销原因"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="revokeDialogVisible = false">取消</el-button>
          <el-button type="danger" @click="handleSubmitRevoke">确认撤销</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { View, Edit, Delete, Search, ArrowLeft, ArrowRight, Refresh } from '@element-plus/icons-vue'

// 定义标签类型
type TagType = 'success' | 'warning' | 'info' | 'primary' | 'danger'

// 定义日志类型
interface AuthLog {
  type: 'apply' | 'review' | 'approve' | 'reject' | 'revoke'
  time: string
  operator: string
  comment?: string
}

// 定义详情数据类型
interface AuthDetail {
  requester: string
  provider: string
  dataName: string
  startTime: string
  endTime: string
  status: string
  createTime: string
  dataDescription: string
  reason: string
  reviewTime: string | null
  reviewComment: string | null
  logs: AuthLog[]
}

// 搜索表单数据
const searchForm = reactive({
  requester: '',
  status: '',
  timeRange: []
})

// 加载状态
const loading = ref(false)
const detailLoading = ref(false)

// 表格数据
const tableData = ref<AuthDetail[]>([])

// 分页相关
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)

// 修改currentDetail的类型
const currentDetail = ref<AuthDetail>({
  requester: '',
  provider: '',
  dataName: '',
  startTime: '',
  endTime: '',
  status: '',
  createTime: '',
  dataDescription: '',
  reason: '',
  reviewTime: null,
  reviewComment: null,
  logs: []
})

// 修改模拟数据生成函数
const generateMockData = (page: number, pageSize: number) => {
  const start = (page - 1) * pageSize
  const end = start + pageSize
  const mockData: AuthDetail[] = []
  
  // 模拟数据提供机构
  const dataProviders = [
    '北京市统计局',
    '上海市大数据中心',
    '广东省工商行政管理局',
    '浙江省数据交易中心',
    '深圳市金融数据服务中心'
  ]

  // 模拟申请机构
  const requesters = [
    { name: '智慧金融科技有限公司', type: '金融科技' },
    { name: '城市规划研究院', type: '政府机构' },
    { name: '商业分析顾问公司', type: '咨询服务' },
    { name: '智能交通系统有限公司', type: '交通物流' },
    { name: '医疗大数据研究中心', type: '医疗健康' }
  ]

  // 模拟数据资源
  const dataResources = [
    { 
      name: '企业经营数据集', 
      description: '包含企业注册信息、经营状况、纳税记录等数据',
      type: '企业经营',
      sensitivity: '中度敏感'
    },
    { 
      name: '人口流动数据集', 
      description: '城市人口流动趋势、区域分布、职业分布等数据',
      type: '人口统计',
      sensitivity: '低度敏感'
    },
    { 
      name: '金融交易数据集', 
      description: '支付交易流水、信用评估、风险控制等数据',
      type: '金融数据',
      sensitivity: '高度敏感'
    },
    { 
      name: '城市交通数据集', 
      description: '交通流量、拥堵指数、公共交通运营等数据',
      type: '交通出行',
      sensitivity: '中度敏感'
    },
    { 
      name: '医疗健康数据集', 
      description: '疾病诊断、治疗方案、药品使用等去隐私化数据',
      type: '医疗健康',
      sensitivity: '高度敏感'
    }
  ]

  // 模拟审核人员
  const reviewers = [
    { name: '张三', role: '数据安全审核员' },
    { name: '李四', role: '合规审核员' },
    { name: '王五', role: '业务审核员' },
    { name: '赵六', role: '技术审核员' }
  ]
  
  for (let i = start; i < end; i++) {
    const provider = dataProviders[i % dataProviders.length]
    const requester = requesters[i % requesters.length]
    const dataResource = dataResources[i % dataResources.length]
    const reviewer = reviewers[i % reviewers.length]
    const createTime = new Date(2024, 2, 20 - i, 10, 0, 0) // 从近到远的日期
    const reviewTime = new Date(createTime.getTime() + 2 * 24 * 60 * 60 * 1000) // 2天后审核
    
    mockData.push({
      requester: requester.name,
      provider: provider,
      dataName: dataResource.name,
      dataDescription: `${dataResource.description}（数据敏感度：${dataResource.sensitivity}）`,
      startTime: '2024-03-20',
      endTime: '2024-09-20',
      status: ['pending', 'approved', 'rejected', 'expired'][i % 4],
      createTime: createTime.toLocaleString(),
      reason: `因${requester.type}领域业务发展需要，申请使用${dataResource.name}进行${dataResource.type}相关分析，主要用于${getUsageReason(requester.type, dataResource.type)}`,
      reviewTime: i % 2 === 0 ? reviewTime.toLocaleString() : null,
      reviewComment: i % 2 === 0 
        ? getApprovalComment(dataResource.sensitivity, requester.type) 
        : getRejectionComment(dataResource.sensitivity, requester.type),
      logs: [
        {
          type: 'apply',
          time: createTime.toLocaleString(),
          operator: requester.name,
          comment: `申请使用${dataResource.name}，用于${getUsageReason(requester.type, dataResource.type)}`
        },
        {
          type: 'review',
          time: new Date(createTime.getTime() + 24 * 60 * 60 * 1000).toLocaleString(), // 1天后开始审核
          operator: `${reviewer.name}（${reviewer.role}）`,
          comment: '开始进行授权审核，审核内容包括数据使用合规性、安全性及可行性评估'
        },
        {
          type: i % 2 === 0 ? 'approve' : 'reject',
          time: reviewTime.toLocaleString(),
          operator: `${reviewer.name}（${reviewer.role}）`,
          comment: i % 2 === 0 
            ? getApprovalComment(dataResource.sensitivity, requester.type)
            : getRejectionComment(dataResource.sensitivity, requester.type)
        }
      ]
    })
  }
  
  return mockData
}

// 根据申请方类型和数据类型生成使用原因
const getUsageReason = (requesterType: string, dataType: string) => {
  const reasons: Record<string, Record<string, string>> = {
    '金融科技': {
      '企业经营': '风险评估和信用分析',
      '人口统计': '客户画像和市场分析',
      '金融数据': '金融产品开发和风控模型优化',
      '交通出行': '消费行为分析',
      '医疗健康': '保险产品设计'
    },
    '政府机构': {
      '企业经营': '产业政策制定和经济监测',
      '人口统计': '城市规划和人口管理',
      '金融数据': '金融风险监测',
      '交通出行': '交通规划和管理',
      '医疗健康': '公共卫生决策'
    },
    '咨询服务': {
      '企业经营': '行业研究和企业咨询',
      '人口统计': '市场调研和发展规划',
      '金融数据': '投资分析和风险评估',
      '交通出行': '物流优化方案',
      '医疗健康': '医疗资源优化配置'
    },
    '交通物流': {
      '企业经营': '企业物流需求分析',
      '人口统计': '物流网络规划',
      '金融数据': '支付系统对接',
      '交通出行': '智能调度系统开发',
      '医疗健康': '医疗物流解决方案'
    },
    '医疗健康': {
      '企业经营': '医疗机构运营分析',
      '人口统计': '疾病预防和控制',
      '金融数据': '医疗保险方案设计',
      '交通出行': '急救系统优化',
      '医疗健康': '临床研究和医疗服务优化'
    }
  }
  return reasons[requesterType]?.[dataType] || '相关业务分析'
}

// 生成审核通过意见
const getApprovalComment = (sensitivity: string, requesterType: string) => {
  if (sensitivity === '高度敏感') {
    return `申请方${requesterType}资质符合要求，数据使用目的明确，安全保护方案完善，经评估后同意授权。需严格遵守数据安全管理规范，定期审计数据使用情况。`
  } else if (sensitivity === '中度敏感') {
    return `申请方${requesterType}业务需求合理，数据使用范围明确，授权后需遵守相关数据使用规范。`
  } else {
    return `申请方${requesterType}数据使用目的合理，授权后请按照约定用途使用数据。`
  }
}

// 生成审核拒绝意见
const getRejectionComment = (sensitivity: string, requesterType: string) => {
  if (sensitivity === '高度敏感') {
    return `申请方${requesterType}的数据安全保护能力未达到要求，暂不具备使用该敏感数据的条件。建议完善数据安全管理制度后再次申请。`
  } else if (sensitivity === '中度敏感') {
    return `申请方${requesterType}的数据使用方案存在安全隐患，需要进一步明确数据使用范围和保护措施。`
  } else {
    return `申请方${requesterType}的业务场景与所需数据不够匹配，建议重新评估数据需求。`
  }
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
  searchForm.requester = ''
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

// 详情对话框
const detailDialogVisible = ref(false)

// 查看详情
const handleDetail = (row: any) => {
  currentDetail.value = row
  detailDialogVisible.value = true
}

// 审核对话框
const reviewDialogVisible = ref(false)
const reviewForm = reactive({
  result: 'approve',
  comment: ''
})

// 撤销对话框
const revokeDialogVisible = ref(false)
const revokeForm = reactive({
  reason: ''
})

// 审核方法
const handleReview = (row: any) => {
  currentDetail.value = row
  reviewDialogVisible.value = true
}

// 提交审核
const handleSubmitReview = () => {
  // TODO: 调用审核接口
  ElMessage.success('审核提交成功')
  reviewDialogVisible.value = false
  fetchTableData()
}

// 提交撤销
const handleSubmitRevoke = () => {
  // TODO: 调用撤销接口
  ElMessage.success('撤销成功')
  revokeDialogVisible.value = false
  fetchTableData()
}

// 获取授权类型标签样式
const getAuthTypeTag = (type: string): TagType => {
  const map: Record<string, TagType> = {
    access: 'primary',
    download: 'success',
    share: 'warning'
  }
  return map[type] || 'info'
}

// 获取授权类型显示文本
const getAuthTypeLabel = (type: string) => {
  const map: Record<string, string> = {
    access: '数据访问',
    download: '数据下载',
    share: '数据共享'
  }
  return map[type] || type
}

// 获取状态标签样式
const getStatusTag = (status: string): TagType => {
  const map: Record<string, TagType> = {
    pending: 'warning',
    approved: 'success',
    rejected: 'danger',
    expired: 'info'
  }
  return map[status] || 'info'
}

// 获取状态显示文本
const getStatusLabel = (status: string) => {
  const map: Record<string, string> = {
    pending: '待审核',
    approved: '已通过',
    rejected: '已拒绝',
    expired: '已过期'
  }
  return map[status] || status
}

// 获取日志类型对应的标签样式
const getLogType = (type: string): TagType => {
  const map: Record<string, TagType> = {
    apply: 'primary',
    review: 'warning',
    approve: 'success',
    reject: 'danger',
    revoke: 'info'
  }
  return map[type] || 'info'
}

// 获取日志标题
const getLogTitle = (type: string) => {
  const map: Record<string, string> = {
    apply: '申请授权',
    review: '审核中',
    approve: '审核通过',
    reject: '审核拒绝',
    revoke: '撤销授权'
  }
  return map[type] || type
}

// 获取日志状态
const getLogStatus = (type: string) => {
  const map: Record<string, string> = {
    apply: '申请',
    review: '审核',
    approve: '通过',
    reject: '拒绝',
    revoke: '撤销'
  }
  return map[type] || type
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
    width: 100%;
    overflow-x: auto;
  }

  .table-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    min-width: 150px;

    .action-group {
      width: 60px;
      display: flex;
      justify-content: center;
    }

    .operation-button {
      display: flex;
      align-items: center;
      gap: 4px;
      justify-content: center;
      padding: 0;
      height: 28px;
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

.log-card {
  margin-bottom: 10px;
  
  .log-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .log-title {
      font-weight: bold;
      color: #303133;
    }
  }
  
  .log-content {
    color: #606266;
    
    p {
      margin: 5px 0;
      line-height: 1.5;
    }
  }
}

:deep(.el-timeline-item__node) {
  background-color: #fff;
  border: 2px solid;
}

:deep(.el-timeline-item__tail) {
  border-left: 2px solid #e4e7ed;
}
</style> 