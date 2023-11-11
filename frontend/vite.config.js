// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    strictPort: true,
    port: 5173, // If you want to use the default Vite port
    watch: {
      usePolling: true, // This is important for Docker
    },
  },
});
