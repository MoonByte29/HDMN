/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc5fb",
          400: "#36a3f7",
          500: "#0d87ea",
          600: "#0062cc",
          700: "#0057b8",
          800: "#0a4a98",
          900: "#0e3e7c",
        },
        secondary: {
          50: "#eefcfc",
          100: "#d6f6f7",
          200: "#b0ecef",
          300: "#7cdce2",
          400: "#42c2cd",
          500: "#29a3af",
          600: "#218293",
          700: "#1f6977",
          800: "#1f5662",
          900: "#1d4853",
        },
        accent: {
          50: "#fff7ed",
          100: "#f7d2a1",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
        },
        success: {
          50: "#ecfdf5",
          100: "#d1fae5",
          500: "#10b981",
          700: "#047857",
        },
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          500: "#f59e0b",
          700: "#b45309",
        },
        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          500: "#ef4444",
          700: "#b91c1c",
        },
      },
      boxShadow: {
        navbar: "0 2px 15px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
    },
  },
  plugins: [],
};
