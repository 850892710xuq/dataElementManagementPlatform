<template>
  <div class="app-container">
    <div class="detail-container">
      <!-- 详情页头部 -->
      <div class="detail-header">
        <div class="title">登记进度查询详情</div>
        <div class="operation-buttons">
          <el-button @click="goBack">
            返回
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
          <!-- 基本信息 -->
          <el-descriptions title="基本信息" :column="2" border>
            <el-descriptions-item label="数据资源名称">{{ detailData.name }}</el-descriptions-item>
            <el-descriptions-item label="数据提供方">{{ detailData.provider }}</el-descriptions-item>
            <el-descriptions-item label="提供方联系人">{{ detailData.providerContact }}</el-descriptions-item>
            <el-descriptions-item label="所属行业">{{ detailData.industry }}</el-descriptions-item>
            <el-descriptions-item label="数据类型">{{ detailData.dataType }}</el-descriptions-item>
            <el-descriptions-item label="提交时间">{{ detailData.submitTime }}</el-descriptions-item>
            <el-descriptions-item label="提交人">{{ detailData.submitter }}</el-descriptions-item>
            <el-descriptions-item label="当前状态">
              <el-tag v-if="detailData.status === 1" type="warning">待审核</el-tag>
              <el-tag v-else-if="detailData.status === 2" type="success">已通过</el-tag>
              <el-tag v-else-if="detailData.status === 3" type="danger">已拒绝</el-tag>
            </el-descriptions-item>
          </el-descriptions>
          
          <!-- 进度时间轴 -->
          <el-descriptions title="登记进度" :column="1" border class="mt20">
            <el-descriptions-item>
              <div class="progress-timeline">
                <el-timeline>
                  <el-timeline-item
                    v-for="(node, index) in detailData.progressNodes"
                    :key="index"
                    :type="node.status === 'error' ? 'danger' : 'primary'"
                    :hollow="node.status === 'wait'"
                    :timestamp="node.time"
                    :icon="getIconByStatus(node.status)"
                    size="large"
                  >
                    <div class="timeline-content">
                      <h4 class="node-title">{{ node.title }}</h4>
                      <p class="node-description">{{ node.description }}</p>
                      <p v-if="node.operator" class="node-operator">操作人: {{ node.operator }}</p>
                    </div>
                  </el-timeline-item>
                </el-timeline>
              </div>
            </el-descriptions-item>
          </el-descriptions>
          
          <!-- 数据资源详情 -->
          <el-descriptions v-if="detailData.dataItems && detailData.dataItems.length > 0" 
                          title="数据资源详情" :column="1" border class="mt20">
            <el-descriptions-item>
              <el-table :data="detailData.dataItems" border stripe style="width: 100%">
                <el-table-column prop="name" label="数据项名称" min-width="180" />
                <el-table-column prop="type" label="数据类型" width="120" align="center" />
                <el-table-column prop="description" label="描述" min-width="200" show-overflow-tooltip />
                <el-table-column prop="format" label="格式" width="120" align="center" />
                <el-table-column prop="updateFrequency" label="更新频率" width="120" align="center" />
              </el-table>
            </el-descriptions-item>
          </el-descriptions>
          
          <!-- 审核记录 -->
          <el-descriptions v-if="detailData.reviewHistory && detailData.reviewHistory.length > 0" 
                          title="审核记录" :column="1" border class="mt20">
            <el-descriptions-item>
              <el-table :data="detailData.reviewHistory" border stripe style="width: 100%">
                <el-table-column prop="reviewer" label="审核人" width="120" />
                <el-table-column prop="reviewTime" label="审核时间" width="180" align="center" />
                <el-table-column prop="action" label="操作" width="120" align="center" />
                <el-table-column prop="status" label="状态" width="120" align="center">
                  <template #default="{ row }">
                    <el-tag 
                      :type="row.status === '已通过' ? 'success' : (row.status === '已拒绝' ? 'danger' : 'warning')"
                    >
                      {{ row.status }}
                    </el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="comments" label="审核意见" min-width="200" show-overflow-tooltip />
              </el-table>
            </el-descriptions-item>
          </el-descriptions>
        </template>
      </el-skeleton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { Document, Refresh, Check, Loading, Close, MoreFilled } from '@element-plus/icons-vue'
import type { Component } from 'vue'
import { getRegistryProgressDetail } from '@/api/registry-audit'

const route = useRoute()
const router = useRouter()

// 详情数据
const detailData = ref({
  id: 0,
  name: '',
  provider: '',
  industry: '',
  dataType: '',
  submitTime: '',
  submitter: '',
  status: 0,
  providerContact: '',
  progressStatus: '',
  progressPercent: 0,
  dataSource: '',
  dataDescription: '',
  dataFormat: '',
  dataOrigin: '',
  usageScope: '',
  updateFrequency: '',
  reviewHistory: [],
  dataItems: [],
  progressNodes: [] as any[]
})

// 加载状态
const loading = ref(true)

// 获取详情数据
const getDetail = async () => {
  loading.value = true
  try {
    const id = route.params.id
    if (!id) {
      ElMessage.error('参数错误')
      return
    }
    
    const res: any = await getRegistryProgressDetail(id)
    detailData.value = res.data
  } catch (error) {
    console.error('获取登记进度详情失败', error)
    ElMessage.error('获取登记进度详情失败')
  } finally {
    loading.value = false
  }
}

// 根据状态返回对应的图标
const getIconByStatus = (status: string): Component => {
  switch (status) {
    case 'success':
      return Check
    case 'process':
      return Loading
    case 'error':
      return Close
    default:
      return MoreFilled
  }
}

// 返回列表
const goBack = () => {
  router.push({ name: 'RegistryProgress' })
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
  
  .progress-timeline {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 4px;
    
    .timeline-content {
      padding: 0 0 16px;
      
      .node-title {
        font-size: 16px;
        margin: 0 0 8px;
        color: #333;
      }
      
      .node-description {
        color: #666;
        margin: 0 0 4px;
      }
      
      .node-operator {
        color: #999;
        font-size: 13px;
        margin: 0;
      }
    }
  }
  
  :deep(.el-descriptions) {
    .el-descriptions__label {
      font-weight: bold;
    }
  }
  
  :deep(.el-timeline-item__node--primary.is-hollow) {
    background-color: #fff;
  }
}
</style> 