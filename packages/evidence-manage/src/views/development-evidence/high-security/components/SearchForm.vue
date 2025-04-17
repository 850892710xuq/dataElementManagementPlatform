<template>
  <div class="dev-evidence-search-form">
    <el-form :model="formData" ref="formRef" :inline="true" class="search-form">
      <div class="form-item-wrapper">
        <label class="custom-label">产品ID：</label>
        <el-input
          v-model="formData.id"
          placeholder="请输入产品ID"
          clearable
          @keyup.enter="handleSearch"
        />
      </div>
      
      <div class="form-item-wrapper">
        <label class="custom-label">产品类型：</label>
        <el-select
          v-model="formData.productType"
          placeholder="请选择产品类型"
          clearable
        >
          <el-option label="SaaS产品" value="SaaS产品" />
          <el-option label="API服务" value="API服务" />
          <el-option label="数据应用" value="数据应用" />
          <el-option label="算法模型" value="算法模型" />
        </el-select>
      </div>
      
      <div class="form-item-wrapper">
        <label class="custom-label">安全评级：</label>
        <el-select
          v-model="formData.securityRating"
          placeholder="请选择安全评级"
          clearable
        >
          <el-option label="一级" value="一级" />
          <el-option label="二级" value="二级" />
          <el-option label="三级" value="三级" />
        </el-select>
      </div>
      
      <div class="form-item-wrapper">
        <label class="custom-label">存证时间：</label>
        <el-date-picker
          v-model="dateRange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="YYYY-MM-DD"
          @change="handleDateRangeChange"
        />
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
import { ElMessage } from 'element-plus'
import { Search, Refresh } from '@element-plus/icons-vue'

// 定义组件事件
const emits = defineEmits(['search', 'reset'])

// 表单数据
const formData = reactive({
  id: '',
  productType: '',
  securityRating: '',
  evidenceTimeStart: '',
  evidenceTimeEnd: ''
})

// 日期范围
const dateRange = ref<[string, string] | null>(null)

// 表单引用
const formRef = ref()

// 处理日期范围变化
const handleDateRangeChange = (val: [string, string] | null) => {
  if (val) {
    formData.evidenceTimeStart = val[0]
    formData.evidenceTimeEnd = val[1]
  } else {
    formData.evidenceTimeStart = ''
    formData.evidenceTimeEnd = ''
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
  formData.evidenceTimeStart = ''
  formData.evidenceTimeEnd = ''
  emits('reset')
}
</script>

<style lang="scss" scoped>
.dev-evidence-search-form {
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
    .el-select,
    .el-date-picker {
      width: 200px;
    }
  }
  
  .buttons-wrapper {
    margin-left: 10px;
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