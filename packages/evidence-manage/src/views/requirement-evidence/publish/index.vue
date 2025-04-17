<template>
  <div class="requirement-publish-evidence-container">
    <!-- 搜索表单 -->
    <div class="search-form-container">
      <el-form :model="queryForm" ref="formRef" :inline="true" class="search-form">
        <el-form-item label="需求方名称" prop="requesterName">
          <el-input
            v-model="queryForm.requesterName"
            placeholder="请输入需求方名称"
            clearable
            @keyup.enter="handleSearch"
          />
        </el-form-item>
        
        <el-form-item label="上架时间" prop="publishTimeRange">
          <el-date-picker
            v-model="dateRange"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="YYYY-MM-DD HH:mm:ss"
            @change="handleDateRangeChange"
          />
        </el-form-item>
        
        <el-form-item label="审核状态" prop="auditStatus">
          <el-select
            v-model="queryForm.auditStatus"
            placeholder="请选择审核状态"
            clearable
            style="width: 150px;"
          >
            <el-option label="通过" value="通过" />
            <el-option label="不通过" value="不通过" />
            <el-option label="待审核" value="待审核" />
          </el-select>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="handleSearch" class="search-button">
            <el-icon><Search /></el-icon>
            搜索
          </el-button>
          <el-button @click="handleReset">
            <el-icon><Refresh /></el-icon>
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    
    <!-- 数据列表 -->
    <div class="card-container">
      <div class="table-container">
        <el-table
          v-loading="loading"
          :data="tableData"
          border
          style="width: 100%"
          :header-cell-style="{ background: '#f5f7fa', color: '#606266' }"
        >
          <el-table-column prop="demander" label="需求方" min-width="150" show-overflow-tooltip>
            <template #default="{ row }">
              <span>{{ row.demander }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="publishTime" label="上架时间" min-width="170" show-overflow-tooltip />
          <el-table-column prop="requirementInfo" label="需求定制信息" min-width="200">
            <template #default="{ row }">
              <el-tooltip class="box-item" effect="dark" :content="row.requirementInfo" placement="top" :show-after="100" :enterable="false">
                <div class="ellipsis-text">{{ row.requirementInfo }}</div>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column prop="publishApplyTime" label="上架申请时间" min-width="150" show-overflow-tooltip />
          <el-table-column prop="publishAuditTime" label="上架审核时间" min-width="150" show-overflow-tooltip />
          <el-table-column prop="auditor" label="审核人员" min-width="120" show-overflow-tooltip />
          <el-table-column label="审核意见" width="180" show-overflow-tooltip>
            <template #default="{ row }">
              <div class="audit-opinion">
                <el-tag :type="getAuditType(row.auditOpinion)">
                  {{ row.auditOpinion }}
                </el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="evidenceNo" label="存证编号" min-width="180" show-overflow-tooltip />
          <el-table-column prop="evidenceTime" label="存证时间" min-width="150" show-overflow-tooltip />
          <el-table-column label="操作" width="120" fixed="right">
            <template #default="{ row }">
              <div class="table-actions">
                <el-button
                  type="primary"
                  link
                  class="operation-button"
                  @click="handleViewDetail(row)"
                >
                  <el-icon><View /></el-icon>
                  <span>查看详情</span>
                </el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      
      <!-- 分页控件 -->
      <div class="pagination-container">
        <el-pagination
          v-model:currentPage="queryParams.pageNum"
          v-model:page-size="queryParams.pageSize"
          :page-sizes="[10, 20, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    
    <!-- 详情对话框 -->
    <el-dialog
      v-model="detailDialog.visible"
      title="需求定制上架存证详情"
      width="70%"
      destroy-on-close
    >
      <div v-loading="detailDialog.loading" class="detail-container" v-if="detailData">
        <el-descriptions :column="2" border>
          <el-descriptions-item label="需求方">{{ detailData.demander }}</el-descriptions-item>
          <el-descriptions-item label="上架时间">{{ detailData.publishTime }}</el-descriptions-item>
          <el-descriptions-item label="上架申请时间">{{ detailData.publishApplyTime }}</el-descriptions-item>
          <el-descriptions-item label="上架审核时间">{{ detailData.publishAuditTime }}</el-descriptions-item>
          <el-descriptions-item label="审核人员">{{ detailData.auditor }}</el-descriptions-item>
          <el-descriptions-item label="审核意见">
            <el-tag :type="getAuditType(detailData.auditOpinion)">
              {{ detailData.auditOpinion }}
            </el-tag>
            <span v-if="detailData.auditReason" class="audit-reason">
              原因：{{ detailData.auditReason }}
            </span>
          </el-descriptions-item>
          <el-descriptions-item label="需求定制信息" :span="2">
            <div class="detail-text">{{ detailData.requirementInfo }}</div>
          </el-descriptions-item>
          <el-descriptions-item label="存证编号">{{ detailData.evidenceNo }}</el-descriptions-item>
          <el-descriptions-item label="存证时间">{{ detailData.evidenceTime }}</el-descriptions-item>
        </el-descriptions>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="detailDialog.visible = false">关闭</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Search, Refresh, View, InfoFilled } from '@element-plus/icons-vue'
