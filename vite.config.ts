import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    lib: {
      entry: './src/index.ts',
      fileName: 'index',
      name: 'XPCore',
    },
  },
  esbuild: {
    drop: ['debugger'],
  },
  plugins: [dts()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
