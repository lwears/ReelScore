'use server'

import type { RouterInputs } from '@reelscore/api'
import { api } from '@web/lib/utils/trpc/server'

export const createMovie = async (
  m: RouterInputs['movie']['create'],
  b: boolean
) => {
  'use server'

  await api.movie.create.mutate({ ...m, watched: b })
}

export const createSerie = async (
  m: RouterInputs['series']['create'],
  b: boolean
) => {
  'use server'

  await api.series.create.mutate({ ...m, watched: b })
}
