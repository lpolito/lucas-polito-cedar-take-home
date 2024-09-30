export const formatCentsToDollarString = (cents: number) =>
  (Math.round(cents) / 100).toFixed(2);
