"use client"
import { useCoinsQuery } from "@entities/coin"
import DataTable from "@shared/ui/DataTable"
import { columns } from "../model/columns"

import { useUrlSorting } from '@shared/lib/sorting'
import { useCoinTableParams } from '../lib/useCoinTableParams'
import { CoinSearchInput, CoinFilterDrawer } from "@features/index"
import { DataPagination } from "@shared/ui"
import { cn } from "@shared/lib/utils"

const CoinTable = () => {
  const [params, setParams] = useCoinTableParams()

  const { sorting, onSortingChange } = useUrlSorting({
    ordering: params.ordering,
    setOrdering: (ordering) => setParams({ ...params, ordering, page: 1 }),
  })

  const { data, isPlaceholderData } = useCoinsQuery(params);

  const applyFilters = (categories: number[], chain?: number) => {
    setParams({ ...params, categories, network: chain, page: 1 });
  }

  return (
    <div>
      <div className="flex justify-between mb-2 space-x-2">
        <CoinSearchInput value={params.search ?? ''} onSearch={(search) => setParams({ ...params, search, page: 1 })} />

        <CoinFilterDrawer initChain={params.network ?? undefined} initCategories={params.categories} applyFilters={applyFilters} />
      </div>
      <DataTable
        className={cn(isPlaceholderData ? 'opacity-60' : '', 'mb-3')}
        columns={columns}
        data={data?.results ?? []}
        sorting={sorting}
        onSortingChange={onSortingChange}
        manualSorting={true}
      />
      {data && <DataPagination pagination={data} onChangePage={(page) => setParams({...params, page})} />}
    </div>
  )
}

export default CoinTable;