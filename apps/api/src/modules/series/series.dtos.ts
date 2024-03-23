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
  tmdbScore: z.number().nonnegative().max(10),
})

// Duplicate with movie or centralise?
export const updateSerieSchema = z.object({
  watched: z.boolean().optional(),
  score: z.number().nonnegative().max(10).optional(),
  id: z.string().uuid(),
})

export type CreateSerieSchema = z.TypeOf<typeof createSerieSchema>
export type UpdateSerieSchema = z.TypeOf<typeof updateSerieSchema>
