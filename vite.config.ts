import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For user/organization pages (angxddeep.github.io), base must be '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: { port: 5173 },
});


