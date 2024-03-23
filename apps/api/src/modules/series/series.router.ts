import { privateProcedure, router } from '@api/server/trpc'
import { z } from 'zod'
import { serieService } from './series.service'
import { createSerieSchema, updateSerieSchema } from './series.dtos'
import { listSchema } from '@api/shared/dto'

export const serieRouter = router({
  list: privateProcedure
    .input(listSchema)
    .query(({ input: { watched, query, page, limit }, ctx }) =>
      serieService.list(
        ctx.user.id,
        {
          watched,
          title: { contains: query, mode: 'insensitive' },
        },
        page,
        limit
      )
    ),
  create: privateProcedure
    .input(createSerieSchema)
    .mutation(({ input, ctx }) => serieService.create(ctx.user.id, input)),

  update: privateProcedure
    .input(updateSerieSchema)
    .mutation(({ input, ctx }) => serieService.update(ctx.user.id, input)),

  delete: privateProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(({ input, ctx }) => serieService.delete(ctx.user.id, input.id)),
})
