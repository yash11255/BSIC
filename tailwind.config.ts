
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#221F26",
        input: "#2A2A2A",
        ring: "#403E43",
        background: "#1A1F2C",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#403E43",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#221F26",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#2A2A2A",
          foreground: "#E0E0E0",
        },
        accent: {
          DEFAULT: "#4A4A4A",
          foreground: "#FFFFFF",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

