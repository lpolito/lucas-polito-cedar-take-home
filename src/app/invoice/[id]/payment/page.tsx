"use client";
import {
  Button,
  LayoutCard,
  Step,
  Stepper,
  Typography,
} from "../../../../components/component-library";
import { FormField } from "../../../../components/FormField";
import { useFormState } from "react-dom";
import { submitPayment } from "../../../actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentSchema } from "../../../../schemas";
import { z } from "zod";
import React, { useState } from "react";
import { Invoice, MOCK_INVOICE } from "../../../../store";
import { formatCentsToDollarString } from "../../../../utils";

type PaymentSchemaType = z.infer<typeof PaymentSchema>;

enum PaymentStep {
  Form = 1,
  Confirmation = 2,
}

const PaymentSteps: Step[] = [
  { stepNumber: PaymentStep.Form, label: "Payment information" },
  { stepNumber: PaymentStep.Confirmation, label: "Review and pay" },
];

const defaultValues = {
  cardNumber: "",
  expirationDate: "",
  securityCode: "",
  name: "",
  zipCode: "",
};

export default function Page({ params: { id } }: { params: { id: string } }) {
  const [paymentStep, setPaymentStep] = useState(PaymentStep.Form);
  const [lastFourDigits, setLastFourDigits] = useState("");

  const [formActionError, formAction] = useFormState(
    submitPayment.bind(null, id),
    "",
  );

  const invoice = MOCK_INVOICE;

  const { handleSubmit, ...form } = useForm<PaymentSchemaType>({
    resolver: zodResolver(PaymentSchema),
    defaultValues,
    mode: "all",
    reValidateMode: "onChange",
  });

  return (
    <section className="flex flex-col items-center md:pt-8">
      <LayoutCard>
        <form action={formAction}>
          <Stepper currentStep={paymentStep} steps={PaymentSteps} />
          <PaymentStepWrapper visible={paymentStep === PaymentStep.Form}>
            <PaymentForm
              form={form}
              onContinue={() => {
                handleSubmit((data) => {
                  setLastFourDigits(data.cardNumber.slice(-4));
                  setPaymentStep(PaymentStep.Confirmation);
                })();
              }}
            />
          </PaymentStepWrapper>
          <PaymentStepWrapper
            visible={paymentStep === PaymentStep.Confirmation}
          >
            <Confirmation
              invoice={invoice}
              lastFourDigits={lastFourDigits}
              formActionError={formActionError}
            />
          </PaymentStepWrapper>
        </form>
      </LayoutCard>
    </section>
  );
}

type PaymentFormProps = {
  form: Omit<ReturnType<typeof useForm<PaymentSchemaType>>, "handleSubmit">;
  onContinue: () => void;
};

const PaymentForm = ({ form, onContinue }: PaymentFormProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* TODO mask input to include spaces between numbers */}
        <FormField
          label="Card number"
          {...register("cardNumber")}
          fullWidth
          error={!!errors.cardNumber}
          errorMessage={errors.cardNumber?.message}
        />
        <div className="flex flex-row gap-4 [&>*]:flex-1">
          {/* TODO mask expiration to include slash */}
          <FormField
            label="Expires (MM/YY)"
            {...register("expirationDate")}
            fullWidth
            error={!!errors.expirationDate}
            errorMessage={errors.expirationDate?.message}
          />
          <FormField
            label="Security code (CVV)"
            {...register("securityCode")}
            fullWidth
            error={!!errors.securityCode}
            errorMessage={errors.securityCode?.message}
          />
        </div>
        <FormField
          label="Name on card"
          {...register("name")}
          fullWidth
          error={!!errors.name}
          errorMessage={errors.name?.message}
        />
        <FormField
          label="ZIP code"
          {...register("zipCode")}
          fullWidth
          error={!!errors.zipCode}
          errorMessage={errors.zipCode?.message}
        />
        <Button
          fullWidth
          onClick={(e) => {
            e.preventDefault();
            onContinue();
          }}
          className="mb-8 mt-6"
        >
          Continue
        </Button>
      </div>
    </>
  );
};

