'use client'

import { useFiatStore } from "@/stores/currency"
import { useFiatCurrencies } from "@entities/coin"
import { useEffect } from "react"

export function FiatProvider({ children }: { children: React.ReactNode }) {
  const setCurrencyList = useFiatStore((state) => state.setCurrencyList)

  const { data } = useFiatCurrencies()

  useEffect(() => {
    if (data) {
      setCurrencyList(data)
    }
  }, [data, setCurrencyList])

  return <>{children}</>
}