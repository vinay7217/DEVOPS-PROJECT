import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  base: '/hello-world-vite-app/',
  plugins: [react()],
})
