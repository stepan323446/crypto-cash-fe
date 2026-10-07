import { Skeleton } from "@shadcn/components/ui/skeleton";
import { WidgetBlock } from "@shared/ui/WidgetBlock";

const WidgetRowsSkeleton = () => {
  return (
    <WidgetBlock className="space-y-2">
      {Array.from({ length: 5 }, (_, i) => <Skeleton key={i} className="h-12 rounded-xl" />)}
    </WidgetBlock>
  )
}
export default WidgetRowsSkeleton;