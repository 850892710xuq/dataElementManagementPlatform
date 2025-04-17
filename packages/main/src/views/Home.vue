<template>
  <div class="home-container">
    <el-row :gutter="20">
      <el-col :span="6" v-for="system in systems" :key="system.id">
        <el-card class="system-card" @click="navigateToSystem(system)">
          <template #header>
            <div class="card-header">
              <el-icon><component :is="system.icon" /></el-icon>
              <span>{{ system.name }}</span>
            </div>
          </template>
          <div class="card-content">
            <p class="description">{{ system.description }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, markRaw } from 'vue'
import { useRouter } from 'vue-router'
import {
  Platform,
  DataLine,
  Lock,
  Service,
  ShoppingCart,
  Search,
  Monitor,
  Setting,
  Document,
  TrendCharts
} from '@element-plus/icons-vue'

const router = useRouter()

const systems = ref([
  {
    id: 1,
    name: '门户管理中心',
    path: '/portal',
    icon: markRaw(Platform),
    description: '系统门户展示和内容管理，提供统一的信息发布和展示平台。'
  },
  {
    id: 2,
    name: '数据管理中心',
    path: '/data-manage',
    icon: markRaw(DataLine),
    description: '提供数据资源的统一管理，包括数据采集、清洗、存储等功能。'
  },
  {
    id: 3,
    name: '授权运营中心',
    path: '/auth-operation',
    icon: markRaw(Lock),
    description: '处理数据授权和运营，确保数据使用的合规性和安全性。'
  },
  {
    id: 4,
    name: '三方服务中心',
    path: '/third-service',
    icon: markRaw(Service),
    description: '管理第三方服务接入，提供服务集成和管理功能。'
  },
  {
    id: 5,
    name: '交易管理中心',
    path: '/trade-manage',
    icon: markRaw(ShoppingCart),
    description: '处理数据交易相关业务，包括定价、结算等功能。'
  },
  {
    id: 6,
    name: '数据探查中心',
    path: '/data-explore',
    icon: markRaw(Search),
    description: '提供数据分析和探索功能，支持数据可视化展示。'
  },
  {
    id: 7,
    name: '数据开发中心',
    path: '/data-develop',
    icon: markRaw(Monitor),
    description: '数据处理和开发环境，支持数据加工和处理。'
  },
  {
    id: 8,
    name: '综合管理中心',
    path: '/general-manage',
    icon: markRaw(Setting),
    description: '系统综合管理功能，包括用户、权限等管理。'
  },
  {
    id: 9,
    name: '存证管理中心',
    path: '/evidence-manage',
    icon: markRaw(Document),
    description: '数据存证和认证功能，确保数据的真实性和可追溯性。'
  },
  {
    id: 10,
    name: '运营监管中心',
    path: '/operation-monitor',
    icon: markRaw(TrendCharts),
    description: '系统运营监控，提供实时监控和预警功能。'
  }
])

const navigateToSystem = (system: any) => {
  // 子系统URL映射
  const systemUrls: Record<string, string> = {
    '/data-manage': 'http://localhost:8002', // 数据管理中心
    '/auth-operation': 'http://localhost:8003', // 授权运营中心
    '/third-service': 'http://localhost:8004', // 三方服务中心
    '/trade-manage': 'http://localhost:8005', // 交易管理中心
    '/data-explore': 'http://localhost:8006', // 数据探查中心
    '/data-develop': 'http://localhost:8007', // 数据开发中心
    '/general-manage': 'http://localhost:8008', // 综合管理中心
    '/evidence-manage': 'http://localhost:8009', // 存证管理中心
    '/operation-monitor': 'http://localhost:8010', // 运营监管中心
    '/portal': 'http://localhost:3000/' // 门户管理中心
  }
  
  const url = systemUrls[system.path]
  if (url) {
    // 打开新标签页访问子系统
    window.open(url, '_blank')
  } else {
    // 对于没有独立地址的系统，仍然使用路由导航
    router.push(system.path)
  }
}
</script>

<style scoped lang="scss">
.home-container {
  padding: 20px;
  
  .system-card {
    height: 180px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .card-header {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      font-weight: 500;
      
      .el-icon {
        font-size: 20px;
      }
    }
    
    .card-content {
      .description {
        margin: 0;
        color: #666;
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
}
</style> 