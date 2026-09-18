import { Coin, CoinDto } from "../model/types";

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