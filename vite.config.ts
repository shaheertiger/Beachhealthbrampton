import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    tailwindcss(),
    react()
  ],
  build: {
    // The SSR build (used only for prerendering) doesn't need a copy of public/
    copyPublicDir: !isSsrBuild,
  },
}))
