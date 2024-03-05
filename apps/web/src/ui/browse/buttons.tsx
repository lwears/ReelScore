import { createMovie, createSerie } from '@web/lib/requests/browse'
import { Button } from '../components/Button'

import type { RouterInputs } from '@api/server/router'
import type { HeroIcon } from '@web/types'

export function AddMovie({
  movie,
  watched,
  text,
  Icon,
}: {
  movie: RouterInputs['movieRouter']['create']
  watched: boolean
  text: string
  Icon: HeroIcon
}) {
  const addToWatchlist = createMovie.bind(null, movie, watched)
  return (
    <form className="w-full" action={addToWatchlist}>
      <Button startIcon={<Icon />} size="card" variant="card" type="submit">
        {text}
      </Button>
    </form>
  )
}

export function AddSerie({
  serie,
  watched,
  text,
  Icon,
}: {
  serie: RouterInputs['serieRouter']['create']
  watched: boolean
  text: string
  Icon: HeroIcon
}) {
  const addToWatchlist = createSerie.bind(null, serie, watched)
  return (
    <form className="w-full" action={addToWatchlist}>
      <Button startIcon={<Icon />} size="card" variant="card" type="submit">
        {text}
      </Button>
    </form>
  )
}
