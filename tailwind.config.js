/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matte-black': '#050505',
        'surface': '#111111',
        'surface-light': '#1a1a1a',
        'gold': '#d4af37',
        'gold-light': '#f3d578',
        'text-main': '#ededed',
        'text-muted': '#a1a1aa',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, rgba(5, 5, 5, 0) 70%)',
      }
    },
  },
  plugins: [],
}
