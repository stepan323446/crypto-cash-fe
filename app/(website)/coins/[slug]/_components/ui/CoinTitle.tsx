import { Coin, CoinIcon, FiatPrice } from "@entities/coin";
import { Skeleton } from "@shadcn/components/ui/skeleton";
import { cn } from "@shared/lib/utils";
import { ChangeGapText } from "@shared/ui";

interface Props {
  coin?: Coin,
  useH1?: boolean
  className?: string
}

const CoinTitle = ({ coin, className, useH1 = true }: Props) => {
  if(!coin)
    return (
      <div>
        <Skeleton className="h-10 w-50 mb-3" />
        <Skeleton className="h-9 w-30" />
      </div>
  )

  return (
    <div>
      <div className={cn("text-2xl flex items-center font-semibold mb-3", className)}>
        <CoinIcon coin={coin} className="w-10 h-10 mr-3" />
        { useH1 ? 
        <h1>{ coin.name } <span className="text-lg text-meta">{coin.code}</span></h1> : 
        <h2>{ coin.name } <span className="text-lg text-meta">{coin.code}</span></h2> }
      </div>
      <div className="text-3xl"><FiatPrice usdPrice={coin.price} /> <ChangeGapText className="text-base" value={coin.change24h} hasArrow /></div>
    </div>
  )
}

export default CoinTitle