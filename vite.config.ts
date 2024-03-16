import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import mdx from '@mdx-js/rollup'

export default defineConfig({
    plugins: [
        mdx(),
        react(),
        TanStackRouterVite(),
    ],
})