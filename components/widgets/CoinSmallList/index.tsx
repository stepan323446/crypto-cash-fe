'use client'

import { CoinListItem, useCoinsQuery } from '@entities/coin';
import type { GetCoinsParams } from '@/components/entities/coin/api/requests'
import { routes } from "@shared/config/routes";

interface CoinSmallListProps {
  sort?: GetCoinsParams['ordering']
  limit?: GetCoinsParams['limit']
  className?: string
}

const CoinSmallList = ({ sort, className, limit = 4 }: CoinSmallListProps) => {
  const { data, isLoading } = useCoinsQuery({ limit, ordering: sort });

  return (
    <div className={className}>
      <div className="flex flex-col gap-3">
        {data?.results.map((coin) => (
          <CoinListItem key={coin.id} coin={coin} href={routes.coin(coin.slug)} />
        ))}

        {isLoading && Array.from({ length: limit }).map((_, i) => <CoinListItem key={i} href="/" />)}
      </div>
    </div>
  )
}

export default CoinSmallList;