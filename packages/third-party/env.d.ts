/// <reference types="vite/client" />

// 声明Vue文件模块
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 微前端环境配置
interface Window {
  __POWERED_BY_QIANKUN__?: boolean
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string
  qiankunProps?: {
    container?: HTMLElement
    routerBase?: string
  }
} 