<template>
  <div class="app-container">
    <div class="detail-container">
      <!-- 详情页头部 -->
      <div class="detail-header">
        <div class="title">注销登记审核详情</div>
        <div class="operation-buttons">
          <el-button @click="goBack">
            返回
          </el-button>
          <el-button v-if="detailData.status === 1" type="primary" @click="handleAudit">
            审核
          </el-button>
        </div>
      </div>
      
      <!-- 加载中 -->
      <el-skeleton :loading="loading" animated>
        <template #template>
          <div style="padding: 20px">
            <el-skeleton-item variant="h3" style="width: 50%" />
            <div style="display: flex; margin-top: 20px">
              <div style="margin-right: 20px">
                <el-skeleton-item variant="text" style="width: 100px; margin-top: 12px" />
                <el-skeleton-item variant="text" style="width: 100px; margin-top: 12px" />
                <el-skeleton-item variant="text" style="width: 100px; margin-top: 12px" />
              </div>
              <div>
                <el-skeleton-item variant="text" style="width: 300px; margin-top: 12px" />
                <el-skeleton-item variant="text" style="width: 300px; margin-top: 12px" />
                <el-skeleton-item variant="text" style="width: 300px; margin-top: 12px" />
              </div>
            </div>
          </div>
        </template>
        
        <!-- 详情内容 -->
        <template #default>
          <el-descriptions title="基本信息" :column="2" border>
            <el-descriptions-item label="数据资源名称">{{ detailData.name }}</el-descriptions-item>
            <el-descriptions-item label="数据提供方">{{ detailData.provider }}</el-descriptions-item>
            <el-descriptions-item label="提交人">{{ detailData.submitUser }}</el-descriptions-item>
            <el-descriptions-item label="提交时间">{{ detailData.submitTime }}</el-descriptions-item>
            <el-descriptions-item label="注销原因" :span="2">{{ detailData.cancelReason }}</el-descriptions-item>
            <el-descriptions-item label="审核状态">
              <el-tag v-if="detailData.status === 1" type="warning">待审核</el-tag>
              <el-tag v-else-if="detailData.status === 2" type="success">已通过</el-tag>
              <el-tag v-else-if="detailData.status === 3" type="danger">已拒绝</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="更新时间" v-if="detailData.updateTime">{{ detailData.updateTime }}</el-descriptions-item>
          </el-descriptions>
          
          <el-descriptions v-if="originalData.id" title="原始数据资源信息" :column="2" border class="mt20">
            <el-descriptions-item label="数据资源名称">{{ originalData.name }}</el-descriptions-item>
            <el-descriptions-item label="数据提供方">{{ originalData.provider }}</el-descriptions-item>
            <el-descriptions-item label="所属行业">{{ originalData.industry }}</el-descriptions-item>
            <el-descriptions-item label="数据类型">{{ originalData.dataType }}</el-descriptions-item>
            <el-descriptions-item label="数据类别">{{ originalData.dataCategory }}</el-descriptions-item>
            <el-descriptions-item label="更新频率">{{ originalData.updateFrequency }}</el-descriptions-item>
            <el-descriptions-item label="数据大小">{{ originalData.dataSize }}</el-descriptions-item>
            <el-descriptions-item label="数据描述" :span="2">{{ originalData.dataDescription }}</el-descriptions-item>
          </el-descriptions>
          
          <el-descriptions v-if="certificates.length > 0" title="关联证书信息" :column="1" border class="mt20">
            <el-descriptions-item>
              <el-table :data="certificates" stripe border style="width: 100%">
                <el-table-column prop="certNo" label="证书编号" min-width="180" />
                <el-table-column prop="certName" label="证书名称" min-width="150" />
                <el-table-column prop="issueDate" label="颁发日期" width="150" />
                <el-table-column prop="expireDate" label="到期日期" width="150" />
                <el-table-column prop="status" label="状态" width="100">
                  <template #default="{ row }">
                    <el-tag v-if="row.status === 'valid'" type="success">有效</el-tag>
                    <el-tag v-else-if="row.status === 'expired'" type="danger">已过期</el-tag>
                    <el-tag v-else-if="row.status === 'revoked'" type="info">已撤销</el-tag>
                  </template>
                </el-table-column>
              </el-table>
            </el-descriptions-item>
          </el-descriptions>
          
          <!-- 审核历史记录 -->
          <el-descriptions v-if="reviewHistory.length > 0 && detailData.status !== 1" title="审核历史" :column="1" border class="mt20">
            <el-descriptions-item>
              <el-timeline>
                <el-timeline-item
                  v-for="(item, index) in reviewHistory"
                  :key="index"
                  :timestamp="item.reviewTime"
                  :type="getItemType(item.action)"
                >
                  <h4>{{ item.action }}</h4>
                  <p>审核人: {{ item.reviewer }}</p>
                  <p>审核结果: {{ item.status }}</p>
                  <p>审核意见: {{ item.comments }}</p>
                </el-timeline-item>
              </el-timeline>
            </el-descriptions-item>
          </el-descriptions>
        </template>
      </el-skeleton>
    </div>
    
    <!-- 审核弹窗 -->
    <el-dialog title="注销登记审核" v-model="auditVisible" width="500px" append-to-body>
      <el-form ref="auditFormRef" :model="auditForm" label-width="100px">
        <el-form-item label="数据名称">
          <span>{{ detailData.name }}</span>
        </el-form-item>
        <el-form-item label="数据提供方">
          <span>{{ detailData.provider }}</span>
        </el-form-item>
        <el-form-item label="注销原因">
          <div style="white-space: pre-line;">{{ detailData.cancelReason }}</div>
        </el-form-item>
        <el-form-item label="审核结果" prop="result">
          <el-radio-group v-model="auditForm.result">
            <el-radio label="pass">通过</el-radio>
            <el-radio label="reject">不通过</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="审核意见" prop="remarks" :rules="[{ required: true, message: '请输入审核意见', trigger: 'blur' }]">
          <el-input 
            v-model="auditForm.remarks" 
            type="textarea" 
            placeholder="请输入审核意见" 
            :rows="4"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="auditVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitAudit">确 认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Document } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { getCancelRegistryDetail, getRegistryAuditDetail, auditRegistry } from '@/api/registry-audit'

