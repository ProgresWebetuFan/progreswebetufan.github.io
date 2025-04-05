/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d7a4f',
          light: '#14a76c',
          dark: '#0a5c3b'
        },
        secondary: '#f5f5f7',
        text: {
          DEFAULT: '#333',
          light: '#666'
        },
        accent: {
          DEFAULT: '#ffc107',
          secondary: '#ff6b6b',
          tertiary: '#4361ee'
        }
      },
      boxShadow: {
        DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.1)'
      },
      borderRadius: {
        card: '8px'
      },
      transitionDuration: {
        DEFAULT: '0.3s'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};