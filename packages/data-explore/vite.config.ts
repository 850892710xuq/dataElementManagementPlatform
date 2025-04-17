import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'
import type { PluginOption } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 获取应用名称
const packageName = require('./package.json').name

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue() as PluginOption,
    viteMockServe({
      mockPath: 'src/mock',
      ignore: /_\w+/
    }) as PluginOption
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8006,
    open: true,
    proxy: {
      '^/api': {
        target: 'http://localhost:8006',
        changeOrigin: true,
      }
    },
    fs: {
      strict: false,
      allow: ['..']
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          'element-plus-vendor': ['element-plus']
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'pinia',
      'element-plus',
      '@element-plus/icons-vue'
    ],
    force: true
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  experimental: {
    renderBuiltUrl(filename: string) {
      return `/_assets/${filename}`
    }
  }
}) 