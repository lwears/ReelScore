import { z } from 'zod'
// import { TRPCError } from '@trpc/server'
// import { userDocs } from '@/openapi/user'
import { privateProcedure, publicProcedure, router } from '@api/server/trpc'
import { TmdbService } from './tmdbService'
import { mockData } from './mock'

const tmdbService = new TmdbService({
  TOKEN: 'secretHere',
}).default

export const tmdbRouter = router({
  searchMovie: privateProcedure.input(z.string()).query(async ({ input }) => {
    return mockData
  }),
})
