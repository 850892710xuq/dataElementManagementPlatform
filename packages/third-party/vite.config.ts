import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// 解决TS类型问题，使用类型断言
const plugins = [vue()] as any[]

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8004, // 修改为不同的端口
    host: true, // 监听所有地址
    strictPort: false, // 如果端口被占用，使用下一个可用端口
    cors: true, // 启用CORS
    open: true, // 自动打开浏览器
    hmr: {
      // HMR配置
      overlay: false, // 禁用错误覆盖层，避免一些干扰
    },
    fs: {
      // 允许服务访问父目录中的文件，解决跨域问题
      strict: false,
      allow: ['..']
    }
  },
  // 基础路径设置为根路径
  base: '/',
  // 构建配置
  build: {
    outDir: 'dist',
    sourcemap: false, // 禁用sourcemap可以减小文件大小
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // 去除console
        drop_debugger: true, // 去除debugger
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'element-plus': ['element-plus'],
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          'icons': ['@element-plus/icons-vue'],
        }
      }
    },
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'pinia',
      'element-plus',
      '@element-plus/icons-vue',
    ],
    force: true
  },
}) 