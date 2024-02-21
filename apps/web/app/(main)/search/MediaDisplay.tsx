import Card from '@web/app/ui/main/Card'
import CardsContainer from '@web/app/ui/main/CardsContainer'
import EmptyState from '@web/app/ui/main/EmptyState'
import { mapTmdbToCard } from '@web/app/utils/helpers'

import { api } from '@web/app/utils/trpc/server'

interface Props {
  query: string
  page: number
}

export const MediaDisplay = async ({ page, query }: Props) => {
  const { data, error } = await api.tmdbRouter.searchMulti.query({
    page,
    query,
  })

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
