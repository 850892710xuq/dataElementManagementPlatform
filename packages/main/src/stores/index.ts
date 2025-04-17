import { createPinia } from 'pinia'
import { useUserStore } from './user'

// 创建集中的store对象并导出
export function createStore() {
  const pinia = createPinia()
  
  // 获取所有store实例
  const store = {
    user: useUserStore(pinia)
  }
  
  return store
} 