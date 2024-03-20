import { mapTmdbToLocal } from '@web/lib/utils/helpers'
import { api } from '@web/lib/utils/trpc/server'
import { AddSerie } from '@web/ui/browse/buttons'
import Card from '@web/ui/components/card'
import CardsContainer from '@web/ui/components/CardsContainer'
import EmptyState from '@web/ui/components/EmptyState'
import Pagination from '@web/ui/pagination'

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
      <Pagination totalPages={data.total_pages} />
      <CardsContainer>
        {data.results.map((s) => {
          const serie = mapTmdbToLocal(s)
          return (
            <Card key={s.id} {...serie} date={serie.firstAired}>
              <AddSerie serie={serie} watched={true} />
              <AddSerie serie={serie} watched={false} />
            </Card>
          )
        })}
      </CardsContainer>
    </div>
  )
}
