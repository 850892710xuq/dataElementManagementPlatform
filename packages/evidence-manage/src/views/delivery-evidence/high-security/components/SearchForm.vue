<template>
  <div class="search-form-container">
    <el-form :model="formData" ref="formRef" :inline="true" class="search-form">
      <el-form-item label="数据产品名称" prop="dataProductName">
        <el-input
          v-model="formData.dataProductName"
          placeholder="请输入数据产品名称"
          clearable
          @keyup.enter="handleSearch"
        />
      </el-form-item>
      
      <el-form-item label="高密产品类型" prop="highSecurityType">
        <el-select
          v-model="formData.highSecurityType"
          placeholder="请选择产品类型"
          clearable
        >
          <el-option label="联邦学习" value="联邦学习" />
          <el-option label="MPC" value="MPC" />
          <el-option label="安全求交" value="安全求交" />
          <el-option label="匿踪查询" value="匿踪查询" />
        </el-select>
      </el-form-item>
      
      <el-form-item label="调用方" prop="caller">
        <el-input
          v-model="formData.caller"
          placeholder="请输入调用方"
          clearable
          @keyup.enter="handleSearch"
        />
      </el-form-item>
      
      <el-form-item label="调用时间" prop="callTimeRange">
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
import { exportHighSecurityDeliveryList } from '@/api/delivery-evidence'

// 定义组件事件
const emits = defineEmits(['search', 'reset'])

// 表单数据
const formData = reactive({
  dataProductName: '',
  highSecurityType: '',
  caller: '',
  callTimeStart: '',
  callTimeEnd: ''
})

// 日期范围
const dateRange = ref<[string, string] | null>(null)

// 表单引用
const formRef = ref()

// 处理日期范围变化
const handleDateRangeChange = (val: [string, string] | null) => {
  if (val) {
    formData.callTimeStart = val[0]
    formData.callTimeEnd = val[1]
  } else {
    formData.callTimeStart = ''
    formData.callTimeEnd = ''
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
  formData.callTimeStart = ''
  formData.callTimeEnd = ''
  emits('reset')
}

// 导出
const handleExport = async () => {
  try {
    const blob = await exportHighSecurityDeliveryList({ ...formData })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `高密交付存证列表_${new Date().getTime()}.xlsx`
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