import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/development-evidence',
    children: [
      {
        path: 'data-evidence',
        name: 'DataEvidence',
        component: () => import('@/views/data-evidence/index.vue'),
        meta: {
          title: '数据登记存证'
        }
      },
      {
        path: 'development-evidence',
        name: 'DevelopmentEvidence',
        component: () => import('@/views/development-evidence/main.vue'),
        meta: {
          title: '开发存证',
          icon: 'document'
        },
        redirect: '/development-evidence/low-security',
        children: [
          {
            path: 'low-security',
            name: 'LowSecurityEvidence',
            component: () => import('@/views/development-evidence/low-security/index.vue'),
            meta: {
              title: '低密产品开发存证'
            }
          },
          {
            path: 'high-security',
            name: 'HighSecurityEvidence',
            component: () => import('@/views/development-evidence/high-security/index.vue'),
            meta: {
              title: '高密产品开发存证'
            }
          }
        ]
      },
      {
        path: 'transaction-evidence',
        name: 'TransactionEvidence',
        component: () => import('@/views/transaction-evidence/index.vue'),
        meta: {
          title: '产品交易存证'
        }
      },
      {
        path: 'delivery-evidence',
        name: 'DeliveryEvidence',
        component: () => import('@/views/delivery-evidence/main.vue'),
        meta: {
          title: '交付存证'
        },
        redirect: '/delivery-evidence/low-security',
        children: [
          {
            path: 'low-security',
            name: 'LowSecurityDelivery',
            component: () => import('@/views/delivery-evidence/low-security/index.vue'),
            meta: {
              title: '低密数据交付存证',
              parent: '交付存证'
            }
          },
          {
            path: 'high-security',
            name: 'HighSecurityDelivery',
            component: () => import('@/views/delivery-evidence/high-security/index.vue'),
            meta: {
              title: '高密数据交付存证',
              parent: '交付存证'
            }
          }
        ]
      },
      {
        path: 'requirement-evidence',
        name: 'RequirementEvidence',
        component: () => import('@/views/requirement-evidence/publish/index.vue'),
        meta: {
          title: '需求定制上架存证'
        }
      },
      {
        path: 'requirement-claim-evidence',
        name: 'RequirementClaimEvidence',
        component: () => import('@/views/requirement-evidence/claim/index.vue'),
        meta: {
          title: '需求认领记录存证'
        }
      },
      {
        path: 'user-evidence',
        name: 'UserEvidence',
        component: () => import('@/views/user-evidence/index.vue'),
        meta: {
          title: '用户体系存证'
        }
      }
    ]
  }
]

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = `${to.meta.title || '存证管理中心'} - 数据要素运营平台`
  next()
})

export default router 