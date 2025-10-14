import { updateMediaSchema } from '@api/shared/dtos/media.dto'
import z from 'zod'

export const createSerieSchema = z.object({
  tmdbId: z.number({
    message: 'TMDB ID is required',
  }),
  title: z.string({
    message: 'title is required',
  }),
  posterPath: z.string().nullish(),
  firstAired: z.coerce.date().nullish(),
  watched: z.boolean().default(false),
  tmdbScore: z.number().min(0).max(10),
})

// Use shared update schema
export const updateSerieSchema = updateMediaSchema

export type CreateSerieSchema = z.infer<typeof createSerieSchema>
export type UpdateSerieSchema = z.infer<typeof updateSerieSchema>
