import { z } from 'zod'
import { privateProcedure, publicProcedure, router } from '@api/server/trpc'
import { TmdbService } from './tmdbService'
import { serverConfig } from '@api/configs/env.config'

const tmdbService = new TmdbService({
  TOKEN: serverConfig.tmdbKey,
}).default

export const tmdbRouter = router({
  searchMulti: privateProcedure
    .input(
      z.object({
        query: z.string(),
        page: z.number().int().gte(0).lte(2_147_483_648),
      }),
    )
    .query(async ({ input: { page, query } }) =>
      tmdbService.searchMulti(query, false, 'en-US', page),
    ),
})
