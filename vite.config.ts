import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist'
  },
  resolve: {
    alias: [{
      find: '@data',
      replacement: path.resolve(__dirname, 'src/data')
    }, {
      find: '@route',
      replacement: path.resolve(__dirname, 'src/route')
    }, {
      find: '@screen',
      replacement: path.resolve(__dirname, 'src/screen')
    }, {
      find: '@interface',
      replacement: path.resolve(__dirname, 'src/interface')
    }, {
      find: '@component',
      replacement: path.resolve(__dirname, 'src/component')
    }, {
      find: '@assets',
      replacement: path.resolve(__dirname, 'src/assets')
    }, {
      find: '@constant',
      replacement: path.resolve(__dirname, 'src/constant')
    }, {
      find: '@hook',
      replacement: path.resolve(__dirname, 'src/hook')
    }, {
      find: '@helper',
      replacement: path.resolve(__dirname, 'src/helper')
    }, {
      find: '@data',
      replacement: path.resolve(__dirname, 'src/data')
    }]
  },
})
