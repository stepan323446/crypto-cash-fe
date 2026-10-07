import { Pagination } from "@shared/api/types"
import { CategoryDto } from "../api/types"

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

export interface ExtraData {
  ath: number
  range24h: [number, number]
  maxSupply: number | null
  totalSupply: number
  priceHistory: {
    percentage1y: number
    percentage7d: number
    percentage14d: number
    percentage30d: number
  }
}

export interface CoinDetail {
  id: number
  name: string
  code: string
  slug: string
  icon: string | null
  price: number
  coingeckoId: string
  websiteUrls: { domain: string, url: string }[]
  parentCoinDetail: Coin | null
  primaryChain?: Network
  description: string
  issueDate: string;
  staticExtraData: string
  change24h: number
  marketCap: number
  tradingVol24h: number
  extraData: ExtraData | null
  categories: number[]
  categories_detail: CategoryDto[]
  timeCreated: Date
  timeUpdated: Date
}
