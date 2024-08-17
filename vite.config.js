import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import { createVuePlugin as vue } from 'vite-plugin-vue2';

const path = require('path');

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: './docs',
    //emptyOutDir: true, // also necessary
  }
})
