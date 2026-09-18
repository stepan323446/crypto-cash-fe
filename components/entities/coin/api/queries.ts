import { useQuery } from "@tanstack/react-query";
import { getCoins, GetCoinsParams } from "./requests";
import { coinKeys } from "./queryKeys";

export function useCoinsQuery(params: GetCoinsParams = {}) {
  return useQuery({
    queryKey: coinKeys.list(params),
    queryFn: () => getCoins(params),
    refetchInterval: 10 * 60 * 1000,
    staleTime: 5 * 60 * 1000,
  })
}