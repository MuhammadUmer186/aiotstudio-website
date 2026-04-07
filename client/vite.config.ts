import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 3000,
    allowedHosts: [
      'aiotstudio.org',
      'www.aiotstudio.org'
    ]
  },
  server: {
    host: true,
    allowedHosts: [
      'aiotstudio.org',
      'www.aiotstudio.org'
    ]
  }
})
