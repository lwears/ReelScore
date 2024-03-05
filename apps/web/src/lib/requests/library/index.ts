'use server'

import { api } from '@web/lib/utils/trpc/server'

export const deleteMovie = async (id: string) => {
  'use server'

  await api.movieRouter.delete.mutate({ id })
}

export const deleteSerie = async (id: string) => {
  'use server'

  await api.serieRouter.delete.mutate({ id })
}
