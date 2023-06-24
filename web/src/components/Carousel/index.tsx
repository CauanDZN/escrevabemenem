import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useState, useRef, ReactElement, useEffect } from "react"

interface RowProps {
  className: string;
  children: ReactElement[];
}

export default function Carousel({ className, children }: RowProps) {
  const [slide, setSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const length: number = children ? children.length - 1 : 0

  function scrollToSlide(newSlide: number) {
    if (containerRef.current) {
      setSlide(newSlide);
      const targetElement = containerRef.current.childNodes[newSlide] as HTMLElement;

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }

  function handleMove(event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) {
    if (!isDragging) return;
    event.preventDefault();
    const touch = 'touches' in event ? event.touches[0] : event;
    if (!containerRef.current) return;
    const x = touch.clientX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    containerRef.current.scrollLeft = scrollLeft - walk;
    walk > 0 ? handleSlide(slide - 1) : handleSlide(slide + 1);
    setIsDragging(false);
  }

  function handleSlide(newSlide: number) {
    if (newSlide < 0 || newSlide > length) return;
    scrollToSlide(newSlide);
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

  return (
    <div
      className={`${className} flex flex-col flex gap-2 w-full`}
    >
      <div className="overflow-x-hidden">
        <div
          ref={containerRef}
          className={`w-full flex flex-row gap-6 p-8 transform transition-transform duration-300`}
          onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onMouseMove={handleMove}
          onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleMove}
        >
          {children}
        </div>
      </div>

      <div className="flex flex-row justify-between items-center p-2 text-dark-green-600 dark:text-dark-green-300">
        <button className={`${slide === 0 ? 'text-transparent cursor-default' : ''} transition duration-300 disabled:opacity-30`} onClick={() => handleSlide(slide - 1)}>
          <CaretLeft size={24} weight='bold' />
        </button>

        <div className="flex flex-row gap-2">
          {Array.from({ length: length + 1 }).map((_, index) =>
            <div key={index} className={`w-2 h-2 rounded-full ${slide === index ? 'bg-dark-green-600' : 'bg-dark-green-600 dark:bg-dark-green-300 opacity-30 dark:opacity-50'} transition duration-300 cursor-pointer`} onClick={() => scrollToSlide(index)} />
          )}
        </div>

        <button className={`${slide === length ? 'text-transparent cursor-default' : ''} transition duration-300`} onClick={() => handleSlide(slide + 1)}>
          <CaretRight size={24} weight='bold' />
        </button>
      </div>
    </div>
  )
}