import { privateProcedure, router } from '@api/server/trpc'
import { z } from 'zod'
import { serieService } from './series.service'
import { createSerieSchema } from './series.dtos'
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
    .mutation(({ input, ctx }) =>
      serieService.create({ ...input, User: { connect: { id: ctx.user.id } } })
    ),
  delete: privateProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(({ input, ctx }) => serieService.delete(input.id, ctx.user.id)),
})
