import { createMediaService } from '@api/lib/factories/createMediaService'
import { series, type Serie } from '@api/drizzle/schema'
import type { CreateSerieSchema, UpdateSerieSchema } from './series.dtos'

// Re-export shared types for convenience
export type { Paginated, ListOptions } from '@api/lib/factories/createMediaService'

// Create the series service using the generic factory
export const serieService = createMediaService<
  typeof series,
  Serie,
  CreateSerieSchema,
  UpdateSerieSchema
>(series)
