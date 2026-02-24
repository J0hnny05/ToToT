/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#2c3e50',        // Dark Blue-Grey
        accent: '#27ae60',         // Nature Green
        'accent-blue': '#2980b9',  // Accent Blue
        'bg-light': '#f4f4f4',     // Light Grey
        'text-dark': '#333',
      },
      fontFamily: {
        main: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #ffffff 0%, #e8f5e9 50%, #c8e6c9 100%)',
        'gradient-accent': 'linear-gradient(90deg, var(--tw-gradient-from), var(--tw-gradient-to))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
      },
      keyframes: {
        'text-grow': {
          'from': {
            fontSize: '1.1rem',
            transform: 'translateY(0)',
          },
          'to': {
            fontSize: '1.25rem',
            transform: 'translateY(-2px)',
          },
        },
        'shimmer-slide': {
          'from': { left: '-100%' },
          'to': { left: '100%' },
        },
      },
      animation: {
        'text-grow': 'text-grow 0.35s ease-out forwards',
        'shimmer': 'shimmer-slide 0.5s',
      },
      boxShadow: {
        'nav': '0 2px 10px rgba(0,0,0,0.1)',
        'card': '0 5px 15px rgba(0,0,0,0.1)',
        'card-hover': '0 12px 25px rgba(0,0,0,0.15)',
        'hero': '0 10px 30px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}

