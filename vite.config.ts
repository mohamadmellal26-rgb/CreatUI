import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import million from 'million/compiler'; // تخلصنا من الأقواس {} هنا

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    million.vite({ auto: true }), // تأكد من استخدام million.vite
    react(),
  ],
});