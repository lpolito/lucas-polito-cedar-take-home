import { Typography } from "./Typography";

export interface StepperProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  stepNumber: number;
  label: string;
}

// TODO make Stepper take an array of steps, where the step number dictates the step displayed - better DX / more reusable
export const Stepper = ({
  stepNumber,
  label,
  className,
  ...rest
}: StepperProps) => (
  <div
    className={`flex flex-row items-center gap-4 py-5 ${className || ""}`}
    {...rest}
  >
    <Typography className="bg-stepperBg flex h-6 w-6 items-center justify-center rounded-full font-bold text-white">
      {stepNumber}
    </Typography>
    <Typography size="lg" className="font-bold">
      {label}
    </Typography>
  </div>
);
