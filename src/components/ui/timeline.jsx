import { cn } from "./utils"
import { Card, CardContent } from "./card"
import { useEffect, useRef, useState } from "react"

export function Timeline({ items, className }) {
  const containerRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 })

  // Sort items by year for proper timeline order (oldest first for left-to-right)
  const sortedItems = [...items].sort((a, b) => {
    const yearA = parseInt(a.date.match(/\d{4}/)?.[0] || "0")
    const yearB = parseInt(b.date.match(/\d{4}/)?.[0] || "0")
    return yearA - yearB
  })

  // Update scroll progress when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (container) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth
        const currentScroll = container.scrollLeft
        const progress = maxScrollLeft > 0 ? currentScroll / maxScrollLeft : 0
        setScrollProgress(progress)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Drag to scroll functionality
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseDown = (e) => {
      setIsDragging(true)
      container.style.cursor = 'grabbing'
      setDragStart({
        x: e.pageX - container.offsetLeft,
        scrollLeft: container.scrollLeft,
      })
    }

    const handleMouseMove = (e) => {
      if (!isDragging) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = (x - dragStart.x) * 2 // Multiply by 2 for faster scrolling
      container.scrollLeft = dragStart.scrollLeft - walk
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      container.style.cursor = 'grab'
    }

    const handleMouseLeave = () => {
      setIsDragging(false)
      container.style.cursor = 'grab'
    }

    // Touch events for mobile
    const handleTouchStart = (e) => {
      setIsDragging(true)
      setDragStart({
        x: e.touches[0].pageX - container.offsetLeft,
        scrollLeft: container.scrollLeft,
      })
    }

    const handleTouchMove = (e) => {
      if (!isDragging) return
      const x = e.touches[0].pageX - container.offsetLeft
      const walk = (x - dragStart.x) * 2
      container.scrollLeft = dragStart.scrollLeft - walk
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
    }

    container.style.cursor = 'grab'
    container.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('mouseleave', handleMouseLeave)
    
    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchmove', handleTouchMove)
    container.addEventListener('touchend', handleTouchEnd)

    return () => {
      container.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('mouseleave', handleMouseLeave)
      
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, dragStart])

  // Auto-scroll to reveal items on mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.3, rootMargin: '50px' }
    )

    const timelineItems = containerRef.current?.querySelectorAll('.timeline-card')
    timelineItems?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  // Scroll to the right (most recent events) on mount
  useEffect(() => {
    const container = containerRef.current
    if (container) {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        container.scrollLeft = container.scrollWidth - container.clientWidth
      }, 100)
    }
  }, []) // Empty dependency array - only runs once on mount

  // Navigation functions
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <div className={cn("relative w-full h-full", className)}>
      {/* Timeline container with drag-to-scroll */}
      <div className="h-full flex flex-col">
        {/* Navigation buttons */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-background transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30">
          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-background transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>




        {/* Horizontal timeline container - WITH drag-to-scroll */}
        <div 
          ref={containerRef}
          className="flex-1 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent pb-4 select-none"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'hsl(var(--primary) / 0.1) transparent'
          }}
        >
          <div className="flex items-start h-full min-w-max px-8 gap-6">
            {/* Timeline line */}
            <div className="absolute bottom-8 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent pointer-events-none" />
            
            {sortedItems.map((item, index) => (
              <TimelineCard 
                key={index}
                item={item} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TimelineCard({ item, index }) {
  const { date, title, subtitle, description, type } = item
  
  return (
    <div className="timeline-card relative flex-shrink-0 opacity-0 transform translate-y-4 transition-all duration-500">
      {/* Timeline dot */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background shadow-sm z-10" />
      
      {/* Card */}
      <Card className="w-80 border-0 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-200 group hover:shadow-lg">
        <CardContent className="p-6">
          {/* Date badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
              {date}
            </div>
            
            {/* Type icon */}
            <div className="w-6 h-6 text-muted-foreground/60 group-hover:text-primary transition-colors">
              {type === 'education' ? (
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82Z"/>
                </svg>
              ) : type === 'stage' ? (
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ) : (
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-2.08-2.85c-.51-.17-1.04-.19-1.54-.06-.19.05-.39.13-.56.24-.53.33-.94.84-1.11 1.46L12 5l-.71-1.21c-.17-.62-.58-1.13-1.11-1.46-.17-.11-.37-.19-.56-.24-.5-.13-1.03-.11-1.54.06A2.996 2.996 0 0 0 6 5c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM8 5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm7 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"/>
                </svg>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground leading-tight">{title}</h3>
            {subtitle && (
              <p className="text-sm text-primary font-medium">{subtitle}</p>
            )}
            {description && (
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {description}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}