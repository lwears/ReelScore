import { api } from '@web/lib/utils/trpc/server'

import { CardsSkeleton } from '@web/ui/components/skeletons'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { MediaDisplay } from './_components/media-display'
import MediaHeader from './_components/media-header'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Search',
}

interface Props {
  searchParams: Promise<{ query: string }>
}

export default async function Page(props: Props) {
  const { query = '' } = await props.searchParams
  if (!query) return <p>No Search Query</p>

  const sections = [
    {
      header: 'movies',
      pathname: '/movies',
      fetcher: () => api.tmdb.searchMovie.query({ query }),
    },
    {
      header: 'series',
      pathname: '/series',
      fetcher: () => api.tmdb.searchSerie.query({ query }),
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
