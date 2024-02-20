import type {
  Movie,
  Serie,
  TmdbMovie,
  TmdbSerie,
  TmdbMedia,
} from '@web/app/types'
import { type Media as MediaType } from '@web/app/types'

export const uppercaseFirst = (word: string) =>
  word[0].toUpperCase() + word.slice(1)

export const buildImgSrc = (posterPath: string | null) =>
  posterPath ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${posterPath}` : ''

export const mapMediaToCard = (m: MediaType) => ({
  imgSrc: buildImgSrc(m.posterPath),
  score: m.score,
  title: m.title,
  year: (isMovie(m) ? m.releaseDate : m.firstAired).getFullYear(),
})

export const mapTmdbToCard = (m: TmdbMedia) => {
  const date = isTmdbMovie(m) ? m.release_date : m.first_air_date
  return {
    imgSrc: buildImgSrc(m.poster_path),
    score: m.vote_average,
    title: isTmdbMovie(m) ? m.title : m.name,
    year: date ? new Date(date).getFullYear() : null,
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
