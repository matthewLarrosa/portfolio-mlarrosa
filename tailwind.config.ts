import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        panel: "var(--color-panel)"
      },
      fontFamily: {
        sans: ["Aptos", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

