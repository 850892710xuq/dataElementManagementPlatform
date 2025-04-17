import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/',
      name: 'Layout',
      component: () => import('../layout/index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/Home.vue')
        },
        // 微应用路由 - 需要在布局内显示微应用
        {
          path: 'data-manage/:page*',
          name: 'DataManageSystem',
          component: () => import('../views/MicroAppContainer.vue')
        },
        {
          path: 'portal/:page*',
          name: 'PortalSystem',
          component: () => import('../views/MicroAppContainer.vue')
        },
        {
          path: 'auth-operation/:page*',
          name: 'AuthOperationSystem',
          component: () => import('../views/MicroAppContainer.vue')
        },
        {
          path: 'third-service/:page*',
          name: 'ThirdServiceSystem',
          component: () => import('../views/MicroAppContainer.vue')
        },
        {
          path: 'trade-manage/:page*',
          name: 'TradeManageSystem',
          component: () => import('../views/MicroAppContainer.vue')
        },
        {
          path: 'data-explore/:page*',
          name: 'DataExploreSystem',
          component: () => import('../views/MicroAppContainer.vue')
        },
        {
          path: 'data-develop/:page*',
          name: 'DataDevelopSystem',
          component: () => import('../views/MicroAppContainer.vue')
        },
        {
          path: 'general-manage/:page*',
          name: 'GeneralManageSystem',
          component: () => import('../views/MicroAppContainer.vue')
        },
        {
          path: 'evidence-manage/:page*',
          name: 'EvidenceManageSystem',
          component: () => import('../views/MicroAppContainer.vue')
        },
        {
          path: 'operation-monitor/:page*',
          name: 'OperationMonitorSystem',
          component: () => import('../views/MicroAppContainer.vue')
        }
      ]
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  
  if (to.path !== '/login' && !userStore.token) {
    next('/login')
  } else {
    next()
  }
})

export default router 