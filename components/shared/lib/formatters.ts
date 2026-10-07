const currencyPrefix = (value: number|string, prefix: string = '$') => prefix + value;

export function formatPrice(value?: number | null, prefix: string = '$', noneValue = 'None'): string {
  if(value === undefined || value === null)
    return noneValue;

  const decimals = value < 1 ? Math.min(8, -Math.floor(Math.log10(value)) + 2) : 2

  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)

  return currencyPrefix(formatted, prefix)
}

export function formatCompactNumber(value: number, prefix: string = '$'): string {
  const formatted = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(value)

  return currencyPrefix(formatted, prefix);
}

export function formatFloat(value?: number | null, noneValue = 'None'): string {
  if(value === undefined || value === null)
    return noneValue;

  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)

  return formatted
}