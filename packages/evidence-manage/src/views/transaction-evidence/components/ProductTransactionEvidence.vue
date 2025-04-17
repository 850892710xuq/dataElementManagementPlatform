<template>
  <div class="product-transaction-evidence-container">
    <!-- 搜索表单 -->
    <div class="search-form-container">
      <el-form :model="queryForm" ref="formRef" :inline="true" class="search-form">
        <el-form-item label="产品名称" prop="productName">
          <el-input
            v-model="queryForm.productName"
            placeholder="请输入产品名称"
            clearable
            @keyup.enter="handleSearch"
          />
        </el-form-item>
        
        <el-form-item label="交易类型" prop="transactionType">
          <el-select
            v-model="queryForm.transactionType"
            placeholder="请选择交易类型"
            clearable
            style="width: 150px;"
          >
            <el-option label="上架" value="上架" />
            <el-option label="订单交易" value="订单交易" />
          </el-select>
        </el-form-item>
        
        <el-form-item label="交易状态" prop="transactionStatus">
          <el-select
            v-model="queryForm.transactionStatus"
            placeholder="请选择交易状态"
            clearable
            style="width: 180px;"
          >
            <el-option label="上架审核通过" value="上架审核通过" />
            <el-option label="上架审核不通过" value="上架审核不通过" />
            <el-option label="订单交易成功" value="订单交易成功" />
            <el-option label="订单交易失败" value="订单交易失败" />
          </el-select>
        </el-form-item>
        
        <el-form-item label="交易时间" prop="transactionTimeRange">
          <el-date-picker
            v-model="dateRange"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="YYYY-MM-DD HH:mm:ss"
            @change="handleDateRangeChange"
          />
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="handleSearch" class="search-button">
            <el-icon><Search /></el-icon>
            搜索
          </el-button>
          <el-button @click="handleReset">
            <el-icon><Refresh /></el-icon>
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    
    <!-- 数据列表 -->
    <div class="card-container">
      <div class="table-container">
        <el-table
          v-loading="loading"
          :data="tableData"
          border
          style="width: 100%"
          :header-cell-style="{ background: '#f5f7fa', color: '#606266' }"
        >
          <el-table-column prop="productName" label="产品名称" min-width="180" show-overflow-tooltip />
          <el-table-column prop="transactionTime" label="交易时间" min-width="170" show-overflow-tooltip />
          <el-table-column prop="transactionType" label="交易类型" width="120" show-overflow-tooltip />
          <el-table-column label="交易状态" width="140" show-overflow-tooltip>
            <template #default="{ row }">
              <el-tag :type="getStatusType(row.transactionStatus)">
                {{ row.transactionStatus }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="evidenceNo" label="存证编号" min-width="180" show-overflow-tooltip />
          <el-table-column label="操作" width="120" fixed="right">
            <template #default="{ row }">
              <div class="table-actions">
                <el-button
                  type="primary"
                  link
                  @click="handleViewDetail(row)"
                  class="operation-button"
                  style="--el-button-icon-margin-right: 0; --el-button-icon-margin-left: 0;"
                >
                  <el-icon style="margin-right: 0;"><View /></el-icon>
                  <span style="margin-left: 0;">查看详情</span>
                </el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      
      <!-- 分页控件 -->
      <div class="pagination-container">
        <el-pagination
          v-model:currentPage="queryParams.pageNum"
          v-model:page-size="queryParams.pageSize"
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
      v-model="detailDialog.visible"
      :title="detailDialog.title"
      width="60%"
      destroy-on-close
    >
      <div v-loading="detailDialog.loading" class="detail-container" v-if="detailData">
        <!-- 产品上架存证详情 -->
        <div v-if="detailData.transactionType === '上架'">
          <el-descriptions :column="2" border>
            <el-descriptions-item label="上架申请时间">{{ detailData.applyTime }}</el-descriptions-item>
            <el-descriptions-item label="上架申请方">{{ detailData.applicant }}</el-descriptions-item>
            <el-descriptions-item label="产品名称">{{ detailData.productName }}</el-descriptions-item>
            <el-descriptions-item label="产品价格">¥{{ detailData.productPrice }}</el-descriptions-item>
            <el-descriptions-item label="产品描述" :span="2">
              {{ detailData.productDescription }}
            </el-descriptions-item>
            <el-descriptions-item label="审核人员">{{ detailData.auditor }}</el-descriptions-item>
            <el-descriptions-item label="上架审核时间">{{ detailData.auditTime }}</el-descriptions-item>
            <el-descriptions-item label="审核意见">
              <el-tag :type="detailData.auditResult === '通过' ? 'success' : 'danger'">
                {{ detailData.auditResult }}
              </el-tag>
              <span v-if="detailData.auditResult === '不通过'" class="audit-reason">
                原因：{{ detailData.auditReason }}
              </span>
            </el-descriptions-item>
            <el-descriptions-item label="存证编号">{{ detailData.evidenceNo }}</el-descriptions-item>
            <el-descriptions-item label="存证时间">{{ detailData.evidenceTime }}</el-descriptions-item>
          </el-descriptions>
        </div>
        
        <!-- 产品订单交易存证详情 -->
        <div v-else-if="detailData.transactionType === '订单交易'">
          <el-descriptions :column="2" border>
            <el-descriptions-item label="订单生成时间">{{ detailData.orderTime }}</el-descriptions-item>
            <el-descriptions-item label="申请方(购买方)">{{ detailData.buyer }}</el-descriptions-item>
            <el-descriptions-item label="产品名称">{{ detailData.productName }}</el-descriptions-item>
            <el-descriptions-item label="购买数量">{{ detailData.quantity }}</el-descriptions-item>
            <el-descriptions-item label="产品单价">¥{{ detailData.unitPrice }}</el-descriptions-item>
            <el-descriptions-item label="支付方式">{{ detailData.paymentMethod }}</el-descriptions-item>
            <el-descriptions-item label="审核人员">{{ detailData.auditor }}</el-descriptions-item>
            <el-descriptions-item label="审核时间">{{ detailData.auditTime }}</el-descriptions-item>
            <el-descriptions-item label="审核意见">
              <el-tag :type="detailData.auditResult === '通过' ? 'success' : 'danger'">
                {{ detailData.auditResult }}
              </el-tag>
              <span v-if="detailData.auditResult === '不通过'" class="audit-reason">
                原因：{{ detailData.auditReason }}
              </span>
            </el-descriptions-item>
            <el-descriptions-item label="交易完成时间">{{ detailData.completeTime }}</el-descriptions-item>
            <el-descriptions-item label="交易金额">¥{{ detailData.totalAmount }}</el-descriptions-item>
            <el-descriptions-item label="存证编号">{{ detailData.evidenceNo }}</el-descriptions-item>
            <el-descriptions-item label="存证时间">{{ detailData.evidenceTime }}</el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
      
      <!-- 对话框底部添加关闭按钮 -->
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="detailDialog.visible = false">关闭</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Search, Refresh, View } from '@element-plus/icons-vue'

