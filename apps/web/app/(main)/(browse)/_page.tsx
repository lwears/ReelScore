import Card from '@web/app/ui/main/Card'
import { api } from '@web/app/utils/trpc/server'
import type { Metadata } from 'next'
import Link from 'next/link'
import clsx from 'clsx'
import { mapTmdbToCard } from '@web/app/utils/helpers'
import { Suspense } from 'react'
import { CardsSkeleton } from '@web/app/ui/skeletons'
import EmptyState from '@web/app/ui/shared/EmptyState'
import CardsContainer from '@web/app/ui/shared/CardsContainer'
import { notFound } from 'next/navigation'
import { data } from 'tailwindcss/defaultTheme'
import { MediaDisplay } from './MediaDisplay'

export const metadata: Metadata = {
  title: 'Browse',
}

enum Media {
  SERIES = 'series',
  MOVIES = 'movies',
}

interface Props {
  searchParams: { query: string; page: string }
  params: { media: Media }
}

export default async function Page({
  searchParams: { query = '', page = '1' },
  params: { media },
}: Props) {
  if (!['movies', 'series'].includes(media)) notFound()

  const currentPage = Number(page)

  // const { data, error } = await api.tmdbRouter.searchMulti.query({
  //   page: currentPage,
  //   query,
  // })

  const fetchers = {
    [Media.MOVIES]: () =>
      api.tmdbRouter.searchMovie.query({ page: currentPage, query }),
    [Media.SERIES]: () =>
      api.tmdbRouter.searchSerie.query({ page: currentPage, query }),
  }

  // if (!data || !data.results || data.results.length === 0) {
  //   return <EmptyState />
  // }

  // TODO Style Pagination
  return (
    <div>
      <h1 className="text-primary-bg text-xl capitalize md:text-2xl">
        {media}
      </h1>
      {/* <div className="flex space-x-6">
        <Link
          href={{
            pathname: '/search',
            query: {
              ...(query ? { query } : {}),
              page: currentPage > 1 ? currentPage - 1 : 1,
            },
          }}
          className={clsx(
            'rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
            currentPage <= 1 && 'pointer-events-none opacity-50'
          )}
        >
          Previous
        </Link>
        <Link
          href={{
            pathname: '/search',
            query: {
              ...(query ? { query } : {}),
              page: currentPage + 1,
            },
          }}
          className="rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800"
        >
          Next
        </Link>
      </div> */}

      {/* <Suspense fallback={<CardsSkeleton />}>
        <MediaDisplay
          fetcher={
            query
              ? fetchers[media]
              : api.tmdbRouter.popularMovies.query({ page: currentPage })
          }
        />
      </Suspense> */}
    </div>
  )
}
