// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/CoopOfi/",
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // TODAS las rutas de tu backend pasan por el proxy
      '/auth': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      },
      '/private': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      },
      // Opcional: si tenés más rutas API, poné esto y listo todo:
      // '^/(auth|private|api|uploads|whatever)': {
      //   target: 'http://localhost:3000',
      //   changeOrigin: true,
      //   secure: false
      // }
    }
  }
})