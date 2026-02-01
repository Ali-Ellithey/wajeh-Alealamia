import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // تأكد من كتابة اسم المستودع (Repo) الخاص بك بشكل صحيح بين السلاش
  base: '/wajeh-Alealamia/',

  plugins: [react()],

  build: {
    // هذا المجلد هو الذي سيقرأ منه GitHub Pages
    outDir: 'docs',
    chunkSizeWarningLimit: 1600,
  },
});