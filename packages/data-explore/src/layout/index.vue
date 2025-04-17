<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <header class="app-header">
      <div class="logo">
        <el-icon class="logo-icon"><Monitor /></el-icon>
        <span>数据探查中心</span>
      </div>
      <div class="header-right">
        <el-dropdown>
          <span class="user-info">
            <el-icon class="avatar"><User /></el-icon>
            <span class="username">管理员</span>
            <el-icon><CaretBottom /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-icon><SwitchButton /></el-icon>退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </header>

    <!-- 主体内容区 -->
    <div class="app-main">
      <!-- 左侧菜单 -->
      <aside class="app-sidebar">
        <el-menu
          :default-active="activeMenu"
          class="sidebar-menu"
          :router="true"
          :collapse="isCollapse"
        >
          <!-- 根据路由动态生成菜单 -->
          <template v-for="(route, index) in routesList" :key="index">
            <!-- 没有子菜单的菜单项 -->
            <el-menu-item v-if="!route.children || route.children.length === 0" :index="'/' + route.path">
              <el-icon v-if="route.meta && route.meta.icon">
                <component :is="route.meta.icon"></component>
              </el-icon>
              <template #title>{{ route.meta.title }}</template>
            </el-menu-item>
            
            <!-- 有子菜单的菜单项 -->
            <el-sub-menu v-else :index="'/' + route.path">
              <template #title>
                <el-icon v-if="route.meta && route.meta.icon">
                  <component :is="route.meta.icon"></component>
                </el-icon>
                <span>{{ route.meta.title }}</span>
              </template>
              
              <!-- 子菜单项 -->
              <el-menu-item v-for="(subRoute, subIndex) in route.children" :key="subIndex" :index="'/' + route.path + '/' + subRoute.path">
                <el-icon v-if="subRoute.meta && subRoute.meta.icon">
                  <component :is="subRoute.meta.icon"></component>
                </el-icon>
                <span>{{ subRoute.meta.title }}</span>
              </el-menu-item>
            </el-sub-menu>
          </template>
        </el-menu>
      </aside>

      <!-- 右侧内容区 -->
      <main class="app-content">
        <!-- 面包屑导航 -->
        <div class="breadcrumb-container">
          <el-breadcrumb class="app-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
              {{ item }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <!-- 路由视图 -->
        <div class="content-container">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { 
  Monitor, 
  User, 
  Setting, 
  SwitchButton, 
  CaretBottom, 
  Search,
  DataLine,
  DocumentAdd,
  Timer,
  VideoPlay,
  List
} from '@element-plus/icons-vue'

// 菜单折叠状态
const isCollapse = ref(false)

// 获取当前路由和路由器
const route = useRoute()
const router = useRouter()

// 获取路由配置中的路由列表
const routesList = computed(() => {
  return router.options.routes[0].children || []
})

// 计算当前激活的菜单项
const activeMenu = computed(() => {
  const path = route.path
  // 如果路径是根路径，默认选中探查数据管理
  if (path === '/') return '/explore-data'
  return path
})

// 计算面包屑导航
const breadcrumbList = computed(() => {
  const matched = route.matched
  return matched.slice(1).map(item => item.meta.title)
})
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
  display: flex;
  flex-direction: column;

  // 顶部导航栏
  .app-header {
    height: 60px;
    background-color: #3370ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: #fff;

    .logo {
      display: flex;
      align-items: center;
      
      .logo-icon {
        font-size: 32px;
        margin-right: 12px;
        color: #ffffff;
      }

      span {
        font-size: 18px;
        font-weight: 600;
        color: #ffffff;
      }
    }

    .header-right {
      .user-info {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        transition: background-color 0.3s;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .username {
          margin: 0 8px;
          font-size: 14px;
          color: #ffffff;
        }

        .avatar {
          font-size: 24px;
          color: #ffffff;
        }

        .el-icon {
          color: #ffffff;
        }
      }
    }
  }

  // 主体内容区
  .app-main {
    flex: 1;
    display: flex;
    overflow: hidden;

    // 左侧菜单
    .app-sidebar {
      width: 220px;
      background-color: #ffffff;
      transition: width 0.3s;
      border-right: 1px solid #dcdfe6;

      &.collapsed {
        width: 64px;
      }

      .sidebar-menu {
        height: 100%;
        border-right: none;
      }
    }

    // 右侧内容区
    .app-content {
      flex: 1;
      background-color: #f0f2f5;
      overflow: auto;

      .breadcrumb-container {
        padding: 16px 20px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

        .app-breadcrumb {
          :deep(.el-breadcrumb__item) {
            .el-breadcrumb__inner {
              color: #606266;
              font-size: 14px;
              font-weight: normal;
              
              &.is-link {
                color: #606266;
                
                &:hover {
                  color: #3370ff;
                }
              }
            }
          }
        }
      }

      .content-container {
        padding: 20px;
        border-radius: 4px;
      }
    }
  }
}

// Element Plus 样式覆盖
:deep(.el-menu) {
  border-right: none;
  background-color: #ffffff;

  .el-menu-item, .el-sub-menu__title {
    color: #303133;

    &:hover {
      color: #3370ff;
      background-color: #f5f7fa;
    }
  }

  .el-menu-item.is-active {
    color: #3370ff;
    background-color: #ecf5ff;
  }

  .el-icon {
    color: #909399;
  }
}
</style> 