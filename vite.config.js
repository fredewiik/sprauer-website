import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'public',
  build: {
    assetsInlineLimit: 8192,
    minify: 'terser',
    assetsDir: '.',
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
        404: resolve(__dirname, 'public/404.html'),
      }
    }
  }
})
