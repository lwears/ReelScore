import { isTmdbMovie, mapTmdbToLocal } from '@web/lib/utils/helpers'
import type { TmdbMediaSearchResult } from '@web/types'
import Card from '@web/ui/components/Card'
import EmptyState from '@web/ui/components/EmptyState'
import CardsContainer from '@web/ui/search/CardsContainer'

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const MediaDisplay = async ({
  fetcher,
}: {
  fetcher: () => Promise<TmdbMediaSearchResult>
}) => {
  // TODO fix if error
  const { data, error } = await sleep(3000).then(fetcher)

  if (!data || !data.results || data.results.length === 0) {
    return <EmptyState />
  }

  // TODO Fix
  return (
    <CardsContainer>
      {data.results.slice(0, 6).map((m) => {
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
