import type { Metadata } from 'next'
import { Suspense } from 'react'

import { CardsSkeleton } from '@web/ui/skeletons'
import { api } from '@web/lib/utils/trpc/server'
import { MediaDisplay } from './MediaDisplay'
import MediaHeader from './MediaHeader'

export const metadata: Metadata = {
  title: 'Search',
}

interface Props {
  searchParams: { query: string }
}

export default async function Page({ searchParams: { query = '' } }: Props) {
  if (!query) return <p>No Search Query</p>

  const sections = [
    {
      header: 'movies',
      pathname: '/movies',
      fetcher: () => api.tmdbRouter.searchMovie.query({ query }),
    },
    {
      header: 'series',
      pathname: '/series',
      fetcher: () => api.tmdbRouter.searchSerie.query({ query }),
    },
  ]

  return (
    <div className="grid grid-cols-1 grid-rows-2 items-center gap-5 px-28 py-6">
      {sections.map((s) => (
        <div
          key={s.header}
          className="flex flex-col items-center justify-center gap-3"
        >
          <MediaHeader header={s.header} pathname={s.pathname} query={query} />
          <Suspense fallback={<CardsSkeleton length={6} />}>
            <MediaDisplay fetcher={s.fetcher} />
          </Suspense>
        </div>
      ))}
    </div>
  )
}
