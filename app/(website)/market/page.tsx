import { coinKeys } from "@entities/coin/api/queryKeys";
import { getCoins } from "@entities/coin/api/requests";
import { buttonVariants } from "@shadcn/components/ui/button";
import { getQueryClient } from "@shared/api/getQueryClient";
import { cn } from "@shared/lib/utils";
import { HeadBlock, HeadBlockContent, HeadBlockTitle } from "@shared/ui/HeaderBlock";
import { WidgetBlock, WidgetBlockTitle } from "@shared/ui/WidgetBlock";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import CoinSmallList from "@widgets/CoinSmallList";
import { CoinTable, coinTableParamsCache} from "@widgets/CoinTable";
import MarketHeatmap from "@widgets/MarketHeatmap";
import { PrimaryNavbarSpacing } from "@widgets/PrimaryNavbar";
import type { SearchParams } from 'nuqs/server'
import Link from "next/link";

interface Props {
  searchParams: SearchParams
}

const MarketPage = async ({ searchParams }: Props) => {
  const queryClient = getQueryClient();

  const params = await coinTableParamsCache.parse(searchParams);

  await queryClient.query({
    queryKey: coinKeys.list(params),
    queryFn: () => getCoins(params),
  }).catch(() => {})

  return (
    <div>
      <PrimaryNavbarSpacing className="mb-12" />
      
      <div className="container mx-auto mb-8">
        <HeadBlock className="flex justify-between items-start md:items-center flex-col md:flex-row">
          <HeadBlockContent className="max-w-182 mb-2 md:mb-0">
            <HeadBlockTitle><span className="text-brand">Crypto</span>Market</HeadBlockTitle>
            <p>Stay informed with up-to-date coverage of the crypto market, blockchain technology, major trends, and industry developments from around the world.</p>
          </HeadBlockContent>
          <Link href="/about" className={cn(buttonVariants({ size: "lg" }), "px-4")}>
            My Assets
          </Link>
        </HeadBlock>
      </div>

      <section className="container mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <WidgetBlock>
            <WidgetBlockTitle>Top Gainers</WidgetBlockTitle>
            <CoinSmallList sort="-change_24h" />
          </WidgetBlock>
          <WidgetBlock>
            <WidgetBlockTitle>Trending</WidgetBlockTitle>
            <CoinSmallList sort="-trading_vol_24h" />
          </WidgetBlock>
          <WidgetBlock>
            <WidgetBlockTitle>Heatmap</WidgetBlockTitle>
            <MarketHeatmap />
          </WidgetBlock>
        </div>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <CoinTable />
        </HydrationBoundary>
      </section>
    </div>
  )
}

export default MarketPage;