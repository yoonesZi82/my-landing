import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: './src/pages',
    }),
    viteReact(),
    tailwindcss(),
  ],

  server: {
    allowedHosts: ['6395ea7686c5.ngrok-free.app'],
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
