export interface PaginationDto<T> {
  count: number
  page_size: number
  page: number
  total_pages: number
  results: T[]
}
export interface Pagination<T> {
  count: number
  pageSize: number
  page: number
  totalPages: number
  results: T[]
}
export type NetworkVariations = 'ton'