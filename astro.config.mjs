// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import tunnel from "astro-tunnel";

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true,
  },

  site: 'https://progreswebetufan.github.io',
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['*.trycloudflare.com'],
    },
  },


  integrations: [tunnel()],
});
