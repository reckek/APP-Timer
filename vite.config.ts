import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/components/*': fileURLToPath(
        new URL('./src/components', import.meta.url)
      ),
      '@/packages/*': fileURLToPath(new URL('./src/packages', import.meta.url)),
      '@/constants/*': fileURLToPath(
        new URL('./src/constants', import.meta.url)
      ),
      '@/pages/*': fileURLToPath(new URL('./src/pages', import.meta.url)),
    },
  },
  plugins: [react()],
})
