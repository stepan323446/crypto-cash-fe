import { cn } from "@shared/lib/utils";
import { ReactNode } from "react";

interface Props { 
  children?: ReactNode
  className?: string
}

const HeadBlock = ({ children, className }: Props) => {
  return (
    <div className={cn("py-4 px-6 bg-radial from-[#333] to-[#171717] dark rounded-md border border-line", className)}>
      {children}
    </div>
  )
}

export default HeadBlock;