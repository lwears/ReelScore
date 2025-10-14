import clsx from 'clsx'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/24/outline'

import type { KeyboardEvent, ReactElement } from 'react'

export interface RatingProps {
  readOnly?: boolean
  rating: number
  setRating?: (rating: number) => void
}

export default function Rating({
  readOnly = false,
  rating,
  setRating,
}: RatingProps): ReactElement {
  const [hoveredRating, setHoveredRating] = useState(0)
  const handleClick = (idx: number) => {
    if (readOnly || !setRating) {
      return
    }
    setRating(idx)
  }

  const handleStarHover = (starIndex: number) => {
    setHoveredRating(starIndex + 1)
  }

  const handleMouseLeave = () => {
    setHoveredRating(0)
  }

  const handleKeyDown = (e: KeyboardEvent<SVGSVGElement>, idx: number) => {
    if (readOnly || !setRating) {
      return
    }
    if (e.code !== 'Space') {
      return
    }
    setRating(idx)
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className="flex items-center justify-center text-yellow-500"
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <StarIcon
          key={idx}
          onClick={() => handleClick(idx + 1)}
          onMouseOver={() => handleStarHover(idx)}
          className={clsx(
            'size-10',
            !readOnly && 'cursor-pointer',
            idx < (hoveredRating || rating) && 'fill-yellow-500'
          )}
          tabIndex={readOnly ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGSVGElement>) =>
            handleKeyDown(e, idx + 1)
          }
        />
      ))}
    </div>
  )
}
