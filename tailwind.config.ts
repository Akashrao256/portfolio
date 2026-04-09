import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F6F3",
        accent: "#8B0000",
        ink: "#1C1917",
        muted: "#6B665E",
        line: "#DDD7CC",
        panel: "#FCFBF8",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        shell: "0 24px 60px rgba(28, 25, 23, 0.08)",
      },
      borderRadius: {
        shell: "28px",
      },
    },
  },
  plugins: [],
};

export default config;
