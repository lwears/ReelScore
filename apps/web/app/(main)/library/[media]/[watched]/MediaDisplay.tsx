import Card from '@web/app/ui/main/Card'
import { mapMediaToCard } from '@web/app/utils/helpers'

import { type Media as MediaType } from '@web/app/types'
import EmptyState from '@web/app/ui/shared/EmptyState'
import CardsContainer from '@web/app/ui/shared/CardsContainer'

export const MediaDisplay = async ({
  fetcher,
}: {
  fetcher: () => Promise<MediaType[]>
}) => {
  const media = await fetcher()

  if (!media) {
    return <EmptyState />
  }

  return (
    <CardsContainer>
      {media.map((m) => {
        return <Card key={m.id} {...mapMediaToCard(m)} />
      })}
    </CardsContainer>
  )
}
