export default defineConfig({
  // استبدل project-web-main باسم المستودع كما يظهر في رابط GitHub
  base: '/project-web-main/',

  plugins: [react()],

  build: {
    outDir: 'docs',
    chunkSizeWarningLimit: 1600,
  },
});