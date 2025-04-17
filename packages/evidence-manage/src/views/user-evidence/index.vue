<template>
  <div class="user-evidence-container">
    <!-- 搜索表单 -->
    <div class="search-form-container">
      <el-form :model="queryForm" ref="formRef" :inline="true" class="search-form">
        <el-form-item label="用户账号" prop="userAccount">
          <el-input
            v-model="queryForm.userAccount"
            placeholder="请输入用户账号"
            clearable
            @keyup.enter="handleSearch"
          />
        </el-form-item>
        
        <el-form-item label="用户类型" prop="userType">
          <el-select
            v-model="queryForm.userType"
            placeholder="请选择用户类型"
            clearable
            style="width: 140px;"
          >
            <el-option label="个人用户" value="个人用户" />
            <el-option label="企业用户" value="企业用户" />
          </el-select>
        </el-form-item>
        
        <el-form-item label="认证状态" prop="authStatus">
          <el-select
            v-model="queryForm.authStatus"
            placeholder="请选择认证状态"
            clearable
            style="width: 140px;"
          >
            <el-option label="未认证" value="未认证" />
            <el-option label="认证中" value="认证中" />
            <el-option label="已认证" value="已认证" />
          </el-select>
        </el-form-item>
        
        <el-form-item label="认证审核时间" prop="authTimeRange">
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
          <el-table-column prop="userAccount" label="用户账号" min-width="120" show-overflow-tooltip />
          <el-table-column prop="userType" label="用户类型" width="100" show-overflow-tooltip />
          <el-table-column prop="authStatus" label="认证状态" width="100" show-overflow-tooltip>
            <template #default="{ row }">
              <el-tag :type="getAuthStatusType(row.authStatus)">
                {{ row.authStatus }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="authTime" label="认证审核时间" min-width="170" show-overflow-tooltip />
          <el-table-column prop="authChangeTime" label="认证信息变更时间" min-width="170" show-overflow-tooltip />
          <el-table-column prop="permissionChangeTime" label="权限变更时间" min-width="170" show-overflow-tooltip />
          <el-table-column prop="evidenceNo" label="存证编号" min-width="180" show-overflow-tooltip />
          <el-table-column prop="evidenceTime" label="存证时间" min-width="170" show-overflow-tooltip />
          <el-table-column label="操作" width="120" fixed="right">
            <template #default="{ row }">
              <div class="table-actions">
                <el-button
                  type="primary"
                  link
                  class="operation-button"
                  @click="handleViewDetail(row.evidenceNo)"
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
    
    <!-- 将抽屉改为弹出框 -->
    <el-dialog
      v-model="detailDialog.visible"
      title="用户体系存证详情"
      width="60%"
      destroy-on-close
    >
      <div v-loading="detailDialog.loading" class="detail-container" v-if="detailData">
        <!-- 用户注册信息 -->
        <el-descriptions :column="2" border class="detail-section">
          <template #title>
            <div class="section-title">用户注册信息</div>
          </template>
          <el-descriptions-item label="用户账号">{{ detailData.userAccount }}</el-descriptions-item>
          <el-descriptions-item label="注册时间">{{ detailData.registerTime }}</el-descriptions-item>
          <el-descriptions-item label="注册邮箱">{{ detailData.registerEmail }}</el-descriptions-item>
          <el-descriptions-item label="注册手机号">{{ detailData.registerPhone }}</el-descriptions-item>
        </el-descriptions>
        
        <!-- 认证信息 -->
        <el-descriptions v-if="detailData.personalInfo" :column="2" border class="detail-section">
          <template #title>
            <div class="section-title">个人认证信息</div>
          </template>
          <el-descriptions-item label="姓名">{{ detailData.personalInfo?.name }}</el-descriptions-item>
          <el-descriptions-item label="身份证号码">{{ detailData.personalInfo?.idCard }}</el-descriptions-item>
          <el-descriptions-item label="手机号码">{{ detailData.personalInfo?.phone }}</el-descriptions-item>
          <el-descriptions-item label="人脸识别状态">{{ detailData.personalInfo?.faceRecognitionStatus }}</el-descriptions-item>
        </el-descriptions>

        <el-descriptions v-if="detailData.enterpriseInfo" :column="2" border class="detail-section">
          <template #title>
            <div class="section-title">企业认证信息</div>
          </template>
          <el-descriptions-item label="企业名称">{{ detailData.enterpriseInfo?.name }}</el-descriptions-item>
          <el-descriptions-item label="统一社会信用代码">{{ detailData.enterpriseInfo?.creditCode }}</el-descriptions-item>
          <el-descriptions-item label="企业法人">{{ detailData.enterpriseInfo?.legalPerson }}</el-descriptions-item>
          <el-descriptions-item label="法人身份证号">{{ detailData.enterpriseInfo?.legalPersonIdCard }}</el-descriptions-item>
          <el-descriptions-item label="联系电话">{{ detailData.enterpriseInfo?.contactPhone }}</el-descriptions-item>
        </el-descriptions>

        <!-- 认证审核信息 -->
        <el-descriptions :column="2" border class="detail-section">
          <template #title>
            <div class="section-title">认证审核信息</div>
          </template>
          <el-descriptions-item label="审核人员">{{ detailData.authInfo?.auditor }}</el-descriptions-item>
          <el-descriptions-item label="审核时间">{{ detailData.authInfo?.auditTime }}</el-descriptions-item>
          <el-descriptions-item label="审核状态">
            <el-tag :type="getAuthStatusType(detailData.authStatus)">
              {{ detailData.authStatus }}
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="审核意见">{{ detailData.authInfo?.auditComment }}</el-descriptions-item>
        </el-descriptions>

        <!-- 认证信息变更记录 -->
        <div v-if="detailData.authChangeRecords && detailData.authChangeRecords.length > 0" class="detail-section">
          <div class="section-title">认证信息变更记录</div>
          <el-timeline>
            <el-timeline-item
              v-for="(record, index) in detailData.authChangeRecords"
              :key="index"
              :timestamp="record.changeTime"
              placement="top"
            >
              <el-card>
                <h4>变更类型：{{ record.changeType }}</h4>
                <div class="change-record">
                  <div class="change-before">
                    <h5>变更前：</h5>
                    <p v-for="(value, key) in record.beforeChange" :key="key">
                      {{ key }}: {{ value }}
                    </p>
                  </div>
                  <div class="change-after">
                    <h5>变更后：</h5>
                    <p v-for="(value, key) in record.afterChange" :key="key">
                      {{ key }}: {{ value }}
                    </p>
                  </div>
                </div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>

        <!-- 权限变更记录 -->
        <div v-if="detailData.permissionChangeRecords && detailData.permissionChangeRecords.length > 0" class="detail-section">
          <div class="section-title">权限变更记录</div>
          <el-timeline>
            <el-timeline-item
              v-for="(record, index) in detailData.permissionChangeRecords"
              :key="index"
              :timestamp="record.changeTime"
              placement="top"
            >
              <el-card>
                <h4>变更人员：{{ record.operator }}</h4>
                <p>变更原因：{{ record.reason }}</p>
                <div class="change-record">
                  <div class="change-before">
                    <h5>变更前权限：</h5>
                    <el-tag 
                      v-for="(perm, i) in record.beforePermissions" 
                      :key="i"
                      class="permission-tag"
                    >
                      {{ perm }}
                    </el-tag>
                  </div>
                  <div class="change-after">
                    <h5>变更后权限：</h5>
                    <el-tag 
                      v-for="(perm, i) in record.afterPermissions" 
                      :key="i"
                      class="permission-tag"
                      type="success"
                    >
                      {{ perm }}
                    </el-tag>
                  </div>
                </div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>

        <!-- 存证信息 -->
        <el-descriptions :column="2" border class="detail-section">
          <template #title>
            <div class="section-title">存证信息</div>
          </template>
          <el-descriptions-item label="存证编号">{{ detailData.evidenceNo }}</el-descriptions-item>
          <el-descriptions-item label="存证时间">{{ detailData.evidenceTime }}</el-descriptions-item>
          <el-descriptions-item label="存证状态" :span="2">
            <el-tag type="success">有效</el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </div>
      
      <!-- 对话框底部添加关闭按钮 -->
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
import { Search, Refresh, View } from '@element-plus/icons-vue'
import { getUserEvidenceList, getUserEvidenceDetail } from '@/api/user-evidence'
import type { UserEvidence, QueryParams } from '@/types'

// 模拟数据 - 临时使用，避免API调用超时问题
const mockUserEvidenceList = [
  {
    evidenceNo: 'UE-2024-001',
    userAccount: 'zhangsan@example.com',
    userType: '个人用户',
    authStatus: '已认证',
    authTime: '2024-03-15 10:22:15',
    authChangeTime: '2024-03-16 09:15:30',
    permissionChangeTime: '2024-03-17 14:35:27',
    evidenceTime: '2024-03-18 09:32:15',
    registerTime: '2024-03-01 15:30:22',
    registerEmail: 'zhangsan@example.com',
    registerPhone: '13800138001',
    evidenceHash: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6',
    personalInfo: {
      name: '张三',
      idCard: '110101199001011234',
      phone: '13800138001',
      faceRecognitionStatus: '已通过'
    },
    authInfo: {
      auditor: '李审核',
      auditTime: '2024-03-15 10:22:15',
      auditComment: '资料齐全，身份验证通过'
    },
    permissionChangeRecords: [
      {
        operator: '王管理',
        changeTime: '2024-03-17 14:35:27',
        reason: '用户申请数据分析权限',
        beforePermissions: ['数据浏览', '数据下载'],
        afterPermissions: ['数据浏览', '数据下载', '数据分析']
      }
    ],
    blockchainInfo: {
      chainId: 'BC12345678',
      blockHeight: '3256782',
      transactionHash: '0x76f3d24a643597b95138995521675fb4f9d629cd103ac5be658d2a89c2ce69',
      consensusTime: '2024-03-18 09:33:05'
    }
  },
  {
    evidenceNo: 'UE-2024-002',
    userAccount: 'lisi@company.com',
    userType: '企业用户',
    authStatus: '已认证',
    authTime: '2024-03-10 16:45:33',
    authChangeTime: '2024-03-16 11:20:45',
    permissionChangeTime: '2024-03-17 10:35:18',
    evidenceTime: '2024-03-18 10:15:22',
    registerTime: '2024-03-05 09:15:30',
    registerEmail: 'lisi@company.com',
    registerPhone: '13900139002',
    evidenceHash: 'b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7',
    enterpriseInfo: {
      name: '某某科技有限公司',
      creditCode: '91110108MA01C6P52X',
      legalPerson: '李四',
      legalPersonIdCard: '110101198505079876',
      contactPhone: '13900139002'
    },
    authInfo: {
      auditor: '李审核',
      auditTime: '2024-03-10 16:45:33',
      auditComment: '企业资质符合要求，证件齐全'
    },
    authChangeRecords: [
      {
        changeType: '联系电话变更',
        changeTime: '2024-03-16 11:20:45',
        beforeChange: {
          '联系电话': '01062345678'
        },
        afterChange: {
          '联系电话': '01062345679'
        }
      }
    ],
    blockchainInfo: {
      chainId: 'BC12345678',
      blockHeight: '3257001',
      transactionHash: '0x88a2d3b5c7e9f1d4a6b8c0e2d4f6a8b0c2d4e6f8a0b2c4d6e8f0a2c4e6a8b0',
      consensusTime: '2024-03-18 10:16:05'
    }
  },
  {
    evidenceNo: 'UE-2024-003',
    userAccount: 'wangwu@example.com',
    userType: '个人用户',
    authStatus: '认证中',
    authTime: '2024-03-18 09:30:00',
    authChangeTime: '',
    permissionChangeTime: '',
    evidenceTime: '2024-03-18 11:05:33',
    registerTime: '2024-03-17 15:20:10',
    registerEmail: 'wangwu@example.com',
    registerPhone: '13700137003',
    evidenceHash: 'c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8',
    personalInfo: {
      name: '王五',
      idCard: '110101199203034567',
      phone: '13700137003',
      faceRecognitionStatus: '待验证'
    },
    authInfo: {
      auditor: '李审核',
      auditTime: '2024-03-18 09:30:00',
      auditComment: '等待人脸识别验证'
    },
    blockchainInfo: {
      chainId: 'BC12345678',
      blockHeight: '3257250',
      transactionHash: '0xc3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3',
      consensusTime: '2024-03-18 11:06:15'
    }
  },
  {
    evidenceNo: 'UE-2024-004',
    userAccount: 'zhaoliu@tech.org',
    userType: '企业用户',
    authStatus: '未认证',
    authTime: '',
    authChangeTime: '',
    permissionChangeTime: '',
    evidenceTime: '2024-03-18 14:22:47',
    registerTime: '2024-03-18 14:10:25',
    registerEmail: 'zhaoliu@tech.org',
    registerPhone: '13600136004',
    evidenceHash: 'd4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9',
    blockchainInfo: {
      chainId: 'BC12345678',
      blockHeight: '3257500',
      transactionHash: '0xd4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3',
      consensusTime: '2024-03-18 14:23:10'
    }
  },
  {
    evidenceNo: 'UE-2024-005',
    userAccount: 'sunqi@data.com',
    userType: '企业用户',
    authStatus: '已认证',
    authTime: '2024-03-15 11:30:22',
    authChangeTime: '2024-03-17 09:20:35',
    permissionChangeTime: '2024-03-18 16:36:09',
    evidenceTime: '2024-03-18 16:36:09',
    registerTime: '2024-03-10 10:00:15',
    registerEmail: 'sunqi@data.com',
    registerPhone: '13500135005',
    evidenceHash: 'e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0',
    enterpriseInfo: {
      name: '数据科技股份有限公司',
      creditCode: '91110108MA01D7Q63Y',
      legalPerson: '孙七',
      legalPersonIdCard: '110101198012123456',
      contactPhone: '13500135005'
    },
    authInfo: {
      auditor: '王审核',
      auditTime: '2024-03-15 11:30:22',
      auditComment: '资料完整，符合认证要求'
    },
    permissionChangeRecords: [
      {
        operator: '李管理',
        changeTime: '2024-03-18 16:36:09',
        reason: '提升企业权限等级',
        beforePermissions: ['数据浏览', '数据下载', '基础分析'],
        afterPermissions: ['数据浏览', '数据下载', '基础分析', '高级分析', '数据导出']
      }
    ],
    blockchainInfo: {
      chainId: 'BC12345678',
      blockHeight: '3257800',
      transactionHash: '0xe5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4',
      consensusTime: '2024-03-18 16:37:02'
    }
  },
  {
    evidenceNo: 'UE-2024-006',
    userAccount: 'chenba@example.com',
    userType: '个人用户',
    authStatus: '已认证',
    authTime: '2024-03-20 09:15:30',
    authChangeTime: '2024-03-20 15:40:25',
    permissionChangeTime: '2024-03-21 14:22:15',
    evidenceTime: '2024-03-21 14:22:15',
    registerTime: '2024-03-05 11:30:20',
    registerEmail: 'chenba@example.com',
    registerPhone: '13400134006',
    evidenceHash: 'f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1',
    personalInfo: {
      name: '陈八',
      idCard: '110101198808081234',
      phone: '13400134006',
      faceRecognitionStatus: '已通过'
    },
    authInfo: {
      auditor: '王审核',
      auditTime: '2024-03-20 09:15:30',
      auditComment: '身份验证信息无误，审核通过'
    },
    permissionChangeRecords: [
      {
        operator: '张管理',
        changeTime: '2024-03-21 14:22:15',
        reason: '用户申请数据分析与报表权限',
        beforePermissions: ['数据浏览'],
        afterPermissions: ['数据浏览', '数据下载', '数据分析', '报表导出']
      }
    ],
    blockchainInfo: {
      chainId: 'BC12345678',
      blockHeight: '3258100',
      transactionHash: '0xf6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5',
      consensusTime: '2024-03-21 14:23:05'
    }
  },
  {
    evidenceNo: 'UE-2024-007',
    userAccount: 'qianjiu@dataco.com',
    userType: '企业用户',
    authStatus: '已认证',
    authTime: '2024-03-22 10:35:40',
    authChangeTime: '2024-03-22 14:20:30',
    permissionChangeTime: '2024-03-23 11:25:15',
    evidenceTime: '2024-03-22 10:35:40',
    registerTime: '2024-03-20 15:10:25',
    registerEmail: 'qianjiu@dataco.com',
    registerPhone: '13300133007',
    evidenceHash: 'g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2',
    enterpriseInfo: {
      name: '数据创新科技有限公司',
      creditCode: '91110108MA01E8R74Z',
      legalPerson: '钱九',
      legalPersonIdCard: '110101198303031234',
      contactPhone: '13300133007'
    },
    authInfo: {
      auditor: '李审核',
      auditTime: '2024-03-22 10:35:40',
      auditComment: '企业证件齐全，企业信用良好，审核通过'
    },
    blockchainInfo: {
      chainId: 'BC12345678',
      blockHeight: '3258300',
      transactionHash: '0xg7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6',
      consensusTime: '2024-03-22 10:36:15'
    }
  }
];

// 查询表单
const queryForm = reactive({
  userAccount: '',
  userType: '',
  authStatus: '',
  authTimeStart: '',
  authTimeEnd: ''
})

// 查询参数
const queryParams = reactive<QueryParams>({
  pageNum: 1,
  pageSize: 10,
  ...queryForm
})

// 日期范围
const dateRange = ref<[string, string] | null>(null)

// 表单引用
const formRef = ref()

// 表格数据
const tableData = ref<UserEvidence[]>([])
// 总记录数
const total = ref(0)
// 加载状态
const loading = ref(false)

// 详情对话框
const detailDialog = reactive({
  visible: false,
  loading: false
})

// 详情数据
const detailData = ref<UserEvidence | null>(null)

// 初始化
onMounted(() => {
  fetchDataList()
})

// 处理日期范围变化
const handleDateRangeChange = (val: [string, string] | null) => {
  if (val) {
    queryForm.authTimeStart = val[0]
    queryForm.authTimeEnd = val[1]
  } else {
    queryForm.authTimeStart = ''
    queryForm.authTimeEnd = ''
  }
}

// 获取数据列表
const fetchDataList = async () => {
  loading.value = true
  try {
    // 使用本地模拟数据代替API调用
    // 筛选数据
    let filteredData = [...mockUserEvidenceList];
    
    // 根据查询条件过滤
    if (queryForm.userAccount) {
      filteredData = filteredData.filter(item => item.userAccount.includes(queryForm.userAccount));
    }
    
    if (queryForm.userType) {
      filteredData = filteredData.filter(item => item.userType === queryForm.userType);
    }
    
    if (queryForm.authStatus) {
      filteredData = filteredData.filter(item => item.authStatus === queryForm.authStatus);
    }
    
    if (queryForm.authTimeStart && queryForm.authTimeEnd) {
      filteredData = filteredData.filter(item => {
        if (!item.authTime) return false;
        const time = new Date(item.authTime).getTime();
        const start = new Date(queryForm.authTimeStart).getTime();
        const end = new Date(queryForm.authTimeEnd).getTime();
        return time >= start && time <= end;
      });
    }
    
    // 计算分页数据
    const startIdx = (queryParams.pageNum - 1) * queryParams.pageSize;
    const endIdx = startIdx + queryParams.pageSize;
    const pageData = filteredData.slice(startIdx, endIdx);
    
    // 更新表格数据和总记录数
    tableData.value = pageData;
    total.value = filteredData.length;
    
    // 注释掉API调用代码
    // const res = await getUserEvidenceList(queryParams)
    // tableData.value = res.list
    // total.value = res.total
  } catch (error) {
    console.error('获取数据失败', error)
    ElMessage.error('获取数据失败')
  } finally {
    loading.value = false
  }
}

// 处理搜索
const handleSearch = () => {
  queryParams.pageNum = 1
  Object.assign(queryParams, queryForm)
  fetchDataList()
}

// 处理重置
const handleReset = () => {
  formRef.value?.resetFields()
  dateRange.value = null
  queryParams.pageNum = 1
  queryParams.pageSize = 10
  
  // 重置查询表单
  Object.keys(queryForm).forEach(key => {
    queryForm[key] = ''
  })
  
  // 清除其他查询条件，保留分页参数
  Object.keys(queryParams).forEach(key => {
    if (!['pageNum', 'pageSize'].includes(key)) {
      delete queryParams[key]
    }
  })
  
  fetchDataList()
}

// 处理每页条数变化
const handleSizeChange = (val: number) => {
  queryParams.pageSize = val
  fetchDataList()
}

// 处理页码变化
const handleCurrentChange = (val: number) => {
  queryParams.pageNum = val
  fetchDataList()
}

// 处理查看详情
const handleViewDetail = async (evidenceNo: string) => {
  detailDialog.visible = true
  detailDialog.loading = true
  
  try {
    // 从本地模拟数据中获取详情，代替API调用
    const detail = mockUserEvidenceList.find(item => item.evidenceNo === evidenceNo);
    if (detail) {
      detailData.value = detail;
    } else {
      ElMessage.warning('未找到相关存证详情');
    }
    // 注释掉API调用代码
    // const res = await getUserEvidenceDetail(evidenceNo)
    // detailData.value = res
  } catch (error) {
    console.error('获取详情失败', error)
    ElMessage.error('获取详情失败')
  } finally {
    detailDialog.loading = false
  }
}

// 复制到剪贴板
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      ElMessage.success('已复制到剪贴板')
    })
    .catch(() => {
      ElMessage.error('复制失败')
    })
}

