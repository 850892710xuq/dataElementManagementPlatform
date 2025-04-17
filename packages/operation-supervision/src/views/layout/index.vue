<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <header class="app-header">
      <div class="logo">
        <el-icon class="logo-icon"><Monitor /></el-icon>
        <span>运营监管中心</span>
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
          <!-- 日志监管审计 -->
          <el-sub-menu index="/log">
            <template #title>
              <el-icon><Document /></el-icon>
              <span>日志监管审计</span>
            </template>
            <el-menu-item index="/log/operation">操作日志</el-menu-item>
            <el-menu-item index="/log/login">登录日志</el-menu-item>
          </el-sub-menu>

          <!-- 投诉与建议监管 -->
          <el-sub-menu index="/complaint">
            <template #title>
              <el-icon><ChatLineSquare /></el-icon>
              <span>投诉与建议监管</span>
            </template>
            <el-menu-item index="/complaint/record">投诉记录</el-menu-item>
            <el-menu-item index="/complaint/suggestion">建议记录</el-menu-item>
          </el-sub-menu>

          <!-- 场景监管 -->
          <el-sub-menu index="/monitor">
            <template #title>
              <el-icon><Monitor /></el-icon>
              <span>场景监管</span>
            </template>
            <el-menu-item index="/monitor/permission">用户权限监管</el-menu-item>
            <el-menu-item index="/monitor/behavior">用户行为监管</el-menu-item>
            <el-menu-item index="/monitor/order">订单交易监管</el-menu-item>
            <el-menu-item index="/monitor/catalog">数据目录监管</el-menu-item>
            <el-menu-item index="/monitor/authorization">授权过程监管</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </aside>

      <!-- 右侧内容区 -->
      <main class="app-content">
        <!-- 面包屑导航 -->
        <el-breadcrumb class="app-breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
            {{ item }}
          </el-breadcrumb-item>
        </el-breadcrumb>

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
import { useRoute } from 'vue-router'
import { Document, ChatLineSquare, Monitor, User, Setting, SwitchButton, CaretBottom } from '@element-plus/icons-vue'

// 菜单折叠状态
const isCollapse = ref(false)

// 获取当前路由
const route = useRoute()

// 计算当前激活的菜单项
const activeMenu = computed(() => route.path)

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

      .app-breadcrumb {
          padding: 16px 20px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
      }

      .content-container {
        padding: 20px;
        border-radius: 4px;
        // min-height: calc(100% - 55px);
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