import type { Config } from "tailwindcss";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  BRAND COLOURS — change these values to retheme the whole site
const NAVY  = "#0f2d57";  // deep navy — main brand colour
const AMBER = "#f59e0b";  // amber/gold — accent / call-to-action colour
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:          NAVY,
        "navy-dark":   "#091f3d",
        "navy-light":  "#1a4a8a",
        "navy-muted":  "#1e3a5f",
        amber:         AMBER,
        "amber-dark":  "#d97706",
        "amber-light": "#fbbf24",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out both",
        "fade-in":    "fadeIn 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
