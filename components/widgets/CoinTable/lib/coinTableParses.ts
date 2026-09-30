import { parseAsInteger, parseAsString, parseAsNativeArrayOf } from 'nuqs/server'

export const coinTableParsers = {
  page: parseAsInteger.withDefault(1),
  ordering: parseAsString.withDefault(''),
  categories: parseAsNativeArrayOf(parseAsInteger).withDefault([]),
  search: parseAsString,
  network: parseAsInteger
}