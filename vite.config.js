import { defineConfig } from 'vite';

export default defineConfig({
  // Serve the papers/ directory as static assets
  publicDir: false,
  server: {
    open: true,
    port: 3000,
  },
});
