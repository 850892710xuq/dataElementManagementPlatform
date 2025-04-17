import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import { 
  DataLine, 
  DocumentAdd, 
  Timer, 
  VideoPlay, 
  List,
  Document,
  DocumentChecked
} from '@element-plus/icons-vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/explore-data',
      children: [
        {
          path: 'explore-data',
          name: 'ExploreData',
          component: () => import('@/views/explore-data/index.vue'),
          meta: {
            title: '探查数据管理',
            icon: DataLine
          }
        },
        {
          path: 'explore-apply',
          name: 'ExploreApply',
          component: () => import('@/views/explore-apply/index.vue'),
          meta: {
            title: '数据探查申请',
            icon: DocumentAdd
          }
        },
        {
          path: 'task-schedule',
          name: 'TaskSchedule',
          component: () => import('@/components/RouterContainer.vue'),
          meta: {
            title: '探查任务调度管理',
            icon: Timer
          },
          redirect: '/task-schedule/running',
          children: [
            {
              path: 'running',
              name: 'RunningTasks',
              component: () => import('@/views/task-schedule/running.vue'),
              meta: {
                title: '运行任务',
                icon: VideoPlay
              }
            },
            {
              path: 'queued',
              name: 'QueuedTasks',
              component: () => import('@/views/task-schedule/queued.vue'),
              meta: {
                title: '排队任务',
                icon: List
              }
            }
          ]
        },
        {
          path: 'explore-record',
          name: 'ExploreRecord',
          component: () => import('@/views/explore-record/index.vue'),
          meta: {
            title: '探查记录管理',
            icon: Document
          }
        },
        {
          path: 'explore-report',
          name: 'ExploreReport',
          component: () => import('@/views/explore-report/index.vue'),
          meta: {
            title: '数据产品探查报告',
            icon: DocumentChecked
          }
        }
      ]
    }
  ]
})

export default router 