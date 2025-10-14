import type { RouterOutputs } from '@reelscore/api'

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

export type Movie = RouterOutputs['movie']['list']['results'][number]

export type Serie = RouterOutputs['series']['list']['results'][number]

export type TmdbMedia = TmdbMovie | TmdbSerie

export type TmdbMovie = NonNullable<
  RouterOutputs['tmdb']['searchMovie']['data']
>['results'][number]
export type TmdbSerie = NonNullable<
  RouterOutputs['tmdb']['searchSerie']['data']
>['results'][number]

export type TmdbMediaSearchResult =
  | RouterOutputs['tmdb']['searchMovie']
  | RouterOutputs['tmdb']['searchSerie']

export const ErrorCode = {
  CONFLICT: 'CONFLICT',
  PAYLOAD_TOO_LARGE: 'PAYLOAD_TOO_LARGE',
  NOT_FOUND: 'NOT_FOUND',
  BAD_REQUEST: 'BAD_REQUEST',
  TIMEOUT: 'TIMEOUT',
  TOO_MANY_REQUESTS: 'TOO_MANY_REQUESTS',
} as const

export type ErrorCode = typeof ErrorCode[keyof typeof ErrorCode]
