// Define Typography sizes, as opposed to variants, which correlate to the font size.
// Prefer sizes over variants so that we have to be explicit when choosing the
// underlying element type (via `component` prop).
export const TypographySizes = ["sm", "base", "lg", "xl"] as const;
export type TypographySize = (typeof TypographySizes)[number];

const sizeClasses = {
  sm: "text-sm",
  base: "text-md",
  lg: "text-lg",
  xl: "text-xl",
};

export const TypographyColors = [
  "primary",
  "secondary",
  "tertiary",
  "error",
  "inherit",
] as const;
export type TypographyColor = (typeof TypographyColors)[number];

const colorClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  error: "text-error",
  inherit: "text-inherit",
};

// TODO Make Typography / TypographyProps generic, so that we can get additional props based on the `component` prop
export interface TypographyProps {
  children: React.ReactNode;
  size?: TypographySize;
  color?: TypographyColor;
  component?: keyof JSX.IntrinsicElements;
  className?: string;
  // TODO remove this after making Typography generic
  style?: React.CSSProperties;
}

// TODO forward ref
/**
 * Typography component for all text elements.
 *
 * Size directly correlates to the font size, and not the underlying element
 * (dictated by `component` prop, default being "span").
 */
export const Typography = ({
  size = "base",
  color = "inherit",
  component: Component = "span",
  className,
  ...rest
}: TypographyProps) => {
  const sizeClass = sizeClasses[size];
  const colorClass = colorClasses[color];
  return (
    <Component
      className={`tracking-normal ${sizeClass} ${colorClass} ${className || ""}`}
      {...rest}
    />
  );
};
