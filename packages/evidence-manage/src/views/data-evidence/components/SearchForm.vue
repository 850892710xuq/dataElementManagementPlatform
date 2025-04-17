<template>
  <div class="data-evidence-search-form">
    <el-form :model="formData" ref="formRef" :inline="true" class="search-form">
      <div class="form-item-wrapper">
        <label class="custom-label">数据名称：</label>
        <el-input
          v-model="formData.dataName"
          placeholder="请输入数据名称"
          clearable
          @keyup.enter="handleSearch"
        />
      </div>
      
      <div class="form-item-wrapper">
        <label class="custom-label">所有者：</label>
        <el-input
          v-model="formData.ownerName"
          placeholder="请输入所有者"
          clearable
          @keyup.enter="handleSearch"
        />
      </div>
      
      <div class="form-item-wrapper">
        <label class="custom-label">登记类型：</label>
        <el-select
          v-model="formData.registerType"
          placeholder="请选择登记类型"
          clearable
          class="register-type-select"
        >
          <el-option label="初始登记" value="初始登记" />
          <el-option label="变更登记" value="变更登记" />
          <el-option label="注销登记" value="注销登记" />
        </el-select>
      </div>
      
      <div class="form-item-wrapper">
        <label class="custom-label">审核状态：</label>
        <el-select
          v-model="formData.auditStatus"
          placeholder="请选择审核状态"
          clearable
          class="audit-status-select"
        >
          <el-option label="审核通过" value="审核通过" />
          <el-option label="审核不通过" value="审核不通过" />
        </el-select>
      </div>
      
      <div class="form-item-wrapper buttons-wrapper">
        <el-form-item>
          <el-button type="primary" @click="handleSearch">
            <el-icon><Search /></el-icon>
            搜索
          </el-button>
          <el-button @click="handleReset">
            <el-icon><Refresh /></el-icon>
            重置
          </el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { Search, Refresh, Download } from '@element-plus/icons-vue'

// 定义组件事件
const emits = defineEmits(['search', 'reset'])

// 表单数据
const formData = reactive({
  dataName: '',
  ownerName: '',
  registerType: '',
  auditStatus: ''
})

// 表单引用
const formRef = ref()

// 搜索
const handleSearch = () => {
  emits('search', { ...formData })
}

// 重置
const handleReset = () => {
  formRef.value?.resetFields()
  emits('reset')
}
</script>

<style lang="scss" scoped>
.data-evidence-search-form {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
  
  .search-form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-end;
  }
  
  .form-item-wrapper {
    display: flex;
    align-items: center;
    
    .custom-label {
      width: 80px;
      text-align: right;
      padding-right: 12px;
      color: #606266;
      font-size: 14px;
    }
    
    .el-input,
    .el-select {
      width: 200px;
    }
  }
  
  .buttons-wrapper {
    margin-left: 10px;
  }
  
  .register-type-select,
  .audit-status-select {
    width: 200px;
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