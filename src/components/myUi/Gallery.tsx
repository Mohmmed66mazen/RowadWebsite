// Gallery

import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../ui/dialog"
import { DialogHeader } from "../ui/dialog"
import { useRef, useState } from "react"

export function Gallery() {

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  const [open,setOpen] = useState(false)

  return (
    <>
<Dialog open={open}  onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle></DialogTitle>
      <DialogDescription>
<div className=" p-3 bg-second w-full">
<iframe  className="w-full aspect-video" src="https://www.youtube.com/embed/jgO-OLkvh24?si=zqmg_e8sq5GDMMpt" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
     <Carousel
      plugins={[plugin.current]}
      opts={{loop:true,align:'start'}}
      className="w-3/4  mx-auto my-10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem onClick={()=>{setOpen(true)}} className="md:basis-1/2 cursor-pointer" key={index}>
            <div className="p-1 w-full relative">
            <img className="aspect-video  border-primary/80 rounded-sm border-2 object-cover" src={`./photo/h${index +1}.jpg`}/>
            <img className="w-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full" src="photo/player.svg"/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </>
   
  )
}

export default Gallery