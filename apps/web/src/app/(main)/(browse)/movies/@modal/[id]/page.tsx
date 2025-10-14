'use client'

import {
  CheckCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid'
import { StarIcon } from '@heroicons/react/24/outline'
import { useOutsideClick } from '@web/lib/utils'
import { buildImgSrc, mapTmdbMedia } from '@web/lib/utils/helpers'
import { api } from '@web/lib/utils/trpc/react'
import { AddMovie } from '@web/ui/browse/buttons'
import { Button } from '@web/ui/components/button'
import Rating from '@web/ui/components/ratings'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { RefCallback } from 'react'
import { useState } from 'react'

// import Empty from '@web/ui/components/empty'
// import Error from '@web/ui/components/error'

//import { api as serverApi } from '@web/lib/utils/trpc/server'

const mockData = {
  adult: false,
  backdrop_path: '/zAepSrO99owYwQqi0QG2AS0dHXw.jpg',
  belongs_to_collection: null,
  budget: 80000000,
  genres: [
    { id: 28, name: 'Action' },
    { id: 14, name: 'Fantasy' },
  ],
  homepage: 'https://www.madameweb.movie',
  id: 634492,
  imdb_id: 'tt11057302',
  original_language: 'en',
  original_title: 'Madame Web',
  overview:
    'Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.',
  popularity: 2036.886,
  poster_path: '/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg',
  production_companies: [
    {
      id: 5,
      logo_path: '/71BqEFAF4V3qjjMPCpLuyJFB9A.png',
      name: 'Columbia Pictures',
      origin_country: 'US',
    },
    {
      id: 435,
      logo_path: '/AjzK0s2w1GtLfR4hqCjVSYi0Sr8.png',
      name: 'di Bonaventura Pictures',
      origin_country: 'US',
    },
  ],
  production_countries: [
    { iso_3166_1: 'US', name: 'United States of America' },
  ],
  release_date: '2024-02-14',
  revenue: 96619699,
  runtime: 116,
  spoken_languages: [
    { english_name: 'English', iso_639_1: 'en', name: 'English' },
  ],
  status: 'Released',
  tagline: 'Her web connects them all.',
  title: 'Madame Web',
  video: false,
  vote_average: 5.636,
  vote_count: 805,
}

export default function Page({ params }: { params: { id: number } }) {
  const router = useRouter()
  const itemsRef = useOutsideClick<HTMLDivElement>(router.back)
  // biome-ignore lint/correctness/noUnusedVariables: id will be used for API call once implemented
  const { id } = params

  const refCallback: RefCallback<HTMLDivElement> = (el) => {
    if (el) itemsRef.current[0] = el
  }

  const [rating, setRating] = useState<number>(3)
  // Create movie in watched with rating on rating state change

  // const { data } = api.tmdbRouter.getMovieById.useQuery({ id })

  // if (data && data.error !== undefined) {
  //   return <Error message={data.} />
  // }

  // if (!data || !data.data) {
  //   return <Empty />
  // }

  //    const deleteMovie = api.tmdbRouter.getMovieById.useQuery({
  //      onSuccess: async (m) => {
  //        toast.success('Movie Removed', { description: m.title })
  //        utils.movieRouter.list.invalidate()
  //        router.refresh()
  //      },
  //      onError: (error) => toast.error(error.message),
  //  })

  const movie = mapTmdbMedia(mockData)

  return (
    // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
    <div className="fixed inset-0 z-20 flex size-full items-center justify-center overflow-y-auto bg-gray-500 bg-opacity-70">
      <div className="bg-card rounded-md shadow-lg" ref={refCallback}>
        <div className="flex w-[700px] flex-col overflow-hidden">
          <div className="group relative">
            <div className="flex overflow-hidden rounded-t-md ">
              <Image
                src={buildImgSrc(mockData.backdrop_path ?? null)}
                width={716}
                height={614}
                alt={`${mockData.title} backdrop image`}
                className="-m-2 max-w-none object-cover group-hover:blur-sm"
              />
            </div>
            <div className="absolute left-0 top-0 flex size-full flex-col p-2 opacity-0 group-hover:opacity-100">
              <Button
                variant="ghost"
                size="icon"
                className="self-end"
                asChild
                IconBefore={<XCircleIcon />}
              >
                <Link href="/movies" />
              </Button>
              <div className="flex size-full items-center justify-center">
                <Rating rating={rating} setRating={setRating} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-5">
            <div className="flex justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                {mockData.title}
              </h3>
              <div className="flex gap-2 text-gray-600">
                <p className="">TMDB Score:</p>
                <p className="font-bold">
                  {mockData.vote_average &&
                    Math.round(mockData.vote_average * 10) / 10}
                </p>
                <StarIcon className="size-5 fill-yellow-500 text-yellow-500" />
              </div>
            </div>
            <p className="text-gray-600">{mockData.overview}</p>
            <div className="flex justify-end gap-2">
              <AddMovie
                buttonProps={{
                  size: 'md',
                  variant: 'primary',
                  IconBefore: <CheckCircleIcon />,
                }}
                movie={movie}
                watched={true}
                text="Seen"
              />
              <AddMovie
                buttonProps={{
                  size: 'md',
                  variant: 'primary',
                  IconBefore: <PlusCircleIcon />,
                }}
                movie={movie}
                watched={false}
                text="Watchlist"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
