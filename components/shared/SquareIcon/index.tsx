import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

const SquareIcon = ({ children, className }: Props) => {
  return (
    <div className={cn("text-xl w-9 h-9 bg-brand flex items-center justify-center rounded-md", className)}>
      { children }
    </div>
  )
}

export default SquareIcon;