<template>
  <div class="app-container">
    <div class="detail-container">
      <!-- 详情页头部 -->
      <div class="detail-header">
        <div class="title">变更登记审核详情</div>
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
            <el-descriptions-item label="变更申请时间">{{ detailData.submitTime }}</el-descriptions-item>
            <el-descriptions-item label="变更类型">{{ detailData.changeType }}</el-descriptions-item>
            <el-descriptions-item label="所属行业">{{ detailData.industry }}</el-descriptions-item>
            <el-descriptions-item label="变更审核状态">
              <el-tag v-if="detailData.status === 1" type="warning">待审核</el-tag>
              <el-tag v-else-if="detailData.status === 2" type="success">已通过</el-tag>
              <el-tag v-else-if="detailData.status === 3" type="danger">已拒绝</el-tag>
            </el-descriptions-item>
          </el-descriptions>
          
          <el-descriptions title="变更内容对比" :column="1" border class="mt20">
            <el-descriptions-item v-for="(item, index) in detailData.changeDetails" :key="index" :label="item.title">
              <div class="compare-content">
                <div class="before">
                  <div class="compare-title">变更前</div>
                  <div class="compare-text">{{ item.before }}</div>
                </div>
                <div class="after">
                  <div class="compare-title">变更后</div>
                  <div class="compare-text">{{ item.after }}</div>
                </div>
              </div>
            </el-descriptions-item>
          </el-descriptions>
          
          <el-descriptions title="变更原因说明" :column="1" border class="mt20">
            <el-descriptions-item>
              <div v-html="detailData.changeReason || '无'"></div>
            </el-descriptions-item>
          </el-descriptions>
          
          <el-descriptions title="资质证明材料" :column="1" border class="mt20">
            <el-descriptions-item>
              <div class="file-list">
                <div v-for="(doc, index) in detailData.documents" :key="index" class="file-item">
                  <el-icon><Document /></el-icon>
                  <span class="file-name">{{ doc.name }}</span>
                  <div class="file-actions">
                    <el-button type="primary" link @click="previewDocument(doc)">预览</el-button>
                    <el-button type="primary" link @click="downloadDocument(doc)">下载</el-button>
                  </div>
                </div>
              </div>
            </el-descriptions-item>
          </el-descriptions>
          
          <!-- 审核历史记录 -->
          <el-descriptions v-if="detailData.auditRecords && detailData.auditRecords.length > 0" title="审核历史" :column="1" border class="mt20">
            <el-descriptions-item>
              <el-timeline>
                <el-timeline-item
                  v-for="(record, index) in detailData.auditRecords"
                  :key="index"
                  :timestamp="record.time"
                  :type="record.result === 'pass' ? 'success' : 'danger'"
                >
                  <h4>{{ record.result === 'pass' ? '审核通过' : '审核拒绝' }}</h4>
                  <p>审核人: {{ record.auditor }}</p>
                  <p>审核意见: {{ record.remarks }}</p>
                </el-timeline-item>
              </el-timeline>
            </el-descriptions-item>
          </el-descriptions>
        </template>
      </el-skeleton>
    </div>
    
    <!-- 审核弹窗 -->
    <el-dialog title="变更登记审核" v-model="auditVisible" width="500px" append-to-body>
      <el-form ref="auditFormRef" :model="auditForm" label-width="100px">
        <el-form-item label="数据名称">
          <span>{{ detailData.name }}</span>
        </el-form-item>
        <el-form-item label="数据提供方">
          <span>{{ detailData.provider }}</span>
        </el-form-item>
        <el-form-item label="变更类型">
          <span>{{ detailData.changeType }}</span>
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
import { ElMessage } from 'element-plus'
import { Document, Refresh } from '@element-plus/icons-vue'
import { getChangeRegistryDetail, auditChangeRegistry } from '@/api/registry-change'

// 定义变更登记详情数据接口
interface ChangeDetail {
  title: string;
  before: string;
  after: string;
}

interface DocumentItem {
  id: string;
  name: string;
  url?: string;
}

interface AuditRecord {
  time: string;
  auditor: string;
  result: string;
  remarks: string;
}

