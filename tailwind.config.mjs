/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2c3e50',
        accent: '#27ae60',
        'accent-blue': '#2980b9',
        'bg-light': '#f4f4f4',
        'text-dark': '#333',
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        slideInBounce: 'slideInBounce 0.6s ease-out',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        slideInBounce: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px) scale(0.8)',
          },
          '50%': {
            transform: 'translateY(-10px) scale(1.05)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
