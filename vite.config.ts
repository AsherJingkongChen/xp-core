import { join, resolve } from 'node:path';
import { ConfigEnv, defineConfig, UserConfig } from 'vite';
import dts from 'vite-plugin-dts';

export const customConfigFn = ({
  dist,
  env,
  root,
}: {
  dist: string;
  env: ConfigEnv;
  root: string;
}): UserConfig => {
  const outDir = join(dist, root);
  return {
    base: join(root, '/'),
    build: {
      assetsInlineLimit: 0,
      lib: {
        entry: ['src/index.ts'],
        fileName: 'index',
        formats: ['es'],
        name: 'XPCore',
      },
      outDir,
    },
    esbuild: {
      drop:
        env.mode === 'production' ? ['console', 'debugger'] : undefined,
    },
    plugins: [
      dts({
        include: 'src',
        entryRoot: 'src',
      }),
    ],
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    test: {
      include: ['test/unit/**/*.test.ts'],
    },
  };
};

export default defineConfig((env) =>
  customConfigFn({
    dist: 'dist',
    env,
    root: '/',
  }),
);
