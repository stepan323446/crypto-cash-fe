'use client'

import { CoinDetail } from "@entities/coin/model/types";
import { formatFloat, formatPrice } from "@shared/lib/formatters";
import { InfoRow } from "@shared/ui";
import { WidgetBlock } from "@shared/ui/WidgetBlock";
import WidgetRowsSkeleton from "./WidgetRowsSkeleton";
import { Progress } from "@shadcn/components/ui/progress";
import { FiatPrice } from "@entities/coin";

interface Props {
  coin?: CoinDetail
}

export function getRangeProgress(price: number, range: [number, number]): number {
  const [min, max] = range;
  if (max <= min) return 0;
  const percent = ((price - min) / (max - min)) * 100;
  return Math.min(100, Math.max(0, percent));
}

const WidgetPrimary = ({ coin }: Props) => {
  if(!coin)
    return <WidgetRowsSkeleton />

  return (
    <WidgetBlock className="space-y-3">
      {coin.extraData && 
      <InfoRow className="block pb-2">
        <Progress value={getRangeProgress(coin.price, coin.extraData.range24h)} className="w-full mb-2" />
        <div className="flex justify-between">
          <span>{ formatPrice(coin.extraData.range24h[0], '') }</span>
          <span>24h Range</span>
          <span>{ formatPrice(coin.extraData.range24h[1], '') }</span>
        </div>
      </InfoRow>
      }
      <InfoRow label="Market Cap"><FiatPrice usdPrice={coin.marketCap} /></InfoRow>
      <InfoRow label="24 Hour Trading Vol"><FiatPrice usdPrice={coin.tradingVol24h} /></InfoRow>
      { coin.extraData && <>
        <InfoRow label="Total Supply">{formatFloat(coin.extraData.totalSupply, 'None')}</InfoRow>
        <InfoRow label="Max Supply">{formatFloat(coin.extraData.maxSupply, 'Infinity')}</InfoRow>
      </> }
    </WidgetBlock>
  )
}
export default WidgetPrimary;