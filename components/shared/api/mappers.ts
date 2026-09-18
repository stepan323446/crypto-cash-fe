import { Pagination, PaginationDto } from "./types";

export function mapPadinationDtoToPagination<T>(dto: PaginationDto<T>): Pagination<T> {
  return {
    count: dto.count,
    pageSize: dto.page_size,
    page: dto.page,
    totalPages: dto.total_pages,
    results: dto.results
  }
}