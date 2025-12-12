import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'
import z, { ZodError } from 'zod'
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

export const router = t.router

export const privateProcedure = t.procedure.use(isAuthenticated)

export const publicProcedure = t.procedure
// export const adminProcedure = t.procedure.use(isAdmin)
