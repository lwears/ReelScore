import { authRouter } from '../modules/auth/auth.router'
import { privateProcedure, publicProcedure, router } from './trpc'

export const appRouter = router({
  auth: authRouter,
  healthcheck: privateProcedure.query(() => 'yay!'),
})

export type AppRouter = typeof appRouter
