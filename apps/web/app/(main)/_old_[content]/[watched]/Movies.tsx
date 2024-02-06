import React from 'react'

import { api } from '@web/app/utils/trpc/server'

import Card from '@web/app/ui/main/Card'
import CardsContainer from '@web/app/ui/main/CardsContainer'
import { buildImgSrc } from '@web/app/utils/helpers'
import { EmptyState } from '@web/app/ui/main/EmptyState'

export const Movies = async () => {
  const movies = await api.movieRouter.getAll.query({ watched: true })

  if (!movies) {
    return <EmptyState />
  }

  return (
    <CardsContainer>
      {movies.map((m) => {
        return <Card key={m.id} imgSrc={buildImgSrc(m.posterPath)} {...m} />
      })}
    </CardsContainer>
  )
}
