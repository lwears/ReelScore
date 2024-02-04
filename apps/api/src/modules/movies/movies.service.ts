import type { Prisma, Movie } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const create = (data: Prisma.MovieCreateInput): Promise<Movie> =>
  prisma.movie.create({ data })

const getAll = (): Promise<Movie[]> => prisma.movie.findMany()

export const movieService = {
  create,
  getAll,
}
