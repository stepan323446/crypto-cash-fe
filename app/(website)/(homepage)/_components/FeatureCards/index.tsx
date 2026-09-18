import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardDescription, CardHeader, CardTitle } from "@shadcn/components/ui/card"
import cards from "./FeatureCard.data";
import { cn } from "@shared/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconProp;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <Card className="basis-full sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.667rem)] h-auto min-w-[288px]">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 mb-2">
          <div className="text-xl w-9 h-9 bg-brand flex items-center justify-center rounded-md">
            <FontAwesomeIcon icon={icon} />
          </div>
          <span>{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

interface Props { 
  className?: string;
}
const FeatureCards = ({ className }: Props) => {
  return (
    <div className={cn("container px-3 max-w-300 mx-auto", className)}>
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card) => (
          <FeatureCard key={card.title} title={card.title} description={card.description} icon={card.icon} />
        ))}
      </div>
    </div>
  )
}
export default FeatureCards;