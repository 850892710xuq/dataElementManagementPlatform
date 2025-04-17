<template>
  <div class="data-auth-main">
    <!-- 子路由视图 -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 组件挂载时，如果访问的是父路由，则重定向到列表页
onMounted(() => {
  if (route.path === '/data-auth') {
    router.replace('/data-auth/list')
  }
})
</script>

<style scoped>
.data-auth-main {
  height: 100%;
  width: 100%;
}
</style> 