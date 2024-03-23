import superjson from 'superjson'
import { ZodError } from 'zod'
import { initTRPC, TRPCError } from '@trpc/server'

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

// To Simulate lagging
const simulateLag = t.middleware(async ({ next, ctx }) => {
  if (ctx.req.headers['user-agent']?.includes('Next.js')) return next()
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

export const privateProcedure = t.procedure
  .use(isAuthenticated)
  .use(simulateLag)
export const publicProcedure = t.procedure
// export const adminProcedure = t.procedure.use(isAdmin)
