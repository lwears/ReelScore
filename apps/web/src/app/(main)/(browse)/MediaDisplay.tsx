import Card from '@web/ui/components/Card'

import type { TmdbMediaSearchResult } from '@web/types'
import EmptyState from '@web/ui/components/EmptyState'
import { isTmdbMovie, mapTmdbToLocal } from '@web/lib/utils/helpers'
import CardsContainer from '@web/ui/components/CardsContainer'

export const MediaDisplay = async ({
  fetcher,
}: {
  fetcher: () => Promise<TmdbMediaSearchResult>
}) => {
  const { data } = await fetcher()

  if (!data || !data.results || data.results.length === 0) {
    return <EmptyState />
  }

  return (
    <CardsContainer>
      {data.results.map((m) => {
        return (
          <Card
            key={m.id}
            {...mapTmdbToLocal(m)}
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
