import { axiosInstance } from "@shared/api/http";
import { NetworkVariations } from "@shared/api/types";
import { CoinsPage, CoinsPageDto } from "../model/types";
import { coinEndpoints } from "./endpoints";
import { mapPadinationDtoToPagination } from "@shared/api/mappers";
import { mapCoinDtoToCoin } from "../lib/mappers";

export interface GetCoinsParams {
  page?: number;
  limit?: number;
  network?: NetworkVariations;
  ordering?: string;
  search?: string;
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