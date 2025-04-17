<template>
  <div class="micro-app-container">
    <div id="micro-container"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 当前微应用名称
const microAppName = route.path.split('/')[1]

onMounted(() => {
  console.log(`[主应用] 进入微应用容器：${microAppName}`)
})

onBeforeUnmount(() => {
  console.log(`[主应用] 离开微应用容器：${microAppName}`)
})
</script>

<style lang="scss" scoped>
.micro-app-container {
  height: 100%;
  width: 100%;
  
  #micro-container {
    height: 100%;
    width: 100%;
  }
}
</style> 