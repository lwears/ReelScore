import { movieRouter } from '@api/modules/movies/movies.router'
import { serieRouter } from '@api/modules/series/series.router'
import { tmdbRouter } from '@api/modules/tmdb/tmdb.router'
import { userRouter } from '@api/modules/users/users.router'
import { router } from './trpc'

import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

export const appRouter = router({
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
