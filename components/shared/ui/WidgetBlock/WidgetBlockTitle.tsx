import { cn } from "@shared/lib/utils";
import { ReactNode } from "react";

interface Props { 
  children?: ReactNode
  className?: string
}

const WidgetBlockTitle = ({ children, className }: Props) => {
  return (
    <h2 className={cn("text-xl md:text-2xl font-semibold mb-4", className)}>
      {children}
    </h2>
  )
}

export default WidgetBlockTitle;