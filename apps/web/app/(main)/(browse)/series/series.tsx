import Link from 'next/link'

import Card from '@web/app/ui/main/Card'
import EmptyState from '@web/app/ui/shared/EmptyState'
import { mapTmdbToCard } from '@web/app/utils/helpers'

import { api } from '@web/app/utils/trpc/server'
import CardsContainer from '@web/app/ui/shared/CardsContainer'
import clsx from 'clsx'

interface Props {
  query: string
  page: number
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const Series = async ({ query, page }: Props) => {
  const fetchData = async () => {
    const response = await (query
      ? api.tmdbRouter.searchSerie.query({ query, page })
      : api.tmdbRouter.popularSeries.query({ page }))
    return response
  }

  const { data, error } = await fetchData()

  if (!data || !data.results || data.results.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex space-x-6">
        <Link
          href={{
            pathname: '/series',
            query: {
              ...(query ? { query } : {}),
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
            pathname: '/series',
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
      <CardsContainer>
        {data.results.map((m) => {
          return <Card key={m.id} {...mapTmdbToCard(m)} />
        })}
      </CardsContainer>
    </div>
  )
}
