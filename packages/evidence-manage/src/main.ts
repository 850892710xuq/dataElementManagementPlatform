import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/index.scss'
import './styles/evidence.scss'  // 引入全局样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 在开发环境下启用Mock服务
if (import.meta.env.DEV) {
  console.log('已启用Mock服务，API请求将返回模拟数据')
}

// 应用实例
const app = createApp(App)

// 注册ElementPlus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 注册Element Plus
app.use(ElementPlus, { 
  locale: zhCn,
  size: 'default' 
})

// 注册状态管理
app.use(createPinia())

// 注册路由
app.use(router)

// 挂载应用
app.mount('#app') 