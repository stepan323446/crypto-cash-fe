import type { MouseEvent } from "react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@shadcn/components/ui/pagination"
import { Pagination as IPagination } from "@shared/api/types"
import { DOTS, getPageItems } from "./utils";

interface Props {
  pagination: IPagination<unknown>
  onChangePage: (page: number) => void;
}

const DataPagination = ({ pagination, onChangePage }: Props) => {
  const isLastPage = pagination.page == pagination.totalPages;
  const isFirstPage = pagination.page == 1;

  const changePage = (page: number) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onChangePage(page);
  };

  if(pagination.totalPages == 1) return '';

  const items = getPageItems(pagination.page, pagination.totalPages);

  return (
    <Pagination>
      <PaginationContent>
        {!isFirstPage && <PaginationItem>
          <PaginationPrevious href="#" onClick={changePage(pagination.page - 1)} />
        </PaginationItem>}

        {items.map((item, i) =>
          item === DOTS ? (
            <PaginationItem key={`dots-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={item}>
              <PaginationLink href="#" isActive={item === pagination.page} onClick={changePage(item)}>
                {item}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {!isLastPage && <PaginationItem>
          <PaginationNext href="#" onClick={changePage(pagination.page + 1)} />
        </PaginationItem>}
      </PaginationContent>
    </Pagination>
  )
}

export default DataPagination