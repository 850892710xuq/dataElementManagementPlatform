import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 自定义路由类型，支持子菜单图标
interface MenuItem {
  path: string
  title: string
  icon?: string
}

// 空白组件，用于临时替代未创建的组件，防止500错误
const EmptyComponent = {
  template: '<div class="empty-page"><h3>页面开发中，敬请期待...</h3></div>'
}

// 路由配置
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/registry-audit/list',
    children: [
      // 数据登记审核
      {
        path: '/registry-audit',
        name: 'RegistryAudit',
        redirect: '/registry-audit/list',
        meta: { title: '数据登记审核', icon: 'Document' },
        children: [
          {
            path: 'list',
            name: 'RegistryAuditList',
            component: () => import('@/views/registry-audit/registry/index.vue'),
            meta: { title: '登记审核列表', icon: 'Document' }
          },
          {
            path: 'change',
            name: 'ChangeRegistryList',
            component: () => import('@/views/registry-audit/change/index.vue'),
            meta: { title: '变更登记管理', icon: 'Edit' }
          },
          {
            path: 'cancel',
            name: 'CancelRegistryList',
            component: () => import('@/views/registry-audit/cancel/index.vue'),
            meta: { title: '注销登记审核', icon: 'Delete' }
          },
          {
            path: 'progress',
            name: 'RegistryProgress',
            component: () => import('@/views/registry-audit/progress/index.vue'),
            meta: { title: '登记进度查询', icon: 'Search' }
          },
          {
            path: 'progress-detail/:id',
            name: 'RegistryProgressDetail',
            component: () => import('@/views/registry-audit/progress/detail.vue'),
            meta: { title: '登记进度详情', activeMenu: '/registry-audit/progress', icon: 'Document' }
          },
          {
            path: 'detail/:id',
            name: 'RegistryAuditDetail',
            component: () => import('@/views/registry-audit/registry/detail.vue'),
            meta: { title: '登记审核详情', activeMenu: '/registry-audit/list', icon: 'Document' }
          },
          {
            path: 'change-detail/:id',
            name: 'ChangeRegistryDetail',
            component: () => import('@/views/registry-audit/change/detail.vue'),
            meta: { title: '变更登记详情', activeMenu: '/registry-audit/change', icon: 'Edit' }
          },
          {
            path: 'cancel-detail/:id',
            name: 'CancelRegistryDetail',
            component: () => import('@/views/registry-audit/cancel/detail.vue'),
            meta: { title: '注销登记详情', activeMenu: '/registry-audit/cancel', icon: 'Delete' }
          }
        ]
      },
      // 登记凭证管理
      {
        path: '/certificate',
        name: 'Certificate',
        redirect: '/certificate/list',
        meta: { title: '登记凭证管理', icon: 'DocumentChecked' },
        children: [
          {
            path: 'list',
            name: 'CertificateList',
            component: EmptyComponent,
            meta: { title: '登记证书列表', icon: 'Document' }
          },
          {
            path: 'detail/:id',
            name: 'CertificateDetail',
            component: EmptyComponent,
            meta: { title: '证书详情', activeMenu: '/certificate/list', icon: 'Document' }
          }
        ]
      },
      // 登记公示
      {
        path: '/publicity',
        name: 'Publicity',
        redirect: '/publicity/list',
        meta: { title: '登记公示', icon: 'Notification' },
        children: [
          {
            path: 'list',
            name: 'PublicityList',
            component: EmptyComponent,
            meta: { title: '公示管理', icon: 'Document' }
          },
          {
            path: 'setting',
            name: 'PublicitySetting',
            component: EmptyComponent,
            meta: { title: '公示设置', icon: 'Setting' }
          }
        ]
      },
      // 登记异议处理
      {
        path: '/objection',
        name: 'Objection',
        redirect: '/objection/list',
        meta: { title: '登记异议处理', icon: 'Connection' },
        children: [
          {
            path: 'list',
            name: 'ObjectionList',
            component: EmptyComponent,
            meta: { title: '异议列表', icon: 'Document' }
          },
          {
            path: 'detail/:id',
            name: 'ObjectionDetail',
            component: EmptyComponent,
            meta: { title: '异议详情', activeMenu: '/objection/list', icon: 'Document' }
          }
        ]
      },
      // 评估管理
      {
        path: '/evaluation',
        name: 'Evaluation',
        redirect: '/evaluation/quality',
        meta: { title: '评估管理', icon: 'DataAnalysis' },
        children: [
          {
            path: 'quality',
            name: 'QualityEvaluation',
            component: EmptyComponent,
            meta: { title: '质量评估', icon: 'Document' }
          },
          {
            path: 'security',
            name: 'SecurityEvaluation',
            component: EmptyComponent,
            meta: { title: '安全评估', icon: 'Lock' }
          },
          {
            path: 'pricing',
            name: 'PricingEvaluation',
            component: EmptyComponent,
            meta: { title: '产品定价评估', icon: 'Money' }
          },
          {
            path: 'quality-detail/:id',
            name: 'QualityEvaluationDetail',
            component: EmptyComponent,
            meta: { title: '质量评估详情', activeMenu: '/evaluation/quality', icon: 'Document' }
          },
          {
            path: 'security-detail/:id',
            name: 'SecurityEvaluationDetail',
            component: EmptyComponent,
            meta: { title: '安全评估详情', activeMenu: '/evaluation/security', icon: 'Lock' }
          },
          {
            path: 'pricing-detail/:id',
            name: 'PricingEvaluationDetail',
            component: EmptyComponent,
            meta: { title: '产品定价评估详情', activeMenu: '/evaluation/pricing', icon: 'Money' }
          }
        ]
      },
      // 申诉审核
      {
        path: '/appeal',
        name: 'Appeal',
        redirect: '/appeal/quality',
        meta: { title: '申诉审核', icon: 'Reading' },
        children: [
          {
            path: 'quality',
            name: 'QualityAppeal',
            component: EmptyComponent,
            meta: { title: '质量评估申诉', icon: 'Document' }
          },
          {
            path: 'security',
            name: 'SecurityAppeal',
            component: EmptyComponent,
            meta: { title: '安全评估申诉', icon: 'Lock' }
          },
          {
            path: 'pricing',
            name: 'PricingAppeal',
            component: EmptyComponent,
            meta: { title: '产品定价评估申诉', icon: 'Money' }
          },
          {
            path: 'quality-detail/:id',
            name: 'QualityAppealDetail',
            component: EmptyComponent,
            meta: { title: '质量评估申诉详情', activeMenu: '/appeal/quality', icon: 'Document' }
          },
          {
            path: 'security-detail/:id',
            name: 'SecurityAppealDetail',
            component: EmptyComponent,
            meta: { title: '安全评估申诉详情', activeMenu: '/appeal/security', icon: 'Lock' }
          },
          {
            path: 'pricing-detail/:id',
            name: 'PricingAppealDetail',
            component: EmptyComponent,
            meta: { title: '产品定价评估申诉详情', activeMenu: '/appeal/pricing', icon: 'Money' }
          }
        ]
      },
      // 评估报告
      {
        path: '/report',
        name: 'Report',
        redirect: '/report/list',
        meta: { title: '评估报告', icon: 'DataLine' },
        children: [
          {
            path: 'list',
            name: 'ReportList',
            component: EmptyComponent,
            meta: { title: '报告列表', icon: 'Document' }
          },
          {
            path: 'detail/:id',
            name: 'ReportDetail',
            component: EmptyComponent,
            meta: { title: '报告详情', activeMenu: '/report/list', icon: 'Document' }
          }
        ]
      }
    ]
  },
  // 处理未匹配到的路由
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(getRouterBase()),
  routes
})

// 动态获取路由基础路径
function getRouterBase() {
  return window.__POWERED_BY_QIANKUN__ ? '/third-service/' : '/'
}

export default router 