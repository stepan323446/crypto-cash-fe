export function formatPrice(value: number): string {
  const decimals = value < 1 ? Math.min(8, -Math.floor(Math.log10(value)) + 2) : 2

  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)

  return `${formatted} $`
}

export function formatFloat(value: number): string {
  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)

  return formatted
}