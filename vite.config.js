import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/wajeh-Alealamia/',

  plugins: [react()],

  build: {
    outDir: 'docs',
    chunkSizeWarningLimit: 1600,
  },
});