<template>
  <div class="register-objection-container">
    <!-- 子路由内容 -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 初始化时如果是根路径，默认跳转到公示列表
onMounted(() => {
  if (route.path === '/register-objection') {
    router.push('/register-objection/publication')
  }
})
</script>

<style scoped>
.register-objection-container {
  width: 100%;
  height: 100%;
}
</style> 