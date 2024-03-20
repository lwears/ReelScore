import Card from '@web/ui/components/card'
import CardsContainer from '@web/ui/components/CardsContainer'
import EmptyState from '@web/ui/components/EmptyState'

import { mapTmdbToLocal } from '@web/lib/utils/helpers'
import { api } from '@web/lib/utils/trpc/server'
import { AddMovie } from '@web/ui/browse/buttons'
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

  return (
    <div className="flex w-full flex-col items-center justify-center gap-3">
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
