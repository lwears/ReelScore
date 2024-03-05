import { z } from 'zod'
import { privateProcedure, publicProcedure, router } from '@api/server/trpc'
import { tmdbService } from './tmdb.service'

export const tmdbRouter = router({
  searchMulti: privateProcedure
    .input(
      z.object({
        query: z.string(),
        page: z.number().int().gte(0).lte(2_147_483_648),
      })
    )
    .query(async ({ input: { page, query } }) =>
      tmdbService.searchMulti({ page, query })
    ),
  searchMovie: privateProcedure
    .input(
      z.object({
        query: z.string(),
        page: z.number().int().gte(0).lte(2_147_483_648).optional(),
      })
    )
    .query(async ({ input: { page, query } }) =>
      tmdbService.searchMovie({ page, query })
    ),
  searchSerie: privateProcedure
    .input(
      z.object({
        query: z.string(),
        page: z.number().int().gte(0).lte(2_147_483_648).optional(),
      })
    )
    .query(async ({ input: { page, query } }) =>
      tmdbService.searchSerie({ page, query })
    ),
  popularMovies: privateProcedure
    .input(
      z.object({
        page: z.number().int().gte(0).lte(2_147_483_648).optional(),
      })
    )
    .query(async ({ input: { page } }) =>
      tmdbService.getPopularMovies({ page })
    ),
  popularSeries: privateProcedure
    .input(
      z.object({
        page: z.number().int().gte(0).lte(2_147_483_648).optional(),
      })
    )
    .query(async ({ input: { page } }) =>
      tmdbService.getPopularSeries({ page })
    ),
})
