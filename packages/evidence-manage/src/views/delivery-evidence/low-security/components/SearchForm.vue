<template>
  <div class="search-form-container">
    <el-form :model="formData" ref="formRef" :inline="true" class="search-form">
      <el-form-item label="产品ID" prop="productId">
        <el-input
          v-model="formData.productId"
          placeholder="请输入产品ID"
          clearable
          @keyup.enter="handleSearch"
        />
      </el-form-item>
      
      <el-form-item label="产品名称" prop="productName">
        <el-input
          v-model="formData.productName"
          placeholder="请输入产品名称"
          clearable
          @keyup.enter="handleSearch"
        />
      </el-form-item>
      
      <el-form-item label="交付状态" prop="deliveryStatus">
        <el-select
          v-model="formData.deliveryStatus"
          placeholder="请选择交付状态"
          clearable
        >
          <el-option label="交付中" value="交付中" />
          <el-option label="已交付" value="已交付" />
          <el-option label="交付异常" value="交付异常" />
        </el-select>
      </el-form-item>
      
      <el-form-item label="交付时间" prop="deliveryTimeRange">
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
        <el-button type="primary" @click="handleSearch">
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
import { exportLowSecurityDeliveryEvidenceList } from '@/api/delivery-evidence'

// 定义组件事件
const emits = defineEmits(['search', 'reset'])

// 表单数据
const formData = reactive({
  productId: '',
  productName: '',
  deliveryStatus: '',
  deliveryTimeStart: '',
  deliveryTimeEnd: ''
})

// 日期范围
const dateRange = ref<[string, string] | null>(null)

// 表单引用
const formRef = ref()

// 处理日期范围变化
const handleDateRangeChange = (val: [string, string] | null) => {
  if (val) {
    formData.deliveryTimeStart = val[0]
    formData.deliveryTimeEnd = val[1]
  } else {
    formData.deliveryTimeStart = ''
    formData.deliveryTimeEnd = ''
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
  formData.deliveryTimeStart = ''
  formData.deliveryTimeEnd = ''
  emits('reset')
}

// 导出
const handleExport = async () => {
  try {
    const blob = await exportLowSecurityDeliveryEvidenceList({ ...formData })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `低安全级别交付存证列表_${new Date().getTime()}.xlsx`
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
  }
  
  :deep(.el-button--primary) {
    background-color: #3370ff;
    border-color: #3370ff;
    
    &:hover,
    &:focus {
      background-color: #5b8bff;
      border-color: #5b8bff;
    }
  }
}
</style> 