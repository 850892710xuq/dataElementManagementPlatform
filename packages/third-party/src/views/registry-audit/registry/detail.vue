<template>
  <div class="app-container">
    <div class="detail-container">
      <!-- 详情页头部 -->
      <div class="detail-header">
        <div class="title">数据登记审核详情</div>
        <div class="operation-buttons">
          <el-button @click="goBack">
            返回
          </el-button>
          <el-button v-if="detail.status === 1" type="primary" @click="handleAudit">
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
            <el-descriptions-item label="数据资源名称">{{ detail.name }}</el-descriptions-item>
            <el-descriptions-item label="数据提供方">{{ detail.provider }}</el-descriptions-item>
            <el-descriptions-item label="提供方联系人">{{ detail.providerContact }}</el-descriptions-item>
            <el-descriptions-item label="联系电话">{{ detail.providerPhone }}</el-descriptions-item>
            <el-descriptions-item label="电子邮箱">{{ detail.providerEmail }}</el-descriptions-item>
            <el-descriptions-item label="所属行业">{{ detail.industry }}</el-descriptions-item>
            <el-descriptions-item label="数据类别">{{ detail.dataCategory }}</el-descriptions-item>
            <el-descriptions-item label="数据类型">{{ detail.dataType }}</el-descriptions-item>
            <el-descriptions-item label="提交时间">{{ detail.submitTime }}</el-descriptions-item>
            <el-descriptions-item label="提交人">{{ detail.submitter }}</el-descriptions-item>
            <el-descriptions-item label="审核状态">
              <el-tag v-if="detail.status === 1" type="warning">待审核</el-tag>
              <el-tag v-else-if="detail.status === 2" type="success">已通过</el-tag>
              <el-tag v-else-if="detail.status === 3" type="danger">已拒绝</el-tag>
            </el-descriptions-item>
          </el-descriptions>
          
          <el-descriptions title="数据详情" :column="1" border class="mt20">
            <el-descriptions-item label="数据描述">{{ detail.dataDescription }}</el-descriptions-item>
            <el-descriptions-item label="数据来源">{{ detail.dataOrigin }}</el-descriptions-item>
            <el-descriptions-item label="数据格式">{{ detail.dataFormat }}</el-descriptions-item>
            <el-descriptions-item label="更新频率">{{ detail.updateFrequency }}</el-descriptions-item>
            <el-descriptions-item label="数据大小">{{ detail.dataSize }}</el-descriptions-item>
            <el-descriptions-item label="使用范围">{{ detail.usageScope }}</el-descriptions-item>
            <el-descriptions-item label="质量级别">{{ detail.qualityLevel }}</el-descriptions-item>
            <el-descriptions-item label="安全级别">{{ detail.securityLevel }}</el-descriptions-item>
            <el-descriptions-item label="是否包含敏感数据">
              {{ detail.hasPrivacyData ? '是' : '否' }}
            </el-descriptions-item>
            <el-descriptions-item label="数据样例">
              <el-link type="primary" :underline="false" :href="detail.sampleData" target="_blank">
                查看数据样例
              </el-link>
            </el-descriptions-item>
          </el-descriptions>
          
          <el-descriptions title="资质证明材料" :column="1" border class="mt20">
            <el-descriptions-item>
              <div class="file-list">
                <div v-for="(file, index) in detail.qualificationFiles" :key="index" class="file-item">
                  <el-icon><Document /></el-icon>
                  <span class="file-name">{{ file.name }}</span>
                  <el-button type="primary" link :href="file.url" target="_blank">
                    查看
                  </el-button>
                </div>
              </div>
            </el-descriptions-item>
          </el-descriptions>
          
          <!-- 审核历史记录 -->
          <el-descriptions v-if="detail.reviewHistory && detail.reviewHistory.length > 0 && detail.status !== 1" title="审核历史" :column="1" border class="mt20">
            <el-descriptions-item>
              <el-timeline>
                <el-timeline-item
                  v-for="(history, index) in detail.reviewHistory"
                  :key="index"
                  :timestamp="history.reviewTime"
                  :type="getHistoryItemType(history.status)"
                >
                  <h4>{{ history.action }}</h4>
                  <p>审核人: {{ history.reviewer }}</p>
                  <p>审核结果: {{ history.status }}</p>
                  <p>审核意见: {{ history.comments }}</p>
                </el-timeline-item>
              </el-timeline>
            </el-descriptions-item>
          </el-descriptions>
        </template>
      </el-skeleton>
    </div>
    
    <!-- 审核弹窗 -->
    <el-dialog title="数据登记审核" v-model="auditVisible" width="500px" append-to-body>
      <el-form ref="auditFormRef" :model="auditForm" label-width="100px">
        <el-form-item label="数据名称">
          <span>{{ detail.name }}</span>
        </el-form-item>
        <el-form-item label="数据提供方">
          <span>{{ detail.provider }}</span>
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
import { Document, Refresh } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { getRegistryAuditDetail, auditRegistry } from '@/api/registry-audit'

// 定义登记审核详情数据接口
interface RegistryAuditDetail {
  id: number;
  name: string;
  provider: string;
  providerContact: string;
  providerPhone: string;
  providerEmail: string;
  industry: string;
  dataCategory: string;
  dataType: string;
  submitTime: string;
  submitter: string;
  status: number;
  statusText?: string;
  dataDescription: string;
  dataOrigin: string;
  dataFormat: string;
  updateFrequency: string;
  dataSize: string;
  usageScope: string;
  qualityLevel: string;
  securityLevel: string;
  hasPrivacyData: boolean;
  sampleData: string;
  qualificationFiles: Array<{
    name: string;
    url: string;
  }>;
  reviewHistory?: Array<{
    reviewer: string;
    reviewTime: string;
    action: string;
    status: string;
    comments: string;
  }>;
}

const route = useRoute()
const router = useRouter()

// 获取路由参数
const auditId = route.params.id

// 详情数据
const detail = ref<RegistryAuditDetail>({} as RegistryAuditDetail)
const loading = ref(true)

// 审核相关
const auditVisible = ref(false)
const auditForm = reactive({
  result: 'pass',   // pass: 通过, reject: 拒绝
  remarks: ''
})
const auditFormRef = ref()

// 返回列表页
const goBack = () => {
  router.back()
}

// 获取详情
const getDetail = async () => {
  loading.value = true
  try {
    const id = Number(auditId)
    console.log('获取审核详情，ID:', id)
    
    if (isNaN(id) || id <= 0) {
      ElMessage.error('无效的审核ID')
      return
    }
    
    const res: any = await getRegistryAuditDetail(id)
    if (res.code === 200 && res.data) {
      detail.value = res.data
      console.log('获取详情成功:', detail.value)
    } else {
      ElMessage.error('获取详情失败: ' + res.message)
    }
  } catch (error) {
    console.error('获取详情失败', error)
    ElMessage.error('获取详情失败')
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

// 根据审核历史状态获取对应的图标类型
const getHistoryItemType = (status: string) => {
  if (status === '已通过') return 'success'
  if (status === '已拒绝') return 'danger'
  return 'primary' // 默认颜色
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
    getDetail()
  } catch (error) {
    console.error('审核操作失败', error)
    ElMessage.error('审核操作失败')
  }
}

// 页面初始化
onMounted(() => {
  getDetail()
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
  
  .file-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    .file-item {
      display: flex;
      align-items: center;
      
      .el-icon {
        margin-right: 5px;
        color: #909399;
      }
      
      .file-name {
        flex: 1;
        margin: 0 10px;
      }
    }
  }
}
</style> 