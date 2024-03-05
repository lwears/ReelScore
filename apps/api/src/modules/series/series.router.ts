import { privateProcedure, router } from '@api/server/trpc'
import { z } from 'zod'
import { serieService } from './series.service'
import { createSerieSchema } from './series.dtos'

export const serieRouter = router({
  getAll: privateProcedure
    .input(z.object({ watched: z.boolean() }))
    .query(({ input, ctx }) =>
      serieService.getAll(ctx.user.id, { watched: input.watched })
    ),
  create: privateProcedure
    .input(createSerieSchema)
    .mutation(({ input, ctx }) =>
      serieService.create({ ...input, User: { connect: { id: ctx.user.id } } })
    ),
  delete: privateProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(({ input, ctx }) => serieService.delete(input.id, ctx.user.id)),
})
