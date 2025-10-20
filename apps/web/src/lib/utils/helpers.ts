import {
  ErrorCode,
  type Media as MediaType,
  type Movie,
  type Serie,
  type TmdbMedia,
  type TmdbMovie,
  type TmdbSerie,
} from '@web/types'
import { env } from 'apps/web/env'

export const isTmdbMovie = (media: TmdbMedia): media is TmdbMovie => {
  return 'release_date' in media
}

export const isTmdbSeries = (media: TmdbMedia): media is TmdbSerie => {
  return 'first_air_date' in media
}

export const isMovie = (media: MediaType): media is Movie => {
  return 'releaseDate' in media
}

export const isSerie = (media: MediaType): media is Serie => {
  return 'firstAired' in media
}

export const buildImgSrc = (posterPath: string | null) =>
  posterPath ? `${env.NEXT_PUBLIC_TMDB_IMAGE_URL}${posterPath}` : ''

export const mapTmdbToCard = <T extends TmdbMedia>(m: T) => {
  const isMovie = isTmdbMovie(m)
  return {
    posterPath: m.poster_path,
    title: isMovie ? (m as TmdbMovie).title : (m as TmdbSerie).name,
    tmdbScore: Math.round(m.vote_average * 10) / 10,
    date: isMovie ? new Date(m.release_date) : new Date(m.first_air_date),
  }
}

export const mapTmdbMedia = <T extends TmdbMedia>(m: T) => {
  const isMovie = isTmdbMovie(m)
  return {
    posterPath: m.poster_path,
    tmdbId: m.id,
    title: isMovie ? (m as TmdbMovie).title : (m as TmdbSerie).name,
    tmdbScore: Math.round(m.vote_average * 10) / 10,
    releaseDate: isMovie ? new Date(m.release_date) : null,
    firstAired: isMovie ? null : new Date(m.first_air_date),
  }
}

// Map detailed TMDB data (from getMovieById/getSerieById) to our format
export const mapTmdbDetailedData = (m: {
  id?: number
  poster_path?: string | null
  backdrop_path?: string | null
  vote_average?: number
  title?: string
  name?: string
  release_date?: string
  first_air_date?: string
}) => {
  const isMovie = 'title' in m && m.title !== undefined
  return {
    posterPath: m.poster_path ?? null,
    tmdbId: m.id ?? 0,
    title: isMovie ? (m.title ?? 'Unknown') : (m.name ?? 'Unknown'),
    tmdbScore: m.vote_average ? Math.round(m.vote_average * 10) / 10 : 0,
    releaseDate: isMovie && m.release_date ? new Date(m.release_date) : null,
    firstAired:
      !isMovie && m.first_air_date ? new Date(m.first_air_date) : null,
  }
}

export const isKnownErrorCode = (
  value: string
): value is keyof typeof ErrorCode => {
  return value in ErrorCode
}

export const getReadableError = (code: ErrorCode, media: 'Movie' | 'Serie') => {
  const errorMap = {
    [ErrorCode.CONFLICT]: `You've already added this ${media}`,
    [ErrorCode.PAYLOAD_TOO_LARGE]: `${media} already exists`,
    [ErrorCode.NOT_FOUND]: `${media} not found`,
    [ErrorCode.BAD_REQUEST]: `Input validation error`,
    [ErrorCode.TIMEOUT]: 'timeout',
    [ErrorCode.TOO_MANY_REQUESTS]: 'Too many requests',
  }
  return errorMap[code]
}
