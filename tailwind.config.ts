import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f4efe6",
        bg2: "#ebe4d6",
        ink: "#141a17",
        mut: "#6a6f66",
        grn: "#16302a",
        gold: "#a8834a",
        line: "#d8cfbd",
        card: "#faf7f1",
      },
    },
  },
  plugins: [],
};
export default config;
