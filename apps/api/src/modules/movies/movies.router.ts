import { privateProcedure, publicProcedure, router } from '@api/server/trpc'
import { z } from 'zod'

export const movieRouter = router({
  getAll: privateProcedure
    .input(z.object({ watched: z.boolean() }))
    .query(({ ctx }) =>
      ctx.prisma.movie.findMany({ where: { userId: ctx.user.id } }),
    ),
})

// https://dev.to/nicklucas/trpc-patterns-router-factories-and-polymorphism-30b0
