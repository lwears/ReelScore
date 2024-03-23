import { mapTmdbToCard } from '@web/lib/utils/helpers'
import Card from '@web/ui/components/card'
import CardsContainer from '@web/ui/components/cards-container'
import Empty from '@web/ui/components/empty'

import type { TmdbMediaSearchResult } from '@web/types'

export const MediaDisplay = async ({
  fetcher,
}: {
  fetcher: () => Promise<TmdbMediaSearchResult>
}) => {
  const { data } = await fetcher()

  if (!data || !data.results || data.results.length === 0) {
    return <Empty />
  }

  return (
    <CardsContainer>
      {data.results.map((m) => (
        <Card key={m.id} {...mapTmdbToCard(m)} />
      ))}
    </CardsContainer>
  )
}
