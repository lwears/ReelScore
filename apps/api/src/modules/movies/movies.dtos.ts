import { updateMediaSchema } from '@api/shared/dtos/media.dto'
import z from 'zod'

export const createMovieSchema = z.object({
  tmdbId: z.number({
    message: 'TMDB ID is required',
  }),
  title: z.string({
    message: 'title is required',
  }),
  posterPath: z.string().nullish(),
  releaseDate: z.coerce.date().nullish(),
  watched: z.boolean().default(false),
  tmdbScore: z.number().min(0).max(10),
})

// Use shared update schema
export const updateMovieSchema = updateMediaSchema

export type CreateMovieSchema = z.infer<typeof createMovieSchema>
export type UpdateMovieSchema = z.infer<typeof updateMovieSchema>
