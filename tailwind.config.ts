import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#104579",
        secondary: "#F0BC02",
        softDark: "#1f273a",
      },
      fontFamily: {
        gothic: ["Gothic A1", "sans - serif"],
      },
    },
  },
  plugins: [],
};
export default config;
