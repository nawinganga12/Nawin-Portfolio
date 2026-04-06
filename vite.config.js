import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Nawin-Portfolio/',
  plugins: [
    tailwindcss(),
  ],
})
