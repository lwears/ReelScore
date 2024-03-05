'use server'

import type { RouterInputs } from '@api/server/router'
import { api } from '@web/lib/utils/trpc/server'

export const createMovie = async (
  m: RouterInputs['movieRouter']['create'],
  b: boolean
) => {
  'use server'

  await api.movieRouter.create
    .mutate({ ...m, watched: b })
    .then(() => console.log('Success!'))
}

export const createSerie = async (
  m: RouterInputs['serieRouter']['create'],
  b: boolean
) => {
  'use server'

  await api.serieRouter.create.mutate({ ...m, watched: b })
}
