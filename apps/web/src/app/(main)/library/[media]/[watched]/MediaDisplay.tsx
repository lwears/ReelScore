import Card from '@web/ui/components/Card'
import EmptyState from '@web/ui/components/EmptyState'
import CardsContainer from '@web/ui/components/CardsContainer'
import { isMovie } from '@web/lib/utils/helpers'
import { DeleteMedia } from '@web/ui/library/buttons'

import type { Media as MediaType } from '@web/types'

export const MediaDisplay = async ({
  fetcher,
  deleteAction,
}: {
  fetcher: () => Promise<MediaType[]>
  deleteAction: (id: string) => Promise<void>
}) => {
  const media = await fetcher()

  if (!media) {
    return <EmptyState />
  }

  return (
    <CardsContainer>
      {media.map((m) => (
        <Card
          key={m.id}
          {...m}
          date={isMovie(m) ? m.releaseDate : m.firstAired}
        >
          <DeleteMedia action={deleteAction} id={m.id} />
        </Card>
      ))}
    </CardsContainer>
  )
}
