import clsx from 'clsx'
import Link from 'next/link'
import { CheckIcon, PlusIcon } from '@heroicons/react/20/solid'

import Card from '@web/ui/components/Card'
import CardsContainer from '@web/ui/components/CardsContainer'
import EmptyState from '@web/ui/components/EmptyState'

import { api } from '@web/lib/utils/trpc/server'
import { mapTmdbToLocal } from '@web/lib/utils/helpers'
import { AddMovie } from '@web/ui/browse/buttons'

interface Props {
  query: string
  page: number
}

export const Movies = async ({ query, page }: Props) => {
  const fetchData = async () => {
    const response = await (query
      ? api.tmdbRouter.searchMovie.query({ query, page })
      : api.tmdbRouter.popularMovies.query({ page }))
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
            pathname: '/movies',
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
            pathname: '/movies',
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
          const movie = mapTmdbToLocal(m)
          return (
            <Card key={m.id} {...movie} date={movie.releaseDate}>
              <div className="flex w-full">
                <AddMovie
                  movie={movie}
                  watched={true}
                  text="Watchlist"
                  Icon={PlusIcon}
                />
                <AddMovie
                  movie={movie}
                  watched={false}
                  text="Seen"
                  Icon={CheckIcon}
                />
              </div>
            </Card>
          )
        })}
      </CardsContainer>
    </div>
  )
}
