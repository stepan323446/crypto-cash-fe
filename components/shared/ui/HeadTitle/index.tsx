import { cn } from "@shadcn/lib/utils";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

const HeadTitle = ({ children, className }: Props) => {
  return <h2 className={cn("text-primary-text block font-semibold text-2xl md:text-3xl", className)}>{ children }</h2>
}

export default HeadTitle;