type ConfirmationProps = {
  invoice: Invoice;
  lastFourDigits: string;
  formActionError: string;
};
const Confirmation = ({
  invoice,
  lastFourDigits,
  formActionError,
}: ConfirmationProps) => {
  const { totalAmountDueCents } = invoice;

  return (
    <div>
      <div className="flex flex-col gap-[29px]">
        <Typography size="lg">
          You’re about to make a payment of{" "}
          <Typography color="secondary" className="font-bold">
            ${formatCentsToDollarString(totalAmountDueCents)}
          </Typography>
        </Typography>
        <div className="flex flex-col gap-1">
          <Typography size="sm" color="tertiary" className="font-bold">
            Payment method
          </Typography>
          <div className="just flex flex-row gap-3">
            <VisaIcon className="h-6" />
            <Typography size="sm">
              Card ending in ••••{lastFourDigits}
            </Typography>
          </div>
        </div>
      </div>

      <div className="mb-8 mt-6">
        {formActionError && (
          <Typography size="sm" color="error" component="p" className="mb-4">
            {formActionError}
          </Typography>
        )}
        <Button type="submit" fullWidth>
          Continue
        </Button>
      </div>
    </div>
  );
};

type PaymentStepWrapperProps = {
  children: React.ReactNode;
  visible: boolean;
};
/**
 * Hide parts of the form that are not shown on screen, but we need to keep them in the DOM
 * so that the form can be submitted. This lets us keep the entire form and confirmation client side.
 */
const PaymentStepWrapper = ({ children, visible }: PaymentStepWrapperProps) => (
  <div className={visible ? "block" : "hidden"}>{children}</div>
);

interface VisaIconProps {
  className?: string;
}
// TODO extract
const VisaIcon = ({ className }: VisaIconProps) => (
  <svg
    width="24"
    height="17"
    viewBox="0 0 24 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2.27368C0 1.01796 1.01796 0 2.27368 0H21.7263C22.982 0 24 1.01796 24 2.27368V14.7263C24 15.982 22.982 17 21.7263 17H2.27368C1.01796 17 0 15.982 0 14.7263V2.27368Z"
      fill="#224DBA"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.17711 11.3378H6.77071L5.71609 7.25785C5.66603 7.07017 5.55974 6.90425 5.4034 6.82605C5.01323 6.62953 4.58329 6.47313 4.11426 6.39425V6.23717H6.37986C6.69254 6.23717 6.92706 6.47313 6.96614 6.74717L7.51334 9.69021L8.91906 6.23717H10.2864L8.17711 11.3378ZM11.0685 11.3378H9.74023L10.8339 6.23717H12.1622L11.0685 11.3378ZM13.8802 7.65052C13.9193 7.3758 14.1538 7.21872 14.4274 7.21872C14.8573 7.17928 15.3257 7.25816 15.7165 7.454L15.9511 6.3558C15.5602 6.19872 15.1303 6.11984 14.7401 6.11984C13.4509 6.11984 12.5129 6.82636 12.5129 7.80692C12.5129 8.55288 13.1773 8.94456 13.6464 9.18052C14.1538 9.4158 14.3492 9.57288 14.3101 9.80816C14.3101 10.1611 13.9193 10.3182 13.5291 10.3182C13.0601 10.3182 12.5911 10.2005 12.1618 10.004L11.9273 11.1029C12.3963 11.2987 12.9037 11.3776 13.3728 11.3776C14.8183 11.4164 15.7165 10.7105 15.7165 9.65108C15.7165 8.31692 13.8802 8.23872 13.8802 7.65052ZM20.3653 11.3378L19.3106 6.23717H18.1778C17.9433 6.23717 17.7088 6.39425 17.6306 6.62953L15.6777 11.3378H17.045L17.318 10.5926H18.998L19.1543 11.3378H20.3653ZM18.3735 7.61075L18.7636 9.53311H17.6699L18.3735 7.61075Z"
      fill="white"
    />
  </svg>
);
