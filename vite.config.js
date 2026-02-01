import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // بما أنك استخدمت HashRouter، فإن المسار النسبي './' هو الأفضل والأكثر أماناً
  base: './',

  plugins: [react()],

  build: {
    // توجيه الملفات لمجلد docs ليقرأها GitHub Pages
    outDir: 'docs',
    chunkSizeWarningLimit: 1600,
  },
});