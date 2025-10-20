'use client'

import { XCircleIcon } from '@heroicons/react/20/solid'
import { StarIcon } from '@heroicons/react/24/outline'
import { useOutsideClick } from '@web/lib/utils'
import { buildImgSrc, isMovie } from '@web/lib/utils/helpers'
import { api } from '@web/lib/utils/trpc/react'
import { Button } from '@web/ui/components/button'
import Rating from '@web/ui/components/ratings'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import type { RefCallback } from 'react'
import { use, useState } from 'react'

export default function Page({
  params,
}: {
  params: Promise<{ id: string; media: string; watched: string }>
}) {
  const router = useRouter()
  const itemsRef = useOutsideClick<HTMLDivElement>(router.back)
  const { id, media, watched } = use(params)

  const refCallback: RefCallback<HTMLDivElement> = (el) => {
    if (el) itemsRef.current[0] = el
  }

  const isMovieType = media === 'movies'
  const isWatched = watched === 'watched'

  // Fetch data from the library
  const { data: movieData, isLoading: movieLoading } = api.movie.list.useQuery(
    { watched: isWatched },
    { enabled: isMovieType }
  )
  const { data: seriesData, isLoading: seriesLoading } =
    api.series.list.useQuery({ watched: isWatched }, { enabled: !isMovieType })

  const utils = api.useUtils()
  const updateMovie = api.movie.update.useMutation({
    onSuccess: () => {
      void utils.movie.list.invalidate()
      router.back()
    },
  })

  const updateSeries = api.series.update.useMutation({
    onSuccess: () => {
      void utils.series.list.invalidate()
      router.back()
    },
  })

  const isLoading = isMovieType ? movieLoading : seriesLoading
  const items = isMovieType ? movieData?.results : seriesData?.results
  const item = items?.find((i) => i.id === id)

  const [rating, setRating] = useState<number>(
    item?.score && typeof item.score === 'string'
      ? Number.parseFloat(item.score)
      : (item?.score as number) || 0
  )

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-20 flex size-full items-center justify-center overflow-y-auto backdrop-blur-sm bg-black/20 dark:bg-black/40">
        <div className="bg-card text-card-foreground rounded-md p-8 shadow-lg">
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  if (!item) {
    return (
      <div className="fixed inset-0 z-20 flex size-full items-center justify-center overflow-y-auto backdrop-blur-sm bg-black/20 dark:bg-black/40">
        <div className="bg-card text-card-foreground rounded-md p-8 shadow-lg">
          <p className="text-destructive text-lg">Item not found</p>
          <Button variant="primary" size="md" asChild className="mt-4">
            <Link href={`/library/${media}/${watched}`}>Close</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleSave = () => {
    if (isMovieType) {
      updateMovie.mutate({ id: item.id, score: rating })
    } else {
      updateSeries.mutate({ id: item.id, score: rating })
    }
  }

  const title = item.title
  const posterPath = item.posterPath
  const tmdbScore =
    typeof item.tmdbScore === 'string'
      ? Number.parseFloat(item.tmdbScore)
      : item.tmdbScore
  const date = isMovie(item) ? item.releaseDate : item.firstAired

  return (
    <div className="fixed inset-0 z-20 flex size-full items-center justify-center overflow-y-auto backdrop-blur-sm bg-black/20 dark:bg-black/40">
      <div className="bg-card rounded-md shadow-lg" ref={refCallback}>
        <div className="flex w-[700px] flex-col overflow-hidden">
          <div className="group relative">
            <div className="flex overflow-hidden rounded-t-md h-[400px]">
              <Image
                src={buildImgSrc(posterPath ?? null)}
                width={716}
                height={400}
                alt={`${title} poster image`}
                className="w-full h-full object-cover group-hover:blur-sm"
              />
            </div>
            <div className="absolute left-0 top-0 flex size-full flex-col p-2 opacity-0 transition-opacity group-hover:opacity-100">
              <Button
                variant="ghost"
                size="icon"
                className="self-end"
                asChild
                IconBefore={<XCircleIcon />}
              >
                <Link href={`/library/${media}/${watched}`} />
              </Button>
              <div className="flex size-full items-center justify-center">
                <Rating rating={rating} setRating={setRating} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-5">
            <div className="flex justify-between">
              <h3 className="text-card-foreground text-2xl font-bold">
                {title}
                {date && ` (${new Date(date).getFullYear()})`}
              </h3>
              <div className="text-muted-foreground flex gap-2">
                <p>TMDB Score:</p>
                <p className="font-bold">
                  {tmdbScore && Math.round(tmdbScore * 10) / 10}
                </p>
                <StarIcon className="size-5 fill-accent text-accent" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-muted-foreground">
                <p className="text-sm">
                  Your Score:{' '}
                  <span className="font-bold text-lg">
                    {rating > 0 ? rating : 'Not rated'}
                  </span>
                </p>
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={handleSave}
                disabled={updateMovie.isPending || updateSeries.isPending}
              >
                {updateMovie.isPending || updateSeries.isPending
                  ? 'Saving...'
                  : 'Save Rating'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
