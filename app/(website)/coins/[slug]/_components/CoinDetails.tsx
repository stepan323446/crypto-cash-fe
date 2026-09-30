'use client'
import { useCoin } from "@entities/coin";
import CoinTitle from "./ui/CoinTitle";
import { Button } from "@shadcn/components/ui/button";
import CoinSmallList from "@widgets/CoinSmallList";
import { WidgetBlock, WidgetBlockTitle } from "@shared/ui/WidgetBlock";

interface Props {
  slug: string
}

const CoinDetails = ({slug}: Props) => {
  const { data: coin } = useCoin(slug);

  return (
    <div>
      <div className="flex justify-between pt-7">
        <CoinTitle coin={coin} />
        <Button variant="secondary" size="lg">Compare</Button>
      </div>
      
      <div className="grid grid-cols-[1fr_380px]">
        <div>
      
        </div>
        <div className="space-x-2">
          <WidgetBlock>
            <WidgetBlockTitle>Trending coins</WidgetBlockTitle>
            <CoinSmallList sort="-trading_vol_24h" />
          </WidgetBlock>
        </div>
      </div>
    </div>
  )
}

export default CoinDetails;