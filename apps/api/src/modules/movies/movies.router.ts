import { privateProcedure, publicProcedure, router } from '@api/server/trpc'
import { z } from 'zod'
import { movieService } from './movies.service'
import { createMovieSchema } from './movies.dtos'

export const movieRouter = router({
  getAll: privateProcedure
    .input(z.object({ watched: z.boolean() }))
    .query(({ input, ctx }) =>
      movieService.getAll(ctx.user.id, { watched: input.watched })
    ),
  create: privateProcedure
    .input(createMovieSchema)
    .mutation(({ input, ctx }) => {
      return movieService.create({
        ...input,
        User: { connect: { id: ctx.user.id } },
      })
    }),
  delete: privateProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(({ input, ctx }) => movieService.delete(input.id, ctx.user.id)),
})

// https://dev.to/nicklucas/trpc-patterns-router-factories-and-polymorphism-30b0