const route = useRoute()
const router = useRouter()
const loading = ref(true)

// 获取路由参数
const auditId = route.params.id

// 详情数据
const detailData = ref<any>({})
const originalData = ref<any>({})
const certificates = ref<any[]>([])
const reviewHistory = ref<any[]>([])

// 审核相关
const auditVisible = ref(false)
const auditForm = reactive({
  result: 'pass',
  remarks: ''
})
const auditFormRef = ref()

// 获取详情数据
const getDetailData = async () => {
  const id = Number(auditId)
  
  if (!id || isNaN(id) || id <= 0) {
    ElMessage.error('无效的审核ID')
    goBack()
    return
  }
  
  loading.value = true
  
  try {
    // 获取注销登记详情
    const res: any = await getCancelRegistryDetail(id)
    
    if (res.code === 200 && res.data) {
      detailData.value = res.data
      
      // 获取原始数据资源信息
      if (detailData.value.originalId) {
        const originalRes: any = await getRegistryAuditDetail(detailData.value.originalId)
        if (originalRes.code === 200 && originalRes.data) {
          originalData.value = originalRes.data
          
          // 如果有证书信息
          if (originalRes.data.certificates && originalRes.data.certificates.length > 0) {
            certificates.value = originalRes.data.certificates
          } else {
            // 模拟证书数据（实际项目中应从后端获取）
            certificates.value = [
              {
                certNo: `CERT-${detailData.value.originalId}-001`,
                certName: '数据资源登记证书',
                issueDate: '2023-06-15',
                expireDate: '2024-06-14',
                status: detailData.value.status === 2 ? 'revoked' : 'valid'
              }
            ]
          }
        }
      }
      
      // 获取审核记录
      if (res.data.reviewHistory && res.data.reviewHistory.length > 0) {
        reviewHistory.value = res.data.reviewHistory
      } else if (detailData.value.status !== 1) {
        // 非待审核状态才添加默认审核记录
        // 如果已经审核通过或拒绝，添加审核记录
        if (detailData.value.status === 2 || detailData.value.status === 3) {
          reviewHistory.value = [
            {
              reviewer: detailData.value.submitUser || '系统用户',
              reviewTime: detailData.value.submitTime,
              action: '提交注销申请',
              status: '待审核',
              comments: '提交数据资源注销申请'
            },
            {
              reviewer: '数据管理员',
              reviewTime: detailData.value.updateTime || '2023-07-20 15:30:00',
              action: detailData.value.status === 2 ? '审核通过' : '审核拒绝',
              status: detailData.value.status === 2 ? '已通过' : '已拒绝',
              comments: detailData.value.status === 2 ? 
                '符合注销要求，审核通过' : 
                '不符合注销要求，审核拒绝'
            }
          ]
        }
      } else {
        // 待审核状态，清空审核记录
        reviewHistory.value = []
      }
    } else {
      ElMessage.error('获取详情数据失败')
    }
  } catch (error) {
    console.error('获取注销登记详情失败', error)
    ElMessage.error('获取数据失败')
  } finally {
    loading.value = false
  }
}

// 审核操作
const handleAudit = () => {
  auditForm.result = 'pass'
  auditForm.remarks = ''
  auditVisible.value = true
}

// 提交审核
const submitAudit = async () => {
  try {
    await auditFormRef.value.validate()
    
    const params = {
      result: auditForm.result,
      remarks: auditForm.remarks
    }
    
    const res: any = await auditRegistry(Number(auditId), params)
    
    ElMessage.success('审核操作成功')
    auditVisible.value = false
    
    // 刷新详情数据
    getDetailData()
  } catch (error) {
    console.error('审核操作失败', error)
    ElMessage.error('审核操作失败')
  }
}

// 根据审核行为获取图标类型
const getItemType = (action: string) => {
  if (action.includes('通过')) {
    return 'success'
  } else if (action.includes('拒绝')) {
    return 'danger'
  } else {
    return 'primary'
  }
}

// 返回按钮
const goBack = () => {
  router.back()
}

// 页面初始化
onMounted(() => {
  getDetailData()
})
</script>

<style lang="scss" scoped>
.app-container {
  .detail-container {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  
  .detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ebeef5;
    
    .title {
      font-size: 18px;
      font-weight: bold;
      color: #303133;
    }
    
    .operation-buttons {
      display: flex;
      gap: 10px;
    }
  }
  
  .mt20 {
    margin-top: 20px;
  }
  
  :deep(.el-descriptions__body) {
    background-color: #fff;
    
    .el-descriptions__label {
      background-color: #fafafa;
      font-weight: bold;
    }
    
    .el-descriptions__content {
      line-height: 1.6;
      white-space: pre-wrap;
    }
  }
  
  :deep(.el-timeline-item__tail) {
    border-left: 2px solid #e4e7ed;
  }
  
  :deep(.el-timeline-item__node--normal) {
    left: -2px;
  }
  
  :deep(.el-timeline-item__wrapper) {
    padding-left: 20px;
  }
  
  :deep(.el-timeline-item) {
    padding-bottom: 20px;
  }
  
  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
}
</style> 