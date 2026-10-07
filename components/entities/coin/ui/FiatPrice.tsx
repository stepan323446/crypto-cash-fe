'use client'

import { formatCompactNumber, formatPrice } from '@shared/lib/formatters'
import { useCurrentFiat } from "../model/useCurrentFiat";

interface Props {
  usdPrice: number
  compact?: boolean
}

const FiatPrice = ({ usdPrice, compact = false }: Props) => {
  const { currentFiat } = useCurrentFiat();

  const price = currentFiat ? usdPrice * +currentFiat.conversion_rate : usdPrice

  const sign = currentFiat
  ? currentFiat.symbol ?? `${currentFiat.display_sign_name} `
  : undefined;

  const formatFunc = compact ? formatCompactNumber : formatPrice;

  return <span>{formatFunc(price, sign)}</span>
}

export default FiatPrice;