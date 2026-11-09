/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#004AAD",
          foreground: "#ffffff",
          hover: "#003B8A",
        },
        border: "#e2e8f0",
        input: "#e2e8f0",
        ring: "#004AAD",
        background: "#ffffff",
        foreground: "#0f172a",
        secondary: {
          DEFAULT: "#f1f5f9",
          foreground: "#0f172a",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        accent: {
          DEFAULT: "#f1f5f9",
          foreground: "#0f172a",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        heading: ['"DM Sans"', 'sans-serif'],
      },
      spacing: {
        '75': '18.75rem',
        '110': '27.5rem',
        '145': '36.25rem',
        '150': '37.5rem',
        '160': '40rem',
        '180': '45rem',
        '220': '55rem',
        '265': '66.25rem',
      }
    },
  },
  plugins: [],
}
