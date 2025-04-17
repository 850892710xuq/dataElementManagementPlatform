<template>
  <div class="search-form-container">
    <el-form :model="formData" ref="formRef" :inline="true" class="search-form">
      <el-form-item label="需求名称" prop="requirementName">
        <el-input
          v-model="formData.requirementName"
          placeholder="请输入需求名称"
          clearable
          @keyup.enter="handleSearch"
        />
      </el-form-item>
      
      <el-form-item label="认领方" prop="claimant">
        <el-input
          v-model="formData.claimant"
          placeholder="请输入认领方"
          clearable
          @keyup.enter="handleSearch"
        />
      </el-form-item>
      
      <el-form-item label="需求状态" prop="requirementStatus">
        <el-select
          v-model="formData.requirementStatus"
          placeholder="请选择需求状态"
          clearable
        >
          <el-option label="已认领" value="已认领" />
          <el-option label="处理中" value="处理中" />
          <el-option label="已完成" value="已完成" />
        </el-select>
      </el-form-item>
      
      <el-form-item label="认领时间" prop="claimTimeRange">
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
import { exportRequirementClaimList } from '@/api/requirement-evidence'

// 定义组件事件
const emits = defineEmits(['search', 'reset'])

// 表单数据
const formData = reactive({
  requirementName: '',
  claimant: '',
  requirementStatus: '',
  claimTimeStart: '',
  claimTimeEnd: ''
})

// 日期范围
const dateRange = ref<[string, string] | null>(null)

// 表单引用
const formRef = ref()

// 处理日期范围变化
const handleDateRangeChange = (val: [string, string] | null) => {
  if (val) {
    formData.claimTimeStart = val[0]
    formData.claimTimeEnd = val[1]
  } else {
    formData.claimTimeStart = ''
    formData.claimTimeEnd = ''
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
  formData.claimTimeStart = ''
  formData.claimTimeEnd = ''
  emits('reset')
}

// 导出
const handleExport = async () => {
  try {
    const blob = await exportRequirementClaimList({ ...formData })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `需求认领存证列表_${new Date().getTime()}.xlsx`
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