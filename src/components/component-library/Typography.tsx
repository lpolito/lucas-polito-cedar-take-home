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
      className={`tracking-normal ${sizeClass} ${colorClass} ${className}`}
      {...rest}
    />
  );
};
