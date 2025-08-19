export function formatCurrency(value, withCents = false) {
  return new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: withCents ? 2 : 0,
    maximumFractionDigits: withCents ? 2 : 0,
  }).format(value);
}