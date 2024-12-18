/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-authenticsans)'],
        serif: ['var(--font-fraunces)'],
      },
      colors: {
        'green': '#d2ff81',
        'pink': '#FFA0ED',
      },
      cursor: {
        'auto': 'url(/icons8-cursor-24.png), auto',
        'pointer': 'url(/icons8-pointer-24.png), pointer',
        'text': 'url(/icons8-text-cursor-24.png), text'
      }
    },
  },
  plugins: [],
}

