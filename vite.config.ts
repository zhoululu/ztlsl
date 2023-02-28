import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'ztlsl',
      formats: ['cjs', 'es', 'umd'],
      fileName: (format: string) => {
        if(format === 'cjs') return 'ztlsl.cjs'
        if(format === 'es') return 'ztlsl.mjs'
        return 'ztlsl.js'
      }
    }
  }
})