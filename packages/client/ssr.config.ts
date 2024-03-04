import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'ssr.tsx'),
      name: 'Client',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: [
        'react',
        'styled-components',
        '@emotion/react',
        '@emotion/styled',
        '@mui/material',
        '@mui/icons-material',
      ],
      output: {
        dir: 'ssr-dist',
      },
    },
  },
});
