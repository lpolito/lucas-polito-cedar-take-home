import { z } from "zod";

export const PaymentSchema = z.object({
  cardNumber: z
    .string()
    .trim()
    .min(1, "This field is required")
    .regex(/^\d{16}$/, "Invalid card number"),
  expirationDate: z
    .string()
    .trim()
    .min(1, "This field is required")
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid MM/YY"),
  securityCode: z
    .string()
    .trim()
    .min(1, "This field is required")
    .regex(/^\d{3}$/, "Invalid security code"),
  name: z.string().trim().min(1, "Name on card is required"),
  zipCode: z
    .string()
    .trim()
    .min(1, "This field is required")
    .regex(/^\d{5}$/, "Invalid ZIP code"),
});
