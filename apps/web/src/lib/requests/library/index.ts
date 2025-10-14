'use server'

import { api } from '@web/lib/utils/trpc/server'

export const deleteMovie = async (id: string) => {
  'use server'

  await api.movie.delete.mutate({ id })
}

export const deleteSerie = async (id: string) => {
  'use server'

  await api.series.delete.mutate({ id })
}
