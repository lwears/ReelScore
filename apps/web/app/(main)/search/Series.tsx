import Link from 'next/link'

import Card from '@web/app/ui/main/Card'
import EmptyState from '@web/app/ui/shared/EmptyState'
import { mapTmdbToCard } from '@web/app/utils/helpers'

import { api } from '@web/app/utils/trpc/server'
import CardsContainer from '@web/app/ui/main/search/CardsContainer'

interface Props {
  query: string
}

export const Series = async ({ query }: Props) => {
  const { data, error } = await api.tmdbRouter.searchSerie.query({
    query,
    page: 1,
  })

  if (!data || !data.results || data.results.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex w-full flex-row justify-between">
        <p className="text-primary-bg">Series</p>
        <Link
          href={{
            pathname: '/series',
            query: {
              ...(query ? { query } : {}),
            },
          }}
          className="rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800"
        >
          More
        </Link>
      </div>
      <CardsContainer>
        {data.results.slice(0, 5).map((m) => {
          return <Card key={m.id} {...mapTmdbToCard(m)} />
        })}
      </CardsContainer>
    </div>
  )
}
