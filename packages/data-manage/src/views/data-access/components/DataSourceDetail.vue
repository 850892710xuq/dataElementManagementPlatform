<template>
  <div class="data-source-detail">
    <el-descriptions :column="2" border>
      <el-descriptions-item label="数据源名称">
        {{ data.name }}
      </el-descriptions-item>
      <el-descriptions-item label="数据源类型">
        {{ getDataSourceTypeLabel(data.type) }}
      </el-descriptions-item>
      <el-descriptions-item label="敏感级别">
        <el-tag :type="getSensitivityLevelType(data.sensitivityLevel)">
          {{ getSensitivityLevelLabel(data.sensitivityLevel) }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="创建时间">
        {{ data.createTime }}
      </el-descriptions-item>
      <el-descriptions-item label="创建人">
        {{ data.creator }}
      </el-descriptions-item>
      <el-descriptions-item label="状态">
        <el-tag :type="data.status === 'active' ? 'success' : 'danger'">
          {{ data.status === 'active' ? '正常' : '异常' }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="描述" :span="2">
        {{ data.description || '暂无描述' }}
      </el-descriptions-item>
    </el-descriptions>

    <!-- MySQL配置详情 -->
    <template v-if="data.type === DataSourceType.MYSQL">
      <div class="config-title">MySQL配置信息</div>
      <el-descriptions :column="2" border>
        <el-descriptions-item label="服务器地址">
          {{ data.config?.host }}
        </el-descriptions-item>
        <el-descriptions-item label="端口号">
          {{ data.config?.port }}
        </el-descriptions-item>
        <el-descriptions-item label="用户名">
          {{ data.config?.username }}
        </el-descriptions-item>
        <el-descriptions-item label="数据库名">
          {{ data.config?.database }}
        </el-descriptions-item>
      </el-descriptions>
    </template>

    <!-- GaussDB配置详情 -->
    <template v-if="data.type === DataSourceType.GAUSSDB">
      <div class="config-title">GaussDB配置信息</div>
      <el-descriptions :column="2" border>
        <el-descriptions-item label="服务器地址">
          {{ data.config?.host }}
        </el-descriptions-item>
        <el-descriptions-item label="端口号">
          {{ data.config?.port }}
        </el-descriptions-item>
        <el-descriptions-item label="用户名">
          {{ data.config?.username }}
        </el-descriptions-item>
        <el-descriptions-item label="数据库名">
          {{ data.config?.database }}
        </el-descriptions-item>
        <el-descriptions-item label="集群信息" :span="2">
          {{ data.config?.cluster || '无' }}
        </el-descriptions-item>
      </el-descriptions>
    </template>

    <!-- 数据报告配置详情 -->
    <template v-if="data.type === DataSourceType.REPORT">
      <div class="config-title">数据报告配置信息</div>
      <el-descriptions :column="2" border>
        <el-descriptions-item label="报告名称">
          {{ data.config?.reportName }}
        </el-descriptions-item>
        <el-descriptions-item label="报告格式">
          {{ data.config?.reportFormat?.toUpperCase() }}
        </el-descriptions-item>
        <el-descriptions-item label="使用限制" :span="2">
          {{ data.config?.useLimit || '无' }}
        </el-descriptions-item>
      </el-descriptions>
      <div class="file-list">
        <div class="file-list-title">文件列表</div>
        <el-table :data="data.config?.fileList" border>
          <el-table-column prop="name" label="文件名称" />
          <el-table-column label="操作" width="120">
            <template #default="{ row }">
              <el-button type="primary" link @click="downloadFile(row)">
                下载
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </template>

    <!-- 数据文件配置详情 -->
    <template v-if="data.type === DataSourceType.FILE">
      <div class="config-title">数据文件配置信息</div>
      <el-descriptions :column="2" border>
        <el-descriptions-item label="文件名称">
          {{ data.config?.fileName }}
        </el-descriptions-item>
        <el-descriptions-item label="文件格式">
          {{ data.config?.fileFormat?.toUpperCase() }}
        </el-descriptions-item>
        <el-descriptions-item label="特征数量">
          {{ data.config?.featureCount }}
        </el-descriptions-item>
      </el-descriptions>
      <div class="feature-list" v-if="data.config?.featureInfo?.length">
        <div class="feature-list-title">特征信息</div>
        <el-table :data="data.config.featureInfo" border>
          <el-table-column prop="name" label="特征名称" />
          <el-table-column prop="type" label="特征类型">
            <template #default="{ row }">
              {{ getFeatureTypeLabel(row.type) }}
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="file-list">
        <div class="file-list-title">文件列表</div>
        <el-table :data="data.config?.fileList" border>
          <el-table-column prop="name" label="文件名称" />
          <el-table-column label="操作" width="120">
            <template #default="{ row }">
              <el-button type="primary" link @click="downloadFile(row)">
                下载
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </template>

    <!-- API配置详情 -->
    <template v-if="data.type === DataSourceType.API">
      <div class="config-title">API配置信息</div>
      <el-descriptions :column="2" border>
        <el-descriptions-item label="API地址">
          {{ data.config?.apiUrl }}
        </el-descriptions-item>
        <el-descriptions-item label="请求方式">
          {{ data.config?.method }}
        </el-descriptions-item>
      </el-descriptions>
      
      <div class="param-list" v-if="data.config?.params?.length">
        <div class="param-list-title">请求参数</div>
        <el-table :data="data.config.params" border>
          <el-table-column prop="name" label="参数名称" />
          <el-table-column prop="type" label="参数类型" />
          <el-table-column prop="required" label="是否必填">
            <template #default="{ row }">
              {{ row.required ? '是' : '否' }}
            </template>
          </el-table-column>
          <el-table-column prop="description" label="说明" />
        </el-table>
      </div>

      <div class="param-list" v-if="data.config?.response?.length">
        <div class="param-list-title">返回参数</div>
        <el-table :data="data.config.response" border>
          <el-table-column prop="name" label="参数名称" />
          <el-table-column prop="type" label="参数类型" />
          <el-table-column prop="description" label="说明" />
        </el-table>
      </div>

      <div class="code-example" v-if="data.config?.requestExample">
        <div class="code-title">请求示例</div>
        <el-input
          type="textarea"
          v-model="data.config.requestExample"
          :rows="4"
          readonly
        />
      </div>

      <div class="code-example" v-if="data.config?.responseExample">
        <div class="code-title">返回示例</div>
        <el-input
          type="textarea"
          v-model="data.config.responseExample"
          :rows="4"
          readonly
        />
      </div>
    </template>

    <div class="footer">
      <el-button @click="$emit('close')">关闭</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DataSourceType, type DataSource } from '@/api/data-access'
import { ElMessage } from 'element-plus'

const props = defineProps<{
  data: Partial<DataSource>
}>()

defineEmits<{
  (e: 'close'): void
}>()

// 数据源类型选项
const dataSourceTypeOptions = [
  { label: 'MySQL', value: DataSourceType.MYSQL },
  { label: 'GaussDB', value: DataSourceType.GAUSSDB },
  { label: '数据报告', value: DataSourceType.REPORT },
  { label: '数据文件', value: DataSourceType.FILE },
  { label: 'API接口', value: DataSourceType.API }
]

// 敏感级别选项
const sensitivityLevelOptions = [
  { label: '公开', value: 'public' },
  { label: '内部', value: 'internal' },
  { label: '保密', value: 'confidential' },
  { label: '高度保密', value: 'strictly_confidential' }
]

// 获取数据源类型标签
const getDataSourceTypeLabel = (type: DataSourceType) => {
  return dataSourceTypeOptions.find(item => item.value === type)?.label || type
}

// 获取敏感级别标签
const getSensitivityLevelLabel = (level: string) => {
  return sensitivityLevelOptions.find(item => item.value === level)?.label || '公开'
}

// 获取敏感级别标签类型
const getSensitivityLevelType = (level: string) => {
  switch (level) {
    case 'public':
      return 'success'
    case 'internal':
      return 'info'
    case 'confidential':
      return 'warning'
    case 'strictly_confidential':
      return 'danger'
    default:
      return 'success'
  }
}

// 特征类型标签映射
const featureTypeMap = {
  string: '字符串',
  number: '数值',
  date: '日期'
}

// 获取特征类型标签
const getFeatureTypeLabel = (type: string) => {
  return featureTypeMap[type as keyof typeof featureTypeMap] || type
}

// 下载文件
const downloadFile = (file: { name: string; url: string }) => {
  // 这里需要根据实际情况实现文件下载逻辑
  console.log('下载文件:', file)
  ElMessage.success('开始下载文件')
}
</script>

<style lang="scss" scoped>
.data-source-detail {
  .config-title {
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0 10px;
    padding-left: 10px;
    border-left: 4px solid #409EFF;
  }

  .file-list,
  .feature-list,
  .param-list {
    margin-top: 20px;

    &-title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }

  .code-example {
    margin-top: 20px;

    .code-title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }

  .footer {
    margin-top: 20px;
    text-align: right;
  }
}
</style> 