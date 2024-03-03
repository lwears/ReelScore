import type {
  Media as MediaType,
  Movie,
  Serie,
  TmdbMedia,
  TmdbMovie,
  TmdbSerie,
} from '@web/types'

export const buildImgSrc = (posterPath: string | null) =>
  posterPath ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${posterPath}` : ''

export const mapMediaToCard = (m: MediaType) => {
  const date = isMovie(m) ? m.releaseDate : m.firstAired
  return {
    posterPath: m.posterPath,
    score: m.score,
    title: m.title,
    date: date,
    tmdbId: m.tmdbId,
    tmdbScore: m.tmdbScore,
  }
}

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

// TODO fix score being tmdbScore
export const mapTmdbToLocal = <T extends TmdbMedia>(m: T) => {
  const isMovie = isTmdbMovie(m)
  return {
    posterPath: m.poster_path,
    tmdbId: m.id,
    score: m.vote_average,
    title: isMovie ? (m as TmdbMovie).title : (m as TmdbSerie).name,
    tmdbScore: m.vote_average,
    releaseDate: isMovie ? new Date(m.release_date) : null,
    firstAired: isMovie ? null : new Date(m.first_air_date),
  }
}
