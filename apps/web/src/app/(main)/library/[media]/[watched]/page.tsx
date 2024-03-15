import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import { api } from '@web/lib/utils/trpc/server'
import { MediaDisplay } from './MediaDisplay'
import { CardsSkeleton } from '@web/ui/skeletons'
// import { deleteMovie, deleteSerie } from '@web/lib/requests/library'

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

// const actions = {
//   [Media.MOVIES]: deleteMovie,
//   [Media.SERIES]: deleteSerie,
// }

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
