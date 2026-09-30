import { axiosInstance } from "@shared/api/http";
import { Coin, CoinsPage, Network } from "../model/types";
import { CategoryDto, CoinDto, CoinsPageDto, NetworkDto } from "./types";
import { coinEndpoints } from "./endpoints";
import { mapPadinationDtoToPagination } from "@shared/api/mappers";
import { mapCoinDtoToCoin, mapNetworkDtoToNetwork } from "../lib/mappers";

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
export async function getCoin(slug: string): Promise<Coin> {
  const dto = await axiosInstance.get<CoinDto>(coinEndpoints.detail(slug));

  return mapCoinDtoToCoin(dto.data);
}

export async function getCategories(): Promise<CategoryDto[]> {
  const dto = await axiosInstance.get<CategoryDto[]>(coinEndpoints.categories);

  return dto.data;
}

export async function getNetworks(): Promise<Network[]> {
  const dto = await axiosInstance.get<NetworkDto[]>(coinEndpoints.networks);

  return dto.data.map(netDto => mapNetworkDtoToNetwork(netDto));
}