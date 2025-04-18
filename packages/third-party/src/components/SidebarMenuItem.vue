<template>
  <template v-if="menuItem.children && menuItem.children.length">
    <!-- 有子菜单的情况 -->
    <el-sub-menu :index="menuItem.path">
      <template #title>
        <el-icon v-if="menuItem.icon">
          <component :is="menuItem.icon"></component>
        </el-icon>
        <span>{{ menuItem.title }}</span>
      </template>
      
      <!-- 递归渲染子菜单 -->
      <template v-for="child in menuItem.children" :key="child.path">
        <sidebar-menu-item v-if="child.children && child.children.length" :menu-item="child" />
        <el-menu-item v-else :index="child.path" @click="handleMenuClick(child)">
          <el-icon v-if="child.icon">
            <component :is="child.icon"></component>
          </el-icon>
          <span>{{ child.title }}</span>
        </el-menu-item>
      </template>
    </el-sub-menu>
  </template>
  
  <template v-else>
    <!-- 无子菜单的情况 -->
    <el-menu-item :index="menuItem.path" @click="handleMenuClick(menuItem)">
      <el-icon v-if="menuItem.icon">
        <component :is="menuItem.icon"></component>
      </el-icon>
      <span>{{ menuItem.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

// 定义props
const props = defineProps({
  menuItem: {
    type: Object,
    required: true
  }
})

// 使用router
const router = useRouter()

// 处理菜单点击事件
const handleMenuClick = (menu: any) => {
  router.push(menu.path)
}
</script>

<style lang="scss" scoped>
.el-menu-item, :deep(.el-sub-menu__title) {
  height: 56px;
  line-height: 56px;
}

.el-icon {
  margin-right: 10px;
  font-size: 18px;
}
</style> 