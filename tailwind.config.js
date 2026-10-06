/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f2044',        // Deep navy for headings/accents
          blue: '#1e3a5f',        // Primary blue (navbar, buttons)
          accent: '#1d6bbf',      // Bright accent blue (highlighted text)
          gold: '#c99a5b',        // Warm gold for icons / decorative
          light: '#f0f4fa',       // Light blue-grey surface
          muted: '#64748b',       // Body muted text
          border: '#e2e8f0',      // Border color
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
