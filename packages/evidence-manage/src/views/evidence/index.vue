<template>
  <div class="evidence-container">
    <!-- 查询区域 -->
    <el-card class="search-card">
      <el-form :model="queryParams" ref="queryForm" :inline="true">
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
          <el-button type="primary" @click="handleQuery">查询</el-button>
          <el-button @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 列表区域 -->
    <el-card class="list-card">
      <template #header>
        <div class="card-header">
          <span>存证列表</span>
        </div>
      </template>
      
      <el-table
        v-loading="loading"
        :data="evidenceList"
        border
        style="width: 100%"
      >
        <el-table-column prop="productName" label="产品名称" min-width="150" />
        <el-table-column prop="developmentTeam" label="开发团队" min-width="120" />
        <el-table-column prop="productType" label="产品类型" width="100">
          <template #default="{ row }">
            <el-tag :type="row.productType === 'HIGH_SECURITY' ? 'danger' : 'success'">
              {{ row.productType === 'HIGH_SECURITY' ? '高密产品' : '低密产品' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="startTime" label="开发开始时间" width="160" />
        <el-table-column prop="endTime" label="开发结束时间" width="160" />
        <el-table-column prop="evidenceNo" label="存证编号" width="180" />
        <el-table-column prop="evidenceTime" label="存证时间" width="160" />
        <el-table-column label="操作" width="100" fixed="right">
          <template #default="{ row }">
            <el-button
              type="primary"
              link
              @click="handleViewDetail(row)"
            >
              查看详情
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
      :title="currentEvidence?.productType === 'HIGH_SECURITY' ? '高密产品开发存证详情' : '低密产品开发存证详情'"
      width="800px"
      destroy-on-close
    >
      <template v-if="currentEvidence">
        <el-descriptions :column="2" border>
          <el-descriptions-item label="产品名称">{{ currentEvidence.productName }}</el-descriptions-item>
          <el-descriptions-item label="开发团队">{{ currentEvidence.developmentTeam }}</el-descriptions-item>
          <el-descriptions-item label="开发开始时间">{{ currentEvidence.startTime }}</el-descriptions-item>
          <el-descriptions-item label="开发结束时间">{{ currentEvidence.endTime }}</el-descriptions-item>
          <el-descriptions-item label="存证编号">{{ currentEvidence.evidenceNo }}</el-descriptions-item>
          <el-descriptions-item label="存证时间">{{ currentEvidence.evidenceTime }}</el-descriptions-item>
          <el-descriptions-item label="技术架构" :span="2">{{ currentEvidence.technicalArchitecture }}</el-descriptions-item>
          <el-descriptions-item label="功能模块" :span="2">
            <ul>
              <li v-for="(module, index) in currentEvidence.functionalModules" :key="index">
                {{ module }}
              </li>
            </ul>
          </el-descriptions-item>
          <el-descriptions-item label="版本信息" :span="2">
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
          <el-descriptions-item label="测试报告" :span="2">
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
          <template v-if="currentEvidence.productType === 'HIGH_SECURITY'">
            <el-descriptions-item label="安全技术应用" :span="2">
              <el-collapse>
                <el-collapse-item
                  v-for="(tech, index) in currentEvidence.securityTechnologies"
                  :key="index"
                  :title="tech.name"
                >
                  <p>{{ tech.description }}</p>
                  <ul>
                    <li v-for="(measure, mIndex) in tech.securityMeasures" :key="mIndex">
                      {{ measure }}
                    </li>
                  </ul>
                </el-collapse-item>
              </el-collapse>
            </el-descriptions-item>
            <el-descriptions-item label="数据来源" :span="2">
              <el-table :data="currentEvidence.dataSources" border style="width: 100%">
                <el-table-column prop="name" label="来源名称" />
                <el-table-column prop="description" label="来源说明" />
                <el-table-column prop="legality" label="合法性说明" />
              </el-table>
            </el-descriptions-item>
            <el-descriptions-item label="隐私保护方案" :span="2">
              <p>{{ currentEvidence.privacyProtection.strategy }}</p>
              <ul>
                <li v-for="(measure, index) in currentEvidence.privacyProtection.technicalMeasures" :key="index">
                  {{ measure }}
                </li>
              </ul>
            </el-descriptions-item>
          </template>
        </el-descriptions>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import type { FormInstance } from 'element-plus';
import { getEvidenceList, getLowSecurityEvidenceDetail, getHighSecurityEvidenceDetail, checkHighSecurityAccess } from '@/api/evidence';
import type { EvidenceQueryParams, LowSecurityEvidence, HighSecurityEvidence } from '@/types/evidence';

// 查询参数
const queryParams = reactive<EvidenceQueryParams>({
  pageNum: 1,
  pageSize: 10,
  productName: '',
  developmentTeam: '',
  startTime: '',
  endTime: ''
});

// 时间范围
const timeRange = ref<[string, string] | null>(null);

// 列表数据
const loading = ref(false);
const evidenceList = ref<(LowSecurityEvidence | HighSecurityEvidence)[]>([]);
const total = ref(0);

// 详情弹窗
const dialogVisible = ref(false);
const currentEvidence = ref<LowSecurityEvidence | HighSecurityEvidence | null>(null);

// 查询表单
const queryForm = ref<FormInstance>();

// 获取列表数据
const getList = async () => {
  loading.value = true;
  try {
    const res = await getEvidenceList(queryParams);
    evidenceList.value = res.data.list;
    total.value = res.data.total;
  } catch (error) {
    console.error('获取列表失败:', error);
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
const handleViewDetail = async (row: LowSecurityEvidence | HighSecurityEvidence) => {
  try {
    if (row.productType === 'HIGH_SECURITY') {
      // 检查是否有权限查看高密产品
      const hasAccess = await checkHighSecurityAccess(row.id);
      if (!hasAccess.data) {
        ElMessage.error('您没有权限查看高密产品存证详情');
        return;
      }
      const res = await getHighSecurityEvidenceDetail(row.id);
      currentEvidence.value = res.data;
    } else {
      const res = await getLowSecurityEvidenceDetail(row.id);
      currentEvidence.value = res.data;
    }
    dialogVisible.value = true;
  } catch (error) {
    console.error('获取详情失败:', error);
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
.evidence-container {
  padding: 20px;

  .search-card {
    margin-bottom: 20px;
  }

  .list-card {
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
}
</style> 