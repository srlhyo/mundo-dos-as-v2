// import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const root  = resolve(__dirname, 'src');

const ASSET_URL = process.env.ASSET_URL || '';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist/girls',
  },
  plugins: [react()],
  base: `${ASSET_URL}/girls/`
})

let x = 12;