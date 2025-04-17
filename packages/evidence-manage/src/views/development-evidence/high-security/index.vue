<template>
  <div class="high-security-evidence-container">
    <!-- 查询区域 -->
    <el-card class="search-card">
      <el-form :model="queryParams" ref="queryForm" :inline="true" class="search-form">
        <el-form-item label="产品名称" prop="productName">
          <el-input
            v-model="queryParams.productName"
            placeholder="请输入产品名称"
            clearable
            @keyup.enter="handleQuery"
          />
        </el-form-item>
        <el-form-item label="开发团队" prop="developmentTeam">
          <el-input
            v-model="queryParams.developmentTeam"
            placeholder="请输入开发团队"
            clearable
            @keyup.enter="handleQuery"
          />
        </el-form-item>
        <el-form-item label="开发时间" prop="timeRange">
          <el-date-picker
            v-model="timeRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="YYYY-MM-DD"
            @change="handleTimeRangeChange"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery">
            <el-icon><Search /></el-icon>
            查询
          </el-button>
          <el-button @click="resetQuery">
            <el-icon><Refresh /></el-icon>
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 列表区域 -->
    <el-card class="list-card">
      <el-table
        v-loading="loading"
        :data="evidenceList"
        border
        style="width: 100%"
        :header-cell-style="{ background: '#f5f7fa', color: '#303133', fontWeight: 'bold' }"
      >
        <el-table-column prop="productName" label="产品名称" min-width="150" />
        <el-table-column prop="developmentTeam" label="开发团队" min-width="120" />
        <el-table-column prop="startTime" label="开发开始时间" width="160" />
        <el-table-column prop="endTime" label="开发结束时间" width="160" />
        <el-table-column prop="evidenceNo" label="存证编号" width="180" />
        <el-table-column prop="evidenceTime" label="存证时间" width="160" />
        <el-table-column label="操作" width="120" fixed="right">
          <template #default="{ row }">
            <el-button
              type="primary"
              link
              @click="handleViewDetail(row)"
              class="operation-button"
            >
              <el-icon><View /></el-icon>
              <span>查看详情</span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="pagination-container">
        <el-pagination
          v-model:current-page="queryParams.pageNum"
          v-model:page-size="queryParams.pageSize"
          :page-sizes="[10, 20, 50, 100]"
          :total="total"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>

    <!-- 详情弹窗 -->
    <el-dialog
      v-model="dialogVisible"
      title="高密产品开发存证详情"
      width="800px"
      destroy-on-close
    >
      <template v-if="currentEvidence">
        <el-descriptions :column="2" border>
          <el-descriptions-item v-if="currentEvidence.productName" label="产品名称">{{ currentEvidence.productName }}</el-descriptions-item>
          <el-descriptions-item v-if="currentEvidence.developmentTeam" label="开发团队">{{ currentEvidence.developmentTeam }}</el-descriptions-item>
          <el-descriptions-item v-if="currentEvidence.startTime" label="开发开始时间">{{ currentEvidence.startTime }}</el-descriptions-item>
          <el-descriptions-item v-if="currentEvidence.endTime" label="开发结束时间">{{ currentEvidence.endTime }}</el-descriptions-item>
          <el-descriptions-item v-if="currentEvidence.evidenceNo" label="存证编号">{{ currentEvidence.evidenceNo }}</el-descriptions-item>
          <el-descriptions-item v-if="currentEvidence.evidenceTime" label="存证时间">{{ currentEvidence.evidenceTime }}</el-descriptions-item>
          <el-descriptions-item v-if="currentEvidence.technicalArchitecture" label="技术架构" :span="2">{{ currentEvidence.technicalArchitecture }}</el-descriptions-item>
          <el-descriptions-item v-if="currentEvidence.functionalModules && currentEvidence.functionalModules.length > 0" label="功能模块" :span="2">
            <ul>
              <li v-for="(module, index) in currentEvidence.functionalModules" :key="index">
                {{ module }}
              </li>
            </ul>
          </el-descriptions-item>
          <el-descriptions-item v-if="currentEvidence.versions && currentEvidence.versions.length > 0" label="版本信息" :span="2">
            <el-timeline>
              <el-timeline-item
                v-for="(version, index) in currentEvidence.versions"
                :key="index"
                :timestamp="version.updateTime"
                placement="top"
              >
                <h4>版本 {{ version.version }}</h4>
                <p>{{ version.updateContent }}</p>
              </el-timeline-item>
            </el-timeline>
          </el-descriptions-item>
          <el-descriptions-item v-if="currentEvidence.testReports && currentEvidence.testReports.length > 0" label="测试报告" :span="2">
            <el-table :data="currentEvidence.testReports" border style="width: 100%">
              <el-table-column prop="name" label="报告名称" />
              <el-table-column prop="type" label="报告类型" />
              <el-table-column label="操作" width="120">
                <template #default="{ row }">
                  <el-button type="primary" link @click="handleDownloadReport(row)">
                    下载
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-descriptions-item>

          <!-- 高密产品特有信息 -->
          <el-descriptions-item v-if="currentEvidence.securityTechnologies && currentEvidence.securityTechnologies.length > 0" label="安全技术应用" :span="2">
            <el-collapse>
              <el-collapse-item
                v-for="(tech, index) in currentEvidence.securityTechnologies"
                :key="index"
                :title="tech.name"
              >
                <p>{{ tech.description }}</p>
                <ul v-if="tech.securityMeasures && tech.securityMeasures.length > 0">
                  <li v-for="(measure, mIndex) in tech.securityMeasures" :key="mIndex">
                    {{ measure }}
                  </li>
                </ul>
              </el-collapse-item>
            </el-collapse>
          </el-descriptions-item>
          <el-descriptions-item v-if="currentEvidence.dataSources && currentEvidence.dataSources.length > 0" label="数据来源" :span="2">
            <el-table :data="currentEvidence.dataSources" border style="width: 100%">
              <el-table-column prop="name" label="来源名称" />
              <el-table-column prop="description" label="来源说明" />
              <el-table-column prop="legality" label="合法性说明" />
            </el-table>
          </el-descriptions-item>
          <el-descriptions-item v-if="currentEvidence.privacyProtection" label="隐私保护方案" :span="2">
            <p v-if="currentEvidence.privacyProtection.strategy">{{ currentEvidence.privacyProtection.strategy }}</p>
            <ul v-if="currentEvidence.privacyProtection.technicalMeasures && currentEvidence.privacyProtection.technicalMeasures.length > 0">
              <li v-for="(measure, index) in currentEvidence.privacyProtection.technicalMeasures" :key="index">
                {{ measure }}
              </li>
            </ul>
          </el-descriptions-item>
        </el-descriptions>
      </template>
      
      <!-- 添加底部关闭按钮 -->
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">关闭</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import { View, Search, Refresh } from '@element-plus/icons-vue';
import type { FormInstance } from 'element-plus';
import { getEvidenceList, getHighSecurityEvidenceDetail, checkHighSecurityAccess } from '@/api/evidence';
import type { EvidenceQueryParams, HighSecurityEvidence } from '@/types/evidence';

