import clsx from 'clsx'
import Link from 'next/link'
import { CheckIcon, PlusIcon } from '@heroicons/react/20/solid'

import Card from '@web/ui/components/Card'
import CardsContainer from '@web/ui/components/CardsContainer'
import EmptyState from '@web/ui/components/EmptyState'

import { api } from '@web/lib/utils/trpc/server'
import { mapTmdbToLocal } from '@web/lib/utils/helpers'
import { AddMovie } from '@web/ui/browse/buttons'
import { Button } from '@web/ui/components/Button'
import Pagination from '@web/ui/pagination'

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

  //TODO Fix Error component
  const { data, error } = await fetchData()

  if (!data || !data.results || data.results.length === 0) {
    return <EmptyState />
  }

  //TODO Pagination should have numbers
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {/* <div className="flex space-x-6">
        <Button
          asChild
          variant="secondary"
          size="lg"
          className={clsx(page <= 1 && 'pointer-events-none opacity-50')}
        >
          <Link
            href={{
              pathname: '/movies',
              query: {
                ...(query ? { query } : {}),
                page: page > 1 ? page - 1 : 1,
              },
            }}
          >
            Previous
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link
            href={{
              pathname: '/movies',
              query: {
                ...(query ? { query } : {}),
                page: page + 1,
              },
            }}
          >
            Next
          </Link>
        </Button>
      </div> */}
      <Pagination totalPages={data.total_pages} />
      <CardsContainer>
        {data.results.map((m) => {
          const movie = mapTmdbToLocal(m)
          return (
            <Card key={m.id} {...movie} date={movie.releaseDate}>
              <div className="flex w-full">
                <AddMovie movie={movie} watched={true} />
                <AddMovie movie={movie} watched={false} />
              </div>
            </Card>
          )
        })}
      </CardsContainer>
    </div>
  )
}
