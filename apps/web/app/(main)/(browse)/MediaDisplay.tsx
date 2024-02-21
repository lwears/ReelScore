import Card from '@web/app/ui/main/Card'
import { mapTmdbToCard } from '@web/app/utils/helpers'

import type { TmdbMediaSearchResult } from '@web/app/types'
import EmptyState from '@web/app/ui/shared/EmptyState'
import CardsContainer from '@web/app/ui/shared/CardsContainer'

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
        return <Card key={m.id} {...mapTmdbToCard(m)} />
      })}
    </CardsContainer>
  )
}
