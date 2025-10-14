import { type Movie, movies } from '@api/drizzle/schema'
import { createMediaService } from '@api/lib/factories/createMediaService'
import type { CreateMovieSchema, UpdateMovieSchema } from './movies.dtos'

// Re-export shared types for convenience
export type {
  ListOptions,
  Paginated,
} from '@api/lib/factories/createMediaService'

// Create the movie service using the generic factory
export const movieService = createMediaService<
  typeof movies,
  Movie,
  CreateMovieSchema,
  UpdateMovieSchema
>(movies)
