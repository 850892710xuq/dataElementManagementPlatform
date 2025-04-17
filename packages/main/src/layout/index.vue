<template>
  <el-container class="layout-container">
    <el-header>
      <div class="header-left">
        <h1 class="logo">数据要素运营平台</h1>
      </div>
      <div class="header-right">
        <el-dropdown @command="handleCommand">
          <span class="user-info">
            {{ userStore.userInfo?.name }}
            <el-icon><ArrowDown /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
    
    <el-aside>
      <!-- Add your aside content here -->
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'

const userStore = useUserStore()
const router = useRouter()

const handleCommand = (command: string) => {
  if (command === 'logout') {
    userStore.logout()
    router.push('/login')
  }
}
</script>

<style scoped lang="scss">
.layout-container {
  height: 100vh;
  
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #001529;
    padding: 0 20px;
    height: 60px;
    
    .header-left {
      .logo {
        color: white;
        margin: 0;
        font-size: 20px;
        font-weight: 500;
      }
    }
    
    .header-right {
      .user-info {
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 4px;
        
        .el-icon {
          font-size: 12px;
        }
      }
    }
  }
  
  .el-main {
    padding: 20px;
    background-color: #f0f2f5;
    height: calc(100vh - 60px);
    overflow-y: auto;
  }
}
</style> 