"use client";
import { forwardRef } from "react";
import { TextField, TextFieldProps } from "./component-library";

export interface FormFieldProps extends TextFieldProps {
  /**
   * This field has an error.
   */
  error?: boolean;
  /**
   * Error message to display under the input.
   */
  errorMessage?: string;
}

const _FormField = (
  {
    error,
    errorMessage,
    helperText,
    helpTextProps,
    inputProps,
    icon: iconProp,
    onBlur,
    onChange,
    ...rest
  }: FormFieldProps,
  ref: React.Ref<HTMLInputElement>,
) => {
  const hasValue = Boolean(rest.value);

  // Weird specificity happening with default border, mark important
  // TODO don't use !important here
  const inputErrorClass = error ? "!border-error" : "";

  const icon = error ? <ErrorIcon /> : hasValue ? <SuccessIcon /> : iconProp;

  return (
    <TextField
      {...rest}
      helperText={error ? errorMessage : helperText}
      helpTextProps={{
        ...(helpTextProps || {}),
        color: error ? "error" : undefined,
      }}
      inputProps={{
        ...(inputProps || {}),
        "aria-invalid": error,
        className: `${(inputProps || {}).className || ""} ${inputErrorClass}`,
      }}
      icon={icon}
      inputRef={ref}
      onBlur={(e) => {
        onBlur?.(e);
      }}
      onChange={(e) => {
        onChange?.(e);
      }}
    />
  );
};

// TODO make an Icon component and extract
const ErrorIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM10.5 8C10.4981 7 10.9993 6 11.9999 6C13.0005 6 13.4979 7 13.4999 8C13.5018 9 13.5004 14 11.9999 14C10.5112 14 10.502 9.0776 10.5001 8.0241L10.5 8ZM11 16C11 15.4477 11.4477 15 12 15H12.01C12.5623 15 13.01 15.4477 13.01 16C13.01 16.5523 12.5623 17 12.01 17H12C11.4477 17 11 16.5523 11 16Z"
      fill="#C34648"
    />
  </svg>
);

const SuccessIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.0001 6L9.00008 17L4.00008 12"
      stroke="#227C6C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FormField = forwardRef(_FormField);
