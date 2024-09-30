"use client";
import {
  Button,
  LayoutCard,
  Stepper,
  Typography,
} from "../../../../components/component-library";
import { FormField } from "../../../../components/FormField";
import { useFormState } from "react-dom";
import { submitPayment } from "../../../actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRef } from "react";
import { PaymentSchema } from "../../../../schemas";

const defaultValues = {
  cardNumber: "",
  expirationDate: "",
  securityCode: "",
  name: "",
  zipCode: "",
};

export default function Page({ params: { id } }: { params: { id: string } }) {
  const [actionError, formAction] = useFormState(
    submitPayment.bind(null, id),
    "",
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.output<typeof PaymentSchema>>({
    resolver: zodResolver(PaymentSchema),
    defaultValues,
    mode: "all",
    reValidateMode: "onChange",
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section className="flex flex-col items-center md:pt-8">
      <LayoutCard>
        <Stepper stepNumber={1} label="Payment information" />
        <form
          ref={formRef}
          action={formAction}
          // Only call action when form is valid
          onSubmit={handleSubmit(() => formRef.current?.submit())}
          className="flex flex-col gap-4"
        >
          <FormField
            label="Card number"
            {...register("cardNumber")}
            fullWidth
            error={!!errors.cardNumber}
            errorMessage={errors.cardNumber?.message}
          />
          <div className="flex flex-row gap-4 [&>*]:flex-1">
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
          <div className="mb-8 mt-6">
            {actionError && (
              <Typography
                size="sm"
                color="error"
                component="p"
                className="mb-4"
              >
                {actionError}
              </Typography>
            )}
            <Button type="submit" fullWidth>
              Continue
            </Button>
          </div>
        </form>
      </LayoutCard>
    </section>
  );
}
