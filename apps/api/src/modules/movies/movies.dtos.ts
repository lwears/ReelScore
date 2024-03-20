import { PAGE_SIZE } from '@api/constants'
import { z } from 'zod'

export const createMovieSchema = z.object({
  tmdbId: z.number({
    required_error: 'TMDB ID is required',
  }),
  title: z.string({
    required_error: 'title is required',
  }),
  posterPath: z.string().nullable(),
  releaseDate: z.coerce.date().nullable(),
  watched: z.boolean().default(false),
  tmdbScore: z.number().nonnegative().max(10),
})

export type CreateMovieSchema = z.TypeOf<typeof createMovieSchema>
