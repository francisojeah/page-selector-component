import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'page-selector': '0px 0px 4px 0px #1414141A, 0px 8px 15px 0px #1414141F',
      },
    },
  },
  plugins: [],
} satisfies Config;
