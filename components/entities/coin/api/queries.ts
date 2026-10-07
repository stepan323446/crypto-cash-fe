import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getCategories, getCoin, getCoins, GetCoinsParams, getFiatCurrencies, getNetworks } from "./requests";
import { coinKeys, fiatKeys, taxKeys } from "./queryKeys";

export function useCoinsQuery(params: GetCoinsParams = {}) {
  return useQuery({
    queryKey: coinKeys.list(params),
    queryFn: () => getCoins(params),
    placeholderData: keepPreviousData,
    refetchInterval: 10 * 60 * 1000,
    staleTime: 5 * 60 * 1000,
  })
}
export function useCoin(slug: string) {
  return useQuery({
    queryKey: coinKeys.detail(slug),
    queryFn: () => getCoin(slug),
    refetchInterval: 10 * 60 * 1000,
    staleTime: 5 * 60 * 1000,
  })
}

export function useNetworks() {
  return useQuery({
    queryKey: taxKeys.networks,
    queryFn: () => getNetworks()
  });
}
export function useCategories() {
  return useQuery({
    queryKey: taxKeys.categories,
    queryFn: () => getCategories()
  });
}
export function useFiatCurrencies() {
  return useQuery({
    queryKey: fiatKeys.all,
    queryFn: () => getFiatCurrencies()
  });
}
