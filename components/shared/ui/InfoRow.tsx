import { Card } from "@shadcn/components/ui/card"
import { cn } from "@shared/lib/utils"
import { ReactNode } from "react"

interface Props {
  label?: string
  className?: string
  children?: ReactNode
}

const InfoRow = ({ className, children, label }: Props) => {
  return (
    <Card className={cn("flex flex-row justify-between items-center p-3.5", className)}>
      {label && <div className="text-meta mr-3 shrink-0">{label}</div>}
      <div>{ children }</div>
    </Card>
  )
}

export default InfoRow