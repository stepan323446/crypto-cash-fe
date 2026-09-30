import { Pagination } from "@shared/api/types"



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

export interface Network {
  id: number
  name: string
  icon: string
  type: string
  nativeAsset: number
  explorerUrl: string
}