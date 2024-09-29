export const TypographySizes = ["sm", "md", "lg", "xl"] as const;
export type TypographySize = (typeof TypographySizes)[number];

const sizeClasses = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
};

export const TypographyColors = [
  "primary",
  "secondary",
  "tertiary",
  "error",
] as const;
export type TypographyColor = (typeof TypographyColors)[number];

const colorClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  error: "text-error",
};

export interface TypographyProps {
  children: React.ReactNode;
  size?: TypographySize;
  color?: TypographyColor;
  component?: keyof JSX.IntrinsicElements;
  className?: string;
}

export const Typography = ({
  children,
  size = "md",
  color = "primary",
  component: Component = "span",
  className,
}: TypographyProps) => {
  const sizeClass = sizeClasses[size];
  const colorClass = colorClasses[color];
  return (
    <Component
      className={`tracking-normal ${sizeClass} ${colorClass} ${className}`}
    >
      {children}
    </Component>
  );
};
