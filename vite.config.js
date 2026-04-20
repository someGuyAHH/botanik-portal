import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['turkey-map-react'],
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, req) => {
            // Rewrite PHP-style URL (/api/index.php?_route=X) → /api/X for Express
            if (req.url.includes('index.php')) {
              const match = req.url.match(/[?&]_route=([^&]*)/);
              const route = match ? decodeURIComponent(match[1]) : '';
              proxyReq.path = route ? `/api/${route}` : '/api/';
            }
          });
        },
      },
    },
  },
})
