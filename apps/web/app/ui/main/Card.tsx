import React from 'react'

import { ImageWithFallback } from '../shared/ImageWithFallback'
import Link from 'next/link'
import { PlusIcon, CheckIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

export interface CardProps {
  imgSrc: string
  title: string
  year: number | null
  score: number | null
}

export default function Card({ imgSrc, year, title, score }: CardProps) {
  return (
    <div className="group/card shadow-material-2 relative aspect-[2/3] w-full overflow-hidden rounded-md text-sm font-extralight text-white hover:cursor-pointer">
      <div className="absolute left-0 top-0 z-0 block size-full overflow-hidden rounded-md bg-gray-300 group-hover/card:blur-sm">
        {imgSrc.length > 0 && (
          <ImageWithFallback
            src={imgSrc}
            alt={title || 'No Title'}
            width={300}
            height={320}
            className="size-full object-cover"
            //fill
            //sizes="(min-width: 768px) 248px, (min-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="flex h-full flex-col justify-between opacity-0 group-hover/card:opacity-100">
        <div
          className={clsx(
            'z-10 flex flex-1 flex-col justify-between p-2',
            imgSrc
              ? 'bg-gradient-to-t from-black via-transparent to-black'
              : 'bg-black opacity-60'
          )}
        >
          <div className="flex justify-between">
            <p className="overflow-hidden text-ellipsis">
              {title}
              {year && ` (${year})`}
            </p>
            {/* TODO Should score be null in the DB or defaulted to 0 */}
            {Boolean(score) && <p>{score}</p>}
          </div>
          <div>
            <button className="cursor-pointer rounded-md p-[3px] hover:bg-white/20">
              <PlusIcon className="size-7" />
            </button>
            <button className="cursor-pointer rounded-md p-[3px] hover:bg-white/20">
              <CheckIcon className="size-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
