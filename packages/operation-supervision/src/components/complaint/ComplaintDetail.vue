<template>
  <div class="complaint-detail">
    <el-descriptions
      class="complaint-info"
      :column="2"
      border
    >
      <el-descriptions-item label="投诉编号">{{ complaint.id }}</el-descriptions-item>
      <el-descriptions-item label="投诉状态">
        <el-tag :type="getStatusType(complaint.status)">
          {{ getStatusName(complaint.status) }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="投诉人">{{ complaint.complainant }}</el-descriptions-item>
      <el-descriptions-item label="联系方式">{{ complaint.contactInfo }}</el-descriptions-item>
      <el-descriptions-item label="投诉标题">{{ complaint.title }}</el-descriptions-item>
      <el-descriptions-item label="投诉时间">{{ complaint.createTime }}</el-descriptions-item>
      <el-descriptions-item label="投诉内容" :span="2">
        <div class="content-text">{{ complaint.content }}</div>
      </el-descriptions-item>
      <el-descriptions-item v-if="complaint.attachments && complaint.attachments.length > 0" label="附件" :span="2">
        <div class="attachments-list">
          <div v-for="(item, index) in complaint.attachments" :key="index" class="attachment-item">
            <el-link type="primary" :underline="false">
              <el-icon><Document /></el-icon>
              <span>{{ item }}</span>
            </el-link>
          </div>
        </div>
      </el-descriptions-item>
    </el-descriptions>

    <div v-if="complaint.status === 'completed' || complaint.status === 'closed'" class="reply-section">
      <div class="reply-title">处理结果</div>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="处理时间">{{ complaint.replyTime || '-' }}</el-descriptions-item>
        <el-descriptions-item label="处理说明">
          <div class="content-text">{{ complaint.replyContent || '暂无处理说明' }}</div>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Document } from '@element-plus/icons-vue';
import { PropType } from 'vue';
import { ComplaintRecord } from '@/api/complaint';

// 组件属性定义
const props = defineProps({
  complaint: {
    type: Object as PropType<ComplaintRecord>,
    required: true
  }
});

// 获取状态标签样式
const getStatusType = (status: string) => {
  const statusMap: Record<string, string> = {
    pending: 'warning',
    processing: 'primary',
    completed: 'success',
    closed: 'info'
  }
  return statusMap[status] || 'info'
}

// 获取状态名称
const getStatusName = (status: string) => {
  const statusMap: Record<string, string> = {
    pending: '待处理',
    processing: '处理中',
    completed: '已完成',
    closed: '已关闭'
  }
  return statusMap[status] || '未知'
}
</script>

<style lang="scss" scoped>
.complaint-detail {
  .complaint-info {
    margin-bottom: 20px;
  }

  .content-text {
    white-space: pre-line;
    line-height: 1.6;
    color: #303133;
    padding: 10px 0;
  }

  .reply-section {
    margin-top: 30px;

    .reply-title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 15px;
      color: #303133;
      position: relative;
      padding-left: 12px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 16px;
        background-color: #3370ff;
        border-radius: 2px;
      }
    }
  }

  .attachments-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .attachment-item {
      .el-link {
        display: flex;
        align-items: center;
        gap: 5px;

        .el-icon {
          font-size: 16px;
        }
      }
    }
  }
}
</style> 