import { getRequirementPublishEvidenceList, getRequirementPublishEvidenceDetail } from '@/api/evidence'
// 导入模拟数据用于开发测试
import { requirementPublishEvidenceList } from '@/mock/evidence'

// 查询表单对象
const queryForm = reactive({
  requesterName: '',
  auditStatus: '',
  publishStartTime: '',
  publishEndTime: ''
})

// 日期范围
const dateRange = ref<[string, string] | null>(null)

// 处理日期范围变化
const handleDateRangeChange = (val: [string, string] | null) => {
  if (val) {
    queryForm.publishStartTime = val[0]
    queryForm.publishEndTime = val[1]
  } else {
    queryForm.publishStartTime = ''
    queryForm.publishEndTime = ''
  }
}

// 查询参数
const queryParams = reactive({
  pageNum: 1,
  pageSize: 10,
  ...queryForm
})

// 表格数据
const tableData = ref([])
const total = ref(0)
const loading = ref(false)

// 获取审核状态类型
const getAuditType = (status: string) => {
  if (status === '通过') return 'success'
  if (status === '不通过') return 'danger'
  return 'info'
}

// 详情对话框
const detailDialog = reactive({
  visible: false,
  loading: false,
  title: '需求定制上架存证详情'
})
const detailData = ref(null)

// 获取列表数据
const getList = async () => {
  loading.value = true
  try {
    // 打印当前请求信息，帮助调试
    console.log('准备请求需求定制上架存证列表数据，参数:', queryParams);
    console.log('当前API基础路径配置:', '/api');
    console.log('当前端口:', window.location.port);
    
    try {
      // 尝试通过API获取数据
      const res = await getRequirementPublishEvidenceList(queryParams)
      console.log('获取到的需求定制上架存证列表数据:', res);
      
      // 适应标准的API响应格式
      if (res.data) {
        // 标准格式：{code, msg, data: {list, total}}
        tableData.value = res.data.list || []
        total.value = res.data.total || 0
      } else if (res.list) {
        // 直接返回的格式：{list, total}
        tableData.value = res.list || []
        total.value = res.total || 0
      } else {
        throw new Error('返回数据格式不正确');
      }
    } catch (e) {
      console.warn('API请求失败，使用直接引入的模拟数据', e);
      
      // 使用直接导入的模拟数据
      const mockResult = handleMockData(requirementPublishEvidenceList, queryParams);
      tableData.value = mockResult.list;
      total.value = mockResult.total;
      
      // 显示使用模拟数据的提示
      ElMessage.warning('当前使用的是本地模拟数据');
    }
  } catch (error) {
    console.error('获取需求定制上架存证列表失败', error)
    console.log('错误详情:', error.response || error.message || error);
    ElMessage.error('获取数据失败，请稍后重试')
    
    // 测试数据，仅用于开发环境
    tableData.value = [
      {
        evidenceNo: 'RP' + new Date().getTime(),
        requirementName: '示例需求名称',
        requesterName: '测试需求方',
        publishTime: new Date().toISOString(),
        auditStatus: '审核通过',
        evidenceChain: 'test-chain'
      }
    ];
    total.value = 1;
  } finally {
    loading.value = false
  }
}

