/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          light: "#3b82f6",   // blue-500
          dark: "#1e40af",    // blue-800
        },
        accent: "#f59e42", // orange accent
      },
      boxShadow: {
        'soft': '0 4px 24px 0 rgba(37, 99, 235, 0.08)',
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '2rem',
        'full': '9999px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
