/**
 * 存证管理中心类型定义文件
 */

/**
 * 分页查询参数类型
 */
export interface QueryParams {
  // 页码
  pageNum: number;
  // 每页条数
  pageSize: number;
  // 其他查询参数
  [key: string]: any;
}

/**
 * 分页结果类型
 */
export interface PageResult<T> {
  // 列表数据
  list: T[];
  // 总记录数
  total: number;
  // 当前页码
  pageNum: number;
  // 每页条数
  pageSize: number;
}

/**
 * 通用存证信息类型
 */
export interface EvidenceBase {
  // 存证编号
  evidenceNo: string;
  // 存证时间
  evidenceTime: string;
}

/**
 * 数据登记存证类型
 */
export interface DataEvidence extends EvidenceBase {
  // 数据名称
  dataName: string;
  // 所有者（数据所属主体名称或标识）
  ownerName: string;
  // 创建时间（数据登记的发起时间）
  createTime: string;
  // 登记类型（初始登记、变更登记、注销登记）
  registerType: '初始登记' | '变更登记' | '注销登记';
  // 登记时间（具体的登记操作时间点）
  registerTime: string;
  // 数据描述（对数据内容的简要描述）
  dataDescription?: string;
  // 登记提交的材料
  materials?: Array<{
    // 材料名称
    name: string;
    // 材料类型
    type: string;
    // 材料链接
    url: string;
  }>;
  // 登记审核状态
  auditStatus: '审核通过' | '审核不通过';
  // 审核原因
  auditReason?: string;
  // 数据类型
  dataType?: string;
  // 数据来源
  dataOrigin?: string;
  // 登记人
  registrant?: string;
  // 安全等级
  securityLevel?: string;
  // 存储位置
  storageLocation?: string;
  // 数据大小
  dataSize?: string;
  // 格式类型
  formatType?: string;
  // 更新周期
  updateCycle?: string;
}

/**
 * 开发存证基础类型
 */
export interface DevelopmentEvidenceBase extends EvidenceBase {
  // 产品名称
  productName: string;
  // 开发团队（开发主体名称或标识）
  developTeam: string;
  // 开发开始时间
  developStartTime: string;
  // 开发结束时间
  developEndTime: string;
  // 技术架构（简要描述产品开发所采用的技术框架和关键技术）
  technicalArchitecture: string;
  // 功能模块介绍
  functionalModules: string;
  // 版本信息
  versionInfo: Array<{
    // 版本号
    version: string;
    // 版本更新时间
    updateTime: string;
    // 更新内容
    updateContent: string;
  }>;
  // 测试报告
  testReports?: Array<{
    // 报告名称
    name: string;
    // 报告类型
    type: string;
    // 报告链接
    url: string;
  }>;
}

/**
 * 低密产品开发存证类型
 */
export interface LowSecurityDevelopmentEvidence extends DevelopmentEvidenceBase {
  // 产品类型
  productType: string;
}

/**
 * 高密产品开发存证类型
 */
export interface HighSecurityDevelopmentEvidence extends DevelopmentEvidenceBase {
  // 产品类型
  productType: string;
  // 安全技术应用
  securityTechnology: string;
  // 数据来源
  dataSource: string;
  // 隐私保护方案
  privacyProtection: string;
}
/**
 * 产品交易存证类型
 */
export interface TransactionEvidence extends EvidenceBase {
  // 产品ID
  id?: string;
  // 产品名称
  productName: string;
  // 交易时间（订单生成时间或上架时间）
  transactionTime: string;
  // 交易类型（上架、订单交易）
  transactionType: '上架' | '订单交易';
  // 交易状态
  transactionStatus: '上架审核通过' | '上架审核不通过' | '订单交易成功' | '订单交易失败';
  
  // 上架存证特有字段
  // 上架申请时间
  publishApplyTime?: string;
  // 上架申请方
  publishApplicant?: string;
  // 上架产品信息
  productInfo?: {
    // 产品描述
    description: string;
    // 产品价格
    price: number;
  };
  // 上架审核时间
  publishAuditTime?: string;
  // 审核人员
  auditor?: string;
  // 审核意见
  auditOpinion?: string;
  
  // 订单交易特有字段
  // 订单生成时间
  orderCreateTime?: string;
  // 申请方（购买方企业或个人名称及标识）
  applicant?: string;
  // 申请信息
  applicationInfo?: {
    // 购买数量
    quantity: number;
    // 价格
    price: number;
    // 支付方式
    paymentMethod: string;
  };
  // 审核信息
  auditInfo?: {
    // 审核时间
    auditTime: string;
    // 审核人员
    auditor: string;
    // 审核意见
    opinion: string;
  };
  // 交易完成时间
  completionTime?: string;
  // 交易金额
  amount?: number;
}

