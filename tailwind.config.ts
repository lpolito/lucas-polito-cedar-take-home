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
        textPrimary: "var(--color-textPrimary)",
        textSecondary: "var(--color-textSecondary)",
        textTertiary: "var(--color-textTertiary)",
        error: "var(--color-error)",
        buttonPrimaryBg: "var(--color-buttonPrimaryBg)",
        buttonPrimaryText: "var(--color-buttonPrimaryText)",
      },
    },
    screens: {
      md: "786px",
    },
  },
  plugins: [],
};
export default config;
