import { defineConfig } from 'vite'

export default defineConfig({
  root: './www',
  resolve: {
    alias: {
      'libmask/mask': `${__dirname}/src/index`,
    },
  },
})