// 模拟数据 - 临时使用，后续会替换为API调用
const mockData = [
  {
    id: '1',
    productName: '智能数据分析平台',
    transactionTime: '2023-06-15 10:30:25',
    transactionType: '上架',
    transactionStatus: '上架审核通过',
    evidenceNo: 'EV-20230615-001',
    applyTime: '2023-06-10 09:15:20',
    applicant: '数智科技有限公司',
    applicantId: 'ORG-10023',
    productPrice: 9800,
    productDescription: '基于AI技术的智能数据分析平台，提供数据清洗、分析、可视化等一站式服务。',
    auditTime: '2023-06-15 09:45:30',
    auditor: '平台管理员',
    auditResult: '通过',
    auditReason: '',
    evidenceTime: '2023-06-15 10:30:25'
  },
  {
    id: '2',
    productName: '企业数据治理工具包',
    transactionTime: '2023-07-20 14:20:15',
    transactionType: '上架',
    transactionStatus: '上架审核不通过',
    evidenceNo: 'EV-20230720-002',
    applyTime: '2023-07-15 16:30:40',
    applicant: '云数据科技有限公司',
    applicantId: 'ORG-10045',
    productPrice: 15600,
    productDescription: '企业级数据治理工具包，包含数据质量管理、元数据管理、数据标准化等模块。',
    auditTime: '2023-07-20 11:30:10',
    auditor: '平台审核专员',
    auditResult: '不通过',
    auditReason: '产品描述不完整，缺少必要的技术规格说明。',
    evidenceTime: '2023-07-20 14:20:15'
  },
  {
    id: '3',
    productName: '智能数据分析平台',
    transactionTime: '2023-08-05 09:10:35',
    transactionType: '订单交易',
    transactionStatus: '订单交易成功',
    evidenceNo: 'EV-20230805-003',
    orderTime: '2023-08-01 15:25:30',
    buyer: '远景数据科技有限公司',
    buyerId: 'ORG-20078',
    quantity: 2,
    unitPrice: 9800,
    paymentMethod: '企业在线支付',
    auditTime: '2023-08-03 10:15:20',
    auditor: '交易审核员',
    auditResult: '通过',
    auditReason: '',
    completeTime: '2023-08-05 09:10:35',
    totalAmount: 19600,
    evidenceTime: '2023-08-05 09:30:15'
  },
  {
    id: '4',
    productName: '数据安全合规评估服务',
    transactionTime: '2023-09-12 11:45:20',
    transactionType: '订单交易',
    transactionStatus: '订单交易失败',
    evidenceNo: 'EV-20230912-004',
    orderTime: '2023-09-10 16:40:10',
    buyer: '金融数据应用研究所',
    buyerId: 'ORG-30056',
    quantity: 1,
    unitPrice: 25000,
    paymentMethod: '银行转账',
    auditTime: '2023-09-11 14:30:25',
    auditor: '高级交易审核员',
    auditResult: '通过',
    auditReason: '',
    completeTime: '2023-09-12 11:45:20',
    totalAmount: 25000,
    evidenceTime: '2023-09-12 12:10:30'
  }
]