// 获取认证状态类型
const getAuthStatusType = (status: string) => {
  switch (status) {
    case '未认证':
      return 'info'
    case '认证中':
      return 'warning'
    case '已认证':
      return 'success'
    default:
      return 'info'
  }
}
</script>

<style lang="scss" scoped>
.user-evidence-container {
  min-height: 100%;
  
  .search-form-container {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
    
    .search-form {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      
      .el-form-item {
        margin-right: 15px;
      }
      
      .search-buttons {
        display: flex;
        gap: 10px;
      }
      
      .search-button {
        background-color: #3370ff;
        border-color: #3370ff;
        
        &:hover,
        &:focus {
          background-color: #5b8bff;
          border-color: #5b8bff;
        }
      }
    }
  }
  
  .detail-container {
    padding: 20px;
    
    .detail-section {
      margin-bottom: 20px;
    }
    
    .section-title {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 15px;
      color: #303133;
    }
    
    .change-record {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 10px;
      
      .change-before, .change-after {
        flex: 1;
        min-width: 200px;
        
        h5 {
          margin-top: 0;
          margin-bottom: 10px;
          font-weight: 500;
        }
      }
    }
    
    .permission-tag {
      margin-right: 8px;
      margin-bottom: 8px;
    }
  }
  
  .dialog-footer {
    display: flex;
    justify-content: flex-end;
  }
  
  /* 移除重复的表格操作按钮样式，使用全局样式 */
}
</style> 