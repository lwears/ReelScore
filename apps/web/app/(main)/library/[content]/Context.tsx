import Card from '@web/app/ui/main/Card'
import CardsContainer from '@web/app/ui/main/CardsContainer'
import { EmptyState } from '@web/app/ui/main/EmptyState'
import { buildImgSrc } from '@web/app/utils/helpers'

export const Content = async ({ api }) => {
  const items = await api.getAll.query({ watched: true })

  if (!items) {
    return <EmptyState />
  }

  return (
    <CardsContainer>
      {items.map((i) => {
        return <Card key={i.id} imgSrc={buildImgSrc(i.posterPath)} {...i} />
      })}
    </CardsContainer>
  )
}
