import React from 'react'

import { api } from '@web/app/utils/trpc/server'

import Card from '@web/app/ui/main/Card'
import CardsContainer from '@web/app/ui/main/CardsContainer'

export const Series = async () => {
  const series = await api.serieRouter.getAll.query({ watched: true })
  return (
    <CardsContainer>
      {series.map((s) => {
        return <Card key={s.id} imgSrc={buildImgSrc(s.posterPath)} {...s} />
      })}
    </CardsContainer>
  )
}

const buildImgSrc = (posterPath: string): string | null =>
  posterPath ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${posterPath}` : null
