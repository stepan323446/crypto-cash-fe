"use client"

import { createColumnHelper } from "@tanstack/react-table"

import { type DataTableFeatures } from "@shared/ui/DataTable/data-table.features"
import { CoinIcon, type Coin } from "@entities/coin"
import { ChangeGapText } from "@shared/ui"
import { formatCompactNumber, formatPrice } from "@shared/lib/formatters"
import Link from "next/link"
import { routes } from "@shared/config/routes"

const columnHelper = createColumnHelper<DataTableFeatures, Coin>()

export const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: "Name",
    meta: { className: 'sticky left-0 z-10 w-[200px] lg:w-full', sticky: true },
    cell: (info) => {
      const original = info.row.original;
      return (
        <Link href={routes.coin(original.slug)} className="flex items-center">
          <CoinIcon coin={original} className="mr-3 shrink-0" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <span className="font-semibold mr-2">{ original.name }</span>
            <span className="text-sm text-meta">{ original.code }</span>
          </div>
        </Link>
      )
    },
    enableSorting: false
  }),
  columnHelper.accessor("price", {
    id: "price",
    header: "Price",
    meta: { className: 'w-[120px] md:w-[140px]' },
    cell: (info) => (
      <div>
        <div>{formatPrice(info.getValue(), '')}</div>
        <div className="text-meta text-xs">{formatPrice(info.getValue())}</div>
      </div>
    ),
    enableSorting: true
  }),
  columnHelper.accessor("change24h", {
    id: "change_24h",
    header: "Change (24h)",
    meta: { className: 'w-[110px] md:w-[120px]' },
    cell: (info) => (
      <ChangeGapText value={info.getValue()} />
    ),
    enableSorting: true
  }),
  columnHelper.accessor("marketCap", {
    id: "market_cap",
    header: "Market Cap",
    meta: { className: 'hidden sm:table-cell w-[160px]' },
    cell: (info) => formatCompactNumber(info.getValue()),
    enableSorting: true
  }),
  columnHelper.accessor("tradingVol24h", {
    id: "trading_vol_24h",
    header: "24h Volume",
    meta: { className: 'hidden sm:table-cell w-[160px]' },
    cell: (info) => formatCompactNumber(info.getValue()),
    enableSorting: true
  }),
])