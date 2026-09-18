import { cn } from "@shared/lib/utils";
import { ReactNode } from "react";

interface Props { 
  children?: ReactNode
  className?: string
}

const HeadBlockContent = ({ children, className }: Props) => {
  return (
    <div className={cn("text-default-text md:text-lg", className)}>
      {children}
    </div>
  )
}

export default HeadBlockContent;