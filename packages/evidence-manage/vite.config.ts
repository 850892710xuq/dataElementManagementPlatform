import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'
import { viteMockServe } from 'vite-plugin-mock'

// 导入模拟数据
import {
  requirementPublishEvidenceList,
  requirementClaimEvidenceList
} from './src/mock/evidence'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // 设置基础路径为根路径，确保资源正确加载
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'src/mock',
      enable: true,
      watchFiles: true,
      logger: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.vue', '.json'] // 自动解析扩展名
  },
  server: {
    port: 8009,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    hmr: { 
      overlay: true,
      protocol: 'ws'
    },
    open: true,
    // 添加静态文件处理，阻止直接访问源文件
    fs: {
      strict: true,
      allow: ['..']
    },
    // 添加API请求代理
    proxy: {
      // 代理所有/api开头的请求
      '/api': {
        target: 'http://localhost:8009',  // 指向本地开发服务器
        changeOrigin: true,
        rewrite: (path) => path  // 不重写路径
      }
    }
  },
  // 如果这是一个微前端子应用，可能需要以下配置
  build: {
    target: 'esnext',
    minify: 'terser',
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router', 'element-plus']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['mockjs'],
    include: ['vue', 'vue-router', 'element-plus']
  }
})
