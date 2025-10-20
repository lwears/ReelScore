'use client'

import {
  CheckCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid'
import { StarIcon } from '@heroicons/react/24/outline'
import { useOutsideClick } from '@web/lib/utils'
import { buildImgSrc, mapTmdbDetailedData } from '@web/lib/utils/helpers'
import { api } from '@web/lib/utils/trpc/react'
import { AddSerie } from '@web/ui/browse/buttons'
import { Button } from '@web/ui/components/button'
import Rating from '@web/ui/components/ratings'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { RefCallback } from 'react'
import { use, useState } from 'react'

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const itemsRef = useOutsideClick<HTMLDivElement>(router.back)
  const { id } = use(params)

  const refCallback: RefCallback<HTMLDivElement> = (el) => {
    if (el) itemsRef.current[0] = el
  }

  const [rating, setRating] = useState<number>(0)

  // Fetch series data from TMDB API
  const { data, isLoading, error } = api.tmdb.getSerieById.useQuery({ id })

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-20 flex size-full items-center justify-center overflow-y-auto backdrop-blur-sm bg-black/20 dark:bg-black/40">
        <div className="bg-card text-card-foreground rounded-md p-8 shadow-lg">
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  if (error || !data?.data) {
    return (
      <div className="fixed inset-0 z-20 flex size-full items-center justify-center overflow-y-auto backdrop-blur-sm bg-black/20 dark:bg-black/40">
        <div className="bg-card text-card-foreground rounded-md p-8 shadow-lg">
          <p className="text-destructive text-lg">
            {error?.message || 'Failed to load series'}
          </p>
          <Button variant="primary" size="md" asChild className="mt-4">
            <Link href="/series">Close</Link>
          </Button>
        </div>
      </div>
    )
  }

  const seriesData = data.data
  const series = mapTmdbDetailedData(seriesData)

  return (
    <div className="fixed inset-0 z-20 flex size-full items-center justify-center overflow-y-auto backdrop-blur-sm bg-black/20 dark:bg-black/40">
      <div className="bg-card rounded-md shadow-lg" ref={refCallback}>
        <div className="flex w-[700px] flex-col overflow-hidden">
          <div className="group relative">
            <div className="flex overflow-hidden rounded-t-md">
              <Image
                src={buildImgSrc(seriesData.backdrop_path ?? null)}
                width={716}
                height={614}
                alt={`${seriesData.name} backdrop image`}
                className="-m-2 max-w-none object-cover group-hover:blur-sm"
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
                <Link href="/series" />
              </Button>
              <div className="flex size-full items-center justify-center">
                <Rating rating={rating} setRating={setRating} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-5">
            <div className="flex justify-between">
              <h3 className="text-card-foreground text-2xl font-bold">
                {seriesData.name}
              </h3>
              <div className="text-muted-foreground flex gap-2">
                <p>TMDB Score:</p>
                <p className="font-bold">
                  {seriesData.vote_average &&
                    Math.round(seriesData.vote_average * 10) / 10}
                </p>
                <StarIcon className="size-5 fill-accent text-accent" />
              </div>
            </div>
            <p className="text-muted-foreground">{seriesData.overview}</p>
            <div className="flex justify-end gap-2">
              <AddSerie
                buttonProps={{
                  size: 'md',
                  variant: 'primary',
                  IconBefore: <CheckCircleIcon />,
                }}
                serie={{ ...series, score: rating > 0 ? rating : undefined }}
                watched={true}
                text="Seen"
                onSuccess={() => router.push('/series')}
              />
              <AddSerie
                buttonProps={{
                  size: 'md',
                  variant: 'secondary',
                  IconBefore: <PlusCircleIcon />,
                }}
                serie={series}
                watched={false}
                text="Watchlist"
                onSuccess={() => router.push('/series')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
