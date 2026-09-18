import { Card, CardDescription, CardHeader, CardTitle } from "@shadcn/components/ui/card";
import { infoBlocks } from "./blocks.data";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@shadcn/components/ui/carousel";
import HeadTitle from "@shared/ui/HeadTitle";

interface BlockProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}
const Block = ({ title, description, image, className }: BlockProps) => {
  return (
    <Card className={className}>
      <div className="p-3">
        <div className="relative bg-inside w-full h-48 rounded-lg">
          <Image 
          src={image} 
          alt={title} 
          fill sizes="(max-width: 768px) 100vw, 252px"
          className="object-contain" />
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

interface WhatIsCryptoCashProps {
  className?: string
}

const WhatIsCryptoCash = ({ className }: WhatIsCryptoCashProps) => {
  return (
    <div className={className}>
      <HeadTitle className="text-center mb-11">
        What is <span className="text-brand">CryptoCash</span>?
      </HeadTitle>
      <div>
        <Carousel
          opts={{
            align: "center",
          }}
          className="max-w-240 mx-auto"
          >
          <CarouselContent className="p-1 -ml-8">
            { infoBlocks.map((item, i) => (
              <CarouselItem key={i} className="sm:basis-1/2 lg:basis-1/3 pl-8">
                <Block
                  title={item.title} 
                  description={item.description} 
                  image={item.image}
                  className="h-full" />
              </CarouselItem>
            )) }
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default WhatIsCryptoCash;