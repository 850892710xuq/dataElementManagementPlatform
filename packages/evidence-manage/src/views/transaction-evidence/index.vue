<template>
  <div class="transaction-evidence-container">
    <!-- 直接显示产品交易存证组件，不使用标签页 -->
    <product-transaction-evidence />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Search, Refresh, Download, Check, CircleCheckFilled, CircleCloseFilled, View } from '@element-plus/icons-vue'
// 导入产品交易存证组件
import ProductTransactionEvidence from './components/ProductTransactionEvidence.vue'
</script>

<style lang="scss" scoped>
.transaction-evidence-container {
  min-height: 100%;
}
</style> 