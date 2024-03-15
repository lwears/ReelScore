'use client'

import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { CheckIcon, PlusIcon } from '@heroicons/react/20/solid'

import { Button } from '../components/Button'
import { api } from '@web/lib/utils/trpc/react'

import type { RouterInputs } from '@api/server/router'

// export function AddMovie({
//   movie,
//   watched,
//   text,
//   Icon,
// }: {
//   movie: RouterInputs['movieRouter']['create']
//   watched: boolean
//   text: string
//   Icon: HeroIcon
// }) {
//   const addToWatchlist = createMovie.bind(null, movie, watched)
//   return (
//     <form className="w-full" action={addToWatchlist}>
//       <Button startIcon={<Icon />} size="card" variant="card" type="submit">
//         {text}
//       </Button>
//     </form>
//   )
// }

export const AddMovie = ({
  movie,
  watched,
}: {
  movie: RouterInputs['movieRouter']['create']
  watched: boolean
}) => {
  const router = useRouter()
  const utils = api.useUtils()
  const addMovie = api.movieRouter.create.useMutation({
    onSuccess: async (m) => {
      toast.success('Movie Added', { description: m.title })
      utils.movieRouter.invalidate()
      router.refresh()
    },
    onError: (error) => toast.error(error.message),
  })

  const text = watched ? 'Seen' : 'Watchlist'
  const Icon = watched ? CheckIcon : PlusIcon

  return (
    <form
      className="w-full"
      action={() => addMovie.mutateAsync({ ...movie, watched })}
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
  const router = useRouter()
  const utils = api.useUtils()
  const addSerie = api.serieRouter.create.useMutation({
    onSuccess: async (m) => {
      toast.success('Serie Added', { description: m.title })
      utils.movieRouter.invalidate()
      router.refresh()
    },
    onError: (error) => toast.error(error.message),
  })

  const text = watched ? 'Seen' : 'Watchlist'
  const Icon = watched ? CheckIcon : PlusIcon
  return (
    <form
      className="w-full"
      action={() => addSerie.mutateAsync({ ...serie, watched })}
    >
      <Button size="card" variant="card" type="submit">
        <Icon />
        {text}
      </Button>
    </form>
  )
}

// export function AddSerie({
//   serie,
//   watched,
//   text,
//   Icon,
// }: {
//   serie: RouterInputs['serieRouter']['create']
//   watched: boolean
//   text: string
//   Icon: HeroIcon
// }) {
//   const addToWatchlist = createSerie.bind(null, serie, watched)
//   return (
//     <form className="w-full" action={addToWatchlist}>
//       <Button startIcon={<Icon />} size="card" variant="card" type="submit">
//         {text}
//       </Button>
//     </form>
//   )
// }
