import React from 'react'

import { ImageWithFallback } from './ImageWithFallback'
import Link from 'next/link'

interface Props {
  imgSrc: string
  title: string
  releaseDate: Date
  score: number | null
}

export default function Card({ imgSrc, releaseDate, title, score }: Props) {
  return (
    <div className="group relative aspect-[2/3] w-full overflow-hidden rounded-md shadow-lg hover-group:blur-sm">
      {/* <div className="flex flex-col items-center whitespace-nowrap rounded-md justify-between text-slate-200 border-2 "> */}
      <div className="absolute top-0 left-0 z-0 block h-full w-full overflow-hidden rounded-md group-hover:blur-sm">
        <ImageWithFallback
          src={imgSrc}
          alt={title || 'No Title'}
          width={300}
          height={320}
          className="h-full w-full object-cover"
          //fill
          //sizes="(min-width: 768px) 248px, (min-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col h-full justify-between pointer-events-none opacity-0 group-hover:opacity-100">
        <div className="flex z-10 bg-gradient-to-b from-black p-2 flex-1">
          <p className="text-ellipsis overflow-hidden">{title}</p>

          <p className="">{score}</p>
        </div>
        <div className="flex flex-col justify-end opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black z-10 p-2 flex-1">
          <p className="">{releaseDate.toLocaleDateString('sv-se')}</p>
        </div>
      </div>
    </div>
  )
}
