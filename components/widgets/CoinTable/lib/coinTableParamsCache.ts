import { createSearchParamsCache } from 'nuqs/server'
import { coinTableParsers } from './coinTableParses'

export const coinTableParamsCache = createSearchParamsCache(coinTableParsers)