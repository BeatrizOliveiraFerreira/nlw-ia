// import path from "path"
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
 
// export default defineConfig({
//   server: {
//     headers: {
//       'Cross-Origin-Embedder-Policy': 'require-corp',
//       'Cross-Origin-Opener-Policy': 'same-origin',
//     },
//   },
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util']
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })

import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@ffmpeg/ffmpeg','@ffmpeg/util']
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
