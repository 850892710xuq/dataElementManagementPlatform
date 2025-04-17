<template>
  <div class="low-security-delivery-evidence-container">
    <!-- 搜索表单 -->
    <div class="search-form-container">
      <el-form :model="queryForm" ref="formRef" :inline="true" class="search-form">
        <el-form-item label="数据产品名称" prop="productName">
          <el-input
            v-model="queryForm.productName"
            placeholder="请输入数据产品名称"
            clearable
            @keyup.enter="handleSearch"
          />
        </el-form-item>
        
        <el-form-item label="交付类型" prop="deliveryType">
          <el-select
            v-model="queryForm.deliveryType"
            placeholder="请选择交付类型"
            clearable
            style="width: 150px;"
          >
            <el-option label="数据集" value="数据集" />
            <el-option label="数据报告" value="数据报告" />
            <el-option label="文件" value="文件" />
          </el-select>
        </el-form-item>
        
        <el-form-item label="存证时间" prop="evidenceTimeRange">
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
          <el-table-column prop="productName" label="数据产品名称" min-width="180" show-overflow-tooltip />
          <el-table-column prop="deliveryType" label="交付类型" width="120" show-overflow-tooltip />
          <el-table-column prop="deliveryTime" label="交付时间" min-width="170" show-overflow-tooltip />
          <el-table-column prop="evidenceNo" label="存证编号" min-width="180" show-overflow-tooltip />
          <el-table-column prop="evidenceTime" label="存证时间" min-width="170" show-overflow-tooltip />
          <el-table-column label="操作" width="120" fixed="right">
            <template #default="{ row }">
              <div class="table-actions">
                <el-button
                  type="primary"
                  link
                  @click="handleViewDetail(row)"
                  class="operation-button"
                >
                  <el-icon><View /></el-icon>
                  <span>查看详情</span>
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
      title="低密数据交付详情"
      width="60%"
      destroy-on-close
    >
      <div v-loading="detailDialog.loading" class="detail-container" v-if="detailData">
        <el-descriptions :column="2" border>
          <el-descriptions-item label="数据产品名称">{{ detailData.productName }}</el-descriptions-item>
          <el-descriptions-item label="交付类型">{{ detailData.deliveryType }}</el-descriptions-item>
          <el-descriptions-item label="交付时间">{{ detailData.deliveryTime }}</el-descriptions-item>
          <el-descriptions-item label="存证编号">{{ detailData.evidenceNo }}</el-descriptions-item>
          <el-descriptions-item label="存证时间">{{ detailData.evidenceTime }}</el-descriptions-item>
          <el-descriptions-item label="数据接收方">{{ detailData.recipient }}</el-descriptions-item>
          <el-descriptions-item label="数据交付方式">{{ detailData.deliveryMethod }}</el-descriptions-item>
          <el-descriptions-item label="数据大小">{{ detailData.dataSize }}</el-descriptions-item>
        </el-descriptions>
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
    productName: '金融行业客户画像数据',
    deliveryType: '数据集',
    deliveryTime: '2023-06-15 10:30:25',
    downloadTime: '2023-06-15 14:22:36',
    evidenceNo: 'DEV-20230615-001',
    evidenceTime: '2023-06-15 10:35:18',
    recipient: '银联金融科技有限公司',
    recipientId: 'ORG-10023',
    deliveryMethod: '在线传输',
    dataSize: '2.5GB'
  },
  {
    id: '2',
    productName: '消费者行为分析报告',
    deliveryType: '数据报告',
    deliveryTime: '2023-07-20 14:20:15',
    downloadTime: '2023-07-20 16:45:22',
    evidenceNo: 'DEV-20230720-002',
    evidenceTime: '2023-07-20 14:25:10',
    recipient: '零售数据分析研究所',
    recipientId: 'ORG-10045',
    deliveryMethod: '在线传输',
    dataSize: '15MB'
  },
  {
    id: '3',
    productName: '医疗健康数据集',
    deliveryType: '数据集',
    deliveryTime: '2023-08-05 09:10:35',
    downloadTime: null,
    evidenceNo: 'DEV-20230805-003',
    evidenceTime: '2023-08-05 09:15:42',
    recipient: '医疗大数据研究中心',
    recipientId: 'ORG-20078',
    deliveryMethod: '离线存储介质交付',
    dataSize: '4.2GB'
  },
  {
    id: '4',
    productName: '人口普查匿名化数据',
    deliveryType: '文件',
    deliveryTime: '2023-09-12 11:45:20',
    downloadTime: '2023-09-12 13:30:15',
    evidenceNo: 'DEV-20230912-004',
    evidenceTime: '2023-09-12 11:50:08',
    recipient: '城市规划研究院',
    recipientId: 'ORG-30056',
    deliveryMethod: '在线传输',
    dataSize: '1.8GB'
  }
]

// 查询表单
const queryForm = reactive({
  productName: '',
  deliveryType: '',
  evidenceTimeStart: '',
  evidenceTimeEnd: ''
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
  loading: false
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
    queryForm.evidenceTimeStart = val[0]
    queryForm.evidenceTimeEnd = val[1]
  } else {
    queryForm.evidenceTimeStart = ''
    queryForm.evidenceTimeEnd = ''
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
      
      if (queryForm.deliveryType) {
        filteredData = filteredData.filter(item => 
          item.deliveryType === queryForm.deliveryType
        )
      }
      
      if (queryForm.evidenceTimeStart && queryForm.evidenceTimeEnd) {
        filteredData = filteredData.filter(item => {
          const time = new Date(item.evidenceTime).getTime()
          const start = new Date(queryForm.evidenceTimeStart).getTime()
          const end = new Date(queryForm.evidenceTimeEnd).getTime()
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
  
  // 模拟API调用
  setTimeout(() => {
    detailData.value = row
    detailDialog.loading = false
  }, 500)
}
</script>

<style lang="scss" scoped>
.low-security-delivery-evidence-container {
  min-height: 100%;
  
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
    }
    
    .search-button {
      background-color: #3370ff;
      border-color: #3370ff;
      
      &:hover, &:focus {
        background-color: #5b8bff;
        border-color: #5b8bff;
      }
    }
  }
  
  .card-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
    
    .table-container {
      margin-bottom: 20px;
    }
    
    .table-actions {
      display: flex;
      justify-content: center;
      
      .operation-button {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 14px;
      }
    }
  }
  
  .pagination-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  
  .detail-container {
    padding: 10px;
  }
}
</style> 