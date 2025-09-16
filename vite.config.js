/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/Components'),
      '@data': path.resolve(__dirname, 'src/Data'),
      '@pages': path.resolve(__dirname, 'src/Pages'),
      '@contexts': path.resolve(__dirname, 'src/Contexts'),
    }
  }
})