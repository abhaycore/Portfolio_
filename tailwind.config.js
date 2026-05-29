/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'glass-light': 'rgba(255, 255, 255, 0.05)',
        'glass-lighter': 'rgba(255, 255, 255, 0.08)',
        'accent-primary': '#00d9ff',
        'accent-secondary': '#ff006e',
        'accent-tertiary': '#ffa502',
        'bg-dark': '#050508',
        'bg-darker': '#0a0a0f',
      },
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.04)',
        'glass-hover': 'rgba(255, 255, 255, 0.08)',
      },
      borderColor: {
        'glass-glow': 'rgba(0, 217, 255, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '20px',
        xl: '40px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 217, 255, 0.5), inset 0 0 5px rgba(0, 217, 255, 0.1)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 217, 255, 1), inset 0 0 10px rgba(0, 217, 255, 0.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
