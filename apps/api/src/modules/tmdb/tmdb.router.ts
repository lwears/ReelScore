import { z } from 'zod'
// import { TRPCError } from '@trpc/server'
// import { userDocs } from '@/openapi/user'
import { privateProcedure, publicProcedure, router } from '@api/server/trpc'
import { TmdbService } from './tmdbService'
import { mockData } from './mock'
import { serverConfig } from '@api/configs/env.config'

const tmdbService = new TmdbService({
<<<<<<< HEAD
  TOKEN: 'secretHere',
=======
  TOKEN: serverConfig.tmdbKey,
>>>>>>> 976004c (Removed accidentally added secret)
}).default

export const tmdbRouter = router({
  searchMovie: privateProcedure.input(z.string()).query(async ({ input }) => {
    //tmdbService.searchMovie(input)
    return mockData
  }),
})
