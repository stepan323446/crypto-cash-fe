import { cn } from "@shared/lib/utils";
import { ReactNode } from "react";
import HeadTitle from "../HeadTitle";

interface Props { 
  children?: ReactNode
  className?: string
}

const HeadBlockTitle = ({ children, className }: Props) => {
  return (
    <HeadTitle className={cn("text-2xl md:text-4xl mb-4", className)}>
      {children}
    </HeadTitle>
  )
}

export default HeadBlockTitle;