// 查询参数
const queryParams = reactive<EvidenceQueryParams>({
  pageNum: 1,
  pageSize: 10,
  productName: '',
  developmentTeam: '',
  startTime: '',
  endTime: '',
  productType: 'HIGH_SECURITY'
});

// 时间范围
const timeRange = ref<[string, string] | null>(null);

// 列表数据
const loading = ref(false);
const evidenceList = ref<HighSecurityEvidence[]>([]);
const total = ref(0);

// 详情弹窗
const dialogVisible = ref(false);
const currentEvidence = ref<HighSecurityEvidence | null>(null);

// 查询表单
const queryForm = ref<FormInstance>();

// 获取列表数据
const getList = async () => {
  loading.value = true;
  try {
    console.log('高密产品请求参数:', queryParams);
    const res = await getEvidenceList(queryParams);
    console.log('高密产品获取到数据:', res);
    if (res && res.data && Array.isArray(res.data.list)) {
      evidenceList.value = res.data.list;
      total.value = res.data.total;
    } else {
      console.error('高密产品返回数据格式异常:', res);
      evidenceList.value = [];
      total.value = 0;
      ElMessage.warning('数据格式异常，请联系管理员');
    }
  } catch (error) {
    console.error('高密产品获取列表失败:', error);
    evidenceList.value = [];
    total.value = 0;
    ElMessage.error('获取列表失败');
  } finally {
    loading.value = false;
  }
};

// 查询按钮点击
const handleQuery = () => {
  queryParams.pageNum = 1;
  getList();
};

// 重置查询
const resetQuery = () => {
  queryForm.value?.resetFields();
  timeRange.value = null;
  handleQuery();
};

// 时间范围变化
const handleTimeRangeChange = (val: [string, string] | null) => {
  if (val) {
    queryParams.startTime = val[0];
    queryParams.endTime = val[1];
  } else {
    queryParams.startTime = '';
    queryParams.endTime = '';
  }
};

// 查看详情
const handleViewDetail = async (row: HighSecurityEvidence) => {
  try {
    console.log('检查高密产品访问权限:', row.id);
    // 检查是否有权限查看高密产品
    const hasAccess = await checkHighSecurityAccess(row.id);
    console.log('权限检查结果:', hasAccess);
    
    if (!hasAccess.data) {
      ElMessage.error('您没有权限查看高密产品存证详情');
      return;
    }
    
    console.log('获取高密产品详情:', row.id);
    const res = await getHighSecurityEvidenceDetail(row.id);
    console.log('获取到高密产品详情:', res);
    
    if (res && res.data) {
      currentEvidence.value = res.data;
      dialogVisible.value = true;
    } else {
      ElMessage.error('获取详情失败: 数据格式异常');
    }
  } catch (error) {
    console.error('获取高密产品详情失败:', error);
    ElMessage.error('获取详情失败');
  }
};

// 下载测试报告
const handleDownloadReport = (report: any) => {
  window.open(report.fileUrl, '_blank');
};

// 分页大小变化
const handleSizeChange = (val: number) => {
  queryParams.pageSize = val;
  getList();
};

// 页码变化
const handleCurrentChange = (val: number) => {
  queryParams.pageNum = val;
  getList();
};

// 初始化
onMounted(() => {
  getList();
});
</script>

<style lang="scss" scoped>
.high-security-evidence-container {
  .search-card {
    margin-bottom: 20px;

    :deep(.el-form-item) {
      margin-bottom: 0;
    }
    
    .search-form {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
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

  .list-card {
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    :deep(.el-table) {
      th {
        background-color: #f5f7fa;
        color: #303133;
        font-weight: bold;
      }

      .el-table__fixed-right {
        height: 100% !important;
      }
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }

  :deep(.el-descriptions) {
    .el-descriptions__label {
      width: 120px;
    }
  }

  ul {
    margin: 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 5px;
  }

  .operation-button {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 0;
    height: auto;
    
    .el-icon {
      font-size: 14px;
    }
  }

  :deep(.el-button--primary.el-button--link) {
    background-color: transparent;
    border-color: transparent;
    color: #3370ff;
    
    &:hover,
    &:focus {
      background-color: transparent;
      border-color: transparent;
      color: #5b8bff;
    }
  }
  
  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    padding-top: 16px;
  }
}
</style> 