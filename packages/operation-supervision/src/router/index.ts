import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/layout/index.vue'),
    redirect: '/log/operation',
    children: [
      // 日志监管审计
      {
        path: '/log',
        name: 'Log',
        redirect: '/log/operation',
        meta: { title: '日志监管审计' },
        children: [
          {
            path: 'operation',
            name: 'OperationLog',
            component: () => import('../views/log/operation/index.vue'),
            meta: { title: '操作日志' }
          },
          {
            path: 'login',
            name: 'LoginLog',
            component: () => import('../views/log/login/index.vue'),
            meta: { title: '登录日志' }
          }
        ]
      },
      // 投诉与建议监管
      {
        path: '/complaint',
        name: 'Complaint',
        redirect: '/complaint/record',
        meta: { title: '投诉与建议监管' },
        children: [
          {
            path: 'record',
            name: 'ComplaintList',
            component: () => import('../views/complaint/record/index.vue'),
            meta: { title: '投诉记录' }
          },
          {
            path: 'suggestion',
            name: 'SuggestionList',
            component: () => import('../views/complaint/suggestion/index.vue'),
            meta: { title: '建议记录' }
          }
        ]
      },
      // 场景监管
      {
        path: '/monitor',
        name: 'Monitor',
        redirect: '/monitor/permission',
        meta: { title: '场景监管' },
        children: [
          {
            path: 'permission',
            name: 'PermissionMonitor',
            component: () => import('../views/monitor/permission/index.vue'),
            meta: { title: '用户权限监管' }
          },
          {
            path: 'behavior',
            name: 'BehaviorMonitor',
            component: () => import('../views/monitor/behavior/index.vue'),
            meta: { title: '用户行为监管' }
          },
          {
            path: 'order',
            name: 'OrderMonitor',
            component: () => import('../views/monitor/order/index.vue'),
            meta: { title: '订单交易监管' }
          },
          {
            path: 'catalog',
            name: 'CatalogMonitor',
            component: () => import('../views/monitor/catalog/index.vue'),
            meta: { title: '数据目录监管' }
          },
          {
            path: 'authorization',
            name: 'AuthorizationMonitor',
            component: () => import('../views/monitor/authorization/index.vue'),
            meta: { title: '授权过程监管' }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 