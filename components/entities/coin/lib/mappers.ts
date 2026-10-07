import { extractDomain } from "@shared/lib/extracters";
import { CoinDetailDto, CoinDto, ExtraDataDto, NetworkDto } from "../api/types";
import { Coin, CoinDetail, ExtraData, Network } from "../model/types";

export function mapCoinDtoToCoin(dto: CoinDto): Coin {
  return {
    id: dto.id,
    name: dto.name,
    code: dto.code,
    slug: dto.slug,
    icon: dto.icon,
    price: Number(dto.price),
    change24h: dto.change_24h,
    marketCap: Number(dto.market_cap),
    tradingVol24h: Number(dto.trading_vol_24h),
  }
}

export function mapNetworkDtoToNetwork(dto: NetworkDto): Network {
  return {
    id: dto.id,
    name: dto.name,
    icon: dto.icon,
    type: dto.type,
    nativeAsset: dto.native_asset,
    explorerUrl: dto.explorer_url
  }
}

export function mapExtraDataDtoToExtraData(dto: ExtraDataDto): ExtraData {
  return {
    ath: Number(dto.ath),
    range24h: [Number(dto.range_24h[0]), Number(dto.range_24h[1])],
    maxSupply: dto.max_supply !== null ? Number(dto.max_supply) : null,
    totalSupply: Number(dto.total_supply),
    priceHistory: {
      percentage1y: Number(dto.price_history.percentage_1y),
      percentage7d: Number(dto.price_history.percentage_7d),
      percentage14d: Number(dto.price_history.percentage_14d),
      percentage30d: Number(dto.price_history.percentage_30d),
    },
  }
}

export function mapCoinDetailDtoToCoinDetail(dto: CoinDetailDto): CoinDetail {
  return {
    id: dto.id,
    name: dto.name,
    code: dto.code,
    slug: dto.slug,
    icon: dto.icon,
    price: Number(dto.price),
    coingeckoId: dto.coingecko_id,
    primaryChain: dto.primary_chain ? mapNetworkDtoToNetwork(dto.primary_chain) : undefined,
    websiteUrls: dto.website_urls.split(",").map((url) => {
      return { domain: extractDomain(url), url }
    }).filter(web => web.domain),
    parentCoinDetail: dto.parent_coin_detail ? mapCoinDtoToCoin(dto.parent_coin_detail) : null,
    description: dto.description,
    issueDate: dto.issue_date,
    staticExtraData: dto.static_extra_data,
    change24h: dto.change_24h,
    marketCap: Number(dto.market_cap),
    tradingVol24h: Number(dto.trading_vol_24h),
    extraData: dto.extra_data ? mapExtraDataDtoToExtraData(dto.extra_data) : null,
    categories: dto.categories,
    categories_detail: dto.categories_detail,
    timeCreated: new Date(dto.time_created),
    timeUpdated: new Date(dto.time_updated),
  }
}