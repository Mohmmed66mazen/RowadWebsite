// LogoCollection.tsx
import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function LogoCollection() {
    const plugin = React.useRef(
        Autoplay({ delay: 2500, stopOnInteraction: false })
      )
  return (
    <Carousel
    plugins={[plugin.current]}
      opts={{
        align: "start",
        loop:true
      }}
      className="w-11/12  mx-auto my-10 md:w-[60vw] "
    >
      <CarouselContent >
        {Array.from({ length: 5 }).map((_, col) => (
          <CarouselItem key={col} className="basis-1/2  md:basis-1/3 lg:basis-1/4">
            <div className="p-1   items-center flex flex-col gap-3">
            {Array.from({ length: 3 }).map((_, row) => (
            <img key={row} loading="lazy" className=" bg-gradient-to-tl   from-teal-500  to-teal-900 w-full  aspect-square object-contain p-5 rounded-sm" src={`./logo/${col+1}${row+1}.png`} />
            ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
