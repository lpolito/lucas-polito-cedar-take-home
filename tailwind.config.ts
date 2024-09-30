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
        error: "var(--color-error)",
        buttonDefaultPrimaryBg: "var(--color-buttonDefaultPrimaryBg)",
        buttonDefaultPrimaryBgHover: "var(--color-buttonDefaultPrimaryBgHover)",
        buttonDefaultPrimaryBgActive:
          "var(--color-buttonDefaultPrimaryBgActive)",
        buttonDefaultPrimaryText: "var(--color-buttonDefaultPrimaryText)",
      },
      borderColor: {
        default: "var(--color-borderDefault)",
      },
      textColor: {
        primary: "var(--color-textPrimary)",
        secondary: "var(--color-textSecondary)",
        tertiary: "var(--color-textTertiary)",
      },
      spacing: {
        120: pxToRem(480),
        144: pxToRem(576),
      },
      screens: {
        // 786px is what is specified in Figma as the breakpoint,
        // but it feels like a typo from 768px?
        // TODO Ask designers if this is correct
        md: "786px",
      },
      fontSize: {
        // [font-size, line-height]
        lg: [pxToRem(20), pxToRem(24)],
        xl: [pxToRem(28), pxToRem(36)],
      },
      letterSpacing: {
        normal: pxToRem(0.2),
      },
    },
  },
  plugins: [],
};
export default config;
