import { api } from '@web/app/utils/trpc/server'
import type { Metadata } from 'next'
import { MediaDisplay } from './MediaDisplay'
import { notFound } from 'next/navigation'

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

  const data = await fetchers[media]()

  return (
    <div className="w-full p-4">
      <MediaDisplay media={data} />
    </div>
  )
}
