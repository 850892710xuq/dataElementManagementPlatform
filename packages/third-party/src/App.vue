<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// 简化代码避免可能的错误
</script>

<style>
:root {
  --sidebar-width: 220px;
  --sidebar-collapsed-width: 64px;
  --header-height: 60px;
  --bg-color: #f0f2f5;
  --border-light: #e4e7ed;
  --border-dark: #dcdfe6;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: #303133;
}

#app {
  height: 100%;
}

/* 清除元素默认边距 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 修复ElementPlus下拉菜单等弹出组件的z-index */
.el-popper {
  z-index: 2000 !important;
}

/* 空白页面样式 */
.empty-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 20px;
}

.empty-page h3 {
  color: #606266;
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 20px;
}
</style> 