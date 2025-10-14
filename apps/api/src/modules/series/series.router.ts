import { privateProcedure, router } from '@api/server/trpc'
import { listSchema } from '@api/shared/dto'
import z from 'zod'
import { createSerieSchema, updateSerieSchema } from './series.dtos'
import type { ListOptions } from './series.service'
import { serieService } from './series.service'

export const serieRouter = router({
  list: privateProcedure
    .input(listSchema)
    .query(({ input: { watched, query, page, limit }, ctx }) => {
      const opts: ListOptions = {
        page,
        take: limit,
        where: {
          watched,
          ...(query && { title: { contains: query, mode: 'insensitive' } }),
        },
      }
      return serieService.list(ctx.user.id, opts)
    }),
  create: privateProcedure
    .input(createSerieSchema)
    .mutation(({ input, ctx }) => serieService.create(ctx.user.id, input)),

  update: privateProcedure
    .input(updateSerieSchema)
    .mutation(({ input, ctx }) => serieService.update(ctx.user.id, input)),

  delete: privateProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(({ input, ctx }) => serieService.delete(ctx.user.id, input.id)),
}) satisfies ReturnType<typeof router>

export type SerieRouter = typeof serieRouter
