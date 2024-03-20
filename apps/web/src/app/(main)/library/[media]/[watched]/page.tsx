import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import { api } from '@web/lib/utils/trpc/server'
import { MediaDisplay } from './MediaDisplay'
import { CardsSkeleton } from '@web/ui/skeletons'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Library',
}

enum Media {
  SERIES = 'series',
  MOVIES = 'movies',
}

enum Watched {
  watched = 'watched',
  watchlist = 'watchlist',
}

interface Props {
  searchParams: { query: string; page: string }
  params: { media: Media; watched: Watched }
}

export default async function Page({
  params: { media, watched },
  searchParams: { page = '1' },
}: Props) {
  if (!['movies', 'series'].includes(media)) notFound()

  const fetchers = {
    [Media.MOVIES]: () =>
      api.movieRouter.list.query({
        watched: watched === Watched.watched,
        limit: 27,
        page: Number(page),
      }),
    [Media.SERIES]: () =>
      api.serieRouter.list.query({
        watched: watched === Watched.watched,
        limit: 27,
        page: Number(page),
      }),
  }

  return (
    <div className="w-full p-4">
      <Suspense fallback={<CardsSkeleton />}>
        <MediaDisplay fetcher={fetchers[media]} />
      </Suspense>
    </div>
  )
}
