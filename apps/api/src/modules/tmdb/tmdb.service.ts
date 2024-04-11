import createClient from 'openapi-fetch'

import type { paths } from './v3'

// TODO FIX
const { GET } = createClient<paths>({
  baseUrl: 'https://api.themoviedb.org',
  //baseUrl: process.env.TMDB_URL,
  headers: {
    get Authorization() {
      console.log('LIAM123', process.env.TMDB_KEY)
      console.log('LIAM123', process.env.TMDB_URL)
      return process.env.TMDB_KEY ? `Bearer ${process.env.TMDB_KEY}` : undefined
    },
  },
})

interface BaseSearchOpts {
  query: string
  language?: string
  page?: number
  includeAdult?: boolean
}

const searchMulti = async ({
  query,
  includeAdult = false,
  page = 1,
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

const getMovieById = async ({ id }: { id: number }) =>
  GET(`/3/movie/{movie_id}`, { params: { path: { movie_id: id } } })

const getSerieById = async ({ id }: { id: number }) =>
  GET(`/3/tv/{series_id}`, { params: { path: { series_id: id } } })

const searchMovie = async ({
  query,
  includeAdult = false,
  page = 1,
  language = 'en-US',
}: MovieSearchOpts) =>
  GET('/3/search/movie', {
    params: { query: { query, page, language, include_adult: includeAdult } },
  })

interface SerieSearchOpts extends BaseSearchOpts {
  firstAiredYear?: string
  year?: string
}

const searchSerie = async ({
  query,
  includeAdult = false,
  page = 1,
  language = 'en-US',
}: SerieSearchOpts) =>
  GET('/3/search/tv', {
    params: { query: { query, page, language, include_adult: includeAdult } },
  })

const getPopularMovies = async ({
  page = 1,
  language = 'en-US',
}: {
  page?: number
  language?: string
}) => GET('/3/discover/movie', { params: { query: { page, language } } })

const getPopularSeries = async ({
  page = 1,
  language = 'en-US',
}: {
  page?: number
  language?: string
}) => GET('/3/discover/tv', { params: { query: { page, language } } })

export const tmdbService = {
  getMovieById,
  getSerieById,
  searchMovie,
  searchMulti,
  searchSerie,
  getPopularMovies,
  getPopularSeries,
}
