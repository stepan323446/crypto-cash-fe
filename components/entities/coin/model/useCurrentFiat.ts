import { useFiatCurrencies } from '../api/queries'
import { useFiatStore } from "@/stores/currency"

export function useCurrentFiat() {
  const { data: currencies } = useFiatCurrencies()
  const currentCode = useFiatStore((state) => state.currentCurrencyCode)

  const currentFiat = currencies?.find((f) => f.code === currentCode)

  return { currentFiat, currentCode, currencies }
}