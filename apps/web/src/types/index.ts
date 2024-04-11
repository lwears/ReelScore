import type { RouterOutputs } from '@api/server/router'

export interface Paginated<A> {
  results: A[]
  page: number
  count: number
  totalPages: number
}

export type HeroIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined
    titleId?: string | undefined
  } & React.RefAttributes<SVGSVGElement>
>

export type Media = Movie | Serie

export type Movie = RouterOutputs['movieRouter']['list']['results'][number]

export type Serie = RouterOutputs['serieRouter']['list']['results'][number]

export type TmdbMedia = TmdbMovie | TmdbSerie

export type TmdbMovie = NonNullable<
  RouterOutputs['tmdbRouter']['searchMovie']['data']
>['results'][number]
export type TmdbSerie = NonNullable<
  RouterOutputs['tmdbRouter']['searchSerie']['data']
>['results'][number]

export type TmdbMediaSearchResult =
  | RouterOutputs['tmdbRouter']['searchMovie']
  | RouterOutputs['tmdbRouter']['searchSerie']

export enum ErrorCode {
  CONFLICT = 'CONFLICT',
  PAYLOAD_TOO_LARGE = 'PAYLOAD_TOO_LARGE',
  NOT_FOUND = 'NOT_FOUND',
  BAD_REQUEST = 'BAD_REQUEST',
  TIMEOUT = 'TIMEOUT',
  TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS',
}
