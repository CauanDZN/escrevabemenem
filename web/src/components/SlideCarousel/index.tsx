import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useEffect, useState, useRef, ReactElement } from "react"

interface RowProps {
  className?: string;
  children: ReactElement[];
}

let interval: NodeJS.Timer

export default function SlideCarousel({ className, children }: RowProps) {
  const [slide, setSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const length: number = children ? children.length - 1 : 0

  function handlePreviousSlide() {
    if (slide > 0) {
      setSlide(slide - 1)
    }
  }

  function handleNextSlide() {
    if (slide < length) {
      setSlide(slide + 1)
    }
  }

  function handleMouseDown(event: React.MouseEvent<HTMLDivElement>) {
    setIsDragging(true)

    if (containerRef.current) {
      setStartX(event.clientX - containerRef.current.offsetLeft)
      setScrollLeft(containerRef.current.scrollLeft)
    }
  }

  function handleMouseUp() {
    setIsDragging(false)
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!isDragging) return
    event.preventDefault()

    if (containerRef.current) {
      const x = event.clientX - containerRef.current.offsetLeft
      const walk = (x - startX) * 1

      containerRef.current.scrollLeft = scrollLeft - walk

      walk > 0 && handlePreviousSlide()
      walk < 0 && handleNextSlide()

      setIsDragging(false)
    }
  }

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    setIsDragging(true);
    const touch = event.touches[0];

    if (containerRef.current) {
      setStartX(touch.clientX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  }

  function handleTouchEnd() {
    setIsDragging(false);
  }

  function handleTouchMove(event: React.TouchEvent<HTMLDivElement>) {
    if (!isDragging) return;
    event.preventDefault();
    const touch = event.touches[0];

    if (containerRef.current) {
      const x = touch.clientX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 1;

      containerRef.current.scrollLeft = scrollLeft - walk;
      walk > 0 && handlePreviousSlide()
      walk < 0 && handleNextSlide()
      setIsDragging(false);
    }
  }

  useEffect(() => {
    interval = setInterval(() => {
      if (slide < length) {
        setSlide(slide + 1)
      } else {
        setSlide(0)
      }
    }, 5000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [slide, length])

  return (
    <div
      className={`${className} flex flex-col flex gap-2 w-full overflow-auto`}
    >
      <div className="overflow-x-hidden">
        <div
          ref={containerRef}
          className={`w-auto flex flex-row transform transition-transform duration-300`}
          style={{ transform: `translateX(-${slide * 100}%)` }}
          onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove}
        >
          {children}
        </div>
      </div>

      <div className="flex flex-row justify-between items-center p-2 text-dark-green-600">
        <button className="disabled:text-transparent transition duration-300 disabled:opacity-30" disabled={slide === 0} onClick={handlePreviousSlide}>
          <CaretLeft size={24} weight='bold' />
        </button>

        <div className="flex flex-row gap-2">
          {Array.from({ length: length + 1 }).map((_, index) =>
            <div key={index} className={`w-2 h-2 rounded-full ${slide === index ? 'bg-dark-green-600' : 'bg-dark-green-600 opacity-30'} transition duration-300 cursor-pointer`} onClick={() => setSlide(index)} />
          )}
        </div>

        <button className="disabled:text-transparent transition duration-300" disabled={slide >= length} onClick={handleNextSlide}>
          <CaretRight size={24} weight='bold' />
        </button>
      </div>
    </div >
  )
}