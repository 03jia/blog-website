import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@client': path.resolve(__dirname, './src/client'),
      '@admin': path.resolve(__dirname, './src/admin'),
      '@shared': path.resolve(__dirname, './src/shared')
    }
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `
          @import "@/shared/assets/styles/base.css";
          @import "@/shared/assets/styles/global.css";
          @import "@/shared/assets/styles/components.css";
        `
      }
    }
  },
  assetsInclude: ['**/*.md'],
  server: {
    fs: {
      allow: ['..']
    }
  }
})
