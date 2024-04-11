import Card from '@web/ui/components/card'
import Empty from '@web/ui/components/empty'
import CardsContainer from '@web/ui/components/cards-container'
import Pagination from '@web/ui/components/pagination'
import { isMovie } from '@web/lib/utils/helpers'
import {
  DeleteMovie,
  DeleteSerie,
  UpdateMovie,
  UpdateSerie,
} from '@web/ui/library/buttons'

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

  return (
    <div className="flex w-full flex-col items-center justify-center gap-3">
      <Pagination totalPages={media.totalPages} />
      <CardsContainer>
        {media.results.map((m) => {
          const DeleteComponent = isMovie(m) ? DeleteMovie : DeleteSerie
          const UpdateComponent = isMovie(m) ? UpdateMovie : UpdateSerie
          return (
            <Card
              key={m.id}
              {...m}
              date={isMovie(m) ? m.releaseDate : m.firstAired}
            >
              <DeleteComponent id={m.id} />
              {!watched && <UpdateComponent id={m.id} />}
            </Card>
          )
        })}
      </CardsContainer>
    </div>
  )
}
