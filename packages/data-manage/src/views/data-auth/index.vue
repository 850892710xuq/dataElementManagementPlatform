<template>
  <div class="redirect-container">
    <div class="loading">重定向中...</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 组件挂载时，自动重定向到列表页
onMounted(() => {
  router.replace('/data-auth/list')
})
</script>

<style scoped>
.redirect-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading {
  font-size: 18px;
  color: #999;
}
</style> 