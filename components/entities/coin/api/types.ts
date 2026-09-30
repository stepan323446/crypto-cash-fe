import { PaginationDto } from "@shared/api/types"

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

export interface NetworkDto {
  id: number
  name: string
  icon: string
  type: string
  native_asset: number
  explorer_url: string
}

export interface CategoryDto {
  id: number
  name: string
}