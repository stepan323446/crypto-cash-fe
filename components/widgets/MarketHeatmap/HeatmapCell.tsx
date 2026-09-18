// widgets/MarketHeatmap/HeatmapCell.tsx
'use client'
import { getHeatmapColor } from "./utils/heatmapColor"

interface HeatmapCellProps {
  x?: number
  y?: number
  width?: number
  height?: number
  name?: string
  change24h?: number
}

export function HeatmapCell({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  name = '',
  change24h = 0,
}: HeatmapCellProps) {
  const fill = getHeatmapColor(change24h)
  const showText = width > 50 && height > 30

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        stroke="var(--background)"
        strokeWidth={3}
        rx={6}
      />
      {showText && (
        <>
          <text
            x={x + width / 2}
            y={y + height / 2 - 6}
            textAnchor="middle"
            fill="#ffffff"
            stroke="none"
            fontSize={12}
            fontWeight={600}
          >
            {name}
          </text>
          <text
            x={x + width / 2}
            y={y + height / 2 + 10}
            textAnchor="middle"
            fill="#ffffff"
            stroke="none"
            fontSize={11}
          >
            {change24h > 0 ? '+' : ''}{change24h.toFixed(2)}%
          </text>
        </>
      )}
    </g>
  )
}