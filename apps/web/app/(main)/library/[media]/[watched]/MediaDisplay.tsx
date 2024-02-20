import { Card } from '@web/app/ui/main/Card'
import CardsContainer from '@web/app/ui/main/CardsContainer'
import { EmptyState } from '@web/app/ui/main/EmptyState'
import { mapMediaToCard } from '@web/app/utils/helpers'

import { type Media as MediaType } from '@web/app/types'

export const MediaDisplay = async ({ media }: { media: MediaType[] }) => {
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
