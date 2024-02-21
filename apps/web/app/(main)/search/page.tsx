import clsx from 'clsx'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'

import EmptyState from '@web/app/ui/main/EmptyState'
import { CardsSkeleton } from '@web/app/ui/skeletons'
import { api } from '@web/app/utils/trpc/server'
import { MediaDisplay } from './MediaDisplay'

export const metadata: Metadata = {
  title: 'Search',
}
interface Props {
  searchParams: { query: string; page: string }
}

export default async function Page({
  searchParams: { query = '', page = '1' },
}: Props) {
  if (!query) return <p>No Search Query</p>

  const currentPage = Number(page)

  const { data, error } = await api.tmdbRouter.searchMulti.query({
    page: currentPage,
    query,
  })

  if (!data || !data.results || data.results.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="p-4">
      <div className="flex space-x-6">
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
              page: page + 1,
            },
          }}
          className="rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800"
        >
          Next
        </Link>
      </div>
      <Suspense fallback={<CardsSkeleton />}>
        <MediaDisplay page={currentPage} query={query} />
      </Suspense>
    </div>
  )
}
