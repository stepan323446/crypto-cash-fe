import { axiosInstance } from "@shared/api/http";
import { CoinDetail, CoinsPage, Network } from "../model/types";
import { CategoryDto, CoinDetailDto, CoinsPageDto, FiatDto, NetworkDto } from "./types";
import { coinEndpoints, fiatEndpoints } from "./endpoints";
import { mapPadinationDtoToPagination } from "@shared/api/mappers";
import { mapCoinDetailDtoToCoinDetail, mapCoinDtoToCoin, mapNetworkDtoToNetwork } from "../lib/mappers";

export interface GetCoinsParams {
  page?: number;
  limit?: number;
  network?: number | null;
  ordering?: string;
  search?: string | null;
  categories?: number[];
}

export async function getCoins(params: GetCoinsParams = {}): Promise<CoinsPage> {
  const dto = await axiosInstance.get<CoinsPageDto>(coinEndpoints.list, {
    params
  })

  const pagination = mapPadinationDtoToPagination(dto.data);
  const coins = pagination.results.map(coinDto => mapCoinDtoToCoin(coinDto));

  return {
    ...pagination,
    results: coins
  };
}
export async function getCoin(slug: string): Promise<CoinDetail> {
  const dto = await axiosInstance.get<CoinDetailDto>(coinEndpoints.detail(slug));

  return mapCoinDetailDtoToCoinDetail(dto.data);
}

export async function getCategories(): Promise<CategoryDto[]> {
  const dto = await axiosInstance.get<CategoryDto[]>(coinEndpoints.categories);

  return dto.data;
}

export async function getNetworks(): Promise<Network[]> {
  const dto = await axiosInstance.get<NetworkDto[]>(coinEndpoints.networks);

  return dto.data.map(netDto => mapNetworkDtoToNetwork(netDto));
}
export async function getFiatCurrencies(): Promise<FiatDto[]> {
  const dto = await axiosInstance.get<FiatDto[]>(fiatEndpoints.list);

  return dto.data;
}