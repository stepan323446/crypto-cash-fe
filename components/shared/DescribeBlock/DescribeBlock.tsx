import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  revert?: boolean;
  className?: string;
  children: ReactNode;
}

const DescribeBlock = ({ children, revert = false, className }: Props) => {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-5", className)}>
      { children }
    </div>
  )
}

export default DescribeBlock;