// 查询表单
const queryForm = reactive({
  productName: '',
  transactionType: '',
  transactionStatus: '',
  transactionTimeStart: '',
  transactionTimeEnd: ''
})

// 查询参数
const queryParams = reactive({
  pageNum: 1,
  pageSize: 10,
  ...queryForm
})

// 日期范围
const dateRange = ref(null)

// 表单引用
const formRef = ref()

// 表格数据
const tableData = ref([])
// 总记录数
const total = ref(0)
// 加载状态
const loading = ref(false)

// 详情对话框
const detailDialog = reactive({
  visible: false,
  loading: false,
  title: '产品交易存证详情'
})

// 详情数据
const detailData = ref(null)

// 初始化
onMounted(() => {
  fetchDataList()
})

// 处理日期范围变化
const handleDateRangeChange = (val) => {
  if (val) {
    queryForm.transactionTimeStart = val[0]
    queryForm.transactionTimeEnd = val[1]
  } else {
    queryForm.transactionTimeStart = ''
    queryForm.transactionTimeEnd = ''
  }
}

// 获取状态样式类型
const getStatusType = (status) => {
  if (status.includes('通过') || status.includes('成功')) {
    return 'success'
  } else if (status.includes('不通过') || status.includes('失败')) {
    return 'danger'
  } else {
    return 'info'
  }
}

