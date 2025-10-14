import z from 'zod'

/**
 * Shared update schema for media entities (movies and series)
 * Both entities support the same update operations
 */
export const updateMediaSchema = z.object({
  watched: z.boolean().optional(),
  score: z.number().min(0).max(10).optional(),
  id: z.string().uuid(),
})

export type UpdateMediaSchema = z.infer<typeof updateMediaSchema>
