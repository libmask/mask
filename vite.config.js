import { defineConfig } from 'vite'

export default defineConfig({
  root: './www',
  outDir: '../dist',
  resolve: {
    alias: {
      'libmask/mask': `${__dirname}/src/index`,
    },
  },
})
