import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: './src/pages',

      // ✅ اینجا پوشه‌هایی که نمیخوای اسکن بشن رو بنویس
      exclude: [
        '**/components/**', // یا هر پوشه دیگه
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
      ],
    }),
    viteReact(),
    tailwindcss(),
  ],

  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/**'],
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