// 获取数据列表
const fetchDataList = async () => {
  loading.value = true
  try {
    // 模拟API调用
    setTimeout(() => {
      // 筛选数据
      let filteredData = [...mockData]
      
      if (queryForm.productName) {
        filteredData = filteredData.filter(item => 
          item.productName.includes(queryForm.productName)
        )
      }
      
      if (queryForm.transactionType) {
        filteredData = filteredData.filter(item => 
          item.transactionType === queryForm.transactionType
        )
      }
      
      if (queryForm.transactionStatus) {
        filteredData = filteredData.filter(item => 
          item.transactionStatus === queryForm.transactionStatus
        )
      }
      
      if (queryForm.transactionTimeStart && queryForm.transactionTimeEnd) {
        filteredData = filteredData.filter(item => {
          const time = new Date(item.transactionTime).getTime()
          const start = new Date(queryForm.transactionTimeStart).getTime()
          const end = new Date(queryForm.transactionTimeEnd).getTime()
          return time >= start && time <= end
        })
      }
      
      tableData.value = filteredData
      total.value = filteredData.length
      loading.value = false
    }, 500)
  } catch (error) {
    console.error('获取数据失败', error)
    ElMessage.error('获取数据失败')
    loading.value = false
  }
}

// 处理搜索
const handleSearch = () => {
  queryParams.pageNum = 1
  Object.assign(queryParams, queryForm)
  fetchDataList()
}

// 处理重置
const handleReset = () => {
  formRef.value?.resetFields()
  dateRange.value = null
  queryParams.pageNum = 1
  
  // 重置查询表单
  Object.keys(queryForm).forEach(key => {
    queryForm[key] = ''
  })
  
  fetchDataList()
}

// 处理每页条数变化
const handleSizeChange = (val) => {
  queryParams.pageSize = val
  fetchDataList()
}

// 处理页码变化
const handleCurrentChange = (val) => {
  queryParams.pageNum = val
  fetchDataList()
}

// 处理查看详情
const handleViewDetail = (row) => {
  detailDialog.visible = true
  detailDialog.loading = true
  detailDialog.title = row.transactionType === '上架' ? '产品上架存证详情' : '产品订单交易存证详情'
  
  // 模拟API调用
  setTimeout(() => {
    detailData.value = row
    detailDialog.loading = false
  }, 500)
}

// 验证存证真实性
const handleVerifyEvidence = (evidenceNo) => {
  // 模拟验证逻辑，这里简单返回成功
  ElMessage.success('存证验证通过，数据真实有效且未被篡改。')
}
</script>

<style lang="scss" scoped>
.product-transaction-evidence-container {
  min-height: 100%;
  
  // 全局覆盖 element-plus 按钮样式
  :deep(.el-button) {
    [class*=el-icon] + span {
      margin-left: 0;
    }
  }
  
  .search-form-container {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
    
    .search-form {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      
      .el-form-item {
        margin-bottom: 0;
        margin-right: 15px;
      }
      
      /* 最后一个表单项不需要右边距 */
      .el-form-item:last-child {
        margin-right: 0;
      }
      
      .search-buttons {
        display: flex;
        gap: 10px;
      }
      
      /* 确保下拉菜单选项完全显示 */
      :deep(.el-select-dropdown__item) {
        white-space: nowrap;
        padding-right: 20px;
      }
    }
  }
  
  .table-actions {
    display: flex;
    justify-content: center;
    
    .operation-button {
      display: inline-flex;
      align-items: center;
      gap: 0;
      font-size: 14px;
      padding: 0;
      height: auto;
      
      .el-icon {
        font-size: 14px;
        margin-right: 0;
      }
    }
  }
  
  .detail-container {
    .audit-reason {
      margin-left: 10px;
      color: #f56c6c;
    }
  }
  
  .search-button {
    background-color: #3370ff;
    border-color: #3370ff;
    
    &:hover, &:focus {
      background-color: #4380ff;
      border-color: #4380ff;
    }
  }
}

.pagination-container {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style> 