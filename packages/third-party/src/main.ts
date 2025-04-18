// 导入微前端配置
try {
  require('./public-path.js')
} catch (e) {
  console.warn('加载public-path.js失败，可忽略此警告')
}

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'
import router from './router'
import './styles/third-party.scss'  // 全局样式

// 异步导入Mock数据，避免生产环境打包
// 只在开发环境下使用mock
if (process.env.NODE_ENV === 'development') {
  import('./mock').then(({ mockXHR }) => {
    mockXHR()
  }).catch(err => {
    console.warn('Mock加载失败，忽略此错误', err)
  })
}

// 创建Vue应用
const app = createApp(App)

// 使用插件
app.use(createPinia())
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 挂载应用
app.mount('#app')

// 对外暴露微前端生命周期钩子
if (window.__POWERED_BY_QIANKUN__) {
  // @ts-ignore
  window.unmount = () => {
    app.unmount()
  }
} 