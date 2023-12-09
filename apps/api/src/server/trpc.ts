import { TRPCError, initTRPC } from '@trpc/server'
import superjson from 'superjson'
import type { Context } from './context'

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape
  },
})

export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({
      message: 'User not found',
      code: 'UNAUTHORIZED',
    })
  }
  return next({ ctx: { ...ctx, user: ctx.user } })
})

export const router = t.router
export const publicProcedure = t.procedure
