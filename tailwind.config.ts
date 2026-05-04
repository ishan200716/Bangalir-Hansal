import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red:      "#8B1A1A",
          "red-dark": "#6B0F0F",
          "red-deep": "#3D0808",
          gold:     "#D4A017",
          "gold-light": "#F0C040",
          "gold-dark": "#B8860B",
          cream:    "#F5E6D3",
          "cream-dim": "#C8B49A",
          bg:       "#0D0806",
          "bg-card": "#150C08",
          "bg-hover": "#1E110B",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Crimson Text'", "serif"],
        bengali: ["'Hind Siliguri'", "sans-serif"],
        ui: ["'DM Sans'", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url('/grain.svg')",
        "gold-gradient": "linear-gradient(135deg, #D4A017, #F0C040, #B8860B)",
      },
      animation: {
        "flicker": "flicker 4s infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
