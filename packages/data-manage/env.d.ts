/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue' {
  export * from '@vue/runtime-dom'
  export * from '@vue/runtime-core'
}

declare module 'vue/dist/vue.esm-bundler.js' {
  export * from 'vue'
  const _default: any
  export default _default
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DataRegisterForm: DefineComponent<{
      type: 'add' | 'edit' | 'change' | 'cancel'
      formData: Record<string, any>
      editId?: string
      addDataRegister: (data: any) => Promise<boolean>
      updateDataRegister: (id: string, data: any) => Promise<boolean>
    }>
    DataRegisterDetail: DefineComponent<{
      data: Record<string, any>
    }>
    DataRegisterApprove: DefineComponent<{
      data: Record<string, any>
      approveDataRegister: (id: string, data: any) => Promise<boolean>
    }>
  }
} 