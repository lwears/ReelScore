import React from 'react'

import { api } from '@web/app/utils/trpc/server'

import Card from '@web/app/ui/main/Card'
import CardsContainer from '@web/app/ui/main/CardsContainer'

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

const buildImgSrc = (posterPath: string) =>
  posterPath ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${posterPath}` : ''

const EmptyState = () => {
  return (
    <div>
      <p>No content found!</p>
    </div>
  )
}
