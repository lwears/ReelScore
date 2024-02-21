import { api } from '@web/app/utils/trpc/server'
import type { Metadata } from 'next'
import { MediaDisplay } from './MediaDisplay'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { CardsSkeleton } from '@web/app/ui/skeletons'

export const metadata: Metadata = {
  title: 'Dashboard',
}

enum Media {
  SERIES = 'series',
  MOVIES = 'movies',
}

enum Watched {
  watched = 'watched',
  watchlist = 'watchlist',
}

export default async function Page({
  params: { media, watched },
}: {
  params: { media: Media; watched: Watched }
}) {
  if (!['movies', 'series'].includes(media)) notFound()

  const fetchers = {
    [Media.MOVIES]: () =>
      api.movieRouter.getAll.query({ watched: watched === Watched.watched }),
    [Media.SERIES]: () =>
      api.serieRouter.getAll.query({ watched: watched === Watched.watched }),
  }

  return (
    <div className="w-full p-4">
      <Suspense fallback={<CardsSkeleton />}>
        <MediaDisplay fetcher={fetchers[media]} />
      </Suspense>
    </div>
  )
}
