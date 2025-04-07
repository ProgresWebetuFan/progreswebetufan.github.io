// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import tunnel from "astro-tunnel";

// https://astro.build/config
export default defineConfig({
  site: 'https://progreswebetufan.github.io',
  base: '/webetu-landing/',
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['*.trycloudflare.com'],
    },
  },
  

  integrations: [tunnel()],
});