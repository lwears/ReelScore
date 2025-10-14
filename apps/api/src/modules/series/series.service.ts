import { type Serie, series } from '@api/drizzle/schema'
import { createMediaService } from '@api/lib/factories/createMediaService'
import type { CreateSerieSchema, UpdateSerieSchema } from './series.dtos'

// Re-export shared types for convenience
export type {
  ListOptions,
  Paginated,
} from '@api/lib/factories/createMediaService'

// Create the series service using the generic factory
export const serieService = createMediaService<
  typeof series,
  Serie,
  CreateSerieSchema,
  UpdateSerieSchema
>(series)
