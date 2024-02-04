import { userRouter } from '@api/modules/users/users.router'
import { privateProcedure, router } from './trpc'
import { tmdbRouter } from '@api/modules/tmdb/tmdb.router'
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import { movieRouter } from '@api/modules/movies/movies.router'
import { serieRouter } from '@api/modules/series/series.router'

export const appRouter = router({
  healthcheck: privateProcedure.query(() => 'yay!'),
  userRouter: userRouter,
  tmdbRouter: tmdbRouter,
  movieRouter: movieRouter,
  serieRouter: serieRouter,
})

export type AppRouter = typeof appRouter

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>
