import { RouterOutputs } from '@api/server/router'

export type HeroIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined
    titleId?: string | undefined
  } & React.RefAttributes<SVGSVGElement>
>

export type Media = Movie | Serie

export type Movie = RouterOutputs['movieRouter']['getAll'][number]

export type Serie = RouterOutputs['serieRouter']['getAll'][number]

export type TmdbMedia = TmdbMovie | TmdbSerie

export type TmdbMovie = NonNullable<
  RouterOutputs['tmdbRouter']['searchMovie']['data']
>['results'][number]
export type TmdbSerie = NonNullable<
  RouterOutputs['tmdbRouter']['searchSerie']['data']
>['results'][number]
