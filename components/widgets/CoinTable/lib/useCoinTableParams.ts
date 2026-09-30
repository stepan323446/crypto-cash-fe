'use client'
import { useQueryStates } from 'nuqs'
import { coinTableParsers } from './coinTableParses'

export function useCoinTableParams() {
  return useQueryStates(coinTableParsers, {
    history: 'replace',
  })
}