// 查看详情
const handleViewDetail = async (row) => {
  detailDialog.visible = true
  detailDialog.loading = true
  
  try {
    try {
      // 实际项目中这里应该调用API获取详情数据
      const res = await getRequirementPublishEvidenceDetail(row.evidenceNo)
      // 打印响应数据，帮助调试
      console.log('获取到的需求定制上架存证详情数据:', res)
      
      // 适应标准的API响应格式
      if (res.data) {
        // 标准格式：{code, msg, data}
        detailData.value = res.data
      } else {
        // 直接返回的数据
        detailData.value = res
      }
    } catch (e) {
      console.warn('详情API请求失败，使用当前行数据作为详情', e);
      
      // 查找模拟数据中对应的详情
      const mockDetail = requirementPublishEvidenceList.find(item => 
        item.evidenceNo === row.evidenceNo
      ) || requirementPublishEvidenceList[0];
      
      detailData.value = mockDetail;
      
      // 显示使用模拟数据的提示
      ElMessage.warning('当前使用的是本地模拟数据');
    }
  } catch (error) {
    console.error('获取需求定制上架存证详情失败', error)
    ElMessage.error('获取详情失败，请稍后重试')
    
    // 使用行数据作为备用
    detailData.value = row;
  } finally {
    detailDialog.loading = false
  }
}

// 处理本地模拟数据的分页和过滤
const handleMockData = (list, params) => {
  const { pageNum = 1, pageSize = 10, ...filters } = params;
  
  // 过滤数据
  let filteredList = [...list];
  
  // 根据过滤条件筛选数据
  Object.keys(filters).forEach(key => {
    if (filters[key]) {
      filteredList = filteredList.filter(item => {
        // 处理时间范围
        if (key.includes('StartTime')) {
          const fieldName = key.replace('StartTime', 'Time');
          return new Date(item[fieldName]).getTime() >= new Date(filters[key]).getTime();
        }
        
        if (key.includes('EndTime')) {
          const fieldName = key.replace('EndTime', 'Time');
          return new Date(item[fieldName]).getTime() <= new Date(filters[key]).getTime();
        }
        
        // 处理普通字段，模糊匹配
        if (typeof item[key] === 'string') {
          return item[key].toLowerCase().includes(filters[key].toLowerCase());
        }
        
        // 精确匹配
        return item[key] === filters[key];
      });
    }
  });
  
  // 计算分页数据
  const startIndex = (Number(pageNum) - 1) * Number(pageSize);
  const endIndex = startIndex + Number(pageSize);
  const pageList = filteredList.slice(startIndex, endIndex);
  
  return {
    list: pageList,
    total: filteredList.length
  };
};

// 搜索方法
const handleSearch = () => {
  queryParams.pageNum = 1
  Object.assign(queryParams, queryForm)
  getList()
}

// 重置方法
const handleReset = () => {
  queryForm.requesterName = ''
  queryForm.auditStatus = ''
  queryForm.publishStartTime = ''
  queryForm.publishEndTime = ''
  dateRange.value = null
  handleSearch()
}

// 处理每页数量变化
const handleSizeChange = (val: number) => {
  queryParams.pageSize = val
  getList()
}

// 处理页码变化
const handleCurrentChange = (val: number) => {
  queryParams.pageNum = val
  getList()
}

// 页面加载时获取数据
onMounted(() => {
  getList()
})
</script>

<style lang="scss" scoped>
.requirement-publish-evidence-container {
  min-height: 100%;
  
  .search-form-container {
    background-color: #fff;
    padding: 15px 20px;
    margin-bottom: 15px;
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    
    .search-form {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: flex-end;
      
      .search-buttons {
        display: flex;
        gap: 10px;
      }

      .search-button {
        background-color: #3370ff;
        border-color: #3370ff;
        
        &:hover, &:focus {
          background-color: #5b8bff;
          border-color: #5b8bff;
        }
      }
      
      :deep(.el-form-item) {
        margin-bottom: 0;
      }
      
      :deep(.el-form-item--default) {
        margin-bottom: 0;
      }
    }
  }
  
  .card-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    
    .table-container {
      margin-bottom: 20px;
      
      .demander-info {
        display: flex;
        align-items: center;
        gap: 5px;
        max-width: 100%;
        
        .info-icon {
          cursor: pointer;
          color: #909399;
          flex-shrink: 0;
        }
        
        > span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      
      .ellipsis-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 300px;
      }
      
      .table-actions {
        display: flex;
        justify-content: center;
      }
    }
    
    .pagination-container {
      display: flex;
      justify-content: flex-end;
    }
  }
  
  .detail-container {
    .audit-reason {
      margin-left: 10px;
      color: #606266;
    }
    
    .detail-text {
      white-space: pre-wrap;
      word-break: break-word;
      line-height: 1.5;
      max-height: 300px;
      overflow-y: auto;
      padding: 5px;
    }
  }
}
</style> 