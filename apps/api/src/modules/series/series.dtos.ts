import { z } from 'zod'

export const createSerieSchema = z.object({
  tmdbId: z.number({
    required_error: 'TMDB ID is required',
  }),
  title: z.string({
    required_error: 'title is required',
  }),
  posterPath: z.string().nullable(),
  firstAired: z.coerce.date().nullable(),
  watched: z.boolean().default(false),
  tmdbScore: z.number().min(0).max(10),
})

export type CreateSerieSchema = z.TypeOf<typeof createSerieSchema>
