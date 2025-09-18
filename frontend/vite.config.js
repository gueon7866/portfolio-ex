import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5103', // 백엔드 서버 주소
    },
  },
})