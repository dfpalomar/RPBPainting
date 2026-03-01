import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'

type BeforeAfterSliderProps = {
  afterBackgroundClassName?: string
  afterImageAlt?: string
  afterImageSrc?: string
  afterLabel?: string
  beforeBackgroundClassName?: string
  beforeImageAlt?: string
  beforeImageSrc?: string
  beforeLabel?: string
  className?: string
  initialPosition?: number
}

const joinClasses = (...values: Array<string | undefined>) => values.filter(Boolean).join(' ')

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export function BeforeAfterSlider({
  afterBackgroundClassName = 'bg-canvas-warm',
  afterImageAlt = 'After image',
  afterImageSrc,
  afterLabel = 'After',
  beforeBackgroundClassName = 'bg-ink-300',
  beforeImageAlt = 'Before image',
  beforeImageSrc,
  beforeLabel = 'Before',
  className,
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const isDraggingRef = useRef(false)
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState(() => clamp(initialPosition, 0, 100))

  const transitionClassName = isDragging
    ? 'transition-none'
    : 'transition-[clip-path,left] duration-[150ms] ease-[cubic-bezier(0.16,1,0.3,1)]'

  const updatePosition = (clientX: number) => {
    const slider = sliderRef.current
    if (!slider) {
      return
    }

    const bounds = slider.getBoundingClientRect()
    if (bounds.width <= 0) {
      return
    }

    const nextValue = ((clientX - bounds.left) / bounds.width) * 100
    setPosition(clamp(nextValue, 0, 100))
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    isDraggingRef.current = true
    setIsDragging(true)
    updatePosition(event.clientX)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) {
      return
    }

    updatePosition(event.clientX)
  }

  const endDrag = () => {
    isDraggingRef.current = false
    setIsDragging(false)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' && event.key !== 'Home' && event.key !== 'End') {
      return
    }

    event.preventDefault()

    if (event.key === 'Home') {
      setPosition(0)
      return
    }

    if (event.key === 'End') {
      setPosition(100)
      return
    }

    setPosition((previous) => clamp(previous + (event.key === 'ArrowRight' ? 2 : -2), 0, 100))
  }

  return (
    <div
      aria-label="Before and after image comparison slider"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={Math.round(position)}
      className={joinClasses(
        'relative aspect-[16/10] w-full touch-none overflow-hidden rounded-2xl bg-surface shadow-md select-none',
        className,
      )}
      onKeyDown={handleKeyDown}
      onPointerCancel={endDrag}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      ref={sliderRef}
      role="slider"
      tabIndex={0}
    >
      <div className="absolute inset-0">
        {afterImageSrc ? (
          <img
            alt={afterImageAlt}
            className="h-full w-full object-cover"
            decoding="async"
            draggable={false}
            loading="lazy"
            src={afterImageSrc}
          />
        ) : (
          <div className={joinClasses('h-full w-full', afterBackgroundClassName)} />
        )}
      </div>

      <div
        className={joinClasses('absolute inset-0 overflow-hidden will-change-[clip-path]', transitionClassName)}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {beforeImageSrc ? (
          <img
            alt={beforeImageAlt}
            className="h-full w-full object-cover"
            decoding="async"
            draggable={false}
            loading="lazy"
            src={beforeImageSrc}
          />
        ) : (
          <div className={joinClasses('h-full w-full', beforeBackgroundClassName)} />
        )}
      </div>

      <div
        aria-hidden
        className={joinClasses(
          'pointer-events-none absolute inset-y-0 z-10 w-px -translate-x-1/2 bg-white/95 shadow-[0_0_0_1px_rgba(20,20,20,0.06)]',
          transitionClassName,
        )}
        style={{ left: `${position}%` }}
      />

      <div
        aria-hidden
        className={joinClasses(
          'pointer-events-none absolute top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink-200 bg-surface text-[11px] font-medium tracking-wide text-ink-600 shadow-md',
          transitionClassName,
        )}
        style={{ left: `${position}%` }}
      >
        ◂ ▸
      </div>

      <span className="pointer-events-none absolute top-4 left-4 z-20 inline-flex items-center rounded-full border border-ink-100 bg-surface/95 px-4 py-2 text-xs font-medium tracking-wide text-ink-700 uppercase">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute top-4 right-4 z-20 inline-flex items-center rounded-full border border-ink-100 bg-surface/95 px-4 py-2 text-xs font-medium tracking-wide text-ink-700 uppercase">
        {afterLabel}
      </span>
    </div>
  )
}
