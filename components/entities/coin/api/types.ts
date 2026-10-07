import { PaginationDto } from "@shared/api/types";

export interface FiatDto {
  id: number
  name: string
  code: string
  symbol: string
  conversion_rate: string
  display_name: string
  display_sign_name: string
}

export interface CoinDto {
  id: number;
  name: string;
  code: string;
  slug: string;
  icon: string | null;
  price: string;
  change_24h: number;
  market_cap: string;
  trading_vol_24h: string;
}
export type CoinsPageDto = PaginationDto<CoinDto>;

export interface NetworkDto {
  id: number;
  name: string;
  icon: string;
  type: string;
  native_asset: number;
  explorer_url: string;
}

export interface CategoryDto {
  id: number;
  name: string;
}

export interface ExtraDataDto {
  ath: string;
  range_24h: [string, string];
  max_supply: string | null;
  total_supply: string;
  price_history: {
    percentage_1y: string;
    percentage_7d: string;
    percentage_14d: string;
    percentage_30d: string;
  };
}

export interface CoinDetailDto {
  id: number;
  name: string;
  code: string;
  slug: string;
  icon: string | null;
  price: string;
  coingecko_id: string;
  website_urls: string;
  primary_chain?: NetworkDto
  parent_coin_detail: CoinDto | null;
  description: string;
  issue_date: string;
  static_extra_data: string;
  change_24h: number;
  market_cap: string;
  trading_vol_24h: string;
  extra_data?: ExtraDataDto;
  categories: number[];
  categories_detail: CategoryDto[];
  time_created: string;
  time_updated: string;
}