/**
 * 低密数据交付存证类型
 */
export interface LowSecurityDeliveryEvidence extends EvidenceBase {
  // ID
  id?: string;
  // 数据产品名称
  dataProductName: string;
  // 交付类型（数据集、数据报告、文件等）
  deliveryType: '数据集' | '数据报告' | '文件' | string;
  // 交付时间
  deliveryTime: string;
  // 下载时间（如有）
  downloadTime?: string;
  // 数据接收方
  recipient: string;
  // 数据交付方式
  deliveryMethod: '在线传输' | '离线存储介质交付' | string;
  // 数据大小
  dataSize: string;
}

/**
 * 高密数据交付存证类型
 */
export interface HighSecurityDeliveryEvidence extends EvidenceBase {
  // ID
  id?: string;
  // 数据产品名称
  dataProductName: string;
  // 高密产品类型
  highSecurityType: '联邦学习' | 'MPC' | '安全求交' | '匿踪查询' | string;
  // 调用时间
  callTime: string;
  // 调用编号
  callNo: string;
  // 调用方
  caller: string;
  // 数据使用目的
  usagePurpose: string;
  // 数据使用范围
  usageScope: string;
}

/**
 * 需求定制上架存证类型
 */
export interface RequirementPublishEvidence extends EvidenceBase {
  // ID
  id?: string;
  // 需求方名称
  requesterName: string;
  // 需求定制信息
  requirementInfo: string;
  // 上架申请时间
  publishApplyTime: string;
  // 上架审核时间
  publishAuditTime: string;
  // 审核人员
  auditor: string;
  // 审核意见
  auditOpinion: '通过' | '不通过';
  // 审核原因
  auditReason?: string;
}

/**
 * 需求认领记录存证类型
 */
export interface RequirementClaimEvidence extends EvidenceBase {
  // ID
  id?: string;
  // 认领方
  claimant: string;
  // 认领时间
  claimTime: string;
  // 需求名称
  requirementName: string;
  // 需求类型
  requirementType?: string;
  // 提出人
  proposer?: string;
  // 提出时间
  proposeTime?: string;
  // 需求状态
  requirementStatus: '已认领' | '处理中' | '已完成' | string;
}

/**
 * 用户体系存证类型
 */
export interface UserEvidence extends EvidenceBase {
  // ID
  id?: string;
  // 用户账号
  userAccount: string;
  // 用户名称
  userName?: string;
  // 用户类型
  userType: '个人用户' | '企业用户';
  // 注册时间
  registerTime?: string;
  // 认证状态
  authStatus: '未认证' | '认证中' | '已认证';
  // 认证审核时间
  authAuditTime?: string;
  // 认证信息变更时间
  authChangeTime?: string;
  // 权限变更时间
  permissionChangeTime?: string;
  // 注册信息
  registerInfo?: {
    // 注册时间
    registerTime: string;
    // 注册邮箱/手机号码
    contactInfo: string;
  };
  // 个人认证信息
  personalAuthInfo?: {
    // 姓名
    name: string;
    // 身份证号码
    idNumber: string;
    // 人脸识别信息
    faceRecognition: boolean;
  };
  // 企业认证信息
  enterpriseAuthInfo?: {
    // 企业名称
    companyName: string;
    // 统一社会信用代码
    creditCode: string;
    // 企业法人信息
    legalPerson: string;
  };
  // 认证审核信息
  authAuditInfo?: {
    // 审核人员
    auditor: string;
    // 审核意见
    opinion: string;
    // 审核时间
    auditTime: string;
  };
  // 认证信息变更记录
  authChangeRecords?: Array<{
    // 变更时间
    changeTime: string;
    // 变更前信息
    beforeChange: string;
    // 变更后信息
    afterChange: string;
  }>;
  // 权限变更记录
  permissionChangeRecords?: Array<{
    // 变更时间
    changeTime: string;
    // 变更前权限
    beforeChange: string;
    // 变更后权限
    afterChange: string;
    // 变更原因
    reason: string;
  }>;
}

// 开发存证类型
export interface DevelopmentEvidence extends DevelopmentEvidenceBase {
  id: string; // ID
  productType: string; // 产品类型
  description?: string; // 产品描述
  securityTech?: string[]; // 安全技术应用
  dataSources?: string[]; // 数据来源
  privacyProtection?: string; // 隐私保护方案
  techArchitecture?: string; // 技术架构
  functionalModules?: string[]; // 功能模块
  [key: string]: any; // 其他属性
} 
