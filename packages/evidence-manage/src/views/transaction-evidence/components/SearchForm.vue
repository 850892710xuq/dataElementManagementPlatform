<template>
  <div class="search-form-container">
    <el-form :model="formData" ref="formRef" :inline="true" class="search-form">
      <el-form-item label="产品名称" prop="productName">
        <el-input
          v-model="formData.productName"
          placeholder="请输入产品名称"
          clearable
          @keyup.enter="handleSearch"
        />
      </el-form-item>
      
      <el-form-item label="交易类型" prop="transactionType">
        <el-select
          v-model="formData.transactionType"
          placeholder="请选择交易类型"
          clearable
        >
          <el-option label="上架" value="上架" />
          <el-option label="订单交易" value="订单交易" />
        </el-select>
      </el-form-item>
      
      <el-form-item label="交易状态" prop="transactionStatus">
        <el-select
          v-model="formData.transactionStatus"
          placeholder="请选择交易状态"
          clearable
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
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="YYYY-MM-DD"
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
        <el-button type="success" @click="handleExport">
          <el-icon><Download /></el-icon>
          导出
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { Search, Refresh, Download } from '@element-plus/icons-vue'
import { exportTransactionEvidenceList } from '@/api/transaction-evidence'

// 定义组件事件
const emits = defineEmits(['search', 'reset'])

// 表单数据
const formData = reactive({
  productName: '',
  transactionType: '',
  transactionStatus: '',
  transactionTimeStart: '',
  transactionTimeEnd: ''
})

// 日期范围
const dateRange = ref<[string, string] | null>(null)

// 表单引用
const formRef = ref()

// 处理日期范围变化
const handleDateRangeChange = (val: [string, string] | null) => {
  if (val) {
    formData.transactionTimeStart = val[0]
    formData.transactionTimeEnd = val[1]
  } else {
    formData.transactionTimeStart = ''
    formData.transactionTimeEnd = ''
  }
}

// 搜索
const handleSearch = () => {
  emits('search', { ...formData })
}

// 重置
const handleReset = () => {
  formRef.value?.resetFields()
  dateRange.value = null
  formData.transactionTimeStart = ''
  formData.transactionTimeEnd = ''
  emits('reset')
}

// 导出
const handleExport = async () => {
  try {
    const blob = await exportTransactionEvidenceList({ ...formData })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `产品交易存证列表_${new Date().getTime()}.xlsx`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    ElMessage.success('导出成功')
  } catch (error) {
    console.error('导出失败', error)
    ElMessage.error('导出失败')
  }
}
</script>

<style lang="scss" scoped>
.search-form-container {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
  
  .search-form {
    display: flex;
    flex-wrap: wrap;
    
    .el-form-item {
      margin-bottom: 10px;
      margin-right: 15px;
    }
    
    .search-buttons {
      display: flex;
      gap: 10px;
    }
  }
}
</style> 