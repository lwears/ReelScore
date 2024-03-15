import Card from '@web/ui/components/Card'
import EmptyState from '@web/ui/components/EmptyState'
import CardsContainer from '@web/ui/components/CardsContainer'
import { isMovie } from '@web/lib/utils/helpers'
import { DeleteMovie, DeleteSerie } from '@web/ui/library/buttons'

import type { Media as MediaType } from '@web/types'

export const MediaDisplay = async ({
  fetcher,
}: {
  fetcher: () => Promise<MediaType[]>
}) => {
  const media = await fetcher()

  if (!media) {
    return <EmptyState />
  }

  //Artur, TODO: Better name for type predictate
  return (
    <CardsContainer>
      {media.map((m) => {
        return (
          <Card
            key={m.id}
            {...m}
            date={isMovie(m) ? m.releaseDate : m.firstAired}
          >
            {isMovie(m) && <DeleteMovie id={m.id} />}
            {!isMovie(m) && <DeleteSerie id={m.id} />}
          </Card>
        )
      })}
    </CardsContainer>
  )
}
