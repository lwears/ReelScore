export const uppercaseFirst = (word: string) =>
  word[0].toUpperCase() + word.substring(1)

export const buildImgSrc = (posterPath: string) =>
  posterPath ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${posterPath}` : ''
