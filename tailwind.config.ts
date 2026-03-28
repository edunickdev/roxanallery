/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        roxana: {
          bg: "var(--color-bg)",
          surface: "var(--color-surface)",
          "surface-light": "var(--color-surface-light)",
          primary: "var(--color-primary)",
          "primary-hover": "var(--color-primary-hover)",
          highlight: "var(--color-highlight)",
          glow: "var(--color-glow)",
          muted: "var(--color-muted)",
          border: "var(--color-border)",
          text: "var(--color-text)",
          "text-soft": "var(--color-text-soft)",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-3deg)" },
          "50%": { transform: "translateY(-12px) rotate(-3deg)" },
        },
      },
    },
  },
  plugins: [],
};
