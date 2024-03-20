'use client'

import { toast } from 'sonner'
import { CheckIcon, PlusIcon } from '@heroicons/react/20/solid'

import { Button } from '../components/button'
import { api } from '@web/lib/utils/trpc/react'

import type { RouterInputs } from '@api/server/router'

export const AddMovie = ({
  movie,
  watched,
}: {
  movie: RouterInputs['movieRouter']['create']
  watched: boolean
}) => {
  const utils = api.useUtils()
  const addMovie = api.movieRouter.create.useMutation({
    onSuccess: async (m) => {
      toast.success('Movie Added', { description: m.title })
      void utils.movieRouter.invalidate()
    },
    onError: (error) => toast.error(error.message),
  })

  const text = watched ? 'Seen' : 'Watchlist'
  const Icon = watched ? CheckIcon : PlusIcon

  return (
    <form
      className="w-full"
      action={() => addMovie.mutate({ ...movie, watched })}
    >
      <Button size="card" variant="card" type="submit">
        {/* TODO Fix Icon */}
        <Icon />
        {text}
      </Button>
    </form>
  )
}

export const AddSerie = ({
  serie,
  watched,
}: {
  serie: RouterInputs['serieRouter']['create']
  watched: boolean
}) => {
  const utils = api.useUtils()
  const addSerie = api.serieRouter.create.useMutation({
    onSuccess: async (m) => {
      toast.success('Serie Added', { description: m.title })
      void utils.serieRouter.invalidate()
    },
    onError: (error) => toast.error(error.message),
  })

  const text = watched ? 'Seen' : 'Watchlist'
  const Icon = watched ? CheckIcon : PlusIcon
  return (
    <form
      className="w-full"
      action={() => addSerie.mutate({ ...serie, watched })}
    >
      <Button size="card" variant="card" type="submit">
        <Icon />
        {text}
      </Button>
    </form>
  )
}
