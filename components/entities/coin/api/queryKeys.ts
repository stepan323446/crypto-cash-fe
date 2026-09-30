import type { GetCoinsParams } from './requests'

export const coinKeys = {
  all: ['coin'] as const,
  lists: () => [...coinKeys.all, 'list'] as const,
  list: (params: GetCoinsParams) => [...coinKeys.lists(), params] as const,
  details: () => [...coinKeys.all, 'detail'] as const,
  detail: (slug: string) => [...coinKeys.details(), slug] as const,
}

export const taxKeys = {
  categories: ['categories'] as const,
  networks: ['networks'] as const
}