import { Pagination, PaginationDto } from "@shared/api/types"

export interface CoinDto {
  id: number
  name: string
  code: string
  slug: string
  icon: string | null
  price: string
  change_24h: number
  market_cap: string
  trading_vol_24h: string
}
export type CoinsPageDto = PaginationDto<CoinDto>;

export interface Coin {
  id: number
  name: string
  code: string
  slug: string
  icon: string | null
  price: number
  change24h: number
  marketCap: number
  tradingVol24h: number
}
export type CoinsPage = Pagination<Coin>;