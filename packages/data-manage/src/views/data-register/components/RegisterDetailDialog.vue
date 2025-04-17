<template>
  <el-dialog
    v-model="dialogVisible"
    title="登记详情"
    width="800px"
    :close-on-click-modal="false"
    @close="handleClose"
  >
    <el-descriptions
      :column="2"
      border
      class="register-detail-descriptions"
    >
      <el-descriptions-item label="登记编号">
        {{ registerData?.registerNo || '暂无' }}
      </el-descriptions-item>
      <el-descriptions-item label="数据资源名称">
        {{ registerData?.resourceName || '暂无' }}
      </el-descriptions-item>
      <el-descriptions-item label="数据类型">
        {{ getDataTypeName(registerData?.dataType) }}
      </el-descriptions-item>
      <el-descriptions-item label="登记状态">
        <el-tag :type="getStatusTagType(registerData?.registerStatus)">
          {{ getStatusName(registerData?.registerStatus) }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="登记时间">
        {{ registerData?.registerTime || '暂无' }}
      </el-descriptions-item>
      <el-descriptions-item label="更新时间">
        {{ registerData?.updateTime || '暂无' }}
      </el-descriptions-item>
      
      <el-descriptions-item label="数据来源" :span="2">
        {{ registerData?.dataSource || '暂无' }}
      </el-descriptions-item>
      
      <el-descriptions-item label="数据量">
        {{ registerData?.dataVolume || '0' }}
      </el-descriptions-item>
      
      <el-descriptions-item label="价格">
        {{ registerData?.price ? `¥${registerData.price.toFixed(2)}` : '¥0.00' }}
      </el-descriptions-item>
      
      <el-descriptions-item label="数据描述" :span="2">
        {{ registerData?.description || '暂无' }}
      </el-descriptions-item>
    </el-descriptions>

    <!-- 数据资源详细信息(根据类型显示不同的内容) -->
    <div class="resource-details">
      <h3>数据资源详细信息</h3>
      
      <el-descriptions :column="1" border>
        <el-descriptions-item label="数据源">
          {{ registerData?.resourceDetails?.dataSourceName || '暂无' }}
        </el-descriptions-item>
        
        <!-- MySQL类型数据 -->
        <template v-if="registerData?.dataType === 'mysql'">
          <el-descriptions-item label="数据表">
            {{ registerData?.resourceDetails?.tableName || '暂无' }}
          </el-descriptions-item>
        </template>
      </el-descriptions>
    </div>

    <!-- 附件列表 -->
    <div class="attachments-list">
      <h3>附件列表</h3>
      <el-table :data="registerData?.attachments || []" border style="width: 100%">
        <el-table-column prop="fileName" label="文件名称" min-width="200" />
        <el-table-column prop="fileType" label="文件类型" width="120" />
        <el-table-column prop="fileSize" label="文件大小" width="120" />
        <el-table-column prop="uploadTime" label="上传时间" width="180" />
        <el-table-column label="操作" width="120" fixed="right">
          <template #default="scope">
            <el-button type="primary" link @click="handleDownload(scope.row)">
              下载
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div v-if="!registerData?.attachments || registerData.attachments.length === 0" class="no-data">
        暂无附件
      </div>
    </div>

    <!-- 审核信息 -->
    <div class="audit-info" v-if="registerData?.auditInfo">
      <h3>审核信息</h3>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="审核状态">
          <el-tag :type="getAuditStatusType(registerData.auditInfo.status)">
            {{ getAuditStatusName(registerData.auditInfo.status) }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="审核人">
          {{ registerData.auditInfo.auditor || '暂无' }}
        </el-descriptions-item>
        <el-descriptions-item label="审核时间">
          {{ registerData.auditInfo.auditTime || '暂无' }}
        </el-descriptions-item>
        <el-descriptions-item label="审核意见">
          {{ registerData.auditInfo.comments || '暂无' }}
        </el-descriptions-item>
      </el-descriptions>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { ElMessage } from 'element-plus'

// 接收传入的props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  registerData: {
    type: Object,
    default: () => null
  }
})

// 触发事件
const emit = defineEmits(['update:modelValue', 'close'])

// 对话框显示状态
const dialogVisible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

// 定义数据类型选项
const dataTypeOptions = [
  { value: 'mysql', label: 'MySQL数据库' },
  { value: 'gaussdb', label: 'GaussDB数据库' },
  { value: 'report', label: '数据报告' },
  { value: 'file', label: '数据文件' },
  { value: 'api', label: 'API接口' }
]

// 定义登记状态选项
const statusOptions = [
  { value: 'initial', label: '初始登记' },
  { value: 'reviewing', label: '审核中' },
  { value: 'registered', label: '已登记' },
  { value: 'changing', label: '变更登记中' },
  { value: 'cancelling', label: '注销登记中' },
  { value: 'cancelled', label: '已注销' }
]

// 审核状态选项
const auditStatusOptions = [
  { value: 'pending', label: '待审核' },
  { value: 'approved', label: '已通过' },
  { value: 'rejected', label: '已拒绝' }
]

// 获取数据类型名称
const getDataTypeName = (type) => {
  const item = dataTypeOptions.find(item => item.value === type)
  return item ? item.label : type || '暂无'
}

// 获取状态名称
const getStatusName = (status) => {
  const item = statusOptions.find(item => item.value === status)
  return item ? item.label : status || '暂无'
}

// 获取状态标签类型
const getStatusTagType = (status) => {
  switch (status) {
    case 'initial':
      return 'info'
    case 'reviewing':
    case 'changing':
    case 'cancelling':
      return 'warning'
    case 'registered':
      return 'success'
    case 'cancelled':
      return 'danger'
    default:
      return 'info'
  }
}

// 获取审核状态名称
const getAuditStatusName = (status) => {
  const item = auditStatusOptions.find(item => item.value === status)
  return item ? item.label : status || '暂无'
}

// 获取审核状态标签类型
const getAuditStatusType = (status) => {
  switch (status) {
    case 'pending':
      return 'info'
    case 'approved':
      return 'success'
    case 'rejected':
      return 'danger'
    default:
      return 'info'
  }
}

// 下载附件
const handleDownload = (file) => {
  // 模拟下载操作
  ElMessage.success(`准备下载文件: ${file.fileName}`)
  // 实际项目中应调用API进行下载
  console.log('下载文件:', file)
}

// 关闭对话框
const handleClose = () => {
  emit('close')
}
</script>

<style scoped lang="scss">
.register-detail-descriptions {
  margin-bottom: 20px;
}

.resource-details, .attachments-list, .audit-info {
  margin-top: 30px;
  margin-bottom: 20px;
  
  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ebeef5;
  }
}

.no-data {
  text-align: center;
  color: #909399;
  padding: 20px 0;
}

.dialog-footer {
  text-align: right;
}
</style> 