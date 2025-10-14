import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'
import z, { ZodError } from 'zod'

import { env } from '@api/configs/env.config'
import type { Context } from './context'
export type { AppRouter } from './router'

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

const isAuthenticated = t.middleware(({ next, ctx }) => {
  if (!ctx.user) {
    throw new TRPCError({ message: 'Unauthorized', code: 'UNAUTHORIZED' })
  }
  return next({
    ctx: {
      user: ctx.user,
    },
  })
})

// Optional: Simulate lag only in development with specific header
const simulateLag = t.middleware(async ({ next, ctx }) => {
  // Only enable in development AND when explicitly requested
  if (env.NODE_ENV !== 'local' || !ctx.req.headers['x-simulate-lag']) {
    return next()
  }

  const start = Date.now()
  const result = await next()
  const end = Date.now()
  const completionTime = end - start
  const timeRemainder = 1000 - completionTime

  if (timeRemainder > 0) {
    await new Promise((resolve) => setTimeout(resolve, timeRemainder))
  }

  return result
})

export const router = t.router

// Removed simulateLag from default privateProcedure
// Add .use(simulateLag) to specific procedures if needed for testing
export const privateProcedure = t.procedure.use(isAuthenticated)

export const publicProcedure = t.procedure
// export const adminProcedure = t.procedure.use(isAdmin)
