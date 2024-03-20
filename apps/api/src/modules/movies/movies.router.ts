import { privateProcedure, router } from '@api/server/trpc'
import { z } from 'zod'
import { movieService } from './movies.service'
import { createMovieSchema } from './movies.dtos'
import { listSchema } from '@api/shared/dto'

export const movieRouter = router({
  list: privateProcedure
    .input(listSchema)
    .query(({ input: { watched, query, page, limit }, ctx }) =>
      movieService.list(
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
    .input(createMovieSchema)
    .mutation(async ({ input, ctx }) => {
      const data = await movieService.create({
        ...input,
        User: { connect: { id: ctx.user.id } },
      })
      return data
    }),
  delete: privateProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(({ input, ctx }) => movieService.delete(input.id, ctx.user.id)),
})

// https://dev.to/nicklucas/trpc-patterns-router-factories-and-polymorphism-30b0