interface ChangeRegistryDetail {
  id: string;
  name: string;
  provider: string;
  industry: string;
  submitTime: string;
  status: number;
  changeType: string;
  changeDetails: ChangeDetail[];
  documents: DocumentItem[];
  changeReason: string;
  auditRecords: AuditRecord[];
}

const route = useRoute()
const router = useRouter()
const id = route.params.id as string

// 详情数据
const detailData = ref<ChangeRegistryDetail>({
  id: '',
  name: '',
  provider: '',
  industry: '',
  submitTime: '',
  status: 1,
  changeType: '',
  changeDetails: [],
  documents: [],
  changeReason: '',
  auditRecords: []
})

// 加载中状态
const loading = ref(false)

// 审核相关
const auditVisible = ref(false)
const auditForm = reactive({
  result: 'pass',
  remarks: ''
})
const auditFormRef = ref()

// 获取详情数据
const getDetail = async () => {
  loading.value = true
  try {
    // 调用API获取变更登记详情
    const res: any = await getChangeRegistryDetail(id)
    detailData.value = res.data
  } catch (error) {
    console.error('获取变更登记详情失败', error)
    // 使用模拟数据
    detailData.value = {
      id: id,
      name: '城市交通运行数据',
      provider: '智慧交通科技有限公司',
      industry: '交通',
      submitTime: '2023-06-10 14:23:45',
      status: 1,
      changeType: '内容变更',
      changeDetails: [
        {
          title: '数据描述',
          before: '此数据资源包含城市公共交通运行的基础数据，覆盖公交、地铁等方式。',
          after: '此数据资源包含城市公共交通运行的基础数据，覆盖公交、地铁、共享单车等多种出行方式。'
        },
        {
          title: '数据格式',
          before: 'JSON',
          after: 'JSON, CSV'
        },
        {
          title: '更新频率',
          before: '每天',
          after: '实时'
        },
        {
          title: '时间覆盖范围',
          before: '2022年1月至今',
          after: '2020年1月至今'
        }
      ],
      documents: [
        { id: '1', name: '数据变更申请表.pdf', url: '#' },
        { id: '2', name: '数据使用授权书更新版.pdf', url: '#' },
        { id: '3', name: '数据结构变更说明.xlsx', url: '#' }
      ],
      changeReason: `<p>原有数据结构和内容已不能满足用户需求，现进行以下更新：</p>
      <p>1. 扩展数据覆盖范围，新增共享单车数据</p>
      <p>2. 增加CSV格式支持，方便用户直接使用Excel等工具分析</p>
      <p>3. 将更新频率从每日更新提升至实时更新，提高数据时效性</p>
      <p>4. 扩展历史数据范围，从2022年扩展至2020年，提供更长时间维度分析</p>`,
      auditRecords: []
    }
  } finally {
    loading.value = false
  }
}

// 返回列表页
const goBack = () => {
  router.push({ name: 'ChangeRegistryList' })
}

// 打开审核弹窗
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
    
    // 调用API提交审核结果
    await auditChangeRegistry(id, params)
    
    ElMessage.success('审核操作成功')
    auditVisible.value = false
    
    // 刷新详情数据，获取最新的状态和审核记录
    getDetail()
  } catch (error) {
    console.error('审核提交失败', error)
    ElMessage.error('审核操作失败')
  }
}

// 预览文档
const previewDocument = (doc: DocumentItem) => {
  ElMessage.info(`正在预览文档: ${doc.name}`)
}

// 下载文档
const downloadDocument = (doc: DocumentItem) => {
  ElMessage.success(`文档 ${doc.name} 开始下载`)
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
  
  .compare-content {
    display: flex;
    width: 100%;
    
    .before, .after {
      flex: 1;
      padding: 10px;
      
      .compare-title {
        font-weight: bold;
        margin-bottom: 8px;
        color: #606266;
      }
      
      .compare-text {
        line-height: 1.6;
      }
    }
    
    .before {
      background-color: #fafafa;
      border-right: 1px solid #ebeef5;
    }
    
    .after {
      background-color: #f0f9eb;
    }
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
      
      .file-actions {
        display: flex;
        gap: 10px;
      }
    }
  }
  
  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
}
</style> 