import { Typography } from "./Typography";

export type Step = {
  stepNumber: number;
  label: string;
};

export interface StepperProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  currentStep: number;
  steps: Step[];
}

export const Stepper = ({
  currentStep,
  steps,
  className,
  ...rest
}: StepperProps) => {
  const activeStep = steps.find((step) => step.stepNumber === currentStep);
  if (!activeStep) {
    return null;
  }

  const { stepNumber, label } = activeStep;

  return (
    <div
      className={`flex flex-row items-center gap-4 py-5 ${className || ""}`}
      {...rest}
    >
      <Typography className="flex h-6 w-6 items-center justify-center rounded-full bg-stepperBg font-bold text-white">
        {stepNumber}
      </Typography>
      <Typography size="lg" className="font-bold">
        {label}
      </Typography>
    </div>
  );
};
