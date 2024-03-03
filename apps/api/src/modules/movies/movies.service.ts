import type { Prisma, Movie } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const create = (data: Prisma.MovieCreateInput): Promise<Movie> =>
  prisma.movie.create({ data })

const getAll = (
  userId: string,
  where?: Prisma.MovieWhereInput
): Promise<Movie[]> => prisma.movie.findMany({ where: { userId, ...where } })

const del = (id: Prisma.UserWhereUniqueInput['id'], userId: string) =>
  prisma.movie.delete({ where: { id, userId } })

export const movieService = {
  create,
  getAll,
  delete: del,
}
