import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    emitCss: true,
    preprocess: sveltePreprocess(),
  })],
  build: {
    watch: {
      include: 'src/theme/**',
    }
  },
  css: { 
    preprocessorOptions: { 
      sass: { 
        additionalData: ` @import "@/style/index.scss"; ` 
      } 
    } 
  }
})
