<template>
  <div class="requirement-evidence-container">
    <div class="tab-navigation">
      <router-link to="/requirement-evidence/publish" class="tab-item">需求定制上架存证</router-link>
      <router-link to="/requirement-evidence/claim" class="tab-item">需求认领记录存证</router-link>
    </div>
    
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
// 无需引入子组件，由路由加载
</script>

<style lang="scss" scoped>
.requirement-evidence-container {
  min-height: 100%;
  padding: 20px;
  background-color: #f0f2f5;
  
  .tab-navigation {
    margin-bottom: 20px;
    display: flex;
    border-bottom: 1px solid #e4e7ed;
    
    .tab-item {
      padding: 0 20px;
      font-size: 15px;
      height: 40px;
      line-height: 40px;
      text-decoration: none;
      color: #606266;
      margin-right: 20px;
      position: relative;
      
      &.router-link-active {
        color: #409eff;
        font-weight: 500;
        
        &:after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #409eff;
        }
      }
      
      &:hover {
        color: #409eff;
      }
    }
  }
  
  .content-container {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
</style> 