/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#1a1423',
        panel: '#f2e6d0',
        panelBorder: '#8a6d4a',
        accent: '#e0a458',
        accent2: '#7fb069',
        accent3: '#D7942D',
        textLight: '#f2e9dc',
        textDark: '#3a2e21',
        border: '#4a3f5c',
      },
      fontFamily: {
        title: ['"Press Start 2P"', 'monospace'],
        heading: ['"Pixelify Sans"', 'monospace'],
        body: ['"VT323"', 'monospace'],
      },
    },
  },
  plugins: [],
}

