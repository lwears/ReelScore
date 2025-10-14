import { isTmdbMovie, mapTmdbToCard } from '@web/lib/utils/helpers'
import type { TmdbMediaSearchResult } from '@web/types'
import Card from '@web/ui/components/card'
import Empty from '@web/ui/components/empty'
import ErrorDisplay from '@web/ui/components/error'
import CardsContainer from '@web/ui/search/cards-container'

export const MediaDisplay = async ({
  fetcher,
}: {
  fetcher: () => Promise<TmdbMediaSearchResult>
}) => {
  // TODO fix error undefined
  const { data, error } = await fetcher()

  if (error) {
    return <ErrorDisplay message={error} />
  }

  if (!data || !data.results || data.results.length === 0) {
    return <Empty />
  }

  // Artur: Trying to make card reusable, passing date like the below. better options?
  return (
    <CardsContainer>
      {data.results.slice(0, 6).map((m) => {
        return (
          <Card
            key={m.id}
            {...mapTmdbToCard(m)}
            date={
              isTmdbMovie(m)
                ? new Date(m.release_date)
                : new Date(m.first_air_date)
            }
          />
        )
      })}
    </CardsContainer>
  )
}
