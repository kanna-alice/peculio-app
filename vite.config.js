import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// dentro do defineConfig:

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: [react(), tailwindcss()]
})
