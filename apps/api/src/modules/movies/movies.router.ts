import { privateProcedure, router } from '@api/server/trpc'
import { z } from 'zod'
import type { ListOptions } from './movies.service'
import { movieService } from './movies.service'
import { createMovieSchema, updateMovieSchema } from './movies.dtos'
import { listSchema } from '@api/shared/dto'

export const movieRouter = router({
  list: privateProcedure
    .input(listSchema)
    .query(({ input: { watched, query, page, limit }, ctx }) => {
      const opts: ListOptions = {
        page,
        take: limit,
        where: {
          watched,
          title: { contains: query, mode: 'insensitive' },
        },
      }
      return movieService.list(ctx.user.id, opts)
    }),
  create: privateProcedure
    .input(createMovieSchema)
    .mutation(({ input, ctx }) => movieService.create(ctx.user.id, input)),
  update: privateProcedure
    .input(updateMovieSchema)
    .mutation(({ input, ctx }) => movieService.update(ctx.user.id, input)),
  delete: privateProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(({ input, ctx }) => movieService.delete(ctx.user.id, input.id)),
})

// https://dev.to/nicklucas/trpc-patterns-router-factories-and-polymorphism-30b0
