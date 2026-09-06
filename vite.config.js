import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' keeps all asset URLs relative so the build works both
// at a domain root and under a GitHub Pages sub-path (user.github.io/metarch-website/).
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { host: true, port: 5173, allowedHosts: true },
  preview: { host: true, port: 3000, allowedHosts: true },
});
