import Card from '@web/ui/components/card'
import EmptyState from '@web/ui/components/EmptyState'
import CardsContainer from '@web/ui/components/CardsContainer'
import { isMovie } from '@web/lib/utils/helpers'
import { DeleteMovie, DeleteSerie } from '@web/ui/library/buttons'
import Pagination from '@web/ui/pagination'

import type { Media as MediaType, Paginated } from '@web/types'

export const MediaDisplay = async ({
  fetcher,
}: {
  fetcher: () => Promise<Paginated<MediaType>>
}) => {
  const media = await fetcher()

  if (!media) {
    return <EmptyState />
  }

  //Artur, TODO: Better name for type predictate
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3">
      <Pagination totalPages={media.totalPages} />
      <CardsContainer>
        {media.results.map((m) => {
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
    </div>
  )
}
