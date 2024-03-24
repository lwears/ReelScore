import Card from '@web/ui/components/card'
import CardsContainer from '@web/ui/components/cards-container'
import Empty from '@web/ui/components/empty'
import Pagination from '@web/ui/components/pagination'
import Error from '@web/ui/components/error'
import { mapTmdbMedia, mapTmdbToCard } from '@web/lib/utils/helpers'
import { api } from '@web/lib/utils/trpc/server'
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

  if (error) {
    return <Error message={error} />
  }

  if (!data || !data.results || data.results.length === 0) {
    return <Empty />
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-3">
      <Pagination totalPages={data.total_pages} />
      <CardsContainer>
        {data.results.map((m) => {
          const movie = mapTmdbToCard(m)
          const data = mapTmdbMedia(m)
          return (
            <Card key={m.id} {...movie}>
              <div className="flex w-full">
                <AddMovie movie={data} watched={true} />
                <AddMovie movie={data} watched={false} />
              </div>
            </Card>
          )
        })}
      </CardsContainer>
    </div>
  )
}
