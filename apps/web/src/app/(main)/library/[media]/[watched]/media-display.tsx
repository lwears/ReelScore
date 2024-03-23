import Card from '@web/ui/components/card'
import Empty from '@web/ui/components/empty'
import CardsContainer from '@web/ui/components/cards-container'
import { isMovie } from '@web/lib/utils/helpers'
import { DeleteMovie, DeleteSerie, UpdateMovie } from '@web/ui/library/buttons'
import Pagination from '@web/ui/components/pagination'

import type { Media as MediaType, Paginated } from '@web/types'

export const MediaDisplay = async ({
  fetcher,
  watched,
}: {
  fetcher: () => Promise<Paginated<MediaType>>
  watched: boolean
}) => {
  const media = await fetcher()

  if (!media) {
    return <Empty />
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
              <div className="flex w-full">
                {isMovie(m) && <DeleteMovie id={m.id} />}
                {!isMovie(m) && <DeleteSerie id={m.id} />}
                {!watched && <UpdateMovie id={m.id} />}
              </div>
            </Card>
          )
        })}
      </CardsContainer>
    </div>
  )
}
