module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    }
  },
} 