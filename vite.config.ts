import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-dom": ["react-dom"],
          "carbon-react": ["@carbon/react"],
        }
      }
    }
  },
  plugins: [react()],
})
