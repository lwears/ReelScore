import Link from 'next/link'

import Card from '@web/app/ui/main/Card'
import CardsContainer from '@web/app/ui/main/search/CardsContainer'
import EmptyState from '@web/app/ui/shared/EmptyState'
import { mapTmdbToCard } from '@web/app/utils/helpers'

import { api } from '@web/app/utils/trpc/server'

interface Props {
  query: string
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const Movies = async ({ query }: Props) => {
  const { data, error } = await sleep(5000).then(() =>
    api.tmdbRouter.searchMovie.query({
      query,
      page: 1,
    })
  )

  if (!data || !data.results || data.results.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex w-full flex-row justify-between">
        <p className="text-primary-bg">Movies</p>
        <Link
          href={{
            pathname: '/movies',
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
