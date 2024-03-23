import { mapTmdbMedia, mapTmdbToCard } from '@web/lib/utils/helpers'
import { api } from '@web/lib/utils/trpc/server'
import { AddSerie } from '@web/ui/browse/buttons'
import Card from '@web/ui/components/card'
import CardsContainer from '@web/ui/components/cards-container'
import Empty from '@web/ui/components/empty'
import Pagination from '@web/ui/components/pagination'

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
    return <Empty />
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-3">
      <Pagination totalPages={data.total_pages} />
      <CardsContainer>
        {data.results.map((s) => {
          const serie = mapTmdbToCard(s)
          const data = mapTmdbMedia(s)
          return (
            <Card key={s.id} {...serie}>
              <AddSerie serie={data} watched={true} />
              <AddSerie serie={data} watched={false} />
            </Card>
          )
        })}
      </CardsContainer>
    </div>
  )
}
