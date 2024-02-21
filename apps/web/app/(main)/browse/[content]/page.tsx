import { Card } from '@web/app/ui/main/Card'
import CardsContainer from '@web/app/ui/main/CardsContainer'
import { api } from '@web/app/utils/trpc/server'
import type { Metadata } from 'next'
import Link from 'next/link'
import clsx from 'clsx'
import { EmptyState } from '@web/app/ui/main/EmptyState'
import { mapTmdbToCard } from '@web/app/utils/helpers'
import { Suspense } from 'react'
import { CardsSkeleton } from '@web/app/ui/skeletons'

export const metadata: Metadata = {
  title: 'Browse',
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

  const search =
    typeof searchParams.query === 'string' ? searchParams.query : undefined

  if (!search) return <p>No Search Query</p>

  const { data, error } = await api.tmdbRouter.searchMulti.query({
    page: page,
    query: search,
  })

  if (!data || !data.results || data.results.length === 0) {
    return <EmptyState />
  }

  // TODO Style Pagination
  return (
    <div>
      <h1 className="text-xl md:text-2xl">Search</h1>
      <p>{JSON.stringify(searchParams)}</p>
      <div className="flex space-x-6">
        <Link
          href={{
            pathname: '/search',
            query: {
              ...(search ? { query: search } : {}),
              page: page > 1 ? page - 1 : 1,
            },
          }}
          className={clsx(
            'rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
            page <= 1 && 'pointer-events-none opacity-50'
          )}
        >
          Previous
        </Link>
        <Link
          href={{
            pathname: '/search',
            query: {
              ...(search ? { query: search } : {}),
              page: page + 1,
            },
          }}
          className="rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800"
        >
          Next
        </Link>
      </div>
      <Suspense fallback={<CardsSkeleton />}>
        <CardsContainer>
          {data.results.map((m) => {
            return <Card key={m.id} {...mapTmdbToCard(m)} />
          })}
        </CardsContainer>
      </Suspense>
    </div>
  )
}
