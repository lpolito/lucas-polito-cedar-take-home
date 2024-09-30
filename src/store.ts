/**
 * Psuedo storage for data
 */

export type Invoice = {
  id: number;
  patientFirstName: string;
  numberOfItems: number;
  totalAmountDueCents: number;
};

// This is a mock of the invoice data that would be fetched on page load
export const MOCK_INVOICE: Invoice = {
  id: 1,
  patientFirstName: "Taylor",
  numberOfItems: 6,
  totalAmountDueCents: 60000,
};
