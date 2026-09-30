"use client"

import { useTable, type ColumnDef, type RowData, type SortingState, type OnChangeFn } from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@shadcn/components/ui/table"

import { features, type DataTableFeatures } from "./data-table.features"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { cn } from "@shared/lib/utils"

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<DataTableFeatures, TData>[]
  data: TData[]
  sorting?: SortingState
  onSortingChange?: OnChangeFn<SortingState>
  manualSorting?: boolean
  className?: string
}

function DataTable<TData extends RowData>({
  columns,
  data,
  onSortingChange,
  sorting,
  className,
  manualSorting = false,
}: DataTableProps<TData>) {
  const table = useTable({
    features,
    data,
    columns,
    onSortingChange: onSortingChange,
    state: { sorting },
    manualSorting: manualSorting
  })

  return (
    <div className={cn("overflow-hidden rounded-md border bg-card", className)}>
      <Table className="w-full table-fixed">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-card hover:bg-card-hover">
              {headerGroup.headers.map((header) => {
                const canSort = header.column.getCanSort()
                const sortDirection = header.column.getIsSorted()

                return (
                  <TableHead 
                    key={header.id}
                    className={cn(
                      "text-meta font-normal px-4", 
                      header.column.columnDef.meta?.className,
                      header.column.columnDef.meta?.sticky && 'bg-inherit',
                      { "cursor-pointer select-none": canSort }
                    )}
                    onClick={(e) => header.column.getToggleSortingHandler()?.(e)}>

                    {header.isPlaceholder ? null : (
                      <table.FlexRender header={header} />
                    )}
                    {canSort && (
                      <>
                        <span className="xs ml-1">
                          {sortDirection === "asc" && <FontAwesomeIcon icon={faChevronUp} />}
                          {sortDirection === "desc" && <FontAwesomeIcon icon={faChevronDown} />}
                        </span>
                      </>
                    )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="text-base bg-card hover:bg-card-hover"
              >
                {row.getAllCells().map((cell) => (
                  <TableCell key={cell.id} className={
                      cn(
                        'p-4', 
                        cell.column.columnDef.meta?.className,
                        cell.column.columnDef.meta?.sticky && 'bg-inherit',)
                    }>
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default DataTable;