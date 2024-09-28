import type { Config } from "tailwindcss";

/**
 * Convert a given pixel value to rem size, using base font size of 16px.
 * @param px
 * @returns rem size
 */
export const pxToRem = (px: number) => `${px / 16}rem`;

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
      spacing: {
        144: pxToRem(576),
      },
      screens: {
        // 786px is what is specified in Figma as the breakpoint,
        // but it feels like a typo from 768px?
        // TODO Ask designers if this is correct
        md: "786px",
      },
    },
  },
  plugins: [],
};
export default config;
