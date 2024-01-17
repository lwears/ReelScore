import type { Prisma, Movie } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const create = (data: Prisma.MovieCreateInput): Promise<Movie> =>
  prisma.movie.create({ data })

export const movieService = {
  create,
}
