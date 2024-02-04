import { privateProcedure, publicProcedure, router } from '@api/server/trpc'
import { z } from 'zod'

export const serieRouter = router({
  getAll: privateProcedure
    .input(z.object({ watched: z.boolean() }))
    .query(({ ctx }) =>
      ctx.prisma.serie.findMany({ where: { userId: ctx.user.id } }),
    ),
})
