import { cn } from "@shared/lib/utils"

interface Props {
  className?: string
}

const PrimaryNavbarSpacing = ({ className }: Props) => {
  return <div className={cn("h-14", className)}></div>
}

export default PrimaryNavbarSpacing