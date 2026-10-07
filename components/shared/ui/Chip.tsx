import { cn } from "@shared/lib/utils"
import Link from "next/link"
import React, { ReactNode } from "react"

interface Props {
  className?: string
  children?: ReactNode
  href?: string
  external?: boolean
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

const Chip = ({ className, children, href, onClick, external = false }: Props) => {
  const defaultClass = 'inline-block bg-inside hover:opacity-70 transition-opacity px-2 py-1 rounded-md cursor-pointer select-none';

  if(href)
    if(external)
      return <a href={href} target="_blank" className={cn(defaultClass, className)}>{children}</a>
    else
      return <Link href={href} className={cn(defaultClass, className)}>{children}</Link>

  return (
    <span className={cn(defaultClass, className)} onClick={onClick}>{children}</span>
  )
}

export default Chip;