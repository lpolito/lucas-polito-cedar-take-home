import { useId } from "react";
import { Typography, TypographyProps } from "./Typography";

export interface TextFieldProps
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "onBlur" | "name"
  > {
  inputRef?: React.Ref<HTMLInputElement>;
  label?: string;
  labelProps?: Omit<TypographyProps, "children" | "component">;
  helperText?: string;
  helpTextProps?: Omit<TypographyProps, "children">;
  icon?: React.ReactNode;
  iconContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  inputProps?: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "id" | "value" | "onChange" | "onBlur" | "name"
  >;
  inputContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// TODO forward ref
export const TextField = ({
  inputRef,
  value,
  onChange,
  onBlur,
  name,
  label,
  labelProps,
  helperText,
  helpTextProps,
  icon,
  iconContainerProps,
  inputProps,
  inputContainerProps,
  fullWidth,
  className,
  style,
}: TextFieldProps) => {
  const id = useId();
  const { className: labelClassname, ...labelRest } = labelProps || {};
  const { className: inputClassname, ...inputRest } = inputProps || {};
  const { className: inputContainerClassname, ...inputContainerRest } =
    inputContainerProps || {};
  const { className: iconContainerClassname, ...iconContainerRest } =
    iconContainerProps || {};

  const fullWidthClass = fullWidth ? "w-full" : "";

  return (
    <div className={`flex flex-col gap-2 ${className || ""}`} style={style}>
      {label && (
        <Typography
          size="sm"
          color="tertiary"
          className={`font-bold ${labelClassname || ""}`}
          component="label"
          // @ts-expect-error htmlFor is valid for label, but Typography isn't generic and extend correct props yet
          htmlFor={id}
          {...labelRest}
        >
          {label}
        </Typography>
      )}
      <div
        className={`relative ${inputContainerClassname || ""}`}
        {...inputContainerRest}
      >
        <input
          className={`box-border h-12 rounded-lg border border-solid border-inputBorderDefault px-4 py-3 ${fullWidthClass} ${inputClassname || ""}`}
          {...inputRest}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          id={id}
          ref={inputRef}
        />
        {icon && (
          <div
            className={`absolute right-4 top-1/2 -translate-y-1/2 ${iconContainerClassname || ""}`}
            {...iconContainerRest}
          >
            {icon}
          </div>
        )}
      </div>
      {helperText && (
        <Typography size="sm" {...helpTextProps}>
          {helperText}
        </Typography>
      )}
    </div>
  );
};
