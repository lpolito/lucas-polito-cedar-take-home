import { Typography } from "./Typography";

// TODO add more sizes
export const ButtonSizes = ["base"] as const;
export type ButtonSize = (typeof ButtonSizes)[number];

const sizeClasses = {
  base: "h-12",
};

// TODO add more variants
export const ButtonVariants = ["default"] as const;
export type ButtonVariant = (typeof ButtonVariants)[number];

const variantClasses = {
  default: "rounded-xl",
};

// TODO add more colors
export const ButtonColors = ["primary"] as const;
export type ButtonColor = (typeof ButtonColors)[number];

const variantColorClasses = {
  default: {
    primary:
      "bg-buttonDefaultPrimaryBg text-buttonDefaultPrimaryText hover:bg-buttonDefaultPrimaryBgHover active:bg-buttonDefaultPrimaryBgActive",
  },
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  fullWidth?: boolean;
}

// TODO disabled styling
export const Button = ({
  size = "base",
  variant = "default",
  color = "primary",
  type = "button",
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) => {
  const sizeClass = sizeClasses[size];
  const variantClass = variantClasses[variant];
  const variantColorClass = variantColorClasses[variant][color];

  const fullWidthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`flex items-center justify-center ${sizeClass} ${variantClass} ${variantColorClass} ${fullWidthClass} ${className || ""}`}
      type={type}
      {...props}
    >
      <Typography size={size} className="font-bold">
        {children}
      </Typography>
    </button>
  );
};
