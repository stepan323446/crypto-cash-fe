'use client'
import { useCoin } from "@entities/coin";
import CoinTitle from "./ui/CoinTitle";
import { Button } from "@shadcn/components/ui/button";
import CoinSmallList from "@widgets/CoinSmallList";
import { WidgetBlock, WidgetBlockTitle } from "@shared/ui/WidgetBlock";
import WidgetPrimary from "./ui/sidebar/WidgetPrimary";
import WidgetInfo from "./ui/sidebar/WidgetInfo";
import { DescribeBlock, DescribeBlockContent, DescribeBlockTitle } from "@shared/ui/DescribeBlock";

interface Props {
  slug: string
}

const CoinDetails = ({slug}: Props) => {
  const { data: coin } = useCoin(slug);

  return (
    <div className="mb-30">
      <div className="flex justify-between pt-7 mb-6">
        <CoinTitle coin={coin} />
        <Button variant="secondary" size="lg">Compare</Button>
      </div>
      
      <div className="grid grid-cols-[1fr_380px] gap-10">
        <div>
          <DescribeBlock className="lg:grid-cols-1">
            <DescribeBlockContent>
              <DescribeBlockTitle>About {coin?.code}</DescribeBlockTitle>
              <div>
                {coin?.description}
              </div>
            </DescribeBlockContent>
          </DescribeBlock>
        </div>
        <div className="space-y-6">
          <WidgetPrimary coin={coin} />
          <WidgetBlock>
            <WidgetBlockTitle>Info</WidgetBlockTitle>
            <WidgetInfo coin={coin} />
          </WidgetBlock>
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