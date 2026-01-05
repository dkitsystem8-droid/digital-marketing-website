import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Vercel deployment path
  build: {
    outDir: 'dist', // Vercel expects 'dist' folder
    sourcemap: false, // optional, reduces build size
  },
})
