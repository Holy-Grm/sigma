import { cn } from "./utils"
import { Card, CardContent } from "./card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel"
import { useEffect, useState } from "react"

export function Timeline({ items, className }) {
  const [api, setApi] = useState()

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (api?.canScrollNext()) {
        api?.scrollNext()
      } else {
        api?.scrollTo(0)
      }
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [api])

  return (
    <div className={cn("relative", className)}>
      <Carousel 
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        {/* Timeline Line Background */}
        <div className="absolute top-16 left-8 right-8 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 z-0" />
        
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <TimelineItem 
                item={item} 
                index={index}
                isLast={index === items.length - 1}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  )
}

function TimelineItem({ item, index }) {
  const { date, title, subtitle, description, type } = item
  const isEven = index % 2 === 0
  
  return (
    <div className="relative flex flex-col items-center h-full">
      {/* Content Card - alternating top/bottom */}
      <div className={cn(
        "w-full transition-all duration-500",
        isEven ? "order-1 mb-8" : "order-3 mt-8"
      )}>
        <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm transform hover:-translate-y-1 h-full">
          <CardContent className="p-5">
            <div className="text-center mb-3">
              <div className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                {date}
              </div>
              <h4 className="font-bold text-foreground mb-1 text-sm">{title}</h4>
              {subtitle && (
                <p className="text-xs text-primary font-medium">{subtitle}</p>
              )}
            </div>
            {description && (
              <p className="text-xs text-muted-foreground leading-relaxed text-center">
                {description}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Timeline Dot */}
      <div className="relative z-20 order-2 flex items-center justify-center">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center shadow-lg",
          "bg-gradient-to-br from-primary to-primary/80",
          "border-4 border-background transition-transform duration-300 hover:scale-110"
        )}>
          {type === 'education' ? (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82Z"/>
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-2.08-2.85c-.51-.17-1.04-.19-1.54-.06-.19.05-.39.13-.56.24-.53.33-.94.84-1.11 1.46L12 5l-.71-1.21c-.17-.62-.58-1.13-1.11-1.46-.17-.11-.37-.19-.56-.24-.5-.13-1.03-.11-1.54.06A2.996 2.996 0 0 0 6 5c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM8 5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm7 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"/>
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}