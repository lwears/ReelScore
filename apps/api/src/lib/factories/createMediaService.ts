import { eq, and, desc, ilike, count, type SQL } from 'drizzle-orm'
import type { PgTable } from 'drizzle-orm/pg-core'
import db from '@api/db'
import { PAGE_SIZE } from '@api/constants'

export interface Paginated<T> {
  results: T[]
  page: number
  count: number
  totalPages: number
}

export interface ListOptions {
  where?: {
    watched?: boolean
    title?: { contains: string; mode: 'insensitive' }
  }
  page?: number
  take?: number
}

/**
 * Creates a generic CRUD service for media entities (movies, series, etc.)
 *
 * This factory eliminates code duplication between similar services (movies, series, etc.)
 * by providing a single implementation of common CRUD operations.
 *
 * Type Safety Note:
 * Drizzle's type system is extremely complex with deeply nested conditional types.
 * We use minimal type assertions (`as any` on .from() and .values()) to work with
 * the generic table parameter, but the function signatures remain fully typed,
 * providing type safety at the API boundary where it matters most.
 *
 * @template TTable - The Drizzle table type (typeof movies, typeof series, etc.)
 * @template TSelect - The entity type returned from queries (Movie, Serie, etc.)
 * @template TCreate - The creation input schema type
 * @template TUpdate - The update input schema type (must include id: string)
 *
 * @param table - Drizzle table instance that must have these columns:
 *                id, userId, title, watched, tmdbScore, updatedAt
 *
 * @returns Service object with fully typed CRUD methods
 *
 * @example
 * ```typescript
 * // Create a movie service
 * const movieService = createMediaService<
 *   typeof movies,
 *   Movie,
 *   CreateMovieSchema,
 *   UpdateMovieSchema
 * >(movies)
 *
 * // Use with full type safety
 * const movie: Movie = await movieService.create(userId, movieData)
 * const results: Paginated<Movie> = await movieService.list(userId, { page: 1 })
 * ```
 */
export function createMediaService<
  TTable extends PgTable,
  TSelect,
  TCreate,
  TUpdate extends { id: string }
>(table: TTable) {
  const create = async (userId: string, data: TCreate): Promise<TSelect> => {
    const [result] = await db
      .insert(table)
      .values({ ...data, userId } as any)
      .returning()
    return result as TSelect
  }

  const update = async (userId: string, data: TUpdate): Promise<TSelect> => {
    const [result] = await db
      .update(table)
      .set({ ...data, updatedAt: new Date() } as any)
      .where(and(eq((table as any).id, data.id), eq((table as any).userId, userId)))
      .returning()
    return result as TSelect
  }

  const list = async (
    userId: string,
    { page = 1, take = PAGE_SIZE, where }: ListOptions
  ): Promise<Paginated<TSelect>> => {
    const conditions: SQL[] = [eq((table as any).userId, userId)]

    if (where?.watched !== undefined) {
      conditions.push(eq((table as any).watched, where.watched))
    }

    if (where?.title?.contains) {
      conditions.push(ilike((table as any).title, `%${where.title.contains}%`))
    }

    const [totalCount, results] = await Promise.all([
      db
        .select({ count: count() })
        .from(table as any)
        .where(and(...conditions))
        .then((res) => res[0]?.count ?? 0),
      db
        .select()
        .from(table as any)
        .where(and(...conditions))
        .orderBy(desc((table as any).tmdbScore))
        .limit(take)
        .offset((page - 1) * take),
    ])

    return {
      results: results as TSelect[],
      count: totalCount,
      totalPages: Math.ceil(totalCount / take),
      page,
    }
  }

  const del = async (userId: string, id: string): Promise<TSelect> => {
    const [result] = await db
      .delete(table as any)
      .where(and(eq((table as any).id, id), eq((table as any).userId, userId)))
      .returning()
    return result as TSelect
  }

  return {
    create,
    update,
    list,
    delete: del,
  }
}
