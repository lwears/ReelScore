import { handleDatabaseError } from './index'

/**
 * Wrapper function that catches database errors and converts them to tRPC errors
 * Use this to wrap service functions that interact with the database
 *
 * @example
 * const create = withDbErrorHandling(async (userId: string, data: CreateMovieSchema) => {
 *   const [movie] = await db.insert(movies).values({ ...data, userId }).returning()
 *   return movie
 * })
 */
export function withDbErrorHandling<TArgs extends unknown[], TReturn>(
  fn: (...args: TArgs) => Promise<TReturn>
): (...args: TArgs) => Promise<TReturn> {
  return async (...args: TArgs): Promise<TReturn> => {
    try {
      return await fn(...args)
    } catch (error) {
      // handleDatabaseError always throws, so this never returns
      return handleDatabaseError(error) as never
    }
  }
}
