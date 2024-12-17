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
    },
  },
  plugins: [],
}

