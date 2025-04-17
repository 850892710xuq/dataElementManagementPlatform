<template>
  <div class="layout">
    <!-- 顶部导航 -->
    <header class="header">
      <div class="header-left">
        <el-icon class="logo"><Monitor /></el-icon>
        <h1 class="title">存证管理中心</h1>
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

    <div class="container">
      <!-- 左侧菜单 -->
      <aside class="sidebar">
        <el-menu
          :default-active="activeIndex"
          class="sidebar-menu"
          router
          @select="handleSelect"
        >
          <el-menu-item index="/data-evidence">
            <el-icon><Document /></el-icon>
            <template #title>数据登记存证</template>
          </el-menu-item>
          
          <el-sub-menu index="/development-evidence">
            <template #title>
              <el-icon><Lock /></el-icon>
              <span>开发存证</span>
            </template>
            <el-menu-item index="/development-evidence/low-security">低密产品开发存证</el-menu-item>
            <el-menu-item index="/development-evidence/high-security">高密产品开发存证</el-menu-item>
          </el-sub-menu>
          
          <el-menu-item index="/transaction-evidence">
            <el-icon><ShoppingCart /></el-icon>
            <template #title>产品交易存证</template>
          </el-menu-item>
          
          <el-sub-menu index="/delivery-evidence">
            <template #title>
              <el-icon><Box /></el-icon>
              <span>交付存证</span>
            </template>
            <el-menu-item index="/delivery-evidence/low-security">低密数据交付存证</el-menu-item>
            <el-menu-item index="/delivery-evidence/high-security">高密数据交付存证</el-menu-item>
          </el-sub-menu>
          
          <el-sub-menu index="/requirement-evidence">
            <template #title>
              <el-icon><List /></el-icon>
              <span>需求存证</span>
            </template>
            <el-menu-item index="/requirement-evidence">需求定制上架存证</el-menu-item>
            <el-menu-item index="/requirement-claim-evidence">需求认领记录存证</el-menu-item>
          </el-sub-menu>
          
          <el-menu-item index="/user-evidence">
            <el-icon><Avatar /></el-icon>
            <template #title>用户体系存证</template>
          </el-menu-item>
        </el-menu>
      </aside>

      <!-- 右侧内容区 -->
      <main class="main">
        <!-- 面包屑导航 -->
        <div class="breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-if="parentTitle">{{ parentTitle }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ pageTitle }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <!-- 页面内容 -->
        <div class="content">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { 
  Monitor,
  User, 
  SwitchButton,
  CaretBottom,
  Document, 
  Lock, 
  ShoppingCart, 
  Box, 
  List, 
  Avatar
} from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()

// 当前激活的菜单项
const activeIndex = ref('')

// 计算当前页面标题
const pageTitle = computed(() => {
  return route.meta.title as string || '存证管理中心'
})

// 计算父级标题
const parentTitle = computed(() => {
  return route.meta.parent as string || ''
})

// 监听路由变化，更新激活的菜单项
watch(
  () => route.path,
  (path) => {
    // 提取路径
    activeIndex.value = path
  },
  { immediate: true }
)

// 处理菜单选择事件
const handleSelect = (key: string) => {
  router.push(key)
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    height: 60px;
    background-color: #3370ff;
    border-bottom: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .header-left {
      display: flex;
      align-items: center;

      .logo {
        font-size: 32px;
        color: #ffffff;
        margin-right: 12px;
      }

      .title {
        font-size: 18px;
        font-weight: 600;
        color: #ffffff;
        margin: 0;
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

  .container {
    flex: 1;
    display: flex;
    overflow: hidden;

    .sidebar {
      width: 220px;
      background-color: #ffffff;
      border-right: 1px solid #dcdfe6;
      overflow-y: auto;
      overflow-x: hidden;

      :deep(.sidebar-menu) {
        border-right: none;
        background-color: #ffffff;

        .el-menu-item {
          height: 50px;
          line-height: 50px;
          color: #303133;

          &:hover {
            color: #3370ff;
            background-color: #f5f7fa;
          }

          &.is-active {
            color: #3370ff;
            background-color: #ecf5ff;
          }

          .el-icon {
            font-size: 16px;
            margin-right: 12px;
          }
        }
      }
    }

    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background-color: #f0f2f5;

      .breadcrumb {
        padding: 16px 20px;
        background-color: #fff;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
      }

      .content {
        flex: 1;
        padding: 20px;
        overflow-y: auto;
      }
    }
  }
}
</style> 