import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import { api } from '@web/lib/utils/trpc/server'
import { MediaDisplay } from './_components/media-display'
import { MediaDisplaySkeleton } from '@web/ui/components/skeletons'

import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Library',
}

const Media = {
  SERIES: 'series',
  MOVIES: 'movies',
} as const

type Media = (typeof Media)[keyof typeof Media]

const Watched = {
  WATCHED: 'watched',
  WATCHLIST: 'watchlist',
} as const

type Watched = (typeof Watched)[keyof typeof Watched]

interface Props {
  searchParams: Promise<{ query: string; page: string }>
  params: Promise<{ media: Media; watched: Watched }>
}

export default async function Page(props: Props) {
  const { media, watched } = await props.params
  const { query = '', page = '1' } = await props.searchParams

  if (!['movies', 'series'].includes(media)) notFound()
  if (!['watched', 'watchlist'].includes(watched)) notFound()

  const currentPage = Number(page)

  const fetchers = {
    [Media.MOVIES]: () =>
      api.movie.list.query({
        watched: watched === Watched.WATCHED,
        query,
        limit: 27,
        page: currentPage,
      }),
    [Media.SERIES]: () =>
      api.series.list.query({
        watched: watched === Watched.WATCHED,
        query,
        limit: 27,
        page: currentPage,
      }),
  }

  return (
    <div className="w-full p-4">
      <Suspense key={query + currentPage} fallback={<MediaDisplaySkeleton />}>
        <MediaDisplay
          fetcher={fetchers[media]}
          watched={watched === Watched.WATCHED}
        />
      </Suspense>
    </div>
  )
}
