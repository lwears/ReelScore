import { privateProcedure, router } from '@api/server/trpc'
import type { inferRouterOutputs } from '@trpc/server'
import z from 'zod'
import { tmdbService } from './tmdb.service'

export const tmdbRouter = router({
  getSerieById: privateProcedure
    .input(z.object({ id: z.string().pipe(z.coerce.number()) }))
    .query(({ input: { id } }) => tmdbService.getSerieById({ id })),

  getMovieById: privateProcedure
    .input(z.object({ id: z.string().pipe(z.coerce.number()) }))
    .query(({ input: { id } }) => tmdbService.getMovieById({ id })),

  searchMulti: privateProcedure
    .input(
      z.object({
        query: z.string(),
        page: z.number().int().positive().optional(),
      })
    )
    .query(({ input: { page, query } }) =>
      tmdbService.searchMulti({ page, query })
    ),

  searchMovie: privateProcedure
    .input(
      z.object({
        query: z.string(),
        page: z.number().int().positive().optional(),
      })
    )
    .query(({ input: { page, query } }) =>
      tmdbService.searchMovie({ page, query })
    ),

  searchSerie: privateProcedure
    .input(
      z.object({
        query: z.string(),
        page: z.number().int().positive().optional(),
      })
    )
    .query(({ input: { page, query } }) =>
      tmdbService.searchSerie({ page, query })
    ),

  popularMovies: privateProcedure
    .input(
      z.object({
        page: z.number().int().positive().optional(),
      })
    )
    .query(({ input: { page } }) => tmdbService.getPopularMovies({ page })),

  popularSeries: privateProcedure
    .input(
      z.object({
        page: z.number().int().positive().optional(),
      })
    )
    .query(({ input: { page } }) => tmdbService.getPopularSeries({ page })),
}) satisfies ReturnType<typeof router>

export type TmdbRouter = typeof tmdbRouter
