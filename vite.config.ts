import { fileURLToPath, URL } from 'node:url';
import { defineConfig, UserConfigFn } from 'vite';
import dts from 'vite-plugin-dts';

const path = 'dist';

export const config: UserConfigFn = (env) => ({
  base: '/',
  build: {
    assetsInlineLimit: 0,
    outDir: path,
    lib: {
      entry: './src/index.ts',
      fileName: 'index',
      formats: ['es'],
      name: 'XPCore',
    },
    minify: 'esbuild',
  },
  esbuild: {
    drop: env.mode === 'production' ? ['console', 'debugger'] : undefined,
  },
  plugins: [dts()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

export default defineConfig(config);
