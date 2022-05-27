import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist'
  },
  plugins: [vue()],
  configureWebpack: {
    watch: true //hot reload
  }
})
