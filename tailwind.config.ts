import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        primary: "#95BF47",
        deep: "#0B0F19",
        panel: "#111827",
        cyan: "#4DEBFF",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Inter", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 70px rgba(149, 191, 71, 0.28)",
        cyan: "0 0 70px rgba(77, 235, 255, 0.2)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,.15) 1px, transparent 0)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.08)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        orbit: "orbit 24s linear infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
