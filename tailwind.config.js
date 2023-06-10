/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#125252',
        'primary-gray': '#727272',
        'primary-red': '#D55015',
        'off-white': '#f4f4f4',
        'bazaar-black': '#121212',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-banner':
          ' linear-gradient(90.19deg, #FFF4EF 47.08%, #fff 140.19%)',
      },
    },
  },
  plugins: [],
};
