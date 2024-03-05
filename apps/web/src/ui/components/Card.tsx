import { buildImgSrc } from '@web/lib/utils/helpers'
import clsx from 'clsx'
import { ImageWithFallback } from './ImageWithFallback'

export interface CardProps {
  posterPath: string | null
  title: string
  date: Date | null
  tmdbScore: number
  tmdbId: number
  children?: React.ReactNode
}

export default function Card(data: CardProps) {
  const { posterPath, date, title, tmdbScore, children } = data
  return (
    <div className="shadow-material-2 group relative aspect-[2/3] w-full overflow-hidden rounded-md text-sm font-extralight text-white hover:cursor-pointer ">
      <div className="absolute left-0 top-0 z-0 block size-full overflow-hidden rounded-md bg-gray-300 group-hover:blur-sm">
        {posterPath && (
          <ImageWithFallback
            src={buildImgSrc(posterPath)}
            alt={title || 'No Title'}
            width={300}
            height={320}
            className="size-full object-cover"
          />
        )}
      </div>
      <div className="flex h-full flex-col justify-between opacity-0 group-hover:opacity-100">
        <div
          className={clsx(
            'z-10 flex flex-1 flex-col justify-between p-2',
            posterPath
              ? 'bg-gradient-to-t from-black via-transparent to-black'
              : 'bg-black opacity-60'
          )}
        >
          <div className="flex justify-between">
            <p className="overflow-hidden text-ellipsis">
              {title}
              {date && ` (${date.getFullYear()})`}
            </p>
            {tmdbScore > 0 && <p>{tmdbScore}</p>}
          </div>
          <div className="flex w-full">{children && children}</div>
        </div>
      </div>
    </div>
  )
}
