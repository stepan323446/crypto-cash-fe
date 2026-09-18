'use client'
import { Treemap, ResponsiveContainer } from 'recharts'
import { useCoinsQuery } from '@/components/entities/coin'
import { HeatmapCell } from './HeatmapCell'
import { Skeleton } from "@shadcn/components/ui/skeleton"

const MarketHeatmap = () => {
  const { data, isLoading } = useCoinsQuery({ limit: 20 })

  if (isLoading) return <Skeleton className="h-70" />
  if (!data?.results.length) return null

  const treemapData = data.results.map((coin) => ({
    name: coin.code,
    size: Math.log10(coin.marketCap + 1),
    change24h: coin.change24h,
  }))

  return (
    <div>
      <ResponsiveContainer width="100%" height={280}>
        <Treemap
          data={treemapData}
          dataKey="size"
          aspectRatio={1}
          content={<HeatmapCell />}
          isAnimationActive={false}
        />
      </ResponsiveContainer>
    </div>
  )
}

export default MarketHeatmap;