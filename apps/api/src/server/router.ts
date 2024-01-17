import { userRouter } from '@api/modules/users/users.router'
import { privateProcedure, router } from './trpc'
import { tmdbRouter } from '@api/modules/tmdb/tmdb.router'

export const appRouter = router({
  healthcheck: privateProcedure.query(() => 'yay!'),
  userRouter: userRouter,
  tmdbRouter: tmdbRouter,
})

export type AppRouter = typeof appRouter
