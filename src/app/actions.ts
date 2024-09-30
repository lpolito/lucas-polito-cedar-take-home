"use server";

import { redirect } from "next/navigation";
import { PaymentSchema } from "../schemas";

export async function submitPayment(
  id: string,
  prevState: string,
  formData: FormData,
) {
  const validatedFields = PaymentSchema.safeParse({
    cardNumber: formData.get("cardNumber"),
    expirationDate: formData.get("expirationDate"),
    securityCode: formData.get("securityCode"),
    name: formData.get("name"),
    zipCode: formData.get("zipCode"),
  });

  if (!validatedFields.success) {
    return "Invalid payment information. Please try again.";
  }

  redirect(`/invoice/${id}/receipt`);
}
