import Link from 'next/link'

import { CheckIcon, PlusIcon } from '@heroicons/react/20/solid'
import { mapTmdbToLocal } from '@web/lib/utils/helpers'
import { api } from '@web/lib/utils/trpc/server'
import { AddSerie } from '@web/ui/browse/buttons'
import clsx from 'clsx'
import CardsContainer from '@web/ui/components/CardsContainer'
import Card from '@web/ui/components/Card'
import EmptyState from '@web/ui/components/EmptyState'

interface Props {
  query: string
  page: number
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
        {data.results.map((s) => {
          const serie = mapTmdbToLocal(s)
          return (
            <Card key={s.id} {...serie} date={serie.firstAired}>
              <AddSerie
                serie={serie}
                watched={true}
                text="Watchlist"
                Icon={PlusIcon}
              />
              <AddSerie
                serie={serie}
                watched={false}
                text="Seen"
                Icon={CheckIcon}
              />
            </Card>
          )
        })}
      </CardsContainer>
    </div>
  )
}
