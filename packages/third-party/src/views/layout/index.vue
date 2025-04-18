<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <header class="app-header">
      <div class="logo">
        <el-icon class="logo-icon"><Monitor /></el-icon>
        <span>三方服务中心</span>
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
              <el-dropdown-item divided>退出登录</el-dropdown-item>
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
          background-color="#ffffff"
          text-color="#303133"
          active-text-color="#3370ff"
          :unique-opened="true"
          router
        >
          <template v-for="menu in menuList" :key="menu.path">
            <!-- 一级菜单 -->
            <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
              <template #title>
                <el-icon v-if="menu.icon">
                  <component :is="menu.icon"></component>
                </el-icon>
                <span>{{ menu.title }}</span>
              </template>
              
              <!-- 二级菜单 -->
              <el-menu-item 
                v-for="subMenu in menu.children" 
                :key="subMenu.path"
                :index="subMenu.path"
              >
                <el-icon v-if="subMenu.icon">
                  <component :is="subMenu.icon"></component>
                </el-icon>
                <span>{{ subMenu.title }}</span>
              </el-menu-item>
            </el-sub-menu>
            
            <!-- 没有子菜单的一级菜单 -->
            <el-menu-item v-else :index="menu.path">
              <el-icon v-if="menu.icon">
                <component :is="menu.icon"></component>
              </el-icon>
              <span>{{ menu.title }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </aside>

      <!-- 右侧内容区 -->
      <main class="app-content">
        <!-- 面包屑导航 -->
        <el-breadcrumb class="app-breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index">
            {{ item }}
          </el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 内容区 -->
        <div class="content-container">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { 
  Document, 
  CaretBottom, 
  DataLine, 
  Connection, 
  Reading, 
  Notification, 
  DataAnalysis, 
  Promotion, 
  DocumentChecked,
  Edit,
  Delete,
  Search,
  Monitor,
  Setting,
  Lock,
  Money,
  User
} from '@element-plus/icons-vue';

// 路由相关
const router = useRouter();
const route = useRoute();

// 面包屑导航
const breadcrumbs = computed(() => {
  const matched = route.matched.filter(item => item.meta && item.meta.title);
  return matched.map(item => item.meta.title);
});

// 当前激活的菜单
const activeMenu = computed(() => {
  return route.meta.activeMenu ? route.meta.activeMenu as string : route.path;
});

// 菜单数据
const menuList = computed(() => {
  // 筛选出第一级子路由
  const firstLevelChildren = router.options.routes[0]?.children || [];
  // 提取菜单信息
  return firstLevelChildren.map(route => {
    // 基本菜单项
    const menuItem = {
      path: route.path,
      title: route.meta?.title as string,
      icon: route.meta?.icon,
      children: [] as { path: string; title: string; icon?: string }[]
    };
    
    // 处理子菜单
    if (route.children && route.children.length) {
      route.children.forEach(child => {
        // 排除详情页等不需要显示在菜单中的页面
        if (!child.path.includes('detail')) {
          menuItem.children.push({
            path: `${route.path}/${child.path}`,
            title: child.meta?.title as string,
            icon: child.meta?.icon as string
          });
        }
      });
    }
    
    return menuItem;
  }).filter(item => item.title); // 过滤掉没有标题的菜单项
});

// 页面跳转
const handleSelect = (path: string) => {
  router.push(path);
};

// 页面初始化
onMounted(() => {
  // 这里可以处理一些初始化逻辑
});
</script>

<style scoped lang="scss">
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
    z-index: 1000;

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

        .el-icon {
          color: #ffffff;
        }

        .avatar {
          font-size: 24px;
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
      width: var(--sidebar-width);
      background-color: #ffffff;
      transition: width 0.3s;
      position: relative;
      overflow-y: auto;
      overflow-x: hidden;
      border-right: 1px solid #dcdfe6;
      
      .sidebar-menu {
        height: 100%;
        border-right: none;
      }
    }

    // 右侧内容区
    .app-content {
      flex: 1;
      background-color: var(--bg-color);
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
      }
    }
  }
}

// 过渡动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 