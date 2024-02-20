import createClient from 'openapi-fetch'
import type { paths } from './v3'
import { serverConfig } from '@api/configs/env.config'

const { GET } = createClient<paths>({
  // TODO Move to ENV
  baseUrl: 'https://api.themoviedb.org',
  headers: {
    get Authorization() {
      return serverConfig.tmdbKey ? `Bearer ${serverConfig.tmdbKey}` : undefined
    },
  },
})

interface BaseSearchOpts {
  query: string
  language?: string
  page: number
  includeAdult?: boolean
}

export const searchMulti = async ({
  query,
  includeAdult = false,
  page,
  language = 'en-US',
}: BaseSearchOpts) =>
  GET('/3/search/multi', {
    params: {
      query: { query, page, include_adult: includeAdult, language },
    },
  })

interface MovieSearchOpts extends BaseSearchOpts {
  primaryReleaseYear?: string
  year?: string
  region?: string
}

export const searchMovie = async ({
  query,
  includeAdult = false,
  page,
  language = 'en-US',
}: MovieSearchOpts) =>
  GET('/3/search/movie', {
    params: { query: { query, page, language, include_adult: includeAdult } },
  })

interface SerieSearchOpts extends BaseSearchOpts {
  firstAiredYear?: string
  year?: string
}

export const searchSerie = async ({
  query,
  includeAdult = false,
  page,
  language = 'en-US',
}: SerieSearchOpts) =>
  GET('/3/search/tv', {
    params: { query: { query, page, language, include_adult: includeAdult } },
  })

// const data = searchMulti('oceans').then((data)=> data.data).then((data)=> data?.results?.map((t) => t.))

// data .map(({data}) => ({ }))

export const tmdbService = {
  searchMovie,
  searchMulti,
  searchSerie,
}
