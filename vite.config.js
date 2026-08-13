import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePluginHtmlMinify } from 'vite-plugin-html-minify'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginHtmlMinify()
  ],
	base: "/pick-my-plate",
})
