import { Coin, CoinIcon } from "@entities/coin";
import { formatPrice } from "@shared/lib/formatters";
import { cn } from "@shared/lib/utils";
import { ChangeGapText } from "@shared/ui";

interface Props {
  coin: Coin,
  useH1: boolean
  className?: string
}

const CoinTitle = ({ coin, useH1, className }: Props) => {
  return (
    <div>
      <div className={cn("text-2xl flex items-center font-semibold mb-3", className)}>
        <CoinIcon coin={coin} className="w-10 h-10 mr-3" />
        { useH1 ? <h1>{ coin.name }</h1> : <h2>{ coin.name }</h2> }
      </div>
      <div className="text-3xl">{formatPrice(coin.price)} <ChangeGapText className="text-base" value={coin.change24h} hasArrow /></div>
    </div>
  )
}

export default CoinTitle