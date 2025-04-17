import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/data-catalog',
    children: [
      {
        path: 'data-catalog',
        name: 'DataCatalog',
        component: () => import('@/views/data-catalog/index.vue'),
        meta: {
          title: '数据目录管理'
        }
      },
      {
        path: 'data-access',
        name: 'DataAccess',
        component: () => import('@/views/data-access/index.vue'),
        meta: {
          title: '数据接入管理'
        }
      },
      {
        path: 'data-register',
        name: 'DataRegister',
        component: () => import('@/views/data-register/index.vue'),
        meta: {
          title: '数据登记管理'
        }
      },
      {
        path: 'register-objection',
        name: 'RegisterObjection',
        component: () => import('@/views/register-objection/index.vue'),
        meta: {
          title: '登记异议管理'
        },
        redirect: '/register-objection/publication',
        children: [
          {
            path: 'publication',
            name: 'PublicationList',
            component: () => import('@/views/register-objection/publication/index.vue'),
            meta: {
              title: '公示列表',
              parent: '登记异议管理'
            }
          },
          {
            path: 'objection',
            name: 'ObjectionList',
            component: () => import('@/views/register-objection/objection/index.vue'),
            meta: {
              title: '登记异议受理',
              parent: '登记异议管理'
            }
          }
        ]
      },
      {
        path: 'data-auth',
        name: 'DataAuth',
        component: () => import('@/views/data-auth/main.vue'),
        meta: {
          title: '数据授权管理'
        },
        redirect: '/data-auth/list',
        children: [
          {
            path: 'list',
            name: 'DataAuthList',
            component: () => import('@/views/data-auth/list/index.vue'),
            meta: {
              title: '数据授权列表',
              parent: '数据授权管理'
            }
          },
          {
            path: 'audit',
            name: 'DataAuthAudit',
            component: () => import('@/views/data-auth/audit/index.vue'),
            meta: {
              title: '数据授权审核',
              parent: '数据授权管理'
            }
          }
        ]
      }
    ]
  }
]

// 创建路由
const router = createRouter({
  history: createWebHistory('/'),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = `${to.meta.title || '数据管理中心'} - 数据要素运营平台`
  next()
})

export default router 